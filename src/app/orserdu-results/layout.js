export const metadata = {
  // ── Browser / Page Title ─────────────────────────────────────────────────────
  title:
    "ORSERDU® (elacestrant) Clinical Trial Results: Efficacy and Safety in ESR1-Mutated mBC",

  // ── Meta Description (160-165 chars) ────────────────────────────────────────
  description:
    "Explore clinical trial results for prescription ORSERDU® (elacestrant) for ER+/HER2- metastatic breast cancer with an ESR1 mutation",

  keywords:
    "ORSERDU clinical trial, elacestrant efficacy, ESR1-mutated mBC results, EMERALD trial, ER+/HER2- metastatic breast cancer treatment outcomes",

  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    title:
      "ORSERDU® (elacestrant) Clinical Trial Results: Efficacy and Safety in ESR1-Mutated mBC",
    description:
      "Explore clinical trial results for prescription ORSERDU® (elacestrant) for ER+/HER2- metastatic breast cancer with an ESR1 mutation",
    url: "https://www.orserdu.com/orserdu-results/",
    images: [
      { url: "https://www.orserdu.com/images/logos/orserdu-logo.png" },
    ],
    type: "website",
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "ORSERDU® (elacestrant) Clinical Trial Results: Efficacy and Safety in ESR1-Mutated mBC",
    description:
      "Explore clinical trial results for prescription ORSERDU® (elacestrant) for ER+/HER2- metastatic breast cancer with an ESR1 mutation",
    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.orserdu.com/orserdu-results/",
  },
};

export default function ResultsLayout({ children }) {
  return <>{children}</>;
}
