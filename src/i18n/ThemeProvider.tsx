import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  isDark: boolean
  setTheme: (theme: Theme) => void
  toggleTheme: (origin?: { x: number; y: number }) => void
}

const STORAGE_KEY = 'portfolio-theme'
const ThemeContext = createContext<ThemeContextValue | null>(null)

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyThemeClass(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  root.style.colorScheme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#050816' : '#ffffff')
}

function runCircularViewTransition(origin: { x: number; y: number }, update: () => void) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { ready: Promise<void> }
  }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduce || typeof doc.startViewTransition !== 'function') {
    update()
    return
  }

  const transition = doc.startViewTransition(() => {
    flushSync(update)
  })

  transition.ready
    .then(() => {
      const { x, y } = origin
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      )

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 620,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
    .catch(() => {
      /* transition aborted */
    })
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const initial = getPreferredTheme()
    if (typeof document !== 'undefined') applyThemeClass(initial)
    return initial
  })

  useEffect(() => {
    applyThemeClass(theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
    const apply = () => {
      setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
    }

    if (!origin) {
      apply()
      return
    }

    runCircularViewTransition(origin, apply)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
