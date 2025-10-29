// src/components/Navbar.jsx
import React, { useState } from "react";
// Sesuaikan path gambar profil Anda
import profileImg from "../assets/images/profile.png"; 

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/halmnaw._?igsh=eXI3Z2t6NTZmaHk2", // Ganti dengan link Instagram Anda
    label: "Instagram",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
      </svg>
    ),
    className: "text-pink-600",
  },
  {
    href: "https://www.linkedin.com/in/asbahal-munawaroh-41b121353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Ganti dengan link LinkedIn Anda
    label: "LinkedIn",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    className: "text-blue-600",
  },
  {
    href: "#contact",
    label: "Email",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    className: "text-gray-600",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth-scroll for internal anchors (accounts for fixed header height)
  const handleScrollTo = (e, href) => {
    if (href && href.startsWith("#")) {
      e?.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? header.offsetHeight : 72;
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50">
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-3 items-center transition-all duration-300">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shrink-0">
              <img
                className="h-8 w-8 rounded-full object-cover bg-white"
                src={profileImg} // Menggunakan import
                alt="Asbahal Munawaroh"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="text-lg font-bold text-gray-800 whitespace-nowrap">
              Asbahal Munawaroh {/* Nama Anda */}
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex justify-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleScrollTo(e, href)}
                className="text-base text-gray-700 hover:text-black transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop socials */}
          <div className="hidden md:flex items-center justify-end space-x-5">
            {socialLinks.map(({ href, label, icon, className }) => {
              const isInternal = href?.startsWith?.("#");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={
                    isInternal ? (e) => handleScrollTo(e, href) : undefined
                  }
                  className={`${className} hover:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-110`}
                  target={isInternal ? undefined : "_blank"}
                  rel={isInternal ? undefined : "noreferrer"}
                  aria-label={label}
                >
                  {icon}
                </a>
              );
            })}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden absolute right-6 top-7"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile menu */}
          <div
            className={`md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <nav className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-base text-gray-700 hover:text-black py-2"
                    onClick={(e) => handleScrollTo(e, href)}
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-5 pt-4 border-t border-gray-100 mt-4">
                {socialLinks.map(({ href, label, icon, className }) => {
                  const isInternal = href?.startsWith?.("#");
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={
                        isInternal ? (e) => handleScrollTo(e, href) : undefined
                      }
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noreferrer"}
                      className={`${className} hover:opacity-80 transition-opacity`}
                      aria-label={label}
                    >
                      {React.cloneElement(icon, { className: "h-5 w-5" })}
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;