import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ArrowUp, Mail, ArrowRight, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { scrollToSection, cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

const NAV_IDS = ['about', 'skills', 'projects', 'journey', 'services', 'contact'] as const
const ease = [0.22, 1, 0.36, 1] as const

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const linkedin = personalInfo.socials.find((s) => s.id === 'linkedin')?.href ?? '#'
  const github = personalInfo.socials.find((s) => s.id === 'github')?.href ?? '#'

  return (
    <footer className="relative overflow-hidden border-t border-white/10 pb-24 sm:pb-0">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        {/* CTA — hero du footer */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease }}
          className="relative mb-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1220]/85 px-5 py-8 text-center backdrop-blur-xl sm:mb-14 sm:rounded-[2rem] sm:px-10 sm:py-10 sm:text-left"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl sm:left-auto sm:right-[-4rem] sm:translate-x-0"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent"
          />

          <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="max-w-xl">
              <p className="mb-2 font-mono text-[10px] tracking-[0.22em] text-accent-cyan uppercase sm:text-[11px]">
                {personalInfo.availability}
              </p>
              <p className="font-display text-[1.65rem] font-bold leading-tight tracking-tight text-text sm:text-3xl">
                {t.footer.cta}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400 sm:text-base">
                {t.footer.quote}
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              data-cursor={t.footer.cta}
              className="inline-flex w-full max-w-xs shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-transform hover:scale-[1.02] sm:w-auto sm:py-3"
            >
              {t.nav.contactCta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Identité */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="mb-8 text-center sm:mb-10 sm:text-left"
        >
          <p className="font-display text-xl font-semibold text-text">
            {personalInfo.firstName}
            <span className="text-accent-cyan">.</span>
            {personalInfo.lastName}
          </p>
          <p className="mt-1.5 text-sm text-slate-400">{personalInfo.title}</p>
          <p className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 sm:justify-start">
            <MapPin size={12} className="text-accent-cyan/70" aria-hidden />
            {personalInfo.location}
          </p>
        </motion.div>

        {/* Nav chips + socials */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="mb-3 text-center font-mono text-[11px] font-medium tracking-[0.18em] text-slate-500 uppercase sm:text-left">
              {t.footer.navLabel}
            </p>
            <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[12px] font-medium text-slate-300 transition-colors hover:border-accent/35 hover:bg-accent/10 hover:text-text"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-center font-mono text-[11px] font-medium tracking-[0.18em] text-slate-500 uppercase sm:text-left">
              {t.footer.socialLabel}
            </p>
            <div className="flex justify-center gap-2.5 sm:justify-start">
              <IconSocial href={linkedin} label="LinkedIn">
                <FaLinkedin size={17} />
              </IconSocial>
              <IconSocial href={github} label="GitHub">
                <FaGithub size={17} />
              </IconSocial>
              <IconSocial href={`mailto:${personalInfo.email}`} label="Email">
                <Mail size={17} />
              </IconSocial>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-3 hidden items-center gap-2 text-sm text-accent-cyan transition-opacity hover:opacity-80 sm:inline-flex"
              data-cursor="Email"
            >
              <Mail className="h-3.5 w-3.5" />
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start sm:justify-between">
            <p className="text-center text-sm leading-relaxed text-slate-500 sm:text-left">
              {t.footer.crafted}
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent-cyan/40 hover:text-text"
              data-cursor={t.footer.backTop}
            >
              <ArrowUp className="h-3.5 w-3.5" />
              {t.footer.backTop}
            </button>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-xs text-slate-600 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {year} {personalInfo.name}. {t.footer.rights}
          </p>
          <p className="font-mono text-[10px] tracking-[0.16em] text-emerald-400/80 uppercase sm:text-[11px]">
            {personalInfo.availability}
          </p>
        </div>
      </div>
    </footer>
  )
}

function IconSocial({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      data-cursor={label}
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-accent-cyan/40 hover:bg-accent-cyan/10 hover:text-accent-cyan',
      )}
    >
      {children}
    </a>
  )
}
