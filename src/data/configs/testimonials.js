import { img } from '../helpers.js'

// Testimonials: quotes + avatars (TESTIMONIALS_ASSETS are used by the text cards, in order, cycling).
export const TESTIMONIALS = {
  tag: 'Testimonials',
  title: 'Trusted healthcare, trusted voices',
  items: [
    { type: 'text', text: '“ The nurses were compassionate, attentive and always available whenever I needed assistance. The hospital’s modern facilities and efficient service made my stay easy. ”', name: 'Brian Foster', place: 'San Francisco, CA' },
    { type: 'text', text: '“ From the front desk to the surgeon, everyone explained each step clearly. I never felt rushed, and my recovery was smoother than I expected. ”', name: 'Melissa Grant', place: 'Austin, TX' },
    { type: 'video', text: 'Watch how the emergency team cared for a family at 2 a.m.', name: 'Patient story' },
    { type: 'video', text: 'A maternity journey with the women’s health team', name: 'Patient story' },
    { type: 'text', text: '“ Booking was simple and my results were ready the same day. The doctor took time to answer all of my questions. ”', name: 'Daniel Reyes', place: 'Chicago, IL' },
    { type: 'text', text: '“ Clean, calm and very well organised. I would recommend the pediatric ward to any parent. ”', name: 'Sophie Tran', place: 'Seattle, WA' },
  ],
}

export const TESTIMONIALS_ASSETS = [
  img('ejskfuedx8uE91OwjUuvRQAE.png'),
  img('PvwDWoEmnC9NFAPvc1TqEEMjOU.png'),
  img('VJB2EQWNimaemPwFpz01vRZjfN4.png'),
  img('cQUbpljtisVDA0V7ml8LS7HvVeA.png'),
]
