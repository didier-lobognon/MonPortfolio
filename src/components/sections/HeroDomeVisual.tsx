import { motion } from 'framer-motion'
import DomeGallery from '@/components/shared/DomeGallery'
import { HERO_TECH_LOGOS } from '@/data/heroTechLogos'

const ease = [0.22, 1, 0.36, 1] as const

/** Dôme logos tech — panneau droit Hero en mode light (globe nu, sans cadre) */
export function HeroDomeVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.7, ease }}
      className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
    >
      <div className="relative h-[min(48vh,380px)] w-full overflow-visible sm:h-[min(52vh,440px)] lg:h-[460px]">
        <DomeGallery
          images={[...HERO_TECH_LOGOS]}
          fit={0.72}
          minRadius={360}
          maxRadius={520}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
          logosMode
          frameless
          autoRotate
          autoRotateSpeed={5.5}
          overlayBlurColor="#ffffff"
          imageBorderRadius="0px"
          openedImageBorderRadius="14px"
          openedImageWidth="160px"
          openedImageHeight="160px"
          padFactor={0.08}
        />
      </div>
    </motion.div>
  )
}
