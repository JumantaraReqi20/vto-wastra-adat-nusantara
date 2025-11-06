import React from 'react';
import type { ClothingItem } from '../types';

interface ClothingModalProps {
  item: ClothingItem;
  onClose: () => void;
}

// Komponen helper untuk menampilkan section
const InfoSection: React.FC<{ title: string; content?: string }> = ({ title, content }) => {
  if (!content) return null;
  return (
    <div className="mb-6">
      <h4 className="font-display text-2xl font-bold text-amber-900 mb-2">{title}</h4>
      <p className="text-stone-700 text-base leading-relaxed">{content}</p>
    </div>
  );
};

export const ClothingModal: React.FC<ClothingModalProps> = ({ item, onClose }) => {
  return (
    // 1. Backdrop (Latar Belakang "Glass")
    <div
      onClick={onClose}
      className="modal-backdrop" // CSS akan menargetkan ini
    >
      {/* 2. Konten Modal (Box Putih) */}
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal
        className="modal-content" // CSS akan menargetkan ini
      >
        {/* 3. Tombol Close */}
        <button
          onClick={onClose}
          className="modal-close-button" // CSS akan menargetkan ini
        >
          &times;
        </button>
        
        {/* 4. Layout Konten (Gambar di kiri, Teks di kanan) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Kolom Kiri (Gambar & Judul) */}
          <div className="md:w-1/3 flex-shrink-0 modal-image-column">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
            <h3 className="font-display text-4xl font-bold text-stone-900 mt-5">{item.name}</h3>
            <p className="text-stone-600 text-xl">{item.origin}</p>
          </div>

          {/* Kolom Kanan (Teks yang bisa di-scroll) */}
          <div className="md:w-2/3 modal-scrollbar">
            <InfoSection title="Deskripsi" content={item.description} />
            <InfoSection title="Sejarah Singkat" content={item.sejarah} />
            <InfoSection title="Makna Filosofis" content={item.filosofi} />
            <InfoSection title="Konteks Penggunaan" content={item.konteks} />
          </div>

        </div>
      </div>
    </div>
  );
};