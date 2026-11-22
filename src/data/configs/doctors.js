import { img } from '../helpers.js'

// Doctors: profiles + photos (DOCTORS_ASSETS[i] is the photo for DOCTORS.items[i]; cycles if there are more doctors than photos).
export const DOCTORS = {
  tag: 'Our doctors',
  title: 'Meet our experienced doctors for care',
  cta: 'Book an appointment',
  address: '2450 Market Street, New York',

  items: [
    {
      name: 'David Anderson',
      department: 'Cardiology',
      role: 'Chief Medical Officer',
      bio: 'Board-certified cardiologist with over 15 years of experience.',
      phone: '+1 (212) 555-0189',
    },
    {
      name: 'Charles Morgan',
      department: 'Pediatrics',
      role: 'Pediatric Specialist',
      bio: 'Board-certified pediatrician with over 10 years of experience.',
      phone: '+1 (212) 444-0189',
    },
    {
      name: 'Mark Sullivan',
      department: 'Orthopedics',
      role: 'Orthopedic Surgeon',
      bio: 'Board-certified orthopedic surgeon with over 16 years of experience.',
      phone: '+1 (212) 222-0189',
    },
    {
      name: 'Steven Clark',
      department: 'Neurology',
      role: 'Neurologist',
      bio: 'Board-certified neurologist with over 12 years of experience.',
      phone: '+1 (212) 123-0189',
    },
    {
      name: 'Kevin Turner',
      department: 'Emergency Medicine',
      role: 'Emergency Physician',
      bio: 'Board-certified emergency physician with over 12 years of experience.',
      phone: '+1 (212) 505-7643',
    },
    {
      name: 'Andrew Hayes',
      department: 'Radiology',
      role: 'Radiologist',
      bio: 'Board-certified radiologist with over 14 years of experience.',
      phone: '+1 (212) 999-0189',
    },
  ],
}

export const DOCTORS_ASSETS = [
  img('eJFLjOMe0luFUDJeAJZUELWeE.png'),
  img('7Rmjw7S171ExvKGI9Caqk0NnP8.png'),
  img('myHoESk0UrlrBn6Ft8Kfidb0PF8.png'),
  img('ro85mwS1QZbHRQdXwQySXUy0qWY.png'),
  img('zc1JXaEGBTHy0jWNFScwd8VAjA.png'),
  img('H1orLTIE2CU07mtNX8UwZ8cdtVw.png'),
]
