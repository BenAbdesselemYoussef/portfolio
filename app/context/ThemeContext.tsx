'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isGamified: boolean;
  toggleTheme: () => void;
  toggleGamify: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isGamified, setIsGamified] = useState<boolean>(false);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);

    // Gamify initialization
    const savedGamify = localStorage.getItem('portfolio-gamified') === 'true';
    setIsGamified(savedGamify);

    // Update root classes
    updateRootClasses(initialTheme, savedGamify);
  }, []);

  const updateRootClasses = (currentTheme: Theme, gamified: boolean) => {
    const classes: string[] = [currentTheme];
    if (gamified) classes.push('gamified');
    document.documentElement.className = classes.join(' ');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateRootClasses(newTheme, isGamified);
  };

  const toggleGamify = () => {
    const newGamified = !isGamified;
    setIsGamified(newGamified);
    localStorage.setItem('portfolio-gamified', String(newGamified));
    updateRootClasses(theme, newGamified);

    // Play retro sound when entering gamified mode
    if (newGamified) {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2042/2042-preview.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {}); // Catch-all for browser autoplay restrictions
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, isGamified, toggleTheme, toggleGamify }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
