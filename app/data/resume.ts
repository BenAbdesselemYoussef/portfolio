export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: { en: string; fr: string };
  achievements: { en: string[]; fr: string[] };
  techStack: string[];
}

export interface EducationItem {
  degree: { en: string; fr: string };
  school: { en: string; fr: string };
  period: string;
  description: { en: string; fr: string };
}

export interface SkillCategory {
  name: { en: string; fr: string };
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Freelance / Équipe indépendante",
    location: "Remote",
    period: "06/2025 – Present",
    role: { en: "Freelance Full Stack Developer", fr: "Développeur Full Stack Freelance" },
    achievements: {
      en: [
        "Collaborated within a distributed freelance team to deliver multiple client projects covering web development, automation, and system integrations",
        "Developed and deployed custom web applications, ensuring scalability, performance, and responsive design",
        "Designed and maintained web scraping solutions to extract and process large volumes of data",
        "Integrated MCP-based systems and third-party APIs for seamless service communication",
        "Optimized application performance and reliability, reducing response times"
      ],
      fr: [
        "Collaboré au sein d’une équipe freelance distribuée pour livrer plusieurs projets clients couvrant le développement web, l’automatisation et les intégrations systèmes",
        "Développé et déployé des applications web sur mesure répondant aux besoins des clients, en garantissant scalabilité, performance et design responsive",
        "Conçu et maintenu des solutions de web scraping permettant d’extraire et traiter de larges volumes de données",
        "Intégré des systèmes basés sur MCP ainsi que des APIs tierces, assurant une communication fluide entre les services",
        "Optimisé les performances et la fiabilité des applications, réduisant les temps de réponse"
      ]
    },
    techStack: ["Node.js", "Next.js", "React", "Tailwind CSS", "Puppeteer", "Playwright", "Python", "MCP", "Anthropic API", "Gemini API", "OpenAI API", "MySQL", "MongoDB", "Git"]
  },
  {
    company: "Forvis Mazars",
    location: "Tunis, Tunisie",
    period: "11/2024 – 05/2025",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    achievements: {
      en: [
        "Customized and optimized the internal asset library, improving UX for 200+ consultants and reducing onboarding time by 30%",
        "Developed and maintained an audit campaign management app used by 500+ auditors, reducing manual work by 25%",
        "Contributed to a survey application capable of handling 20,000+ responses per campaign",
        "Delivered 10+ new features in collaboration with R&D and TMA teams",
        "Improved SEO performance of internal portals by optimizing metadata and page structure",
        "Actively participated in SCRUM rituals, contributing to a 20% improvement in team delivery efficiency"
      ],
      fr: [
        "Personnalisé et optimisé la bibliothèque interne d’assets, améliorant l’expérience utilisateur pour plus de 200 consultants et réduisant le temps d’onboarding de 30%",
        "Développé et maintenu une application de gestion des campagnes d’audit utilisée par plus de 500 auditeurs, réduisant le travail manuel de 25%",
        "Contribué au développement d’une application de sondage capable de gérer plus de 20 000 réponses par campagne",
        "Livré plus de 10 nouvelles fonctionnalités en collaboration avec les équipes R&D et TMA",
        "Amélioré les performances SEO des portails internes en optimisant les métadonnées et la structure des pages",
        "Participé activement aux rituels SCRUM, contribuant à une amélioration de 20% de l’efficacité de livraison"
      ]
    },
    techStack: ["Next.js", "Tailwind CSS", "Mazars UI", "Strapi API", "MySQL", "GitLab", "SCRUM", "Jira", "Jest"]
  },
  {
    company: "Acoba",
    location: "Monastir, Tunisie",
    period: "11/2022 – 04/2024",
    role: { en: "Frontend Web Developer", fr: "Développeur Web Frontend" },
    achievements: {
      en: [
        "Designed a high-performance VOD system serving 150,000+ users, managing 1M+ records for smooth streaming",
        "Designed a professional dashboard to manage and monitor 1,000+ cameras per user",
        "Developed 20+ responsive and reusable components (tables, forms, wizards)",
        "Developed an advanced state management system with Redux Toolkit and React Context",
        "Optimized project architecture, reducing operational costs by 25% and latency by 50ms",
        "Optimized SQL queries to handle 15+ simultaneous filters efficiently",
        "Secured applications against 10+ known vulnerabilities (DDoS, SQL injection, CSRF)"
      ],
      fr: [
        "Conception d'un système de vidéo à la demande hautement performant au service de plus de 150 000 utilisateurs",
        "Conception d'un tableau de bord professionnel pour gérer et surveiller efficacement plus de 1 000 caméras par utilisateur",
        "Développement de plus de 20 composants réactifs et réutilisables (tableaux, formulaires, assistants)",
        "Développement d’un système de gestion d'état avancé avec Redux Toolkit et React Context",
        "Architecture de projet optimisée, réduisant les coûts opérationnels de 25 % et la latence de plus de 50 ms",
        "Requêtes SQL optimisées pour gérer efficacement plus de 15 filtres simultanés",
        "Applications sécurisées contre plus de 10 vulnérabilités connues (DDoS, injection SQL, CSRF)"
      ]
    },
    techStack: ["NextJS", "ReactJS", "MUI", "Tailwind CSS", "Redux Toolkit", "NodeJS", "Redis", "SocketIO", "JWT", "AWS", "MySQL", "MongoDB", "Jest", "Vitest"]
  },
  {
    company: "Open Eyes Consulting",
    location: "Monastir, Tunisie",
    period: "02/2022 – 10/2022",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    achievements: {
      en: [
        "Rationalized 60+ user stories, improving sprint efficiency and team productivity",
        "Developed a real-time chat module and notification system with <50ms latency",
        "Implemented Figma designs with precision, achieving 100% customer satisfaction",
        "Optimized app performance with a 30% reduction in resource usage via conditional loading and memoization",
        "Enhanced search functionality using Elasticsearch, improving relevance by 40%"
      ],
      fr: [
        "Rationalisation de plus de 60 user stories, améliorant l'efficacité et la productivité de l'équipe",
        "Développement d'un module de chat en temps réel et d'un système de notification avec une latence <50ms",
        "Mise en œuvre de la conception Figma avec précision, satisfaction client à 100%",
        "Optimisation de la performance de l'application avec une réduction de 30% de l'utilisation des ressources",
        "Fonctionnalité de recherche améliorée grâce à Elasticsearch, améliorant la pertinence de 40%"
      ]
    },
    techStack: ["ReactJS", "Redux Toolkit", "Redux Saga", "Quickblox", "NodeJS", "ElasticSearch", "Firebase", "MySQL"]
  }
];

