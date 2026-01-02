import { formatToRupiah } from "@/lib/utils";
import { TProduct } from "@/types";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: TProduct;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card block h-full"
    >
      {/* CHANGE: p-4 di mobile, p-5 di desktop. h-full agar sama tinggi */}
      <div className="bg-white flex flex-col gap-4 md:gap-[24px] p-4 md:p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full h-full">
        <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
          <img
            src={product.imageUrl}
            className="w-full h-full object-contain"
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1 justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-semibold leading-[22px] line-clamp-2">
              {product.name}
            </p>
            <p className="text-xs md:text-sm text-[#616369]">
              {product.categoryName}
            </p>
          </div>
          <p className="font-semibold text-[#3A4F41] leading-[22px] text-sm md:text-base">
            {formatToRupiah(Number(product.price))}
          </p>
        </div>
      </div>
    </Link>
  );
}
