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
      // CHANGE: padding px-4
      className="container max-w-[1130px] mx-auto flex flex-col gap-5 mt-[30px] md:mt-[50px] px-4 md:px-8 xl:px-0"
    >
      {products.map((cart) => (
        <div
          key={cart.id + cart.name}
          // CHANGE: flex-col di mobile, md:flex-row di desktop
          className="product-total-card bg-white flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 gap-4 md:gap-0 rounded-[20px] border border-[#E5E5E5]"
        >
          {/* Image & Name Section */}
          <div className="flex items-center w-full md:w-[340px] gap-5">
            <div className="w-[80px] h-[80px] md:w-[120px] md:h-[70px] flex shrink-0 overflow-hidden items-center justify-center bg-gray-50 rounded-xl md:rounded-none">
              <img
                src={cart.imageUrl}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold leading-[22px] line-clamp-2">
                {cart.name}
              </p>
              <p className="text-sm text-[#616369]">{cart.categoryName}</p>
            </div>
          </div>

          {/* Wrapper untuk detail mobile (Harga, Qty, Total) agar rapi */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between">
            {/* Price Section */}
            <div className="w-full md:w-[150px] flex flex-row justify-between md:flex-col gap-1">
              <p className="text-sm text-[#616369]">Harga</p>
              <p className="font-semibold text-[#3A4F41] leading-[22px]">
                {formatToRupiah(cart.price)}
              </p>
            </div>

            {/* Quantity Section */}
            <div className="w-full md:w-[120px] flex flex-row justify-between md:flex-col gap-1">
              <p className="text-sm text-[#616369]">Jumlah</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(cart.id)}
                  className="w-6 h-6 flex shrink-0 cursor-pointer hover:opacity-80"
                >
                  <img src="assets/icons/minus-cirlce.svg" alt="minus" />
                </button>
                <p className="text-[#3A4F41] font-semibold leading-[22px]">
                  {cart.quantity}
                </p>
                <button
                  type="button"
                  onClick={() => increaseQuantity(cart.id)}
                  className="w-6 h-6 flex shrink-0 cursor-pointer hover:opacity-80"
                >
                  <img src="assets/icons/add-circle.svg" alt="plus" />
                </button>
              </div>
            </div>

            {/* Total Section */}
            <div className="w-full md:w-[150px] flex flex-row justify-between md:flex-col gap-1">
              <p className="text-sm text-[#616369]">Total</p>
              <p className="font-bold text-[#3A4F41] leading-[22px]">
                {formatToRupiah(cart.price * cart.quantity)}
              </p>
            </div>

            {/* Delete Button */}
            <button
              type="button"
              onClick={() => removeProduct(cart.id)}
              className="w-full md:w-auto p-[10px_20px] md:p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] text-red-500 md:text-black hover:bg-red-50 md:hover:bg-gray-50 transition-colors text-sm md:text-base"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
