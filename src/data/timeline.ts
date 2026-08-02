import type { TimelineItem } from '@/types'
import logoIgs from '@/assets/logos/ivoire-geek-school.png'
import logoUvci from '@/assets/logos/uvci.png'
import logoWaicebon from '@/assets/logos/waicebon.jpg'
import logoEpitech from '@/assets/logos/epitech.png'
import logoWecode from '@/assets/logos/wecode.png'
import logoDynexc from '@/assets/logos/dynexc.png'
import logoEngeem from '@/assets/logos/engeem.png'
import logoYako from '@/assets/logos/yako.png'

/** Couleurs marque (dérivées des logos) */
const BRAND = {
  igs: '#1A337E',
  /** Intérieur UVCI = vert ; bordure = violet */
  uvci: '#16A34A',
  uvciBorder: '#6D28D9',
  epitech: '#009EE2',
  wecode: '#6366F1',
  engeem: '#109BBB',
  yako: '#166534',
  /** Or — mise en lumière des hackathons */
  gold: '#D4A017',
  goldBorder: '#F5D76E',
} as const

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
    logoBg: '#ffffff',
    logoFit: 'cover',
    brandColor: BRAND.igs,
  },
  {
    id: 'edu-licence',
    type: 'formation',
    title: 'Licence — Développement Web et Mobile',
    organization: 'Université Virtuelle de Côte d’Ivoire',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2021 — 2024',
    description:
      'Licence en Développement Web et Mobile obtenue à l’UVCI — socle académique pour le front, le mobile et les applications connectées.',
    tags: ['Licence', 'Web', 'Mobile', 'UVCI'],
    logo: logoUvci,
    logoBg: '#ffffff',
    brandColor: BRAND.uvci,
    brandBorder: BRAND.uvciBorder,
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
    logoBg: '#ffffff',
    logoFit: 'cover',
  },
  {
    id: 'cert-wecode-epitech',
    type: 'certificat',
    title: 'Développeur Full Stack – Wecode by Epitech',
    organization: 'Epitech — L’école de l’excellence informatique',
    location: 'Côte d’Ivoire',
    period: 'nov. 2024 — mai 2025',
    description:
      'Formation / certification Développeur Full Stack dans le cadre du programme Wecode by Epitech (novembre 2024 – mai 2025).',
    tags: ['Certification', 'Full Stack', 'Epitech'],
    logo: logoEpitech,
    logoBg: '#ffffff',
    brandColor: BRAND.epitech,
    highlight: true,
  },
  {
    id: 'milestone-hackathon-epitech',
    type: 'milestone',
    title: '1ʳᵉ place — Hackathon Éducation & Technologie',
    organization: 'We.Code × Futur Studio',
    location: 'Côte d’Ivoire',
    period: '5 — 9 mai 2025',
    description:
      'Victoire au Hackathon We.Code Éducation & Technologie (5–9 mai 2025) — app de classement temps réel (WebSocket, Docker) pour le Championnat National de Robotique.',
    tags: ['Hackathon', 'WebSocket', 'Docker', 'Robotique'],
    logo: logoWecode,
    logoBg: '#ffffff',
    brandColor: BRAND.gold,
    brandBorder: BRAND.goldBorder,
    highlight: true,
  },
  {
    id: 'exp-dynexc-stage',
    type: 'stage',
    title: 'Stage Développeur Full Stack',
    organization: 'Dynamiques et Excellentes d’Afrique',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2025 — 2026 · 2 × 6 mois',
    description:
      'Une année de stage (deux périodes de 6 mois) au cœur de l’écosystème DynExcAfrica : sites institutionnels, plateformes RH, LMS, classement live CNR, MecaGirls et outils événementiels STEM.',
    tags: ['Stage', '1 an', 'React', 'NestJS', 'STEM'],
    logo: logoDynexc,
    lightCard: true,
    highlight: true,
  },
  {
    id: 'edu-master2',
    type: 'formation',
    title: 'Master 2 — Big Data Analytics',
    organization: 'Université Virtuelle de Côte d’Ivoire',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2025 — Présent',
    description:
      'Master 2 Big Data Analytics en cours à l’UVCI — data, analytics et systèmes à grande échelle, en parallèle des missions professionnelles.',
    tags: ['Master 2', 'Big Data', 'Analytics', 'UVCI'],
    logo: logoUvci,
    logoBg: '#ffffff',
    brandColor: BRAND.uvci,
    brandBorder: BRAND.uvciBorder,
    current: true,
    highlight: true,
  },
  {
    id: 'exp-engeem-stage',
    type: 'stage',
    title: 'Stage Développeur Full Stack',
    organization: 'ENGEEM',
    location: 'Abidjan, Côte d’Ivoire',
    period: '2026 · 7 mois',
    description:
      'Sept mois de stage produit autour de la Data Control Plane ENGEEM : site Angular, documentation Docusaurus et expérience UI data — avant le passage en CDI.',
    tags: ['Stage', '7 mois', 'Angular', 'Docusaurus', 'Data'],
    logo: logoEngeem,
    logoBg: 'linear-gradient(160deg, #14C4C7 0%, #109BBB 45%, #0A6E72 100%)',
    logoFit: 'cover',
    brandColor: BRAND.engeem,
    highlight: true,
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
    logoBg: '#ffffff',
    brandColor: BRAND.gold,
    brandBorder: BRAND.goldBorder,
    highlight: true,
  },
  {
    id: 'exp-dynexc-consultance',
    type: 'freelance',
    title: 'Consultant Full Stack',
    organization: 'Dynamiques et Excellentes d’Afrique',
    location: 'Abidjan, Côte d’Ivoire',
    period: 'juin 2026 — 6 mois — en cours',
    description:
      'Après l’année de stage : mission de consultance démarrée en juin 2026 (6 mois, en cours) pour poursuivre la livraison et le pilotage technique des produits DynExcAfrica.',
    tags: ['Consultance', '6 mois', 'Full Stack', 'En cours'],
    logo: logoDynexc,
    lightCard: true,
    highlight: true,
    current: true,
  },
  {
    id: 'exp-engeem-cdi',
    type: 'experience',
    title: 'Développeur Full Stack — CDI',
    organization: 'ENGEEM',
    location: 'Abidjan, Côte d’Ivoire',
    period: 'août 2026 — Présent',
    description:
      'Passage en CDI dès août 2026 : poursuite du travail produit sur la plateforme data ENGEEM, après 7 mois de stage.',
    tags: ['CDI', 'Angular', 'Data', 'Produit'],
    logo: logoEngeem,
    logoBg: 'linear-gradient(160deg, #14C4C7 0%, #109BBB 45%, #0A6E72 100%)',
    logoFit: 'cover',
    brandColor: BRAND.engeem,
    highlight: true,
    current: true,
  },
]
