"use server";

import { schemaCategory } from "@/lib/schema";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { ActionResult } from "@/types";

export async function postCategory(_: unknown, formData: FormData) {
  const validate = schemaCategory.safeParse({
    name: formData.get("name"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  try {
    const checkDuplicate = await prisma.category.findUnique({
      where: { slug: validate.data.name.toLowerCase() },
    });

    if (checkDuplicate) {
      return {
        error: "Category already exists",
      };
    }

    await prisma.category.create({
      data: {
        name: validate.data.name,
        slug: validate.data.name.toLowerCase(),
      },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/categories");
  }

  return redirect("/dashboard/categories");
}

export async function updateCategory(
  _: unknown,
  formData: FormData,
  id: string | undefined,
  slug: string | undefined
) {
  const validate = schemaCategory.safeParse({
    name: formData.get("name"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  try {
    const checkDuplicate = await prisma.category.findUnique({
      where: { slug: validate.data.name.toLowerCase() },
    });

    //  return error if name has duplicate, but no error if slug === current slug
    if (checkDuplicate && checkDuplicate.slug !== slug) {
      return {
        error: "Category already exists",
      };
    }

    await prisma.category.update({
      where: { id },
      data: {
        name: validate.data.name,
        slug: validate.data.name.toLowerCase(),
      },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/categories");
  }

  return redirect("/dashboard/categories");
}

export async function deleteCategory(
  _: unknown,
  formData: FormData,
  id: string
): Promise<ActionResult> {
  try {
    const checkCategory = await prisma.category.findUnique({ where: { id } });
    if (!checkCategory) {
      return {
        error: "Category not found!",
      };
    }

    await prisma.category.delete({
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

  return redirect("/dashboard/categories");
}
