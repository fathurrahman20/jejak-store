import React from "react";

const reviews = [
  {
    image: "/assets/photos/p1.png",
    name: "Pipo Bungari",
    review: "Sepatunya empuk banget!",
  },
  {
    image: "/assets/photos/p2.png",
    name: "Joko Lemper",
    review: "Harga ramah, kualitas wah!",
  },
  {
    image: "/assets/photos/p3.png",
    name: "Petina Malaka",
    review: "Dapet bonus kaos kaki juga 😍",
  },
  {
    image: "/assets/photos/p4.png",
    name: "Udin Sarifun",
    review: "Ukuran pas, pengiriman cepat!",
  },
];

export default function Hero() {
  return (
    <>
      {/* CHANGE: flex-col pada mobile, lg:flex-row pada desktop. px-4 untuk padding samping */}
      <div className="container max-w-[1130px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-1 mt-[50px] px-4 md:px-8 xl:px-0">
        {/* Text Section */}
        <div className="flex flex-col gap-[30px] items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
          <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit shadow-sm">
            <div className="w-[22px] h-[22px] flex shrink-0">
              <img src="/assets/icons/crown.svg" alt="icon" />
            </div>
            <p className="font-semibold text-sm">Terpopuler & Terpercaya</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            {/* CHANGE: text size responsive (text-[36px] -> lg:text-[55px]) */}
            <h1 className="font-bold text-[36px] md:text-[45px] lg:text-[55px] leading-tight lg:leading-[55px] text-black">
              Langkah Percaya Diri, Petualangan Menanti
            </h1>
            <p className="text-base md:text-lg leading-[28px] md:leading-[34px] text-[#6A7789]">
              Sepatu nyaman & stylish untuk setiap aktivitasmu, dari harian
              hingga petualangan.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full justify-center lg:justify-start">
            <a
              href=""
              className="p-[14px_20px] md:p-[18px_24px] rounded-full font-semibold bg-[#3A4F41] text-white text-sm md:text-base"
            >
              Tambah ke Keranjang
            </a>
            <a
              href=""
              className="p-[14px_20px] md:p-[18px_24px] rounded-full font-semibold bg-white text-black text-sm md:text-base border border-gray-200"
            >
              Lihat Detail
            </a>
          </div>
        </div>

        {/* Image Section - Hidden on mobile/tablet (per original code design intention), visible on LG */}
        <div className="w-full lg:w-[588px] h-[360px] hidden lg:flex shrink-0 overflow-hidden relative">
          <img
            src="/assets/banners/hero.png"
            className="object-contain ml-[150px] scale-110"
            alt="icon"
          />
          <div className="absolute top-[60%] bg-white p-[14px_16px] rounded-3xl flex items-center gap-[10px] shadow-lg">
            <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
              <img
                src="/assets/icons/code-circle.svg"
                className="w-6 h-6"
                alt="icon"
              />
            </div>
            <p className="font-semibold text-sm text-black">
              Gratis Kaos Kaki <br /> Setiap Pembelian
            </p>
          </div>
          <div className="absolute right-0 top-[30%] bg-white p-[14px_16px] rounded-3xl flex flex-col items-center gap-[10px] shadow-lg">
            <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
              <img
                src="/assets/icons/star-outline.svg"
                className="w-6 h-6"
                alt="icon"
              />
            </div>
            <p className="font-semibold text-sm text-center text-black">
              Garansi 7 Hari <br /> Tukar ukuran
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {/* CHANGE: flex-wrap agar review turun ke bawah jika layar sempit */}
      <div className="container max-w-[1130px] mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-[50px] text-black px-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full border-[3px] md:border-[5px] border-white overflow-hidden shadow-sm">
              <img
                src={review.image}
                className="w-full h-full object-cover"
                alt="photo"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-xs md:text-sm leading-[22px]">
                {review.review}
              </p>
              <p className="text-[10px] md:text-xs leading-[18px] text-gray-500">
                {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
