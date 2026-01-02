import React, { Suspense } from "react";
import Navbar from "./_components/navbar";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import BrandList from "./_components/brand-list";
import Hero from "./_components/hero";
import ProductCardSkeleton from "./_components/product-card-skeleton";
import CategoryListSkeleton from "./_components/categoty-list-skeleton";
import BrandListSkeleton from "./_components/brand-list-skeleton";

export default function LandingPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <div className="px-3 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <Hero />
      </header>
      <section
        id="content"
        // CHANGE: max-w full dengan padding px-4 untuk mobile, md:px-8 untuk tablet
        className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px] px-4 md:px-8 xl:px-0"
      >
        <Suspense fallback={<CategoryListSkeleton />}>
          <CategoryList />
        </Suspense>
        <Suspense fallback={<ProductCardSkeleton />}>
          {/* TODO: Change order with most picked */}
          <ProductList
            title={
              <span>
                Favorit Para Penjejak <br className="hidden md:block" />{" "}
                Kualitas Unggulan
              </span>
            }
          />
        </Suspense>
        <Suspense fallback={<BrandListSkeleton />}>
          <BrandList />
        </Suspense>
        <Suspense fallback={<ProductCardSkeleton />}>
          {/* TODO: Change order with current added */}
          <ProductList
            title={
              <span>
                Pendatang Baru <br className="hidden md:block" /> Untuk Jejak
                Terbaikmu
              </span>
            }
          />
        </Suspense>
      </section>
    </>
  );
}
