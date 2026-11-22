
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { A } from '../../data/assets.js'
import { APPOINTMENT, DOCTORS } from '../../data/content.js'
import { Section } from '../../components/ui.jsx'
import {
  FORM_GRID,
  Field,
  TextInput,
  SelectInput,
  TextArea,
  SubmitButton,
} from '../../components/FormFields.jsx'

const SUBMIT_LABEL = 'Book Appointment'

const EMAIL_TO = 'hospital@rupandehimodalhospital.com'

// Returns today's date in local YYYY-MM-DD format.
function getTodayDate() {
  const today = new Date()
  const offset = today.getTimezoneOffset() * 60000

  return new Date(today.getTime() - offset)
    .toISOString()
    .split('T')[0]
}

// Normalizes and validates Nepal mobile numbers.
function validateNepalPhone(value) {
  const phone = value.replace(/[\s-]/g, '').replace(/^\+/, '')

  // Accepts 977XXXXXXXXXX or XXXXXXXXXX.
  const normalized = phone.startsWith('977')
    ? phone.slice(3)
    : phone

  return /^9\d{9}$/.test(normalized)
    || 'Enter a valid Nepal mobile number (e.g. 98XXXXXXXX).'
}

function validateAppointmentDate(value) {
  return value >= getTodayDate()
    || 'Appointment date cannot be in the past.'
}

export default function Appointment() {
  const submittedRef = useRef(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      doctor: '',
      message: '',
      website: '', // Honeypot field
    },
  })

  // Watch the selected department.
  const selectedDepartment = watch('department')

  // Only show doctors belonging to the selected department.
  const availableDoctors = DOCTORS.items.filter(
    doctor => doctor.department === selectedDepartment
  )

  // Reset doctor whenever the department changes.
  useEffect(() => {
    setValue('doctor', '')
    clearErrors('doctor')
  }, [selectedDepartment, setValue, clearErrors])

  // Reset submission lock whenever the user edits a field
