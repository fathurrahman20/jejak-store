import React, { Suspense } from "react";
import Navbar from "../../_components/navbar";
import { TSlugParams } from "@/types";
import { getProductById } from "./lib/data";
import { redirect } from "next/navigation";
import ProductList from "../../_components/product-list";
import CarouselImages from "./_components/carousel-images";
import PriceInfo from "./_components/price-info";
import { getUser } from "@/lib/auth";
import Testimonial from "./_components/testimonial";
import DetailBenefits from "./_components/detail-benefits";

export default async function DetailProductPage({ params }: TSlugParams) {
  const slug = (await params).slug;
  const { session } = await getUser();
  const product = await getProductById(slug);

  if (!product) {
    return redirect("/");
  }

  return (
    <>
      {/* CHANGE: Tinggi header responsive. Mobile h-auto, Desktop h-[480px] */}
      <header className="bg-[#EFF3FA] pt-[30px] h-auto pb-10 md:pb-0 md:h-[480px] md:-mb-[310px]">
        <div className="px-3 md:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* CHANGE: px-4 untuk padding mobile */}
      <div
        id="title"
        className="container max-w-[1130px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 xl:px-0 gap-5 md:gap-0 mt-5 md:mt-0"
      >
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex gap-3 md:gap-5 items-center">
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Shop
            </a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Browse
            </a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Details
            </a>
          </div>
          <h1 className="font-bold text-3xl md:text-4xl leading-9">
            {product.name}
          </h1>
        </div>
      </div>

      <CarouselImages images={product.images} />

      <DetailBenefits />

      {/* CHANGE: Flex-col-reverse di mobile (agar Price Info di atas Description jika mau), 
          atau Flex-col biasa. Di sini saya pakai lg:flex-row. 
          gap-10 untuk jarak antar elemen */}
      <div
        id="details-info"
        className="container max-w-[1130px] mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 mt-[50px] px-4 md:px-8 xl:px-0"
      >
        {/* Main Content (Description & Testi) */}
        <div className="max-w-full lg:max-w-[650px] w-full flex flex-col gap-[30px]">
          <div id="about" className="flex flex-col gap-[10px]">
            <h3 className="font-semibold text-lg">Tentang Produk</h3>
            <p className="leading-[32px] text-justify md:text-left text-[#6A7789] md:text-black">
              {product.description}
            </p>
          </div>
          <Testimonial />
        </div>

        {/* Sidebar (Price Info) - Order 2 on mobile (default), Order 2 on desktop */}
        {/* Jika ingin Price Info muncul DULUAN di mobile sebelum deskripsi, tambahkan class "order-first lg:order-last" */}
        <PriceInfo
          isLogIn={session ? true : false}
          item={{
            id: product.id,
            slug: product.slug,
            categoryName: product.category.name,
            imageUrl: product.images[0],
            name: product.name,
            price: Number(product.price),
          }}
        />
      </div>

      <div
        id="recommedations"
        className="container max-w-[1130px] mx-auto flex flex-col gap-[30px] pb-[100px] mt-[70px] px-4 md:px-8 xl:px-0"
      >
        <Suspense fallback={<span>Loading...</span>}>
          <ProductList
            title={
              <>
                Produk Lain <br className="hidden md:block" /> yang Mungkin Anda
                Butuhkan
              </>
            }
            isShowDetail={false}
          />
        </Suspense>
      </div>
    </>
  );
}
