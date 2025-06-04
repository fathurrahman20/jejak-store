"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarLinks() {
  const pathname = usePathname();
  console.log(`Ini Pathname: ${pathname}`);
  return (
    <ul className="flex items-center gap-[30px]">
      <li
        className={`hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold ${
          pathname === "/" ? "text-[#FFC736]" : "text-white"
        }`}>
        <Link href="#">Home</Link>
      </li>
      <li
        className={`hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold ${
          pathname === "/shop" ? "text-[#FFC736]" : "text-white"
        }`}>
        <Link href="#">Shop</Link>
      </li>
      <li
        className={`hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold ${
          pathname === "/categories" ? "text-[#FFC736]" : "text-white"
        }`}>
        <Link href="#">Categories</Link>
      </li>
    </ul>
  );
}
