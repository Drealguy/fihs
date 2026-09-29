import type { ReactNode } from "react";

// Line icons (24px grid, stroke-based) so they inherit `color` from the card.
function Svg({ children, size = 40 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GraduationCapIcon() {
  return (
    <Svg>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </Svg>
  );
}

export function FlaskIcon() {
  return (
    <Svg>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.5V3" />
      <path d="M7.5 15h9" />
    </Svg>
  );
}

export function TeacherIcon() {
  return (
    <Svg>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2" />
      <path d="M16 3h5v7h-5" />
    </Svg>
  );
}

export function ShieldIcon() {
  return (
    <Svg>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function TrophyIcon() {
  return (
    <Svg>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3" />
    </Svg>
  );
}

export function BookIcon() {
  return (
    <Svg>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5A2.5 2.5 0 0 0 4 21.5v-2Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M9 7h7" />
    </Svg>
  );
}

export function CalendarIcon() {
  return (
    <Svg size={18}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </Svg>
  );
}

export function MapPinIcon({ size = 18 }: { size?: number }) {
  return (
    <Svg size={size}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <Svg size={20}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );
}

export function ArrowRightIcon() {
  return (
    <Svg size={20}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
}

export function LaptopIcon() {
  return (
    <Svg>
      <rect x="4" y="4" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
      <path d="m9 8-2 2.5L9 13M15 8l2 2.5-2 2.5" />
    </Svg>
  );
}

export function PaletteIcon() {
  return (
    <Svg>
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7H17a4 4 0 0 0 4-4c0-4.7-4-8.4-9-8.4Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7" r="1" />
      <circle cx="15" cy="7.5" r="1" />
    </Svg>
  );
}

export function CheckIcon() {
  return (
    <Svg size={18}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  );
}

export function PhoneIcon() {
  return (
    <Svg size={24}>
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </Svg>
  );
}

export function MailIcon() {
  return (
    <Svg size={24}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}
