import { ArrowUpRight, HealthCross } from './Icons.jsx'
import { Link } from 'react-router'

/** Section wrapper: Framer section padding 120/80/60 vertical, 30/30/20 horizontal, 1200px inner container.
 *  `reveal` animates the whole inner container in (Framer "Container" appear effect). */
export function Section({ id, bg = 'white', top = true, className = '', innerClassName = '', reveal = false, children }) {
  const bgClass = bg === 'light' ? 'bg-light-bg' : 'bg-white'
  const pt = top ? 'pt-[60px] tablet:pt-20 desktop:pt-[120px]' : ''
  return (
    <section id={id} className={`${bgClass} ${pt} pb-[60px] tablet:pb-20 desktop:pb-[120px] px-5 tablet:px-[30px] ${className}`}>
      <div {...(reveal ? { 'data-reveal': '' } : {})} className={`mx-auto w-full max-w-container ${innerClassName}`}>{children}</div>
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
 * Primary Button (Framer "Primary Button").
 * variant "primary": Primary bg, white text, white icon circle with dark arrow; hover: the circle expands into a pill, text turns dark.
 * variant "outline": transparent bg + 1px stroke, body text, Primary circle with white arrow; hover: pill fills Primary, text turns white.
 * Geometry as in the template: padding 13/13/13/22, gap 26, 40px circle inset 5px from the right, 24px arrow.
 */
export function PrimaryButton({
  children,
  href = '/contact',
  variant = 'primary',
  as: Comp = Link,
  className = '',
  ...rest
}) {
  const outline = variant === 'outline'
  const styles = outline
    ? 'border border-stroke bg-transparent text-body hover:text-white focus-visible:text-white'
    : 'bg-primary text-white hover:text-dark focus-visible:text-dark'
  const pillStyles = outline ? 'bg-primary' : 'bg-white'
  const iconStyles = outline ? 'text-white' : 'text-dark'

  const props = Comp === 'a' ? { href } : { to: href }

  return (
    <Comp
      {...props}
      {...rest}
      className={`group relative inline-flex w-fit items-center justify-center gap-[26px] overflow-hidden rounded-full py-[13px] pr-[13px] pl-[22px] ${styles} ${className}`}
    >
      <span aria-hidden="true" className={`btn-pill absolute top-1/2 right-[5px] h-10 w-10 -translate-y-1/2 rounded-full ${pillStyles}`} />
      <span className="t-button btn-text relative">{children}</span>
      <span className={`relative grid h-6 w-6 shrink-0 place-items-center ${iconStyles}`}>
        <ArrowUpRight />
      </span>
    </Comp>
  )
}

/** Image with a Light-grey (BG Color) placeholder so layout never jumps while loading. */
export function Img({ src, alt = '', className = '', ...rest }) {
  return <img src={src} alt={alt} loading="lazy" className={`bg-bg-color object-cover ${className}`} {...rest} />
}
