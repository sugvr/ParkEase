import Navbar from '@/Components/LandingPage/Navbar'
import Section from './Section'
import LandingPage from '../Components/LandingPage/LandingPage'
import Footer from '@/Components/LandingPage/Footer'
import Features from '@/Components/LandingPage/Features'
import About from '@/Components/LandingPage/About'
import Support from '@/Components/LandingPage/Support'


export default function Home() {
  return (
    <section>
    <Navbar />
    <Section id = 'main'/>
    <LandingPage />
    <Section id = 'aboutus'/>
    <About/>
    <Section id = 'features'/>
    <Features/>
    <Section id = 'support'/>
    <Support/>
    <Footer/>
  </section>
  )
}

