import type { Metadata } from "next";
import { Suspense } from "react";
import { DigestConfirm } from "@/components/sections/DigestConfirm";
import { digest } from "@/content/agency";

export const metadata: Metadata = {
  title: `${digest.confirm.heading.success} | JUNO Media`,
  description: digest.confirm.body.success,
  robots: { index: false },
};

export default function DigestConfirmPage() {
  return (
    <main className="page-shell">
      {/* Fout #6: useSearchParams zonder Suspense breekt de build in Next 15. */}
      <Suspense fallback={<p className="lead">{digest.confirm.body.loading}</p>}>
        <DigestConfirm />
      </Suspense>
    </main>
  );
}
