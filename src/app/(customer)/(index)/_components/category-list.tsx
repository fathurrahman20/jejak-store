import React from "react";
import { getCategories } from "../lib/data";
import Link from "next/link";

export default async function CategoryList() {
  const categories = await getCategories();
  return (
    <div id="categories" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl md:text-2xl leading-[34px]">
          Pilih Kategori <br /> Sesuai Aktivitasmu
        </h2>
        <a
          href="#"
          className="p-[10px_16px] md:p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-sm md:text-base text-nowrap"
        >
          Explore All
        </a>
      </div>
      {/* CHANGE: grid-cols-2 pada mobile, md:grid-cols-3, lg:grid-cols-4 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[30px]">
        {categories.map((category) => (
          <Link
            href=""
            key={`${category.id} + ${category.slug}}`}
            className="categories-card"
          >
            <div className="bg-white flex items-center gap-[14px] p-4 md:p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full h-full">
              <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#3A4F41] items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/mobile.svg"
                  alt="icon"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div className="flex flex-col gap-[2px] overflow-hidden">
                <p className="font-semibold leading-[22px] text-black text-sm md:text-base truncate">
                  {category.name}
                </p>
                <p className="text-xs md:text-sm text-[#616369]">
                  {category._count.Product} products
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
