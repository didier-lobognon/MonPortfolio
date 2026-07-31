export type Locale = 'fr' | 'en'

export const messages = {
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      journey: 'Parcours',
      services: 'Services',
      contact: 'Contact',
      contactCta: 'Me contacter',
      home: "Retour à l'accueil",
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      langLabel: 'Changer de langue',
    },
    hero: {
      availability: 'Disponible — nouvelles opportunités',
      title: 'Développeur Full Stack',
      subtitle:
        'Je conçois et développe des applications web complètes — du front à l’API — avec une exigence forte sur la performance, la qualité du code et l’expérience utilisateur. Mon objectif : transformer un brief en produit fiable, élégant et prêt pour la production.',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Un développeur, une vision produit',
      description:
        "Du pixel à l'API — je construis des expériences web cohérentes de bout en bout.",
      interestsTitle: "Ce qui m'intéresse particulièrement",
      bio: [
        "Je suis un développeur Full Stack passionné par la création d'applications web modernes.",
        "Je développe aussi bien le Front-End que le Back-End, avec une attention particulière portée à la qualité du code et à l'expérience utilisateur.",
        'Ce qui me motive au quotidien : transformer des idées en produits concrets, propres et agréables à utiliser.',
      ],
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Stack technique',
      description: 'Des outils choisis pour livrer vite, propre et scalable.',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Sélection de réalisations',
      description: 'Des produits pensés pour la performance et l’expérience.',
    },
    journey: {
      eyebrow: 'Parcours',
      title: 'Timeline',
      description: 'Formations, expériences et étapes clés.',
    },
    services: {
      eyebrow: 'Services',
      title: 'Ce que je peux faire pour vous',
      description: 'Un accompagnement full stack, du concept au déploiement.',
    },
    stats: {
      eyebrow: 'Impact',
      title: 'Quelques chiffres',
      description: 'Des indicateurs qui reflètent mon engagement.',
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: "Ce qu'on dit de moi",
      description: 'Retours de clients et collaborateurs.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre projet',
      description: 'Une idée, un besoin, une opportunité — écrivez-moi.',
    },
    footer: {
      quote:
        '« Le détail fait la différence entre un produit correct et une expérience mémorable. »',
      rights: 'Tous droits réservés.',
      crafted: 'Conçu avec React, Framer Motion & GSAP.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      journey: 'Journey',
      services: 'Services',
      contact: 'Contact',
      contactCta: 'Contact me',
      home: 'Back to home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langLabel: 'Switch language',
    },
    hero: {
      availability: 'Open to new opportunities',
      title: 'Full Stack Developer',
      subtitle:
        'I design and build complete web applications — from UI to API — with a strong focus on performance, code quality, and user experience. My goal: turn a brief into a reliable, elegant, production-ready product.',
      ctaProjects: 'View my work',
      ctaContact: 'Contact me',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'About',
      title: 'A developer with a product mindset',
      description:
        'From pixel to API — I craft coherent end-to-end web experiences.',
      interestsTitle: 'What I care about most',
      bio: [
        'I am a Full Stack developer passionate about building modern web applications.',
        'I work across Front-End and Back-End, with particular attention to code quality and user experience.',
        'What drives me daily: turning ideas into clean, concrete products that feel great to use.',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tech stack',
      description: 'Tools chosen to ship fast, clean, and scalable.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      description: 'Products built for performance and experience.',
    },
    journey: {
      eyebrow: 'Journey',
      title: 'Timeline',
      description: 'Education, experience, and key milestones.',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can do for you',
      description: 'Full-stack support from concept to deployment.',
    },
    stats: {
      eyebrow: 'Impact',
      title: 'A few numbers',
      description: 'Indicators that reflect my commitment.',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What people say',
      description: 'Feedback from clients and collaborators.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      description: 'An idea, a need, an opportunity — reach out.',
    },
    footer: {
      quote:
        '“Detail is what separates a decent product from a memorable experience.”',
      rights: 'All rights reserved.',
      crafted: 'Built with React, Framer Motion & GSAP.',
    },
  },
} as const

export type Messages = {
  [K in keyof (typeof messages)['fr']]: {
    [P in keyof (typeof messages)['fr'][K]]: (typeof messages)['fr'][K][P] extends readonly string[]
      ? readonly string[]
      : string
  }
}
