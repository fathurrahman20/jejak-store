"use server";

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function Logout(): Promise<ActionResult> {
  const { session } = await getUser();

  if (!session) {
    return {
      error: "You are not logged in",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard/sign-in");
}
