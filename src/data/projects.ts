import type { Project } from '@/types'

/**
 * Projets du portfolio.
 * Pour ajouter un projet : dupliquez un objet et renseignez les champs.
 * Les images utilisent des dégradés SVG générés (assets de démo).
 */
export const projects: Project[] = [
  {
    id: 'nexus-dashboard',
    title: 'Nexus Dashboard',
    description:
      'Plateforme analytics temps réel avec visualisations interactives et alertes intelligentes.',
    longDescription:
      'Dashboard SaaS conçu pour suivre des KPIs métier en temps réel. Architecture React + NestJS, WebSockets et PostgreSQL.',
    image: '/projects/nexus.svg',
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/didier-lobognon/nexus-dashboard',
    demo: 'https://nexus-demo.example.com',
    featured: true,
    year: '2025',
  },
  {
    id: 'aurora-ecommerce',
    title: 'Aurora Commerce',
    description:
      'Boutique e-commerce premium avec checkout fluide et back-office complet.',
    longDescription:
      'Expérience d\'achat moderne, panier optimisé, paiements sécurisés et gestion des stocks.',
    image: '/projects/aurora.svg',
    technologies: ['React', 'Laravel', 'MySQL', 'Stripe', 'Docker'],
    github: 'https://github.com/didier-lobognon/aurora-commerce',
    demo: 'https://aurora-demo.example.com',
    featured: true,
    year: '2025',
  },
  {
    id: 'pulse-api',
    title: 'Pulse API Gateway',
    description:
      'Gateway REST haute performance avec auth JWT, rate limiting et monitoring.',
    longDescription:
      'Couche d\'API centralisée pour microservices, avec documentation OpenAPI et observabilité.',
    image: '/projects/pulse.svg',
    technologies: ['Node.js', 'FastAPI', 'MongoDB', 'Docker', 'Redis'],
    github: 'https://github.com/didier-lobognon/pulse-api',
    demo: 'https://pulse-demo.example.com',
    featured: true,
    year: '2024',
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
