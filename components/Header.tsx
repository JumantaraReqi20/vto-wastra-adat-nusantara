import React from 'react';
import Logo from '@/assets/logo/wastranusa-logo.png'

interface HeaderProps {
    onNavigate: (view: 'map' | 'studio') => void;
    currentView: 'map' | 'studio';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="WastraNusa Logo" className="w-20 h-20" />
            <span className="-ml-3 text-2xl font-bold text-stone-800 font-display">
              WastraNusa
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={() => onNavigate('map')}
              className={`px-3 py-2 md:px-4 rounded-md text-sm font-semibold transition-colors ${currentView === 'map' ? 'bg-amber-800 text-white' : 'text-stone-600 hover:bg-stone-100'}`}
            >
              Peta Budaya
            </button>
            <button 
              onClick={() => onNavigate('studio')}
              className={`px-3 py-2 md:px-4 rounded-md text-sm font-semibold transition-colors ${currentView === 'studio' ? 'bg-amber-800 text-white' : 'text-stone-600 hover:bg-stone-100'}`}
            >
              Studio Coba
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};