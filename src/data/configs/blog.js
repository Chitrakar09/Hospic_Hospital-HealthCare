import { img } from '../helpers.js'

// Blog & news: posts + their images (BLOG_ASSETS[i] belongs to BLOG.items[i]).
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

export const BLOG_ASSETS = [
  img('mzyIcLzuWLrByeuvjpgOMagrM6Y.png'),
  img('Gj1PXWBdEtm9tBYzytBIJEk3fs.png'),
  img('PvTgSKccITpxWiBA0ng1fpqeSJM.png'),
  img('D4fiiqN6h5cQWkrVma28NeUki4.png'),
]
