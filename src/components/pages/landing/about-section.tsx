"use client";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Title */}
        <div className="self-start">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            A Senior 3D Generalist and short filmmaker with over 9 years of
            experience in 3D animation, architectural visualization, and
            advertising. Passionate about crafting impactful visual stories,
            blending creativity with technical precision, and mentoring future
            artists. Skilled across the full 3D pipeline with a focus on
            modeling, lighting, and concept development.
          </p>

          <a
            href="/about"
            className="text-[#D3E97A] font-medium border-b border-[#D3E97A] inline-block hover:text-lime-300 transition"
          >
            MORE ABOUT ME
            <i className="ri-arrow-right-up-line text-[#D3E97A] hover:text-lime-300 transition"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
