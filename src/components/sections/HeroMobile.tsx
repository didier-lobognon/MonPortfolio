import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import portrait from '@/assets/brand/ld-didier.png'
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
    <div className="relative flex min-h-[100svh] w-full flex-col bg-[#050816] px-5 pb-8 pt-32">
      {/* Fond unique — aucun cadre / panneau distinct */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#050816]" aria-hidden>
        {/* Portrait soft, fondu dans le même noir */}
        <div className="absolute inset-x-0 top-0 h-[70%]">
          <img
            src={portrait}
            alt=""
            className="mx-auto h-full w-full max-w-lg object-cover object-[center_18%] opacity-[0.18]"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 85% 75% at 50% 40%, #000 10%, transparent 70%)',
              maskImage:
                'radial-gradient(ellipse 85% 75% at 50% 40%, #000 10%, transparent 70%)',
              filter: 'brightness(0.28) contrast(1.1) saturate(0.5)',
            }}
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#050816]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/25 via-[#050816]/7 to-[#050816]" />
        </div>

        {/* Ambiance très légère — sans bords nets */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_18%,rgba(59,130,246,0.1),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}
          className="mb-8 flex justify-center"
        >
          <div
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/45 bg-emerald-400/10 px-3.5 py-2 text-xs font-medium tracking-wide text-emerald-300 sm:text-sm"
            role="status"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">{t.hero.availability}</span>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md text-center">
          <h1 className="mt-2 font-name text-[clamp(2.05rem,7.2vw,2.55rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-text whitespace-nowrap drop-shadow-[0_2px_24px_rgba(5,8,22,0.85)] max-[280px]:text-[clamp(1.35rem,8vw,2.05rem)] sm:text-[clamp(2.45rem,6.5vw,3.1rem)]">
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
            className="hero-mobile-shimmer mt-5 bg-gradient-to-r from-accent-cyan via-accent to-accent-violet bg-[length:200%_100%] bg-clip-text font-display text-xl font-semibold tracking-tight text-transparent sm:text-2xl"
          >
            {t.hero.title}
          </motion.p>

          <motion.p
            key={`tag-${locale}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.45, ease }}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm text-muted/80"
          >
            <MapPin size={14} className="text-accent-cyan/80" aria-hidden />
            {personalInfo.location}
          </motion.p>
        </div>

        {/* DomeGallery — logos tech (React Bits) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease }}
          className="relative mx-auto mt-8 mb-4 h-[280px] w-full overflow-hidden px-3"
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

        <motion.button
          type="button"
          onClick={() => scrollToSection('about')}
          className="mx-auto mt-4 flex flex-col items-center gap-1.5 text-muted/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          aria-label={t.nav.about}
        >
          <span className="text-[10px] tracking-[0.28em] uppercase">{t.hero.scroll}</span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={15} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}
