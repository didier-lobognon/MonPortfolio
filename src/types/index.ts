/** Types globaux du portfolio */

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: number
  description: string
  icon: string
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectArchStep {
  title: string
  description: string
}

export interface ProjectContribution {
  area: 'frontend' | 'backend'
  items: string[]
}

export interface ProjectTechGroup {
  label: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  video?: string
  technologies: string[]
  github?: string
  demo?: string
  featured?: boolean
  year: string
  /** Période affichée (ex. juil. 2025 – déc. 2025) */
  period?: string
  /** Case study enrichie (modal détail) */
  category?: string
  role?: string
  accent?: string
  features?: ProjectFeature[]
  architecture?: ProjectArchStep[]
  contributions?: ProjectContribution[]
  /** Précision transparente sur le périmètre de contribution */
  contributionNote?: string
  /** Accroche courte affichée sur la carte */
  contributionTeaser?: string
  /** Paragraphes détaillés du système (modal) */
  overview?: string[]
  /** Highlights de contribution (cartes mises en avant) */
  contributionHighlights?: ProjectFeature[]
  techStack?: ProjectTechGroup[]
  gallery?: string[]
  caseStudy?: boolean
}


export type TimelineType =
  | 'formation'
  | 'experience'
  | 'stage'
  | 'freelance'
  | 'certificat'
  | 'milestone'

export interface TimelineItem {
  id: string
  type: TimelineType
  title: string
  organization: string
  location: string
  period: string
  description: string
  tags?: string[]
  /** Logo entreprise / établissement */
  logo?: string
  /** Mise en avant (poste actuel, certif clé…) */
  highlight?: boolean
  /** En cours */
  current?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: string
}

export interface PersonalInfo {
  name: string
  firstName: string
  lastName: string
  title: string
  subtitle: string
  email: string
  phone: string
  location: string
  availability: string
  bio: string[]
  interests: string[]
  socials: SocialLink[]
}
