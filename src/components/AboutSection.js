// src/components/AboutSection.jsx
import React from "react";
import { FaUser } from "react-icons/fa";
// DIUBAH: Ganti nama ikon yang tidak ada dengan nama yang benar
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function AboutSection() {
  const handleScrollTo = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? header.offsetHeight : 72;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const strengths = [
    "Problem Solver",
    "Team Player",
    "Fast Learner",
    "Kreatif & Adaptif",
  ];

  return (
    <section id="about" className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl p-5 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="w-28 h-28 sm:w-40 sm:h-40 flex-shrink-0 self-center">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#BFDBFE] via-[#D8B4FE] to-[#FBCFE8] flex items-center justify-center">
                <FaUser className="w-14 h-14 sm:w-20 sm:h-20 text-blue-500" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Tentang Saya
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Saya memiliki motivasi dan berorientasi dengan minat besar dalam teknologi dan pemecahan masalah. Memiliki dasar yang kuat dalam ui/ux designer dan web developher. 
                Saya sangat berantusias untuk memanfaatkan keterampilan dan pengetahuan saya secara efektif dalam berkontribusi bersama tim. Selain itu saya juga ingin memiliki 
                banyak pengalaman dalam bidang Teknologi Infomasi yang berkembang tiap tahunnya.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 mb-4 sm:mb-6">
                {/* DIUBAH: Ganti 'skills.map' menjadi 'strengths.map' */}
                {strengths.map((text, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                    <span className="text-blue-500 text-sm sm:text-base">✓</span>
                    <span className="text-xs sm:text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="flex items-center justify-center md:self-start bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 gap-2"
              >
                {/* DIUBAH: Ganti nama ikon yang tidak ada dengan nama yang benar */}
                <IoChatbubbleEllipsesOutline className="text-base sm:text-lg ml-1 sm:ml-2" />
                <span>Konsultasi Gratis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;