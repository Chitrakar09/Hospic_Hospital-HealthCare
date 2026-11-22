import { img } from '../helpers.js'

// Departments: copy + photos/icons (DEPARTMENTS_ASSETS[i] belongs to DEPARTMENTS.items[i]; cycles).
// Also used by the header mega menu (icons by position).
export const DEPARTMENTS = {
  tag: 'Departments',
  title: 'Specialized departments for complete healthcare',
  cta: 'More departments',
  items: [
    { title: 'Cardiology', text: 'Expert diagnosis and treatment for heart and cardiovascular conditions.' },
    { title: 'Neurology', text: 'Specialist care for the brain, spine and nervous system disorders.' },
    { title: 'Radiology', text: 'Advanced diagnostic imaging services, including X-ray, MRI and CT.' },
    { title: 'Orthopedics', text: 'Expert care for bones, joints, muscles and sports injuries.' },
  ],
  detailsLabel: 'View details',
}

export const DEPARTMENTS_ASSETS = [
  { photo: img('GJXc6PWVIBpI46plv9NqkhY85o.webp'), icon: img('svsUpJHm8gfEoLamiTZu6eTFM.svg') },
  { photo: img('RaemODqQUroWefREGEk6z3ovE.png'), icon: img('mt386cMNhOBIOWSPdL8IvFj30.svg') },
  { photo: img('FXmDlmIzniJqvd16bLdsRyEM.png'), icon: img('1ixwYy4Zv4iD8KdWwbHYBiQkJ6w.svg') },
  { photo: img('OtSVhACmdSX1eVTW7MhV5o0qZV4.jpg'), icon: img('rcNskhDSmwtlDaVIUetrVSymJSM.svg') },
  { photo: img('GJXc6PWVIBpI46plv9NqkhY85o.webp'), icon: img('svsUpJHm8gfEoLamiTZu6eTFM.svg') },
  { photo: img('RaemODqQUroWefREGEk6z3ovE.png'), icon: img('mt386cMNhOBIOWSPdL8IvFj30.svg') },
  { photo: img('FXmDlmIzniJqvd16bLdsRyEM.png'), icon: img('1ixwYy4Zv4iD8KdWwbHYBiQkJ6w.svg') },
  { photo: img('OtSVhACmdSX1eVTW7MhV5o0qZV4.jpg'), icon: img('rcNskhDSmwtlDaVIUetrVSymJSM.svg') },
  { photo: img('GJXc6PWVIBpI46plv9NqkhY85o.webp'), icon: img('svsUpJHm8gfEoLamiTZu6eTFM.svg') },
  { photo: img('RaemODqQUroWefREGEk6z3ovE.png'), icon: img('mt386cMNhOBIOWSPdL8IvFj30.svg') },
  { photo: img('FXmDlmIzniJqvd16bLdsRyEM.png'), icon: img('1ixwYy4Zv4iD8KdWwbHYBiQkJ6w.svg') },
  { photo: img('OtSVhACmdSX1eVTW7MhV5o0qZV4.jpg'), icon: img('rcNskhDSmwtlDaVIUetrVSymJSM.svg') },
]
