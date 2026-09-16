"use client";
import Image from "next/image";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ResponsiveContext } from "@/context/ResponsiveContext";
// import bgDesktop from "@/assets/Desktop/bg.png";
// import cutoutDesktop from "../../assets/Desktop/cutout.png";

import DesktopHeroAnimation from "@/components/home/DesktopHeroAnimation";
import useVisibilityObserver from "@/hooks/useVisibilityObserver";
import IMPORTANT_SAFETY_INFORMATION from "@/components/isi/Isi";
import ModbileAnimation from "@/components/home/MobileAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const { isMobile, navbarWidth, changeColor } = useContext(ResponsiveContext);
  const { ref, inView } = useVisibilityObserver(0.03);
  const [deviceMode, setDeviceMode] = useState("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let resizeTimeout;

    const getMode = () => (window.innerWidth < 768 ? "mobile" : "desktop");

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newMode = getMode();
        console.log("Resize mode:", newMode);

        if (newMode !== deviceMode) {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          setDeviceMode(newMode);
        }
      }, 250);
    };

    // Set initial mode
    setDeviceMode(getMode());

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceMode]);
  
  const cref = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       window.scrollTo(0, 800);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // Cleanup
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const isManualScroll = useRef(false);

  // Scroll to top handler
  const scrollToTop = useCallback(() => {
    isManualScroll.current = true;
    if (typeof window !== "undefined") {
      
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Reset after scroll completes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  }, []);

  // Add this effect to handle initial load
  useEffect(() => {
    scrollToTop();

    return () => {
      // Kill all ScrollTriggers when unmounting
    };
  }, [scrollToTop]);

  useEffect(() => {
    console.log("sss");
    if (!cref.current) return;
    if (!isMobile) return;
    console.log("bb");

    const trigger = ScrollTrigger.create({
      trigger: cref.current,
      start: "top top", // element's top reaches viewport top
      onEnter: () => {
        console.log("Element touched top of screen");
        changeColor("green");
        // Call your function here
      },
      onLeaveBack: () => {
        // Do nothing when scrolling back up
        changeColor("white");
      },
    });

    return () => {
      trigger.kill(); // Clean up
    };
  }, [ref]);

  return (
    <div className="w-full">
      <h1 className="sr-only">ORSERDU® (elacestrant): Targeted Therapy for ESR1-Mutated mBC</h1>
      <h2 className="sr-only">Important Safety Information (ISI)</h2>
      {deviceMode === "desktop" ? (
        <DesktopHeroAnimation key="desktop" />
      ) : (
        <ModbileAnimation key="mobile" />
      )}

      <div ref={cref} id="HideFooterPopUp"></div>

      <div className="w-full h-auto   pt-2  xl:pt-0 flex justify-center">
        <p
          style={!isMobile ? { width: `${navbarWidth.width}px` } : {}}
          className=" w-[80%] text-black font-light text-[14px] leading-[16px] mt-2 xl:mt-0"
        >
          ER+, estrogen receptor-positive; <i className="font-[300]">ESR1</i>,
          estrogen receptor 1; <i className="font-[300]">ESR1<span className="not-italic">m</span></i>, estrogen receptor 1 mutation; HER2-, human epidermal growth factor receptor
          2-negative.{" "}
        </p>
      </div>

      <div
        ref={ref}
        className="container_text w-full flex justify-center items-center flex-col"
      >
        <IMPORTANT_SAFETY_INFORMATION />
        <Footer />
      </div>
    </div>
  );
}
