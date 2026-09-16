export const metadata = {
  // ── Browser / Page Title (51 chars) ─────────────────────────────────────────
  title: "ORSERDU® (elacestrant) Patient Support & Resources",

  // ── Meta Description ─────────────────────────────────────────────────────────
  description:
    "Explore ORSERDU® savings options. Learn how eligible patients with private insurance can pay as little as $0 with the co-pay card or access medication through the patient assistance program",

  keywords:
    "Stemline ARC, ORSERDU support, ORSERDU savings program, elacestrant reimbursement, ESR1m metastatic breast cancer resources, ER+/HER2- mBC financial assistance",

  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    title: "ORSERDU® (elacestrant) Patient Support & Resources",
    description:
      "Explore ORSERDU® savings options. Learn how eligible patients with private insurance can pay as little as $0 with the co-pay card or access medication through the patient assistance program",
    url: "https://www.orserdu.com/savings-and-support/",
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
      "Explore ORSERDU® savings options. Learn how eligible patients with private insurance can pay as little as $0 with the co-pay card or access medication through the patient assistance program",
    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.orserdu.com/savings-and-support/",
  },

  verification: {
    google: "Y3XuUulSkQtx4MSuCuqsKWsV2GI-4tcybWompqTrClE",
  },
};

export default function SavingsAndSupportLayout({ children }) {
  return <>{children}</>;
}
