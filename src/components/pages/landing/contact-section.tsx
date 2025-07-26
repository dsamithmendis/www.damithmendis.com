"use client";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div className="self-start" id="contact-me">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase mb-6">
            LET&apos;S CONNECT
          </h2>
          <p className="text-neutral-400 mb-2">
            Say hello at{" "}
            <a href="mailto:damithmendis.00@gmail.com" className="text-white underline">
              damithmendis.00@gmail.com
            </a>
          </p>
          <p className="text-neutral-400 mb-4">
            For more info, here&apos;s my{" "}
            <a href="/resume.pdf" className="text-white underline" download>
              resume
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/damithmendis"
              aria-label="Facebook"
              title="Facebook"
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="ri-facebook-fill text-2xl text-[#D3E97A]" />
            </a>
            <a
              href="https://www.instagram.com/damith_mendis"
              aria-label="Instagram"
              title="Instagram"
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="ri-instagram-fill text-2xl text-[#D3E97A]" />
            </a>
            <a
              href="https://www.youtube.com/@damiya00"
              aria-label="Youtube"
              title="Youtube"
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="ri-youtube-fill text-2xl text-[#D3E97A]" />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <form name="contact" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 bg-[#111] border-none rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 bg-[#111] border-none rounded"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 bg-[#111] border-none rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-2 bg-[#111] border-none rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#D3E97A] cursor-pointer text-black py-2 px-6 font-semibold rounded-full hover:bg-lime-300 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
