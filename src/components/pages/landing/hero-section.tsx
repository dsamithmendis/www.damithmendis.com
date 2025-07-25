"use client";

import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  HeroMainWords,
  HeroFlipWords,
  HeroLinks,
} from "@/components/lib/hero-section";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
        src="/videos/background-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Darker Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 md:mx-0 mx-4">
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
            hi, i am
            <TypewriterEffectSmooth mainwords={HeroMainWords} />
          </h1>
          <div className="mt-4 text-gray-400 max-w-md">
            <span>Senior 3D Generalist | </span>
            <FlipWords words={HeroFlipWords} />
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-start gap-4 flex-wrap">
            {/* Internal link using Next.js Link */}
            <Link
              href="/#contact"
              className="bg-[#D3E97A] text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition"
            >
              CONTACT ME
            </Link>

            {/* Social Links */}
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
                      src={link.imageSrc}
                      alt={link.label}
                      width={24}
                      height={24}
                      className="w-5 h-5"
                    />
                  ) : (
                    <i
                      className={`${link.iconClass} text-2xl text-[#D3E97A]`}
                    />
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
                      src={link.imageSrc}
                      alt={link.label}
                      width={24}
                      height={24}
                      className="w-5 h-5"
                    />
                  ) : (
                    <i
                      className={`${link.iconClass} text-2xl text-[#D3E97A]`}
                    />
                  )}
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center items-center py-20 md:mt-0 md:py-0">
          <BackgroundGradient className="leading-none rounded-[22px] bg-white dark:bg-zinc-900">
            <Image
              src="/images/damith.webp"
              alt="Damith Mendis"
              width={520}
              height={520}
              className="rounded-[22px] object-cover block"
            />
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
