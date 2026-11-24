// News & Notices: the ONLY place to add, remove or edit notices.
// Import each notice webP or AVIF from src/assets/images/notices/ and reference it through its imported variable.
// Newest first: the first 3 entries show on the homepage, the rest appear after "See More".
// (Section heading + initialCount live in ../constants/notices.js.)

const noticeImages = import.meta.glob("../../assets/images/notices/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export const NOTICES = [
  {
    id: 1,
    date: "Nov 18, 2026",
    heading: "Important Notice Regarding Hospital Services",
    image: noticeImages["../../assets/images/notices/notice-1.png"],
  },
  {
    id: 2,
    date: "Nov 10, 2026",
    heading: "Revised OPD Timings for the Winter Season",
    image: noticeImages['../../assets/images/notices/notice-2.png'],
  },
  {
    id: 3,
    date: "Nov 02, 2026",
    heading: "Free Health Camp Announcement",
    image: noticeImages['../../assets/images/notices/notice-3.png'],
  },
  {
    id: 4,
    date: "Oct 21, 2026",
    heading: "Vacancy Announcement: Staff Nurse and Lab Technician",
    image: noticeImages['../../assets/images/notices/notice-4.png'],
  },
  {
    id: 5,
    date: "Oct 12, 2026",
    heading: "Public Holiday Schedule for Dashain and Tihar",
    image: noticeImages['../../assets/images/notices/notice-5.png'],
  },
];
