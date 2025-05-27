import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const schemaSignIn = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const schemaCategory = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Category Name must be at least 3 characters" }),
});

export const schemaLocation = schemaCategory.extend({});

export const schemaBrand = schemaCategory.extend({
  image: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "File is not valid",
    })
    .refine((file: File) => file.name, { message: "Image is required" }),
});

export const schemaProduct = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name should have min 4 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description should have min 4 characters" }),
  price: z.string({ required_error: "Price is required" }),
  stock: z.string({ required_error: "Stock is required" }),
  brandId: z.string({ required_error: "Brand is required" }),
  categoryId: z.string({ required_error: "Category is required" }),
  locationId: z.string({ required_error: "Location is required" }),
  imageUrl: z
    .any()
    .refine((files: File[]) => files.length === 3, {
      message: "Please upload 3 image product",
    })
    .refine(
      (files: File[]) => {
        let validate = false;

        Array.from(files).find((file) => {
          validate = ALLOW_MIME_TYPES.includes(file.type);
        });

        return validate;
      },
      {
        message: "Uploaded file should image",
      }
    ),
});

export const schemaProductEdit = schemaProduct
  .extend({
    id: z.string({ required_error: "Product Id is required" }),
  })
  .omit({ imageUrl: true });
