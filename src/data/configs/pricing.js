// Health packages / pricing.
export const PRICING = {
  tag: 'Health packages',
  title: 'Affordable health packages for every need',
  cta: 'Book this package',
  plans: [
    {
      name: 'Basic health check', price: '$99', note: 'Ideal for routine wellness',
      text: 'Perfect for routine wellness, this package includes essential health screenings.',
      items: ['General physician consultation', 'Blood pressure and BMI check', 'Complete blood count', 'Blood sugar test'],
    },
    {
      name: 'Standard health check', price: '$199', note: 'Most popular', featured: true,
      text: 'A comprehensive package with advanced diagnostic tests and preventive screenings.',
      items: ['Everything in Basic', 'ECG and chest X-ray', 'Lipid and liver profile', 'Specialist consultation'],
    },
    {
      name: 'Premium health check', price: '$349', note: 'Complete full-body care',
      text: 'Our most complete package featuring full-body evaluations and specialist reviews.',
      items: ['Everything in Standard', 'Ultrasound and CT screening', 'Cardiac stress test', 'Personalised health report'],
    },
  ],
}
