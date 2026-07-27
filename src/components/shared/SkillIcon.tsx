import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  php: SiPhp,
  laravel: SiLaravel,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  docker: SiDocker,
  postman: SiPostman,
  figma: SiFigma,
}

interface SkillIconProps {
  name: string
  className?: string
}

export function SkillIcon({ name, className }: SkillIconProps) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden />
}
