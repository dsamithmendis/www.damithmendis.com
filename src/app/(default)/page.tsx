"use client";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import HeroSection from "@/components/pages/landing/hero-section";
import ProjectSection from "@/components/pages/landing/project-section";
import AboutSection from "@/components/pages/landing/about-section";
import ContactSection from "@/components/pages/landing/contact-section";
import ExperienceSection from "@/components/pages/landing/experience-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection/>
      <Footer/>
    </>
  );
}
