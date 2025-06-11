import React from "react";

export default function DetailBenefits() {
  return (
    <div
      id="details-benefits"
      className="container max-w-[1130px] mx-auto flex items-center gap-[50px] justify-center mt-[50px]">
      <div className="flex items-center gap-[10px]">
        <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img src="/assets/icons/star-outline.svg" alt="icon" />
        </div>
        <p className="font-semibold text-sm">
          Termasuk Garansi <br /> Resmi
        </p>
      </div>
      <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
      <div className="flex items-center gap-[10px]">
        <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img src="/assets/icons/code-circle.svg" alt="icon" />
        </div>
        <p className="font-semibold text-sm">
          Gratis Kaos Kaki <br /> Setiap Pembelian
        </p>
      </div>
      <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
      <div className="flex items-center gap-[10px]">
        <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img src="/assets/icons/like.svg" alt="icon" />
        </div>
        <p className="font-semibold text-sm">
          100% Asli <br /> Dari Pabrik
        </p>
      </div>
      <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
      <div className="flex items-center gap-[10px]">
        <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img src="/assets/icons/tag.svg" alt="icon" />
        </div>
        <p className="font-semibold text-sm">
          Bebas Pajak <br /> Setiap Penjualan
        </p>
      </div>
    </div>
  );
}
