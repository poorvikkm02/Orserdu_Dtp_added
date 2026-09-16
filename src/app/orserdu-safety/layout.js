export const metadata = {
  // ── Browser / Page Title ─────────────────────────────────────────────────────
  title: "ORSERDU® (elacestrant) Safety Profile & Side Effect Management",

  // ── Meta Description (160-165 chars) ────────────────────────────────────────
  description:
    "Learn about the safety profile of prescription ORSERDU® (elacestrant). Explore common side effects and find tips for managing your treatment. Stay informed on treatment and proactive health monitoring",

  keywords:
    "ORSERDU side effects, elacestrant safety, ESR1m metastatic breast cancer, ER+/HER2- mBC treatment, breast cancer therapy side effects",

  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    title: "ORSERDU® (elacestrant) Safety Profile & Side Effect Management",
    description:
      "Learn about the safety profile of prescription ORSERDU® (elacestrant). Explore common side effects and find tips for managing your treatment. Stay informed on treatment and proactive health monitoring",
    url: "https://www.orserdu.com/orserdu-safety/",
    images: [
      { url: "https://www.orserdu.com/images/logos/orserdu-logo.png" },
    ],
    type: "website",
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "ORSERDU® (elacestrant) Safety Profile & Side Effect Management",
    description:
      "Learn about the safety profile of prescription ORSERDU® (elacestrant). Explore common side effects and find tips for managing your treatment. Stay informed on treatment and proactive health monitoring",
    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.orserdu.com/orserdu-safety/",
  },
};

export default function SafetyLayout({ children }) {
  return <>{children}</>;
}
