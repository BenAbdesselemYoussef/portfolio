'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { experiences } from '../data/resume';

export default function Experience() {
  const { language, t } = useLanguage();
  const { isGamified } = useTheme();

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
            {t.experience.title}
          </h2>
          <div className={`mt-4 w-20 h-1.5 bg-primary ${isGamified ? 'rounded-none h-3' : 'rounded-full'}`} />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t.experience.description}
          </p>
        </div>

        <div className="md:w-2/3 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-8 border-l ${isGamified ? 'border-l-4 border-primary' : 'border-primary/20'}`}>
              {/* Timeline dot */}
              <div className={`absolute top-0 -left-[7px] w-3 h-3 ${isGamified ? 'rounded-none w-4 h-4 -left-2' : 'rounded-full'} bg-primary border-4 border-background`} />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {exp.role[language]}
                  </h3>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 ${isGamified ? 'rounded-none border-2 border-primary' : 'rounded-full'}`}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <span className="text-primary font-bold">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.achievements[language].map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0 select-none">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-bold ${isGamified ? 'rounded-none border-2 border-black dark:border-white' : 'rounded-md'} hover:bg-primary/20 hover:text-primary transition-colors cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
