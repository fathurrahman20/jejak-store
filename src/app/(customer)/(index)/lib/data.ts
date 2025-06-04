import { getImageUrl } from "@/lib/supabase";
import prisma from "../../../../../lib/prisma";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            Product: true,
          },
        },
      },
    });

    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        imageUrl: true,
        category: { select: { name: true } },
        price: true,
      },
    });

    const response = products.map((product) => {
      return {
        ...product,
        imageUrl: getImageUrl(product.imageUrl[0], "products"),
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({
      select: {
        logo_url: true,
        id: true,
      },
    });

    const response = brands.map((item) => {
      return {
        ...item,
        logo_url: getImageUrl(item.logo_url, "brands"),
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
