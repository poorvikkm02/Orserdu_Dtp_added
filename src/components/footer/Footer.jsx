"use client";

import React, { useContext, useEffect } from "react";
import image1 from "../../assets/images/logos/Menarini_Group_RGB.png";
import image2 from "../../assets/images/logos/Stemline_Tag_R_RGB.png";
import smoothscroll from "smoothscroll-polyfill";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
      gsap.registerPlugin(ScrollToPlugin);
    }
  }, []);

  const { isMobile, navbarWidth } = useContext(ResponsiveContext);

  const navScroll = () => {
    if (typeof window !== "undefined") {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: { y: 0 },
        ease: "power2.in",
      });
    }
  };

  const openCookieSettings = () => {
    if (typeof window === "undefined") return;
    
    // Try different methods to open cookie settings
    if (window.OneTrust && typeof window.OneTrust.ToggleInfoDisplay === "function") {
      window.OneTrust.ToggleInfoDisplay();
    } else if (window.Optanon && typeof window.Optanon.ToggleInfoDisplay === "function") {
      window.Optanon.ToggleInfoDisplay();
    } else if (typeof window.OtShowSettings === "function") {
      window.OtShowSettings();
    } else if (typeof window.OptanonWrapper === "function") {
      // Try to initialize OneTrust first
      window.OptanonWrapper();
      
      // Try again after a short delay
      setTimeout(() => {
        if (window.OneTrust && typeof window.OneTrust.ToggleInfoDisplay === "function") {
          window.OneTrust.ToggleInfoDisplay();
        }
      }, 500);
    } else {
      console.warn("OneTrust is not available. Make sure the script is loaded.");
      
      // Optional: Open the cookie policy page as fallback
      window.open("https://stemline.com/cookie-policy/", "_blank");
    }
  };

  return (
    <footer className="bg-light_gray h-full xl:h-48 w-full mt-6 xl:mt-6 flex justify-center items-center border-b-[1.8rem] border-list_color font-[300] xxl:text-[1.1rem] text-[15px]">
      <div
        style={!isMobile ? { width: `${navbarWidth.width}px` } : {}}
        className="mt-4 xl:mt-0 w-[80%] xl:w-[95%] xxl:w-[80%] h-full gap-4 flex-col xl:flex-row flex xl:justify-center xl:items-center"
      >
        {/* text */}
        <div className="w-full xl:w-[60%] h-[100%]   leading-[22px] flex flex-col justify-center  gap-4">
          {/* text area */}
          <div className="">
            <p className="">
              ORSERDU is a registered trademark of the Menarini Group. Stemline ARC is a registered trademark of Stemline Therapeutics,
              Inc., a Menarini Group Company.
            </p>
            {/* <p className="">
            
            </p> */}
            <p className="">
              © 2026 Stemline Therapeutics, Inc., a Menarini Group Company.
            </p>
            <p className="">
              All rights reserved. Last updated 07/26 <br className="md:hidden" />
            MAT-US-ELA-01428
            </p>
          </div>
          {/* link area */}
          <div className="flex mb-4 xl:mb-0 text-[18px] flex-col xl:flex-row flex-wrap xl:items-center items-start xl:space-x-2 xl:text-[0.80rem] xxl:text-[1.1rem] font-300 underline text-dark_green gap-4 xl:gap-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stemline.com/privacy-policy/"
              className="hover:text-blue-800"
            >
              Privacy &amp; Terms of Use
            </a>
            <span className="hidden text-black xl:inline">|</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stemline.com/ccpa-policy/"
              className="hover:text-blue-800"
            >
              CCPA Policy
            </a>
            <span className="hidden text-black xl:inline">|</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stemline.com/cookie-policy/"
              className="text-blue-600 hover:text-blue-800"
            >
              Cookie Policy
            </a>
            <span className="hidden text-black xl:inline">|</span>
            <button
              rel="noreferrer"
              className="cookie cursor-pointer bg-transparent border-none p-0 underline text-dark_green hover:text-blue-800"
              onClick={openCookieSettings}
              aria-label="Open Cookie Settings"
            >
              Cookie Setting
            </button>
            <span className="hidden text-black xl:inline">|</span>
            <Link
              onClick={navScroll}
              href="/sitemap"
              className="hover:text-blue-800"
            >
              Sitemap
            </Link>
          </div>
        </div>
        <div className="w-full mt-4 xl:w-[40%] h-full flex justify-center xl:justify-end items-center mb-4">
          <div className="w-[100%] xl:w-[50%] xl:min-w-[250px] h-[70%]  justify-between flex xl:justify-end items-center gap-4">
            <a
              target="_blank"
              href="https://www.menarini.com/"
              className="h-[50px] md:h-[60px] max-w-[50%] xl:w-fit flex justify-end p-0 xl:h-[60px]"
              rel="noopener noreferrer"
            >
              <img
                src={image1.src}
                alt="Menarini logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              href="https://www.stemline.com"
              className="h-[50px] md:h-[60px] w-[auto] max-w-[50%] flex justify-center xl:justify-end xl:h-[60px]"
              rel="noopener noreferrer"
            >
              <img
                src={image2.src}
                alt="Stemline® Logo"
                className="h-full object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;