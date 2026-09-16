"use client";

import React, { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import DropTube from "../../assets/images/understanding/01_DropTube_new.png";
import searchGlass from "../../assets/images/understanding/01_searchGlass2_new.png";
import CheckSuitCase from "../../assets/images/understanding/CheckSuitCase.png";
import Telephone from "../../assets/images/understanding/Telephone.png";
import Card from "@/components/Card";
import PreLoader from "@/components/loaders/Preloader";
import stethoscope from "../../assets/images/understanding/mutation_new.png";
import microscope from "../../assets/images/understanding/microscope.png";
import check from "../../assets/images/understanding/check.png";
import blood from "../../assets/images/understanding/Blood.png";
import scope from "../../assets/images/understanding/scope.png";

import InfoIcon from "../../assets/images/helpful/InfoIcon.png";

const HeroContainer = dynamic(() => import("@/components/wrappers/HeroContainer"), {
  ssr: false,
  loading: () => <PreLoader />,
});

const Testing = () => {
  const { isMobile } = useContext(ResponsiveContext);

  const header = (
    <p>
      
      <i style={{ fontWeight: 300 }}>ESR1</i>, estrogen receptor 1. 
    </p>
  );

  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Banner_same_size/Testing_mobile_08.webp";
    }
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/7_7_2026/Testing_7_26.webp";
  }, [isMobile]);

  return (
    <>
      <h1 className="sr-only">ESR1m testing | ORSERDU® (elacestrant)</h1>
      <h2 className="sr-only">How ESR1 Mutation Testing Works</h2>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      <HeroContainer
        header={header}
        img={imageUrl}
        navLink={"/orserdu-results"}
        navText={"Results"} 
        
        notActual={"not actual patients "}
      >
        {isMobile && (
          <div className="p-6 text-[22px] leading-[24px] shadow-md xl:shadow-none">
            <p className="text-[30px] font-thin leading-[32px] text-dark_green  mb-4">
              
              <strong className="font-[600]">Getting tested </strong><span className="text-[#000000]">for <i className="font-light">ESR1</i> mutations</span>
            </p>
          <Card
                  img={scope.src}
                  mobileTop="0px"
                mobileLeft="-15px"
                  alt="Blood sample in test tube"
                  title="<span style='font-size:22px'>To determine <i class='font-medium'>ESR1</i> mutation status, ask about a blood test</span>"
                  body="A blood test ordered by your doctor can help determine whether an <i class='font-light'>ESR1</i> mutation has occurred and provide important information for treatment decisions. Knowing your mutation status can help you and your care team make informed treatment decisions."
                  extraClass="mb-0"
                />

            {/* <h3 className="font-medium text-dark_green  mb-4 text-[20px] xl:text-[22px]">
              The median progression-free survival (mPFS) for people with <em>ESR1</em>-mutated cancer from the start of treatment was 3.8 months for ORSERDU vs 1.9 months for other commonly prescribed hormone therapies. Individual results may vary.
            </h3>
            <p className="text-black font-thin text-[18px] leading-[21px]">
         mPFS is a type of time measurement in a clinical trial. It measures the point in time when half of the people in the trial were living without their disease spreading, growing, or getting worse.
            </p> */}
          </div>
        )}

        <div>
          {/* How does testing work */}
          <div className=" mb-6 xl:rounded-3xl mt-6 xl:mt-0 shadow-md xl:shadow-none p-6 pt-0 xl:p-[34px] xl:pb-[32px] xl:pt-0 xl:rounded-3xl xl:mb-0 "  id="how-does-testing-work">
            <p className="text-dark_green text-[30px] xl:text-[36px] font-light tracking-[0.36px] leading-[32px] xl:leading-[38px] text-left no-underline mb-6">
              <strong className="font-[600]">How does testing work?</strong>
            </p>
            <div className="flex xl:flex-row flex-col xl:gap-[30px] ">
              {/* Left Section */}
              <div className="xl:w-[600px]   border-b  xl:pr-0 xl:border-b-0   pb-3 xl:pb-0   border-yellow">
                <Card
                  img={DropTube.src}
                  // mobileTop="-16px"
                  imgTop ="-8px"
                mobileLeft="-18px"
                  alt="Blood test"
                  body="<span class='text-[18px]'>Blood test results can show you and your healthcare team why: <ul class='font-light list-disc ml-[14px] leading-[20px] marker:text-list_color mt-2'><li class='mb-2'>Your disease may have progressed</li><li>Your current treatment may no longer be working</li></ul></span>"
                  extraClass="mb-8"
                />
                <Card
                  img={searchGlass.src}
                mobileLeft="-18px"
                 imgTop ="-13px"
imgSize="80px"
                  alt="Search icon"
                  title="Tissue biopsies may not capture all <em class='font-medium'>ESR1</em> mutations"
                  body="<span class='text-[18px]'><ul class='font-light list-disc ml-[14px] leading-[20px] marker:text-list_color mt-2'><li class='mb-2'>Cancer can vary in different parts of the body. A tissue biopsy only samples a single spot, which means an <i class='font-[300]'>ESR1</i> mutation might be missed</li><li>A liquid biopsy catches tiny pieces of cancer cells in your bloodstream. This gives your doctor a more complete view of your tumor and is the preferred way to find <i class='font-[300]'>ESR1</i> mutations</li></ul></span>"
                />
              </div>
                  <div className=" w-[1px] hidden xl:block self-stretch bg-yellow"></div>

              {/* Right Section */}
              <div className="xl:w-1/2 mt-6 xl:mt-0  xl:pl-[24px]">
                <p className="text-[20px] xl:text-[22px] text-dark_green font-medium leading-[22px] mb-2">
                  A blood test is fast and accurate 
                </p>
                <p className="mb-2 font-light text-[18px] leading-[20px]">
                  It offers{" "}
                  <span className="text-dark_green font-medium ">results in about 1 week</span> and 
                    finds <em  className="font-light">ESR1</em> mutations when:
                </p>
             
                <ul className="list-disc marker:text-list_color pl-[15px] flex flex-col gap-2 mb-4 leading-[20px] text-[18px] font-light">
                  <li>There’s more than one tumor in the body</li>
                  <li>The makeup of a tumor varies</li>
                  <li>The tumor is in a difficult location</li>
                  <li>The tumor changes over time</li>
                </ul>
                <p className="font-light text-[18px] leading-[20px]">
                  The test can be{" "}
                  <span className="text-dark_green font-medium">
                    done at your doctor’s office or a lab
                  </span>.
                  
                </p>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="p-6 shadow-md mt-6 pb-7 mb-6 xl:my-0 pt-0 xl:shadow-box_shadow xl:p-[34px] xl:pb-[21px] xl:rounded-3xl ">
            <p className="text-[30px] xl:text-[36px] xl:font-[300] tracking-[0.36px] mb-6 leading-[30px] xl:leading-[38px] text-dark_green">
              <strong className="font-[600]">Steps to find out</strong>{" "}
              <span className="text-black font-light">if your advanced or metastatic breast cancer has an{" "}
              <em className="font-light">ESR1</em> mutation</span>
            </p>
            <div className="grid mt-4 font-[300] xl:mt-0 grid-cols-1 xl:flex gap-[20px] xl:gap-2 xl:justify-between tracking-tight">
              <div className=" flex flex-col text-center xl:p-4 xl:flex-1 xl:relative xl:-top-[3px]">
                <img src={stethoscope.src} alt="Doctor icon" className="h-[100px] object-contain  xl:pt-0 " />
                <p className="xl:leading-[20px] leading-[20px] text-[18px]">
                  <em className="xl:font-[300] font-[300]">ESR1</em> mutations develop
                  during or after treatment 
                </p>
              </div>
                                <div className="hidden xl:block w-[1px] h-[130px] xl:relative xl:top-[4px] bg-yellow m-auto"></div>

              <div className=" flex flex-col text-center xl:p-4 xl:flex-1">
                <img src={blood.src} alt="Blood test" className="h-[100px] object-contain relative left-1 xl:left-0 " />
                <p className="xl:leading-[20px] leading-[20px] text-[18px] mt-[2px] xl:mt-0">
                  A member of your healthcare team will take a blood sample
                </p>
              </div>
                                <div className="hidden xl:block w-[1px] h-[130px] xl:relative xl:top-[4px] bg-yellow m-auto"></div>

              <div className="flex flex-col text-center xl:p-4 xl:flex-1">
                <img src={microscope.src} alt="Microscope icon" className="h-[100px] object-contain " />
                <p className="xl:leading-[20px] leading-[20px] text-[18px] -mt-[2px] xl:mt-0 ">
                  The sample will be sent to a lab to see if an{" "}
                  <i className="italic font-thin">ESR1</i> mutation is present
                </p>
              </div>
                                <div className="hidden xl:block w-[1px] h-[130px] xl:relative xl:top-[4px] bg-yellow m-auto"></div>

              <div className="flex flex-col text-center xl:p-4 xl:flex-1">
                <img src={check.src} alt="Results in about 1 week icon" className="h-[85px] xl:h-[100px] object-contain xl:-m-2  flex justify-center items-center relative right-1 xl:right-0 " />
                <p className="xl:leading-[20px] leading-[20px] text-[18px] xl:mt-4">You should get results in about 1 week</p>
              </div>
            </div>
          </div>

          {/* When should testing occur */}
          <div className="mt-6 mb-0 xl:rounded-3xl   p-6 pt-0 xl:p-[34px] xl:mt-0 xl:py-[32px] xl:pt-[28px] xl:rounded-3xl xl:mb-0" id="when-should-testing-occur">
            <p className="text-dark_green text-[30px] xl:text-[36px] font-light tracking-[0.36px] leading-[32px] xl:leading-[38px] text-left no-underline mb-6 xl:mb-3">
              <strong className="font-[600]">When should my cancer be tested?</strong>
            </p>
            <p className="font-[300] leading-[20px] mb-2 text-[18px]">
            Mutation testing is often most accurate at progression. At progression, small parts of your tumor called cells enter the bloodstream. This can make mutations, like <i className="font-light">ESR1</i>, easier for doctors to detect. Testing at progression helps your healthcare team have the most accurate picture of your cancer makeup.
            </p>
            <p className="font-light leading-[20px] text-[18px]">
              Remember, if you have a mutation but your cancer hasn’t progressed, current treatment may still be working to control the cancer.
              Talk with your healthcare team to understand your options.
            </p>
          </div>

          {/* Info callout */}
          <div className="flex items-center space-x-4 p-6 pt-0 pb-6 xl:pb-0 shadow-md xl:shadow-none rounded-md  justify-center">
            <div className="w-full xl:w-[600px]  flex items-center justify-center">
              <div className="pr-5 xl:w-[60px] w-[90px] border-r-[1px] border-yellow xl:h-[90px]">
                <img src={InfoIcon.src} alt="Exclamation mark" className="w-full h-full object-contain" />
              </div>
              <div className="w-[540px] xl:-mt-1">
                <p className="text-dark_green text-[22px] font-[500] tracking-[0.22px] ml-5 leading-[22px]">
                  If your <i className="font-[500]">ESR1</i> mutation has been identified but your cancer has not progressed, your healthcare team may recommend continuing your current treatment.
                </p>
              </div>
            </div>
          </div>

          {/* End box */}
          <div className="xl:p-[34px] p-6 pt-0 xl:shadow-box_shadow rounded-3xl mt-6 xl:mt-[32px] pb-0 xl:pb-[28px]">
            <p className=" xl:text-[36px] font-[600] w-[99%] xl:leading-[38px] leading-[32px]  text-[#006937] no-underline text-left text-[30px] ">
             <span className="font-light text-[#1A1818]">If your cancer develops an <i className="font-light">ESR1</i> mutation and has progressed,</span> ORSERDU may be the 1 for you
            </p>
            <div className="mt-6 flex xl:flex-row flex-col xl:justify-between font-light mb-6 xl:mb-0 gap-[20px]">
<div className="flex xl:flex-row flex-col items-center xl:w-[40%]  xl:-ml-[33px]">
<img
                  src={CheckSuitCase.src}
                  className="img-fluid w-[120px] -ml-[6px] xl:ml-0"
                alt="Make an appointment"
                />
<div>
<p className="leading-[20px] text-gray-700 text-[18px] mt-[4px] xl:mt-0">
                  Make an appointment to talk with your doctor about testing for an <i className="font-light">ESR1</i> mutation.
</p>
</div>
</div>
<div className="flex items-center xl:flex-row flex-col xl:w-[50%]">
<img
                  src={Telephone.src}
                  className="img-fluid w-[120px]"
                alt="Call your doctor office"
                />
<div>
<p className="leading-[20px] text-[18px] mt-[3px] xl:mt-0">
                Call your doctor’s office if you don’t hear from them within 14 days of getting tested. If your blood test detects an <i className="font-light">ESR1</i> mutation, your doctor may prescribe ORSERDU.
</p>
</div>
</div>
            </div>
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

export default Testing;
