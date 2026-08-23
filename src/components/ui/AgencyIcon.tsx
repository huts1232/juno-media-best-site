import type { AgencyIcon as AgencyIconName } from "@/content/agency";

const paths: Record<AgencyIconName, string> = {
  building: "M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M3 21h18M7 8h3M7 12h3M7 16h3M17 14h1M17 18h1",
  cart: "M3 4h2l2.4 10.4a1 1 0 0 0 1 .8h7.7a1 1 0 0 0 1-.8L19 8H6M10 20a1 1 0 1 0 0-.01M17 20a1 1 0 1 0 0-.01",
  care: "M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z",
  wrench: "M15.5 3.5a5 5 0 0 0-6.2 6.7L3.7 15.8a2 2 0 0 0 2.8 2.8l5.6-5.6a5 5 0 0 0 6.7-6.2l-2.9 2.9-2.6-.7-.7-2.6 2.9-2.9Z",
  briefcase: "M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8ZM9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M3 13h18",
  spark: "M12 3l1.9 5.4L19 10l-5.1 1.6L12 17l-1.9-5.4L5 10l5.1-1.6L12 3ZM18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8L18 16Z",
  certificate: "M12 3l7 3v5.5c0 4-3 7.3-7 8.5-4-1.2-7-4.5-7-8.5V6l7-3ZM9 11.5l2 2 4-4",
};

type AgencyIconProps = {
  name: AgencyIconName;
  className?: string;
};

/** Decoratieve lijniconen; de betekenis staat altijd in de tekst ernaast. */
export function AgencyIcon({ name, className }: AgencyIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
