"use client";

import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase md:mb-4 text-white">
            featured projects
          </h2>
          <p className="text-gray-400 text-lg w-full">
            Here lies a collection of digital dreams-projects where I blend
            design, detail, and direction to turn ideas into dimensional
            experiences.
          </p>
        </div>

        {/* Project Card 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left: Image with Tag */}
          <div className="bg-[#111] relative rounded-2xl p-6 md:p-8">
            <span className="absolute bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
              Mogo Studios
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
              LUV - Animated Short Film
            </h3>
            <p className="text-gray-400 mb-6">
              This short film is a collaborative project that we completed in
              just 48 days. It was a charity project for Christmas 2022, where
              every view on YouTube would result in “Gasma” donating a gift to
              orphanage kids. I took on multiple roles in this project,
              including Story, Director, Art Director, final layout, Modeling,
              lighting, rendering, animatic, color script, editor, colorist,
              pipeline arch, and poster designing. Our team consisted of seven
              members who worked on modeling characters, animation, textures,
              assets, environments, concept art, and end credits. This project
              is particularly special to me because it was created with the
              intention of giving gifts to orphanage kids. I invite you to watch
              the film and leave your comments.
            </p>

            <div className="text-sm text-gray-400 space-y-2 mb-6">
              <div className="flex justify-between border-t border-gray-700 pt-2">
                <span className="text-white">Year</span>
                <span>2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Role</span>
                <span>Senior 3D Generalist</span>
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

        {/* Project Card 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left: Image with Tag */}
          <div className="bg-[#111] relative rounded-2xl p-6 md:p-8">
            <span className="absolute bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
              Falmouth University
            </span>
            <Image
              src="/images/projects/image-2.webp"
              alt="Adventure Time Project"
              width={600}
              height={400}
              className="rounded-xl mt-10 w-full border border-gray-800"
            />
          </div>

          {/* Right: Text */}
          <div className="bg-black">
            <h3 className="text-2xl font-bold mb-4 text-white">
              HOST - Animated Short Film
            </h3>
            <p className="text-gray-400 mb-6">
              This was my first collaborative project for my BA (Hons) in 3D
              Animation and VFX at Falmouth University. Our team consisted of
              five members, and we worked together for six months. Due to our
              limited team size, we divided the various job roles among
              ourselves. Throughout the project, I took on multiple
              responsibilities, including Art Direction, Rigging, Lighting,
              Color grading and character texturing. Despite the challenges
              posed by the COVID-19 pandemic, we successfully completed the
              project. I am thrilled with our achievement and hope you all enjoy
              the final result.
            </p>

            <div className="text-sm text-gray-400 space-y-2 mb-6">
              <div className="flex justify-between border-t border-gray-700 pt-2">
                <span className="text-white">Year</span>
                <span>2022</span>
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

        {/* Project Card 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left: Image with Tag */}
          <div className="bg-[#111] relative rounded-2xl p-6 md:p-8">
            <span className="absolute bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
              Falmouth University
            </span>
            <Image
              src="/images/projects/image-3.webp"
              alt="Adventure Time Project"
              width={600}
              height={400}
              className="rounded-xl mt-10 w-full border border-gray-800"
            />
          </div>

          {/* Right: Text */}
          <div className="bg-black">
            <h3 className="text-2xl font-bold mb-4 text-white">
              WEDYE - Animated Short Film
            </h3>
            <p className="text-gray-400 mb-6">
              I have created a short film called "WEDYE" during my free time,
              aiming to improve my animation skills. The film features a love
              story between two bouncing balls, and I have developed a
              sophisticated ball rig that allows for proper squash and stretch.
              To enhance the story, I have created a beautiful romantic
              environment. I used Blender for modeling, texturing, rigging,
              animation, lighting, and rendering, while Adobe Premiere Pro was
              used for editing and color grading. I hope you enjoy this cute and
              modern animated love story.
            </p>

            <div className="text-sm text-gray-400 space-y-2 mb-6">
              <div className="flex justify-between border-t border-gray-700 pt-2">
                <span className="text-white">Year</span>
                <span>2020</span>
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

        {/* Project Card 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image with Tag */}
          <div className="bg-[#111] relative rounded-2xl p-6 md:p-8">
            <span className="absolute bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
              Falmouth University
            </span>
            <Image
              src="/images/projects/image-4.webp"
              alt="Adventure Time Project"
              width={600}
              height={400}
              className="rounded-xl mt-10 w-full border border-gray-800"
            />
          </div>

          {/* Right: Text */}
          <div className="bg-black">
            <h3 className="text-2xl font-bold mb-4 text-white">
              the clocks - Animated Short Film
            </h3>
            <p className="text-gray-400 mb-6">
              Embark on a captivating journey through my first individual
              animated short film, created as the culmination of my BTEC-HND in
              AMDT at the School of Creativity. Delve into a world of
              imagination and artistic expression, where every frame tells a
              story. Join me in celebrating the power of animation and the
              limitless possibilities it holds. Welcome to my creative
              masterpiece.
            </p>

            <div className="text-sm text-gray-400 space-y-2 mb-6">
              <div className="flex justify-between border-t border-gray-700 pt-2">
                <span className="text-white">Year</span>
                <span>2019</span>
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
  );
}
