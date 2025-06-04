import React, { Suspense } from "react";
import Navbar from "./_components/navbar";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import BrandList from "./_components/brand-list";
import Hero from "./_components/hero";

export default function LandingPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <Navbar />
        <Hero />
      </header>
      <section
        id="content"
        className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px]">
        {/* TODO: Change Loading with skeleton */}
        <Suspense fallback={<span>Loading...</span>}>
          <CategoryList />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          {/* TODO: Change order with most picked */}
          <ProductList
            title={
              <span>
                Favorit Para Penjejak <br /> Kualitas Unggulan
              </span>
            }
          />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <BrandList />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          {/* TODO: Change order with current added */}
          <ProductList
            title={
              <span>
                Pendatang Baru <br /> Untuk Jejak Terbaikmu
              </span>
            }
          />
        </Suspense>
      </section>
    </>
  );
}
