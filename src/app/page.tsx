"use client";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import HeroSection from "@/components/pages/landing/hero-section";
import ProjectSection from "@/components/pages/landing/project-section";
import AboutSection from "@/components/pages/landing/about-section";
import ContactSection from "@/components/pages/landing/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <hr className="h-px bg-[#484848] border-0"></hr>
      <ProjectSection />
      <hr className="h-px bg-[#484848] border-0"></hr>
      <AboutSection />
      <hr className="h-px bg-[#484848] border-0"></hr>
      <ContactSection/>
      <Footer/>
    </>
  );
}
