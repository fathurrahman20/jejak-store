import React from "react";

export default function DetailBenefits() {
  return (
    <div
      id="details-benefits"
      // CHANGE: flex-wrap untuk mobile, gap responsive
      className="container max-w-[1130px] mx-auto flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-[30px] lg:gap-[50px] justify-center mt-[30px] md:mt-[50px] px-4"
    >
      {/* Item 1 */}
      <div className="flex items-center gap-[10px] w-[45%] md:w-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img
            src="/assets/icons/star-outline.svg"
            alt="icon"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </div>
        <p className="font-semibold text-xs md:text-sm">
          Termasuk Garansi <br /> Resmi
        </p>
      </div>

      {/* Separator - Hidden on Mobile */}
      <div className="hidden md:block border-[0.5px] border-[#E5E5E5] h-12"></div>

      {/* Item 2 */}
      <div className="flex items-center gap-[10px] w-[45%] md:w-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img
            src="/assets/icons/code-circle.svg"
            alt="icon"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </div>
        <p className="font-semibold text-xs md:text-sm">
          Gratis Kaos Kaki <br /> Setiap Pembelian
        </p>
      </div>

      {/* Separator - Hidden on Mobile */}
      <div className="hidden md:block border-[0.5px] border-[#E5E5E5] h-12"></div>

      {/* Item 3 */}
      <div className="flex items-center gap-[10px] w-[45%] md:w-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img
            src="/assets/icons/like.svg"
            alt="icon"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </div>
        <p className="font-semibold text-xs md:text-sm">
          100% Asli <br /> Dari Pabrik
        </p>
      </div>

      {/* Separator - Hidden on Mobile */}
      <div className="hidden md:block border-[0.5px] border-[#E5E5E5] h-12"></div>

      {/* Item 4 */}
      <div className="flex items-center gap-[10px] w-[45%] md:w-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
          <img
            src="/assets/icons/tag.svg"
            alt="icon"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </div>
        <p className="font-semibold text-xs md:text-sm">
          Bebas Pajak <br /> Setiap Penjualan
        </p>
      </div>
    </div>
  );
}
