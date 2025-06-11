import { redirect } from "next/navigation";
import { getImageUrl } from "@/lib/supabase";
import prisma from "../../../../../../../lib/prisma";

export async function getProductById(slug: string) {
  try {
    const product = await prisma.product.findFirst({
      where: { slug },
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: { OrderProduct: true },
        },
        imageUrl: true,
        description: true,
        price: true,
        category: {
          select: { name: true },
        },
      },
    });

    if (!product) {
      return redirect("/");
    }

    return {
      ...product,
      images: product.imageUrl.map((img) => {
        return getImageUrl(img, "products");
      }),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
