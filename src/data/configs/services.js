import { img } from '../helpers.js'

// Services: copy + icon/photo pairs (SERVICES_ASSETS[i] belongs to SERVICES.items[i]; cycles).
export const SERVICES = {
  tag: 'Our services',
  title: 'Excellence in every medical service',
  cta: 'Book an appointment',
  items: [
    { title: 'Emergency care', text: 'Receive immediate medical attention 24/7 from our experienced emergency team.' },
    { title: 'General medicine', text: 'Comprehensive diagnosis, treatment and preventive care for common conditions.' },
    { title: "Women's health", text: 'Comprehensive gynecology, maternity, reproductive and preventive services.' },
    { title: 'Diagnostic imaging', text: 'Advanced imaging services, including X-rays, ultrasound and CT scans.' },
  ],
}

export const SERVICES_ASSETS = [
  { icon: img('r1ykfiFs3IAns6ZodbnLrD5AIsU.svg'), photo: img('CNG6lnq1LFggsbxiEuIVyHU5vY.png') },
  { icon: img('cCg8ka2CmyVyzXCHCzX5SFSPVG8.svg'), photo: img('tQNnStOBjDlhpxPSk2h1CHjMmc.png') },
  { icon: img('WPsWSkJ4LGYAG391ZyvIPgLcqJU.svg'), photo: img('0y4gf8gCYzCPKl3yY18cmKk3l6g.png') },
  { icon: img('r1ykfiFs3IAns6ZodbnLrD5AIsU.svg'), photo: img('CNG6lnq1LFggsbxiEuIVyHU5vY.png') },
]
