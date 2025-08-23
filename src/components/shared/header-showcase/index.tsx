"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeaderShowcase() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "text-[#D3E97A] hover:text-lime-400 text-sm sm:text-base font-semibold uppercase transition cursor-pointer";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${mobileMenuVisible ? "bg-black" : "bg-black/70"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center px-4 py-4 w-full">
          <div className="hidden sm:flex space-x-6">
            <Link href={`${basePath}/`} className={linkStyle}>
              back
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuVisible(true)}
              className="text-[#D3E97A] hover:text-lime-400 text-2xl cursor-pointer"
              aria-label="Open menu"
            >
              <i className="ri-menu-line" />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuVisible && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8 px-6 sm:hidden">
          <button
            onClick={() => setMobileMenuVisible(false)}
            className="absolute top-4 right-4 text-[#D3E97A] hover:text-lime-400 text-3xl cursor-pointer"
            aria-label="Close menu"
          >
            <i className="ri-close-line" />
          </button>

          <Link
            href={`${basePath}/`}
            className={linkStyle}
            onClick={() => setMobileMenuVisible(false)}
          >
            back
          </Link>
        </div>
      )}
    </>
  );
}
