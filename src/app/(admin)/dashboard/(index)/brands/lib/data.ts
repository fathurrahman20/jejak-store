import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";

export async function getBrands() {
  try {
    return await prisma.brand.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBrandById(id: string) {
  try {
    return await prisma.brand.findUnique({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/brand");
  }
}
