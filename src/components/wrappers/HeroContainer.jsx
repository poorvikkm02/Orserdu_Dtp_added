"use client";

import React, { useContext, useEffect, useState } from "react";
import arrow from "../../assets/images/figure/arrow-right_Light.png";
// import { NavLink } from 'react-router-dom';
import IMPORTANT_SAFETY_INFORMATION from "../isi/Isi";
// import { useInView } from 'react-intersection-observer';
import { StoreContext } from "@/context/SlideUpContext";
import smoothscroll from "smoothscroll-polyfill";
import useVisibilityObserver from "@/hooks/useVisibilityObserver";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import DOMPurify from "dompurify";
import Footer from "../footer/Footer";
import PreLoader from "../loaders/PreLoader";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";



const HeroContainer = ({
  children,
  img,
  navLink,
  navText,
  header,
  marginTop,
  notActual,
  alt,
  imgClassName
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
      gsap.registerPlugin(ScrollToPlugin);
    }
  }, []);
  const { isMobile, navbarWidth } = useContext(ResponsiveContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const mt = marginTop || 14;

  const { setComponentOneVisible, isExpanded } = useContext(StoreContext);
  const { ref, inView } = useVisibilityObserver(0.04);
  // scroll to top

  // const scrollToTop=(()=>{
  //   setTimeout(() => {
  //     window.scrollTo({ top: -1, behavior: 'smooth' });
  //   }, 10);
  // })
  // //

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
   
    if (!img) return;
    
    const loadImage = async () => {
      setIsImageLoaded(false);

      try {
        const imgg = new Image();
        imgg.src = img;

       
        

        // Wait for the image to fully load and decode
        await imgg.decode(); // Ensures the image is ready for rendering

        setIsImageLoaded(true);
        
        

        // Now set loaded state to true
      } catch (error) {
        console.error("Error loading background image:", error);
        setIsImageLoaded(true); // Optionally, proceed even if image fails
      }
    };

    loadImage();
  }, [img]);

  return (
    <div className=" font-sofia w-full  ">
      {/* <div className="bg-red  h-[40px] flex justify-center items-center w-full">
  <NavLink
            // onClick={() => handleScroll("isi")}
            className=" xl:hidden text-[14px] font-light tracking-tight underline text-left leading-tight hover:text-dark_green  whitespace-normal"
          >
            Important Safety Information
          </NavLink>
</div> */}

      {/* Image Section */}
      {img && (
        <div
          className={`relative flex justify-center   bg-light_mint_green w-full m-0 h-auto`}
        >
          {/* <div className="absolute text-[10px] rounded-r-none pl-2 pr-2  bg-white opacity-70 backdrop-blur-md text-gray rounded-full bottom-14 right-0 z-50 xl:hidden">{ notActual}</div> */}
          {isImageLoaded ? (
            <img
  className={`z-10 mt-10 xl:mt-0 ${imgClassName || ""}`}
  loading="lazy"
  src={img}
  alt={alt || "heroImg"}
/>

          ) : (
            <div className="overflow-hidden">
              <PreLoader />
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div
        className={`w-full relative -mt-8  xl:-mt-20 xxl:-mt-28 bg-light_mint_green h-auto z-0 flex justify-center`}
      >
        <div className="relative w-[90%] bg-red xl:w-[100%] xxl:w-[95%] h-auto pt-6 xl:pt-0 shadow-box_shadow bg-white rounded-br-[50px] rounded-bl-[50px] xl:rounded-bl-[112px] xl:rounded-br-[112px]  mb-12 flex justify-center">
          <div
            style={!isMobile ? { width: `${navbarWidth.width}px` } : {}}
            className="xl:pt-[100px] xxl:pt-[140px] pt-0 xl:p-0 xl:overflow-visible pb-2 mb-[35px] xl:mb-[50px] overflow-hidden w-full  "
          >
            {children}
          </div>

          {/* Navigation Section */}
          {navLink && (
            <Link
              href={navLink}
              scroll={false}
              onClick={() => { window.scrollTo(0, 0); }}
              className="  hover:underline  text-dark_green absolute -bottom-5 bg-white shadow_round p-2 xl:p- flex items-center justify-center w-fit xl:w-fit   xxl:w-fit 2xl:w-fit  h-12 rounded-3xl "
            >
              <div className="w-[100%]  pl-2 xl:p-3 flex justify-around xl:justify-between items-center h-full ">
                <div
                  className="xxl:text-[18px] text-[18px] text-center  font-[600] "
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(navText),
                  }}
                ></div>
              </div>
              <div className="w-[35px]  p-[10px]   ">
                <img
                  src={arrow.src}
                  className="w-full object-contain  "
                  alt="Arrow"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="" id="HideFooterPopUp"></div>

      <div
        ref={ref}
        className="w-full  flex flex-col justify-center items-center mt-[10px] xl:mt-0 "
        id="Isii"
      >
        {header ? (
          <div
            style={!isMobile ? { width: `${navbarWidth.width}px` } : {}}
            className="text-[14px] leading-[16px] font-[300] w-[80%] text-black  flex text-left justify-start items-center mt-1 xl:mt-[30px]"
          >
            {header}
          </div>
        ) : (
          <></>
        )}
        <IMPORTANT_SAFETY_INFORMATION />

        <Footer />
      </div>
    </div>
  );
};

export default HeroContainer; 
