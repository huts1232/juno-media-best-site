type LogoMarkProps = {
  className?: string;
  /** Zonder title is de mark decoratief en dus verborgen voor screenreaders. */
  title?: string;
};

/**
 * Het JUNO-merkteken als twee gesloten curves: de lichte bovenboog en de
 * donkere onderboog. Beide paden hebben pathLength 1, zodat de intro ze met
 * stroke-dashoffset 1 -> 0 kan tekenen en daarna kan vullen.
 *
 * LET OP: public/assets/logo.png ontbreekt in de repo. Deze twee paden zijn
 * opgebouwd uit de merkkleuren en vormtaal, niet nagetrokken van het bestand.
 * Zodra het logo er staat: vervang alleen de twee d-attributen en de viewBox,
 * de rest van de animatie blijft werken.
 */
export function LogoMark({ className, title }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path
        data-logo-path="light"
        pathLength={1}
        d="M14.97 34A52 52 0 0 1 105.03 86L95.51 80.5A41 41 0 0 0 24.49 39.5Z"
        fill="var(--color-accent)"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        data-logo-path="dark"
        pathLength={1}
        d="M105.03 86A52 52 0 0 1 14.97 34L24.49 39.5A41 41 0 0 0 95.51 80.5Z"
        fill="var(--color-accent-deep)"
        stroke="var(--color-accent-deep)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}
