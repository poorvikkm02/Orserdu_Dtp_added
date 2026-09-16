"use client";

import React, { useContext, useMemo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modals/Modal";
const HeroContainer = dynamic(
  () => import("@/components/wrappers/HeroContainer"),
  {
    ssr: false,
  loading:()=>{return <PreLoader/>}

  }
);

import StethoscopeImg from "../../assets/images/taking/doctoricon_desktop.png";
import darkArrow from "../../assets/images/figure/arrow-right.png";
import LightArrowImg from "../../assets/images/figure/arrow-right_Light.png";
import PrescriptionImg from "../../assets/images/taking/RXIconDesktop.png";

import { ResponsiveContext } from "@/context/ResponsiveContext";
import Pillicon from "../../assets/images/taking/Pillicon.png";
import TableWareIcon from "../../assets/images/taking/TableWareIcon.png";
import smoothscroll from "smoothscroll-polyfill";
import trafficLightIcon from "../../assets/images/taking/trafficLightIcon.png";
import img from "../../assets/images/savings/icon-message.png";
import arrowImg from "../../assets/images/figure/arrow-right.png";

import heroImage from "../../assets/Desktop/new/page5.png";
import PreLoader from "@/components/loaders/Preloader";
import noInjection from "../../assets/Desktop/noInjection.png";


const Taking_orserdu = () => {
  const { isMobile } = useContext(ResponsiveContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleLinkClick = (e, url, skipModal = false) => {
    e.preventDefault();
    if (skipModal) {
      window.open(url, '_blank');
      return;
    }
    setRedirectUrl(url);
    setIsModalOpen(true);
  };
  const handleContinue = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      window.open(redirectUrl, '_blank');
    }, 150);
  };
  const handleCancel = () => setIsModalOpen(false);

  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Taking_ORSERDU_mobile_08_14_5.webp";
    }
        return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/7_7_2026/Taking_ORSERDU_7_26.webp";

  }, [isMobile]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
    }
  }, []);

  // custom hook for mobile header
  // useNavHeader("Taking ORSERDU")
  

  return (
    <>
      <h1 className="sr-only">How to Take ORSERDU® (elacestrant): Dosage &amp; Daily Instructions</h1>
      <h2 className="sr-only">Daily Administration and Dosage Timing</h2>
      <h2 className="sr-only">Importance of Taking ORSERDU® With Food</h2>
      <h3 className="sr-only">Consistency in schedule</h3>
      <h2 className="sr-only">Guidelines for Tablets and Swallowing</h2>
      <h3 className="sr-only">Missed Dose Instructions (The 6-hour rule)</h3>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      {" "}
      <HeroContainer
        img={imageUrl}
        navLink={"/savings-and-support"}
        navText={"Savings & resources"}
        notActual={"not actual patients "}
        alt={'Taking ORSERDU® header image'}
      >
        {isMobile && (
          <div className="p-6 leading-5 shadow-md xl:shadow-none mt-2">
            <p className="leading-[32px] text-[30px] xl:text-[30px] md:text-[36px] font-[300] xl:tracking-[0.36px] xl:leading-[38px] mb-4 text-left ">
              <strong className="font-[400]  text-dark_green">Once a day,</strong> every day: ORSERDU can help treatment fit into your routine
            </p>
            <p className="leading-[24px] text-[22px] xl:text-[10px] md:text-[20px] font-semibold xl:tracking-[0.36px] xl:leading-[38px] mb-[24px] xl:mb-3 text-left text-dark_green">
              Always take it exactly as your healthcare team prescribes.
            </p>

            <div className="w-full   flex justify-center pt-1  0 xl:pt-0">
              <img
                className="h-[80px] w-[206px] object-contain"
                src={Pillicon.src}
                alt="Once-a-day pill icon"
              />
            </div>
            <p className="text-center font-thin text-[10px] leading-[10px] pb-1 xl:pb-0">
              Pill not <br  className="hidden xl:block "/> actual size.
            </p>
            <p className="text-dark_green text-[18px] pb-4 xl:pt-4 pt-[24px]">
              Take ORSERDU at about the same time each day
            </p>
            <ul className="list-disc marker:text-list_color pl-[16px] xl:pl-6 text-[18px] pb-[24px] xl:pb-4 font-thin flex flex-col gap-2 ">
              <li>
                If a dose is missed, take your
                normal dose on the following day*
              </li>
              <li>
                Do not change your dose or stop taking ORSERDU unless your
                healthcare provider tells you to
              </li>
            </ul>
            <p className="flex font-thin  text-[14px] -ml-[7px] leading-[16px] mb-[24px] xl:mb-4">
              <span>*</span>{" "}
              <span className="">
                {" "}
                If you miss a dose by more than 6 hours or vomiting occurs after taking a dose of ORSERDU, do not take another dose of ORSERDU on that day. Skip the dose and take your next dose the following day at your regularly scheduled time.
              </span>
            </p>

            <div className="w-full   flex justify-center pt-1 xl:pt-0">
              <img
                className="h-[80px] w-[206px] object-contain"
                src={TableWareIcon.src}
                alt="Taking ORSERDU® with food icon"
              />
            </div>
            <p className="text-dark_green text-[18px] pb-4 pt-[18px] xl:pt-4">
              Take ORSERDU with food
            </p>
            <ul className="list-disc marker:text-list_color pl-[16px] xl:pl-6 text-[18px] pb-4 font-thin flex flex-col gap-2 ">
              <li>This may help to reduce nausea and vomiting</li>
              <li>
                Pills should be swallowed whole. Do not chew, crush, or split
                pills
              </li>
              <li><span className="text-dark_green font-[500]">No fasting required</span></li>
            </ul>

            <div className="w-full   flex justify-center  pt-2 xl:pt-0">
              <img
                className="h-[80px] w-[206px] object-contain"
                src={trafficLightIcon.src}
                alt="ORSERDU® may be taken anywhere icon"
              />
            </div>
            <p className="text-dark_green text-[18px] pb-4 xl:pt-4 pt-[24px]">
              ORSERDU may be taken anywhere (at home or on the go)
            </p>
             <ul className="list-disc marker:text-list_color xl:pl-6 pl-[16px] text-[18px] pb-2 xl:pb-4 font-thin flex flex-col gap-2 ">
              <li>ORSERDU is available as 345-mg and 86-mg tablets</li>
              
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 xl:p-0 xl:grid-cols-2 xl:mt-1 xl:mb-0 xl:pl-[15px]">
          {/* Left Column */}
          <div className="flex  xl:border-r border-yellow border-opacity-75 shadow-md xl:shadow-none w-full p-6   xl:mt-0 xl:p-0     ">
            {!isMobile && (
              <div className="w-fit ">
                <img
                  src={StethoscopeImg.src}
                  alt="Healthcare team icon"
                  className="w-[110px] "
                />
              </div>
            )}

            <div className="xl:w-[75%]  w-full  mb-2 xl:mb-0 xl:mt-0">
              <p className=" text-[30px] leading-[32px] xl:text-[36px] font-light  xl:leading-[1.875rem] text-left mb-[24px]  pt-1 xl:pt-0 xl:mb-3">
                <strong className="text-dark_green font-[600]">Before </strong>you start treatment
              </p>
              {isMobile && (
                <div className="w-full   flex justify-center ">
                  <img
                    className="h-[90px] w-[206px] object-contain mb-4 xl:mb-0"
                    src={StethoscopeImg.src}
                    alt="Healthcare team icon"
                  />
                </div>
              )}

              <p className=" text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] text-left text-black mb-3">
                Before you start taking ORSERDU, talk with your healthcare team
                about any questions or concerns you may have.
              </p>
              <p className="text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] text-left text-black   mb-3">
                It’s also important to read the <span className="font-[600]">Patient Information and
                Important Safety Information </span>about ORSERDU.
              </p>
              <a
                href="https://rxmenarinistemline.com/United%20States%20Patient%20Package%20Insert%20Approved.pdf"
              target="_blank"
                className="flex w-[full] rounded-full border-2 text-dark_green border-yellow h-[75px] justify-between p-6 items-center mb-3 pr-2  mt-4"
              >
                <p className="text-[20px] w-[80%] xl:text-[24px] font-medium tracking-[0.2px] leading-[22px] text-left">
                  View the Patient
                  {/* <br className="hidden xl:block" /> */}
                  <span> Information</span>
                </p>
                <div className="w-[52px] h-[52px] rounded-full box_shadow p-3 ">
                  <img
                    src={darkArrow.src}
                    alt=""
                    className="w-full h-full object-contain   "
                  />
                </div>
              </a>
              <a
                href="#isi"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== "undefined") {
                    const target = document.querySelector("#isi");
                    if (target) {
                      const offset = window.innerHeight * 0.2;
                      const top =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }
                }}
                className="flex w-full rounded-full border-2 text-dark_green border-yellow h-[75px] justify-between p-6 items-center pr-2"
              >
                <p className="text-[20px] w-[65%] xl:w-[80%] xl:text-[24px]  font-medium tracking-[0.2px] leading-[22px] text-left ">
                 View the Important Safety Information
                  {/* <br className="hidden xl:block" /> */}
              
                </p>
                <div className="w-[52px] h-[52px] rounded-full box_shadow  p-3 ">
                  <img
                    src={LightArrowImg.src}
                    alt=""
                    className="w-full h-full object-contain   "
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-start xl:ml-8   xl:p-0 ">
            {!isMobile && (
              <div className="w-[15%] xl:w-fit  ">
                <img
                  src={PrescriptionImg.src}
                  alt="Prescription icon"
                  className="w-[100px] "
                />
              </div>
            )}

            <div className="w-full p-6 xl:pt-0 xl:w-[75%] xl:-mt-1 xl:pl-1 shadow-md xl:shadow-none ">
              <p className="text-[30px] leading-[1.875rem] xl:text-[36px] font-light tracking-[0.36px] xl:leading-[38px] text-left mb-[24px] pt-1 xl:pt-0  xl:mb-3">
                <span className="font-[600] text-dark_green">After </span>you start treatment
              </p>
              {isMobile && (
                <div className="w-full   flex justify-center pb-1 xl:pb-0 ">
                  <img
                    className="h-[90px] w-[206px] object-contain xl:mb-0 mb-4"
                    src={PrescriptionImg.src}
                    alt="Prescription icon"
                  />
                </div>
              )}
              <p className=" text-[20px] xl:text-[16px] xxl:text-[18px] font-semibold tracking-[0.18px] leading-[22px] text-left text-dark_green  mb-3">
                It’s important to take ORSERDU as directed. Do not stop taking it unless your healthcare provider tells you to.
              </p>
              <p className=" text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] text-left text-black ">
                Let your doctor or healthcare team know if you experience any
                side effects. Your healthcare provider may decrease your dose, temporarily stop, or completely stop treatment with ORSERDU if you develop certain side effects.
              </p>
               <p className=" text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] text-left text-black xl:mb-3 mt-3">
                Tell your healthcare team about all the medicines
                you take, including prescription and over-the-counter medicines,
                vitamins, and herbal supplements. ORSERDU and other medicines
                may affect each other, causing side effects.
              </p>
              <p className="text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[22px] mt-2 xl:mt-0 pb-1 xl:pb-0">You may report side effects to the FDA at <span className='text-nowrap'>1-800-FDA-1088</span> or visit <a href="https://www.fda.gov/medwatch" onClick={(e) => handleLinkClick(e, 'https://www.fda.gov/medwatch')} className="underline cursor-pointer">www.fda.gov/medwatch</a>.</p>
              
            </div>
          </div>
        </div>
        {/*  */}
         <div className="fbg-gray-50 mt-6   md:m-2 xl:m-0  shadow-none xl:shadow-box_shadow rounded-[1.8rem] flex flex-col pl-4 pr-4  xl:flex-row justify-center items-center xl:mt-[32px] p-4 xl:pt-[20px] pt-2 mb-[50px] xl:mb-0">
              <img
                src={noInjection.src}
                className="w-[180px] h-auto fadeEffectMbl   "
                alt="ORSERDU® may be taken anywhere icon"
              />
              <p className=" text-[20px] xl:text-[22px] font-[500] tracking-[0.18px] leading-[22px] text-center mt-[10px]   xl:text-left text-dark_green pt-2 xl:mt-0 xl:pt-0">No injections, no infusions—ORSERDU is not a chemotherapy.<br/> It's a targeted hormone therapy in one daily pill.
              </p>
            </div>
            <div id="resources" className='flex xl:w-auto w-100% xl:pl-[28px] mt-[32px]'>
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


            
         

      </HeroContainer>
      <Modal isOpen={isModalOpen} onClose={handleCancel} onContinue={handleContinue} />
    </>
  );
};

export default Taking_orserdu;
 