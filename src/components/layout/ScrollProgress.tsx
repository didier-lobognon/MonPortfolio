import { motion, useScroll, useSpring } from 'framer-motion'

/** Barre de progression de scroll en haut de page */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-violet to-accent-cyan"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
