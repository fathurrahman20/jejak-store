"use server";

import { schemaLocation } from "@/lib/schema";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { ActionResult } from "@/types";

export async function postLocation(_: unknown, formData: FormData) {
  const validate = schemaLocation.safeParse({
    name: formData.get("name"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  try {
    const checkDuplicate = await prisma.location.findUnique({
      where: { slug: validate.data.name.toLowerCase() },
    });

    if (checkDuplicate) {
      return {
        error: "Location already exists",
      };
    }

    await prisma.location.create({
      data: {
        name: validate.data.name,
        slug: validate.data.name.toLowerCase(),
      },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/locations");
  }

  return redirect("/dashboard/locations");
}

export async function updateLocation(
  _: unknown,
  formData: FormData,
  id: string | undefined,
  slug: string | undefined
) {
  const validate = schemaLocation.safeParse({
    name: formData.get("name"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  try {
    const checkDuplicate = await prisma.location.findUnique({
      where: { slug: validate.data.name.toLowerCase() },
    });

    //  return error if name has duplicate, but no error if slug === current slug
    if (checkDuplicate && checkDuplicate.slug !== slug) {
      return {
        error: "Location already exists",
      };
    }

    await prisma.location.update({
      where: { id },
      data: {
        name: validate.data.name,
        slug: validate.data.name.toLowerCase(),
      },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/locations");
  }

  return redirect("/dashboard/locations");
}

export async function deleteLocation(
  _: unknown,
  formData: FormData,
  id: string
): Promise<ActionResult> {
  try {
    const checkLocation = await prisma.location.findUnique({ where: { id } });
    if (!checkLocation) {
      return {
        error: "Location not found!",
      };
    }

    await prisma.location.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to delete data",
    };
  }

  return redirect("/dashboard/locations");
}
