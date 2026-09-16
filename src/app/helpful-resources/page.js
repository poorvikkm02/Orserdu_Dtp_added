"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import Link from "next/link";
import QAICON from "../../assets/images/helpful/QAIcon.png";
import InfoIcon from "../../assets/images/helpful/InfoIcon.png";
import arrow from "../../assets/images/figure/arrow-right.png";
import arrowLight from "../../assets/images/figure/arrow-right_Light.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import smoothscroll from "smoothscroll-polyfill";
import PreLoader from "@/components/loaders/Preloader"; // Assuming this is your preloader component
// import img2 from '../../assets/website_hero_images/help.png'
import img2 from '../../assets/website_hero_images/help_2.png'
const HeroContainer = dynamic(() => import("@/components/wrappers/HeroContainer"), {
  ssr: false,
  loading: () => <PreLoader />
});

const IMPORTANT_SAFETY_INFORMATION = dynamic(
  () => import("../../components/isi/Isi"),
  { ssr: false }
);

const Helpful_resources = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
      gsap.registerPlugin(ScrollToPlugin);
    }
  }, []);

  const navScroll = () => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: 0 },
      ease: "power2.in",
    });
  };

  const { isMobile } = useContext(ResponsiveContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const header = (
    <p>
      <i className="font-thin">ESR1</i>, estrogen receptor 1.
    </p>
  );

  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/Helpful_resources_Mobile.png";
    }
    return img2.src;
  }, [isMobile]);

  // Load the hero image with preloader
  useEffect(() => {
    if (!imageUrl) return;

    const loadImage = async () => {
      setIsImageLoaded(false);

      try {
        const img = new Image();
        img.src = imageUrl;

        // Wait for the image to fully load and decode
        await img.decode(); // Ensures the image is ready for rendering
        setIsImageLoaded(true);
      } catch (error) {
        console.error("Error loading background image:", error);
        setIsImageLoaded(true); // Optionally, proceed even if image fails
      }
    };

    loadImage();
  }, [imageUrl]);

  return (
    <div className="overflow-x-hidden">
      <div className="relative flex justify-center bg-light_mint_green w-full m-0 h-auto">
        {isImageLoaded ? (
          <img className="z-10" src={imageUrl} alt="Hero" />
        ) : (
          <div className="overflow-hidden w-full h-full flex justify-center items-center">
            <PreLoader />
          </div>
        )}

        {isImageLoaded && (
          <>
            {/* <a
              href="#"
              className="hidden xl:block absolute cursor-default z-50 top-[60%] xxl:top-[52.8%] right-[15.2%] xl:top-[48%] rounded-3xl w-[20.5%] h-[40px] xl:h-[46px] xxl:h-[53px]"
              // target="_blank"
            ></a> */}
            <Link
              onClick={navScroll}
              href="/real-stories"
              className="hidden xl:block   absolute z-50 top-[60%] xxl:top-[54%] right-[18.2%] xl:top-[48%]  rounded-3xl w-[17.5%] h-[40px] xl:h-[46px] xxl:h-[53px]"
            >
              {" "}
            </Link>
          </>
        )}
      </div>

      <HeroContainer
        header={header}
        navLink={"/savings-and-support"}
        navText={"Savings & support "}
      >
        {/* only for mobile */}
        {isMobile && (
          <div className="p-6 pb-10 xl:pb-4 flex flex-col items-center xl:p-7 mb-6  shadow-md xl:shadow-none ">
            <p className="text-[30px] xl:text-[36px] font-[300] mb-3 xl:font-light leading-[2rem] xl:leading-[36px] text-left text-dark_green">
              Resources that will <strong>help you with your treatment</strong>
            </p>
            <p className="font-thin text-[18px] leading-[22px] mt-2 ">
              You may find the following materials helpful while on treatment
              with ORSERDU. They contain information that will help you get the
              most out of your experience with ORSERDU.
            </p>

            {/* <div className="w-full p-4 pb-0 pl-0 flex flex-col items-center justify-center ">
              <img
                className="h-[100px] w-[206px] object-contain"
                src="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/BrochureIcon.png"
                alt="BrochureIcon"
              />
            </div>

            <div className="w-full sm:w-[80%] mb-4">
              <a
                href="#"
                // target="_blank"
                className="flex w-full xl:h-[60px] rounded-full border-2 border-yellow justify-between items-center p-2 xl:p-4"
              >
                <p className="text-[24px] leading-[26px] w-[80%] xl:w-[80%] xl:text-[22px] font-medium tracking-[0.22px] xl:leading-[24px] text-[#006937] text-left ml-4">
                  Download the brochure
                </p>
                <div className="w-[42px] h-[42px] rounded-full box_shadow flex justify-center items-center">
                  <img
                    src={arrow.src}
                    className="w-full xl:w-full h-full object-contain p-2"
                    alt="arrow"
                  />
                </div>
              </a>
            </div> */}

            <div className="w-full p-4 pb-0 pl-0 flex flex-col items-center justify-center ">
              <img
                className="h-[60px] w-[206px] mb-4 object-contain"
                src="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/VideoPlayIcon.png"
                alt="play"
              />
            </div>

            <div className="w-full sm:w-[80%] ">
              <Link
                onClick={navScroll}
                href="/real-stories"
                className="flex w-full xl:h-[60px] rounded-full border-2 border-yellow justify-between items-center p-2 xl:p-4"
              >
                <p className="text-[23px] leading-[25px] w-2/3 xl:w-[80%] xl:text-[22px] font-medium tracking-[0.22px] xl:leading-[24px] text-[#006937] text-left ml-4">
                  Watch <span className="font-bold">1</span> for me stories
                </p>
                <div className="w-[42px] h-[42px] rounded-full box_shadow flex justify-center items-center">
                  <img
                    src={arrowLight.src}
                    className="w-full xl:w-full h-full object-contain p-2"
                    alt="arrow light"
                  />
                </div>
              </Link>
            </div>
          </div>
        )}

        <div className="bg-white xl:p-4 mb-0">
          <div className="h-auto xl:shadow-none shadow-md xl:h-auto xl:p-3 xxl:p-6 pt-2 p-6 pb-5">
            <p className="leading-9 text-[26px] xl:text-[30px] xl:text-[36px] font-semibold xl:tracking-[0.36px] xl:leading-[38px] mb-4 text-left text-dark_green">
              Talk with your healthcare team{" "}
              <span className="font-light">about your experience</span>
            </p>
            <div className="flex xl:flex-row flex-col items-center justify-start xl:space-x-4">
              <div className="xl:border-r border-yellow xl:w-[120px] w-full flex justify-start">
                <img
                  src={QAICON.src}
                  alt="Orserdu questions and answers"
                  className="h-[100px] xl:h-full w-full object-contain xl:-ml-4"
                />
              </div>
              <div className="font-light text-[18px] w-full mt-4 xl:mt-0 xl:text-[14px] xxl:text-[18px] leading-[22px] tracking-[0.18px]">
                <p className="text-gray-700">
                  You play an important role in your care. Take part in your
                  treatment decisions. Speak openly and honestly with your
                  healthcare team so they understand your goals and preferences.
                  Knowing what to expect and speaking up will help you get the
                  most out of your treatment experience with ORSERDU.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-5 mt-6 xl:mt-0 p-6 pt-0 shadow-md xl:shadow-none">
            <p className="text-[22px] xl:text-[22px] font-[500] leading-6 tracking-[0.22px] mb-5">
              Here are some questions to help get you started:
            </p>
            <div className="flex flex-col xl:flex-row gap-[6px] xl:gap-4 text-[18px] xl:text-[14px] xxl:text-[18px] font-light justify-between">
              <div className="w-full xl:w-1/2 leading-[22px]">
                <ul className="list-disc pl-4 flex flex-col gap-[6px] xl:gap-0 xl:tracking-[0.09px] xl:leading-[24px] marker:text-mint">
                  <li>
                    Is there anything more I should know about{" "}
                    <em style={{ fontWeight: 300 }}>ESR1</em> mutations?
                  </li>
                  <li>How long can I expect to take ORSERDU?</li>
                  <li>What kind of results can I expect from ORSERDU?</li>
                  <li>How will I know if ORSERDU is the right treatment for me?</li>
                </ul>
              </div>
              <div className="w-full xl:w-1/2 leading-[22px]">
                <ul className="list-disc pl-5 flex flex-col gap-[6px] xl:gap-0 xl:tracking-[0.09px] xl:leading-[24px] marker:text-mint">
                  <li>How should I track my treatment experience?</li>
                  <li>
                    How often will I need to come into the clinic for any type
                    of monitoring or testing?
                  </li>
                  <li>When should I contact my doctor or nurse?</li>
                  <li>What should I know or do before my next office visit?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-7 bg-gray-50 xl:rounded-[1.7rem] xl:shadow-box_shadow p-6 pt-4">
            <p className="text-[26px] xl:text-[36px] font-[600] text-dark_green">
              Additional tips:
            </p>
            <ul className="list-disc pl-4 xl:pl-0 text-[18px] xl:text-[14px] xxl:text-[18px] font-[300] mt-3 marker:text-mint ml-3">
              <li>
                If possible, take a family member or friend to your appointments
                for support
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
            <p className="mt-3 font-[300] text-[18px] xl:text-[14px] xxl:text-[18px] leading-[25px] tracking-[0.18px]">
              Take ORSERDU every day as directed. If you experience any side
              effects, let your doctor or healthcare team know. They can help
              you manage certain side effects or provide other advice to help
              ensure that you receive appropriate treatment.
            </p>
          </div>

          <div className="flex items-center space-x-4 p-6 pt-0 pb-0 rounded-md justify-center">
            <div className="w-full xl:w-[600px] mt-5 flex items-center justify-center">
              <div className="pr-5 xl:w-[60px] w-[90px] border-r-[1px] border-yellow xl:h-[90px]">
                <img
                  src={InfoIcon.src}
                  alt="Exclamation mark"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[540px] xl:-mt-1">
                <p className="text-dark_green text-[20px] font-[500] tracking-[0.22px] ml-5 leading-[22px]">
                  Before you start taking ORSERDU, talk with your healthcare
                  team about any questions or concerns you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroContainer>
    </div>
  );
};

export default Helpful_resources;