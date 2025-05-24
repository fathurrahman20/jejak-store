"use server";

import { schemaBrand } from "@/lib/schema";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { ActionResult } from "@/types";
import { deleteFile, uploadFile } from "@/lib/supabase";

export async function postBrand(_: unknown, formData: FormData) {
  const validate = schemaBrand.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  try {
    const checkDuplicate = await prisma.brand.findUnique({
      where: { slug: validate.data.name.toLowerCase() },
    });

    if (checkDuplicate) {
      return {
        error: "Brand already exists",
      };
    }

    const fileName = await uploadFile(validate.data.image);

    await prisma.brand.create({
      data: {
        name: validate.data.name,
        logo_url: fileName,
        slug: validate.data.name.toLowerCase(),
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to insert data",
    };
  }

  return redirect("/dashboard/brands");
}

export async function updateBrand(
  _: unknown,
  formData: FormData,
  id: string | undefined,
  slug: string | undefined
) {
  const fileUpload = formData.get("image") as File;

  const validate = schemaBrand.pick({ name: true }).safeParse({
    name: formData.get("name"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  const checkDuplicate = await prisma.brand.findUnique({
    where: { slug: validate.data.name.toLowerCase() },
  });

  //  return error if name has duplicate, but no error if slug === current slug
  if (checkDuplicate && checkDuplicate.slug !== slug) {
    return {
      error: "Brand already exists",
    };
  }

  const brand = await prisma.brand.findUnique({
    where: { id },
    select: { logo_url: true },
  });

  let fileName = brand?.logo_url;

  //   check if user upload/change new brand logo
  if (fileUpload.size > 0) {
    await deleteFile(brand?.logo_url);
    fileName = await uploadFile(fileUpload);
  }

  try {
    await prisma.brand.update({
      where: { id },
      data: {
        name: validate.data.name,
        logo_url: fileName,
        slug: validate.data.name.toLowerCase(),
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to update brand",
    };
  }

  return redirect("/dashboard/brands");
}

export async function deleteBrand(
  _: unknown,
  formData: FormData,
  id: string
): Promise<ActionResult> {
  try {
    const checkBrand = await prisma.brand.findUnique({ where: { id } });
    if (!checkBrand) {
      return {
        error: "Brand not found!",
      };
    }

    await deleteFile(checkBrand.logo_url);

    await prisma.brand.delete({
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

  return redirect("/dashboard/brands");
}
