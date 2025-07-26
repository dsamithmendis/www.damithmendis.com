"use client";

import { useEffect, useState } from "react";
import { aboutImages } from "@/components/lib/about-section";

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {aboutImages.map((src, index) => (
          <div
            key={index}
            aria-hidden={index !== current}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[5000ms] ease-in-out ${
              index === current
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${src})`, willChange: "opacity" }}
          />
        ))}

        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 40%, transparent 60%, rgba(0,0,0,0.9))",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full px-4 md:px-0">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          <div className="self-start">
            <h2 id="about-me" className="text-3xl md:text-4xl font-extrabold uppercase">
              about me
            </h2>
          </div>

          <div>
            <p className="text-white mb-6 leading-relaxed">
              A Senior 3D Generalist and short filmmaker with over 9 years of
              experience in 3D animation, architectural visualization, and
              advertising. Passionate about crafting impactful visual stories,
              blending creativity with technical precision, and mentoring future
              artists. Skilled across the full 3D pipeline with a focus on
              modeling, lighting, and concept development.
            </p>

            <a
              href="/"
              className="text-[#D3E97A] font-medium border-b border-[#D3E97A] inline-block hover:text-lime-300 transition"
            >
              MORE ABOUT ME{" "}
              <i className="ri-arrow-right-up-line ml-1 align-middle" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
