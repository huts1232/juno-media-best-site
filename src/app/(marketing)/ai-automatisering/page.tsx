import { LandingPage } from "@/components/landing/LandingPage";
import { aiAutomatisering } from "@/content/landings/ai-automatisering";
import { landingMetadata, serviceJsonLd } from "@/lib/landing";

export const metadata = landingMetadata(aiAutomatisering);

/** Alles uit content/landings/ai-automatisering.ts. Nav en Footer komen uit de root-layout. */
export default function AiAutomatiseringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJsonLd(aiAutomatisering) }}
      />
      <LandingPage content={aiAutomatisering} />
    </>
  );
}
