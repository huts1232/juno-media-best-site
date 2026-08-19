type AvatarRowProps = {
  initials: readonly string[];
  label: string;
};

/**
 * Overlappende avatarcirkels met initialen. De initialen zijn decoratief; het
 * label is de tekst die wordt voorgelezen.
 */
export function AvatarRow({ initials, label }: AvatarRowProps) {
  return (
    <span className="avatar-row">
      <span className="avatar-row__stack" aria-hidden="true">
        {initials.map((entry) => (
          <span key={entry} className="avatar-row__item">
            {entry}
          </span>
        ))}
      </span>
      {label}
    </span>
  );
}
