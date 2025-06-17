"use client";

import { useCart } from "@/hooks/useCart";
import { formatToRupiah } from "@/lib/utils";
import React from "react";

export default function CartProducts() {
  const { products, decreaseQuantity, increaseQuantity, removeProduct } =
    useCart();

  return (
    <div
      id="cart"
      className="container max-w-[1130px] mx-auto flex flex-col gap-5 mt-[50px]">
      {products.map((cart) => (
        <div
          key={cart.id + cart.name}
          className="product-total-card bg-white flex items-center justify-between p-5 rounded-[20px] border border-[#E5E5E5]">
          <div className="flex items-center w-[340px] gap-5">
            <div className="w-[120px] h-[70px] flex shrink-0 overflow-hidden items-center justify-center">
              <img
                src={cart.imageUrl}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold leading-[22px]">{cart.name}</p>
              <p className="text-sm text-[#616369]">{cart.categoryName}</p>
            </div>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-sm text-[#616369]">Harga</p>
            <p className="font-semibold text-[#3A4F41] leading-[22px]">
              {formatToRupiah(cart.price)}
            </p>
          </div>
          <div className="w-[120px] flex flex-col gap-1">
            <p className="text-sm text-[#616369]">Jumlah</p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => decreaseQuantity(cart.id)}
                className="w-6 h-6 flex shrink-0 cursor-pointer">
                <img src="assets/icons/minus-cirlce.svg" alt="minus" />
              </button>
              <p className="text-[#3A4F41] font-semibold leading-[22px]">
                {cart.quantity}
              </p>
              <button
                type="button"
                onClick={() => increaseQuantity(cart.id)}
                className="w-6 h-6 flex shrink-0 cursor-pointer">
                <img src="assets/icons/add-circle.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-sm text-[#616369]">Total</p>
            <p className="font-semibold text-[#3A4F41] leading-[22px]">
              {formatToRupiah(cart.price * cart.quantity)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeProduct(cart.id)}
            className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5]">
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}
