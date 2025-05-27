import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        _count: {
          select: { OrderProduct: true },
        },
        name: true,
        createdAt: true,
        price: true,
        stock: true,
        category: {
          select: {
            name: true,
          },
        },
        brand: {
          select: {
            name: true,
          },
        },
        imageUrl: true,
      },
    });

    const response_products: TColumn[] = products.map((product) => {
      return {
        brandName: product.brand.name,
        categoryName: product.category.name,
        createdAt: product.createdAt,
        imageUrl: product.imageUrl[0],
        id: product.id,
        name: product.name,
        price: Number(product.price),
        stock: product.stock,
        totalSales: product._count.OrderProduct,
      };
    });

    return response_products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
}
