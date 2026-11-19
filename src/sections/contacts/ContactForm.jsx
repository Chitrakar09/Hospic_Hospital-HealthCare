
import { useRef,useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { CONTACT_IMG, CONTACT_PAGE } from '../../data/contact.js'
import { SectionHeading } from '../../components/ui.jsx'
import {
  FORM_GRID,
  Field,
  TextInput,
  TextArea,
  SubmitButton,
} from '../../components/FormFields.jsx'

const EMAIL_TO = 'hospital@rupandehimodalhospital.com'

export default function ContactForm() {
  const { tag, title, submit } = CONTACT_PAGE.form

  const submittedRef = useRef(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      website: '',
    },
  })

   // Reset submission lock whenever the user edits a field
useEffect(() => {
  const subscription = watch(() => {
    submittedRef.current = false
  })

  return () => subscription.unsubscribe()
}, [watch])

  function handleContactSubmit(data) {
    // Basic honeypot spam protection.
    if (data.website) return

    // Prevent repeated submissions.
    if (submittedRef.current) return

    submittedRef.current = true

    const { name, email, subject, message } = data

    const mailSubject = `New Contact Message - ${name}`

    const body = `
New Contact Request

Sender Details
----------------

Name: ${name}
Email: ${email}

Subject:
${subject}

Message:
${message}


Sent from Hospital Website
`

    const mail = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TO}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`

    window.open(mail, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[10px] px-5 py-[60px] tablet:gap-[50px] tablet:px-[30px] tablet:py-20 desktop:gap-20 desktop:py-[120px]">

      <img
        src={CONTACT_IMG.panelBg}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <SectionHeading
        tag={tag}
        title={title}
        align="center"
        className="relative max-w-[436px] desktop:max-w-[553px]"
      />

      <form
        onSubmit={handleSubmit(handleContactSubmit)}
        noValidate
        className={`${FORM_GRID} relative max-w-[970px]`}
      >

        {/* Honeypot field */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
          <label htmlFor="contact-website">
            Leave this field empty
          </label>

          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>

        {/* Full Name */}
        <Field label="Full Name *" id="contact-name">
          <TextInput
            id="contact-name"
            autoComplete="name"
            placeholder="Enter Your Name ..."
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
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </Field>

        {/* Email */}
        <Field label="Email Address *" id="contact-email">
          <TextInput
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="Enter Your Email ..."
            {...register('email', {
              required: 'Email address is required.',
              maxLength: {
                value: 254,
                message: 'Email address is too long.',
              },
              pattern: {
                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/,
                message: 'Enter a valid email address.',
              },
            })}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </Field>

        {/* Subject */}
        <Field
          label="Subject *"
          id="contact-subject"
          className="tablet:col-span-2"
        >
          <TextInput
            id="contact-subject"
            placeholder="How can we help you?"
            {...register('subject', {
              required: 'Subject is required.',
              minLength: {
                value: 3,
                message: 'Subject must contain at least 3 characters.',
              },
              maxLength: {
                value: 120,
                message: 'Subject cannot exceed 120 characters.',
              },
              validate: value =>
                value.trim().length >= 3
                || 'Please enter a meaningful subject.',
            })}
          />

          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">
              {errors.subject.message}
            </p>
          )}
        </Field>

        {/* Message */}
        <Field
          label="Message *"
          id="contact-message"
          className="tablet:col-span-2"
        >
          <TextArea
            id="contact-message"
            placeholder="Enter Your Message ..."
            {...register('message', {
              required: 'Message is required.',
              minLength: {
                value: 10,
                message: 'Message must contain at least 10 characters.',
              },
              maxLength: {
                value: 2000,
                message: 'Message cannot exceed 2000 characters.',
              },
              validate: value =>
                value.trim().length >= 10
                || 'Please enter a meaningful message.',
            })}
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </Field>

        {/* Submit */}
        <div className="tablet:col-span-2">
          <SubmitButton disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : submit}
          </SubmitButton>
        </div>

      </form>
    </div>
  )
}
