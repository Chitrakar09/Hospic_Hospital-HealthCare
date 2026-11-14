import { useEffect } from 'react'
import { ABOUT_PAGE } from '../data/about.js'
import {AboutHero, AboutIntro,HowItWorks,Gallery,} from '../sections/About/index.js'
import {Doctors,CTA} from '../sections/HomePage/index.js'

export default function AboutPage() {
  useEffect(() => {
    const previous = document.title
    document.title = ABOUT_PAGE.documentTitle
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <HowItWorks />
      <Gallery />
      <Doctors />
      <CTA />
    </>
  )
}
