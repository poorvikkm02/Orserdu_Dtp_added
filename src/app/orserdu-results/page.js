"use client";
 
import React, { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import imageOF45 from "../../assets/images/about/AboutFiftyPer.png";
import peopleSearch from "../../assets/images/about/peopleSearch.png";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import NoOneImg from "../../assets/Desktop/noOne-result.png";
import tablet1x from "../../assets/Desktop/tablet1x.png";
import threeYears from "../../assets/Desktop/threeYears-result.png";
import Clincialstudy from "../../assets/Desktop/clinicalstudy-result.png";
import thumUp from "../../assets/Desktop/thum-up-result.png";
import Search_RGB from "../../assets/Desktop/Search_RGB.png";
 
import PreLoader from "@/components/loaders/Preloader";
const HeroContainer = dynamic(() => import("@/components/wrappers/HeroContainer"), {
  ssr: false,
  loading: () => <PreLoader />
});
 
const cards = [
  {
    img: NoOneImg,
    text: (
      <>
        <span className="text-[#006937]">Was the first FDA-approved treatment</span> <span className="font-light">for <em className="font-light">ESR1</em>-mutated advanced or metastatic breast cancer</span>
      </>
    ),
  },
  {
    img: tablet1x,
    text: (
      <>
        <span className="text-[#006937]">ORSERDU is a targeted hormone therapy in 1 daily pill.</span> <span className="font-light"><br className=" xl:block"/> It is not chemotherapy</span>
      </>
    ),
  },
  {
    img: threeYears,
    text: (
      <>
        <span className="text-[#006937]">Backed by years of experience</span> <span className="font-light xl:whitespace-nowrap "><span className="whitespace-nowrap">and more than </span>16,000 prescriptions </span>
      </>
    ),
  },
];
 
const Orserdu_results = () => {
  const { isMobile } = useContext(ResponsiveContext);
  const stop='https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/cons_X.webp'
  const header = (
    <p>
      CDK4/6, cyclin-dependent kinase 4/6; ER+, estrogen receptor-positive; <i style={{ fontWeight: 300 }}>ESR1</i>, 
      estrogen receptor 1; HER2-, human epidermal growth factor receptor 2-negative; 
      mPFS, median progression-free survival; SERD, selective estrogen receptor degrader.
    </p>
  );
 
  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Banner_same_size/Results_mobile_08.webp";
    }
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/13_05_2026/Results_13_05.webp";
  }, [isMobile]);
 
  const schema = [
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
                "Treatment for postmenopausal women and adult men with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer."
            }
          ]
        }
      ]
    },
    {
      "@context": "http://schema.org",
      "@type": "MedicalIndication",
      name: "Indication",
      description:
        "The only treatment for postmenopausal women and adult men with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer following disease progression on endocrine therapy."
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      proprietaryName: "Orserdu",
      activeIngredient: "elacestrant",
      administrationRoute: "Oral",
      alternateName: "elacestrant",
      description:
        "Read how ORSERDU™, an estrogen blocking therapy, works against ESR1-mutated mBC to help people live two times longer without cancer spread.",
      dosageForm: "Tablet",
      drugUnit: "345 mg tablet",
      foodWarning: "Take with food",
      mainEntityOfPage: "https://orserdu.com/how-orserdu-works/",
      mechanismOfAction: "elacestrant",
      pregnancyWarning:
        "If you are pregnant or plan to become pregnant. ORSERDU can harm your unborn baby"
    }
  ];
 
  return (
    <>
      <h1 className="sr-only">ORSERDU® (elacestrant) Clinical Results in ESR1-Mutated mBC</h1>
      <h2 className="sr-only">Significant Reduction in Risk of Disease Progression</h2>
      <h2 className="sr-only">Success Over Common Hormone Therapies</h2>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      <HeroContainer
        header={header}
        img={imageUrl}
        navLink={"/orserdu-safety"}
        alt={"Results header image"}
        navText={"Safety "}
        notActual={"not actual patients "}
      >
        {isMobile && (
          <div className="p-6 text-[22px]  leading-[24px] shadow-md xl:shadow-none">
            <p className="text-[30px] font-thin leading-[32px] mb-4">
              <strong className="font-[600] text-dark_green"> ORSERDU may offer more time </strong>{" "}
              <strong className="font-[300]">
                without disease progression
              </strong>
            </p>
            <p className="mb-4 font-[500] text-dark_green text-[22px]">
            ORSERDU helped people live 2x longer without their cancer spreading or getting worse</p>
            <img
              className="mb-6 -ml-[10px]"
              src="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/2x_mPFS_Arrow.webp"
              alt="ORSERDU® (elacestrant) can offer more time without disease progression"
            />
            <p className="font-[500] mb-4  text-[20px] text-dark_green">
              The median progression-free survival for people with <em className="font-[500]">ESR1</em>-mutated cancer from the start of treatment was 3.8 months for ORSERDU vs 1.9 months for other commonly prescribed hormone therapies. Individual results may vary.
            </p>
            <p className="text-black font-thin text-[18px] leading-[21px] pb-2">
              mPFS is a type of time measurement in a clinical trial. It measures the point in time when half of the people in the trial were living without their disease spreading or getting worse.
            </p>
          </div>
        )}
 
        <div>
          {/* 3-card section */}
            <p className="font-[300] text-[30px] xl:text-[36px] tracking-[0.36px] leading-[32px] mb-1 pl-6 pr-6 mt-6 xl:mt-0 xl:px-[34px] ">
              <strong className="text-dark_green font-[600]">A pioneer</strong> in treating <em className="font-[300]">ESR1</em>-mutated advanced or metastatic breast cancer
 
            </p>
         
          <div className="w-full grid grid-cols-1 pb-7 gap-8 xl:grid-cols-3 xl:gap-0  mt-8 pb-4 shadow-md xl:shadow-none">
         
 
            {cards.map(({ img, text }, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-1 py-0 px-1 xl:py-0 xl:px-0 ${
                  i < cards.length - 1 ? "xl:border-r xl:border-yellow" : ""
                }`}
              >
                <img
                  className={`object-contain  fadeEffectMbl  ${i === 0 ? "w-[200px] h-[94px] xl:h-[90px]  xl:w-[70%] xl:-mt-2" : i === 2 ? "w-[130px] h-[84px] xl:h-[90px]  xl:w-[60%] xl:mt-1" : "w-[125px] -ml-[3px] xl:ml-0 h-[84px] xl:h-[90px] "}`}
                  src={img.src}
                  alt=""
                />
                <p className={`text-[18px] xxl:text-[18px] font-[400] leading-[22px] text-center w-[80%] xl:w-[65%]  ${i === 0 ? "mt-4 xl:mt-4" : i === 2 ? "mt-1 xl:mt-1" : "mt-2"}`}>
                  {i === 0 ? (
                    <><span className="text-[#006937]">Was the first FDA-approved treatment</span> <span className="font-light">for <em className="font-light">ESR1</em>-mutated advanced or metastatic breast cancer</span></>
                  ) : text}
                </p>
                {i === 0 && (
                  <p className="w-full px-4 xl:mt-[12px] mt-[3px]  font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[14px] xl:leading-[13px] text-center">
                    ORSERDU was approved by the FDA <span className="whitespace-nowrap">in January 2023.</span>
                  </p>
                )}
              </div>
            ))}
 
          </div>
 
          <div className="xl:shadow-box_shadow p-6 pb-6 xl:pb-8 xl:mt-[5px] xl:rounded-[30px] shadow-md xl:px-[34px] xl:py-[32px]  ">
            <p className="font-[300] text-[30px] xl:text-[36px] tracking-[0.36px] leading-[32px]  mb-4">
              <strong className="text-dark_green font-[600]">ORSERDU works better</strong> than certain common hormone therapies
 
            </p>
            <div className="flex flex-col xl:flex-row items-center xl:items-center gap-3 mb-4 mt-8">
              <div className="h-[70px] xl:h-[70px] xl:border-r-[1px] xl:border-yellow xl:w-[15.5%] xl:flex xl:items-center xl:justify-center  ">
                <img
                  className="h-full w-[130px] xl:h-auto xl:w-[75%] object-contain xl:-ml-5 fadeEffectMbl"
                  src={imageOF45.src}
                  alt="45% reduction in risk of disease progression or death"
                />
              </div>
              <div className="xl: w-full xl:w-3/4  xl:text-left ">
                <p className="font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[20px] w-full xl:ml-1">
                  In the clinical study, people who took ORSERDU had <span className="text-[#006937] font-medium">45% less risk of disease progression or death</span> when compared to people who took fulvestrant or an aromatase inhibitor.
                </p>
              </div>
            </div>
            <p className="text-[20px] xl:text-[22px] xxl:text-[22px] font-[300] tracking-[0.16px] leading-[19px] text-[#006937] font-medium mt-8">
              The ORSERDU clinical trial was designed to reflect real-world practice
            </p>
            <div className="flex flex-col xl:flex-row xl:items-center gap-3 mb-8 mt-4 xl:mt-8">
              <div className="h-[60x] xl:border-r-[1px] xl:border-yellow xl:w-[15.5%] xl:flex xl:items-center ">
                <div className="flex items-center xl:flex-col text-left justify-center -ml-2 xl:ml-0">
                  <img
                    className="h-auto w-[130px] xl:h-auto xl:w-[65%] object-contain fadeEffectMbl  xl:-ml-5 "
                    src={Search_RGB.src}
                    alt="Magnifying glass highlighting the ideal patient for treatment"
                  />
                  
                </div>
              </div>
              <div className="xl: w-full xl:w-3/4  xl:text-left">
                <p className="font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[20px] xl:ml-1 ">
                 Studied in <span className="  text-dark_green font-[500]"> 228 people</span> to see if it would <span className=" text-dark_green font-[500]">delay disease progression in <em className="font-[500]">ESR1</em>-mutated</span>, ER+/HER2- advanced or metastatic breast cancer.
                </p>
              </div>
            </div>
 
            <p className="text-[18px] xl:text-[18px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] xl:mt-2 xl:mb-10">
              ORSERDU was compared with common hormone therapies such as <span className="text-[#006937]  font-medium">exemestane, anastrozole, letrozole, and fulvestrant</span>. No one was given a placebo. ORSERDU was given alone and not in combination with any other therapies.
            </p>
               <div className="flex flex-col xl:flex-row items-center xl:items-center gap-3 mb-4 mt-4 xl:mt-8">
               
              <div className="h-[120px] xl:border-r-[1px] xl:border-yellow xl:w-[15.5%] xl:flex xl:items-center">
                <div className="flex items-center xl:flex-col text-left justify-start -ml-2 xl:ml-0">
                  <p className="text-left hidden xl:block text-[#006937] font-[500] text-[20px] xxl:text-[22px] tracking-[0.18px] leading-[20px] pl-2 relative -left-4  xl:mb-2">In the clinical trial:</p>
                  <img
                    className="h-[120px] w-[40%] xl:h-auto xl:w-[65%] object-contain fadeEffectMbl -ml-2 xl:-ml-2 xl:relative xl:top-[8px]"
                    src={Clincialstudy.src}
                    alt=""
                  />
                  <p className="text-left xl:hidden text-[#006937] font-[500] text-[20px] xxl:text-[22px] tracking-[0.18px] leading-[20px] pl-2 relative -left-0 xl:-left-[10px]">In the clinical trial:</p>
 
                </div>
              </div>
              <div className="xl: w-full xl:w-3/4  xl:text-left font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[20px] xl:mt-[10.5px]">
                <ul className="list-disc ml-[16px] xl:ml-5  mb-2  marker:text-[#70C7AF] ">
                  <li><span className=" font-[300]"><span className="font-[400] text-[#006937]">100%</span> of participants had previously taken a type of treatment called a CDK4/6 inhibitor</span>.* These included treatments such as Ibrance<sup  className="text-[65%]  leading-[70%]">®</sup> (palbociclib), Kisqali<sup className="text-[65%]  leading-[70%]">®</sup> (ribociclib), and Verzenio<sup className="text-[65%]  leading-[70%]">®</sup> (abemaciclib) </li>
                </ul>
                <ul className="list-disc   ml-[16px] xl:ml-5  mb-2   marker:text-[#70C7AF]  ">
                  <li><span className="text-[#006937] font-[500]">72%</span> of participants had breast cancer that had spread to other organs such as the liver and/or lungs<sup>†</sup> </li>
                </ul>
              </div>
            </div>
            <p className="font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[16px] pb-1 xl:pb:0">
              Ibrance is a registered trademark of Pfizer Inc. Kisqali is a registered trademark of Novartis AG. Verzenio is a registered trademark owned or licensed by Eli Lilly and Company, its subsidiaries or affiliates.
            </p>
          <p className="font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[18px] mt-2 -pl-3 relative"><sup className="absolute -left-[4.5px] xl:-left-[4px] top-[9.5px] xl:top-[9.1px] xl:!text-[12px] !text-[14px] ">*</sup><span>Patients whose cancer has progressed after prior hormone therapy and CDK4/6 inhibitor treatment may have a more limited response to subsequent hormone therapies.</span></p>
          <p className="    font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[18px]   mt-0 -pl-3 relative"><sup className="absolute -left-[4px] xl:-left-[3.5px]  top-[7px] xl:top-[7.1px] xl:!text-[8px] !text-[10px] ">†</sup>Patients may have had mestastases in more than one location.</p>

           
          </div>
         
          {/* <p className="  hidden xl:block  xl:pt-8 font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[18px]  "><sup>*</sup>Patients whose cancer has progressed after prior hormone therapy and CDK4/6 inhibitor treatment may have a more limited response to subsequent hormone therapies.</p>
          <p className="  hidden xl:block  xl:pb-0 font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[18px]  "><sup>†</sup>Patients may have had mestastases in more than one location.</p> */}
 
          <div className=" pt-6 xl:py-[25px] pl-6 pr-6  xl:rounded-[30px] xl:px-[34px] ">
 
            <p className="font-[300] text-[30px] leading-[32px] xl:text-[36px] tracking-[0.36px] xl:leading-[36px] ">ORSERDU<span className=" text-dark_green font-[600]"> in the real world</span></p>
            <p className="font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[20px] mt-2">
              ORSERDU was the first FDA-approved oral SERD for people with your type of cancer.<sup>‡</sup> ORSERDU has real-world data in more than 1,000 patients.
              </p>
              
                 <div className="flex flex-col xl:flex-row items-center xl:items-center gap-3 mb-4 mt-4 xl:mt-8">
               
              <div className="h-[100px] xl:border-r-[1px] xl:border-yellow xl:w-[15.5%] xl:flex xl:items-center">
                <div className="flex items-center xl:flex-col text-left justify-start -ml-[20px] xl:ml-0">
                  <p className="text-left hidden xl:block text-[#006937] font-[500] text-[20px] xxl:text-[22px] tracking-[0.18px] leading-[20px] pl-2 relative -left-4  xl:mb-2">Real-world data:</p>
                  <img
                    className="h-[100px] w-[40%] xl:h-auto xl:w-[65%] object-contain fadeEffectMbl -ml-2 xl:-ml-[22px]"
                    src={thumUp.src}
                    alt=""
                  />
                  <p className="text-left xl:hidden text-[#006937] font-[500] text-[20px] xxl:text-[22px] tracking-[0.18px] leading-[20px] pl-[13px] xl:pl-2 relative left-0 xl:-left-[10px]">Real-world data:</p>
 
                </div>
              </div>
              <div className="xl: w-full xl:w-3/4  xl:text-left font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[20px] xl:mt-[9px] ">
                <ul className="list-disc xl:ml-5 ml-[16px]  mb-2  marker:text-[#70C7AF] ">
<li>Show how <span className="text-[#006937] font-[500]">FDA-approved medicines work </span>outside of a clinical trial using information from real-world clinical practices
                    </li>                </ul>
                <ul className="list-disc   ml-[16px] mb-2 xl:ml-5    marker:text-[#70C7AF]  ">
                    <li>Show how <span className="text-[#006937] font-[500]">ORSERDU worked</span> outside of the clinical trial<sup className="relative !text-[10px] -top-2">§</sup></li>

                 </ul>
              </div>
            </div>
             
            <p className="mt-4 font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[19px]">Real-world data represent insights from everyday use. The information isn’t intended to provide a final conclusion about a medicine’s effectiveness, or to be directly compared to findings from a clinical trial.</p>
            <p className="mt-4 font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[16px] -pl-3 relative"><sup className="absolute xl:-left-[3.5px] -left-[4.5px]  top-[6.5px] xl:top-[6px] !text-[10px]  xl:!text-[8px] ">‡</sup>ORSERDU was approved by the FDA in January 2023. More than 16,000 patients in the US with <i className="font-[300]">ESR1</i>-mutated metastatic breast cancer have been treated with ORSERDU. 
            </p>
             <p className=" font-[300] text-[14px] tracking-[0.01em] xl:tracking-[0.14px] leading-[16px] -pl-3 relative"> <sup className="absolute  -left-[4.5px] xl:-left-[3.8px] top-[6.1px] xl:top-[6px] !text-[10px]  xl:!text-[8px] ">§</sup>Data come from different sources such as insurance claims for prescription medicines. Patient names are removed to protect privacy.
            </p>
            </div>
        </div>
      </HeroContainer>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
    </>
  );
};
 
export default Orserdu_results;