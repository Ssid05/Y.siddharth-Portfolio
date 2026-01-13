import { ThemeProvider } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { ScrollProgress } from './components/ScrollProgress'
import { PageLoader } from './components/PageLoader'
import { CustomCursor } from './components/CustomCursor'
import { Spotlight } from './components/Spotlight'
import { FilmGrain } from './components/FilmGrain'
import { FloatingActionButton } from './components/FloatingActionButton'
import { AIAgent } from './components/AIAgent'
import { ParticleField } from './components/ParticleField'

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN APP COMPONENT - YEAR 3000 FUTURISTIC EXPERIENCE
// ═══════════════════════════════════════════════════════════════════════════════
// Holographic interfaces, 3D depth, advanced AI aesthetics

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-cosmic-void text-white overflow-x-hidden cursor-none">
        {/* Year 3000 futuristic layers */}
        <PageLoader />
        <ParticleField />
        <ScrollProgress />
        <CustomCursor />
        <Spotlight />
        <FilmGrain />
        <FloatingActionButton />
        <AIAgent />
        
        {/* Fixed navbar - always accessible */}
        <Navbar />

        {/* Main content - cosmic journey through sections */}
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer - the gravitational anchor */}
        <Footer />

        {/* Global ambient particles - subtle cosmic dust */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-quantum-cyan/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-quantum-violet/5 via-transparent to-transparent" />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
