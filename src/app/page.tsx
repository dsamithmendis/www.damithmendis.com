"use client";

import Header from "@/components/shared/header";
import HeroSection from "@/components/pages/landing/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <hr className="h-px bg-[#484848] border-0"></hr>

      <section className="w-full bg-black py-16 md:px-0 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase md:mb-4 text-white">
              featured projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>

          {/* Project Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Image with Tag */}
            <div className="bg-[#111] relative rounded-2xl p-6 md:p-8">
              <span className="absolute bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                Duriyan Beer
              </span>
              <Image
                src="/images/projects/image-1.webp"
                alt="Adventure Time Project"
                width={600}
                height={400}
                className="rounded-xl mt-10 w-full border border-gray-800"
              />
            </div>

            {/* Right: Text */}
            <div className="bg-black">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Branding Identity Concept | Duriyan Beer
              </h3>
              <p className="text-gray-400 mb-6">
                Duriyan Beer is a bold identity concept for a craft beer made
                with durian <br className="md:block hidden"/>fruit-blending Sri Lankan culture with global
                appeal. The design <br className="md:block hidden"/>fuses hand-drawn typography, vivid
                illustrations, and local landmarks to create a fresh take on
                modern beverage branding.
              </p>

              <div className="text-sm text-gray-400 space-y-2 mb-6">
                <div className="flex justify-between border-t border-gray-700 pt-2">
                  <span className="text-white">Year</span>
                  <span>2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Role</span>
                  <span>3D Generalist</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#D3E97A] text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition"
                >
                  LIVE DEMO
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 border border-gray-700 text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                >
                  SEE ON GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Title */}
          <div>
            <h2 className="text-4xl font-extrabold">ABOUT ME</h2>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              I am a front-end developer based in Sydney. <br />
              Has Mechanical Engineering background.
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I'm exploring React.js, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>

            <a
              href="#"
              className="text-[#D3E97A] font-medium border-b border-[#D3E97A] inline-block hover:text-lime-300 transition"
            >
              MORE ABOUT ME
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
