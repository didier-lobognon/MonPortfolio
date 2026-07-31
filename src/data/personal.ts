import type { PersonalInfo } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Didier Lobognon',
  firstName: 'Didier',
  lastName: 'Lobognon',
  title: 'Développeur Full Stack',
  subtitle:
    'Je conçois des applications web modernes, performantes et centrées sur l\'expérience utilisateur.',
  email: 'didier.lobognon@email.com',
  phone: '+33 6 00 00 00 00',
  location: 'Abidjan, Côte d\'Ivoire',
  availability: 'Disponible — nouvelles opportunités',
  bio: [
    'Je suis un développeur Full Stack passionné par la création d\'applications web modernes.',
    'Je développe aussi bien le Front-End que le Back-End, avec une attention particulière portée à la qualité du code et à l\'expérience utilisateur.',
    'Ce qui me motive au quotidien : transformer des idées en produits concrets, propres et agréables à utiliser.',
  ],
  interests: [
    'UX/UI',
    'Architecture logicielle',
    'API',
    'Performance',
    'Sécurité',
    'Applications métier',
  ],
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/didier-lobognon',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/didier-lobognon',
      icon: 'github',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:didier.lobognon@email.com',
      icon: 'mail',
    },
  ],
}