useEffect(() => {
  const subscription = watch(() => {
    submittedRef.current = false
  })

  return () => subscription.unsubscribe()
}, [watch])

  // Form submission.
  async function handleAppointmentSubmit(data) {
    // Basic honeypot spam protection.
    if (data.website) return

    // Prevent repeated submissions.
    if (submittedRef.current) return

    // Additional check to ensure the doctor belongs to the department.
    const validDoctor = DOCTORS.items.some(
      doctor =>
        doctor.name === data.doctor &&
        doctor.department === data.department
    )

    if (!validDoctor) return

    submittedRef.current = true

    const {
      name,
      email,
      phone,
      department,
      date,
      doctor,
      message,
    } = data

    const subject = `New Appointment Request - ${name}`

    const body = `
New Online Appointment Request

Patient Details
----------------

Name: ${name}
Email: ${email}
Phone: ${phone}

Appointment Details
-------------------

Department: ${department}
Doctor: ${doctor}
Preferred Date: ${date}

Message:
${message}


Sent from Hospital Website
`

    const mail = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TO}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(mail, '_blank', 'noopener,noreferrer')
  }

  return (
    <Section id="appointment" top={false}>
      <div className="relative flex flex-col gap-10 overflow-hidden bg-dark px-5 py-10 tablet:gap-[52px] tablet:px-[68px] rounded-2xl">

        <img
          src={A.appointmentBg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <h2
          id="appointment-title"
          className="t-h3 relative max-w-[760px] text-white"
        >
          {APPOINTMENT.title}
        </h2>

        <form
          onSubmit={handleSubmit(handleAppointmentSubmit)}
          noValidate
          aria-labelledby="appointment-title"
          className={`${FORM_GRID} relative`}
        >

          {/* Honeypot: Hidden from real users, useful against simple bots. */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="appointment-website">
              Leave this field empty
            </label>

            <input
              id="appointment-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('website')}
            />
          </div>

          {/* Full Name */}
          <Field tone="dark" label="Full Name *" id="appointment-name">
            <TextInput
              tone="dark"
              id="appointment-name"
              placeholder="Enter Your Full Name ..."
              autoComplete="name"
              {...register('name', {
                required: 'Full name is required.',
                minLength: {
                  value: 2,
                  message: 'Name must contain at least 2 characters.',
                },
                maxLength: {
                  value: 80,
                  message: 'Name cannot exceed 80 characters.',
                },
                validate: value =>
                  /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u.test(value.trim())
                  || 'Enter a valid name.',
              })}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                {errors.name.message}
              </p>
            )}
          </Field>

          {/* Email */}
          <Field tone="dark" label="Email Address *" id="appointment-email">
            <TextInput
              tone="dark"
              id="appointment-email"
              type="email"
              placeholder="Enter Your Email ..."
              autoComplete="email"
              {...register('email', {
                required: 'Email address is required.',
                maxLength: {
                  value: 254,
                  message: 'Email address is too long.',
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/,
                  message: 'Enter a valid email address.',
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </Field>

          {/* Phone */}
          <Field tone="dark" label="Phone Number *" id="appointment-phone">
            <TextInput
              tone="dark"
              id="appointment-phone"
              type="tel"
              placeholder="98XXXXXXXX or +977 98XXXXXXXX"
              autoComplete="tel"
              {...register('phone', {
                required: 'Phone number is required.',
                validate: validateNepalPhone,
              })}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone.message}
              </p>
            )}
          </Field>

          {/* Department */}
          <Field tone="dark" label="Department *" id="appointment-department">
            <SelectInput
              tone="dark"
              id="appointment-department"
              options={APPOINTMENT.options}
              {...register('department', {
                required: 'Please select a department.',
              })}
            />

            {errors.department && (
              <p className="mt-1 text-sm text-red-400">
                {errors.department.message}
              </p>
            )}
          </Field>

          {/* Appointment Date */}
          <Field tone="dark" label="Appointment Date *" id="appointment-date">
            <TextInput
              tone="dark"
              id="appointment-date"
              type="date"
              min={getTodayDate()}
              {...register('date', {
                required: 'Please select an appointment date.',
                validate: validateAppointmentDate,
              })}
            />

            {errors.date && (
              <p className="mt-1 text-sm text-red-400">
                {errors.date.message}
              </p>
            )}
          </Field>

          {/* Doctor */}
          <Field tone="dark" label="Select Doctor *" id="appointment-doctor">
            <SelectInput
              tone="dark"
              id="appointment-doctor"
              disabled={!selectedDepartment || availableDoctors.length === 0}
              options={availableDoctors.map(doctor => doctor.name)}
              {...register('doctor', {
                required: 'Please select a doctor.',
                validate: value =>
                  DOCTORS.items.some(
                    doctor =>
                      doctor.name === value &&
                      doctor.department === selectedDepartment
                  ) || 'Please select a valid doctor.',
              })}
            />

            {errors.doctor && (
              <p className="mt-1 text-sm text-red-400">
                {errors.doctor.message}
              </p>
            )}

            {!selectedDepartment && (
              <p className="mt-1 text-sm text-white/60">
                Select a department first.
              </p>
            )}

            {selectedDepartment && availableDoctors.length === 0 && (
              <p className="mt-1 text-sm text-white/60">
                No doctors currently available in this department.
              </p>
            )}
          </Field>

          {/* Message */}
          <Field
            tone="dark"
            label="Message *"
            id="appointment-message"
            className="tablet:col-span-2"
          >
            <TextArea
              tone="dark"
              id="appointment-message"
              placeholder="Write your message…"
              {...register('message', {
                required: 'Please enter a message.',
                minLength: {
                  value: 10,
                  message: 'Message must contain at least 10 characters.',
                },
                maxLength: {
                  value: 1000,
                  message: 'Message cannot exceed 1000 characters.',
                },
                validate: value =>
                  value.trim().length >= 10
                  || 'Please enter a meaningful message.',
              })}
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </Field>

          {/* Submit */}
          <div className="tablet:col-span-2">
            <SubmitButton disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : SUBMIT_LABEL}
            </SubmitButton>
          </div>

        </form>
      </div>
      <div className='text-center mt-10'>
        <Link to={'/#top'} className='hover:underline hover:underline-offset-4 hover:text-blue-500'>Back To Top</Link>
      </div>
    </Section>
  )
}
