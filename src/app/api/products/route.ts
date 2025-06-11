import { Prisma } from "@/generated/prisma";
import { TFilter } from "@/hooks/useFilter";
import prisma from "../../../../lib/prisma";
import { TProduct } from "@/types";
import { getImageUrl } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const filter = (await request.json()) as TFilter;

    const query: Prisma.ProductWhereInput[] = [];

    if (filter.search && filter.search !== "")
      query.push({ name: { contains: filter.search, mode: "insensitive" } });
    if (filter.minPrice && filter.minPrice > 0)
      query.push({ price: { gte: filter.minPrice } });
    if (filter.maxPrice && filter.maxPrice > 0)
      query.push({ price: { lte: filter.maxPrice } });
    if (filter.stock !== null) query.push({ stock: { in: filter.stock } });
    if (filter.brands !== null)
      query.push({ brand: { id: { in: filter.brands } } });
    if (filter.categories !== null)
      query.push({ category: { id: { in: filter.categories } } });
    if (filter.locations !== null)
      query.push({ location: { id: { in: filter.locations } } });

    const products = await prisma.product.findMany({
      where: {
        OR: query.length > 0 ? query : undefined,
      },
      select: {
        id: true,
        imageUrl: true,
        name: true,
        slug: true,
        category: {
          select: { name: true },
        },
        price: true,
      },
    });

    const response: TProduct[] = products.map((product) => {
      return {
        id: product.id,
        slug: product.slug,
        imageUrl: getImageUrl(product.imageUrl[0], "products"),
        name: product.name,
        categoryName: product.category.name,
        price: Number(product.price),
      };
    });

    return Response.json(response);
  } catch (error) {
    console.error(error);
    return Response.json({ status: false }, { status: 500 });
  }
}
