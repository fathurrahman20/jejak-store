import React from "react";
import Navbar from "../_components/navbar";
import SearchBar from "./_components/search-bar";
import FilterPrice from "./_components/filter-price";
import FilterStock from "./_components/filter-stock";
import FilterBrands from "./_components/filter-brands";
import FilterLocation from "./_components/filter-location";
import FilterCategories from "./_components/filter-categories";
import ProductList from "./_components/product-list";
import CatalogLayout from "./_components/catalog-layout"; // Import komponen baru

export default function ProductsPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] h-auto pb-10 md:h-[351px] md:-mb-[181px] md:pb-0">
        <div className="px-3 md:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>
      <SearchBar />

      {/* Menggunakan Client Component Wrapper */}
      <CatalogLayout>
        {/* Child 1: Bagian Filter */}
        <form
          action=""
          className="flex flex-col bg-white p-5 md:p-[30px] gap-5 h-fit border border-[#E5E5E5] rounded-[30px]"
        >
          <h2 className="font-bold text-xl md:text-2xl leading-[34px]">
            Filters
          </h2>
          <FilterPrice />
          <hr className="border-[#E5E5E5]" />
          <FilterStock />
          <hr className="border-[#E5E5E5]" />
          <FilterBrands />
          <hr className="border-[#E5E5E5]" />
          <FilterLocation />
          <hr className="border-[#E5E5E5]" />
          <FilterCategories />
        </form>

        {/* Child 2: Bagian Produk (Wrapper div-nya sudah dihandle di CatalogLayout) */}
        <ProductList />
      </CatalogLayout>
    </>
  );
}
