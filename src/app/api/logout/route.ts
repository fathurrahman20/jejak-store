// /app/api/logout/route.ts

import { lucia } from "@/lib/auth"; // Impor instance lucia Anda
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_: unknown) {
  // 1. Validasi sesi yang ada dari cookie
  const sessionId =
    (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    // Jika tidak ada sesi, anggap sudah logout
    // dan arahkan ke halaman login
    return redirect("/sign-in");
  }

  // 2. Invalidasi sesi di database
  await lucia.invalidateSession(sessionId);

  // 3. Buat cookie kosong untuk menghapus cookie di browser
  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  // 4. Arahkan pengguna ke halaman login
  return redirect("/sign-in");
}
