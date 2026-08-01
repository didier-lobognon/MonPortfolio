import type { TimelineItem } from '@/types'
import logoIgs from '@/assets/logos/ivoire-geek-school.svg'
import logoUvci from '@/assets/logos/uvci.png'
import logoWaicebon from '@/assets/logos/waicebon.svg'
import logoEpitech from '@/assets/logos/epitech.png'
import logoDynexc from '@/assets/logos/dynexc.png'
import logoEngeem from '@/assets/logos/engeem.svg'
import logoYako from '@/assets/logos/yako.png'

/**
 * Parcours LinkedIn — ordre chronologique (passé → présent).
 * https://www.linkedin.com/in/ld-didier/
 */
export const timeline: TimelineItem[] = [
  {
    id: 'cert-ux-igs',
    type: 'certificat',
    title: 'UX/UI Design',
    organization: 'Ivoire Geek School',
    location: 'Côte d’Ivoire',
    period: 'juil. 2023 — oct. 2023',
    description:
      'Certification UX/UI obtenue pendant la 2ᵉ année de licence : conception d’interfaces, parcours utilisateur et design orienté produit.',
    tags: ['UX/UI', 'Design', 'Produit'],
    logo: logoIgs,
  },
  {
    id: 'edu-licence',
    type: 'formation',
    title: 'Licence en Informatique',
    organization: 'Université Virtuelle de Côte d’Ivoire',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2021 — 2024',
    description:
      'Licence en informatique obtenue à l’UVCI — socle académique pour le développement logiciel, les systèmes et la culture numérique.',
    tags: ['Licence', 'UVCI', 'Informatique'],
    logo: logoUvci,
    highlight: true,
  },
  {
    id: 'exp-waicebon',
    type: 'experience',
    title: 'Développeur Web & Gestionnaire de Plateforme',
    organization: 'Waicebon',
    location: 'Abidjan, Côte d’Ivoire',
    period: 'juil. 2024 — nov. 2024',
    description:
      'Gestion technique d’une plateforme e-commerce : intégration et mise à jour des contenus (produits, images, descriptions), suivi des performances et bon fonctionnement du site.',
    tags: ['E-commerce', 'Web', 'Contenu', 'Ops'],
    logo: logoWaicebon,
  },
  {
    id: 'cert-wecode-epitech',
    type: 'certificat',
    title: 'Développeur Full Stack – Wecode by Epitech',
    organization: 'Epitech — L’école de l’excellence informatique',
    location: 'Côte d’Ivoire',
    period: 'nov. 2024',
    description:
      'Certification officielle Développeur Full Stack délivrée dans le cadre du programme Wecode by Epitech.',
    tags: ['Certification', 'Full Stack', 'Epitech'],
    logo: logoEpitech,
    highlight: true,
  },
  {
    id: 'milestone-hackathon-epitech',
    type: 'milestone',
    title: '1ʳᵉ place — Hackathon Éducation & Technologie',
    organization: 'We.Code × Futur Studio',
    location: 'Côte d’Ivoire',
    period: '2025',
    description:
      'Victoire au Hackathon Éducation & Technologie 2025 — 48h pour livrer une app de classement temps réel (WebSocket, Docker) pour le Championnat National de Robotique.',
    tags: ['Hackathon', 'WebSocket', 'Docker', 'Robotique'],
    logo: logoEpitech,
    highlight: true,
  },
  {
    id: 'exp-dynexc',
    type: 'experience',
    title: 'Développeur Full Stack',
    organization: 'Dynamiques et Excellentes d’Afrique',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2025 — Présent',
    description:
      'Conception et livraison d’applications web pour l’écosystème DynExcAfrica : sites institutionnels, plateformes RH, LMS, classement temps réel CNR, MecaGirls et outils événementiels STEM.',
    tags: ['React', 'NestJS', 'WordPress', 'Temps réel', 'STEM'],
    logo: logoDynexc,
    highlight: true,
    current: true,
  },
  {
    id: 'edu-master2',
    type: 'formation',
    title: 'Master 2',
    organization: 'Université Virtuelle de Côte d’Ivoire',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2025 — Présent',
    description:
      'Master 2 en cours à l’UVCI — approfondissement académique en parallèle des missions professionnelles et des projets en production.',
    tags: ['Master 2', 'UVCI', 'En cours'],
    logo: logoUvci,
    current: true,
    highlight: true,
  },
  {
    id: 'exp-engeem',
    type: 'experience',
    title: 'Développeur Full Stack',
    organization: 'ENGEEM',
    location: 'Abidjan, Côte d’Ivoire',
    period: 'Présent',
    description:
      'Contribution produit autour de la Data Control Plane ENGEEM : site Angular, documentation Docusaurus et expérience UI orientée plateforme data.',
    tags: ['Angular', 'Docusaurus', 'Data', 'Produit'],
    logo: logoEngeem,
    highlight: true,
    current: true,
  },
  {
    id: 'milestone-hackathon-yako',
    type: 'milestone',
    title: '3ᵉ place — Hackathon Yako Africa Assurances Vie',
    organization: 'Yako Africa Assurances Vie',
    location: 'Abidjan, Côte d’Ivoire',
    period: 'mars 2026',
    description:
      'Hackathon Yako Africa Assurances Vie — terminé à la 3ᵉ place, avec une solution tech pensée pour les enjeux assurance / innovation.',
    tags: ['Hackathon', 'Assurance', 'Innovation'],
    logo: logoYako,
    highlight: true,
  },
]
