"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "text-[#D3E97A] hover:text-lime-400 text-sm sm:text-base font-semibold uppercase transition cursor-pointer";

  return (
    <>
      <nav
        className={`fixed px-4 top-5 left-0 w-full z-50 flex justify-center transition-all duration-300 ${
          showHeader
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-full sm:w-6/12 mx-auto flex justify-between items-center px-6 py-3
          rounded-xl sm:rounded-3xl backdrop-blur-md overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent bg-[length:200%_200%] animate-bg-move"></div>
          <div className="relative z-10 flex w-full justify-between items-center">
            <div className="hidden sm:flex space-x-8 mx-auto">
              <Link href={`${basePath}#about-me`} className={navLinkClasses}>
                about
              </Link>
              <Link
                href={`${basePath}#featured-projects`}
                className={navLinkClasses}
              >
                projects
              </Link>
              <Link href={`${basePath}#contact-me`} className={navLinkClasses}>
                contact
              </Link>
              <Link href="/showcase" className={navLinkClasses}>
                showcase
              </Link>
            </div>

            <div className="sm:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[#D3E97A] hover:text-lime-400 text-2xl cursor-pointer"
                aria-label="Open menu"
              >
                <i className="ri-menu-line" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8 px-6 sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-[#D3E97A] hover:text-lime-400 text-3xl cursor-pointer"
            aria-label="Close menu"
          >
            <i className="ri-close-line" />
          </button>

          <Link
            href={`${basePath}#about-me`}
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            about
          </Link>
          <Link
            href={`${basePath}#featured-projects`}
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            projects
          </Link>
          <Link
            href={`${basePath}#contact-me`}
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            contact
          </Link>
          <Link
            href="/showcase"
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            showcase
          </Link>
        </div>
      )}
    </>
  );
}
