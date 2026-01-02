import React from "react";
import { getBrands } from "../lib/data";
import Link from "next/link";

export default async function BrandList() {
  const brands = await getBrands();
  return (
    <div id="brands" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl md:text-2xl leading-[34px]">
          Brand Populer <br /> Pilihan Kami
        </h2>
        <a
          href="#"
          className="p-[10px_16px] md:p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-sm md:text-base text-nowrap"
        >
          Explore All
        </a>
      </div>
      {/* CHANGE: grid responsive */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-[30px]">
        {brands.map((brand) => (
          <Link key={brand.id} href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[20px] md:p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full h-[100px]">
              <div className="w-full h-full flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src={brand.logo_url}
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
