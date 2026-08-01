import type { Project } from '@/types'
import masaFinanceImg from '@/assets/masafinance.png'
import couvoirBafImg from '@/assets/couvoirbaf.png'

/**
 * Projets du portfolio.
 * Les images locales sont importées depuis src/assets.
 */
export const projects: Project[] = [
  {
    id: 'masafinance',
    title: 'MasaFinance',
    description:
      'Plateforme FinTech microservices pour digitaliser les services financiers et sécuriser les transactions d’un réseau de distribution.',
    longDescription:
      'Plateforme FinTech basée sur une architecture microservices, conçue pour digitaliser les services financiers et sécuriser les transactions électroniques entre les acteurs d’un réseau de distribution.',
    overview: [
      'MasaFinance digitalise les services financiers d’un réseau de distribution et sécurise les transactions électroniques entre ses différents acteurs.',
      'La plateforme repose sur une architecture microservices capable de traiter des opérations financières en temps réel, avec authentification sécurisée, gestion des transactions, processus KYC et service OTP.',
      'Stack globale du projet : frontend Vue.js 3 / TypeScript / Pinia / Tailwind, backend NestJS / Node.js / TypeORM / PostgreSQL, API REST et JWT.',
    ],
    image: masaFinanceImg,
    technologies: ['Vue.js 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Vite'],
    featured: true,
    year: '2025',
    period: 'juil. 2025 – déc. 2025',
    category: 'FinTech · Microservices',
    role: 'Développeur Frontend',
    accent: '#12B76A',
    caseStudy: true,
    contributionTeaser: 'Dashboards Chef Agent & Distributeur (Master)',
    contributionNote:
      'Mon apport est exclusivement frontend : j’ai conçu et développé entièrement le Dashboard Chef Agent et le Dashboard Distributeur (Master).',
    contributionHighlights: [
      {
        title: 'Dashboard Chef Agent',
        description:
          'Conception et développement complets de l’interface Chef Agent (UI, workflows, intégration API).',
      },
      {
        title: 'Dashboard Distributeur (Master)',
        description:
          'Conception et développement complets de l’espace Distributeur Master (supervision et pilotage).',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Architecture UI et composants réutilisables pour les deux dashboards',
          'Intégration des APIs REST et de l’authentification côté interface',
          'Workflows métier liés aux rôles Chef Agent et Distributeur (Master)',
          'Stack : Vue.js 3, TypeScript, Vite, Pinia, Tailwind CSS',
        ],
      },
    ],
    features: [
      {
        title: 'Digitalisation financière',
        description:
          'Services financiers digitalisés pour les acteurs du réseau de distribution.',
      },
      {
        title: 'Transactions sécurisées',
        description:
          'Traitement d’opérations électroniques fiables entre les différents acteurs.',
      },
      {
        title: 'Dashboards métier',
        description:
          'Espaces web pour administrateurs, distributeurs et chefs agents.',
      },
      {
        title: 'Authentification JWT',
        description: 'Accès sécurisé aux espaces applicatifs via tokens JWT.',
      },
      {
        title: 'KYC & OTP',
        description:
          'Vérification d’identité et mots de passe à usage unique pour sécuriser les opérations.',
      },
      {
        title: 'Temps réel',
        description:
          'Architecture capable de traiter des opérations financières en temps réel.',
      },
    ],
    architecture: [
      {
        title: 'Clients & dashboards',
        description:
          'Interfaces web métier (admin, distributeur, chef agent) sur le réseau FinTech.',
      },
      {
        title: 'API REST',
        description: 'Couche d’API sécurisées exposant les services métier.',
      },
      {
        title: 'Auth & sécurité',
        description: 'JWT, OTP et contrôles d’accès pour protéger les flux.',
      },
      {
        title: 'Services métier',
        description: 'Transactions, KYC et logique financière distribuée.',
      },
      {
        title: 'PostgreSQL + TypeORM',
        description: 'Persistance relationnelle des données critiques.',
      },
    ],
    techStack: [
      {
        label: 'Frontend',
        items: ['Vue.js 3', 'TypeScript', 'Vite', 'Pinia', 'Tailwind CSS'],
      },
      {
        label: 'Backend',
        items: ['NestJS', 'Node.js', 'TypeORM', 'PostgreSQL', 'REST API', 'JWT'],
      },
      { label: 'Outils', items: ['Git', 'GitHub', 'Postman'] },
      { label: 'Infra', items: ['Microservices', 'MinIO'] },
    ],
    gallery: [masaFinanceImg],
  },
  {
    id: 'couvoir-baf',
    title: 'Couvoir BAF',
    description:
      'ERP de gestion pour couvoir avicole : digitalisation des opérations de l’œuf à la vente des poussins.',
    longDescription:
      'ERP conçu pour digitaliser et centraliser les opérations d’un couvoir avicole, depuis l’importation des œufs jusqu’à la vente des poussins, en passant par la traçabilité, la gestion financière et le reporting.',
    overview: [
      'Couvoir BAF centralise le cycle métier du couvoir : stocks d’œufs, incubations, éclosions, ventes, clients, fournisseurs, finances et trésorerie.',
      'L’application permet de suivre la production et les flux commerciaux jusqu’à la vente des poussins, avec une traçabilité complète et des rapports pour le pilotage.',
      'Le backend, développé avec NestJS, TypeScript, TypeORM et MySQL, expose des API REST sécurisées (JWT) documentées via Swagger.',
    ],
    image: couvoirBafImg,
    technologies: ['NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'JWT', 'Swagger'],
    featured: true,
    year: '2026',
    period: 'oct. 2025 – janv. 2026',
    category: 'ERP · Couvoir avicole',
    role: 'Développeur Backend',
    accent: '#EA580C',
    caseStudy: true,
    contributionTeaser: 'Architecture backend, modules métier & API REST NestJS',
    contributionNote:
      'Dans une équipe de deux développeurs, mon apport est backend : conception de l’architecture, modules métier et API REST sécurisées avec NestJS.',
    contributionHighlights: [
      {
        title: 'Architecture backend',
        description:
          'Contribution à la conception de l’architecture backend et à la structuration des services métier.',
      },
      {
        title: 'Modules & API REST',
        description:
          'Développement de modules métier et d’API REST sécurisées (JWT) documentées avec Swagger.',
      },
    ],
    contributions: [
      {
        area: 'backend',
        items: [
          'Authentification, utilisateurs et rôles',
          'Gestion des fournisseurs et des clients',
          'Ventes, paiements et trésorerie',
          'Traçabilité des opérations du couvoir',
          'Reporting et règles métier complexes',
          'Stack : NestJS, TypeScript, MySQL, TypeORM, JWT, Swagger',
        ],
      },
    ],
    features: [
      {
        title: 'Cycle œufs → poussins',
        description:
          'Suivi de l’importation des œufs jusqu’à la vente des poussins.',
      },
      {
        title: 'Stocks & production',
        description: 'Œufs, incubations et éclosions centralisés.',
      },
      {
        title: 'Ventes & commerce',
        description: 'Clients, fournisseurs et ventes dans un même ERP.',
      },
      {
        title: 'Finances & trésorerie',
        description: 'Paiements, caisses, charges et pilotage financier.',
      },
      {
        title: 'Traçabilité',
        description: 'Historabilité des opérations tout au long de la chaîne.',
      },
      {
        title: 'Reporting',
        description: 'Rapports pour le suivi et la prise de décision.',
      },
    ],
    architecture: [
      {
        title: 'Clients ERP',
        description: 'Interfaces de gestion pour les opérations du couvoir.',
      },
      {
        title: 'API REST NestJS',
        description: 'Endpoints métier sécurisés et documentés (Swagger).',
      },
      {
        title: 'Auth & rôles',
        description: 'JWT, utilisateurs et contrôle d’accès par rôles.',
      },
      {
        title: 'Modules métier',
        description: 'Stocks, ventes, finances, traçabilité et rapports.',
      },
      {
        title: 'MySQL + TypeORM',
        description: 'Modélisation et persistance des données entreprise.',
      },
    ],
    techStack: [
      {
        label: 'Backend',
        items: ['NestJS', 'TypeScript', 'TypeORM', 'MySQL', 'REST API', 'JWT'],
      },
      { label: 'Docs', items: ['Swagger'] },
      { label: 'Outils', items: ['Git'] },
      { label: 'Focus', items: ['Architecture backend', 'Règles métier', 'Modélisation DB'] },
    ],
    gallery: [couvoirBafImg],
  },
  {
    id: 'pulse-api',
    title: 'Pulse API Gateway',
    description:
      'Gateway REST haute performance avec auth JWT, rate limiting et monitoring.',
    longDescription:
      "Couche d'API centralisée pour microservices, avec documentation OpenAPI et observabilité.",
    image: '/projects/pulse.svg',
    technologies: ['Node.js', 'FastAPI', 'MongoDB', 'Docker', 'Redis'],
    github: 'https://github.com/didier-lobognon/pulse-api',
    demo: 'https://pulse-demo.example.com',
    featured: true,
    year: '2024',
    category: 'API',
  },
  {
    id: 'haven-crm',
    title: 'Haven CRM',
    description:
      'CRM métier pour équipes commerciales : pipeline, scoring et automatisations.',
    longDescription:
      'Application métier orientée productivité, avec rôles, permissions et reporting avancé.',
    image: '/projects/haven.svg',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/didier-lobognon/haven-crm',
    year: '2024',
  },
  {
    id: 'orbit-portfolio',
    title: 'Orbit Studio',
    description:
      'Site vitrine immersif pour une agence créative, animations GSAP et SEO soigné.',
    longDescription:
      'Landing page Awwwards-like avec scroll storytelling et performance Lighthouse élevée.',
    image: '/projects/orbit.svg',
    technologies: ['React', 'GSAP', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/didier-lobognon/orbit-studio',
    demo: 'https://orbit-demo.example.com',
    year: '2024',
  },
  {
    id: 'forge-tasks',
    title: 'Forge Tasks',
    description:
      'Outil collaboratif de gestion de tâches avec synchronisation temps réel.',
    longDescription:
      'Kanban moderne, commentaires, notifications et intégrations API.',
    image: '/projects/forge.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/didier-lobognon/forge-tasks',
    year: '2023',
  },
]
