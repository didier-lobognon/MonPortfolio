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
}

export interface TimelineItem {
  id: string
  type: 'formation' | 'experience' | 'stage' | 'freelance'
  title: string
  organization: string
  location: string
  period: string
  description: string
  tags?: string[]
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
