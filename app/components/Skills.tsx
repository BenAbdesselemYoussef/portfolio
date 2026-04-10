'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { skillCategories } from '../data/resume';

export default function Skills() {
  const { language, t } = useLanguage();
  const { isGamified } = useTheme();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            {t.skills.title}
          </h2>
          <div className={`mt-4 w-20 h-1.5 bg-primary ${isGamified ? 'rounded-none h-3' : 'rounded-full'}`} />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t.skills.description}
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-8 ${isGamified ? 'rounded-none border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none' : 'rounded-2xl border-border/50'} bg-secondary/30 border transition-all hover:border-primary/30`}>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className={`w-2 h-2 ${isGamified ? 'rounded-none w-3 h-3' : 'rounded-full'} bg-primary`} />
                {category.name[language]}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 bg-background border ${isGamified ? 'rounded-none border-2 border-black dark:border-white' : 'border-border rounded-lg'} text-[10px] font-bold hover:border-primary/50 hover:text-primary transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
