import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import portrait from '@/assets/brand/ld-didier.png'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '@/lib/animations'
import { useLanguage } from '@/i18n/LanguageProvider'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function About() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const photoScale = useTransform(scrollYProgress, [0.1, 0.45], [0.92, 1])
  const photoY = useTransform(scrollYProgress, [0.1, 0.5], [40, 0])
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0.55, 1])

  const interestsLine = personalInfo.interests.join('/')

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-x-hidden py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 15% 40%, rgba(59,130,246,0.14), transparent 60%), radial-gradient(ellipse 40% 35% at 85% 70%, rgba(139,92,246,0.1), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          {/* Portrait + zoom au scroll */}
          <motion.div
            style={{ scale: photoScale, y: photoY }}
            className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
          >
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative"
            >
              <div
                className="absolute -inset-3 rounded-[2rem] border border-accent/20 sm:-inset-4"
                aria-hidden
              />
              <div
                className="absolute -right-3 -bottom-3 h-full w-full rounded-[1.75rem] bg-gradient-to-br from-accent/25 via-accent-violet/15 to-transparent sm:-right-4 sm:-bottom-4"
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070b16] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
                <img
                  src={portrait}
                  alt={personalInfo.name}
                  className="aspect-[4/5] w-full object-cover object-[center_12%]"
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(59,130,246,0.12)_50%,transparent_60%)]"
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-name text-xl font-semibold tracking-tight text-text sm:text-2xl">
                    {personalInfo.name}
                  </p>
                  <p className="mt-1 font-mono text-xs tracking-[0.18em] text-accent-cyan uppercase">
                    {t.hero.title}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin size={14} className="text-accent/80" aria-hidden />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <motion.div
                className="absolute -top-3 right-4 hidden rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium tracking-wide text-emerald-300 backdrop-blur-md sm:block"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.35 }}
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                {t.hero.availability}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contenu */}
          <motion.div
            style={{ opacity: contentOpacity }}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="min-w-0"
          >
            <p className="mb-4 font-medium text-sm tracking-[0.22em] uppercase text-accent">
              {t.about.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              {t.about.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text/90 sm:text-xl">
              {t.about.lead}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 space-y-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
            >
              {t.about.bio.map((paragraph) => (
                <motion.p key={paragraph.slice(0, 32)} variants={fadeInUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <p className="mt-8 font-name text-base font-medium tracking-tight text-accent-cyan sm:text-lg">
              {t.about.signature}
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-5 font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
                {t.about.focusLabel}
              </p>
              <ul className="grid gap-5 sm:grid-cols-3">
                {t.about.pillars.map((pillar, i) => (
                  <motion.li
                    key={pillar.title}
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-4"
                  >
                    <span
                      className="absolute top-1 left-0 h-8 w-px bg-gradient-to-b from-accent to-accent-violet"
                      aria-hidden
                    />
                    <p className="font-display text-sm font-semibold tracking-wide text-text">
                      {pillar.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {pillar.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Une seule ligne */}
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 overflow-x-auto whitespace-nowrap font-mono text-[11px] tracking-wide text-slate-400 sm:text-xs"
            >
              {interestsLine}
            </motion.p>

            {/* CTA sans magnetic — zoom au scroll */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
