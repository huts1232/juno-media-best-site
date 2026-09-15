import { cn } from "@/lib/cn";

type SectionHeadProps = {
  id: string;
  eyebrow: string;
  kop: string;
  className?: string;
};

/** Eyebrow plus H2 in de bestaande bento-kopstijl. `id` hoort bij aria-labelledby. */
export function SectionHead({ id, eyebrow, kop, className }: SectionHeadProps) {
  return (
    <div className={cn("bento__head", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="bento__heading">
        {kop}
      </h2>
    </div>
  );
}

/** "01", "02": visuele nummering naast een <ol>, dus aria-hidden. */
export function indexLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}
