import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import logo from '@/assets/brand/logo-ld-didier.png'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { useLanguage } from '@/i18n/LanguageProvider'

const SECTION_IDS = ['about', 'skills', 'projects', 'journey', 'services', 'contact'] as const

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'journey', label: t.nav.journey },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!elements.length) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId: string | null = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (window.scrollY < 120) {
          setActiveId(null)
          return
        }

        if (bestId) setActiveId(bestId)
      },
      {
        root: null,
        // Bias toward the band under the fixed navbar
        rootMargin: '-18% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    setActiveId(id)
    scrollToSection(id)
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/75 py-1.5 backdrop-blur-md sm:py-2.5'
          : 'bg-transparent py-2 sm:py-3',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label={t.nav.home}
        >
          <img
            src={logo}
            alt="LD Didier"
            className="h-[4.15rem] w-auto sm:h-20 md:h-[5.5rem]"
            width={352}
            height={88}
            decoding="async"
          />
        </button>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const active = activeId === link.id
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'relative px-3.5 pb-2.5 pt-2 text-base transition-colors',
                    active ? 'text-text' : 'text-muted hover:text-text hover:bg-white/5 rounded-lg',
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-3.5 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-accent-cyan via-accent to-accent-violet shadow-[0_0_12px_rgba(59,130,246,0.55)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageToggle className="h-[34px]" />

          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden sm:inline-flex h-[34px] items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-3 text-[11px] font-semibold tracking-wide text-accent transition-colors hover:border-accent/45 hover:bg-accent/25"
          >
            <MessageCircle size={14} strokeWidth={2.25} aria-hidden />
            {t.nav.contactCta}
          </button>

          <button
            type="button"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/60 sm:h-10 sm:w-10"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-border glass"
          >
            <ul className="flex flex-col gap-1 px-5 py-3">
              {links.map((link) => {
                const active = activeId === link.id
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => go(link.id)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'relative w-full rounded-xl px-4 py-2.5 text-left text-base transition-colors',
                        active
                          ? 'bg-white/[0.06] text-text'
                          : 'text-text hover:bg-white/5',
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute inset-x-4 bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-accent-cyan via-accent to-accent-violet" />
                      )}
                    </button>
                  </li>
                )
              })}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => go('contact')}
                  className="w-full rounded-xl bg-accent/15 px-4 py-2.5 text-left font-medium text-accent"
                >
                  {t.nav.contactCta}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
