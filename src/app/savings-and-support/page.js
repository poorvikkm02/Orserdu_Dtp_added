"use client";

import React, { useContext, useMemo } from 'react';
import dynamic from "next/dynamic";
import img from "../../assets/images/savings/icon-message.png";
import arrowImg from "../../assets/images/figure/arrow-right.png";
import { ResponsiveContext } from '@/context/ResponsiveContext';
import QAICON from "../../assets/images/helpful/QAIcon.png";
import PreLoader from "@/components/loaders/Preloader";
import AccordionFAQ from "@/components/AccordionFAQ";
import { faqSections } from "./faqData";
import { TestingQA } from "./testing"; 
const HeroContainer = dynamic(() => import("@/components/wrappers/HeroContainer"), {
  ssr: false,
  loading: () => <PreLoader/>
});


const Saving_and_Support = () => {
  // import image from aws
  const handImg = "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/icon-hand.png";
  const financialImg = "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/icon-finantial.png";
  const bookImg = "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/icon-book.png";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Drug",
    "@id": "Drug",
    activeIngredient: "elacestrant",
    administrationRoute: "Oral",
    dosageForm: "Tablet",
    foodWarning: "Take with food",
    mechanismOfAction: "elacestrant",
    name: "Orserdu",
    nonProprietaryName: "elacestrant",
    description: "View Stemline ARC® program support, reimbursement assistance, and ER+/HER2 mBC resources to help you throughout your ORSERDU™ treatment.",
    alternateName: "elacestrant",
    drugUnit: "345 mg tablet",
    mainEntityOfPage: "https://orserdu.com/savings-and-support/",
    proprietaryName: "Orserdu",
    pregnancyWarning: "If you are pregnant or plan to become pregnant. ORSERDU can harm your unborn baby",
  };

  const { isMobile } = useContext(ResponsiveContext);
  
  // header sending through 
  const header = (
    <p>
      ER+, estrogen receptor-positive; <i style={{ fontWeight: 300 }}>ESR1</i>, estrogen receptor 1; 
      HER2-, human epidermal growth factor receptor 2-negative; mBC, metastatic breast cancer; mPFS, median progression-free survival.
    </p>
  );

  // sending image according responsive
  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Savings_and_support_mobile_14_5.webp";
    } else {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/Savings_and_support61.webp";
    }
  }, [isMobile]);

  return (
    <>
      <h1 className="sr-only">ORSERDU® Savings and Support Options</h1>
      <h2 className="sr-only">Support for Uninsured and Underinsured Patients</h2>
      <h3 className="sr-only">Stemline ARC Patient Assistance Program (PAP)</h3>
      <h2 className="sr-only">Personalized Assistance With Stemline ARC®</h2>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      <HeroContainer 
        header={header} 
        img={imageUrl} 
        navLink={"/data"} 
        navText={"Health Data"} 
        notActual={"not actual patients"}
        alt={'Savings and support header image'}
      >
        {isMobile && (
          <div className='p-6 pb-0 xl:p-7 shadow-md xl:shadow-none'>
            <p className='text-[30px] xl:text-[36px] font-[300] mb-3 xl:font-light leading-[32px] xl:leading-[38px] text-left text-dark_green'>
              <strong>Get support</strong> <span className='text-black'>throughout treatment with Stemline ARC<sup className='sup-custom'>®</sup></span>
            </p>
            <p className='text-[22px] xl:text-[36px] font-[500] mb-6 xl:font-light leading-[24px] xl:leading-[38px] text-left text-dark_green'>
              Stemline ARC provides access support, reimbursement assistance, and educational resources to help you focus on your health throughout treatment, including:
            </p>
            
            <div className='w-full p-4 pl-0 py-0 pr-0 xl:pr-4 xl:py-4 flex flex-col items-center justify-center'>
              <img className='h-[100px] w-[206px] mb-3 object-contain pt-2 xl:pt-0' src={handImg} alt="Understanding insurance icon"/>
              <p className='text-center w-full font-[300] text-[18px] leading-[20px] xl:leading-6'>Understanding and navigating your&nbsp;insurance</p>
            </div>
            
            <div className='w-full p-4 pl-0 xl:pb-4 pb-0 pr-0 xl:pr-4  flex flex-col items-center justify-center'>
              <img className='h-[100px] w-[206px] mb-4 object-contain  pt-3 xl:pt-0' src={financialImg} alt="Financial assistance program icon"/>
              <p className='text-center w-full font-[300] text-[18px] leading-[20px] xl:leading-6'>Financial assistance programs and options for eligible&nbsp;patients</p>
            </div>
            
            <div className='w-full p-4 pl-0 flex pr-0 xl:pr-4 flex-col items-center justify-center'>
              <img className='h-[100px] w-[100px] ml-2 xl:ml-0 xl:w-[206px] mb-4 object-contain   pt-2 xl:pt-0' src={bookImg} alt="Educational resources icon"/>
              <p className='text-center w-full font-[300] text-[18px] leading-[20px] xl:leading-6'>
                Educational resources for you and your healthcare team to help you access treatment with ORSERDU
              </p>
            </div>
            
            <p className='text-[20px] xl:text-[36px] font-[500] pb-7 xl:pb-0 xl:font-light leading-[22px] xl:leading-[38px] text-left text-dark_green'>
              It’s the ORSERDU team’s goal to create tools and resources that may help you have a positive experience while being treated for advanced or metastatic breast cancer with an <i className='font-[500] xl:font-thin'>ESR1</i> mutation.
            </p>
          </div>
        )}

        <div id="resources" className='flex xl:w-auto w-100% xl:pl-[28px]'>
          {!isMobile && (
            <div className='w-auto xl:w-[120px] flex justify-end xl:justify-start relative xl:-left-[0px] xl:-top-2'>
              <img className='h-[80px] w-[120px] object-cover' src={img.src} alt="Chat icon"/>
            </div>
          )}
          
          <div className='w-full p-6 pb-0 xl:p-7 xl:pt-0 xl:pl-0  shadow-md xl:shadow-none'>
            <p className='text-[30px] xl:text-[36px] font-[300] xl:font-light leading-[32px] xl:leading-[38px] text-left text-dark_green'>
              <strong className='font-semibold'>Stemline ARC Patient Advocates</strong> <span className='text-black'>provide a single point of contact</span>
            </p>
            
            <p className='mt-4 xl:mt-2 mb-2 text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] text-[#000000] text-left'>
             Stemline ARC Patient Advocates are here to provide ongoing support, connect you to helpful resources, and answer questions during your treatment. It’s important to remember that support from Stemline ARC Patient Advocates is not intended to replace discussions between you and your healthcare team. Patient Advocates do not provide medical advice.
            </p>
            
            {isMobile && (
              <div className='w-full p-4 xl:pt-4 pt-0 flex justify-center  ml-4'>
                <img className='h-[100px]  w-[206px] object-contain ' src={img.src} alt="Chat icon"/>
              </div>
            )}
            
            <p className='mb-4 text-[20px] xl:mt-[20px] xl:mb-2  xl:text-[22px] font-[300] leading-[20px] xl:leading-[24px] text-dark_green text-left'>
              <strong>Here are some questions Stemline ARC Patient Advocates can help answer:</strong>
            </p>
            
            <ul className='text-[18px] leading-[20px] w-[90%] xl:w-full xl:text-[18px] xxl:text-[18px] ml-[16px] xl:ml-[18px] mb-8 font-light tracking-[0.09px] xl:mb-[30px]  text-[#000000] text-left list-disc marker:text-mint flex flex-col gap-3'>
              <li>How can I get financial assistance during my treatment?</li>
              <li>Will my insurance cover ORSERDU?</li>
              <li>Where can I fill my prescription for ORSERDU?</li>
              <li>Where can I learn more about ER+/HER2- advanced or metastatic breast cancer?</li>
            </ul>
            
            <a 
              href="https://stemlinearc.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex w-full md:w-[630px] xl:h-[58px] rounded-full border-2 border-yellow justify-between items-center p-2 xl:p-4 m-auto mb-8 xl:mb-auto xl:relative xl:-left-[5.1%]'
            >
              <p className='text-[20px] leading-[22px] w-2/3 xl:w-[90%] xl:text-[24px] font-medium tracking-[0.22px] xl:leading-[24px] text-[#006937] text-left ml-4 xl:ml-0 pl-2'>
                Enroll in Stemline ARC today. Visit stemlineARC.com
              </p>
              <div className='w-[42px] h-[42px] xl:w-[38px] xl:h-[38px] rounded-full box_shadow flex justify-center items-center'>
                <img 
                  src={arrowImg.src} 
                  className='xl:w-full h-full object-contain p-2' 
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        {/* ── FAQ Accordion ─────────────────────────────────────────────── */}
        <div id="faq" className='bg-white xl:rounded-[1.7rem] shadow-md xl:shadow-box_shadow mx-0 xl:mx-0 xl:mt-6 mb-2 xl:m-0 xl:mb-1 p-6 xl:px-[34px] xl:py-8'>
          <p className='text-[30px] xl:text-[36px] font-semibold text-dark_green leading-[32px] xl:leading-[38px]  mb-6'>
            Frequently asked questions about ORSERDU
          </p>
          <p className='text-[18x] font-light text-gray-700 leading-[20px] mb-6'>
            ORSERDU is a prescription medicine for postmenopausal women and adult men with <em className='font-light'>ESR1</em>-mutated, ER+/HER2- advanced or metastatic breast cancer whose disease has progressed on endocrine therapy.
          </p>
          <AccordionFAQ sections={faqSections} />
        </div>
          <div className="bg-white xl:p-0 mb-0 ">
         <div className=' shadow-md xl:shadow-none xl:rounded-[1.7rem]  p-6 pt-4 pb-0  xl:pt-0 xl:px-[34px]'> <div className="h-auto  xl:h-auto xl:p-3 xxl:p-6 pt-0  xl:pb-0 xxl:pb-0 xl:pl-0 xxl:pl-0   pb-0 xl:px-0">
            <p className="leading-9 text-[30px] xl:text-[30px] xl:text-[36px] font-semibold xl:tracking-[0.36px] xl:leading-[38px] mb-4 text-left text-dark_green">
              Additional resources
            </p>
            <div className="flex xl:flex-row flex-col items-center justify-between h-full xl:gap-4 xl:relative xl:-left-[18px]">
              <div className="xl:w-[120px] w-full flex justify-start">
                <img
                  src={QAICON.src}
                  alt=""
                  className="h-[100px] w-[135px] m-auto  xl:h-full xl:w-full object-contain relative -left-[3px] xl:left-0  xl:mb-0 mb-2"
                />
              </div>
                  <div className="hidden xl:block w-[1px]  relative self-stretch bg-yellow"></div>

              <div className="font-light text-[18px] w-full mt-0 xl:mt-0 xl:text-[14px] xl:ml-3 xxl:text-[18px] leading-[22px] tracking-[0.18px]">
                <p className='font-medium text-dark_green mb-1 text-[22px] leading-[24px] xl:mb-2 mb-2'>The right support from your healthcare team can mean everything when treating advanced or metastatic breast cancer</p>
                <p className="text-gray-700">
                  You play an important role in your care. Take part in your treatment decisions. Speak openly and honestly with your healthcare team so they understand your goals and preferences. Knowing what to expect and speaking up will help you get the most out of your treatment experience with ORSERDU.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-6 xl:mt-0  xl:p-[30px]  pb-0 pt-0 xl:pl-0 xxl:pl-0 ">
            <p className="text-[20px] xl:text-[22px] font-[500] leading-6 tracking-[0.22px] text-dark_green mb-5 xl:mb-3">
              Here are some questions you can ask your healthcare team:
            </p>
            <div className="flex flex-col xl:flex-row gap-[6px] xl:gap-4 text-[18px] xl:text-[18px] xxl:text-[18px] font-light justify-between">
              <div className="w-full xl:w-1/2 leading-[22px]">
                <ul className="list-disc ml-[16px] xl:ml-[18px] flex flex-col gap-[6px] xl:gap-2 xl:tracking-[0.09px] leading-[22px] marker:text-mint">
                  <li>Why is it important to stay on my current treatment if my cancer hasn't progressed?</li>
                  <li>What are the risks for me if I prematurely change treatment?</li>
                  <li>Is there anything more I should know about <em className="font-light">ESR1</em> mutations?</li>
                  <li>How long can I expect to take ORSERDU?</li>
                  <li>What kind of results can I expect from ORSERDU?</li>
                </ul>
              </div>
              <div className="w-full xl:w-1/2 leading-[22px] mb-6 xl:mb-0">
                <ul className="list-disc ml-[16px] xl:ml-[18px] flex flex-col gap-[6px] xl:gap-2 xl:tracking-[0.09px] xl:leading-[24px] marker:text-mint">
                  <li>How will I know if ORSERDU is the right treatment for me?</li>
                  <li>How should I track my treatment experience?</li>
                  <li>How often will I need to come into the clinic for any type of monitoring or testing?</li>
                  <li>When should I contact my doctor or nurse?</li>
                  <li>What should I know or do before my next office visit?</li>
                </ul>
              </div>
            </div>
          </div></div>

          <div className="mb-0 bg-gray-50 xl:rounded-[1.7rem]  p-6 pt-5  xl:pl-[34px] xl:pb-[30px]  xl:shadow-box_shadow ">
            <div className=' xl:p-3 xxl:p-6 pt-0 pb-0 xl:pt-0 xxl:pt-0 xl:pb-0 xxl:pb-0 xl:pl-0 xxl:pl-0'><p className="text-[30px] xl:text-[36px] font-[600]  text-dark_green">
              Additional tips:
            </p>
            <ul className="list-disc leading-[20px] ml-[16px] xl:pl-0 text-[18px] xl:text-[18px] xxl:text-[18px] font-[300] mt-3 gap-2 flex flex-col xl:mt-0 marker:text-mint">
              <li>
               If possible, take a family member or friend to your appointments for support
              </li>
              <li>
            Come prepared to your appointments: take notes and ask questions
              </li>
              <li>
                Ask your healthcare team members to repeat or write down
                information
              </li>
              <li>
                Before your next appointment, write down any changes to your
                overall health, treatment side effects you are experiencing,
                and/or changes in your daily routine
              </li>
            </ul>
            <p className="mt-3 font-[300] text-[18px] xl:text-[18px] xxl:text-[18px] leading-[20px] tracking-[0.18px]">
              Take ORSERDU every day as directed. If you experience any side effects, let your doctor or healthcare team know. They can help you manage certain side effects or provide other advice to help ensure you receive appropriate treatment.
            </p></div>
          </div>

       
        </div>
        <TestingQA />
      </HeroContainer>
      
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
    </>
  );
};

export default Saving_and_Support;