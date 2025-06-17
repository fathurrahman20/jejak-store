import { getUser } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import NavbarLinks from "./navbar-links";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default async function Navbar() {
  const { session, user } = await getUser();
  return (
    <nav className="container max-w-[1130px] mx-auto flex items-center justify-between bg-[#3A4F41] p-5 rounded-3xl">
      <div className="flex shrink-0">
        <Link href="/">
          <img src="/assets/logos/logo.svg" alt="icon" />
        </Link>
      </div>
      <NavbarLinks />
      <div className="flex items-center gap-3">
        <Link href="/carts">
          <div className="w-12 h-12 flex shrink-0">
            <img src="/assets/icons/cart.svg" alt="icon" />
          </div>
        </Link>
        {session && user.role === "CUSTOMER" ? (
          <>
            <p className="text-white">Hi, {user.name}</p>

            <Menu as="div" className="relative ml-4 shrink-0">
              <div>
                <MenuButton className="relative flex text-sm bg-white rounded-full ring-2 ring-[#111827] focus:outline-none hover:ring-2 hover:ring-[#2a3e6b] focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <div className="w-[48px] h-[48px] flex shrink-0 rounded-full p-1 border overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${user.name}&size=64`}
                      className="w-full h-full object-cover rounded-full"
                      alt="photo"
                    />
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <MenuItem>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Your Profile
                  </Link>
                </MenuItem>
                <div className="my-1 h-px bg-black/5" />
                <MenuItem>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Order History
                  </Link>
                </MenuItem>
                <div className="my-1 h-px bg-black/5" />
                <form method="POST" action="/api/logout">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none cursor-pointer w-full text-start">
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </MenuItems>
            </Menu>
          </>
        ) : (
          <>
            <Link
              href="/sign-in"
              className="p-[12px_20px] bg-white rounded-full font-semibold">
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="p-[12px_20px] bg-white rounded-full font-semibold">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
