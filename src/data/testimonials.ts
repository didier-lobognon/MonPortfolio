import type { Testimonial } from '@/types'
import photoRuth from '@/assets/testimonials/ruth-amani.jpg'
import photoFranck from '@/assets/testimonials/franck-guessan.png'
import photoAllexia from '@/assets/testimonials/allexia-yako.png'
import photoAziz from '@/assets/testimonials/ouattara-abdoul-aziz.jpg'
import photoWilfried from '@/assets/testimonials/koua-wilfried.jpg'
import logoDynexc from '@/assets/logos/dynexc.png'
import logoWaicebon from '@/assets/logos/waicebon.jpg'
import logoYako from '@/assets/logos/yako.png'
import logoMasa from '@/assets/projects/masafinance/masafinance.png'
import logoCouvoir from '@/assets/projects/couvoir-baf/couvoirbaf.png'

/**
 * Témoignages — personnes & entreprises réelles.
 * Photos LinkedIn : Ruth, Franck N'Guessan, Ouattara, Wilfried.
 * Allexia : placeholder (URL LinkedIn manquante).
 */
export const testimonials: Testimonial[] = [
  {
    id: 'dynexc-ruth',
    name: 'Ruth Amani',
    roleFr: 'Responsable programmes & opérations',
    roleEn: 'Programs & Operations Manager',
    company: 'DynExcAfrica',
    contentFr:
      'Didier a porté plusieurs produits critiques pour DynExcAfrica — du site institutionnel aux outils RH et au classement live. Fiable, clair sur les livrables, et toujours orienté impact. On avance sereinement avec lui.',
    contentEn:
      'Didier owned several critical products for DynExcAfrica — from the institutional site to HR tools and live rankings. Reliable, clear on deliverables, and always impact-driven. We move forward confidently with him.',
    photo: photoRuth,
    companyLogo: logoDynexc,
    companyLogoBg: '#000000',
    accent: '#F97316',
    rating: 5,
  },
  {
    id: 'waicebon-franck',
    name: "Franck N'Guessan",
    roleFr: 'Fondateur',
    roleEn: 'Founder',
    company: 'Waicebon',
    contentFr:
      'Il a pris en main la plateforme e-commerce avec sérieux : contenus, stabilité, suivi. Communication fluide, exécution propre. Exactement le partenaire qu’on cherche quand un produit doit tourner au quotidien.',
    contentEn:
      'He took ownership of the e-commerce platform with seriousness: content, stability, follow-up. Smooth communication, clean execution. Exactly the partner you want when a product has to run day to day.',
    photo: photoFranck,
    companyLogo: logoWaicebon,
    companyLogoBg: '#ffffff',
    companyLogoFit: 'cover',
    accent: '#3B82F6',
    rating: 5,
  },
  {
    id: 'yako-allexia',
    name: 'Allexia',
    roleFr: 'DSI adjointe',
    roleEn: 'Deputy CIO',
    company: 'Yako Africa',
    contentFr:
      'Pendant le hackathon, Didier a transformé une idée en solution crédible sous pression. Esprit d’équipe, sens du produit, et un livrable qui rassure immédiatement sur la qualité technique.',
    contentEn:
      'During the hackathon, Didier turned an idea into a credible solution under pressure. Team spirit, product sense, and a deliverable that instantly reassures on technical quality.',
    photo: photoAllexia,
    companyLogo: logoYako,
    companyLogoBg: '#ffffff',
    accent: '#22C55E',
    rating: 5,
  },
  {
    id: 'masa-aziz',
    name: 'Ouattara Abdoul Aziz',
    roleFr: 'Développeur Full Stack · Collaborateur',
    roleEn: 'Full Stack Developer · Collaborator',
    company: 'MasaFinance',
    contentFr:
      'Sur MasaFinance, collaborer avec Didier a été fluide et exigeant à la fois. Il structure le front, anticipe les cas métier et livre du code propre. Un binôme sur qui on peut compter en prod.',
    contentEn:
      'On MasaFinance, working with Didier was both smooth and demanding. He structures the front, anticipates business cases, and ships clean code. A pair you can trust in production.',
    photo: photoAziz,
    companyLogo: logoMasa,
    companyLogoFit: 'cover',
    accent: '#12B76A',
    rating: 5,
  },
  {
    id: 'couvoir-wilfried',
    name: 'Koua Wilfried Elvire Aurelien, CSC',
    roleFr: 'Ingénieur logiciel · Collaborateur',
    roleEn: 'Software Engineer · Collaborator',
    company: 'Couvoir BAF',
    contentFr:
      'Sur Couvoir BAF, Didier a su cadrer l’architecture backend et avancer vite sans sacrifier la qualité. Clair dans les échanges, précis dans les modules — un collab qui élève le niveau du projet.',
    contentEn:
      'On Couvoir BAF, Didier framed the backend architecture and moved fast without sacrificing quality. Clear in discussions, precise on modules — a teammate who raises the project bar.',
    photo: photoWilfried,
    companyLogo: logoCouvoir,
    companyLogoFit: 'cover',
    accent: '#A78BFA',
    rating: 5,
  },
]
