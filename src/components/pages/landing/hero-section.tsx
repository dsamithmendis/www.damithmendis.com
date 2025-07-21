"use client";

import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroSection() {
  const words = ["Filmmaker", "Lecturer"];

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 md:mx-0 mx-4">
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-none uppercase">
            hi, i am <br />
            <span className="text-white">damith mendis.</span>
          </h1>
          <div className="mt-4 text-gray-400 max-w-md">
            <span>Senior 3D Generalist | </span>
            <FlipWords words={words} />
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-center md:justify-start items-center gap-4 flex-wrap">
            <button
              type="button"
              className="bg-[#D3E97A] text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition"
            >
              CONTACT ME
            </button>
            <a
              href="https://www.linkedin.com/in/damiya00"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="ri-linkedin-fill text-2xl text-[#D3E97A]" />
            </a>
            <a
              href="https://www.artstation.com/damiya00"
              aria-label="Art Station"
              title="Art Station"
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <Image
                src="/icons/artstation-brands-solid.svg"
                alt="Art Station"
                width={24}
                height={24}
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.behance.net/damithmendis"
              aria-label="Behance"
              title="Behance"
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="ri-behance-fill text-2xl text-[#D3E97A]" />
            </a>
          </div>
        </div>

        {/* Right Side: Image with Background Gradient */}
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
