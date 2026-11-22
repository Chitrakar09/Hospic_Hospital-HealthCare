import { BLOG, BLOG_ASSETS } from '../../data/configs/blog.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'

function BlogCard({ title, date, category, photo }) {
  return (
    <article className="flex flex-col">
      <Img src={photo} alt="" className="h-[260px] w-full tablet:h-[360px] desktop:h-[480px]" />
      <div className="flex flex-col gap-5 bg-light-bg px-5 py-[25px] tablet:px-[30px]">
        <div className="t-highlight flex items-center text-body">
          <span>{category}</span>
          <span className="whitespace-pre">  /  </span>
          <span>{date}</span>
        </div>
        <h3 className="t-h5 text-dark"><a href="#blog" className="hover:text-primary">{title}</a></h3>
      </div>
    </article>
  )
}

export default function Blog() {
  return (
    <Section id="blog" innerClassName="flex flex-col items-center gap-[50px] desktop:gap-20">
      <SectionHeading tag={BLOG.tag} title={BLOG.title} align="center" className="max-w-[536px]" />
      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-[60px] desktop:grid-cols-2">
        {BLOG.items.map((b, i) => <BlogCard key={b.title} {...b} photo={BLOG_ASSETS[i]} />)}
      </div>
    </Section>
  )
}
