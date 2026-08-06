import { useId } from 'react'
import { motion } from 'framer-motion'
import { SkillIcon } from '@/components/shared/SkillIcon'
import { cn } from '@/lib/utils'

type SkillRingProps = {
  name: string
  icon: string
  level: number
  color: string
  active?: boolean
  size?: number
  stroke?: number
  className?: string
  delay?: number
}

export function SkillRing({
  name,
  icon,
  level,
  color,
  active = true,
  size = 112,
  stroke = 3.5,
  className,
  delay = 0,
}: SkillRingProps) {
  const uid = useId()
  const gradientId = `skill-ring-${uid.replace(/:/g, '')}`
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, level))
  const offset = circumference * (1 - clamped / 100)

  return (
    <div className={cn('group flex flex-col items-center gap-3', className)}>
      <div
        className="relative"
        style={{ width: size, height: size }}
        aria-label={`${name} — ${clamped}%`}
      >
        {/* Soft ambient glow */}
        <span
          className="pointer-events-none absolute inset-[-12%] rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: `radial-gradient(circle, ${color}55 0%, transparent 68%)` }}
          aria-hidden
        />

        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="relative -rotate-90"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.55" />
              <stop offset="55%" stopColor={color} />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />

          {/* Progress */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: active ? offset : circumference }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay }}
            style={{
              filter: `drop-shadow(0 0 6px ${color}88)`,
            }}
          />
        </svg>

        {/* Icon plate */}
        <div
          className="absolute inset-[18%] flex items-center justify-center rounded-full border border-white/[0.08] bg-[#0a1020]/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.04]"
          style={{ color }}
        >
          <SkillIcon name={icon} className="h-[38%] w-[38%]" />
        </div>

        {/* Percentage badge */}
        <span
          className="absolute -bottom-0.5 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-[#0b1220]/95 px-2 py-0.5 font-mono text-[10px] tabular-nums text-text/90 shadow-lg sm:text-[11px]"
          style={{ boxShadow: `0 0 16px ${color}22` }}
        >
          {clamped}%
        </span>
      </div>

      <p className="max-w-[7.5rem] text-center font-display text-sm font-medium tracking-tight text-text/90 sm:text-[15px]">
        {name}
      </p>
    </div>
  )
}
