// News & Notices: the ONLY place to add, remove or edit notices.
// Put each notice PNG in /public/images/notices/ and reference it as "/images/notices/<file>.png".
// Newest first: the first 3 entries show on the homepage, the rest appear after "See More".
export const NOTICES_SECTION = {
  tag: 'News and Notices',
  title: 'Important hospital announcements',
  initialCount: 3,
}

export const NOTICES = [
  { id: 1, date: 'Nov 18, 2026', heading: 'Important Notice Regarding Hospital Services', image: '/images/notices/notice-1.png' },
  { id: 2, date: 'Nov 10, 2026', heading: 'Revised OPD Timings for the Winter Season', image: '/images/notices/notice-2.png' },
  { id: 3, date: 'Nov 02, 2026', heading: 'Free Health Camp Announcement', image: '/images/notices/notice-3.png' },
  { id: 4, date: 'Oct 21, 2026', heading: 'Vacancy Announcement: Staff Nurse and Lab Technician', image: '/images/notices/notice-4.png' },
  { id: 5, date: 'Oct 12, 2026', heading: 'Public Holiday Schedule for Dashain and Tihar', image: '/images/notices/notice-5.png' },
]
