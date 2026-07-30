import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AnimatedText } from '@/components/shared/AnimatedText'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { ParticleBackground } from '@/components/shared/ParticleBackground'
import { GradientMesh } from '@/components/shared/GradientMesh'
import { scrollToSection } from '@/lib/utils'

/** Illustration abstraite / 3D CSS pour le Hero */
function HeroVisual() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[420px] sm:h-[420px]">
      {/* Anneaux orbitaux */}
      <div className="absolute inset-6 rounded-full border border-accent/20 animate-spin-slow" />
      <div
        className="absolute inset-14 rounded-full border border-accent-violet/25"
        style={{ animation: 'spin-slow 18s linear infinite reverse' }}
      />
      <div className="absolute inset-24 rounded-full border border-accent-cyan/20 animate-spin-slow" />

      {/* Sphere centrale glass */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(248,250,252,0.35), rgba(59,130,246,0.4) 40%, rgba(139,92,246,0.55) 70%, rgba(5,8,22,0.9))',
          boxShadow:
            '0 0 60px rgba(59,130,246,0.45), inset 0 0 40px rgba(255,255,255,0.15)',
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cubes flottants */}
      {[
        { top: '12%', left: '8%', delay: 0, color: 'from-accent to-accent-violet' },
        { top: '18%', right: '6%', delay: 0.6, color: 'from-accent-cyan to-accent' },
        { bottom: '16%', left: '14%', delay: 1.2, color: 'from-accent-violet to-accent-cyan' },
        { bottom: '10%', right: '12%', delay: 0.3, color: 'from-accent to-accent-cyan' },
      ].map((box, i) => (
        <motion.div
          key={i}
          className={`absolute h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br ${box.color} opacity-80 shadow-glow backdrop-blur-sm`}
          style={{
            top: box.top,
            left: box.left,
            right: box.right,
            bottom: box.bottom,
          }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: box.delay }}
        />
      ))}

      {/* Glow arrière */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <GradientMesh />
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="mb-6 gap-2 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.availability}
            </Badge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-3 text-sm font-medium tracking-widest uppercase text-muted"
          >
            {personalInfo.name}
          </motion.p>

          <AnimatedText
            text={personalInfo.title}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
            delay={0.4}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-6 max-w-lg text-base sm:text-lg text-muted leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Button
                size="lg"
                variant="gradient"
                className="gap-2"
                data-cursor="projets"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
                <ArrowRight size={18} />
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                data-cursor="contact"
                onClick={() => scrollToSection('contact')}
              >
                <Sparkles size={16} />
                Me contacter
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-text transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Défiler vers À propos"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
