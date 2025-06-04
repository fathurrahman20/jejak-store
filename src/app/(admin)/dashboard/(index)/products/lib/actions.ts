"use server";

import { schemaProduct, schemaProductEdit } from "@/lib/schema";
import { deleteFile, uploadFile } from "@/lib/supabase";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { ProductStock } from "@/generated/prisma";
import { createSlug } from "@/lib/utils";

export async function storeProduct(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = schemaProduct.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
    brandId: formData.get("brandId"),
    categoryId: formData.get("categoryId"),
    locationId: formData.get("locationId"),
    stock: formData.get("stock"),
    imageUrl: formData.getAll("imageUrl"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  const uploaded_images = parse.data.imageUrl as File[];
  const filenames = [];

  for (const image of uploaded_images) {
    const filename = await uploadFile(image, "products");
    filenames.push(filename);
  }

  try {
    await prisma.product.create({
      data: {
        name: parse.data.name,
        slug: createSlug(parse.data.name),
        description: parse.data.description,
        categoryId: parse.data.categoryId,
        locationId: parse.data.locationId,
        brandId: parse.data.brandId,
        price: Number.parseInt(parse.data.price),
        stock: parse.data.stock as ProductStock,
        imageUrl: filenames,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    console.error("Insert Product Error:", error);
    return {
      error: error?.message || "Failed to insert data product",
    };
    // return {
    //   error: "Failed to insert data product",
    // };
  }

  return redirect("/dashboard/products");
}

export async function updateProduct(
  _: unknown,
  formData: FormData,
  id: string
): Promise<ActionResult> {
  const parse = schemaProductEdit.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
    brandId: formData.get("brandId"),
    categoryId: formData.get("categoryId"),
    locationId: formData.get("locationId"),
    stock: formData.get("stock"),
    id: id,
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  if (!product) {
    return {
      error: "Product not found",
    };
  }

  const uploaded_images = formData.getAll("imageUrl") as File[];

  let filenames: string[] = [];

  if (uploaded_images.length === 3) {
    const parseImages = schemaProduct.pick({ imageUrl: true }).safeParse({
      imageUrl: uploaded_images,
    });

    if (!parseImages.success) {
      return {
        error: parseImages.error.errors[0].message,
      };
    }

    // delete old photo when new image uploaded
    for (const image of product.imageUrl) {
      await deleteFile(image, "products");
    }

    for (const image of uploaded_images) {
      const filename = await uploadFile(image, "products");
      filenames.push(filename);
    }
  } else {
    filenames = product.imageUrl;
  }

  try {
    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: parse.data.name,
        description: parse.data.description,
        categoryId: parse.data.categoryId,
        locationId: parse.data.locationId,
        brandId: parse.data.brandId,
        price: Number.parseInt(parse.data.price),
        stock: parse.data.stock as ProductStock,
        imageUrl: filenames,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to update data",
    };
  }

  return redirect("/dashboard/products");
}

export async function deleteProduct(
  _: unknown,
  formData: FormData,
  id: string
): Promise<ActionResult> {
  const product = await prisma.product.findFirst({
    where: { id },
    select: {
      id: true,
      imageUrl: true,
    },
  });

  if (!product) {
    return {
      error: "Product not found",
    };
  }

  try {
    for (const image of product.imageUrl) {
      await deleteFile(image, "products");
    }

    await prisma.product.delete({
      where: {
        id,
      },
    });

    // also deleted product photo
    for (const image of product.imageUrl) {
      await deleteFile(image, "products");
    }
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to delete data",
    };
  }

  return redirect("/dashboard/products");
}
