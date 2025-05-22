import prisma from "../../../../../../../lib/prisma";

export async function getCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
}
