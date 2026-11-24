// Content + images for the Contact page. Image URLs come from the Framer template CDN (swap freely).
import { img } from '../helpers.js'
import profile from "../../assets/images/components/contact.jpg";

export const CONTACT_IMG = {
  hero: profile,
  panelBg: img('ETKoe66BeIkWzq6ZgMWHSfxUkE.png'),
}

export const CONTACT_PAGE = {
  documentTitle: 'Contact us – Rupandehi Model Hospital',
  hero: {
    title: 'Contact us',
    text: 'Have a question or need to book an appointment? Our friendly team is here to help — reach out anytime.',
  },
  cards: [
    {
      icon: 'phone',
      title: 'Phone',
      lines: [
        { text: '071-592174', href: 'tel:+el:+97771592174' },
        { text: '+977 9857076845', href: 'tel:+9779857076845' },
      ],
    },
    {
      icon: 'mail',
      title: 'Socials',
      lines: [
        { text: 'hospital@rupandehimodalhospital.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hospital@rupandehimodalhospital.com'},
        { text: 'Rupandehi Modal Hospital : Facebook', href: 'https://www.facebook.com/profile.php?id=61579473053361'}
      ],
    },
    {
      icon: 'pin',
      title: 'Hospital Address',
      lines: [
        {
          text: 'Belbas, Shanti Chowk, Butwal',
          href : 'https://www.google.com/maps/search/?api=1&query=P739%2B52M%2C+Lumbini+Province+32900'

        },
      ],
    },
  ],
  form: {
    tag: 'Contact us',
    title: 'Reach out and start your health journey.',
    departments: ['Cardiology', 'Neurology', 'Radiology', 'Orthopedics', 'Pediatrics', 'Emergency'],
    submit: 'Send Message',
    success: 'Thank you! Your message has been sent. Our team will get back to you shortly.',
  },
}
