const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};
const I = (children) => (props) => (
  <svg {...base} {...props}>
    {children}
  </svg>
);

export const ArrowUpRight = I(
  <>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </>,
);
export const Plus = I(
  <>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </>,
);
export const Minus = I(<path d="M5 12h14" />);
export const Check = I(<path d="m5 12.5 4.5 4.5L19 7.5" />);
export const Phone = I(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
);
export const Pin = I(
  <>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </>,
);
export const Menu = I(
  <>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </>,
);
export const Close = I(
  <>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </>,
);
export const Play = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
  </svg>
);
export const Star = (props) => (
  <svg
    {...base}
    width={18}
    height={18}
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="m12 2.8 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.2l-5.7 3.1 1.1-6.3-4.6-4.5 6.4-.9L12 2.8Z" />
  </svg>
);
// Health cross used inside tags
export const HealthCross = (props) => (
  <svg {...base} width={16} height={16} strokeWidth={2} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

// "Why choose us" icons
export const Users = I(
  <>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
    <path d="M18 14a6.5 6.5 0 0 1 3.5 6" />
  </>,
);
export const Cpu = I(
  <>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </>,
);
export const Shield = I(
  <>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </>,
);
export const Clock = I(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </>,
);

export const WHY_ICONS = {
  users: Users,
  cpu: Cpu,
  shield: Shield,
  clock: Clock,
};

export const NewsNoticeBellInactive = (props) => (
  <svg {...base} {...props}>
    {/* Top stem */}
    <path d="M12 3.5V5" />

    {/* Bell body */}
    <path d="M12 5C7.8 5 5.5 8.2 5.5 12.5V16c0 1.2-.6 2.3-1.5 3.5h16c-.9-1.2-1.5-2.3-1.5-3.5v-3.5C18.5 8.2 16.2 5 12 5Z" />

    {/* Clapper */}
    <path d="M10.5 20.5c0 1 .7 1.8 1.5 1.8s1.5-.8 1.5-1.8" />
  </svg>
);

export const NewsNoticeBellActive = (props) => (
  <svg {...base} {...props}>
    {/* Top stem */}
    <path d="M12 3.5V5" />

    {/* Bell body */}
    <path d="M12 5C7.8 5 5.5 8.2 5.5 12.5V16c0 1.2-.6 2.3-1.5 3.5h16c-.9-1.2-1.5-2.3-1.5-3.5v-3.5C18.5 8.2 16.2 5 12 5Z" />

    {/* Clapper */}
    <path d="M10.5 20.5c0 1 .7 1.8 1.5 1.8s1.5-.8 1.5-1.8" />

    {/* Notification dot */}
    <circle cx="19" cy="5" r="2.5" fill="#106AD9" stroke="none" />
  </svg>
);

export const ChevronDown = I(<path d="m6 9 6 6 6-6" />);
