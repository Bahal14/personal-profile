import React from "react";
import profileImg from "../assets/images/profile.png";

const footerNavItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigateToSection = (e, href) => {
    if (!href || !href.startsWith("#")) return;
    e?.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = header ? header.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 md:gap-0">
          {/* left: brand */}
          <div className="hidden md:flex items-center justify-start space-x-3">
            <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shrink-0">
              <img
                className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover bg-white"
                src={profileImg}
                alt="Profile"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800">
              Asbahal Munawaroh
            </span>
          </div>

          {/* center: nav links */}
          <nav className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-y-0 md:space-x-8">
            {footerNavItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => navigateToSection(e, href)}
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* right: socials */}
          <div className="flex items-center justify-center md:justify-end space-x-3">
            <a
              href="https://www.instagram.com/halmnaw._?igsh=eXI3Z2t6NTZmaHk2"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-6 w-6 md:h-6 md:w-6 rounded-sm bg-pink-50"
            >
              <svg
                className="h-3 w-3 md:h-4 md:w-4 text-pink-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                  strokeWidth="2.5"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/asbahal-munawaroh-41b121353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center h-6 w-6 md:h-6 md:w-6 rounded-sm bg-blue-50"
            >
              <svg
                className="h-3 w-3 md:h-4 md:w-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} Asbahal Munawaroh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;