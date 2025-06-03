"use server";

import { schemaSignUp } from "@/lib/schema";
import { ActionResult } from "@/types";
import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function signUp(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = schemaSignUp.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  const hashPassword = bcrypt.hashSync(parse.data.password, 12);

  try {
    await prisma.user.create({
      data: {
        email: parse.data.email,
        name: parse.data.name,
        password: hashPassword,
        role: "CUSTOMER",
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to sign up",
    };
  }

  return redirect("/sign-in");
}
