import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
}

/** Révélation lettre par lettre / mot par mot */
export function AnimatedText({
  text,
  className,
  as: Tag = 'h1',
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <Tag className={cn('flex flex-wrap gap-x-[0.3em] gap-y-1', className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.18em] -mb-[0.18em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
