import React from "react";
import Navbar from "../_components/navbar";
import CartProducts from "./_components/cart-product";
import CheckoutForm from "./_components/checkout-form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CartsPage() {
  const { session } = await getUser();

  if (!session) {
    return redirect("/");
  }
  return (
    <>
      {/* CHANGE: h-auto pb-10 di mobile, fixed height di desktop */}
      <header className="bg-[#EFF3FA] pt-[30px] h-auto pb-10 md:h-[480px] md:-mb-[310px] md:pb-0">
        <div className="px-3 md:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>
      <div
        id="title"
        // CHANGE: px-4 padding horizontal & margin top responsive
        className="container max-w-[1130px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 xl:px-0 gap-5 md:gap-0 mt-5 md:mt-0"
      >
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex gap-3 md:gap-5 items-center">
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Shop
            </a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Browse
            </a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Details
            </a>
          </div>
          <h1 className="font-bold text-3xl md:text-4xl leading-9">
            Keranjang Saya
          </h1>
        </div>
      </div>
      <CartProducts />
      <CheckoutForm />
    </>
  );
}
