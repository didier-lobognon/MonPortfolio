import type { Service } from '@/types'

/**
 * Offres alignées sur le terrain réel :
 * FinTech, ERP, RH, e-commerce / Mobile Money, sites institutionnels, prod Docker.
 */
export const services: Service[] = [
  {
    id: 'product',
    titleFr: 'Produit web de A à Z',
    titleEn: 'End-to-end web product',
    descriptionFr:
      'Du brief au déploiement : interfaces modernes, API solide et parcours pensés pour vos utilisateurs — pas une démo jetable.',
    descriptionEn:
      'From brief to deploy: modern UI, solid API, and journeys built for real users — not a throwaway demo.',
    pointsFr: [
      'React, Vue ou Angular selon le besoin',
      'Code propre, livrable et maintenable',
      'MVP utile, puis itérations mesurées',
    ],
    pointsEn: [
      'React, Vue, or Angular as needed',
      'Clean, shippable, maintainable code',
      'Useful MVP, then measured iterations',
    ],
    icon: 'code',
    accent: '#22D3EE',
  },
  {
    id: 'business',
    titleFr: 'Apps métier & dashboards',
    titleEn: 'Business apps & dashboards',
    descriptionFr:
      'Outils qui collent à vos process — ERP, RH, FinTech, reporting — pour piloter l’activité sans friction.',
    descriptionEn:
      'Tools that match your workflows — ERP, HR, FinTech, reporting — so you can run the business without friction.',
    pointsFr: [
      'Rôles, permissions, multi-espaces',
      'Tableaux de bord actionnables',
      'Modules alignés sur le terrain',
    ],
    pointsEn: [
      'Roles, permissions, multi-spaces',
      'Actionable dashboards',
      'Modules aligned with the field',
    ],
    icon: 'layers',
    accent: '#A78BFA',
  },
  {
    id: 'api',
    titleFr: 'API & backend sécurisé',
    titleEn: 'Secure API & backend',
    descriptionFr:
      'Des services NestJS / Node prêts pour la prod : auth JWT, transactions, KYC/OTP, architecture claire et évolutive.',
    descriptionEn:
      'NestJS / Node services ready for prod: JWT auth, transactions, KYC/OTP, clear and scalable architecture.',
    pointsFr: [
      'REST documentée et performante',
      'Sécurité & traçabilité métier',
      'PostgreSQL / MySQL selon le contexte',
    ],
    pointsEn: [
      'Documented, performant REST',
      'Security & business traceability',
      'PostgreSQL / MySQL as needed',
    ],
    icon: 'server',
    accent: '#34D399',
  },
  {
    id: 'commerce',
    titleFr: 'E-commerce & paiements',
    titleEn: 'E-commerce & payments',
    descriptionFr:
      'Boutique, panier, admin et paiements locaux (Mobile Money) — un parcours d’achat fluide, de la vitrine au back-office.',
    descriptionEn:
      'Storefront, cart, admin, and local payments (Mobile Money) — a smooth purchase journey from shop to back-office.',
    pointsFr: [
      'Catalogue, commandes, notifications',
      'Intégration Mobile Money',
      'Admin pour piloter le quotidien',
    ],
    pointsEn: [
      'Catalog, orders, notifications',
      'Mobile Money integration',
      'Admin to run day-to-day ops',
    ],
    icon: 'shopping',
    accent: '#F59E0B',
  },
  {
    id: 'institutional',
    titleFr: 'Sites & plateformes',
    titleEn: 'Sites & platforms',
    descriptionFr:
      'Vitrines ONG, événements, inscriptions et contenus bilingues — WordPress ou stack custom, selon ce qui sert le mieux le projet.',
    descriptionEn:
      'NGO sites, events, registrations, and bilingual content — WordPress or custom stack, whichever serves the project best.',
    pointsFr: [
      'Identité claire, UX soignée',
      'Formulaires & espaces admin',
      'FR / EN quand c’est critique',
    ],
    pointsEn: [
      'Clear identity, polished UX',
      'Forms & admin spaces',
      'FR / EN when it matters',
    ],
    icon: 'globe',
    accent: '#3B82F6',
  },
  {
    id: 'ship',
    titleFr: 'Mise en prod & suivi',
    titleEn: 'Ship & ongoing care',
    descriptionFr:
      'Docker, Traefik, HTTPS, monitoring léger — puis correctifs et évolutions pour que le produit tienne dans le temps.',
    descriptionEn:
      'Docker, Traefik, HTTPS, light monitoring — then fixes and evolution so the product holds up over time.',
    pointsFr: [
      'Déploiement maîtrisé',
      'Correctifs prioritaires',
      'Conseil stack & architecture',
    ],
    pointsEn: [
      'Controlled deployment',
      'Priority fixes',
      'Stack & architecture advice',
    ],
    icon: 'rocket',
    accent: '#F97316',
  },
]
