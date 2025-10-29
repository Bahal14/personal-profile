// src/components/PortfolioSection.jsx
// DIIMPOR: useState, useEffect, useRef untuk Modal, dan FiExternalLink
import React, { useState, useEffect, useRef } from "react";
import project1 from "../assets/images/project1.gif";
import project2 from "../assets/images/project2.gif";
import project3 from "../assets/images/project3.gif";
// DIIMPOR: FiExternalLink ditambahkan
import { FiCreditCard, FiLayers, FiHome, FiGlobe, FiExternalLink, FiLock } from "react-icons/fi";

// DIGANTI: Nama fungsi disamakan dengan pemanggilnya
const getTagMeta = (tag) => {
  switch (tag) {
    case "Inventory System":
      return {
        icon: <FiCreditCard className="h-3 w-3 text-red-600" />,
        pill: "bg-red-50 text-red-700",
      };
    case "Mikrotik Monitoring":
      return {
        icon: <FiLayers className="h-3 w-3 text-teal-600" />,
        pill: "bg-teal-50 text-teal-700",
      };
    case "Kost Management":
      return {
        icon: <FiHome className="h-3 w-3 text-gray-600" />,
        pill: "bg-gray-50 text-gray-700",
      };
    default:
      return {
        icon: <FiGlobe className="h-3 w-3 text-slate-500" />,
        pill: "bg-white/90 text-sky-700",
      };
  }
};

// DITAMBAHKAN: Komponen Modal dari referensi
function Modal({ isOpen, onClose, projectTitle }) {
  const modalRef = useRef(null);
  const primaryRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    prevFocusRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimeout = setTimeout(() => {
      if (primaryRef.current) primaryRef.current.focus();
      else if (modalRef.current) modalRef.current.focus();
    }, 50);

    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key !== "Tab") return;
      const container = modalRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) { e.preventDefault(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(focusTimeout);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      try { prevFocusRef.current?.focus(); } catch (e) {}
    };
  }, [isOpen, onClose]);

  const handleContact = (e) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? header.offsetHeight : 72;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      window.history.replaceState(null, "", "#contact");
    }, 220);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${ isOpen ? "pointer-events-auto" : "pointer-events-none" }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${ isOpen ? "opacity-100" : "opacity-0" }`}
        onClick={onClose}
      />
      <div
        className={`relative z-10 max-w-sm sm:max-w-lg w-full mx-4 transition-all duration-200 ${ isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95" }`}
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          tabIndex={-1}
          className="bg-white rounded-xl shadow-xl p-4 sm:p-6"
        >
          <h3 id="modal-title" className="text-sm sm:text-lg font-semibold text-slate-800 flex items-center gap-2 whitespace-nowrap truncate" title="Oops! Detail project ini masih dikunci">
            <span className="flex-shrink-0">
              <FiLock className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
            </span>
            <span className="truncate">Oops! Detail project ini masih dikunci</span>
          </h3>
          <p id="modal-desc" className="text-xs sm:text-sm text-slate-600 mt-2">
            {`Yah, sayangnya pemilik belum mengizinkan untuk melihat detail project ${projectTitle}.`}
          </p>
          <div className="mt-6 flex gap-3 justify-end">
            <a href="#contact" ref={primaryRef} onClick={handleContact} className="px-4 py-2 bg-sky-600 text-white rounded-md text-sm font-medium hover:bg-sky-700">
              Hubungi Pemilik
            </a>
            <button onClick={onClose} className="px-4 py-2 border border-slate-200 rounded-md text-sm font-medium">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen Card Anda (tidak diubah, sekarang akan berfungsi)
const PortfolioCard = ({ image, tag, title, description, onOpen }) => {
  const meta = getTagMeta(tag); // Ini sekarang akan memanggil fungsi yang benar

  return (
    <div className="bg-white rounded-lg shadow-[0_18px_30px_-12px_rgba(2,6,23,0.12)] overflow-hidden flex flex-col h-full transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-36 sm:h-44 lg:h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-start">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
          decoding="async"
        />
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm text-[10px] sm:text-xs font-medium ${meta.pill}`}
        >
          {meta.icon}
          {tag}
        </span>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-4 flex-1">
          {description}
        </p>
        <div className="mt-2">
          <button
            type="button"
            onClick={() => onOpen(title)}
            className="inline-flex items-center text-sm font-medium text-sky-600 hover:underline"
          >
            Lihat Detail
            <FiExternalLink className="h-4 w-4 ml-2 text-sky-600" />
          </button>
        </div>
      </div>
    </div>
  );
};


function PortfolioSection() {
  // DI-AKTIFKAN: Logika modal
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("");

  const openModal = (projectTitle) => {
    setActiveProject(projectTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setActiveProject(""), 220);
  };
  
  // Data proyek Anda
  const projects = [
    {
      img: project1,
      title: "Inventory Obat Mobile App",
      tag: "Inventory System",
      desc: "Aplikasi manajemen keuangan dengan desain modern dan mudah digunakan.",
    },
    {
      img: project2,
      title: "Mikrotik Monitor Web App",
      tag: "Mikrotik Monitoring",
      desc: "Aplikasi pemantauan jaringan dengan fitur analisis real-time.",
    },
    {
      img: project3,
      title: "Kost Management Web App",
      tag: "Kost Management",
      desc: "Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 md:px-10 lg:px-16">
      {/* DITAMBAHKAN: Render Modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        projectTitle={activeProject}
      />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Portfolio Pilihan
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Beberapa project pilihan yang pernah saya kerjakan, baik untuk
          kebutuhan klien maupun project pribadi.
        </p>

        {/* DIGANTI: Render grid lama diganti dengan map ke PortfolioCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <PortfolioCard
              key={p.title}
              image={p.img}
              tag={p.tag}
              title={p.title}
              description={p.desc}
              onOpen={openModal} // Kirim handler modal ke card
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;