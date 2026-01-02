"use client";

import React from "react";
import Flickity from "react-flickity-component";

interface CarouselImagesProp {
  images: string[];
}

export default function CarouselImages({ images }: CarouselImagesProp) {
  return (
    <div
      id="details-images"
      className="main-carousel overflow-x-hidden mt-[30px]"
    >
      <Flickity
        options={{
          cellAlign: "left",
          contain: true,
          pageDots: false,
          prevNextButtons: false,
          // CHANGE: groupCells agar swipe lebih natural di mobile
          groupCells: "100%",
        }}
      >
        {images.map((item, i) => (
          <div
            key={item + i}
            // CHANGE: responsive padding left untuk item pertama
            // CHANGE: width responsive w-[85vw] untuk mobile, w-[470px] untuk desktop
            className="image-card pr-3 md:pr-5 first-of-type:pl-4 md:first-of-type:pl-[calc((100vw-1130px-20px)/2)] xl:first-of-type:pl-[calc((100vw-1130px)/2)]"
          >
            <div className="bg-white w-[85vw] h-[300px] md:w-[470px] md:h-[350px] p-5 md:p-10 flex shrink-0 border border-[#E5E5E5] justify-center items-center rounded-[20px] md:rounded-[30px] overflow-hidden">
              <img
                src={item}
                className="w-full h-full object-contain"
                alt="thumbnail"
              />
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  );
}
