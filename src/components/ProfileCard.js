// src/components/ProfileCard.jsx
import React from "react";
import { FaLightbulb, FaRocket } from "react-icons/fa"; 
import heroImage from "../assets/images/profile.png";

function ProfileCard() {
  // FUNGSI BARU: Menambahkan smooth scroll dari referensi HeroSection
  const handleScrollTo = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? header.offsetHeight : 72;
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home" // Diubah dari #hero ke #home agar sesuai referensi
      // STYLING BARU: Latar belakang gradient, min-h-screen, dll. dari HeroSection
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 overflow-hidden bg-hero-gradient"
    >
      {/* ELEMEN BARU: Lingkaran background dari HeroSection */}
      <>
        <div className="absolute top-12 left-8 sm:top-24 sm:left-24 w-[16rem] h-[16rem] sm:w-[28rem] sm:h-[28rem] lg:w-[20rem] lg:h-[20rem] bg-circle-gradient-1 rounded-full opacity-30" />
        <div className="absolute bottom-12 right-8 sm:bottom-20 sm:right-20 w-[16rem] h-[16rem] sm:w-[28rem] sm:h-[28rem] lg:w-[30rem] lg:h-[30rem] bg-circle-gradient-2 rounded-full opacity-30" />
      </>

      {/* ELEMEN BARU: Wrapper konten dari HeroSection */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-8 sm:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* Konten Teks (Data Anda dipertahankan) */}
          <div className="lg:w-1/2 text-center lg:text-left pt-8 sm:pt-0">
            <span className="text-xs sm:text-sm font-light text-gray-400 uppercase tracking-widest mb-2 inline-block">
              Hi, I'm
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight my-2 sm:my-3">
              Asbahal Munawaroh
            </h1>

            <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 bg-gradient-to-r from-[#60A5FA] to-[#A855F7] shadow-lg shadow-blue-500/20">
              UI/UX Designer & Web Developer
            </span>

            <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              Membantu brand dan bisnis membangun produk digital yang impactful
              lewat desain yang kreatif, modern, dan user-centric.
            </p>

            {/* STYLING BARU: Tombol disesuaikan dengan styling HeroSection */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, "#portfolio")}
                className="inline-block text-center bg-blue-600 text-white font-medium text-xs sm:text-sm px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg 
                           shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 hover:scale-105 
                           active:scale-95 transition-all duration-300"
              >
                Lihat Karya
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-block text-center bg-transparent text-xs sm:text-sm font-medium text-blue-600 px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg 
                           border-2 border-blue-400 hover:bg-blue-50/10 hover:border-blue-500 hover:scale-105 
                           hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* STRUKTUR BARU: Gambar Hero disesuaikan dengan styling HeroSection */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-max">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[2rem] sm:rounded-[2.5rem] bg-white/70 backdrop-blur-sm shadow-2xl p-3 sm:p-4">
                <img
                  src={heroImage} // Menggunakan gambar Anda
                  alt="Asbahal Munawaroh"
                  className="w-full h-full object-cover rounded-[1.75rem] sm:rounded-[2rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* IKON BARU: Mengganti 💖 dengan ikon dari HeroSection */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg">
                <FaLightbulb className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 p-3 sm:p-4 rounded-full shadow-lg bg-rocket-gradient">
                <FaRocket className="text-white w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProfileCard;