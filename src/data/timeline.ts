import type { TimelineItem } from '@/types'

export const timeline: TimelineItem[] = [
  {
    id: 'exp-fullstack-2025',
    type: 'experience',
    title: 'Développeur Full Stack',
    organization: 'TechNova Solutions',
    location: 'France — Hybride',
    period: '2024 — Présent',
    description:
      'Conception et développement d\'applications métier React / NestJS. Mise en place d\'APIs sécurisées, optimisation des performances et accompagnement produit.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'freelance-2024',
    type: 'freelance',
    title: 'Développeur Freelance',
    organization: 'Indépendant',
    location: 'Remote',
    period: '2023 — Présent',
    description:
      'Réalisation de sites et applications sur mesure pour startups et PME : e-commerce, dashboards, APIs REST et refontes UX.',
    tags: ['React', 'Laravel', 'UX', 'API'],
  },
  {
    id: 'stage-backend-2023',
    type: 'stage',
    title: 'Stage Développeur Backend',
    organization: 'DataPulse',
    location: 'France',
    period: '2023',
    description:
      'Développement d\'endpoints REST, modélisation de bases de données et mise en place de tests d\'intégration.',
    tags: ['Node.js', 'MySQL', 'Postman'],
  },
  {
    id: 'formation-fullstack',
    type: 'formation',
    title: 'Formation Développeur Full Stack',
    organization: 'École du Web & du Numérique',
    location: 'France',
    period: '2022 — 2024',
    description:
      'Parcours intensif front et back : architecture logicielle, bases de données, sécurité applicative et projets en équipe.',
    tags: ['JavaScript', 'PHP', 'SQL', 'Agile'],
  },
  {
    id: 'formation-bases',
    type: 'formation',
    title: 'Bases du développement web',
    organization: 'Auto-formation & projets perso',
    location: 'France',
    period: '2021 — 2022',
    description:
      'Apprentissage structuré du HTML, CSS, JavaScript et premiers projets personnels pour consolider les fondamentaux.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]
