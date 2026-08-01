import type { Project } from '@/types'
import masaFinanceImg from '@/assets/masafinance.png'
import couvoirBafImg from '@/assets/couvoirbaf.png'
import dynexc1 from '@/assets/dynexc1.png'
import dynexc2 from '@/assets/dynexc2.png'
import dynexc3 from '@/assets/dynexc3.png'
import dynexcDashboard from '@/assets/dynexc-dasbaord.png'
import gpImg from '@/assets/gp.png'
import gp1 from '@/assets/gp1.png'
import gp2 from '@/assets/gp2.png'
import gp3 from '@/assets/gp3.png'

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
    id: 'dynexcafrica',
    title: 'DynExcAfrica',
    description:
      'Site officiel de l’ONG DynExcAfrica : vitrine bilingue, formulaires métier et back-office admin.',
    longDescription:
      'Application web de l’ONG DynExcAfrica (DEA), dédiée à l’autonomisation des femmes africaines dans les domaines STEM. Site institutionnel et opérationnel : présentation de la mission, publications, inscriptions, partenariats, dons et administration sécurisée.',
    overview: [
      'DynExcAfrica est un monorepo full-stack : frontend React (site public + dashboard admin) et backend NestJS (API, auth, inscriptions, uploads), déployés ensemble en Docker derrière Traefik sur www.dynexcafrica.org.',
      'Le site présente la mission, l’équipe, les projets et programmes, publie histoires de réussite, partenaires et rapports, et recueille inscriptions, demandes de partenariat, candidatures et dons.',
      'L’API est consommée via /api (backend non exposé directement). Données MySQL (Hostinger), fichiers sur MinIO (S3), reverse proxy Traefik avec HTTPS Let’s Encrypt, Nginx pour servir le frontend.',
    ],
    image: dynexc1,
    technologies: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Docker', 'Traefik'],
    featured: true,
    year: '2025',
    category: 'ONG · STEM Africa',
    role: 'Développeur Full Stack',
    accent: '#3B82F6',
    caseStudy: true,
    demo: 'https://www.dynexcafrica.org',
    contributionTeaser: 'Vitrine bilingue, formulaires métier & admin + API NestJS',
    contributionNote:
      'Développement full-stack du site officiel : frontend React (vitrine + admin) et backend NestJS (API, auth, uploads), déployés en Docker derrière Traefik.',
    contributionHighlights: [
      {
        title: 'Frontend public & admin',
        description:
          'Interface React bilingue (FR/EN) : vitrine institutionnelle, formulaires métier et dashboard d’administration.',
      },
      {
        title: 'API NestJS & déploiement',
        description:
          'API REST sécurisée (JWT), MySQL, MinIO, documentation Swagger, Docker Compose + Traefik HTTPS.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Site public React 18 + TypeScript (Vite, Tailwind, Framer Motion)',
          'Dashboard admin et navigation React Router',
          'i18n FR/EN (react-i18next), SEO (react-helmet-async)',
          'Formulaires React Hook Form + Zod, EmailJS',
          'Leaflet, Swiper, Recharts pour cartes, carrousels et graphiques',
        ],
      },
      {
        area: 'backend',
        items: [
          'API NestJS : données, auth admin (JWT / Passport), bcrypt',
          'TypeORM + MySQL, Swagger',
          'Uploads Multer + AWS SDK S3 vers MinIO',
          'Exports PDFKit / ExcelJS',
          'Docker Compose, Nginx, Traefik (SSL), MinIO',
        ],
      },
    ],
    features: [
      {
        title: 'Vitrine institutionnelle',
        description: 'Mission, équipe, projets, programmes et contenus publiés.',
      },
      {
        title: 'Histoires & partenaires',
        description: 'Success stories, partenaires et rapports accessibles au public.',
      },
      {
        title: 'Formulaires métier',
        description: 'Inscriptions, partenariats, candidatures et dons.',
      },
      {
        title: 'Admin sécurisé',
        description: 'Back-office pour gérer le contenu et les demandes.',
      },
      {
        title: 'Bilingue FR / EN',
        description: 'Expérience internationale avec react-i18next.',
      },
      {
        title: 'Prod Docker + Traefik',
        description: 'Déploiement HTTPS sur www.dynexcafrica.org.',
      },
    ],
    architecture: [
      {
        title: 'Frontend',
        description: 'React (vitrine + admin), build Vite, servi par Nginx.',
      },
      {
        title: 'API /api',
        description: 'NestJS — données, auth, inscriptions, uploads (non exposé directement).',
      },
      {
        title: 'MySQL',
        description: 'Base de données Hostinger via TypeORM.',
      },
      {
        title: 'MinIO',
        description: 'Stockage objets compatible S3 pour les fichiers.',
      },
      {
        title: 'Traefik + Docker',
        description: 'Reverse proxy, SSL Let’s Encrypt, orchestration Compose.',
      },
    ],
    techStack: [
      {
        label: 'Frontend',
        items: [
          'React 18',
          'TypeScript',
          'Vite',
          'Tailwind CSS',
          'Framer Motion',
          'react-i18next',
        ],
      },
      {
        label: 'Backend',
        items: ['NestJS', 'TypeORM', 'MySQL', 'JWT', 'Swagger', 'MinIO'],
      },
      {
        label: 'DevOps',
        items: ['Docker', 'Docker Compose', 'Nginx', 'Traefik'],
      },
      {
        label: 'Extras',
        items: ['Zod', 'Leaflet', 'Recharts', 'PDFKit', 'ExcelJS'],
      },
    ],
    gallery: [dynexc1, dynexc2, dynexc3, dynexcDashboard],
  },
  {
    id: 'dynexc-gp',
    title: 'DynExc GP',
    description:
      'Plateforme interne RH / activité / événements pour DynExcAfrica & FMK — React, Express, MySQL.',
    longDescription:
      'Application web interne pour DynExcAfrica et FMK : pilotage du personnel, présences, tâches / timesheets, statistiques, programmes & événements, inscriptions publiques, rapports d’activité et notifications email.',
    overview: [
      'DynExc GP centralise le quotidien organisationnel : comptes et rôles, pointages (entrées–sorties, temps Lab), timesheets (création, priorités, échéances, validation), stats globales et personnelles.',
      'Elle couvre aussi les programmes et événements (classiques, spéciaux, YWDP, éditions CNR, postes), les inscriptions publiques (visiteurs, YWDP, formulaires + PIN), les rapports d’activité (génération / envoi, enrichissement IA optionnel) et les mails automatisés (assignation, retards, récaps hebdo, digests Super Admin).',
      'Architecture : React → Traefik HTTPS → Frontend Nginx + Backend Express (API, cron, mails) → MySQL Hostinger. Monorepo déployé en Docker, CI/CD GitHub Actions vers VPS (gp.dynexcafrica.org).',
    ],
    image: gpImg,
    technologies: ['React', 'TypeScript', 'Express', 'MySQL', 'Docker', 'Traefik'],
    featured: true,
    year: '2026',
    category: 'RH · Plateforme interne',
    role: 'Développeur Full Stack',
    accent: '#F8FAFC',
    caseStudy: true,
    demo: 'https://gp.dynexcafrica.org',
    github: 'https://github.com/IT-DYNEXCAFRICA/Plateforme-de-Gestion-DynExcAfrica',
    contributionTeaser: 'RH, pointages, timesheets, événements, mails & CI/CD Docker',
    contributionNote:
      'Développement full-stack de la plateforme de gestion : frontend React (rôles Standard / Gestionnaire / Super Admin) et backend Express (API, cron, emails, rapports), déployée en Docker derrière Traefik avec CI/CD GitHub Actions.',
    contributionHighlights: [
      {
        title: 'Espace multi-rôles',
        description:
          'Parcours Standard, Gestionnaire et Super Admin : dashboard, timesheet, pointage, back-office et digests org.',
      },
      {
        title: 'Automatisations & prod',
        description:
          'Mails planifiés (rétards, récaps, digests), rapports (+ IA optionnelle), Docker + Traefik et deploy GitHub Actions.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'UI React 18 + TypeScript (Vite, Tailwind, React Router)',
          'Data fetching TanStack Query, Axios, toasts (react-hot-toast)',
          'Graphiques Chart.js / ECharts, exports PDF/Excel',
          'Temps réel Socket.IO client',
        ],
      },
      {
        area: 'backend',
        items: [
          'API Express 5 + MySQL (mysql2 pool), JWT / bcrypt',
          'Sécurité Helmet, CORS, rate-limit',
          'Nodemailer + node-cron (digests, récaps)',
          'Socket.IO, Puppeteer / docx, enrichissement IA (Gemini / Ollama)',
          'Docker Compose, Traefik, Nginx, GitHub Actions → VPS',
        ],
      },
    ],
    features: [
      {
        title: 'Personnel & rôles',
        description: 'Comptes, civilité, organisation, actif/inactif, 3 niveaux d’accès.',
      },
      {
        title: 'Présences / pointages',
        description: 'Entrées–sorties et temps Lab au quotidien.',
      },
      {
        title: 'Tâches & timesheets',
        description: 'Création, suivi, priorités, échéances et validation.',
      },
      {
        title: 'Programmes & événements',
        description: 'Événements, YWDP, éditions CNR et postes.',
      },
      {
        title: 'Inscriptions publiques',
        description: 'Visiteurs, YWDP, formulaires spéciaux + code PIN.',
      },
      {
        title: 'Rapports & digests',
        description: 'Génération / envoi, IA optionnelle, digests Super Admin (lundi 8h Abidjan).',
      },
    ],
    architecture: [
      {
        title: 'Navigateur React',
        description: 'Interfaces selon le rôle (Standard, Gestionnaire, Super Admin).',
      },
      {
        title: 'Traefik HTTPS',
        description: 'Reverse proxy + TLS Let’s Encrypt.',
      },
      {
        title: 'Frontend Nginx',
        description: 'Build React servi en conteneur.',
      },
      {
        title: 'Backend Express',
        description: 'API REST, cron, mails et WebSocket.',
      },
      {
        title: 'MySQL Hostinger',
        description: 'Persistance distante des données org.',
      },
    ],
    techStack: [
      {
        label: 'Frontend',
        items: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'React Query', 'Socket.IO'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express 5', 'MySQL', 'JWT', 'Nodemailer', 'node-cron'],
      },
      {
        label: 'DevOps',
        items: ['Docker', 'Traefik', 'Nginx', 'GitHub Actions', 'VPS'],
      },
      {
        label: 'Extras',
        items: ['Chart.js', 'jsPDF', 'Puppeteer', 'Gemini / Ollama'],
      },
    ],
    gallery: [gpImg, gp1, gp2, gp3],
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
