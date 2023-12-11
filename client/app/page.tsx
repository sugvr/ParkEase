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
      <LandingPage />
      <About/>
      <Features/>
      <Support/>
      <Footer/>
    </section>
  )
}

