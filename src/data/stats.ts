import type { Stat } from '@/types'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'
import { timeline } from '@/data/timeline'

const podiumCount = timeline.filter((t) => t.type === 'milestone').length
const certCount = timeline.filter((t) => t.type === 'certificat').length

/**
 * Totaux réels (publics + missions entreprise / clients confidentiels).
 * Le portfolio n’expose qu’une sélection — le reste reste privé.
 */
const TOTAL_PROJECTS = 20
const TOTAL_IN_PROD = 15

/** Domaines couverts par les projets du portfolio */
const domains = Array.from(
  new Set(
    projects
      .map((p) => p.category?.split('·')[0]?.trim())
      .filter((d): d is string => Boolean(d)),
  ),
)

/**
 * Impact : totaux réels + preuves publiques du portfolio.
 */
export const stats: Stat[] = [
  {
    id: 'projects',
    value: TOTAL_PROJECTS,
    suffix: '+',
    labelFr: 'Projets livrés',
    labelEn: 'Shipped projects',
    hintFr: 'Dont missions privées non exposées',
    hintEn: 'Including private / confidential work',
    icon: 'folder',
    accent: '#22D3EE',
  },
  {
    id: 'live',
    value: TOTAL_IN_PROD,
    suffix: '+',
    labelFr: 'En production',
    labelEn: 'Live in production',
    hintFr: 'Publics + outils internes clients',
    hintEn: 'Public sites + private client tools',
    icon: 'globe',
    accent: '#34D399',
    pulse: true,
  },
  {
    id: 'tech',
    value: skills.length,
    labelFr: 'Technologies',
    labelEn: 'Technologies',
    hintFr: 'Stack réellement utilisée',
    hintEn: 'Stack actually in use',
    icon: 'code',
    accent: '#A78BFA',
  },
  {
    id: 'podiums',
    value: podiumCount,
    labelFr: 'Podiums hackathon',
    labelEn: 'Hackathon podiums',
    hintFr: 'We.Code 1ʳᵉ · Yako 3ᵉ',
    hintEn: 'We.Code 1st · Yako 3rd',
    icon: 'trophy',
    accent: '#F59E0B',
  },
]

export const impactHighlights = {
  certs: certCount,
  domains,
  proofsFr: [
    { label: '1ʳᵉ place', detail: 'Hackathon We.Code · mai 2025' },
    { label: '3ᵉ place', detail: 'Hackathon Yako Africa · mars 2026' },
    { label: 'CDI + consultance', detail: 'ENGEEM & DynExcAfrica — en cours' },
    { label: `${certCount} certifications`, detail: 'UX/UI IGS · Full Stack Epitech' },
  ],
  proofsEn: [
    { label: '1st place', detail: 'We.Code Hackathon · May 2025' },
    { label: '3rd place', detail: 'Yako Africa Hackathon · Mar 2026' },
    { label: 'Full-time + consulting', detail: 'ENGEEM & DynExcAfrica — ongoing' },
    { label: `${certCount} certifications`, detail: 'UX/UI IGS · Full Stack Epitech' },
  ],
} as const
