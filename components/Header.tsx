"use client";
import Image from "next/image"
import Link from "next/link"
import logo from "../images/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="border-b bg-black h-14">
      <div className="flex items-center justify-between p-4 -translate-y-2">
        <Link href="/" className="font-bold shrink-0">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-24 lg:w-25 -translate-x-2.5 pr-4"
          />
        </Link>
        <div>
          <SearchBar />
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-[#d9d9d9] text-black px-3 py-1.5 text-sm rounded-full border border-gray-300 transition-colors duration-300 hover:bg-[#bfbfbf]">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Header;
