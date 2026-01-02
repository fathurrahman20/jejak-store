"use client";

import React, { useState } from "react";

interface CatalogLayoutProps {
  children: React.ReactNode;
}

export default function CatalogLayout({ children }: CatalogLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterSection = React.Children.toArray(children)[0];
  const productSection = React.Children.toArray(children)[1];

  return (
    <div className="container max-w-[1130px] mx-auto flex flex-col gap-6 mt-[30px] md:mt-[50px] pb-[100px] px-4 md:px-8 xl:px-0">
      {/* Tombol Toggle Filter Mobile & Desktop */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 p-[10px_20px] bg-white border border-[#E5E5E5] rounded-full font-semibold text-sm hover:bg-gray-50 transition-all active:scale-95"
        >
          <div className="w-5 h-5 flex shrink-0">
            {/* Ganti dengan <img src="/assets/icons/filter.svg" /> jika ada */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M3 7H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 12H18"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 17H14"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
        {/* Sidebar Filter dengan Animasi */}
        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${
              isFilterOpen
                ? "max-h-[2000px] opacity-100 lg:w-[300px] lg:max-h-none"
                : "max-h-0 opacity-0 lg:w-0 lg:opacity-0"
            }
          `}
        >
          {/* Wrapper div untuk width fix di desktop agar transisi smooth */}
          <div className="w-full lg:w-[300px]">{filterSection}</div>
        </div>

        {/* Product List Container */}
        <div className="w-full flex-1 flex flex-col bg-white p-5 md:p-[30px] gap-[30px] h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-xl md:text-2xl leading-[34px]">
            Products
          </h2>
          {productSection}
        </div>
      </div>
    </div>
  );
}
