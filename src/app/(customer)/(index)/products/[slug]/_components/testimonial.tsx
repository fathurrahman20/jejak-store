import React from "react";

export default function Testimonial() {
  return (
    <div id="testi" className="flex flex-col gap-[10px]">
      <h3 className="font-semibold text-lg">Testimoni</h3>
      {/* CHANGE: grid-cols-1 untuk mobile, grid-cols-2 untuk desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex shrink-0">
                <img src="/assets/icons/Star.svg" alt="star" />
              </div>
            ))}
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
          </div>
          <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">
            I do really love this product helped me to achieve my first million
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
              <img
                src="/assets/photos/p1.png"
                className="w-full h-full object-cover rounded-full"
                alt="photo"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">
                Pipo Bungari
              </p>
              <p className="text-xs leading-[18px]">12 Juni 2028</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex shrink-0">
                <img src="/assets/icons/Star.svg" alt="star" />
              </div>
            ))}
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
          </div>
          <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">
            I do really love this product helped me to achieve my first million
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
              <img
                src="/assets/photos/p2.png"
                className="w-full h-full object-cover rounded-full"
                alt="photo"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">
                Joko Lemper
              </p>
              <p className="text-xs leading-[18px]">12 Juni 2025</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
          <div className="flex">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex shrink-0">
                <img src="/assets/icons/Star.svg" alt="star" />
              </div>
            ))}
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
          </div>
          <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">
            I do really love this product helped me to achieve my first million
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
              <img
                src="/assets/photos/p4.png"
                className="w-full h-full object-cover rounded-full"
                alt="photo"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">
                Udin Sarifun
              </p>
              <p className="text-xs leading-[18px]">12 Juni 2028</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex shrink-0">
                <img src="/assets/icons/Star.svg" alt="star" />
              </div>
            ))}
          </div>
          <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">
            I do really love this product helped me to achieve my first million
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
              <img
                src="/assets/photos/p3.png"
                className="w-full h-full object-cover rounded-full"
                alt="photo"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">
                Petina Malaka
              </p>
              <p className="text-xs leading-[18px]">12 Juni 2028</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
