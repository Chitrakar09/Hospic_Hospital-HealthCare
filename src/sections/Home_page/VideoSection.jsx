import { HOME_ASSETS } from '../../data/configs/home.js'
import { Section } from '../../components/ui.jsx'

export default function VideoSection() {
  return (
    <Section id="video" top={false}>
      <video
        src={HOME_ASSETS.video}
        className="h-[280px] w-full rounded-[10px] bg-dark object-cover tablet:h-[480px] desktop:h-[700px] cursor-auto"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Hospital tour video"
        autoPlay
      />
    </Section>
  )
}
