"use client";
import React, { useContext, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
// images
import Nearly_in_graphic from "../../assets/images/understanding/Nearly_in_graphic-Desktop_4.png";
import BottleInjection from "../../assets/images/understanding/cross.png";
import stethoscope from "../../assets/images/understanding/stethoscope.png";
import microscope from "../../assets/images/understanding/microscope.png";
import check from "../../assets/images/understanding/check.png";
import blood from "../../assets/images/understanding/Blood.png";
import BloodStream from "../../assets/images/understanding/tick_old.png";
import bloodstream2 from "../../assets/images/understanding/mutation_icon_new_up.png";
import user from "../../assets/images/understanding/user.png";
import ticon from "../../assets/images/understanding/3place.png";

import { ResponsiveContext } from "@/context/ResponsiveContext";
import Card from "@/components/Card";
import UpdatedCard from "@/components/UpdatedCard";

import PreLoader from "@/components/loaders/Preloader";
const HeroContainer = dynamic(() => import("@/components/wrappers/HeroContainer"), {
  ssr: false,
  loading: () => <PreLoader />
});

const Understanding_esr1_mutations = () => {
  const { isMobile } = useContext(ResponsiveContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Banner_same_size/Understanding_mobile_08+.webp";
    }
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/21-07-2026/understading_21_07.png";
  }, [isMobile]);

  const header = (
    <p>
      CDK4/6, cyclin-dependent kinase 4/6;
  ER+, estrogen receptor-positive;
      <em className="font-thin"> ESR1</em>, estrogen receptor 1;  HER2-, human
      epidermal growth factor receptor 2-negative.
    </p>
  );

  return (
    <>
      <h1 className="sr-only">What Is an ESR1 Mutation in Metastatic Breast Cancer?</h1>
      <h2 className="sr-only">Why Does Hormone Therapy Stop Working?</h2>
      <h2 className="sr-only">How to Test for ESR1 Mutations?</h2>
      <h2 className="sr-only">Treatment Options for ESR1-Mutated Metastatic Breast Cancer</h2>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      <HeroContainer
        img={imageUrl}
        navLink={"/testing"}
        navText={"Testing for <i class='font-semibold'>ESR1</i> mutations"}
        header={header}
        alt={"Understanding ESR1 mutations header"}
        notActual={"not an actual patients "}
      >
        {/* only mobile */}
        {isMobile && (
          <div className="p-6 pb-6 text-dark_green shadow-md xl:shadow-none">
            <p className="text-[30px] font-thin mb-6 leading-[2rem]">
           
              <strong className="font-[600]">
      When breast cancer changes, 
              </strong>
             <span className="text-black"> understand your options </span>
            </p>
            <div className="flex items-center gap-[2rem]">
              <img
                src="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/icon.png"
                className="max-w-[3.3rem]"
                alt="What is esr1 mutation explanation button"
              />
              <p className="font-[500] w-2/3 text-[22px] leading-[22px] pl-[4px] ">
               What mutations, like <i className="font-[500]">ESR1</i>, can mean for treatment
              </p>
            </div>
            <p className="text-[18px] font-thin leading-[20px] text-black mb-[1rem] mt-[1rem]">
             If your advanced or metastatic breast cancer changes, understanding what has changed, and why, may help you and your doctor determine what comes next. Mutations—like <i className="font-light">ESR1</i> mutations—are one way cancer may change over time. <i className="font-light">ESR1</i> mutations are common and can develop either during or after treatment with hormone therapy.
            </p>
            <p className="text-[18px] font-thin leading-[20px] text-black  mt-[1rem]">
            A mutation isn’t the same thing as progression. <span className="text-dark_green  font-medium">If your breast cancer has mutated, it may not have progressed.</span> Knowing the difference can help you and your healthcare team while making important decisions in your treatment.
            </p>
          </div>
        )}

        <div className="text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-wide leading-6 text-left">
          <div className="mt-2 xl:-mt-2">
            <section className="">
              <div className="xl:mx-[34px] shadow-md xl:shadow-none p-6 pt-0 mt-6 xl:p-0 xl:mt-[7px]" id="what-you-should-know">
                <p className=" text-[30px] xl:text-[36px] font-light tracking-[0.36px] leading-[32px] xl:leading-[38px] text-green-900  text-left no-underline xl:mb-4">
                  What are <strong className=" text-dark_green font-[600]">mutations?</strong>
                </p>
                <div>
                  <UpdatedCard
                    imgTop="-5px"
                    imgLeft="-5px"
                    mobileLeft="-15px"
                    img={ticon.src}
                    alt="Mutation icon"
                    title="A mutation is a change in your cancer makeup. These changes can affect how the cancer behaves and which treatments may work best, even though it is still the same type of cancer."
                    body="<div>
                    <div class='mb-2'><p class='text-[18px] xl:text-[22px] font-medium leading-[24px] text-dark_green mb-1'>When do they happen?</p><p>Because cancer can change over time, mutations can happen at different times. They can be found at diagnosis, or they can develop later as cancer cells change.</p></div>
                    <div><p class='text-[18px] xl:text-[22px] font-medium leading-[24px] text-dark_green mb-1'>Why are they important?</p><p>While a change in tumor makeup may sound scary, mutations give your doctors important clues about your cancer. They can act as hints to show which treatments may be right for your cancer.</p></div>
                    </div>"
                    extraClass="mt-[18px] xl:mt-[13px]"
                  />
                </div>
              </div>

              {/* Subcard Section */}
              <div className="mt-6 shadow-md xl:shadow-box_shadow p-6 pt-0 xl:p-[34px] xl:mt-[32px]  xl:rounded-3xl">
                <p className="text-[30px] leading-[30px] xl:text-[36px] mb-4 font-light tracking-[0.36px] xl:mb-6 xl:leading-[38px] text-left text-dark_green">
                  <strong className="font-[600]">Understanding the difference</strong> <span className="text-[#1A1818]">between a mutation and progression</span>
                </p>

                <Card
                imgTop="-10px" 
                      imgLeft="-3px"
                // mobileTop="-16px"
                mobileLeft="-15px"
                  img={BottleInjection.src}
                  alt="Medication bottle and syringe"
                  title="A mutation means your cancer has changed—but that doesn’t mean your cancer has progressed"
                  body="<p class='mb-2'>When mutations develop during treatment, it means the cancer is changing its makeup to get around treatment. But this does not mean the cancer is spreading or getting worse.</p><p>Current treatment may still be working to control the cancer—and it may keep working for some time. Your doctors may also use information from scans to determine if the cancer is progressing and in need of a treatment change.</p>"
                  extraClass=" mb-4 xl:mb-6 "
                />

                <Card
                imgTop="-10px" 
                imgLeft="-3px"
                // mobileTop="-16px"
                mobileLeft="-14.5px"
                  img={BloodStream.src}
                  alt="Results in about 1 week icon"
                  title="If your current treatment is still working, your healthcare team may recommend continuing it"
                  body="Understanding your cancer’s mutation status can help you and your doctor to plan the next step with confidence. Talk to your healthcare team about your options and make a plan together."
                />
              </div>

              <div className="mt-6 xl:ml-[34px]  p-6 pb-2 pt-0  xl:p-0 xl:mt-[30px]" id="testingEsr1">
                <p className="text-[30px] xl:text-[36px] font-light tracking-[0.36px] leading-[32px] xl:leading-[38px] text-left xl:-mb-3">
                  What is an{" "}
                  <strong className=" text-dark_green font-[600]">
                    <em className="font-[600]" >ESR1</em> mutation?
                  </strong>
                </p>
                <div className="flex flex-col xl:flex-row xl:gap-6 items-start mt-6 xl:my-[40px]">
                  {/* left - image */}
                  <div className="flex-shrink-0 flex flex-col xl:justify-center xl:self-stretch">
                    <div className="flex gap-4  items-center xl:items-start mb-2 xl:mb-0  xl:mt-[8px] ">
                      <img src={Nearly_in_graphic.src} alt="Nearly 1 out of 2 people with ER+/HER2- metastatic breast cancer may develop an ESR1 mutation 
" className="w-[140px] -ml-[4px] xl:-ml-[6px] xl:w-[190px] object-contain  " />
                      <p className="xl:hidden font-semibold text-dark_green text-[20px] xl:text-[18px] leading-[20px] xl:leading-[22px] flex-1  relative top-1 xl:top-0">
                        If your cancer has this mutation, you are not alone
                      </p>
                    </div>
                    <div className="xl:hidden w-full h-[1px] bg-yellow mt-3 mb-6"></div>
                  </div>
                  {/* divider */}
                  <div className="hidden xl:block w-[1px] self-stretch bg-yellow"></div>
                  {/* right */}
                  <div className="flex-1 flex flex-col gap-4 w-full ">
                    {/* top */}
                    <div className="flex flex-col gap-3">
                      <p className="text-dark_green font-semibold text-[20px] xl:text-[22x] leading-[22px] hidden xl:block">
                        If your cancer has this mutation, you are not alone
                      </p>
               
                      <p className="font-light leading-[20px] ">
                        Nearly <span className="text-dark_green font-medium">1 out of 2 </span> people with ER+/HER2- advanced or metastatic breast cancer may develop an <em className="font-light">ESR1</em> mutation. These mutations are a way for cancer cells to try and get around treatment so they can continue growing.
                      </p>
                     

                      <p className="font-light leading-[20px]">
                        In ER+/HER2- advanced or metastatic breast cancer, the first treatment for most people is a hormone therapy taken alone or in combination with a CDK4/6 inhibitor.
                      </p>
                    </div>
                    {/* bottom - two columns */}
                    <div className="flex flex-col xl:flex-row xl:justify-between gap-0 xxl:w-[900px]">
                      {/* left list */}
                      <div className=" xxl:w-[390px]  ">
                        <p className="font-semibold mb-2 text-dark_green text-[20px] xl:text-[22x]">Some common hormone therapies include:</p>
                        <ul className="list-disc pl-[16px]  grid grid-cols-1 xl:grid-cols-2 gap-1 text-[18px] marker:text-[#6bcdb2]">
                          <li>exemestane</li>
                         
                          <li className="xl:list-item hidden">letrozole</li>
                           <li>anastrozole</li>
                          <li className="xl:hidden  list-item">letrozole</li>

                          <li>fulvestrant</li>
                        </ul>
                      </div>
                      {/* divider */}
                      <div className="hidden xl:block w-[1px] self-stretch  bg-yellow mx-2"></div>
                      {/* right list */}
                      <div className=" xxl:w-[390px] mt-4 xl:mt-0">
                        <p className="font-semibold mb-2 text-dark_green text-[20px] xl:text-[22x]">Some common CDK4/6 inhibitors include:</p>
                        <ul className="list-disc pl-[16px] grid grid-cols-1 xl:grid-cols-2 gap-1 text-[18px] marker:text-[#6bcdb2]">
                          <li>palbociclib</li>
                          <li className="list-item xl:hidden">ribociclib</li>

                          <li>abemaciclib</li>
                          <li className="xl:list-item hidden">ribociclib</li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-6 p-6  pt-0  pb-4 shadow-md xl:px-0 xl:pt-0 xl:pb-1 xl:mb-[3px] xl:ml-[34px] xl:shadow-none ">
            <Card
              imgTop="-12px"
              // mobileTop="-16px"
                mobileLeft="-15px"
              img={bloodstream2.src}
              alt="Medication bottle and syringe"
              title="<em class='font-[500]'>ESR1</em> mutations may cause some of these therapies to stop working and cancer to progress"
              body="When cancer progresses, your current tumors may grow. Small parts of your tumors, called cells, may break away and may also enter the bloodstream. When this happens, new tumors can form in other parts of the body, including bones, liver, and lungs."
              extraClass="mb-4"
            />
          </div>

          {/* Testing Section */}
          <div className="mt-6  xl:shadow-box_shadow p-6 pb-0 xl:p-6 xl:p-[34px] xl:mt-0  pt-0 xl:rounded-3xl">
            <p className="text-[30px] leading-[30px] xl:text-[36px] mb-4 font-light tracking-[0.36px] xl:leading-[38px] text-left">
              When is the right time to <span className="font-[600] text-dark_green">change treatment?</span>
            </p>
            <Card
            imgLeft="-5px"
            imgTop="-6px" 
            // mobileTop="-16px"
                mobileLeft="-20px"
              img={user.src}
              alt="Healthcare team"
              title="Consider all the factors with your healthcare team"
              body="You and your healthcare team should discuss what the most effective treatment options are for you and your type of advanced or metastatic cancer. A blood test ordered by your doctor can be used to tell if an <i style='font-weight:300;'>ESR1</i> mutation has occurred. If a blood test shows that your cancer has mutated but your scans show the cancer has not progressed, your healthcare team may recommend staying the course with your current treatment. <span classname='' style='color:#006937; font-weight:600'>Changing treatment before disease progression is confirmed may affect your future treatment options.</span>"
              extraClass="mb-0"
            />
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

export default Understanding_esr1_mutations;
