import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Code2, MapPin, Rocket, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import portrait from '@/assets/brand/ld-didier.png'
import iconPattern from '@/assets/brand/iconpattern.png'
import { viewportOnce } from '@/lib/animations'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useTheme } from '@/i18n/ThemeProvider'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import ProfileCard from '@/components/shared/ProfileCard'

const PILLAR_ICONS = [Code2, Rocket, Sparkles] as const
const ease = [0.22, 1, 0.36, 1] as const

export function About() {
  const { t } = useLanguage()
  const { isDark } = useTheme()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0.1, 0.5], [28, 0])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-x-hidden pt-14 pb-24 sm:py-32"
    >
      <div
        className="theme-ambient pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 50% 42% at 12% 35%, rgba(59,130,246,0.16), transparent 58%), radial-gradient(ellipse 38% 32% at 88% 68%, rgba(34,211,238,0.08), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <p className="mb-3 font-medium text-sm tracking-[0.22em] uppercase text-accent">
            {t.about.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-5 h-px w-16 bg-text/25" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          {/* Portrait */}
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:sticky lg:top-28 lg:max-w-none"
          >
            <ProfileCard
              name={personalInfo.name}
              title={t.hero.title}
              handle="didier-lobognon"
              status={t.hero.availability}
              contactText={t.hero.ctaContact}
              avatarUrl={portrait}
              iconUrl={iconPattern}
              showUserInfo={false}
              enableTilt
              enableMobileTilt={false}
              behindGlowEnabled={isDark}
              behindGlowColor="rgba(125, 190, 255, 0.55)"
              behindGlowSize="55%"
              innerGradient={
                isDark
                  ? 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'
                  : undefined
              }
              onContactClick={() => scrollToSection('contact')}
            />

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              <p className="inline-flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={13} className="text-accent-cyan/80" aria-hidden />
                {personalInfo.location}
              </p>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" aria-hidden />
              <p className="text-xs text-emerald-600">{t.hero.availability}</p>
            </div>
          </motion.div>

          {/* Contenu */}
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, ease }}
              className="relative max-w-xl border-l-2 border-accent/50 pl-5 text-lg leading-relaxed text-text/95 sm:pl-6 sm:text-xl sm:leading-relaxed"
            >
              {t.about.lead}
            </motion.p>

            <div className="mt-10 max-w-xl space-y-6">
              {t.about.bio.map((paragraph, i) => (
                <motion.div
                  key={paragraph.slice(0, 28)}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease }}
                  className="flex gap-4"
                >
                  <span
                    className="mt-1.5 font-mono text-[11px] tabular-nums tracking-wider text-accent/70"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-9 font-name text-base font-medium tracking-tight text-muted sm:text-lg"
            >
              {t.about.signature}
            </motion.p>

            {/* Axes */}
            <div className="mt-12">
              <p className="mb-5 font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
                {t.about.focusLabel}
              </p>
              <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {t.about.pillars.map((pillar, i) => {
                  const Icon = PILLAR_ICONS[i] ?? Sparkles
                  return (
                    <motion.li
                      key={pillar.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.08 * i, duration: 0.5, ease }}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-elevated px-4 py-5 transition-colors hover:border-accent/30 light-card-soft"
                    >
                      <span
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                      <Icon
                        size={18}
                        className="mb-3 text-text"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <p className="font-display text-sm font-semibold tracking-wide text-text">
                        {pillar.title}
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted">
                        {pillar.text}
                      </p>
                    </motion.li>
                  )
                })}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                variant="gradient"
                className="gap-2 transition-transform duration-300 hover:scale-[1.02]"
                data-cursor="contact"
                onClick={() => scrollToSection('contact')}
              >
                {t.about.cta}
                <ArrowUpRight size={18} />
              </Button>
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="text-sm font-medium text-muted transition-colors hover:text-text"
              >
                {t.hero.ctaProjects} →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
