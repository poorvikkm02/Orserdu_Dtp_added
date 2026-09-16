"use client";

import React, { useState } from "react";

import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import Link from "next/link";
import fb from "@/assets/mobile/fb.png";
import insta from "@/assets/mobile/insta.png";
import tictok from "@/assets/mobile/tictok.png";
import rightarrow from "@/assets/mobile/greenRightArrow.png";
import yt from "@/assets/mobile/yt.png";
import arrow1 from "@/assets/Desktop/new/arrow1.png";
import rightArrow1 from "@/assets/mobile/rightArrow.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Modal2ndStyle from "../modals/Modal2ndStyle";
import { usePathname } from "next/navigation";
import ActiveLink2 from "../links/ActiveLink2";
import ActiveLink from "../links/AciveLink";

const SlideNavbar = ({
  navScroll,
  handleScroll,
  closeSidebar,
  handleLinkClick,
  understandingScroll,
  setIsPdfOpen,
}) => {
  const pathname = usePathname();
  const getInitialActiveMenu = () => {
    if (pathname?.includes("understanding-esr1-mutations")) return "understanding";
    if (pathname?.includes("testing")) return "testing";
    if (pathname?.includes("taking-orserdu")) return "taking";
    if (pathname?.includes("medtrix")) return "medtrix";
    if (pathname?.includes("savings-and-support")) return "savings";
    if (pathname?.includes("data")) return "data";
    if (pathname?.includes("real-stories")) return "stories";
    return null;
  };

  const [activeMenu, setActiveMenu] = useState(getInitialActiveMenu);

  const toggleMenu = (key, e) => {
    if (e) {
      e.stopPropagation();
    }
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  const navItemClass = (isActive, isOpen) =>
    `nav-item flex items-center h-[53px] text-dark-green w-full flex-col justify-center ${
      isOpen ? "bg-[#FFD63A]" : ""
    }`;
  const realItemClass = (isActive, isOpen) =>
    `nav-item flex items-center h-[53px] text-dark-green w-full flex-col justify-center ${
      isOpen ? "bg-[#FFD63A]" : ""
    }`;


  const dropdownItemClass = (isActive) =>
    `nav-item flex justify-center items-center h-[36px]   w-full text-dark_green ${
      isActive ? "bg-light_mint_green " : "bg-light_mint_green "
    }`;

  return (
    <div className="flex w-full h-full  justify-end  ">
      <div className=" min-h-[100vh]  pb-8 max-h-fit w-[90%]   bg-white shadow-inner flex flex-col rounded-t-none">
        <div className="sticky h-[90px] justify-center  w-full flex items-center p-2  mb-1 mt-3">
          {/* Arrow */}
          <div
            onClick={closeSidebar}
            className="bg-white  absolute rounded-full w-12 h-12 -left-6 p-2 flex items-center justify-center"
          >
            <img src={rightarrow.src} alt="right arrow" className="w-3 h-4" />
          </div>

          {/* Social Icons */}
          <div className="flex w-[80%]   justify-center items-center">
           
            <a
              href="https://www.facebook.com/share/16dYMY7Any/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-opacity duration-200"
            >
              <img src={fb.src} alt="Facebook icon" className="w-11 h-11" />
            </a>
             <a
              href="https://www.instagram.com/orserdu_elacestrant/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-opacity duration-200"
            >
              <img src={insta.src} alt="Instagram icon" className="w-11 h-11" />
            </a>
            <a
              href="https://www.tiktok.com/@orserdu_elacestrant"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-opacity duration-200"
            >
              <img src={tictok.src} alt="TikTok icon" className="w-11 h-11" />
            </a>
            <a
              href="https://www.youtube.com/@orserdu"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-opacity duration-200"
            >
              <img src={yt.src} alt="YouTube icon" className="w-11 h-11" />
            </a>
          </div>
        </div>

        <div className="right_section hide-scrollbar overflow-y-auto h-[calc(100vh-190px)] w-full flex flex-col">
          {/* Main Menu */}
          <div className="bottom_menu w-full flex flex-col items-center justify-center leading-[18px] font-[700] text-[16px] text-dark_green">
            {/* Home */}
            <ActiveLink2
              href="/"
              onClick={(e) => { setActiveMenu("home"); navScroll(e); }}
              className={({ isActive }) => navItemClass(isActive, activeMenu === "home")}
            >
              <span className="w-[80%]  justify-center h-full flex items-center">
                Home
              </span>
            </ActiveLink2>

            {/* Dropdown Menu */}
            <div className="dropdown w-full" onClick={(e) => toggleMenu("understanding", e)}>
              <ActiveLink2
                href="/understanding-esr1-mutations/"
                onClick={understandingScroll}
                className={({ isActive }) => navItemClass(isActive, activeMenu === "understanding")}
              >
                <span className="w-[100%] flex items-center justify-center font-[700] gap-4">
                  <span className="text-center">
                    Understanding your cancer
                  </span>
                  <img
                    src={rightarrow.src}
                    alt="right arrow"
                    className={`w-2 h-3 ml-2 transition-transform duration-300 ${activeMenu === "understanding" ? "rotate-90" : ""}`}
                  />
                </span>
              </ActiveLink2>

              {activeMenu === "understanding" && (
                <>
                  <ActiveLink2
                    href="/understanding-esr1-mutations#what-you-should-know"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleScroll(
                        "what-you-should-know",
                        "/understanding-esr1-mutations"
                      );
                      closeSidebar();
                    }}
                    className={({}) => dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                      <img
                        src={rightarrow.src}
                        alt="right arrow"
                        className="w-2 h-3 mr-2"
                      />
                      <span>What are mutations?</span>
                    </div>
                  </ActiveLink2>

                  <ActiveLink2
                    href="/understanding-esr1-mutations#testingEsr1"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleScroll("testingEsr1", "/understanding-esr1-mutations");
                      closeSidebar();
                    }}
                    className={({ isActive }) => dropdownItemClass(isActive)}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start pl-6 gap-1">
                      <img
                        src={rightarrow.src}
                        alt="right arrow"
                        className="w-2 h-3 mr-2"
                      />
                      <span>What is an <i className="font-[700]">ESR1</i> mutation?</span>
                    </div>
                  </ActiveLink2>
                </>
              )}
            </div>

            {/* Separator */}

            {/* Remaining Menu Items */}
            {/* Testing Dropdown */}
            <div className="dropdown w-full" onClick={(e) => toggleMenu("testing", e)}>
              <ActiveLink2
                href="/testing/"
                onClick={understandingScroll}
                className={({ isActive }) => navItemClass(isActive, activeMenu === "testing")}
              >
                <span className="w-[100%] flex items-center justify-center font-[700] gap-4">
                  <span className="text-center">Testing</span>
                  <img
                    src={rightarrow.src}
                    alt="arrow"
                    className={`w-2 h-3 ml-2 transition-transform duration-300 ${activeMenu === "testing" ? "rotate-90" : ""}`}
                  />
                </span>
              </ActiveLink2>
              {activeMenu === "testing" && (
                <>
                  <div
                    onClick={(e) => { e.stopPropagation(); handleScroll("how-does-testing-work", "/testing"); closeSidebar(); }}
                    className={dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>How does testing work?</span>
                    </div>
                  </div>
                  <div
                    onClick={(e) => { e.stopPropagation(); handleScroll("when-should-testing-occur", "/testing"); closeSidebar(); }}
                    className={dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start pl-6 gap-1">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>When should testing occur?</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {[
              { path: "orserdu-results", label: "Results", key: "results" },
              { path: "orserdu-safety", label: "Safety", key: "safety" },
            ].map(({ path, label, key }) => (
              <ActiveLink2
                key={path}
                href={`/${path}/`}
                onClick={(e) => { setActiveMenu(key); navScroll(e); }}
                className={({ isActive }) => navItemClass(isActive, activeMenu === key)}
              >
                <span className="w-[80%] justify-center h-full flex items-center">
                  {label}
                </span>
              </ActiveLink2>
            ))}

            {/* Taking ORSERDU dropdown */}
            <div className="dropdown w-full" onClick={(e) => toggleMenu("taking", e)}>
              <ActiveLink2
                href="/taking-orserdu/"
                onClick={understandingScroll}
                className={({ isActive }) => navItemClass(isActive, activeMenu === "taking")}
              >
                <span className="w-[100%] flex items-center justify-center font-[700] gap-4">
                  <span className="text-center">Taking ORSERDU</span>
                  <img 
                    src={rightarrow.src} 
                    alt="arrow" 
                    className={`w-2 h-3 ml-2 transition-transform duration-300 ${activeMenu === "taking" ? "rotate-90" : ""}`} 
                  />
                </span>
              </ActiveLink2>

              {activeMenu === "taking" && (
                <div
                  onClick={(e) => { 
                    e.stopPropagation();
                    handleScroll("resources", "/taking-orserdu"); 
                    closeSidebar(); 
                  }}
                  className={dropdownItemClass()}
                >
                  <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                    <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                    <span>Resources</span>
                  </div>
                </div>
              )}
            </div>

            <div className="dropdown w-full" onClick={(e) => toggleMenu("medtrix", e)}>
              <ActiveLink2
                href="/medtrix/"
                onClick={understandingScroll}
                className={({ isActive }) => navItemClass(isActive, activeMenu === "medtrix")}
              >
                <span className="w-[100%] flex items-center justify-center font-[700] gap-4">
                  <span className="text-center">Medtrix Healthcare</span>
                  <img 
                    src={rightarrow.src} 
                    alt="arrow" 
                    className={`w-2 h-3 ml-2 transition-transform duration-300 ${activeMenu === "medtrix" ? "rotate-90" : ""}`} 
                  />
                </span>
              </ActiveLink2>

              {activeMenu === "medtrix" && (
                <div
                  onClick={(e) => { 
                    e.stopPropagation();
                    handleScroll("clients", "/medtrix"); 
                    closeSidebar(); 
                  }}
                  className={dropdownItemClass()}
                >
                  <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                    <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                    <span>Clients</span>
                  </div>
                </div>
              )}
            </div>


            {/* Savings & resources dropdown */}
            <div className="dropdown w-full" onClick={(e) => toggleMenu("savings", e)}>
              <ActiveLink2
                href="/savings-and-support/"
                onClick={understandingScroll}
                className={({ isActive }) => navItemClass(isActive, activeMenu === "savings")}
              >
                <span className="w-[100%] flex items-center justify-center font-[700] gap-4">
                  <span className="text-center">Savings &amp; resources</span>
                  <img 
                    src={rightarrow.src} 
                    alt="arrow" 
                    className={`w-2 h-3 ml-2 transition-transform duration-300 ${activeMenu === "savings" ? "rotate-90" : ""}`} 
                  />
                </span>
              </ActiveLink2>
              {activeMenu === "savings" && (
                <>
                  <div
                    onClick={(e) => { e.stopPropagation(); handleScroll("resources", "/savings-and-support"); closeSidebar(); }}
                    className={dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>Resources</span>
                    </div>
                  </div>
                  <div
                    onClick={(e) => { e.stopPropagation(); handleScroll("faq", "/savings-and-support"); closeSidebar(); }}
                    className={dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start pl-6 gap-1">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>FAQ</span>
                    </div>
                  </div>
                   <div
                    onClick={(e) => { e.stopPropagation(); handleScroll("testingQA", "/savings-and-support"); closeSidebar(); }}
                    className={dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start pl-6 gap-1">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>TestingQA</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Data Page */}
            <div className="dropdown w-full" onClick={(e) => toggleMenu("data", e)}>
              <ActiveLink2
                href="/data/"
                onClick={understandingScroll}
                className={({ isActive }) => navItemClass(isActive, activeMenu === "data")}
              >
                <span className="w-[100%] flex items-center justify-center font-[700] gap-4">
                  <span className="text-center">Health Data</span>
                  <img 
                    src={rightarrow.src} 
                    alt="arrow" 
                    className={`w-2 h-3 ml-2 transition-transform duration-300 ${activeMenu === "data" ? "rotate-90" : ""}`} 
                  />
                </span>
              </ActiveLink2>
              {activeMenu === "data" && (
                <>
                  <div
                    onClick={(e) => { e.stopPropagation(); handleScroll("District", "/data"); closeSidebar(); }}
                    className={dropdownItemClass()}
                  >
                    <div className="w-[90%] h-full flex items-center justify-start pl-6 gap-1">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>District Wise</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 1 for me stories dropdown */}
            <div className="dropdown w-full" onClick={(e) => toggleMenu("stories", e)}>
              <ActiveLink
                href="/real-stories/"
                onClick={understandingScroll}
                className="nav-item flex items-center h-[53px] w-full flex-col justify-center"
              >
                {({ isActive }) => (
                  <span className="w-[80%] justify-center h-full flex items-center">
                    <div className={`rounded-full flex justify-between items-center gap-3 p-4 pl-6 ${activeMenu === "stories" ? "bg-yellow text-dark_green" : "bg-dark_green text-white"}`}>
                      <span className="text-[20px] font-[700]">1{" "}<span className="text-[16px] font-[700]">for me stories</span></span>
                      <img 
                        src={rightarrow.src} 
                        alt="arrow" 
                        className={`w-2 h-3 mr-2 transition-transform duration-300 ${activeMenu === "stories" ? "rotate-90" : ""} ${activeMenu === "stories" ? "" : "brightness-0 invert"}`} 
                      />
                    </div>
                  </span>
                )}
              </ActiveLink>
              {activeMenu === "stories" && (
                <>
                  <div onClick={(e) => { e.stopPropagation(); handleScroll("from-people-like-you", "/real-stories"); closeSidebar(); }} className={dropdownItemClass()}>
                    <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>From people like you</span>
                    </div>
                  </div>
                  <div onClick={(e) => { e.stopPropagation(); handleScroll("from-mbc-experts", "/real-stories"); closeSidebar(); }} className={dropdownItemClass()}>
                    <div className="w-[90%] h-full flex items-center justify-start gap-1 pl-6">
                      <img src={rightarrow.src} alt="right arrow" className="w-2 h-3 mr-2" />
                      <span>From experts</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Links */}
            <div className="underline font-[300] w-[80%]  decoration-[1px] text-black text-center flex flex-col gap-1 items-center justify-center mt-4 text-[14px] ">
              <p
                onClick={() => { handleScroll("isi"); closeSidebar(); }}
                className="block w-full text-center p-1 cursor-pointer"
              >
                Important Safety Information
              </p>
              <button
                onClick={() => {
                  closeSidebar();
                  if (setIsPdfOpen) setIsPdfOpen(true);
                }}
                className="block w-full text-center p-1 cursor-pointer"
              >
                Patient Brochure
                <HiOutlineDocumentDownload className="inline-block ml-1" />
              </button>
              <a
                href="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/doc/ORSERDU_Important_Facts.pdf"
                target="_blank"
                className="block w-full text-center  p-1"
              >
                Important Facts
              </a>
              <a
                href="http://pi.orserdu.com"
                target="_blank"
                className="block w-full text-center  p-1"
              >
                Full Prescribing Information
              </a>
               <a
                href="/documents/Patient_Brochure.pdf"
                download="Patient_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeSidebar}
                className="block w-full text-center p-1 text-left"
              >
                Download Pdf Brochure
              </a>
              <a
                onClick={(e) =>
                  handleLinkClick(e, "https://www.orserduhcp.com")
                }
                target="_blank"
                className="block w-full text-center  p-1 pl-5"
              >
                Healthcare Professional Site
                <IoIosArrowRoundForward className="inline-block ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;
