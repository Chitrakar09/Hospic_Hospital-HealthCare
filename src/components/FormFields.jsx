import { PrimaryButton } from './ui.jsx'

/**
 * Shared, presentation-only form controls (UI only: no state, validation or submit logic).
 * Matches the Hospic form style: 16px Geist, 12/20 padding, 1px stroke, pill inputs, 10px textarea.
 * tone="light" for white sections, tone="dark" for the navy Appointment panel.
 */
const TONES = {
  light: {
    control: 'border-stroke text-dark placeholder:text-body',
    label: 'text-dark',
    chevron: 'text-body',
    invalid: 'invalid:text-body',
    scheme: '[color-scheme:light]',
  },
  dark: {
    control: 'border-stroke-dark text-white placeholder:text-white/50',
    label: 'text-white',
    chevron: 'text-white/70',
    invalid: 'invalid:text-white/50',
    scheme: '[color-scheme:dark]',
  },
}

const base = 'w-full border bg-transparent px-5 py-3 outline-none transition-colors focus:border-primary'

/** Two-column grid used by both forms (1 column on phone, 2 from tablet). */
export const FORM_GRID = 'relative grid w-full grid-cols-1 gap-x-5 gap-y-6 tablet:grid-cols-2 desktop:gap-y-[30px]'

export function Field({ label, id, tone = 'light', className = '', children }) {
  return (
    <div className={`flex flex-col items-start gap-[18px] ${className}`}>
      <label htmlFor={id} className={`t-highlight ${TONES[tone].label}`}>{label}</label>
      {children}
    </div>
  )
}

export function TextInput({ id, tone = 'light', type = 'text', className = '', ...rest }) {
  const t = TONES[tone]
  return <input id={id} name={id} type={type} className={`${base} ${t.control} ${t.scheme} rounded-full ${className}`} {...rest} />
}

export function SelectInput({ id, tone = 'light', options = [], placeholder = 'Select…', className = '', ...rest }) {
  const t = TONES[tone]
  return (
    <div className="relative w-full">
      <select id={id} name={id} defaultValue="" className={`${base} ${t.control} ${t.invalid} appearance-none rounded-full pr-12 ${className}`} {...rest}>
        <option value="" disabled className="text-dark">{placeholder}</option>
        {options.map((o) => <option key={o} value={o} className="text-dark">{o}</option>)}
      </select>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 ${t.chevron}`}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  )
}

export function TextArea({ id, tone = 'light', className = '', ...rest }) {
  return <textarea id={id} name={id} className={`${base} ${TONES[tone].control} min-h-[140px] resize-y rounded-[10px] ${className}`} {...rest} />
}

/** Full-width pill submit button (reuses PrimaryButton). */
export function SubmitButton({ children }) {
  return (
    <PrimaryButton as="button" type="submit" className="!w-full !justify-between !rounded-full [&>span:last-child]:!rounded-full">
      {children}
    </PrimaryButton>
  )
}
