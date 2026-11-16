import { ArrowUpRight, HealthCross } from './Icons.jsx'
import { Link } from 'react-router'

/** Section wrapper: Framer section padding 120/80/60 vertical, 30/30/20 horizontal, 1200px inner container. */
export function Section({ id, bg = 'white', top = true, className = '', innerClassName = '', children }) {
  const bgClass = bg === 'light' ? 'bg-light-bg' : 'bg-white'
  const pt = top ? 'pt-[60px] tablet:pt-20 desktop:pt-[120px]' : ''
  return (
    <section id={id} className={`${bgClass} ${pt} pb-[60px] tablet:pb-20 desktop:pb-[120px] px-5 tablet:px-[30px] ${className}`}>
      <div className={`mx-auto w-full max-w-container ${innerClassName}`}>{children}</div>
    </section>
  )
}

/** Tag component: bordered pill with small icon + 16px/500 label. */
export function Tag({ children, dark = false }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 border px-3 py-2 ${
        dark ? 'border-stroke-dark text-white' : 'border-stroke text-dark'
      }`}
    >
      <HealthCross className={dark ? 'text-white' : 'text-primary'} />
      <span className="t-highlight">{children}</span>
    </span>
  )
}

/** Title & Tag block (tag, 10px gap, H2). */
export function SectionHeading({ tag, title, align = 'left', dark = false, className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start'
  return (
    <div className={`flex flex-col gap-[10px] ${alignment} ${className}`}>
      <Tag dark={dark}>{tag}</Tag>
      <h2 className={`t-h2 ${dark ? 'text-white' : 'text-dark'}`}>{title}</h2>
    </div>
  )
}

/**
 * Primary Button component.
 * variant "primary": Primary bg, white text, white icon square (dark arrow)
 * variant "outline": transparent bg, 1px stroke, body text, Primary icon square (white arrow)
 */
export function PrimaryButton({
  children,
  href = '/contact',
  variant = 'primary',
  as: Comp = Link,
  className = '',
  ...rest
}) {
  console.log(Comp)
  const styles =
    variant === 'outline'
      ? 'border border-stroke bg-transparent text-body'
      : 'bg-primary text-white'

  const iconStyles =
    variant === 'outline'
      ? 'bg-primary text-white'
      : 'bg-white text-dark'

  const props = Comp === 'a' ? { href } : { to: href }

  return (
    <Comp
      {...props}
      {...rest}
      className={`group inline-flex w-fit items-center justify-center gap-[26px] py-[13px] pr-[13px] pl-[22px] transition-opacity hover:opacity-90 ${styles} ${className} rounded-full`}
    >
      <span className="t-button">{children}</span>

      <span className={`grid h-10 w-10 place-items-center rounded-full ${iconStyles}`}>
        <ArrowUpRight />
      </span>
    </Comp>
  )
}

/** Image with a Light-grey (BG Color) placeholder so layout never jumps while loading. */
export function Img({ src, alt = '', className = '', ...rest }) {
  return <img src={src} alt={alt} loading="lazy" className={`bg-bg-color object-cover ${className}`} {...rest} />
}
