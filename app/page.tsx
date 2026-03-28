'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />

      {/* Scrollable Content */}
      <div className="flex-1">
        <Hero />

        <div id="experience">
          <Experience />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="education">
          <Education />
        </div>

        {/* Contact Section Placeholder */}
        <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-8">
            {t.nav.contact}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
            {t.hero.contactSubtitle}
          </p>
          <a
            href="mailto:youssefbenabdesselem@gmail.com?subject=Hi%20I%20am%20Interested&body=Let's%20reach%20out"
            className="inline-block px-12 py-5 bg-primary text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/20 capitalize"
          >
            {t.hero.sayHello}
          </a>
        </section>
      </div>

      <footer className="py-12 px-6 border-t border-border/30 text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm">{t.footer.text}</p>
          <div className="flex items-center gap-3">
            <span className="text-lg font-heading font-bold text-foreground tracking-tight">Youssef Ben Abdesselem</span>
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain rounded-md" />
          </div>
        </div>
      </footer>
    </main>
  );
}
