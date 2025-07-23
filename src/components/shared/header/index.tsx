"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/default/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        ${showHeader ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}
        rounded-full px-6 sm:px-8 py-2 w-[80vw] sm:w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center justify-center h-16 relative">
        {/* Logo (optional) */}
        <div className="absolute left-4 text-2xl font-bold text-[#D3E97A] uppercase">
          {/* LOGO */}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 font-medium hover:text-[#D3E97A] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="absolute right-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 text-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`ri-${isOpen ? "close" : "menu"}-line`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-300 px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
