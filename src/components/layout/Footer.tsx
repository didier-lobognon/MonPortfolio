import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ArrowUp, Mail, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { scrollToSection, cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

const NAV_IDS = ['about', 'skills', 'projects', 'journey', 'services', 'contact'] as const

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const linkedin = personalInfo.socials.find((s) => s.id === 'linkedin')?.href ?? '#'
  const github = personalInfo.socials.find((s) => s.id === 'github')?.href ?? '#'

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Bandeau CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]/75 px-6 py-8 backdrop-blur-xl sm:px-10 sm:py-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
                {personalInfo.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                {t.footer.quote}
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              data-cursor={t.footer.cta}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,0.35)] transition-transform hover:scale-[1.02]"
            >
              {t.footer.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-semibold text-text">
              {personalInfo.firstName}
              <span className="text-accent-cyan">.</span>
              {personalInfo.lastName}
            </p>
            <p className="mt-2 text-sm text-slate-500">{personalInfo.title}</p>
            <p className="mt-1 text-sm text-slate-500">{personalInfo.location}</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-accent-cyan transition-opacity hover:opacity-80"
              data-cursor="Email"
            >
              <Mail className="h-3.5 w-3.5" />
              {personalInfo.email}
            </a>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-slate-500 uppercase">
              {t.footer.navLabel}
            </p>
            <ul className="space-y-2.5">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-slate-400 transition-colors hover:text-text"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-slate-500 uppercase">
              {t.footer.socialLabel}
            </p>
            <div className="flex flex-col gap-2.5">
              <SocialLink href={linkedin} label="LinkedIn">
                <FaLinkedin size={16} />
                LinkedIn
              </SocialLink>
              <SocialLink href={github} label="GitHub">
                <FaGithub size={16} />
                GitHub
              </SocialLink>
              <SocialLink href={`mailto:${personalInfo.email}`} label="Email">
                <Mail size={16} />
                Email
              </SocialLink>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="text-sm leading-relaxed text-slate-500">{t.footer.crafted}</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-accent-cyan/40 hover:text-text"
              data-cursor={t.footer.backTop}
            >
              <ArrowUp className="h-3.5 w-3.5" />
              {t.footer.backTop}
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {personalInfo.name}. {t.footer.rights}
          </p>
          <p className="font-mono tracking-wide uppercase">{personalInfo.availability}</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
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
        'inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-accent-cyan',
      )}
    >
      {children}
    </a>
  )
}
