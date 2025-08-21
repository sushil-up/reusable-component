"use client";

import React, { useState } from "react";
import {  Menu, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/login");
  };
  return (
    <>
      <header className=" sticky top-0 z-50 backdrop-blur border-none rounded-full w-full py-5 px-4">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
          <div className="flex items-center ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m19.01 11.55-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0ZM19.17 3.34c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z"
                class="b"
              ></path>
            </svg>
            <div className="ml-2 text-lg font-semibold ">Shadcn UI 
            
            </div>
            <div className="ml-2 text-sm text-gray-500">
            version: 2.10.0
              </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {/* <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Docs
            </Link> */}
            {/* <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Components
            </Link> */}
            {/* <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Blog
            </Link> */}
            {/* <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Showcase
            </Link> */}
          </div>
          <div className="flex items-center space-x-4">
            {/* <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-400 hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer hidden text-black md:inline-flex border-slate-700 hover:bg-slate-800 hover:bg-slate-200 transition-colors"
              onClick={handleRedirect}
            >
              <LogIn />
              Sign in
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default SiteHeader;
