import { useCallback, useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Timeline } from '@/components/sections/Timeline'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'

/**
 * Portfolio Didier Lobognon — composition principale.
 * Chaque section raconte une étape de l'histoire professionnelle.
 */
export default function App() {
  const [ready, setReady] = useState(false)
  const onLoadComplete = useCallback(() => setReady(true), [])

  return (
    <>
      <LoadingScreen onComplete={onLoadComplete} />

      {ready && (
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          <main id="main" className="relative w-full bg-bg">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Services />
            <Stats />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
          <WhatsAppFloat />
        </SmoothScroll>
      )}
    </>
  )
}
