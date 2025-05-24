import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";

export async function getLocations() {
  try {
    return await prisma.location.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getLocationById(id: string) {
  try {
    return await prisma.location.findUnique({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/locations");
  }
}
