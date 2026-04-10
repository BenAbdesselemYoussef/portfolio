'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { education, certifications, languages } from '../data/resume';

export default function Education() {
  const { language, t } = useLanguage();
  const { isGamified } = useTheme();

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            {t.education.title}
          </h2>
          <div className={`mt-4 w-20 h-1.5 bg-primary ${isGamified ? 'rounded-none h-3' : 'rounded-full'}`} />
        </div>

        <div className="md:w-2/3 space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {edu.school[language]}
                </h3>
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 ${isGamified ? 'rounded-none border-2 border-primary' : 'rounded-full'} whitespace-nowrap`}>
                  {edu.period}
                </span>
              </div>
              <p className="text-primary font-bold">{edu.degree[language]}</p>
              <p className="text-muted-foreground leading-relaxed">
                {edu.description[language]}
              </p>
            </div>
          ))}

          <div className="pt-12 border-t border-border/30">
            <h3 className="text-2xl font-heading font-extrabold tracking-tight mb-8">
              {t.education.certifications}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className={`p-6 ${isGamified ? 'rounded-none border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'rounded-2xl border-border/40'} bg-secondary/20 border`}>
                  <h4 className="font-bold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-border/30">
            <h3 className="text-2xl font-heading font-extrabold tracking-tight mb-8">
              Languages
            </h3>
            <div className="flex flex-wrap gap-8">
              {languages.map((lang, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">{lang.name[language]}</span>
                  <span className="text-sm text-primary font-medium tracking-wide uppercase">
                    {lang.level[language]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
