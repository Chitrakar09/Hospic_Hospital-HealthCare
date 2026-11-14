// All hospital copy lives here. Edit text without touching components.
export const BRAND = 'Rupandehi Model Hospital'

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#appointment' },
]

export const HERO = {
  title: 'Better care for a healthier life.',
  text: 'Modern, reliable care backed by experienced doctors and precision diagnostics.',
  // social: '10,000+ patients treated every year',
  // rating: '4.9 (500+ REVIEWS)',
  cta: 'Book an appointment',
  card: 'Book Appointment',
}

export const ABOUT = {
  tag: 'About us',
  text: 'We are committed to delivering exceptional medical care through skilled professionals, modern facilities and compassionate service for every patient.',
  cta: 'About us',
  stats: [
    { to: 200, suffix: '+', label: 'Experienced doctors' },
    { to: 98, suffix: '%', label: 'Patient satisfaction' },
    { to: '24/7', suffix: '', label: 'Emergency care' },
  ],
}

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

export const WHY = {
  tag: 'Why choose us',
  title: 'Care built around you and your family',
  items: [
    { icon: 'users', title: 'Experienced specialists', text: 'Receive expert care from highly qualified doctors and healthcare professionals.' },
    { icon: 'cpu', title: 'Advanced technology', text: 'Our hospital features modern diagnostic equipment and innovative treatments.' },
    { icon: 'shield', title: 'Trusted healthcare', text: 'Thousands of patients rely on us for quality medical services every year.' },
    { icon: 'clock', title: '24/7 emergency care', text: 'Emergency medical services are available around the clock with rapid response.' },
  ],
}

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

export const APPOINTMENT = {
  title: 'Book your hospital appointment today and skip the waiting line.',
  fields: { name: 'Full Name *', phone: 'Phone *', dept: 'Department *' },
  options: ['Cardiology', 'Neurology', 'Radiology', 'Orthopedics', 'Pediatrics', 'Emergency'],
  submit: 'Book now',
  thanks: 'Thank you! Our team will call you shortly to confirm your appointment.',
}

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

export const DOCTORS = {
  tag: 'Our doctors',
  title: 'Meet our experienced doctors for care',
  cta: 'Book an appointment',
  address: '2450 Market Street, New York',
  items: [
    { name: 'David Anderson', role: 'Chief Medical Officer', bio: 'Board-certified cardiologist with over 15 years of experience.', phone: '+1 (212) 555-0189' },
    { name: 'Charles Morgan', role: 'Pediatric Specialist', bio: 'Board-certified pediatrician with over 10 years of experience.', phone: '+1 (212) 444-0189' },
    { name: 'Mark Sullivan', role: 'Orthopedic Surgeon', bio: 'Board-certified orthopedic surgeon with over 16 years of experience.', phone: '+1 (212) 222-0189' },
    { name: 'Steven Clark', role: 'Neurologist', bio: 'Board-certified neurologist with over 12 years of experience.', phone: '+1 (212) 123-0189' },
    { name: 'Kevin Turner', role: 'Emergency Physician', bio: 'Board-certified emergency physician with over 12 years of experience.', phone: '+1 (212) 505-7643' },
    { name: 'Andrew Hayes', role: 'Radiologist', bio: 'Board-certified radiologist with over 14 years of experience.', phone: '+1 (212) 999-0189' },
  ],
}

export const FAQ = {
  tag: 'Faq’s',
  title: 'Frequently asked questions',
  help: ['Need help?', 'Get in touch with us'],
  cta: 'Get in touch',
  items: [
    { q: 'Do I need an appointment?', a: 'Appointments are recommended for consultations and tests. Emergency care is open 24/7 with no appointment needed.' },
    { q: 'What are your visiting hours?', a: 'General visiting hours are 10:00 AM to 8:00 PM daily. ICU and maternity wards have separate hours.' },
    { q: 'Which insurance plans do you accept?', a: 'We work with most major insurance providers. Contact our billing desk to confirm your plan before your visit.' },
    { q: 'How do I get my test results?', a: 'Most results are ready within 24 hours and are shared securely by email or collected at the reports desk.' },
    { q: 'Do you offer telehealth consultations?', a: 'Yes. Many follow-up and routine consultations are available by secure video call with our doctors.' },
  ],
}

export const BLOG = {
  tag: 'Blog & news',
  title: 'Latest health insights and wellness tips',
  items: [
    { title: 'Why an annual health checkup is one of your best investments', date: 'Oct 11, 2026', category: 'Health Tips' },
    { title: 'Health screenings every woman should schedule this year', date: 'Oct 16, 2026', category: "Women's Health" },
    { title: 'Why routine medical exams matter even when you feel healthy', date: 'Sep 12, 2026', category: 'Prevention' },
    { title: 'Early signs of high blood pressure and diabetes to watch for', date: 'Nov 2, 2026', category: 'Chronic Care' },
  ],
}

export const CTA = {
  tag: 'Our doctors',
  title: 'Meet our experienced doctors for care',
  cta: 'Book an appointment',
}

export const FOOTER = {
  blurb: 'Quality hospital care with experienced doctors, modern technology and a team that puts patients first.',
  hours: ['Sunday - Friday : OPD Open 24 Hours', 'Saturday : OPD Closed (Doctors’ Holiday)', 'Emergency : Open 24/7'],
  contact: ['+977 9857076845', 'hospital@rupandehimodalhospital.com', 'Belbas, Shanti Chowk, Butwal-13'],
  copyright: '© 2026 Rupandehi Model Hospital. Designed & developed by Dualis.',
}
