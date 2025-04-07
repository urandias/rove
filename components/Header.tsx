"use client";
import Image from "next/image"
import Link from "next/link"
import logo from "../images/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <div className="border-b bg-black">
      <div className="flex items-center justify-between p-4">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-25"
            />
          </Link >
          <div >
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-[#d9d9d9] text-gray-800 px-3 py-1.5 text-sm rounded-full border border-gray-300 transition-colors duration-300 hover:bg-[#bfbfbf]">
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
