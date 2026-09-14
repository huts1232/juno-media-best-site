/**
 * Drie cases op de homepage. Los van content/cases.ts, want die bevat nog
 * voorbeeldklanten uit de opzetfase.
 *
 * Regels: geen verzonnen klanten, sectoren of cijfers. Alles wat nog niet
 * vaststaat is TODO en moet door de klant zijn goedgekeurd voordat het live
 * gaat. `result.value` is het grote cijfer op de kaart.
 */
export type HomeCase = {
  id: string;
  sector: string;
  body: string;
  result: {
    value: string;
    label: string;
  };
};

export const homeCases = {
  id: "cases",
  eyebrow: "Cases",
  heading: "Wat het opleverde",
  listLabel: "Cases",
  items: [
    {
      id: "batavorum",
      // TODO: sector van Batavorum invullen.
      sector: "TODO: sector",
      // TODO: aanvullen met wat er gebouwd is en laten goedkeuren door Batavorum.
      body: "Offerteaanvragen werden met de hand verwerkt. We hebben dat klantproces geautomatiseerd. TODO: aanvullen.",
      result: {
        // TODO: verifiëren. Alleen een cijfer dat Batavorum bevestigt.
        value: "TODO",
        label: "TODO: wat het cijfer meet",
      },
    },
    {
      id: "vastgoedai",
      sector: "Vastgoed",
      // TODO: uitgangssituatie, wat we bouwden en wat het oplevert.
      body: "TODO: twee tot drie zinnen over de uitgangssituatie, wat we bouwden en wat het oplevert.",
      result: {
        // TODO: verifiëren.
        value: "TODO",
        label: "TODO: wat het cijfer meet",
      },
    },
    {
      id: "case-3",
      // TODO: derde case kiezen. Klant, sector en resultaat nog onbekend.
      sector: "TODO: sector",
      body: "TODO: twee tot drie zinnen over de uitgangssituatie, wat we bouwden en wat het oplevert.",
      result: {
        // TODO: verifiëren.
        value: "TODO",
        label: "TODO: wat het cijfer meet",
      },
    },
  ] satisfies HomeCase[],
} as const;
