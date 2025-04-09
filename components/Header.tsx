"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <div className="border-b bg-black h-14">
        <div className="flex items-center justify-between p-4 -translate-y-2">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-25 -translate-x-2.5 mr-12 -translate-y-0.75"
            />
          </Link>
          <div className="-translate-x-6 pl-2">
            <SearchBar />
          </div>

          <div className="hidden lg:block ml-auto">
            <SignedIn>
              <div className="flex items-center gap-3">
                <Link href="/seller">
                  <button className="bg-[#4056f4] text-white px-3 py-1.5 text-sm rounded-full hover:bg-[#3245c2] transition font-bold">
                    Sell Tickets
                  </button>
                </Link>
                <Link href="/tickets">
                  <button className="bg-white text-gray-800 px-3 py-1.5 text-sm rounded-full hover:bg-gray-200 transition border border-gray-300 mr-3 font-bold">
                    My Tickets
                  </button>
                </Link>
              </div>
            </SignedIn>
          </div>

          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-white text-black px-3 py-1.5 text-sm rounded-full border border-[#d9d9d9]transition-colors duration-300 hover:bg-gray-200 font-bold">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full flex justify-between px-2 gap-3 mt-2">
        <SignedIn>
          <Link href="/seller" className="flex-1">
            <button className="w-full bg-[#4056f4] text-white px-3 py-1.5 text-sm rounded-full hover:bg-[#3245c2] transition font-bold">
              Sell Tickets
            </button>
          </Link>
          <Link href="/tickets" className="flex-1">
            <button className="w-full bg-white text-gray-800 px-3 py-1.5 text-sm rounded-full hover:bg-white transition border border-gray-200 font-bold">
              My Tickets
            </button>
          </Link>
        </SignedIn>
      </div>
    </>
  );
}

export default Header;
