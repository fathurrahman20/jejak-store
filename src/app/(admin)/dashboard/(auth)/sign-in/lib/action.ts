"use server";

import { schemaSignIn } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export async function SignIn(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = schemaSignIn.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: validate.data.email,
      role: "SUPERADMIN",
    },
  });

  if (!existingUser) {
    return {
      error: "Invalid email or password. Please try again.",
    };
  }

  const isPasswordCorrect = bcrypt.compareSync(
    validate.data.password,
    existingUser.password
  );

  if (!isPasswordCorrect) {
    return {
      error: "Invalid email or password. Please try again.",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard");
}
