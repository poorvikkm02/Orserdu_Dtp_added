export const metadata = {
  // ── Browser / Page Title ─────────────────────────────────────────────────────
  title: "How to Take ORSERDU® (elacestrant): Dosage & Daily Instructions",

  // ── Meta Description (160-165 chars) ────────────────────────────────────────
  description:
    "Learn how to properly take prescription ORSERDU. Includes daily dosage timing, instructions for missed doses, and why you should always take ORSERDU® (elacestrant) with food. Follow these steps.",

  keywords:
    "how to take ORSERDU, elacestrant dosage, ESR1m metastatic breast cancer treatment, ER+/HER2- mBC therapy, ORSERDU tablet instructions",

  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    title: "How to Take ORSERDU® (elacestrant): Dosage & Daily Instructions",
    description:
      "Learn how to properly take prescription ORSERDU. Includes daily dosage timing, instructions for missed doses, and why you should always take ORSERDU® (elacestrant) with food. Follow these steps.",
    url: "https://www.orserdu.com/taking-orserdu/",
    images: [
      { url: "https://www.orserdu.com/images/logos/orserdu-logo.png" },
    ],
    type: "website",
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "How to Take ORSERDU® (elacestrant): Dosage & Daily Instructions",
    description:
      "Learn how to properly take prescription ORSERDU. Includes daily dosage timing, instructions for missed doses, and why you should always take ORSERDU® (elacestrant) with food. Follow these steps.",
    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.orserdu.com/taking-orserdu/",
  },
};

export default function TakingOrserduLayout({ children }) {
  return <>{children}</>;
}
