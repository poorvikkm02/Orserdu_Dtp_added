"use client";

import React, { useContext, useEffect, useState } from "react";
// import IMPORTANT_SAFETY_INFORMATION from '../IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION';
import { StoreContext } from "@/context/SlideUpContext";
import ISIPOPUP from "../isi/ISIPOPUP";
import smoothscroll from "smoothscroll-polyfill";
import curve from "../../assets/mobile/curve_1.png";
import { ResponsiveContext } from "@/context/ResponsiveContext";

const FooterPopUp = () => {
  const { isComponentOneVisible, setIsExpanded, isExpanded } =
    useContext(StoreContext);
  const { isMobile, navbarWidth } = useContext(ResponsiveContext);
  const [scrolling, setScrolling] = useState(false);
  const [atTop, setAtTop] = useState(true);

  // Initialize as expanded when at top of page (only for desktop)
  useEffect(() => {
    
    if (!isMobile) {
      setIsExpanded(true);
    }
  }, [isMobile]);

  // Handle scroll events (only for desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setAtTop(isAtTop);

      if (window.scrollY > 0) {
        setScrolling(true);
        // Close when scrolling down
        if (isExpanded) {
          setIsExpanded(false);
        }
      } else {
        setScrolling(false);
        // Open when back at top
        if (!isExpanded) {
          setIsExpanded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded, isMobile]);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }
}, []);
 

  // dropdown scroll
  const handleScroll = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        const offset = window.innerHeight * 0.4; // 40% from the top of the viewport

        // Scroll to the element minus 40% of the viewport height
        window.scrollTo({
          top: sectionTop - offset,
          behavior: isMobile ? "instant" : "smooth",
        });
      }
    }, 300);
  };

  const footerClasses = isExpanded ? "h-[223px]" : scrolling ? "h-0" : "h-0";

  return (
    !isComponentOneVisible && (
      <div className="w-full flex bg-white xl:bg-transparent fixed justify-center flex-col items-center bottom-[20px] xl:bottom-[7px] z-[100]">
        {/* Main content container - only show expanded content on desktop */}
        {!isMobile && (
          <div
            style={!isMobile ? { width: `${navbarWidth.width}px` } : {}}
            className={`bg-white flex justify-center transition-all ease-in-out overflow-hidden ${
              isExpanded
                ? "rounded-3xl shadow-[0_-2px_8px_0px_rgba(99,99,99,0.2)] -mb-2 rounded-b-none"
                : ""
            }`}
          >
           <div
              className={`w-full transition-all relative duration-300 ease-in-out ${footerClasses} flex justify-center`}
            >
              {isExpanded && (
                <button
                  className="text-[30px] bg-dark_green rounded-md font-bold absolute right-[1.2%] top-[10px] w-8 h-8 flex items-center justify-center"
                  onClick={toggleHeight}
                >
                  <span className="relative block w-5 h-6">
                    <span className="absolute top-1/2 rounded-full left-0 w-full h-1 bg-white transform -translate-y-1/2   -rotate-0"></span>
                    {/* <span className="absolute top-1/2 rounded-full left-0 w-full h-1 bg-white transform -translate-y-1/2   rotate-45"></span> */}

                 
                  </span>
                </button>
              )}
              <div className="p-8 pt-0  bg-white">
                <ISIPOPUP />
              </div>
            </div>
          </div>
        )}

        {/* Footer button section */}
        {!isMobile && (
          <div className="xl:flex hidden  justify-center items-center w-full">
            <div
              onClick={() => handleScroll("isi")}
              style={{ width: `${navbarWidth.width}px` }}
              className={`p-4 bg-white h-[70px] sm:h-[50px] md:h-[50px] flex items-center transition-all ease-in-out ${
                isExpanded
                  ? "rounded-3xl duration-0 rounded-t-none shadow-[rgba(0,0,0,0.09)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px]"
                  : "rounded-xl delay-[250ms] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]"
              }`}
            >
              <div className="flex cursor-pointer justify-between items-center w-full">
                <p className="text-[14px] md:text-[18px] xl:text-[18px] font-[800] xl:text-dark_green text-white text-center flex-grow">
                   Click or scroll to see full Important Safety Information and Indication
                </p>
                <button
                  className={`bg-dark_green ${
                    isExpanded ? "invisible" : "visible"
                  } rounded-md p-1 text-[40px] z-[100] font-bold flex-shrink-0 ml-2`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleHeight();
                  }}
                >
                  <span className="relative block w-5 h-5">
                    <span className="absolute top-1/2 rounded-full left-0 w-full h-[3px] bg-white transform -translate-y-1/2"></span>
                    <span className="absolute top-1/2 left-0 w-full rounded-full h-[3px] bg-white transform -translate-y-1/2 -rotate-90"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <div>
            <div  className="-bottom-1 w-full h-[120px] fixed left-0  items-center flex flex-col z-50">
              <img src={curve.src} className='w-full absolute   object-cover z-20' alt="" />
              <div className="absolute flex justify-center items-center z-[11] bg-white  bottom-1 h-[70%] w-full">
                <button onClick={() => handleScroll("isi")} className="bg-dark_green w-[80%] h-[50px] p-4  rounded-full flex justify-center text-white items-center">
                   <p className='leading-[19px] font-[700] text-balance w-[90%] text-[18px]'>Tap to see Important Safety Information and Indication</p>
                  <p className='text-3xl rounded-full'>+</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default FooterPopUp;
