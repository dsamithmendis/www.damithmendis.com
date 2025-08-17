"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/stateful-button";
import {
  HeroMainWords,
  HeroFlipWords,
  HeroLinks,
  heroImages,
} from "@/components/lib/hero-section";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeroSection() {
  const [showGrid, setShowGrid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setShowGrid(false);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && showGrid) {
      const timeout = setTimeout(() => setShowGrid(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [isMobile, showGrid]);

  const handleImageClick = () => {
    if (isMobile) setShowGrid((prev) => !prev);
  };

  const handleContactClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    router.push("#contact-me");
    setIsLoading(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
        src={`${basePath}/videos/background-video.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 px-4 md:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-5xl font-extrabold uppercase">
            hi, i am <TypewriterEffectSmooth mainwords={HeroMainWords} />
          </h1>

          <div className="mt-4 text-white max-w-md">
            <span>Senior 3D Generalist | </span>
            <FlipWords words={HeroFlipWords} />
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Button
              onClick={handleContactClick}
              className="bg-[#D3E97A] text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition"
            >
              {isLoading ? "CONTACTING" : "CONTACT ME"}
            </Button>

            {HeroLinks.map((link, i) =>
              link.href.startsWith("/") ? (
                <Link
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  {link.imageSrc ? (
                    <Image
                      src={`${basePath}${link.imageSrc}`}
                      alt={link.label}
                      width={24}
                      height={24}
                      className="w-5 h-5"
                    />
                  ) : (
                    <i className={`${link.iconClass} text-2xl text-[#D3E97A]`} />
                  )}
                </Link>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.imageSrc ? (
                    <Image
                      src={`${basePath}${link.imageSrc}`}
                      alt={link.label}
                      width={24}
                      height={24}
                      className="w-5 h-5"
                    />
                  ) : (
                    <i className={`${link.iconClass} text-2xl text-[#D3E97A]`} />
                  )}
                </a>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center items-center py-20 md:mt-0 md:py-0">
          <BackgroundGradient
            className="relative group rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden
              w-[90vw] max-w-[520px] h-[90vw] max-h-[520px]"
          >
            <div
              onClick={handleImageClick}
              className="relative w-full h-full cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleImageClick();
              }}
              aria-pressed={showGrid}
              aria-label="Toggle image grid"
            >
              <Image
                src={`${basePath}${heroImages[0]}`}
                alt="Default Hero"
                fill
                className={`rounded-[22px] object-cover transition-opacity duration-500
                  ${isMobile ? (showGrid ? "opacity-0" : "opacity-100") : "opacity-100 group-hover:opacity-0"}
                `}
              />
            </div>

            <div
              className={`absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2
                rounded-[22px]
                transition-opacity duration-500
                pointer-events-auto
                ${isMobile ? (showGrid ? "opacity-100" : "opacity-0 pointer-events-none") : "opacity-0 group-hover:opacity-100 pointer-events-auto"}
              `}
            >
              {heroImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-square overflow-hidden rounded-[14px]"
                >
                  <Image
                    src={`${basePath}${src}`}
                    alt={`Grid ${index + 1}`}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
