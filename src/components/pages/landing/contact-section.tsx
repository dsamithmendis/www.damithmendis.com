"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { contactLinks } from "@/components/lib/contact-section";
import { Button } from "@/components/ui/stateful-button";
import toast, { Toaster } from "react-hot-toast";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mzzagbgy");

  const resumeLink = contactLinks.resume.startsWith("http")
    ? contactLinks.resume
    : `${basePath}${contactLinks.resume}`;

  const dockItems = contactLinks.socials.map((social) => ({
    title: social.name,
    href: social.href,
    icon: <i className={`${social.iconClass} text-2xl text-[#D3E97A]`}></i>,
  }));

  useEffect(() => {
    if (state.succeeded) {
      toast.custom(
        () => (
          <div className="bg-[#D3E97A] text-black font-bold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <i className="ri-checkbox-circle-line text-xl"></i>
            <span>Message sent successfully!</span>
          </div>
        ),
        { duration: 4000 }
      );
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      toast.custom(
        () => (
          <div className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <i className="ri-error-warning-line text-xl"></i>
            <span>Something went wrong!</span>
          </div>
        ),
        { duration: 4000 }
      );
    }
  }, [state.succeeded, state.errors]);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-0" id="contact-me">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="self-start">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase mb-6">
            LET&apos;S CONNECT
          </h2>
          <p className="text-neutral-400 mb-2">
            Say hello at{" "}
            <a
              href={`mailto:${contactLinks.email}`}
              className="text-white underline"
            >
              {contactLinks.email}
            </a>
          </p>
          <p className="text-neutral-400 mb-4">
            For more info, here&apos;s my{" "}
            <a href={resumeLink} className="text-white underline" download>
              resume
            </a>
          </p>

          <div className="mt-4">
            <FloatingDock items={dockItems} />
          </div>
        </div>

        <div>
          {state.succeeded ? (
            <p className="text-[#D3E97A] text-lg">
              We&apos;ve received your message and are reviewing it with care.
              Thanks for reaching out!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
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
                  placeholder="you@example.com"
                  required
                  className="w-full p-2 bg-[#111] border-none rounded"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
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
                  placeholder="What's this about?"
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
                  placeholder="Write your message here..."
                  required
                  className="w-full p-2 bg-[#111] border-none rounded"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D3E97A] text-black py-2 px-6 font-semibold rounded-full hover:bg-lime-300 transition disabled:opacity-50"
                onClick={() => Promise.resolve()}
              >
                {state.submitting ? "SUBMITTING" : "SUBMIT"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
