import { ABOUT_IMG, ABOUT_PAGE } from '../../data/about.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'

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

function PhoneGrid({ images, alts }) {
  return (
    <div className="grid grid-cols-2 gap-4 tablet:hidden">
      {images.map((src, i) => (
        <Img
          key={src}
          src={src}
          alt={alts[i]}
          className={`w-full rounded-md ${i === images.length - 1 ? 'col-span-2 h-[380px]' : 'h-[207px]'}`}
        />
      ))}
    </div>
  )
}

export default function Gallery() {
  const { tag, title, alts } = ABOUT_PAGE.gallery
  return (
    <Section bg="light" innerClassName="flex flex-col gap-10 tablet:gap-[50px] desktop:gap-20">
      <SectionHeading tag={tag} title={title} className="max-w-[431px] desktop:max-w-[542px]" />
      <Ticker images={ABOUT_IMG.gallery} alts={alts} />
      <PhoneGrid images={ABOUT_IMG.gallery} alts={alts} />
    </Section>
  )
}
