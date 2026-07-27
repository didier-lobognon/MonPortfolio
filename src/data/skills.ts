import type { Skill } from '@/types'

/**
 * Compétences organisées par catégories.
 * level : 0–100 pour la barre de progression.
 */
export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 92,
    description: 'Interfaces dynamiques, hooks avancés et architecture composable.',
    icon: 'react',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 90,
    description: 'Typage strict pour des codebases robustes et maintenables.',
    icon: 'typescript',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    level: 93,
    description: 'ESNext, patterns modernes et maîtrise du runtime navigateur.',
    icon: 'javascript',
  },
  {
    id: 'tailwind',
    name: 'TailwindCSS',
    category: 'frontend',
    level: 91,
    description: 'Design systems rapides, cohérents et responsives.',
    icon: 'tailwind',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'frontend',
    level: 95,
    description: 'Sémantique, accessibilité et structure SEO-friendly.',
    icon: 'html',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'frontend',
    level: 90,
    description: 'Animations, layouts complexes et micro-interactions.',
    icon: 'css',
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 88,
    description: 'APIs performantes et services backend scalables.',
    icon: 'nodejs',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    level: 85,
    description: 'Architecture modulaire, DI et APIs structurées.',
    icon: 'nestjs',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    level: 82,
    description: 'Applications web classiques et intégrations métier.',
    icon: 'php',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'backend',
    level: 84,
    description: 'Eloquent, queues, auth et écosystème mature.',
    icon: 'laravel',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 80,
    description: 'Scripts, automatisation et services légers.',
    icon: 'python',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    level: 78,
    description: 'APIs Python rapides avec validation Pydantic.',
    icon: 'fastapi',
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 86,
    description: 'Modélisation relationnelle et requêtes optimisées.',
    icon: 'postgresql',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    level: 84,
    description: 'Bases relationnelles pour applications métier.',
    icon: 'mysql',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 80,
    description: 'Documents flexibles et agrégations efficaces.',
    icon: 'mongodb',
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 92,
    description: 'Workflows collaboratifs, branches et code review.',
    icon: 'git',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    level: 82,
    description: 'Conteneurisation et environnements reproductibles.',
    icon: 'docker',
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    level: 88,
    description: 'Tests d\'API, collections et documentation.',
    icon: 'postman',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    level: 75,
    description: 'Collaboration design / développement fluide.',
    icon: 'figma',
  },
]

export const skillCategories: { key: Skill['category']; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Bases de données' },
  { key: 'tools', label: 'Outils' },
]
