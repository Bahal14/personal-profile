// src/pages/Home.jsx
import React from "react";
import ProfileCard from "../components/ProfileCard"; // Ganti nama dari ProfileCard
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialSection from "../components/TestimonialSection"; // Komponen baru
import ContactSection from "../components/ContactSection"; // Komponen baru



function Home() {
  return (
    // Kita tidak perlu padding di 'main' karena setiap section sudah punya padding sendiri
    <main className="pt-[72px] md:pt-20">
      <ProfileCard />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}

export default Home;