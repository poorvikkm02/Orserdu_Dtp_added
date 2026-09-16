export const metadata = {
  // ── Browser / Page Title (70-71 chars) ──────────────────────────────────────
  title: "ESR1 Mutations in Metastatic Breast Cancer: Testing & Rx Treatment Options | ORSERDU® (elacestrant)",

  // ── Meta Description (160-165 chars) ────────────────────────────────────────
  description:
    "What is an ESR1 mutation? Learn how this mutation affects hormone receptor–positive breast cancer, how to get tested, and what treatment options are available",

  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",

  keywords:
    "ESR1 mutation, ESR1-mutated breast cancer, metastatic breast cancer testing, elacestrant treatment, ER+/HER2- mBC, ORSERDU ESR1 mutation treatment",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    title:
      "ESR1 Mutations in Metastatic Breast Cancer: Testing & Rx Treatment Options | ORSERDU® (elacestrant)",
    description:
         "What is an ESR1 mutation? Learn how this mutation affects hormone receptor–positive breast cancer, how to get tested, and what treatment options are available",

    url: "https://www.orserdu.com/understanding-esr1-mutations/",
    images: [
      { url: "https://www.orserdu.com/images/logos/orserdu-logo.png" },
    ],
    type: "website",
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "ESR1 Mutations in Metastatic Breast Cancer: Testing & Rx Treatment Options | ORSERDU® (elacestrant)",
    description:
          "What is an ESR1 mutation? Learn how this mutation affects hormone receptor–positive breast cancer, how to get tested, and what treatment options are available",

    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.orserdu.com/understanding-esr1-mutations/",
  },

  // ── Structured Data ──────────────────────────────────────────────────────────
  structuredData: [
    {
      "@context": "http://schema.org",
      "@type": "MedicalWebPage",
      audience: [
        {
          "@type": "MedicalAudience",
          audiencetype: "Patient",
          healthCondition: [
            {
              "@type": "MedicalCondition",
              primaryPrevention:
                "Treatment for postmenopausal women and adult men with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer.",
            },
          ],
        },
      ],
    },
    {
      "@context": "http://schema.org",
      "@type": "MedicalIndication",
      name: "Indication",
      description:
        "The only treatment for postmenopausal women and adult men with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer following disease progression on endocrine therapy.",
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "ESR1-mutation",
      additionalType: "ER+/HER2- metastatic breast cancer with ESR1 mutation",
      alternateName: "Estrogen receptor 1 mutation",
      description:
        "ESR1 mutation (ESR1m) is a common resistance mutation in metastatic breast cancer (mBC). Learn how your cancer may evolve and find out if your mBC has ESR1m.",
      disambiguatingDescription: "Breast Cancer",
      epidemiology:
        "Post-menopausal women and adult men with estrogen receptor (ER)-positive, HER2-negative, ESR1-mutated advanced metastatic breast cancer",
      legalStatus: "FDA-approved",
mainEntityOfPage:
"https://www.orserdu.com/understanding-esr1-mutations/",
      name: "ESR1 Mutations in Breast Cancer",
      sameAs: "https://en.wikipedia.org/wiki/Estrogen_receptor",
      identifier: "Orserdu Drug Trial Snapshot",
      pathophysiology:
        "ESR1 mutations cause the ER to be active even when estrogen is not present. This is called constitutive activity.",
    },
  ],
};

export default function UnderstandingESR1Layout({ children }) {
  return <>{children}</>;
}
