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
      <div className="container max-w-[1130px] mx-auto flex items-center justify-between gap-1 mt-[50px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit">
            <div className="w-[22px] h-[22px] flex shrink-0">
              <img src="/assets/icons/crown.svg" alt="icon" />
            </div>
            <p className="font-semibold text-sm">Terpopuler & Terpercaya</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <h1 className="font-bold text-[55px] leading-[55px] text-black">
              Langkah Percaya Diri, Petualangan Menanti
            </h1>
            <p className="text-lg leading-[34px] text-[#6A7789]">
              Sepatu nyaman & stylish untuk setiap aktivitasmu, dari harian
              hingga petualangan.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href=""
              className="p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white">
              Tambah ke Keranjang
            </a>
            <a
              href=""
              className="p-[18px_24px] rounded-full font-semibold bg-white text-black">
              Lihat Detail
            </a>
          </div>
        </div>
        <div className="w-[588px] h-[360px] lg:flex shrink-0 overflow-hidden relative hidden">
          <img
            src="/assets/banners/hero.png"
            className="object-contain ml-[150px] scale-110"
            alt="icon"
          />
          <div className="absolute top-[60%] bg-white p-[14px_16px] rounded-3xl flex items-center gap-[10px]">
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
          <div className="absolute right-0 top-[30%] bg-white p-[14px_16px] rounded-3xl flex flex-col items-center gap-[10px]">
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
      <div className="container max-w-[1130px] mx-auto flex items-center justify-center gap-10 mt-[50px] text-black">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img
                src={review.image}
                className="w-full h-full object-cover"
                alt="photo"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">
                {review.review}
              </p>
              <p className="text-xs leading-[18px]">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
