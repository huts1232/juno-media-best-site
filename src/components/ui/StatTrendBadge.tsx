type StatTrendBadgeProps = {
  label: string;
};

/** Rond icoon met een pijl schuin omhoog plus deltalabel. */
export function StatTrendBadge({ label }: StatTrendBadgeProps) {
  return (
    <span className="stat-trend">
      <span className="stat-trend__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M7 17 17 7m0 0h-7m7 0v7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label}
    </span>
  );
}
