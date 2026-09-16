/**
 * FAQ accordion data for the Savings & Support page.
 *
 * Structure:
 *   [
 *     {
 *       sectionTitle: string,          // heading above the accordion group
 *       items: [
 *         { question: string, answer: string }   // HTML is supported in both fields
 *       ]
 *     }
 *   ]
 */

// Note: answers use Next.js <Link> via dangerouslySetInnerHTML — rendered as plain HTML strings.
// Color #000000 is applied inline on all link tags below.

export const faqSections = [
  {
    sectionTitle: "Understanding metastatic breast cancer",
    items: [
      {
        question: "What is metastatic breast cancer? What are mutations?",
        answer: `
          <p>Metastatic breast cancer (also referred to as mBC) is breast cancer that has spread to other parts of the body. There are several different types of metastatic breast cancer, sometimes called subtypes. ER+/HER2- is the most common subtype of metastatic breast cancer.</p>
          <p>Metastatic breast cancer can also change over time. One way that cancer can change is by developing mutations. Mutations can affect how the cancer looks, behaves, and may act. That’s why knowing your cancer’s mutation status at progression can help you and your healthcare team decide which treatment is right for you.</p>
          <p>What else should you know? Find out at <a class="underline" style="color:#000000" href="/understanding-esr1-mutations">ORSERDU.com/understanding-your-cancer</a>.</p>
        `,
      },
      {
        question: "How are mutations different from progression?",
        answer: `
          <p>Metastatic breast cancer can develop a mutation without progressing.</p>
          <p>A <strong>mutation</strong> is a change in your cancer’s makeup. Mutations do not necessarily mean that your cancer has spread or gotten worse. Even if your cancer has developed a mutation, your current treatment could still be working.</p>
          <p><strong>Progression</strong> does mean that cancer has spread or gotten worse. If your cancer has progressed, talk to your doctor. It may be time to consider a different treatment.</p>
          <p>Visit <a class="underline" style="color:#000000" href="/understanding-esr1-mutations">ORSERDU.com/understanding-your-cancer</a> to learn more about this important difference.</p>
        `,
      },
      {
        question: "What are <em>ESR1</em> mutations? Why do they matter?",
        answer: `
          <p><em class="font-light">ESR1</em> mutations are a common type of mutation in ER+/HER2- advanced or metastatic breast cancer. These mutations are a way cancer cells try to get around treatment so they can continue growing. <em class="font-light">ESR1</em> mutations often develop during or after treatment with hormone therapy.</p>
          <p>Learn how and when to treat at <a class="underline" style="color:#000000" href="/understanding-esr1-mutations">ORSERDU.com/understanding-your-cancer</a>.</p>
        `,
      },
      {
        question: "How common are <em>ESR1</em> mutations?",
        answer: `
          <p><em class="font-light">ESR1</em> mutations are quite common. Nearly 1 out of 2 people who take hormone therapy for ER+/HER2- advanced or metastatic breast cancer may develop an <em class="font-light">ESR1</em> mutation after treatment with hormone therapy.</p>
          <p>Go to <a class="underline" style="color:#000000" href="/understanding-esr1-mutations">ORSERDU.com/understanding-your-cancer</a> to see why this matters.</p>
        `,
      },
      {
        question:
          "How does <em>ESR1</em> mutation testing work? Why is progression an important time to test for mutations?",
        answer: `
          <p>A blood test (sometimes called a liquid biopsy) is the preferred way to test for <em class="font-light">ESR1</em> mutations. When cancer cells grow or change, tiny pieces break off into your bloodstream. A fast, accurate blood test allows your doctor to catch these changes in the bloodstream and see if your cancer has developed an <em class="font-light">ESR1</em> mutation.</p>
          <p>The preferred time to test for mutations is at progression because that is when treatment is no longer working. If you and your healthcare team want to know why, a blood test could provide answers.</p>
          <p>Learn more about the <em class="font-light">ESR1</em> mutation blood test at <a class="underline" style="color:#000000" href="/testing">ORSERDU.com/testing</a>.</p>
        `,
      },
    ],
  },

  {
    sectionTitle: "About ORSERDU",
    items: [
      {
        question: "What is ORSERDU?",
        answer: `
          <p>ORSERDU is a prescription medicine for postmenopausal women and adult men with <em class="font-light">ESR1</em>-mutated, ER+/HER2- advanced or metastatic breast cancer whose disease has progressed on endocrine therapy. It was the first FDA-approved treatment specifically for this type of cancer.</p>
          <p>See what sets ORSERDU apart at <a class="underline" style="color:#000000" href="/orserdu-results">ORSERDU.com/results</a>.</p>
        `,
      },
      {
        question: "How was ORSERDU studied? What were the results?",
        answer: `
          <p>ORSERDU was studied in people with ER+/HER2- advanced or metastatic breast cancer that had developed an <em class="font-light">ESR1</em> mutation. It was studied to see if it could give people more time without cancer progressing (spreading or getting worse).</p>
          <p>In the clinical trial, ORSERDU helped people live twice as long without their disease progressing. People with <em class="font-light">ESR1</em>-mutated cancer had 3.8 months of median progression-free survival (mPFS) with ORSERDU vs 1.9 months with other commonly prescribed hormone therapies. Individual results may vary.</p>
          <p>People in the clinical trial also had a 45% reduction in the risk of their cancer spreading or getting worse when compared to people who took other hormone therapies.</p>
          <p>Dive into this efficacy data in <a class="underline" style="color:#000000" href="/orserdu-results">ORSERDU.com/results</a>.</p>
          <p class="text-[14px] text-gray-500 leading-tight">mPFS is a type of time measurement in a clinical trial. It measures the point in time where half of the people in the trial were living without their disease spreading or getting worse.</p>
        `,
      },
      {
        question: "How do I take ORSERDU?",
        answer: `
          <p>ORSERDU is a once-daily pill that should be taken every day around the same time. Take ORSERDU with food to help reduce nausea and vomiting. Always take ORSERDU exactly as your healthcare team prescribes.</p>
          <p>See the details about <a class="underline" style="color:#000000" href="/taking-orserdu">ORSERDU.com/taking-orserdu</a>.</p>
        `,
      },
      {
        question: "What are the side effects of ORSERDU?",
        answer: `
          <p>Some of the most common side effects of ORSERDU (occurred in more than 10% of people in the clinical trial) included increased fat (lipid) levels in the blood, muscle and joint pain, and nausea. ORSERDU may also impact fertility.</p>
          <p>These are not all the side effects associated with ORSERDU. For more information, go to <a class="underline" style="color:#000000" href="/orserdu-safety">ORSERDU.com/safety</a>.</p>
        `,
      },
      {
        question:
          "I am a man taking ORSERDU. Do I have different safety guidelines or contraception requirements?",
        answer: `
          <p>Men taking ORSERDU do not have different safety guidelines or contraception requirements. Men should use effective contraception (birth control) during treatment with ORSERDU and for one week after the last dose if they have female partners who are able to become pregnant. Women taking ORSERDU should also use effective contraception if they are able to become pregnant.</p>
          <p>All patients should review the Important Safety Information for ORSERDU before starting treatment and discuss any concerns they may have with their doctor.</p>
          <p>For more information, visit <a class="underline" style="color:#000000" href="/orserdu-safety">ORSERDU.com/safety</a>.</p>
        `,
      },
    ],
  },

  {
    sectionTitle: "Savings and support resources",
    items: [
      {
        question: "How can I get financial assistance with ORSERDU treatment?",
        answer: `
          <p>Stemline ARC<sup>®</sup> offers financial assistance and savings programs for eligible patients based on your insurance and financial situation.</p>
          <p>Could you qualify? Find out at <a class="underline" style="color:#000000" href="/savings-and-support">ORSERDU.com/savings-and-support</a>.</p>
        `,
      },
      {
        question: "What type of support is offered through Stemline ARC<sup>®</sup>?",
        answer: `
          <p>Stemline ARC<sup>®</sup> provides access support, reimbursement assistance, and a single point of contact through its Stemline ARC<sup>®</sup> Patient Advocates.</p>
          <p>For contact information, visit <a class="underline" style="color:#000000" href="/savings-and-support">ORSERDU.com/savings-and-support</a>.</p>
        `,
      },
      {
        question:
          "My doctor prescribed ORSERDU to treat my advanced or metastatic breast cancer. What should I know?",
        answer: `
          <p>Patients who have been prescribed ORSERDU should download the digital brochure. This educational resource is specifically intended to help people who are starting treatment with ORSERDU.</p>
          <p><a class="underline" style="color:#000000" href="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/doc/Patient_Brochure_1519.pdf" target="_blank" rel="noopener noreferrer">Download the brochure here</a>.</p>
        `,
      },
    ],
  },
];
