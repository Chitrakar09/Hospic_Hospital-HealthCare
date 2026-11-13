import { useState } from 'react'
import { FAQ as C } from '../data/content.js'
import { Section, SectionHeading, PrimaryButton } from '../components/ui.jsx'
import { Plus, Minus } from '../components/Icons.jsx'

function Item({ q, a, open, onToggle, id }) {
  return (
    <div className="bg-white p-5">
      <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={id} className="flex w-full items-start gap-4 text-left">
        <span className="t-h6 flex-1 pt-[5px] text-dark">{q}</span>
        <span className="grid shrink-0 place-items-center bg-dark p-[5px] text-white">
          {open ? <Minus width={24} height={24} /> : <Plus width={24} height={24} />}
        </span>
      </button>
      <div id={id} role="region" className={`grid transition-all duration-300 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <p className="overflow-hidden pr-10">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <Section bg="light" innerClassName="flex flex-col justify-between gap-[50px] desktop:flex-row desktop:gap-20">
      <div className="flex max-w-[500px] flex-col items-start gap-10 desktop:gap-20 desktop:pr-10">
        <SectionHeading tag={C.tag} title={C.title} />
        <div className="flex flex-col items-start gap-[30px]">
          <p className="t-h5 text-dark">{C.help[0]}<br />{C.help[1]}</p>
          <PrimaryButton>{C.cta}</PrimaryButton>
        </div>
      </div>
      <div className="flex w-full max-w-[600px] flex-col gap-5">
        {C.items.map((it, i) => (
          <Item key={it.q} id={`faq-${i}`} {...it} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
        ))}
      </div>
    </Section>
  )
}
