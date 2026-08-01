import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import logo from '@/assets/brand/logo-ld-didier.png'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { useLanguage } from '@/i18n/LanguageProvider'

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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

  const go = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/75 py-2.5 backdrop-blur-md'
          : 'bg-transparent py-3',
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
            className="h-[4.75rem] w-auto sm:h-20 md:h-[5.5rem]"
            width={352}
            height={88}
            decoding="async"
          />
        </button>

        <ul className="hidden lg:flex items-center gap-0.5">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className="rounded-lg px-3.5 py-2 text-base text-muted transition-colors hover:text-text hover:bg-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden sm:inline-flex h-10 items-center rounded-xl bg-accent/15 px-4 text-sm font-medium text-accent border border-accent/25 hover:bg-accent/25 transition-colors"
          >
            {t.nav.contactCta}
          </button>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60"
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
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-base text-text hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => go('contact')}
                  className="w-full rounded-xl bg-accent/15 px-4 py-3 text-left font-medium text-accent"
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
