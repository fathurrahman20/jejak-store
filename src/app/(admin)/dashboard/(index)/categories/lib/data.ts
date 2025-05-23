import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";

export async function getCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCategoryById(id: string) {
  try {
    return await prisma.category.findUnique({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/categories");
  }
}
