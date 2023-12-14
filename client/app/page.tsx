import Navbar from '@/Components/Navbar'
import Section from './Section'
import LandingPage from '../Components/LandingPage'
import Footer from '@/Components/Footer'
import Features from '@/Components/Features'
import About from '@/Components/About'
import Support from '@/Components/Support'


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

