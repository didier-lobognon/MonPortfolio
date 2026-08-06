import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin, Smartphone } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { Button } from '@/components/ui/button'
import DomeGallery from '@/components/shared/DomeGallery'
import { scrollToSection } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

import logoReact from '@/assets/tech/react.svg'
import logoNode from '@/assets/tech/nodedotjs.svg'
import logoAngular from '@/assets/tech/angular.svg'
import logoVue from '@/assets/tech/vuedotjs.svg'
import logoTs from '@/assets/tech/typescript.svg'
import logoJs from '@/assets/tech/javascript.svg'
import logoPhp from '@/assets/tech/php.svg'
import logoPython from '@/assets/tech/python.svg'
import logoJava from '@/assets/tech/openjdk.svg'
import logoTailwind from '@/assets/tech/tailwindcss.svg'
import logoDocker from '@/assets/tech/docker.svg'
import logoPostgres from '@/assets/tech/postgresql.svg'

const TECH_LOGOS = [
  { src: logoReact, alt: 'React' },
  { src: logoNode, alt: 'Node.js' },
  { src: logoAngular, alt: 'Angular' },
  { src: logoVue, alt: 'Vue' },
  { src: logoTs, alt: 'TypeScript' },
  { src: logoJs, alt: 'JavaScript' },
  { src: logoPhp, alt: 'PHP' },
  { src: logoPython, alt: 'Python' },
  { src: logoJava, alt: 'Java' },
  { src: logoTailwind, alt: 'Tailwind' },
  { src: logoDocker, alt: 'Docker' },
  { src: logoPostgres, alt: 'PostgreSQL' },
]

const ease = [0.22, 1, 0.36, 1] as const

/** Hero mobile immersif — composition distincte du desktop */
export function HeroMobile() {
  const { t, locale } = useLanguage()
  const reduceMotion = useReducedMotion()
  const letters = personalInfo.name.split('')

  return (
    <div className="relative flex flex-col overflow-hidden px-5 pb-6 pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(34,211,238,0.14),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_70%,rgba(139,92,246,0.18),transparent_42%)]" />
        <motion.div
          className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-accent/30 blur-[90px]"
          animate={
            reduceMotion ? undefined : { x: [0, 28, 0], y: [0, 18, 0], opacity: [0.45, 0.75, 0.45] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-16 bottom-40 h-56 w-56 rounded-full bg-accent-cyan/25 blur-[80px]"
          animate={
            reduceMotion ? undefined : { x: [0, -22, 0], y: [0, -16, 0], opacity: [0.35, 0.65, 0.35] }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}
          className="mb-8 flex justify-center"
        >
          <div
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/45 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-emerald-300 backdrop-blur-md"
            role="status"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">{t.hero.availability}</span>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm text-center">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-[58%] select-none font-name text-[6.5rem] font-semibold leading-none tracking-tighter text-white/[0.035]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9, ease }}
          >
            DL
          </motion.span>

          <h1 className="mt-2 font-name text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.03em] text-text">
            {letters.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.18 + i * 0.028, duration: 0.45, ease }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            key={`title-m-${locale}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease }}
            className="hero-mobile-shimmer mt-5 bg-gradient-to-r from-accent-cyan via-accent to-accent-violet bg-[length:200%_100%] bg-clip-text font-display text-lg font-semibold tracking-tight text-transparent"
          >
            {t.hero.title}
          </motion.p>

          <motion.p
            key={`tag-${locale}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.45, ease }}
            className="mx-auto mt-4 max-w-sm whitespace-nowrap text-sm leading-relaxed text-muted"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs text-muted/75"
          >
            <MapPin size={12} className="text-accent-cyan/80" aria-hidden />
            {personalInfo.location}
          </motion.p>
        </div>

        {/* DomeGallery — logos tech (React Bits) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease }}
          className="relative mx-auto mt-6 mb-5 h-[280px] w-full overflow-hidden px-3 [mask-image:linear-gradient(90deg,transparent_0%,#000_10%,#000_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
        >
          <DomeGallery
            images={TECH_LOGOS}
            fit={0.78}
            minRadius={290}
            maxRadius={420}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            logosMode
            autoRotate
            autoRotateSpeed={6}
            overlayBlurColor="#050816"
            imageBorderRadius="0px"
            openedImageBorderRadius="12px"
            openedImageWidth="140px"
            openedImageHeight="140px"
            padFactor={0.1}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5, ease }}
          className="mt-2 flex w-full gap-2.5"
        >
          <Button
            size="lg"
            variant="gradient"
            className="h-12 min-w-0 flex-1 justify-center gap-1.5 px-3 text-sm shadow-[0_0_32px_rgba(59,130,246,0.35)]"
            data-cursor="projets"
            onClick={() => scrollToSection('projects')}
          >
            {t.hero.ctaProjects}
            <ArrowRight size={16} />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 min-w-0 flex-1 justify-center gap-1.5 border-white/15 px-3 text-sm backdrop-blur-sm"
            data-cursor="contact"
            onClick={() => scrollToSection('contact')}
          >
            <Smartphone size={15} strokeWidth={2} />
            {t.hero.ctaContact}
          </Button>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => scrollToSection('about')}
          className="mx-auto mt-5 flex flex-col items-center gap-1.5 text-muted/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          aria-label={t.nav.about}
        >
          <span className="text-[9px] tracking-[0.28em] uppercase">{t.hero.scroll}</span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}
