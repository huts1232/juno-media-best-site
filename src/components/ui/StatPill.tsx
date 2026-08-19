type StatPillProps = {
  label: string;
};

/** Kleine pill met statusstip, voor de kop van een statskaart. */
export function StatPill({ label }: StatPillProps) {
  return (
    <span className="stat-pill">
      <span className="stat-pill__dot" aria-hidden="true" />
      {label}
    </span>
  );
}
