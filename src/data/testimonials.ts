import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Camille Renard',
    role: 'Product Manager',
    company: 'TechNova',
    content:
      'Didier livre avec une rare combinaison de rigueur technique et de sens du produit. Les interfaces sont fluides, le code est propre, et la communication est claire à chaque étape.',
    avatar: 'CR',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marc Dupont',
    role: 'CTO',
    company: 'Aurora Labs',
    content:
      'Un partenaire de confiance. Il a structuré notre API, amélioré les performances et aidé l\'équipe à monter en compétences. Résultat : un produit plus stable et plus rapide.',
    avatar: 'MD',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Sofia Benali',
    role: 'Fondatrice',
    company: 'Haven Studio',
    content:
      'Notre site et notre back-office ont transformé la façon dont on travaille. Didier a compris nos enjeux métier dès le premier échange et a livré exactement ce qu\'il fallait.',
    avatar: 'SB',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Julien Moreau',
    role: 'Lead Designer',
    company: 'Orbit Agency',
    content:
      'Rare de travailler avec un développeur aussi attentif au détail visuel. Les animations sont premium sans jamais nuire à la perf. Un vrai plaisir en collaboration design/dev.',
    avatar: 'JM',
    rating: 5,
  },
]
