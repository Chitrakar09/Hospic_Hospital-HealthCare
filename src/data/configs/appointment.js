import { img } from '../helpers.js'

// Appointment form copy + background image.
export const APPOINTMENT = {
  title: 'Book your hospital appointment today and skip the waiting line.',
  fields: { name: 'Full Name *', phone: 'Phone *', dept: 'Department *' },
  options: ['Cardiology', 'Neurology', 'Radiology', 'Orthopedics', 'Pediatrics', 'Emergency'],
  submit: 'Book now',
  thanks: 'Thank you! Our team will call you shortly to confirm your appointment.',
}

export const APPOINTMENT_ASSETS = {
  appointmentBg: img('hSG9Ovx8tvfRQmlD356HvTgP80E.png'),
}
