import type { Project } from '@/types'
import masaFinanceImg from '@/assets/projects/masafinance/masafinance.png'
import couvoirBafImg from '@/assets/projects/couvoir-baf/couvoirbaf.png'
import dynexc1 from '@/assets/projects/dynexcafrica/dynexc1.png'
import dynexc2 from '@/assets/projects/dynexcafrica/dynexc2.png'
import dynexc3 from '@/assets/projects/dynexcafrica/dynexc3.png'
import dynexcDashboard from '@/assets/projects/dynexcafrica/dynexc-dasbaord.png'
import gpImg from '@/assets/projects/dynexc-gp/gp.png'
import gp1 from '@/assets/projects/dynexc-gp/gp1.png'
import gp2 from '@/assets/projects/dynexc-gp/gp2.png'
import gp3 from '@/assets/projects/dynexc-gp/gp3.png'
import kanieImg from '@/assets/projects/kanie/kanie.png'
import kanie1 from '@/assets/projects/kanie/kanie1.png'
import kanie2 from '@/assets/projects/kanie/kanie2.png'
import kanie3 from '@/assets/projects/kanie/kanie3.png'
import cnrImg from '@/assets/projects/cnr/cnr.png'
import cnr1 from '@/assets/projects/cnr/cnr1.png'
import cnr2 from '@/assets/projects/cnr/cnr2.png'
import ccnrClassementImg from '@/assets/projects/ccnr-classement/classmeent-cnr.png'
import ccnrClassement1 from '@/assets/projects/ccnr-classement/classmeent-cnr1.png'
import ccnrClassement2 from '@/assets/projects/ccnr-classement/classmeent-cnr2.png'
import ccnrClassement3 from '@/assets/projects/ccnr-classement/classmeent-cnr3.png'
import ccnrClassement4 from '@/assets/projects/ccnr-classement/classmeent-cnr4.png'
import ccnrClassement5 from '@/assets/projects/ccnr-classement/classmeent-cnr5.png'
import ccnrClassement6 from '@/assets/projects/ccnr-classement/classement-cnr6.png'
import ccnrClassement7 from '@/assets/projects/ccnr-classement/classement-cnr7.png'
import ccnrClassement8 from '@/assets/projects/ccnr-classement/classement-cnr8.png'
import ccnrClassement9 from '@/assets/projects/ccnr-classement/classement-cnr9.png'
import mecagirlsImg from '@/assets/projects/mecagirls/mecagirls.png'
import mecagirls1 from '@/assets/projects/mecagirls/mecagirls1.png'
import mecagirls2 from '@/assets/projects/mecagirls/mecagirls2.png'
import mecagirls3 from '@/assets/projects/mecagirls/mecagirls3.png'
import mecagirls4 from '@/assets/projects/mecagirls/mecagirls4.png'
import mecagirls5 from '@/assets/projects/mecagirls/mecagirls5.png'
import mecagirls6 from '@/assets/projects/mecagirls/mecagirls6.png'
import mecagirls7 from '@/assets/projects/mecagirls/mecagirls7.png'
import classstemImg from '@/assets/projects/classstem/classstem.png'
import classstem1 from '@/assets/projects/classstem/classstem1.png'
import classstem2 from '@/assets/projects/classstem/classstem2.png'
import classstem3 from '@/assets/projects/classstem/classstem3.png'
import engeemImg from '@/assets/projects/engeem/engeem.png'
import engeem1 from '@/assets/projects/engeem/engeem1.png'
import engeem2 from '@/assets/projects/engeem/engeem2.png'
import docEngeemImg from '@/assets/projects/engeem-docs/doc-engeem.png'
import docEngeem1 from '@/assets/projects/engeem-docs/doc-engeem1.png'
import docEngeem2 from '@/assets/projects/engeem-docs/doc-engeem2.png'
import docEngeem3 from '@/assets/projects/engeem-docs/doc-engeem3.png'
import pimediaImg from '@/assets/projects/pimedia/pimedia.png'
import pimedia1 from '@/assets/projects/pimedia/pimedia1.png'
import wamImg from '@/assets/projects/wam/wam.png'
import wam1 from '@/assets/projects/wam/wam1.png'
import wam2 from '@/assets/projects/wam/wam2.png'

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
    id: 'kanie',
    title: 'Kaniè',
    description:
      'Plateforme e-commerce & services digitaux : catalogue, commandes, admin et paiements Mobile Money.',
    longDescription:
      'Plateforme e-commerce destinée à digitaliser la vente de produits informatiques, électroniques et d’accessoires, tout en centralisant la gestion des commandes, des clients et de plusieurs services numériques au sein d’une application unique.',
    overview: [
      'Kaniè regroupe boutique en ligne et services digitaux (formations, produits IT, accessoires) dans une application full stack React + NestJS, conçue en architecture API-first.',
      'La plateforme couvre le catalogue et les catégories, le panier et le checkout, un back-office d’administration (produits, commandes, contenus), l’auth JWT avec rôles, les paiements Mobile Money et les notifications de suivi de commande.',
      'Développée en équipe de deux développeurs (juil. 2026 – août 2026), avec Docker, Git/GitHub, PostgreSQL / TypeORM et stockage MinIO.',
    ],
    image: kanieImg,
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'JWT', 'Docker'],
    featured: true,
    year: '2026',
    period: 'juil. 2026 – août 2026',
    category: 'E-commerce · Services digitaux',
    role: 'Développeur Full Stack',
    accent: '#7C3AED',
    caseStudy: true,
    demo: 'https://kanie.ci/',
    contributionTeaser: 'Catalogue, panier, admin, JWT, Mobile Money & notifications',
    contributionNote:
      'En équipe de deux, j’ai contribué full stack : frontend React et backend NestJS — fonctionnalités métier, interfaces modernes et API REST sécurisées (API-first).',
    contributionHighlights: [
      {
        title: 'Parcours d’achat',
        description:
          'Catalogue, catégories, panier et processus de commande pour une expérience e-commerce fluide.',
      },
      {
        title: 'Admin, paiements & notifs',
        description:
          'Back-office produits/commandes/contenus, JWT & rôles, Mobile Money et notifications de suivi.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Interfaces React + TypeScript (React Router, Axios)',
          'Parcours catalogue, panier et commande',
          'Back-office d’administration moderne',
        ],
      },
      {
        area: 'backend',
        items: [
          'API REST NestJS sécurisées (JWT, rôles)',
          'Gestion produits, commandes et clients',
          'Intégration paiements Mobile Money',
          'Automatisation des notifications de suivi',
          'PostgreSQL / TypeORM, Docker, MinIO',
        ],
      },
    ],
    features: [
      {
        title: 'Catalogue & catégories',
        description: 'Produits informatiques, électroniques et accessoires organisés.',
      },
      {
        title: 'Panier & commandes',
        description: 'Parcours d’achat jusqu’à la validation de commande.',
      },
      {
        title: 'Back-office admin',
        description: 'Gestion des produits, commandes et contenus.',
      },
      {
        title: 'Auth & rôles',
        description: 'Authentification JWT et contrôle d’accès.',
      },
      {
        title: 'Mobile Money',
        description: 'Paiements via solutions Mobile Money.',
      },
      {
        title: 'Notifications',
        description: 'Suivi automatique des commandes pour les clients.',
      },
    ],
    architecture: [
      {
        title: 'Frontend React',
        description: 'Boutique publique et interfaces d’administration.',
      },
      {
        title: 'API NestJS',
        description: 'API REST API-first pour le métier e-commerce.',
      },
      {
        title: 'Auth JWT',
        description: 'Sécurité et gestion des rôles utilisateurs.',
      },
      {
        title: 'PostgreSQL',
        description: 'Persistance TypeORM des produits, clients et commandes.',
      },
      {
        title: 'Docker & MinIO',
        description: 'Conteneurisation et stockage objets.',
      },
    ],
    techStack: [
      {
        label: 'Frontend',
        items: ['React', 'TypeScript', 'React Router', 'Axios'],
      },
      {
        label: 'Backend',
        items: ['NestJS', 'Node.js', 'TypeORM', 'PostgreSQL', 'REST API', 'JWT'],
      },
      { label: 'Outils', items: ['Docker', 'Git', 'GitHub'] },
      { label: 'Extras', items: ['MinIO', 'Mobile Money'] },
    ],
    gallery: [kanieImg, kanie1, kanie2, kanie3],
  },
  {
    id: 'cnr-ci',
    title: 'CNR – CI',
    description:
      'Site officiel du Championnat National de Robotique : WordPress + plugins métier sur mesure.',
    longDescription:
      'Site web du Championnat National de Robotique – Côte d’Ivoire, organisé par DynExcAfrica avec la First Lego League. Vitrine institutionnelle et plateforme opérationnelle pour fédérer écoles, équipes, mentors, bénévoles, partenaires et le public autour d’un écosystème éducatif STEM.',
    overview: [
      'Le Championnat National de Robotique – CI s’adresse aux collégiens et lycéens sur tout le territoire, avec un fort accent sur les équipes féminines. Le site présente la mission, la vision, le parcours en 6 temps (préparation, lancement, formations, show final, STEM Camp) et les partenariats.',
      'Au-delà de la vitrine, la plateforme permet de rejoindre l’aventure (mentor, bénévole, arbitre/jury, coach), d’inscrire des équipes, de suivre les projets innovants et de devenir partenaire — avec réservation de places et contenus éditoriaux (galerie, chiffres clés, Fab Lab pour les vainqueurs).',
      'Mis en place sous WordPress, avec création de plusieurs plugins internes pour des fonctionnalités métier précises (inscriptions, formulaires de recrutement, gestion de contenus liés aux équipes et au programme).',
    ],
    image: cnrImg,
    technologies: ['WordPress', 'PHP', 'Plugins custom', 'MySQL', 'JavaScript', 'CSS'],
    featured: true,
    year: '2025',
    category: 'Éducation · Robotique',
    role: 'Développeur WordPress',
    accent: '#14B8A6',
    caseStudy: true,
    demo: 'https://championnatnationalrobotique.com/',
    contributionTeaser: 'WordPress, plugins métier & parcours inscriptions / recrutement',
    contributionNote:
      'Mise en place du site WordPress du CNR et développement de plugins internes pour des fonctionnalités précises : inscriptions d’équipes, candidatures (mentor, bénévole, coach, jury) et contenus opérationnels du championnat.',
    contributionHighlights: [
      {
        title: 'Site WordPress CNR',
        description:
          'Structure du site officiel : vitrine, parcours d’innovation, partenaires, galerie et appels à l’action.',
      },
      {
        title: 'Plugins internes',
        description:
          'Plugins sur mesure pour inscriptions d’équipes, recrutement (mentor / bénévole / coach / jury) et besoins métier du CNR.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Intégration et personnalisation du thème WordPress',
          'Pages institutionnelles et parcours UX (rejoindre, équipes, partenaires)',
          'Interfaces responsives alignées sur l’identité CNR',
        ],
      },
      {
        area: 'backend',
        items: [
          'Développement de plugins WordPress internes',
          'Logique métier inscriptions et formulaires de recrutement',
          'Gestion de contenus liés aux équipes et au programme',
          'Stack : WordPress, PHP, MySQL, JavaScript',
        ],
      },
    ],
    features: [
      {
        title: 'Vitrine & vision',
        description: 'Mission, engagement STEM et parcours en 6 temps du championnat.',
      },
      {
        title: 'Nous rejoindre',
        description: 'Devenir mentor, bénévole, arbitre/jury ou coach.',
      },
      {
        title: 'Équipes & inscriptions',
        description: 'Équipes en compétition, inscriptions et projets innovants.',
      },
      {
        title: 'Partenaires',
        description: 'Espace organisateur, partenaires et devenir partenaire.',
      },
      {
        title: 'Événements & galerie',
        description: 'Show final, STEM Camp, Fab Lab et galerie édition.',
      },
      {
        title: 'Plugins métier',
        description: 'Fonctionnalités WordPress sur mesure pour le CNR.',
      },
    ],
    architecture: [
      {
        title: 'WordPress',
        description: 'CMS pour contenus, pages et administration éditoriale.',
      },
      {
        title: 'Thème & UI',
        description: 'Vitrine responsive alignée sur la charte CNR.',
      },
      {
        title: 'Plugins custom',
        description: 'Modules PHP internes pour les flux métier (inscriptions, recrutement).',
      },
      {
        title: 'MySQL',
        description: 'Persistance WordPress et données des plugins.',
      },
      {
        title: 'Prod web',
        description: 'Site public : championnatnationalrobotique.com',
      },
    ],
    techStack: [
      { label: 'CMS', items: ['WordPress', 'PHP'] },
      { label: 'Custom', items: ['Plugins internes', 'Hooks WP', 'Custom post types'] },
      { label: 'Data', items: ['MySQL'] },
      { label: 'Front', items: ['HTML', 'CSS', 'JavaScript'] },
    ],
    gallery: [cnrImg, cnr1, cnr2],
  },
  {
    id: 'ccnr-classement',
    title: 'CNR – Classement live',
    description:
      'Plateforme de classement en temps réel du Championnat National de Robotique : podium, barèmes, vainqueurs, quiz, partenaires, moniteur et dashboard de gestion.',
    longDescription:
      'Application web dédiée au suivi live du Championnat National de Robotique (CNR-CI) : affichage public du classement, des barèmes et des vainqueurs de manches, jeux quiz, espace partenaires, vue moniteur scène, et dashboard d’administration pour piloter l’ensemble.',
    overview: [
      'Pendant le show et les manches, le public et les équipes suivent un classement temps réel (podium top 3, tableau des scores, meilleur passage) synchronisé avec les résultats saisis côté organisation.',
      'La plateforme couvre aussi les barèmes de notation, l’annonce des vainqueurs de manche / grand vainqueur, des quiz interactifs, la mise en avant des partenaires et une vue moniteur adaptée aux écrans de salle.',
      'Un dashboard de gestion permet d’administrer équipes, scores, manches, contenus quiz et partenaires. Prod publique : ccnr.dynexcafrica.org/ranking.',
    ],
    image: ccnrClassement1,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Temps réel', 'Dashboard'],
    featured: true,
    year: '2026',
    category: 'Événementiel · Temps réel',
    role: 'Développeur Full-Stack',
    accent: '#F97316',
    caseStudy: true,
    demo: 'https://ccnr.dynexcafrica.org/ranking',
    contributionTeaser: 'Classement live, moniteur scène & dashboard d’administration',
    contributionNote:
      'Conception et développement de la plateforme de classement temps réel du CNR : vues publiques (classement, barèmes, vainqueurs, quiz, partenaires, moniteur) et dashboard de gestion pour piloter scores, manches et contenus live.',
    contributionHighlights: [
      {
        title: 'Vues publiques live',
        description:
          'Classement / podium, barèmes, vainqueurs de manche, quiz et partenaires pour le public et les écrans de salle.',
      },
      {
        title: 'Dashboard de gestion',
        description:
          'Back-office pour administrer équipes, scores, manches, quiz et partenaires en conditions événementielles.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'UI live : podium, tableau de classement, annonces vainqueurs et barèmes',
          'Vues quiz, partenaires et moniteur adaptées aux grands écrans',
          'Dashboard d’administration (gestion des données live)',
          'Stack UI : React, TypeScript, Vite, Tailwind CSS',
        ],
      },
      {
        area: 'backend',
        items: [
          'APIs et logique métier scores / manches / équipes',
          'Synchronisation temps réel des affichages publics',
          'Pilotage des contenus quiz et partenaires depuis le dashboard',
        ],
      },
    ],
    features: [
      {
        title: 'Classement temps réel',
        description: 'Podium top 3 et tableau des scores synchronisés pendant les manches.',
      },
      {
        title: 'Barèmes',
        description: 'Affichage des barèmes et règles de notation du championnat.',
      },
      {
        title: 'Vainqueurs de manche',
        description: 'Annonces live des vainqueurs et du grand vainqueur (confetti, score final).',
      },
      {
        title: 'Jeux quiz',
        description: 'Quiz interactifs pour animer le public pendant l’événement.',
      },
      {
        title: 'Partenaires & moniteur',
        description: 'Mise en avant partenaires et vue moniteur pour les écrans de salle.',
      },
      {
        title: 'Dashboard de gestion',
        description: 'Administration centralisée des scores, manches, quiz et contenus live.',
      },
    ],
    architecture: [
      {
        title: 'SPA publique',
        description: 'Vues classement, barèmes, vainqueurs, quiz, partenaires et moniteur.',
      },
      {
        title: 'Temps réel',
        description: 'Mise à jour live des scores et annonces pendant les manches.',
      },
      {
        title: 'Dashboard admin',
        description: 'Back-office de pilotage équipes, scores, manches et contenus.',
      },
      {
        title: 'Identité CNR',
        description: 'Charte orange / vert / dark pour écrans scène et public.',
      },
      {
        title: 'Prod',
        description: 'ccnr.dynexcafrica.org/ranking',
      },
    ],
    techStack: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
      { label: 'Live', items: ['Classement temps réel', 'Moniteur scène', 'Quiz'] },
      { label: 'Admin', items: ['Dashboard', 'Scores & manches', 'Partenaires'] },
      { label: 'Produit', items: ['CNR-CI', 'Événementiel STEM'] },
    ],
    gallery: [
      ccnrClassement1,
      ccnrClassementImg,
      ccnrClassement2,
      ccnrClassement3,
      ccnrClassement4,
      ccnrClassement5,
      ccnrClassement6,
      ccnrClassement7,
      ccnrClassement8,
      ccnrClassement9,
    ],
  },
  {
    id: 'mecagirls',
    title: '500 MecaGirls',
    description:
      'Site du programme 500 MecaGirls : orientation métier, parcours personnalisé, catalogue de métiers et témoignages pour les jeunes filles en mécanique et industrie.',
    longDescription:
      '500 MecaGirls (by DynExcAfrica) promeut l’égalité des genres dans les métiers industriels et mécaniques. Le site accompagne les jeunes filles et les femmes vers des carrières techniques : découverte des métiers, définition de parcours, témoignages vidéo et inscription aux journées d’orientation.',
    overview: [
      'Le programme vise à inspirer et former les jeunes filles et femmes en mécanique et dans l’industrie, en partenariat avec DynExcAfrica et la coopération allemande.',
      'Le site propose un parcours guidé « Définir mon parcours » (centres d’intérêt, métiers industriels), un catalogue de 40+ métiers avec recherche / filtres et export PDF, des témoignages vidéo par cohorte, et des CTA pour participer aux journées d’orientation.',
      'Vitrine et outil d’orientation STEM pour élargir l’accès des filles aux filières techniques. Prod : mecagirls.dynexcafrica.org.',
    ],
    image: mecagirlsImg,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'UX parcours'],
    featured: true,
    year: '2025',
    category: 'Éducation · Orientation STEM',
    role: 'Développeur Frontend',
    accent: '#FF6A00',
    caseStudy: true,
    demo: 'https://mecagirls.dynexcafrica.org/',
    contributionTeaser: 'Vitrine, parcours d’orientation & catalogue de métiers',
    contributionNote:
      'Conception et développement du site 500 MecaGirls : landing, parcours multi-étapes « Définir mon parcours », liste des métiers (recherche, filtres, PDF) et sections témoignages / orientation.',
    contributionHighlights: [
      {
        title: 'Parcours d’orientation',
        description:
          'Tunnel multi-étapes pour cibler centres d’intérêt et métiers industriels / mécaniques.',
      },
      {
        title: 'Catalogue de métiers',
        description:
          'Liste searchable / filtrable (+40 métiers) avec export PDF pour l’orientation.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Landing et identité visuelle MecaGirls (orange / bleu DynExcAfrica)',
          'Wizard « Définir mon parcours » (étapes, intérêts, métiers)',
          'Modal catalogue métiers : recherche, catégories, téléchargement PDF',
          'Sections témoignages vidéo et CTA journées d’orientation',
          'Stack : React, TypeScript, Vite, Tailwind CSS',
        ],
      },
    ],
    features: [
      {
        title: 'Vitrine programme',
        description: 'Présentation 500 MecaGirls et mission égalité des genres en mécanique.',
      },
      {
        title: 'Définir mon parcours',
        description: 'Parcours guidé multi-étapes pour orienter vers des métiers techniques.',
      },
      {
        title: 'Liste des métiers',
        description: 'Catalogue filtrable (automobile, maintenance, soudure…) + export PDF.',
      },
      {
        title: 'Témoignages',
        description: 'Vidéos inspirantes des cohortes : de l’école à l’atelier.',
      },
      {
        title: 'Journées d’orientation',
        description: 'CTA pour s’inscrire et participer aux événements du programme.',
      },
      {
        title: 'Partenaires',
        description: 'Mise en avant DynExcAfrica et coopération allemande.',
      },
    ],
    architecture: [
      {
        title: 'SPA React',
        description: 'Frontend Vite pour la vitrine et les parcours interactifs.',
      },
      {
        title: 'UX orientation',
        description: 'Wizard multi-étapes et modales métiers / PDF.',
      },
      {
        title: 'Contenus média',
        description: 'Témoignages vidéo et pages programme.',
      },
      {
        title: 'Prod',
        description: 'mecagirls.dynexcafrica.org',
      },
    ],
    techStack: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
      { label: 'Produit', items: ['Orientation', 'Catalogue métiers', 'Témoignages'] },
      { label: 'Programme', items: ['500 MecaGirls', 'DynExcAfrica', 'STEM'] },
    ],
    gallery: [
      mecagirlsImg,
      mecagirls1,
      mecagirls2,
      mecagirls3,
      mecagirls4,
      mecagirls5,
      mecagirls6,
      mecagirls7,
    ],
  },
  {
    id: 'classstem',
    title: 'ClassStem',
    description:
      'Plateforme LMS Moodle STEM : thème & plugins sur mesure, parcours programmation, robotique et impression 3D.',
    longDescription:
      'ClassStem est la plateforme d’apprentissage de DynExcAfrica : programmation, robotique et impression 3D dans une expérience interactive pour élèves, étudiants et formateurs — construite sur Moodle avec thème et plugins personnalisés.',
    overview: [
      'ClassStem réunit trois parcours complets — Programmation (Python, JavaScript, C++), Impression 3D (Blender, Fusion 360) et Robotique (Arduino, Raspberry Pi) — au sein d’un LMS Moodle bilingue (FR/EN).',
      'Portée par DynExcAfrica (« Former, Innover, Inspirer »), la plateforme s’appuie sur 7 ans d’expertise STEM, +20 formateurs et 5 000+ apprenants, avec espaces dédiés aux élèves/étudiants et aux enseignants/formateurs.',
      'Mise en place Moodle : création et installation de thème custom, développement/installation de plugins, structuration et gestion des cours et modules de formation. Prod : classstem.dynexcafrica.org.',
    ],
    image: classstemImg,
    technologies: ['Moodle', 'PHP', 'Thème custom', 'Plugins', 'MySQL', 'JavaScript'],
    featured: true,
    year: '2025',
    category: 'LMS · Formation STEM',
    role: 'Développeur Moodle',
    accent: '#F59E0B',
    caseStudy: true,
    demo: 'https://classstem.dynexcafrica.org',
    contributionTeaser: 'Thème Moodle, plugins & gestion des cours STEM',
    contributionNote:
      'Mise en place de ClassStem sur Moodle : création et installation d’un thème sur mesure, plugins métier, et gestion / structuration des cours (programmation, robotique, impression 3D).',
    contributionHighlights: [
      {
        title: 'Thème Moodle custom',
        description:
          'Conception et installation d’un thème aligné sur l’identité DynExcAfrica / ClassStem.',
      },
      {
        title: 'Plugins & cours',
        description:
          'Création / installation de plugins et organisation pédagogique des modules de formation.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Création et installation du thème Moodle',
          'Personnalisation UI (accueil, catalogue, parcours apprenant)',
          'Expérience bilingue FR / EN',
        ],
      },
      {
        area: 'backend',
        items: [
          'Création et installation de plugins Moodle',
          'Configuration LMS et gestion des cours',
          'Structuration des modules Programmation, Impression 3D, Robotique',
          'Stack : Moodle, PHP, MySQL, JavaScript',
        ],
      },
    ],
    features: [
      {
        title: 'Parcours Programmation',
        description: 'Python, JavaScript, C++, algorithmes et projets guidés.',
      },
      {
        title: 'Impression 3D',
        description: 'Blender, Fusion 360, paramétrage et techniques avancées.',
      },
      {
        title: 'Robotique',
        description: 'Arduino, Raspberry Pi, capteurs et programmation embarquée.',
      },
      {
        title: 'Publics multiples',
        description: 'Espaces élèves/étudiants et enseignants/formateurs.',
      },
      {
        title: 'LMS Moodle',
        description: 'Connexion, cours, certifications et contenus interactifs.',
      },
      {
        title: 'Thème & plugins',
        description: 'Personnalisation profonde de Moodle pour ClassStem.',
      },
    ],
    architecture: [
      {
        title: 'Moodle LMS',
        description: 'Cœur pédagogique : cours, rôles, inscriptions, contenus.',
      },
      {
        title: 'Thème custom',
        description: 'Identité visuelle et UX de la vitrine / plateforme.',
      },
      {
        title: 'Plugins',
        description: 'Extensions métier installées et adaptées aux besoins STEM.',
      },
      {
        title: 'MySQL',
        description: 'Base de données Moodle (utilisateurs, cours, activités).',
      },
      {
        title: 'Prod',
        description: 'Hébergement : classstem.dynexcafrica.org',
      },
    ],
    techStack: [
      { label: 'LMS', items: ['Moodle', 'PHP'] },
      { label: 'Custom', items: ['Thème custom', 'Plugins Moodle'] },
      { label: 'Data', items: ['MySQL'] },
      { label: 'Front', items: ['HTML', 'CSS', 'JavaScript'] },
    ],
    gallery: [classstemImg, classstem1, classstem2, classstem3],
  },
  {
    id: 'engeem',
    title: 'ENGEEM',
    description:
      'Site produit Angular pour ENGEEM : Data Control Plane, gouvernance et fiabilité des décisions data / AI.',
    longDescription:
      'Site officiel d’ENGEEM, plateforme Data Control Plane (DSaaP) qui rend les décisions métier — dashboards, sorties IA, actions automatisées — fiables, explicables et sous contrôle. Vitrine produit, solutions industrielles, ressources et console.',
    overview: [
      'ENGEEM adresse le vrai problème entreprise : non pas le manque de données, mais la perte de contrôle sur ce que produisent les systèmes (pipelines, dashboards, modèles IA). Le site présente le control plane qui garantit des outcomes fiables, contractuels et auditable.',
      'Contenu structuré autour de Why ENGEEM, Platform (YIALI Gateway, EDSM metadata, SLO, observabilité agentique, sécurité), Solutions (finance, telecom, retail, énergie, secteur public…), use cases (Safe AI / RAG, gouvernance exécutable, automation cross-domain) et déploiements (cloud, BYOC, on-prem, hybrid).',
      'Site web Angular moderne (app-root, build modulaire), UX dark premium, navigation multi-sections et CTA vers workshop / use cases / console. Prod : www.engeem.com.',
    ],
    image: engeemImg,
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'RxJS', 'SPA'],
    featured: true,
    year: '2025',
    category: 'Data · Control Plane',
    role: 'Développeur Frontend',
    accent: '#22D3EE',
    caseStudy: true,
    demo: 'https://www.engeem.com/',
    contributionTeaser: 'Site Angular produit — vitrine DSaaP, platform & solutions',
    contributionNote:
      'Développement du site produit ENGEEM en Angular : vitrine Data Control Plane, pages platform / solutions / resources, et expérience UI dark orientée conversion.',
    contributionHighlights: [
      {
        title: 'Vitrine produit Angular',
        description:
          'Interface SPA moderne : hero, messaging « reliable by design », navigation plateforme et CTA.',
      },
      {
        title: 'Parcours contenu métier',
        description:
          'Structuration des sections Platform, Solutions, Industries, Use cases et Resources pour un positionnement control plane.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Développement frontend Angular / TypeScript du site produit',
          'Intégration UI dark premium et composants de navigation',
          'Pages Why ENGEEM, Platform, Solutions, Resources, Pricing',
          'Expérience responsive et CTA (workshop, use cases, console)',
        ],
      },
    ],
    features: [
      {
        title: 'Reliable by design',
        description: 'Message clé : décisions data / AI toujours sous contrôle.',
      },
      {
        title: 'Platform DSaaP',
        description: 'Control plane, gateway YIALI, metadata EDSM, SLO & sécurité.',
      },
      {
        title: 'Solutions industrielles',
        description: 'Finance, telecom, retail, énergie, public & compliance.',
      },
      {
        title: 'Safe AI & RAG',
        description: 'Use cases gouvernance exécutable et contrôle des outcomes IA.',
      },
      {
        title: 'Déploiements flexibles',
        description: 'Cloud, BYOC, on-prem, hybrid & multi-cloud.',
      },
      {
        title: 'Resources & console',
        description: 'Library, insights, documentation et accès console.',
      },
    ],
    architecture: [
      {
        title: 'SPA Angular',
        description: 'Application frontend modulaire (app-root, bundles JS).',
      },
      {
        title: 'Contenu produit',
        description: 'Why / Platform / Solutions / Resources / Pricing.',
      },
      {
        title: 'Positionnement DSaaP',
        description: 'Data Control Plane overlay sur stacks existants.',
      },
      {
        title: 'CTA & conversion',
        description: 'Workshop, use cases, console et pricing.',
      },
      {
        title: 'Prod',
        description: 'www.engeem.com',
      },
    ],
    techStack: [
      { label: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS'] },
      { label: 'UI', items: ['HTML', 'CSS', 'SPA'] },
      { label: 'Produit', items: ['DSaaP', 'Data Control Plane', 'YIALI'] },
      { label: 'Livraison', items: ['Site produit', 'Responsive'] },
    ],
    gallery: [engeemImg, engeem1, engeem2],
  },
  {
    id: 'engeem-docs',
    title: 'ENGEEM Docs',
    description:
      'Documentation technique ENGEEM : Docusaurus, composants React et React Bits — guides DSaaP / YIALI.',
    longDescription:
      'Site de documentation d’ENGEEM pour concevoir, déployer et opérer des data products temps réel gouvernés. Guides, architecture, déploiement et références de la plateforme Data Streaming-as-a-Product (DSaaP / YIALI).',
    overview: [
      'ENGEEM Docs couvre le parcours complet : Get Started, Data Automation, DSaaP — YIALI, Data Centers, Data Products, Security & Governance, Cluster / SLA & Pricing, et References — bilingue English / Français.',
      'La doc présente une plateforme Kafka-native de productisation de données : ingestion schema-bound, modeling déclaratif, gouvernance native (RBAC, contrats metadata), data products API/SQL/dashboards, et déploiements cloud, on-prem ou hybrid.',
      'Construit avec Docusaurus, enrichi de composants React custom et React Bits pour une UX documentation moderne (recherche, navigation, pages marketing-doc hybrides). Prod : docs.engeem.com.',
    ],
    image: docEngeemImg,
    technologies: ['Docusaurus', 'React', 'TypeScript', 'MDX', 'React Bits', 'i18n'],
    featured: true,
    year: '2025',
    category: 'Docs · DSaaP',
    role: 'Développeur Frontend',
    accent: '#A78BFA',
    caseStudy: true,
    demo: 'https://docs.engeem.com/',
    contributionTeaser: 'Docusaurus, React / MDX, React Bits & docs bilingues',
    contributionNote:
      'Mise en place et développement de la documentation ENGEEM avec Docusaurus, composants React / MDX et React Bits pour une expérience de lecture et d’exploration moderne.',
    contributionHighlights: [
      {
        title: 'Site Docusaurus',
        description:
          'Structure doc : Get Started, Platform, YIALI / DSaaP, Security, Deploy et References.',
      },
      {
        title: 'React & React Bits',
        description:
          'Composants React custom et React Bits pour enrichir les pages au-delà du Markdown classique.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Configuration et thématisation Docusaurus',
          'Pages MDX et contenu technique (architecture, guides, références)',
          'Composants React custom pour sections riches',
          'Intégration React Bits et micro-interactions UI',
          'i18n English / Français',
        ],
      },
    ],
    features: [
      {
        title: 'Get Started',
        description: 'Vision plateforme, architecture et premier parcours data.',
      },
      {
        title: 'DSaaP — YIALI',
        description: 'Control plane programmable sur Kafka, schemas et contrats.',
      },
      {
        title: 'Data Products',
        description: 'Publier des data products gouvernés sans plumbing.',
      },
      {
        title: 'Security & Governance',
        description: 'Identité, RBAC, EDSM et accès centralisé.',
      },
      {
        title: 'Deploy & Operate',
        description: 'Docker, Kubernetes, Terraform, SLA et pricing.',
      },
      {
        title: 'Bilingue EN / FR',
        description: 'Documentation accessible en anglais et français.',
      },
    ],
    architecture: [
      {
        title: 'Docusaurus',
        description: 'Générateur de documentation (routing, search, versioning).',
      },
      {
        title: 'MDX + React',
        description: 'Contenu Markdown enrichi de composants React.',
      },
      {
        title: 'React Bits',
        description: 'Composants / effets UI pour une doc plus vivante.',
      },
      {
        title: 'i18n',
        description: 'Localisation English / Français.',
      },
      {
        title: 'Prod',
        description: 'docs.engeem.com',
      },
    ],
    techStack: [
      { label: 'Docs', items: ['Docusaurus', 'MDX'] },
      { label: 'UI', items: ['React', 'TypeScript', 'React Bits'] },
      { label: 'Produit', items: ['DSaaP', 'YIALI', 'Kafka-native'] },
      { label: 'Livraison', items: ['i18n EN/FR', 'Search'] },
    ],
    gallery: [docEngeemImg, docEngeem1, docEngeem2, docEngeem3],
  },
  {
    id: 'pimedia',
    title: 'PIMÉDIA',
    description:
      'Média WordPress d’actualité politique nationale et internationale — rubriques, live et publication continue.',
    longDescription:
      'PIMÉDIA est un site d’actualité politique nationale et internationale en continu. Plateforme éditoriale WordPress structurée pour la une, le décryptage, les tribunes, les podcasts et le suivi en direct.',
    overview: [
      'PIMÉDIA couvre l’actualité politique africaine et internationale : décryptages diplomatiques, élections, institutions, crises et analyses. Rubriques dédiées (À la une, Décryptage, Tribunes, Podcasts, En Direct) et blocs thématiques (Gouvernement & Institutions, Assemblée Nationale, Justice, Économie, CEDEAO…).',
      'Le site propose une expérience média classique : breaking news, articles récents / populaires, newsletter, pages rédaction (qui sommes-nous, contact, publicité, mentions légales) et présence réseaux sociaux.',
      'Conçu et déployé sous WordPress pour une publication éditoriale fluide, avec personnalisation du thème et organisation des contenus pour un média politique africain. Prod : pimedia.africa.',
    ],
    image: pimediaImg,
    technologies: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript', 'SEO'],
    featured: true,
    year: '2026',
    category: 'Média · Actualité',
    role: 'Développeur WordPress',
    accent: '#DC2626',
    caseStudy: true,
    demo: 'https://pimedia.africa/',
    contributionTeaser: 'Site WordPress média — rubriques, une & publication éditoriale',
    contributionNote:
      'Conception et mise en place du site WordPress PIMÉDIA : structure éditoriale, rubriques politiques, personnalisation du thème et expérience de lecture pour un média d’actualité en continu.',
    contributionHighlights: [
      {
        title: 'Site WordPress média',
        description:
          'Mise en place de la vitrine PIMÉDIA et de l’architecture de contenus pour la rédaction.',
      },
      {
        title: 'Rubriques & parcours lecture',
        description:
          'Organisation À la une, Décryptage, Tribunes, Podcasts, En Direct et pages institutionnelles.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'Personnalisation du thème WordPress média',
          'Mise en page une, listes d’articles et blocs thématiques',
          'Pages Qui sommes-nous, rédaction, contact, newsletter',
        ],
      },
      {
        area: 'backend',
        items: [
          'Configuration WordPress et taxonomies / catégories éditoriales',
          'Organisation des contenus politiques et internationaux',
          'Stack : WordPress, PHP, MySQL',
        ],
      },
    ],
    features: [
      {
        title: 'À la une & Breaking',
        description: 'Fil d’actualité et mise en avant des sujets chauds.',
      },
      {
        title: 'Décryptage & Tribunes',
        description: 'Analyses politiques et prises de parole.',
      },
      {
        title: 'En Direct',
        description: 'Suivi live des événements marquants.',
      },
      {
        title: 'Rubriques métier',
        description: 'Institutions, élections, justice, économie, CEDEAO…',
      },
      {
        title: 'Podcasts',
        description: 'Formats audio pour approfondir l’actualité.',
      },
      {
        title: 'Newsletter',
        description: 'Abonnement aux principales actualités politiques.',
      },
    ],
    architecture: [
      {
        title: 'WordPress',
        description: 'CMS éditorial pour articles, catégories et médias.',
      },
      {
        title: 'Thème média',
        description: 'Mise en page presse (une, listes, sidebars).',
      },
      {
        title: 'Rubriques',
        description: 'Taxonomies pour politique nationale / internationale.',
      },
      {
        title: 'MySQL',
        description: 'Persistance des contenus et utilisateurs WP.',
      },
      {
        title: 'Prod',
        description: 'pimedia.africa',
      },
    ],
    techStack: [
      { label: 'CMS', items: ['WordPress', 'PHP'] },
      { label: 'Front', items: ['HTML', 'CSS', 'JavaScript'] },
      { label: 'Data', items: ['MySQL'] },
      { label: 'Média', items: ['SEO', 'Newsletter', 'Social'] },
    ],
    gallery: [pimediaImg, pimedia1],
  },
  {
    id: 'wam',
    title: 'West Africa Mobility',
    description:
      'Plateforme web pour la mobilité durable en Afrique de l’Ouest — événements, livres blancs et partenariats.',
    longDescription:
      'West Africa Mobility (WAM) est la plateforme stratégique dédiée à l’accélération de solutions de mobilité résilientes, durables et intelligentes en Afrique de l’Ouest : innovations, collaboration institutionnelle et recommandations politiques.',
    overview: [
      'WAM valorise les innovations de transport intelligent adaptées au contexte urbain africain, connecte dirigeants, investisseurs et acteurs tech, et produit des analyses pour guider les politiques d’infrastructure régionales (CEDEAO).',
      'Le site regroupe agenda (sommets, ateliers, showcases start-ups), plateau d’experts, livres blancs, photothèque, inscriptions participants et parcours partenariats, avec interface bilingue FR / EN.',
      'Application web moderne (React + Vite + Tailwind) : vitrine dark premium, pages événements / ressources / contact. Prod : www.westafricamobility.net.',
    ],
    image: wamImg,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'i18n', 'SPA'],
    featured: true,
    year: '2025',
    category: 'Mobilité · Événementiel',
    role: 'Développeur Frontend',
    accent: '#0EA5E9',
    caseStudy: true,
    demo: 'https://www.westafricamobility.net/',
    contributionTeaser: 'Site React — agenda, livres blancs, inscriptions & partenariats',
    contributionNote:
      'Développement frontend de la plateforme West Africa Mobility : vitrine mobilité durable, agenda d’événements, ressources (livres blancs), photothèque et parcours d’inscription / partenariat.',
    contributionHighlights: [
      {
        title: 'Vitrine & agenda',
        description:
          'Pages Accueil, À propos, Événements (sommets, ateliers) et CTAs réserver / programme.',
      },
      {
        title: 'Ressources & conversion',
        description:
          'Livres blancs, photothèque, formulaires participation / partenariat et i18n FR/EN.',
      },
    ],
    contributions: [
      {
        area: 'frontend',
        items: [
          'UI React / Vite / Tailwind (mode dark, navigation sticky)',
          'Sections agenda, speakers, livres blancs et photothèque',
          'Parcours inscription événement et demande de partenariat',
          'Interface bilingue FR / EN',
        ],
      },
    ],
    features: [
      {
        title: 'Mobilité durable',
        description: 'Focus transport intelligent et intégration régionale.',
      },
      {
        title: 'Agenda & sommets',
        description: 'Conférences, ateliers, tables rondes et showcases.',
      },
      {
        title: 'Livres blancs',
        description: 'Analyses et recommandations basées sur les données.',
      },
      {
        title: 'Plateau d’experts',
        description: 'Décideurs et spécialistes de la mobilité ouest-africaine.',
      },
      {
        title: 'Inscriptions & partenariats',
        description: 'Formulaires dédiés participants et sponsors.',
      },
      {
        title: 'Photothèque',
        description: 'Moments forts des éditions précédentes.',
      },
    ],
    architecture: [
      {
        title: 'SPA React',
        description: 'Frontend Vite servi en application monolithe client.',
      },
      {
        title: 'Tailwind UI',
        description: 'Design system dark / light et composants responsive.',
      },
      {
        title: 'Contenu événementiel',
        description: 'Agenda, speakers, ressources et galerie.',
      },
      {
        title: 'i18n',
        description: 'Basculer FR / EN pour un public régional.',
      },
      {
        title: 'Prod',
        description: 'www.westafricamobility.net',
      },
    ],
    techStack: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
      { label: 'UI', items: ['Tailwind CSS', 'SPA'] },
      { label: 'Produit', items: ['Événements', 'Livres blancs', 'Partenariats'] },
      { label: 'Livraison', items: ['i18n FR/EN', 'Responsive'] },
    ],
    gallery: [wamImg, wam1, wam2],
  },
]
