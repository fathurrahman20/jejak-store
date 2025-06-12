"use server";

import { getUser } from "@/lib/auth";
import { schemaShippingAddress } from "@/lib/schema";
import { TCart } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../lib/prisma";
import { generateRandomString } from "@/lib/utils";
import {
  PaymentRequest,
  PaymentRequestParameters,
} from "xendit-node/payment_request/models";
import xenditClient from "@/lib/xendit";
import { Prisma } from "@/generated/prisma";

export async function storeOrder(
  _: unknown,
  formData: FormData,
  total: number,
  products: TCart[]
) {
  const { session, user } = await getUser();

  if (!session) return redirect("/");

  const parse = schemaShippingAddress.safeParse({
    name: formData.get("name"),
    address: formData.get("address"),
    city: formData.get("city"),
    postalCode: formData.get("postalCode"),
    notes: formData.get("notes"),
    phone: formData.get("phone"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  let redirectPaymentUrl = "/";

  try {
    const order = await prisma.order.create({
      data: {
        total,
        status: "PENDING",
        userId: user.id,
        code: generateRandomString(15),
      },
    });

    const data: PaymentRequestParameters = {
      amount: total,
      currency: "IDR",
      paymentMethod: {
        ewallet: {
          channelProperties: {
            successReturnUrl: process.env.NEXT_PUBLIC_REDIRECT_URL,
          },
          channelCode: "SHOPEEPAY",
        },
        reusability: "ONE_TIME_USE",
        type: "EWALLET",
      },
      referenceId: order.code,
    };

    const response: PaymentRequest =
      await xenditClient.PaymentRequest.createPaymentRequest({ data });

    redirectPaymentUrl =
      response.actions?.find((val) => val.urlType === "DEEPLINK")?.url ?? "/";

    const queryCreateProductOrder: Prisma.OrderProductCreateManyInput[] = [];

    for (const product of products) {
      queryCreateProductOrder.push({
        orderId: order.id,
        productId: product.id,
        quantity: product.quantity,
        subtotal: product.price,
      });
    }

    await prisma.orderProduct.createMany({
      data: queryCreateProductOrder,
    });

    await prisma.orderDetail.create({
      data: {
        address: parse.data.address,
        city: parse.data.city,
        name: parse.data.name,
        phone: parse.data.phone,
        postalCode: parse.data.postalCode,
        notes: parse.data.notes,
        orderId: order.id,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to checkout",
    };
  }

  return redirect(redirectPaymentUrl);
}
