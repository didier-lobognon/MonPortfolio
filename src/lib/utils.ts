import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { getLenisInstance } from '@/lib/lenis'

/** Fusion intelligente des classes Tailwind */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Scroll vers une section par id (compatible Lenis) */
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const lenis = getLenisInstance()
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
