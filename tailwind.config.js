// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Gradient UTAMA untuk ProfileCard (Hero) - INI YANG BENAR
        "hero-gradient": "linear-gradient(to right, #BFDBFE, #F3E8FF, #FCE7F3)",

        // Gradient untuk lingkaran blur di Hero (1)
        "circle-gradient-1": "linear-gradient(to bottom right, #60A5FA, #A855F7)",
        // Gradient untuk lingkaran blur di Hero (2)
        "circle-gradient-2": "linear-gradient(to bottom right, #F472B6, #FDE047)",
        // Gradient untuk ikon roket di Hero
        "rocket-gradient": "linear-gradient(to bottom right, #A855F7, #F472B6)",

        // Gradient untuk ikon user di AboutSection
        "user-icon-gradient": "linear-gradient(to right, #BFDBFE, #D8B4FE, #FBCFE8)",

        // Gradient untuk container ContactSection
        "contact-container-gradient": "linear-gradient(to right, #DBEAFE, #FFFFFF, #F3E8FF)",
        // Gradient untuk tombol ContactSection
        "contact-button-gradient": "linear-gradient(to right, #3B82F6, #9333EA)",

        // Gradient untuk tombol AboutSection
         "about-button-gradient": "linear-gradient(to right, #3B82F6, #8B5CF6)", // from-blue-500 to-violet-500

        // Gradient ini mungkin tidak terpakai lagi, Anda bisa hapus jika mau
        // "page-gradient":
        //   "linear-gradient(105deg, rgba(239,233,255,1) 0%, rgba(228,239,255,1) 50%, rgba(255,236,244,1) 100%)",

      },
      colors: {
        primary: { light: "#A78BFA", DEFAULT: "#7C3AED", dark: "#6D28D9" },
        secondary: { light: "#F472B6", DEFAULT: "#EC4899" },
        "gradient-start": "#667EEA", // Mungkin tidak terpakai lagi?
        "gradient-end": "#9D5BCC",   // Mungkin tidak terpakai lagi?
        "text-primary": "#1A202C",
        "text-secondary": "#4A5568",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        "custom-light": "0 4px 10px rgba(0, 0, 0, 0.05)",
        "custom-medium": "0 8px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};