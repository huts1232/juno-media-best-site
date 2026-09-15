import type { Metadata } from "next";
import { Suspense } from "react";
import { DigestConfirm } from "@/components/sections/DigestConfirm";
import { digest } from "@/content/agency";
import { metaTitle } from "@/content/site";

export const metadata: Metadata = {
  title: metaTitle(digest.confirm.heading.success),
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
