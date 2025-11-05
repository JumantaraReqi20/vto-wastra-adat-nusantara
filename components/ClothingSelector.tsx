import React, { useEffect, useRef } from 'react';
import { clothingItems } from '../constants';
import type { ClothingItem } from '../types';

interface ClothingSelectorProps {
  selectedClothing: ClothingItem;
  onSelectClothing: (item: ClothingItem) => void;
}

export const ClothingSelector: React.FC<ClothingSelectorProps> = ({
  selectedClothing,
  onSelectClothing,
}) => {
  const currentIndex = clothingItems.findIndex(item => item.id === selectedClothing.id);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect ensures the initial selection is correct
    if (!selectedClothing && clothingItems.length > 0) {
      onSelectClothing(clothingItems[0]);
    }
  }, [selectedClothing, onSelectClothing]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + clothingItems.length) % clothingItems.length;
    onSelectClothing(clothingItems[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % clothingItems.length;
    onSelectClothing(clothingItems[newIndex]);
  };
  
  if (!selectedClothing) {
    return null; // Or a loading state
  }

  return (
    <div className="flex flex-col h-full text-center">
      <h2 className="text-2xl font-bold font-display mb-2 text-stone-800">Pilih Wastra</h2>
      <p className="text-stone-600 mb-4 text-sm">Geser untuk melihat koleksi pakaian adat kami.</p>
      
      <div className="flex justify-center">
          <button
              onClick={handlePrev}
              aria-label="Previous clothing"
              className="p-3 rounded-full text-stone-600 hover:bg-amber-100/50 hover:text-amber-800 transition-colors"
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
          </button>
      </div>
      
      <div ref={carouselRef} className="flex-grow relative w-full h-[200px] my-2 overflow-hidden">
          <div
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(calc(50% - ${currentIndex * 100}px - 50px))` }} // item height 100px, half 50px
          >
              {clothingItems.map((item, index) => {
                  const isActive = index === currentIndex;
                  return (
                      <div
                          key={item.id}
                          className="w-full h-[100px] p-2 flex items-center justify-center transition-all duration-500 ease-in-out"
                          style={{
                              opacity: isActive ? 1 : 0.4,
                              transform: isActive ? 'scale(1)' : 'scale(0.85)',
                          }}
                      >
                          <div className={`w-full max-w-xs text-left p-2 rounded-xl border-2 transition-all duration-300 ease-in-out flex items-center space-x-4 ${
                              isActive
                              ? 'bg-white border-amber-600 shadow-lg'
                              : 'bg-white/70 border-stone-200'
                          }`}>
                              <img
                                  src={item.imageUrl}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                              />
                              <div className="flex-grow">
                                  <h3 className="font-semibold text-stone-900 leading-tight">{item.name}</h3>
                                  <p className="text-sm text-stone-500">{item.origin}</p>
                              </div>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>

      <div className="flex justify-center">
           <button
              onClick={handleNext}
              aria-label="Next clothing"
              className="p-3 rounded-full text-stone-600 hover:bg-amber-100/50 hover:text-amber-800 transition-colors"
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
          </button>
      </div>

       <div className="mt-6 text-center border-t border-stone-200 pt-4 px-2">
            <h3 className="font-display text-xl font-bold text-amber-900">{selectedClothing.name}</h3>
            <p className="text-sm text-stone-600 mt-2 max-h-24 overflow-y-auto">
                {selectedClothing.description}
            </p>
        </div>
    </div>
  );
};