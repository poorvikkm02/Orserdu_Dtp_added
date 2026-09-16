export async function GET() {
  return Response.json({
    drug: {
      brandName: "ORSERDU",
      genericName: "Elacestrant",
      manufacturer: "Stemline Therapeutics",
      drugClass: "Estrogen receptor antagonist",
      route: "Oral"
    },

    indication: {
      title: "Indication",
      description:
        "Treatment of ER-positive, HER2-negative, ESR1-mutated advanced or metastatic breast cancer"
    },

    dosage: {
      recommended: "345 mg once daily",
      administration: "Take orally with food"
    },

    clinicalData: [
      {
        name: "EMERALD",
        type: "Phase 3",
        status: "Completed",
        description: "Randomized clinical study"
      },
      {
        name: "Clinical Study 2",
        type: "Phase 2",
        status: "Completed",
        description: "Evaluation of treatment efficacy and safety"
      }
    ],

    resources: [
      {
        id: 1,
        title: "Prescribing Information",
        type: "PDF",
        category: "Healthcare Professionals",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217639s000lbl.pdf"
      },
      {
        id: 2,
        title: "Dosing Guide",
        type: "PDF",
        category: "Dosing",
        url: "https://www.orserdu.com/dosing"
      },
      {
        id: 3,
        title: "Patient Information",
        type: "PDF",
        category: "Patients",
        url: "https://www.orserdu.com"
      }
    ]
  });
}