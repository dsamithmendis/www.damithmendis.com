"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const sectionMap: Record<string, string> = {
      "start-project": "projects",
      "end-project": "projects",
      "about-me": "about-me",
      "experience": "experience",
      "contact-me": "contact-me",
    };

    const observers: IntersectionObserver[] = [];

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionMap[id]);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const navLinkClasses = (href: string, isSection = false) => {
    const isActive =
      isSection && activeSection === href.replace("#", "")
        ? true
        : !isSection && pathname === href;

    return `relative text-sm sm:text-base font-semibold uppercase cursor-pointer transition 
      ${isActive ? "text-lime-400" : "text-[#D3E97A] hover:text-lime-400"}
      after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] ${
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
      } after:bg-lime-400 after:transition-all after:duration-300`;
  };

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
              <Link
                href="#start-project"
                className={navLinkClasses("projects", true)}
              >
                projects
              </Link>
              <Link href="#about-me" className={navLinkClasses("#about-me", true)}>
                about
              </Link>
              <Link
                href="#experience"
                className={navLinkClasses("#experience", true)}
              >
                experience
              </Link>
              <Link
                href="#contact-me"
                className={navLinkClasses("#contact-me", true)}
              >
                contact
              </Link>
              <Link href="/showcase" className={navLinkClasses("/showcase")}>
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
            href="#start-project"
            className={navLinkClasses("projects", true)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            projects
          </Link>
          <Link
            href="#about-me"
            className={navLinkClasses("#about-me", true)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            about
          </Link>
          <Link
            href="#experience"
            className={navLinkClasses("#experience", true)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            experience
          </Link>
          <Link
            href="#contact-me"
            className={navLinkClasses("#contact-me", true)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            contact
          </Link>
          <Link
            href="/showcase"
            className={navLinkClasses("/showcase")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            showcase
          </Link>
        </div>
      )}
    </>
  );
}
