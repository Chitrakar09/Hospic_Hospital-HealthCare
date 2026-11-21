import { useEffect, useRef, useState } from 'react'
import { ABOUT_IMG, ABOUT_PAGE } from '../../data/about.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        io.disconnect()
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, visible]
}

/** Tablet + desktop: auto-scrolling ticker (60px/s, pauses on hover). Phone: static 2-column grid. */
function Ticker({ images, alts }) {
  const size = 'h-[343px] w-[313px] shrink-0 rounded-[10px] desktop:h-[500px] desktop:w-[460px]'
  return (
    <div className="gallery-marquee hidden overflow-hidden tablet:block" role="group" aria-label="Photo gallery">
      <div className="gallery-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-5 pr-5" aria-hidden={copy === 1 ? 'true' : undefined}>
            {images.map((src, i) => (
              <Img key={src} src={src} alt={copy === 0 ? alts[i] : ''} className={size} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneGrid({ images, alts, visible }) {
  return (
    <div className="grid grid-cols-2 gap-4 tablet:hidden">
      {images.map((src, i) => (
        <div
          key={src}
          style={{ transitionDelay: `${i * 100}ms` }}
          className={`transition-all duration-700 ease-out ${
            i === images.length - 1 ? 'col-span-2' : ''
          } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <Img
            src={src}
            alt={alts[i]}
            className={`w-full rounded-md ${i === images.length - 1 ? 'h-[380px]' : 'h-[207px]'}`}
          />
        </div>
      ))}
    </div>
  )
}

export default function Gallery() {
  const { tag, title, alts } = ABOUT_PAGE.gallery
  const [headerRef, headerVisible] = useInView(0.2)
  const [galleryRef, galleryVisible] = useInView(0.15)

  return (
    <Section bg="light" innerClassName="flex flex-col gap-10 tablet:gap-[50px] desktop:gap-20">
      <div
        ref={headerRef}
        className={`max-w-[431px] transition-all duration-700 ease-out desktop:max-w-[542px] ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading tag={tag} title={title} />
      </div>

      <div
        ref={galleryRef}
        className={`transition-all duration-1000 delay-150 ease-out ${
          galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <Ticker images={ABOUT_IMG.gallery} alts={alts} />
        <PhoneGrid images={ABOUT_IMG.gallery} alts={alts} visible={galleryVisible} />
      </div>
    </Section>
  )
}