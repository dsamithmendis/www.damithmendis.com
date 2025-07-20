"use client";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Title */}
        <div className="self-start">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase md:mb-4 text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Right: Content */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            I am a 3D Generalist based in Sri Lanka.
            <br />
            Holds a BA (Hons) in 3D Animation & VFX.
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            A Senior 3D Generalist and filmmaker with over 9 years of experience
            in animation, architectural visualization, and advertising. Holds a
            BA (Hons) in 3D Animation & VFX. Specializes in modeling, lighting,
            and storytelling-creating impactful visuals and mentoring emerging
            artists through education, real-world projects, and industry
            collaborations.
          </p>

          <a
            href="/about"
            className="text-[#D3E97A] font-medium border-b border-[#D3E97A] inline-block hover:text-lime-300 transition"
          >
            MORE ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
}
