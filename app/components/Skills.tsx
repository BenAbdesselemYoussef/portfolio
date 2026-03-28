'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/resume';

export default function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            {t.skills.title}
          </h2>
          <div className="mt-4 w-20 h-1.5 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t.skills.description}
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.name[language]}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-background border border-border text-xs font-bold rounded-lg hover:border-primary/50 hover:text-primary transition-all cursor-default"
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
