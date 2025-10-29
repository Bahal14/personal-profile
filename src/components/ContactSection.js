// src/components/ContactSection.jsx
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

// GANTI DENGAN ACCESS KEY ANDA
const WEB3FORMS_ACCESS_KEY = "GANTI_DENGAN_ACCESS_KEY_ANDA";

// Komponen diubah namanya
function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const form = e.target;
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (json.success) {
        setFormStatus(null);
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 2200);
      } else {
        setFormStatus({
          type: "error",
          message: json.message || "Gagal mengirim pesan.",
        });
      }
    } catch (err) {
      setFormStatus({
        type: "error",
        message: "Terjadi kesalahan saat mengirim pesan.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <input aria-label="Nama" name="name" placeholder="Nama" required className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-800" />
      <input aria-label="Email" name="email" type="email" placeholder="Email" required className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-800" />
      <textarea name="subject" placeholder="Pesan" rows={5} required className="sm:col-span-2 border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-800" />
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="Kirim Pesan"
          className="w-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white rounded-lg py-3 shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition duration-300 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              Kirim Pesan <FiSend className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
      {formStatus && (
        <p className={`sm:col-span-2 mt-2 ${ formStatus.type === "success" ? "text-green-600" : "text-red-600" }`}>
          {formStatus.message}
        </p>
      )}
      {showSuccess && (
        <MessageSentModal onClose={() => setShowSuccess(false)} />
      )}
    </form>
  );
}

// Komponen diubah namanya
function MessageSentModal({ onClose }) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div role="dialog" aria-modal="true" className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-green-50">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="1.6" fill="transparent" />
              <path d="M7.5 12.5l2.5 2.5L16.5 9" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: "draw 0.5s ease-out forwards 0.12s" }} />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Pesan Terkirim
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Pesan berhasil dikirim. Terima kasih!
          </p>
        </div>
      </div>
      <style>{`@keyframes draw { to { stroke-dashoffset: 0; } }`}</style>
    </div>,
    document.body
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="rounded-2xl p-6 sm:p-12 bg-gradient-to-r from-[#DBEAFE] via-[#FFFFFF] to-[#F3E8FF] shadow-2xl shadow-gray-400/50 relative">
          <div className="md:flex md:items-start md:gap-12">
            <div className="md:w-1/2 md:py-20 md:pr-12 lg:pr-20">
              <h3 className="text-xl md:text-3xl font-extrabold text-gray-800 mb-6 leading-tight">
                Tertarik <br />
                Kolaborasi?
              </h3>
              <p className="text-sm md:text-lg text-gray-800 mb-5 max-w-[12rem] md:max-w-[14rem] font-light break-words">
                Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan
                produk digital yang impactful buat bisnismu.
              </p>

              {/* Data Kontak Anda */}
              <div className="flex flex-col gap-2 text-xs text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 text-white">
                    <FiMail className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  </span>
                  <span className="text-xs md:text-xs">
                    bahal@email.com {/* Email Anda */}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 text-white">
                    <FiPhone className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  </span>
                  <span className="text-xs md:text-xs">
                    0881-6579-468 {/* Telepon Anda */}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 text-white">
                    <FiMapPin className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  </span>
                  <span className="text-xs md:text-xs">
                    Surabaya, Indonesia {/* Lokasi Anda */}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:absolute md:w-full md:right-0 md:top-1/2 md:transform md:translate-x-[25%] md:-translate-y-1/2">
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-4xl mx-auto shadow-md">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
