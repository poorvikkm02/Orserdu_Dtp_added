export const metadata = {
  // ── Browser / Page Title (51 chars) ─────────────────────────────────────────
  title: "ORSERDU® (elacestrant) Patient Support & Resources",

  // ── Meta Description (160-165 chars) ────────────────────────────────────────
  description:
    "Watch real stories of patients who have taken ORSERDU® (elacestrant). Discover how others manage treatment, share their journeys with ER+/HER2- metastatic breast cancer, and find support in the community",

  keywords:
    "ORSERDU patient stories, elacestrant real stories, ESR1-mutated mBC patient experience, ER+/HER2- metastatic breast cancer community, ORSERDU ambassador videos",

  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    title: "ORSERDU® (elacestrant) Patient Support & Resources",
    description:
      "Watch real stories of patients who have taken ORSERDU® (elacestrant). Discover how others manage treatment, share their journeys with ER+/HER2- metastatic breast cancer, and find support in the community",
    url: "https://www.orserdu.com/real-stories/",
    images: [
      { url: "https://www.orserdu.com/images/logos/orserdu-logo.png" },
    ],
    type: "website",
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "ORSERDU® (elacestrant) Patient Support & Resources",
    description:
      "Watch real stories of patients who have taken ORSERDU® (elacestrant). Discover how others manage treatment and share their journeys with ER+/HER2- metastatic breast cancer.",
    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://orserdu.com/real-stories/",
  },
};

export default function RealStoryLayout({ children }) {
  return <>{children}</>;
}
