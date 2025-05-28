import { getImageUrl } from "@/lib/supabase";
import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getOrders() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        product: {
          include: {
            product: true,
          },
        },
      },
    });

    const response: TColumn[] = orders.map((order) => {
      return {
        id: order.id,
        customerName: order.user.name,
        price: Number(order.total),
        product: order.product?.map((item) => {
          return {
            name: item.product.name,
            imageUrl: getImageUrl(item.product.imageUrl[0]),
          };
        }),
        status: order.status,
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
