import { TESTIMONIALS, TESTIMONIALS_ASSETS } from '../../data/configs/testimonials.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'
import { Play } from '../../components/Icons.jsx'

function TextCard({ text, name, place, avatar }) {
  return (
    <figure className="flex min-h-[398px] flex-col justify-between gap-10 bg-light-bg p-[30px]">
      <blockquote className="text-dark">{text}</blockquote>
      <figcaption className="flex items-center gap-[10px]">
        <Img src={avatar} alt="" className="h-[50px] w-[50px] rounded-full" />
        <div className="flex flex-col gap-1">
          <span className="t-highlight text-dark">{name}</span>
          <span>{place}</span>
        </div>
      </figcaption>
    </figure>
  )
}

function VideoCard({ text, name }) {
  return (
    <figure className="relative flex min-h-[398px] flex-col justify-between gap-10 overflow-hidden bg-dark p-[30px]">
      <button type="button" aria-label={`Play: ${text}`} className="grid h-[72px] w-[72px] place-items-center bg-primary text-white transition-opacity hover:opacity-90">
        <Play width={28} height={28} />
      </button>
      <figcaption className="flex flex-col gap-2">
        <span className="t-highlight text-body-dark">{name}</span>
        <span className="t-h5 text-white">{text}</span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  let textIndex = 0
  return (
    <Section id="testimonials" top={false} innerClassName="flex flex-col gap-[50px] desktop:gap-20">
      <SectionHeading tag={TESTIMONIALS.tag} title={TESTIMONIALS.title} className="max-w-[446px]" />
      <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
        {TESTIMONIALS.items.map((t) =>
          t.type === 'video' ? (
            <VideoCard key={t.text} {...t} />
          ) : (
            <TextCard key={t.name} {...t} avatar={TESTIMONIALS_ASSETS[textIndex++ % TESTIMONIALS_ASSETS.length]} />
          )
        )}
      </div>
    </Section>
  )
}