export const education: EducationItem[] = [
  {
    degree: { en: "Software Engineering Degree", fr: "Diplôme d'Ingénieur en Génie Logiciel" },
    school: { en: "Superior Institute of Applied Sciences and Technology of Sousse", fr: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse" },
    period: "10/2016 – 10/2021",
    description: {
      en: "Studied 2 years in an integrated preparatory program, then 3 years in the software engineering program specializing in software architecture.",
      fr: "2 ans de cycle préparatoire intégré, puis 3 ans en génie logiciel avec une spécialisation en architecture logicielle."
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Frontend", fr: "Frontend" },
    skills: ["ReactJS", "Next.js", "Angular", "Tailwind CSS", "MUI", "Redux Toolkit"]
  },
  {
    name: { en: "Backend", fr: "Backend" },
    skills: ["NodeJS", "Django", "MySQL", "MongoDB", "Redis", "ElasticSearch"]
  },
  {
    name: { en: "Cloud & DevOps", fr: "Cloud & DevOps" },
    skills: ["AWS", "Firebase", "Git", "GitLab", "CI/CD", "SCRUM"]
  },
  {
    name: { en: "AI & Data", fr: "IA & Données" },
    skills: ["MCP", "Anthropic API", "Gemini API", "OpenAI API", "Web Scraping", "Puppeteer/Playwright"]
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    description: {
      en: "Validates a fundamental and global understanding of the AWS cloud, its services, and terminology.",
      fr: "Valide une compréhension fondamentale et globale du cloud AWS, de ses services et de sa terminologie."
    }
  }
];

export const languages = [
  { name: { en: "French", fr: "Français" }, level: { en: "Native/Fluent", fr: "Natif/Courant" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "Professional", fr: "Professionnel" } },
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "Natif" } }
];
