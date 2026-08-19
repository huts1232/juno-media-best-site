import { ImageResponse } from "next/og";
import { getBranche, getUseCase, useCases } from "@/content/use-cases";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "AI-agents per branche";

export function generateStaticParams() {
  return useCases.map((item) => ({ branche: item.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ branche: string }>;
}) {
  const { branche } = await params;
  const item = getUseCase(branche);
  const name = item ? getBranche(item.slug).name : alt;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(140deg, #015c92 0%, #080808 55%)",
          color: "#ffffff",
          fontSize: 64,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#43b1d6" }}>
          JUNO MEDIA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3" }}>AI-agents voor</div>
          <div style={{ display: "flex", lineHeight: 1.1 }}>{name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a3a3a3" }}>
          6x Anthropic Certified
        </div>
      </div>
    ),
    size,
  );
}
