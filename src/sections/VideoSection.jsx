import { A } from '../data/assets.js'
import { Section } from '../components/ui.jsx'

export default function VideoSection() {
  return (
    <Section id="video" top={false}>
      <video
        src={A.video}
        className="h-[280px] w-full rounded-[10px] bg-dark object-cover tablet:h-[480px] desktop:h-[700px]"
        controls
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Hospital tour video"
      />
    </Section>
  )
}
