// Content + images for the About page. Images come from the Framer template CDN (swap freely).
const img = (id) => `https://framerusercontent.com/images/${id}`
import profile from "../assets/images/about.jpg";

export const ABOUT_IMG = {
  hero: profile,
  team: img('uP3NGPgglkJjd1KZB48FChkZEA.png'),
  surgeon: img('WfU1qcSsij9N7jDvQEfLBJEcu5k.png'),
  gallery: [
    img('8EYHHFarJi9XLLI1mbtF6eQsyk.png'),
    img('bxvYpM5BfTpElfU6sn2YrtrkA.png'),
    img('TuRTRErosfCmVcISFRyWCJYcqE.png'),
    img('F1UBpdHto9OL45zC00L0hJOVb8.png'),
    img('YHVuTJIAPLdQw5odoJTPFB6umgo.png'),
  ],
}

export const ABOUT_PAGE = {
  documentTitle: 'About us – Hospic',
  hero: {
    title: 'About us',
    text: 'We are committed to delivering exceptional healthcare through experienced professionals, modern facilities, and compassionate care for every patient.',
  },
  intro: {
    tag: 'About us',
    title: 'Excellence in every patient journey',
    text: 'At Rupandehi Model Hospital, we are dedicated to delivering exceptional medical care with compassion, integrity, and excellence.',
    cards: [
      { title: 'Our mission', text: 'To provide compassionate, high quality healthcare through skilled professionals and modern technology.' },
      { title: 'Our vision', text: 'To become a leading healthcare provider recognized for clinical excellence and patient trust.' },
    ],
    stats: [
      { to: 20, suffix: '+', label: 'Years of excellence' },
      { to: 10, suffix: '+', label: 'Expert doctors' },
      { to: 15, suffix: 'K+', label: 'Patients treated' },
      { to: 98, suffix: '%', label: 'Patient satisfaction' },
    ],
  },
  how: {
    tag: 'How it works',
    title: 'Simple steps to better healthcare outcomes',
    steps: [
      { n: '01', title: 'Book an appointment', text: "Schedule your visit online or by phone at a time that's convenient for you." },
      { n: '02', title: 'Consultation & diagnosis', text: 'Meet with our experienced specialists for a thorough evaluation and personalized diagnosis.' },
      { n: '03', title: 'Treatment plan', text: 'Receive a customized treatment plan tailored to your health condition and medical needs.' },
      { n: '04', title: 'Recovery & follow-up', text: 'Continue your recovery with ongoing support, follow-up visits, and expert medical guidance.' },
    ],
  },
  gallery: {
    tag: 'Our gallery',
    title: 'Take a closer look at our advanced healthcare',
    alts: [
      'Doctor reviewing a patient’s heart monitor readout',
      'Physician examining a patient’s arm',
      'Doctors consulting with a patient using a tablet',
      'Nurse assisting a patient during physiotherapy',
      'Nurse checking a patient’s blood pressure',
    ],
  },
}
