import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Why from './sections/Why.jsx'
import Departments from './sections/Departments.jsx'
import Appointment from './sections/Appointment.jsx'
import Pricing from './sections/Pricing.jsx'
import VideoSection from './sections/VideoSection.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Doctors from './sections/Doctors.jsx'
import FAQ from './sections/FAQ.jsx'
import Blog from './sections/Blog.jsx'
import CTA from './sections/CTA.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Departments />
        <Appointment />
        <Pricing />
        <VideoSection />
        <Testimonials />
        <Doctors />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
