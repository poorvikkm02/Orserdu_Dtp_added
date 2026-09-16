"use client";
 
import React, { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import PreLoader from "@/components/loaders/Preloader";
import cross2 from "../../assets/Desktop/cross_2.png";
const HeroContainer = dynamic(
  () => import("@/components/wrappers/HeroContainer"),
  {
    ssr: false,
    loading: () => {
      return <PreLoader />;
    },
  },
);
 
import warningImage from "../../assets/images/safety/warningIcon.png";
import safetyImg from "../../assets/images/safety/SafetyGraphicDesktop.png";
import ThreePer from "../../assets/images/safety/ThreePer.png";
import SixPer from "../../assets/images/safety/SixPer.png";
import FifteenPer from "../../assets/images/safety/FifteenPer.png";
import chatBubbleImg from "../../assets/images/savings/icon-message4.png";
import { ResponsiveContext } from "@/context/ResponsiveContext";
// import stopIcon from "../../assets/Desktop/stopIcon.png";
import stopIcon from "../../assets/Desktop/cons_X.webp";

 
import img from "../../assets/website_hero_images/page4.png";
 
import MobileImage from "../../assets/65px/ORSERDU_safety_Mobile.png";
 
const Orserdu_safety = () => {
  // const imageUrl="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/SafetyWomandesktop.png"
 const stop='https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/cons_X.webp'
  const { isMobile } = useContext(ResponsiveContext);
  // custom hook for mobile header
  // useNavHeader("ORSERDU safety")
 
    const header = (
    <p>
     ECG, electrocardiogram.
    </p>
  );
  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Banner_same_size/Safety_mobile_08.webp ";
    }
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/13_07_2026/safety_07_13.webp"
 
  }, [isMobile]);
  const stats = [
    {
      img: ThreePer.src,
      alt:"3% reduced dose due to side effects",
      text: (
        <>
          {" "}
          needed to reduce
          <br className="hidden xl:block" /> the dose of ORSERDU
          <br className="hidden xl:block" /> due to side effects
        </>
      ),
    },
    {
      img: SixPer.src,
         alt:"6% stopped taking ORSERDU due to side effects",
      text: (
        <>
          {" "}
          stopped taking <br className="hidden xl:block" /> ORSERDU due
          <br className="hidden xl:block" /> to side effects
        </>
      ),
    },
    {
      img: FifteenPer.src,
         alt:"15% Interrupted treatment due to side effects",
      text: (
        <>
          {" "}
          had to interrupt their <br className="hidden xl:block" /> treatment
          with ORSERDU
          <br className="hidden xl:block" /> due to side effects
        </>
      ),
    },
  ];
 
  return (
    <>
      <h1 className="sr-only">What to Expect While Taking ORSERDU®</h1>
      <h2 className="sr-only">Common Side Effects of ORSERDU®</h2>
      <h3 className="sr-only">Bone Pain and Fatigue</h3>
      <h3 className="sr-only">Cholesterol and Triglyceride Monitoring</h3>
      <h3 className="sr-only">Pregnancy Risks &amp; Birth Control</h3>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      {" "}
      <HeroContainer
        img={imageUrl}
        navLink={"/taking-orserdu"}
        navText={"Taking ORSERDU"}
        notActual={"not an actual patients "}
          // header={header}
          alt={'Safety header image'}
      >
        {isMobile && (
          <div className="p-6  shadow-md xl:shadow-none">
            <p className="text-[30px] leading-[2rem] mb-4 font-thin ">
              <strong className="text-dark_green">What to expect</strong> while
              taking ORSERDU
            </p>
            <p className="xl:text-[1.3rem] text-[22px] leading-6 mb-2 text-dark_green">
              Some of the most common side effects included (≥10%):
            </p>
            <ul className=" list-disc xl:grid grid-cols-2 text-black marker:text-list_color pl-[16px] xl:pl-5  text-[18px] font-thin mb-4  flex flex-col gap-1 leading-[20px]">
              <li>Muscle and joint (musculoskeletal) pain</li>
              <li>Nausea</li>
              <li>Increased cholesterol and triglyceride levels in your blood</li>
              <li>Increased liver function tests</li>
              <li>Tiredness</li>
              <li>Decreased red blood cell counts</li>
              <li>Vomiting</li>
              <li>Decreased salt (sodium) levels in your blood</li>
              {/* second section */}
              <li>Increased kidney function test</li>
              <li>Decreased appetite</li>
              <li>Diarrhea</li>
              <li>Headache</li>
              <li>Constipation</li>
              <li>Stomach-area (abdominal) pain</li>
              <li>Hot flush</li>
              <li>Indigestion or heartburn</li>
            </ul>
            <p className="text-[18px] font-thin text-black  leading-5 mb-3">
              If you develop certain side effects, your healthcare provider may decrease your dose,
              temporarily stop, or completely stop treatment with ORSERDU.
            </p>
            <p className="text-[18px] font-thin text-black leading-5 mb-1">
              <span className="font-[500]">These are not all of the possible side effects of ORSERDU</span>. Call your doctor for medical advice about side effects.
               You may report side effects to the FDA at <span className="whitespace-nowrap">1-800-FDA-1088</span>.
            </p>
          </div>
        )}
 
        <div className="pt-7 xl:pt-0 ">
          {/* Header */}
          <div className="flex gap-4 xl:items-start items-center mb-2 xl:mb-0 h-[71px] xl:h-auto xl:p-0 p-6  xl:mt-0 xl:pl-[32px]">
            <img
              src={warningImage.src}
              className="h-[100px] w-[80px] object-contain xl:w-[80px] xl:h-auto xl:self-start"
              alt="Warnings and precautions icon"
            />
            <p className="text-[30px] leading-[30px] xl:text-[36px] font-semibold tracking-[0.36px] xl:leading-[38px] text-left text-dark_green no-underline whitespace-normal xl:pl-[2px] xl:self-start">
              Warnings and Precautions
            </p>
          </div>
 
          {/* Main Warning Content */}
          <div className="pt-2 flex justify-start xl:pl-[120px] xl:p-0 p-6 xl:relative xl:-top-4 shadow-md xl:shadow-none">
            <div className="  block text-base font-light leading-6 text-gray-800 bg-transparent   m-0 p-0  relative overflow-visible cursor-auto visible transform-none transition-alloutline-red-500  resize-none shadow-none text-left text-clip whitespace-normal word-break-normal rounded-none list-disc list-outside  xl:w-[100%] xl:pl-[8px]">
              <p className="   text-dark_green text-[20px] xl:text-[22px] font-medium tracking-[0.22px] leading-[22px] xl:leading-6 text-left text-green-800 no-underline whitespace-normal ">
                ORSERDU may cause serious side effects
              </p>
              <ul className="pl-[0px] xl:pl-[0px] text-[18px] xl:text-[14px] xxl:text-[18px] font-light tracking-[0.09px] leading-[22px] text-left text-black no-underline whitespace-normal list-disc marker:text-mint ml-[16px] mt-1">
                <li>
                  Increased cholesterol and triglyceride  levels in your blood
                  (hypercholesterolemia and hypertriglyceridemia). Your
                  healthcare provider will do blood tests to check your lipid
                  levels before and during your treatment with ORSERDU
                </li>
              </ul>
              <p className=" mt-4 text-dark_green text-[20px] xl:text-[22px] font-medium tracking-[0.22px] leading-[22px] text-left text-green-800 no-underline whitespace-normal">
                Before taking ORSERDU, tell your healthcare provider about all
                your medical conditions, including if you:
              </p>
              <ul className="text-[18px] pl-[0px]  xl:text-[14px] xxl:text-[18px] font-light tracking-[0.09px] leading-[22px] space-y-2  text-left text-black no-underline whitespace-normal list-disc marker:text-mint ml-[16px] mt-2 xl:pl-[18px] xl:ml-0">
                <li>Have liver problems</li>
                <li className="">
                  Are pregnant or plan to become pregnant. ORSERDU can harm your
                  unborn baby
                  <ul className="mt-2 ml-3 space-y-2 text-gray-600 [&>li]:list-[circle] ">
                    <li className=" text-[18px] xl:text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[22px] text-left text-black no-underline font-[500] list-none !list-none">
                      Females who are able to become pregnant:
                    </li>
                    <li className="ml-5 [&>li]:list-[circle]">
                      Your healthcare provider may do a pregnancy test before
                      you start treatment with ORSERDU
                    </li>
                    <li className="ml-5">
                      You should use effective (contraception) birth control
                      during treatment with ORSERDU and for 1 week after the
                      last dose
                    </li>
                    <li className="ml-5">
                      Tell your healthcare provider right away if you become
                      pregnant or think you may be pregnant during treatment
                      with ORSERDU
                    </li>
                    <li className="text-[18px] xl:text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[22px] text-left text-black no-underline font-[500] list-none !list-none">
                      Males with female partners who are able to become
                      pregnant:
                    </li>
                    <li className="ml-5 ">
                      You should use effective (contraception) birth control
                      during treatment with ORSERDU and for 1 week after the
                      last dose
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
 
          {/* Mild to Moderate Side Effects */}
          <div className="bg-gray-50 xl:p-6 md:m-2 xl:m-0 shadow-md xl:rounded-[1.8rem] flex flex-col p-6 xl:flex-row-reverse justify-center items-center mb-8  xl:mb-[12px] xl:shadow-box_shadow xl:gap-2 xl:px-[32px]  xl:mt-[16px]">
            <div className="flex flex-col justify-center h-auto w-full xl:w-[400px] gap-1 xl:gap-4 xl:pl-[2rem] xl:border-l border-yellow self-stretch xl:justify-center xl:my-1">
              <p className="text-[30px] leading-[2rem] xl:text-[22px] font-[500] tracking-[0.22px] xl:leading-[24px] text-dark_green text-left">
                In the clinical study, most side effects were categorized as mild
                to moderate
              </p>
              <p className="text-[18px] font-[300] tracking-[0.18px] leading-[20px] text-left mb-3 mt-3 xl:m-0">
                Most people did not need to take anti-nausea medication while
                taking ORSERDU.
              </p>
            </div>
            <img
              src={safetyImg.src}
              className="h-[172px] w-[223px] mt-4 mb-1 xl:mt-0 xl:mr-[2rem]"
              alt="In the clinical study, most side effects were classified as mild to moderate"
            />
          </div>
          {/*  */}
          <div className=" flex justify-center items-center">
            <div className="text-[14px] w-[80%]  xl:w-full flex justify-center items-center  xxl:text-[16px] font-[300] leading-[24px] rounded-full xl:mt-[20px] mb-4 text-center h-[80px] xl:h-[47px] bg-light_mint_green text-dark_green">
              <p className="text-[22px] w-[70%] xl:w-auto font-[700] tracking-[0.22px] leading-[24px] ">
                Of the people in the clinical study:
              </p>
            </div>
          </div>
 
          <div className="shadow-md xl:shadow-none flex flex-col xl:flex-row gap-7 xl:gap-3  p-4 pb-[28px] xl:p-0 xl:pl-[5%] xl:pr-[5%]  items-center justify-between m-auto xl:w-[90%]">
            {stats.map((stat, index) => (
              <div
                key={index}
                 className={`${index == 1 ? "xl:ml-[35px]" : "xl:ml-[42px]"} flex items-center justify-center  mx-auto  ml-0  xl:gap-2`}
              >
                <img
                  src={stat.img}
                  className={`${index == 0 ? "xl:h-[80px] h-[50px]" : index == 1 ? "xl:h-[90px] h-[50px]" : "xl:h-[82px] xl:relative top-[1px] h-[50px]"}  min-w-[80px] xl:min-w-0  w-auto object-contain `}
                  alt={stat.alt}
                />
 
                {/* Vertical bar using div */}
                <div
                  className={`mx-2 border-l border-yellow ${index == 0 ? "h-[42px] xl:h-[55px] relative -top-[3px] xl:top-0" : index == 1 ? "h-[43px] xl:h-[55px] relative -top-[4px] xl:top-0" : "h-[35px] xl:h-[55px]  relative -top-[4px] xl:top-0"}`}
                ></div>
 
                <p className="w-full text-[18px]  xl:text-[14px] xxl:text-[18px] font-light tracking-[0.18px] leading-[20px] text-black text-start  relative -top-[4px] xl:top-0">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
 
          {/* <div className="bg-gray-50 w-full xl:h-fit rounded-3xl pl-6 pr-6 pt-6 p-6 xl:p-[32px] xl:shadow-box_shadow xl:mt-6">
            <p className="text-[30px] font-[300]">
              With ORSERDU,{" "}
              <span className="text-dark_green font-[600]">people in the clinical study were not required to:</span>
            </p>
            <div className="flex flex-col xl:flex-row items-start gap-0 mt-4">
              {[
                "Fast before or after taking treatment",
                "Take other medicines or antibiotics with treatment",
                "Get regular tests such as an ECG",
                "Watch their blood sugar",
                "Take eye exams",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-0">
                  <img
                    src={stopIcon.src}
                    className="w-[90px] min-w-[90px] h-auto fadeEffectMbl"
                    alt="stop"
                  />
                  <p className="text-[18px] xl:text-[14px] xxl:text-[18px] font-[300] tracking-[0.18px] leading-[22px] text-left">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="bg-gray-50 w-full xl:h-fit xl:rounded-3xl  shadow-box_shadow  p-6  xl:p-6  xl:shadow-box_shadow    xl:py-[35px]  xl:px-[34px] xl:mt-[20px]">
            <p className="text-[30px] leading-[32px]   font-[600] text-dark_green  ">
              With ORSERDU,{" "}
              <span className="text-dark_green font-[600]">
                people in the clinical study were not required to:
              </span>
            </p>
            <div className="    xl:rounded-[30px]  ">
 
           
                 <div className="flex  flex-col xl:flex-row items-center xl:items-center gap-3 xl:gap-0 mt-[25px] ">
               
              <div className="h-full   xl:w-[15.5%] xl:flex xl:items-center">
                <div className="flex items-center xl:flex-col text-left justify-start -ml-2 xl:ml-0">
                  <p className="text-left hidden xl:block text-[#006937] font-[500] text-[20px] xxl:text-[22px] tracking-[0.18px] leading-[20px] pl-2 relative -left-4  xl:mb-4">Not required:</p>
                  <img
                    className="h-[100px] w-[40%] xl:h-auto xl:w-[65%] object-contain fadeEffectMbl -ml-2 xl:-ml-5"
                    src={cross2.src}
                    alt="study"
                  />
                  <p className="text-left xl:hidden text-[#006937] font-[500] text-[20px] xxl:text-[22px] tracking-[0.18px] leading-[20px] pl-2 relative left-0 xl:-left-[10px]">Not required:</p>
 
                </div>
              </div>
              <div className="xl: w-full xl:w-3/4 xl:border-l-[1px] xl:border-yellow xl:pl-[10px]  xl:text-left font-[300] text-[18px] xxl:text-[18px] tracking-[0.18px] leading-[20px] xl:mt-[0px] ">
                <ul className="list-disc ml-5  mb-0 flex flex-col gap-[10px]   marker:text-[#70C7AF]  ">
<li>Fast before or after
taking treatment</li>
<li>Take other medicines or
antibiotics with treatment</li>
<li>Get regular tests
such as an ECG</li>
<li>Watch their
blood sugar</li>
<li>Take eye
exams</li>

              </ul>
            
              </div>
            </div>
             
            
            </div>
          </div> */}
          {/* Additional Notes */}
          <div className="bg-gray-50  w-full xl:h-[110px] flex justify-center items-center  rounded-3xl pl-6 pr-6 xl:pt-6  xl:p-[32px]   xl:mt-6">
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:-ml-[15px]">
              <img
                src={chatBubbleImg.src}
                className="mt-8 xl:mt-0 w-[150px] xl:w-[196px] xl:h-[90px] xl:border-r-[1px] xl:border-yellow "
                alt="Chat icon"
              />
              <p className=" text-[18px] xl:text-[14px] xxl:text-[18px] font-[300] tracking-[0.18px] xl:pl-2 leading-[22px]  text-left">
                Let your doctor or healthcare team know if you have any side
                effects during treatment. Continue taking your medication as
                prescribed until you speak with your healthcare team. Ask them
                about tools and strategies that may help manage certain side
                effects.
              </p>
            </div>
          </div>
        </div>
      </HeroContainer>
      {/* important_Safety_INformation */}
      {/* <div className="w-ful flex justify-center items-center">
  <IMPORTANT_SAFETY_INFORMATION/>
  </div> */}
    </>
  );
};
 
export default Orserdu_safety;