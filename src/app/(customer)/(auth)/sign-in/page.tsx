"use client";

import { ActionResult } from "@/types";
import React, { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { signIn } from "../lib/actions";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const initialFormState: ActionResult = {
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="p-[12px_24px] cursor-pointer bg-[#3A4F41] rounded-full text-center font-semibold text-white hover:bg-[#2c3d32] transition-colors"
    >
      {pending ? "Loading..." : "Sign In to My Account"}
    </button>
  );
}

export default function SignInPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [state, formAction] = useActionState(signIn, initialFormState);

  return (
    <div
      id="signin"
      // CHANGE: Menambahkan px-4 agar ada jarak aman di kiri-kanan layar HP
      className="bg-[#EFF3FA] min-h-screen pt-[30px] pb-[50px] flex flex-col px-4"
    >
      <div className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center py-5">
        <form
          action={formAction}
          // CHANGE:
          // 1. w-[500px] -> w-full max-w-[500px] (Agar fleksibel di mobile, tapi limit di desktop)
          // 2. p-[50px_30px] -> p-6 md:p-[50px_30px] (Padding lebih kecil di mobile)
          className="w-full max-w-[500px] bg-white p-6 md:p-[50px_30px] flex flex-col gap-5 rounded-3xl border border-[#E5E5E5]"
        >
          <Link href="/">
            <div className="flex justify-center">
              <img src="/assets/logos/logo-black.svg" alt="logo" />
            </div>
          </Link>
          <h1 className="font-bold text-2xl leading-[34px] text-black text-center md:text-left">
            Sign In
          </h1>

          {state.error !== "" && (
            <div className="border border-red-300 text-red-500 p-3 rounded bg-red-50">
              <h4 className="font-semibold">Error</h4>
              <p className="text-sm">{state.error}</p>
            </div>
          )}

          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="./assets/icons/sms.svg" alt="icon" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              // CHANGE: text-sm md:text-base untuk kenyamanan baca
              className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black text-sm md:text-base"
              placeholder="Write your email address"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="./assets/icons/lock.svg" alt="icon" />
              </div>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black text-sm md:text-base"
                placeholder="Write your password"
              />
              <button
                type="button"
                className="reveal-password flex shrink-0 text-black hover:text-[#FFC736] transition-colors"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {/* <a href="" className="text-sm text-[#616369] underline w-fit mr-0 ml-auto">Forgot Password</a> */}
          </div>
          <div className="flex flex-col gap-3">
            <SubmitButton />
            <Link
              href="/sign-up"
              className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] text-black hover:bg-gray-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
