/**
 * Regels achter de positioneringscontent: een waarde zonder bron rendert niet,
 * en een regel met een placeholder die niet ingevuld kan worden valt weg.
 */

/** Vervangt {prijs} door het bedrag; laat de regel weg zolang er geen prijs is. */
export function resolveSubLines(
  lines: readonly string[],
  price: number | null,
  format: (value: number) => string,
): readonly string[] {
  return lines.flatMap((line) => {
    if (!line.includes("{prijs}")) return [line];
    if (price === null) return [];
    return [line.replaceAll("{prijs}", format(price))];
  });
}

type Sourced = {
  value: number | null;
  source: string | null;
  asOf: string | null;
};

/** Houdt alleen de items over met waarde, bron-URL en peildatum. */
export function withSource<T extends Sourced>(
  items: readonly T[],
): readonly (T & { value: number; source: string; asOf: string })[] {
  return items.filter(
    (item): item is T & { value: number; source: string; asOf: string } =>
      item.value !== null && item.source !== null && item.asOf !== null,
  );
}
