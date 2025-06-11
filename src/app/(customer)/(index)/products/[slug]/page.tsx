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
      <header className="bg-[#EFF3FA] pt-[30px] h-[480px] -mb-[310px]">
        <Navbar />
      </header>
      <div
        id="title"
        className="container max-w-[1130px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
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
          <h1 className="font-bold text-4xl leading-9">{product.name}</h1>
        </div>
        {/* Avg Rating */}
        {/* <div className="flex items-center gap-2 justify-end">
          <div className="flex items-center">
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
          </div>
          <p className="font-semibold">({product._count.OrderProduct})</p>
        </div> */}
      </div>
      <CarouselImages images={product.images} />
      <DetailBenefits />
      <div
        id="details-info"
        className="container max-w-[1030px] mx-auto flex justify-between gap-5 mt-[50px]">
        <div className="max-w-[650px] w-full flex flex-col gap-[30px]">
          <div id="about" className="flex flex-col gap-[10px]">
            <h3 className="font-semibold">Tentang Produk</h3>
            <p className="leading-[32px]">{product.description}</p>
          </div>
          {/* START: Testimonial */}
          <Testimonial />
          {/* END: Testimonial */}
        </div>
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
        className="container max-w-[1130px] mx-auto flex flex-col gap-[30px] pb-[100px] mt-[70px]">
        <Suspense fallback={<span>Loading...</span>}>
          <ProductList
            title={
              <>
                Produk Lain <br /> yang Mungkin Anda Butuhkan
              </>
            }
            isShowDetail={false}
          />
        </Suspense>
      </div>
    </>
  );
}
