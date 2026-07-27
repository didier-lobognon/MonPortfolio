import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Développement Web',
    description:
      'Interfaces modernes, responsives et animées, pensées pour convertir et engager.',
    icon: 'code',
  },
  {
    id: 'backend',
    title: 'Développement Backend',
    description:
      'Services robustes, sécurisés et maintenables, prêts pour la production.',
    icon: 'server',
  },
  {
    id: 'api',
    title: 'API REST',
    description:
      'Conception d\'APIs claires, documentées et performantes pour vos clients et partenaires.',
    icon: 'api',
  },
  {
    id: 'custom',
    title: 'Applications sur mesure',
    description:
      'Solutions métier adaptées à vos process, de l\'idée au déploiement.',
    icon: 'layers',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'Suivi, correctifs et évolutions continues pour garder votre produit fiable.',
    icon: 'wrench',
  },
  {
    id: 'optimisation',
    title: 'Optimisation',
    description:
      'Performance, SEO technique et expérience utilisateur au microscope.',
    icon: 'zap',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description:
      'Conseil architecture, stack technique et bonnes pratiques d\'équipe.',
    icon: 'lightbulb',
  },
]
