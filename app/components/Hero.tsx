'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-12 md:pt-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.hero.availability}
        </div>

        <h1 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tight leading-[1.1]">
          {t.hero.title.split(' ').map((word, i) => {
            const isName = ['Youssef', 'Ben', 'Abdesselem'].includes(word);
            return (
              <span key={i} className={isName ? 'text-primary' : 'text-foreground'}>
                {word}{' '}
              </span>
            );
          })}
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 capitalize"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </a>
          <a
            href="#experience"
            className="px-8 py-4 border border-border hover:bg-secondary/50 font-bold rounded-full transition-all"
          >
            {t.hero.details}
          </a>
        </div>
      </div>
    </section>
  );
}
