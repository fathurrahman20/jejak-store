"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-white rounded-full text-[#3A4F41] hover:bg-gray-100 transition-colors mr-2"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full px-4 z-50">
          <div className="bg-white rounded-3xl p-5 border border-[#E5E5E5] shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="p-3 hover:bg-gray-50 rounded-xl font-semibold text-[#3A4F41]"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="p-3 hover:bg-gray-50 rounded-xl font-semibold text-[#3A4F41]"
            >
              Shop
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
