import { useEffect } from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import FeaturesSection from './sections/FeaturesSection'
import HeroSection from './sections/HeroSection'
import TestimonialsSection from './sections/TestimonialsSection'

const App = () => {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar/>
      <main> {/* main is a html semantic tag */}
        <HeroSection/>
        <FeaturesSection/>
        <TestimonialsSection/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
