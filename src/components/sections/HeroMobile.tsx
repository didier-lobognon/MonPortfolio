import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import portrait from '@/assets/brand/ld-didier.png'
import DomeGallery from '@/components/shared/DomeGallery'
import { scrollToSection, cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useTheme } from '@/i18n/ThemeProvider'
import { HERO_TECH_LOGOS } from '@/data/heroTechLogos'
import { HeroAvailability } from '@/components/sections/HeroAvailability'

const ease = [0.22, 1, 0.36, 1] as const

/** Hero mobile immersif — composition distincte du desktop */
export function HeroMobile() {
  const { t, locale } = useLanguage()
  const { isDark } = useTheme()
  const reduceMotion = useReducedMotion()
  const letters = personalInfo.name.split('')

  return (
    <div className="relative flex min-h-[100svh] w-full flex-col bg-bg px-5 pb-8 pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-bg" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-[70%]">
          <img
            src={portrait}
            alt=""
            className={cn(
              'mx-auto h-full w-full max-w-lg object-cover object-[center_18%]',
              isDark ? 'opacity-[0.18]' : 'opacity-[0.12]',
            )}
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 85% 75% at 50% 40%, #000 10%, transparent 70%)',
              maskImage:
                'radial-gradient(ellipse 85% 75% at 50% 40%, #000 10%, transparent 70%)',
              filter: isDark
                ? 'brightness(0.28) contrast(1.1) saturate(0.5)'
                : 'brightness(0.85) contrast(1.05) saturate(0.55)',
            }}
            decoding="async"
          />
          <div className="absolute inset-0 bg-bg/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/25 via-bg/7 to-bg" />
        </div>

        <div className="theme-ambient absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_18%,rgba(59,130,246,0.1),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="text-center">
          <HeroAvailability className="mb-4" center />

          <h1 className="font-name text-[clamp(1.85rem,8.2vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-text">
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
            className={cn(
              isDark
                ? 'hero-mobile-shimmer mt-5 bg-gradient-to-r from-accent-cyan via-accent to-accent-violet bg-[length:200%_100%] bg-clip-text font-display text-xl font-semibold tracking-tight text-transparent sm:text-2xl'
                : 'mt-5 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl',
            )}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease }}
          className="relative mx-auto mt-8 mb-4 h-[280px] w-full overflow-hidden px-3"
        >
          <DomeGallery
            images={[...HERO_TECH_LOGOS]}
            fit={0.78}
            minRadius={290}
            maxRadius={420}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            logosMode
            frameless={!isDark}
            autoRotate
            autoRotateSpeed={6}
            overlayBlurColor={isDark ? '#050816' : '#ffffff'}
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
