import { useEffect } from 'react'
import { ABOUT_PAGE } from '../data/constants/about.js'
import {AboutHero, AboutIntro,HowItWorks,Gallery,} from '../sections/About/index.js'
import {Doctors,CTA} from '../sections/Home_page/index.js'

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
      <Doctors initialCount={3}/>
      {/* <CTA /> */}
    </>
  )
}
