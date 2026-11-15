// Content + images for the Contact page. Image URLs come from the Framer template CDN (swap freely).
const img = (id) => `https://framerusercontent.com/images/${id}`

export const CONTACT_IMG = {
  hero: img('cSrL2mUJw2oX462vRVEf8Rm6Md8.png'),
  panelBg: img('ETKoe66BeIkWzq6ZgMWHSfxUkE.png'),
}

export const CONTACT_PAGE = {
  documentTitle: 'Contact us – Hospic',
  hero: {
    title: 'Contact us',
    text: 'Have a question or need to book an appointment? Our friendly team is here to help — reach out anytime.',
  },
  cards: [
    {
      icon: 'phone',
      title: 'Phone',
      lines: [
        { text: '+1 (212) 555-0189', href: 'tel:+12125550189' },
        { text: '+1 (212) 555-0100', href: 'tel:+12125550100' },
      ],
    },
    {
      icon: 'mail',
      title: 'Email',
      lines: [
        { text: 'info@hospic.com', href: 'mailto:info@hospic.com' },
        { text: 'emergency@hospic.com', href: 'mailto:emergency@hospic.com' },
      ],
    },
    {
      icon: 'pin',
      title: 'Hospital Address',
      lines: [
        {
          text: '123 Healthcare Avenue New York, NY 10001 United States',
          href: 'https://www.google.com/maps/search/?api=1&query=123+Healthcare+Avenue+New+York+NY+10001',
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
