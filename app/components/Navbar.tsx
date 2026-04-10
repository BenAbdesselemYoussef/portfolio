'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, isGamified, toggleTheme, toggleGamify } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-border/40 backdrop-blur-lg">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-md" />
        <span className="hidden sm:inline text-xl md:text-2xl font-heading font-bold text-foreground">
          Youssef <span className="text-primary">BA</span>
        </span>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#experience" className="hover:text-primary transition-colors">{t.nav.experience}</a>
          <a href="#skills" className="hover:text-primary transition-colors">{t.nav.skills}</a>
          <a href="#education" className="hover:text-primary transition-colors">{t.nav.education}</a>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 border border-border hover:bg-primary/10 transition-all text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="18.36" x2="5.64" y2="19.78" /><line x1="18.36" y1="4.22" x2="19.78" y2="5.64" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>

          {/* Gamify Toggle */}
          <button
            onClick={toggleGamify}
            className={`p-2 rounded-full border transition-all ${isGamified ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(227,27,35,0.4)]' : 'bg-secondary/50 border-border hover:bg-primary/10 text-foreground'}`}
            aria-label="Toggle Gamify Mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 12h4" />
              <path d="M8 10v4" />
              <circle cx="15" cy="10" r="1" />
              <circle cx="15" cy="14" r="1" />
              <circle cx="18" cy="12" r="1" />
            </svg>
          </button>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-full border border-border">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all no-capitalize ${language === 'en' ? 'bg-primary text-white shadow-lg' : 'hover:bg-primary/10'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all no-capitalize ${language === 'fr' ? 'bg-primary text-white shadow-lg' : 'hover:bg-primary/10'}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
