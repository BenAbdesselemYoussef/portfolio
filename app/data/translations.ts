export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    details: string;
    sayHello: string;
    contactSubtitle: string;
    availability: string;
  };
  experience: {
    title: string;
    present: string;
    description: string;
  };
  skills: {
    title: string;
    description: string;
  };
  education: {
    title: string;
    certifications: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      title: "Hi, I'm Youssef Ben Abdesselem",
      subtitle: "Full Stack Developer specializing in AI-driven solutions, Web Scraping, and scalable architectures. Crafting high-performance digital experiences since 2021.",
      cta: "Let's Connect",
      details: "View My Work",
      sayHello: "Say Hello",
      contactSubtitle: "Interested in collaborating or have a project in mind? Let's talk about how I can help you build your next big thing.",
      availability: "Available for New Projects",
    },
    experience: {
      title: 'Professional Experience',
      present: 'Present',
      description: 'Over 4 years of experience building scalable applications and specialized systems for diverse industries.',
    },
    skills: {
      title: 'Technical Skills',
      description: 'A comprehensive stack of modern technologies for building robust, high-performance web applications and specialized AI solutions.',
    },
    education: {
      title: 'Education',
      certifications: 'Certifications',
    },
    footer: {
      text: '© 2026 Youssef Ben Abdesselem. All rights reserved.',
    },
  },
  fr: {
    nav: {
      experience: 'Expérience',
      skills: 'Compétences',
      education: 'Éducation',
      contact: 'Contact',
    },
    hero: {
      title: "Salut, Je suis Youssef Ben Abdesselem",
      subtitle: "Développeur Full Stack spécialisé dans les solutions pilotées par l'IA, le Web Scraping et les architectures scalables. Création d'expériences numériques performantes depuis 2021.",
      cta: "Contactez-moi",
      details: "Voir mes réalisations",
      sayHello: "Dites Bonjour",
      contactSubtitle: "Intéressé par une collaboration ou vous avez un projet en tête ? Discutons de la manière dont je peux vous aider à réaliser votre prochain grand projet.",
      availability: "Disponible pour de nouveaux projets",
    },
    experience: {
      title: 'Expérience Professionnelle',
      present: 'Présent',
      description: "Plus de 4 ans d'expérience dans la création d'applications évolutives et de systèmes spécialisés pour diverses industries.",
    },
    skills: {
      title: 'Compétences Techniques',
      description: "Une pile complète de technologies modernes pour créer des applications web robustes et performantes et des solutions d'IA spécialisées.",
    },
    education: {
      title: 'Éducation',
      certifications: 'Certifications',
    },
    footer: {
      text: '© 2026 Youssef Ben Abdesselem. Tous droits réservés.',
    },
  },
};
