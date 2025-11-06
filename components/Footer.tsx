import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Kolom Kiri: Logo & Tagline */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg className="w-10 h-10 text-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span className="ml-3 text-2xl font-bold text-white font-display">
                WastraNusa
              </span>
            </div>
            <p className="text-lg text-stone-300">Melestarikan Budaya, Membangun Teknologi.</p>
          </div>

          {/* Kolom Kanan: Link Navigasi */}
          <div className="flex space-x-6 mt-8 md:mt-0">
            <a href="#about" className="hover:text-amber-500 transition-colors duration-200">Tentang</a>
            <a href="#how-it-works" className="hover:text-amber-500 transition-colors duration-200">Cara Kerja</a>
            <a href="#features" className="hover:text-amber-500 transition-colors duration-200">Fitur</a>
            <a href="#team" className="hover:text-amber-500 transition-colors duration-200">Tim</a>
          </div>
        </div>

        <hr className="border-stone-700 my-8" />
        <p className="mt-6 text-sm text-center">© 2025 WastraNusa – Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};
