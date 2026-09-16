"use client";

import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo_img from "@/assets/Desktop/orserdu-logo.png";
import mobileLOgo from "@/assets/mobile/mobileLOgo.png";
import home from "@/assets/Desktop/home.svg";
import insta from "@/assets/Desktop/insta.png";
import facebook from "@/assets/Desktop/facebook.png";
import vector from "@/assets/images/home/Vector.png";
import yt from "@/assets/Desktop/yt.png";
import tictok from "@/assets/Desktop/tictok.png";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import SlideNavbar from "./SlideNavbar";
import { Fade as Hamburger } from "hamburger-react";
import { StoreContext } from "@/context/SlideUpContext";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TbFileDownload } from "react-icons/tb";
import Modal from "../modals/Modal";
import Modal2ndStyle from "../modals/Modal2ndStyle";
import ActiveLink from "../links/AciveLink";
import ActiveLink2 from "../links/ActiveLink2";
import { useRouter } from "next/navigation";
import PdfViewerModal from "../modals/PdfViewerModal";




const Navbar = () => {
 

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const navigate = useRouter()
  //   const navigate = useNavigate();
  //     const location = useLocation();
  //   const isNotHomePage = location.pathname !== '/';

  const {
    isMobile,
    navHeader,
    hamburgerColor,
    changeColor,
    resetColor,
    navbarWidth,
    setNavbarWidth,
  } = useContext(ResponsiveContext);
  const { setIsOpenNav, isOpenNav, setStopScroll, closeVideoFnRef } = useContext(StoreContext);

  useEffect(() => {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
    gsap.registerPlugin(ScrollToPlugin);
  }
}, []);

  useEffect(() => {
    const div = document.querySelector(".inside_bottom_section");
    if (!div) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setNavbarWidth(rect);
      console.log("Width:", rect.width, "px");
    });

    observer.observe(div);

    return () => observer.unobserve(div);
  }, []);

  useEffect(() => {
    console.log("hamburgerColor", hamburgerColor);
  }, [hamburgerColor]);
  const handleContinue = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined") {
      window.open(redirectUrl, "_blank");
    }
  };

  const handleLinkClick = (e, url) => {
    e.preventDefault();
  
    setRedirectUrl(url);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navScroll = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen(false);
  };
  
  const navScroll2 = (e) => {
  e.preventDefault();

  if (window.location.pathname !== "/") {
    navigate.push("/");
     if (typeof window !== "undefined") {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: 500 },
        ease: "power2.in"
      });
    }
  } else {
    if (typeof window !== "undefined") {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: 500 },
        ease: "power2.in"
      });
    }
  }
};
  

  const understandingScroll = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleScroll = (id, path=null) => {
    setOpen(false);
    closeVideoFnRef?.current?.();

    if (path !== null){
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const targetPath = path.replace(/\/$/, "");
      if (currentPath !== targetPath) {
        navigate.push(path);
      }
    }

    const scrollToSection = (id, retries = 10) => {
      const section = document.getElementById(id);
      if (section) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const offset = navbarHeight + 200;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else if (retries > 0) {
        setTimeout(() => scrollToSection(id, retries - 1), 200);
      }
    };
    setTimeout(() => scrollToSection(id), 700);
  };

  const handleLogoClick = () => {
    navScroll();
    setOpen(false);
  };

  const toggleMenu = () => {
    console.log("Toggling menu", !isOpen);
    setStopScroll(true)
    setOpen(!isOpen);
  };

  const closeSidebar = () => {
    setStopScroll(false)
    setOpen(false);
  };

  useEffect(() => {
    setIsOpenNav(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        return;
      }
      if (window.scrollY > 220) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`xl:h-auto h-auto nav top-0 z-[1000] w-full fixed transition-transform duration-300 ${
        isVisible ? "transform-none" : "-translate-none"
      } font-sofia`}
    >
      {isMobile && (
        <div className="relative xl:hidden  h-fit">
          <div className="top-section relative  h-[40px] z-[100] w-full flex justify-center decoration-gray items-center text-[13px] bg-newM_mint_green xl:hidden xl:h-0">
            <div className="xl:hidden w-full flex items-center justify-center">
              <a
                target="_blank"
                href="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/doc/ORSERDU_Important_Facts.pdf"
                className="xl:hidden  text-[14px] font-light tracking-tight underline text-left leading-tight  whitespace-normal"
              >
                Important Facts
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center h-20">
            <div className="w-[85%] flex items-center justify-between h-full">
              <Link
                href="/"
                onClick={navScroll}
                className="relative xl:hidden cursor-pointer"
              >
                <img
                  src={mobileLOgo.src}
                  className="w-[180px] relative -z-[1] -top-1 object-contain"
                  alt="ORSERDU® (elacestrant) logo"
                  
                />
              </Link>
              <div className="xl:w-[0px] xl:hidden ml-4 flex items-center justify-end ">
                <div
                  onClick={() => toggleMenu()}
                  className="w-[30px] h-[36px] cursor-pointer flex flex-col justify-between py-[6px] "
                >
                  <span
                    style={{ backgroundColor: "#70C7AF" }}
                    className="block h-[4px]  rounded-xl transition-colors duration-300"
                  ></span>
                  <span
                    style={{ backgroundColor: "#70C7AF" }}
                    className="block h-[4px] rounded-xl transition-colors duration-300"
                  ></span>
                  <span
                    style={{ backgroundColor: "#70C7AF" }}
                    className="block h-[4px] rounded transition-colors duration-300"
                  ></span>
                </div>

                {/* 
                <Hamburger
                  color={hamburgerColor}
                  size={30}
                  rounded
                  toggled={isOpen}
                  toggle={toggleMenu}
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden middle-section h-[100px] 5xl:h-[110px] shadow-none w-full xl:flex justify-start xxl:justify-center z-[1001]">
        <div className="w-[100%]  h-[100%] flex flex-col xl:flex-row justify-between xl:justify-center xl:mt-0 items-center xl:items-end xl:  ">
          <div className="inside_bottom_section xl:mb-0  xl:bg-white relative bg-transparent xl:shadow-xl rounded-br-2xl xl:pb-0 xl:w-[90%] xxl:w-[90%] xxxl:w-[1100px] 6xl:w-[1300px] 5xl:w-[1280px]  items-start xl:items-center xl:justify-normal  h-[100%] flex xl:border-none pl-0">
            <div className="left_section   xl:w-[220px] xxl:w-[220px] xxxl:w-[200px] 5xl:w-[235px]  w-[100%] h-full relative flex flex-col m-0">
              <Link
                href="/"
                 onClick={(e)=>{navScroll2(e)}}
                className="relative xl:static cursor-pointer xl:w-full w-full justify-center items-end -z-10 xl:z-10 mt-[8%] xl:mt-0 flex h-[100%] xxl:h-[100%]"
              >
                <div className="5xl:w-[80%]  xxl:w-[80%]  w-[70%]  hidden xl:h-[121px] left-2 -top-12 h-auto absolute xl:static justify-center xl:mb-[5px] items-end  xl:flex">
                  <img
                    className="object-cover  w-full"
                    src={logo_img.src}
                    alt="ORSERDU® (elacestrant) logo"
                  />
                </div>
              </Link>
              <div className="xxl:text-[18px] text-[12px] font-[600] w-full hidden  xl:block capitalize shadow-xl bg-white  rounded-b-3xl p-3 ">
                <div className="flex justify-around items-center">
                 <a
                    href="https://www.facebook.com/share/16dYMY7Any/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img
                      src={facebook.src}
                      alt="Facebook icon"
                      className="w-9 h-9"
                    />
                  </a>
                 
                  <a
                    href="https://www.instagram.com/orserdu_elacestrant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img src={insta.src} alt="Instagram icon" className="w-9 h-9" />
                  </a>
                  
                  <a
                    href="https://www.tiktok.com/@orserdu_elacestrant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img src={tictok.src} alt="TikTok icon" className="w-9 h-9" />
                  </a>
                  <a
                    href="https://www.youtube.com/@orserdu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img src={yt.src} alt="YouTube icon" className="w-9 h-9" />
                  </a>
                </div>
              </div>
            </div>

            <div className="right_section  xxxl:h-[80%] 5xl:h-[81.5%]  hidden  pr-3 w-full  xl:flex flex-col items-start justify-end gap-[2px]">
                          <div className="top_link  hidden pl-5 w-full  xl:flex justify-end   text-[12px] xl:gap-[20px] xxl:gap-[25px] xxxl:gap-[20px] 3xl:gap-[40px] 4xl:gap-[45px] 2xl:gap-[60px] 5xl:gap-[45px] 6xl:gap-[45px]  xxl:text-[14px] xxx decoration-gray font-[300] underline leading-[21px] relative xl:-top-1  ">

                <p onClick={() => handleScroll("isi")} className="isi-scroll cursor-pointer">
                  Important Safety Information
                </p>
                <a
                  target="_blank"
                  href="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/doc/ORSERDU_Important_Facts.pdf"
                >
                  Important Facts
                </a>
                <a href="http://pi.orserdu.com" target="_blank">
                  Full Prescribing Information
                </a>
                <a
                  className="leaving-modal cursor-pointer"
                  onClick={(e) => { e.preventDefault(); setIsPdfOpen(true); }}
                  href="#"
                >
                  Patient Brochure
                  <TbFileDownload
                    style={{ fontWeight: 300 }}
                    className="inline-block ml-1"
                  />
                </a>
                <a
                  href="/documents/Patient_Brochure.pdf"
                  download="Patient_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Download Pdf Brochure
                  <TbFileDownload
                    style={{ fontWeight: 300 }}
                    className="inline-block ml-1"
                  />
                </a>
                <a
                  onClick={(e) =>
                    handleLinkClick(e, "https://www.orserduhcp.com")
                  }
                  className="leaving-modal"
                  target="_blank"
                  href=""
                >
                  Healthcare Professional Site
                  <IoIosArrowRoundForward className="inline-block ml-1" />
                </a>
              </div>

              <div className="relative hidden gap-1    bottom_menu h-[53px]     w-full xl:flex justify-between items-center leading-[18px] font-[700] text-[16px] xxl:text-[16px] xxxl:text-[16px] 5xl:text-[18px] text-left text-dark_green before:content-[''] before:absolute before:w-[2px] before:h-[64px] before:top-[-19px] before:left-0 before:bg-[#F3C623]">
                <Link
                  href="/"
                   onClick={(e)=>{navScroll2(e)}}
                  className={
                    `nav-item w-1/2 mr-2 ml-1 bg- flex justify-center items-center  
                    }`
                  }
                >
                  <span className="flex xl:w-[40%] xxl:w-[50%] h-[90%] justify-center items-center gap-1">
                    <img
                      src={home.src}
                      className="xxl:h-[90%] 5xl:h-[80%]"
                      alt="Home icon"
                    />
                  </span>
                </Link>

                <div className="relative group h-full w-full">
                  <ActiveLink
                    href="/understanding-esr1-mutations/"
                    onClick={navScroll}
                    className="flex justify-center items-center h-full w-full relative  "
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center  hover:bg-[#F3C623] hover:rounded-full items-center xl:h-[70%] xxl:h-[80%]  pl-4 pr-3 transition-colors ${
                          isActive ? "bg-[#F3C623]" : "group-hover:bg-[#F3C623]"
                        }`}
                      >
                        <span
                          className="flex items-center  cursor-pointer leading-4"
                          tabIndex={0}
                          role="button"
                        >
                          <span className="text-center">
                            Understanding <br />
                            your cancer
                          </span>
                          <span className="font-extrabold flex items-center ">
                            <i
                              className={`icon-down icon ml-2 fa-solid fa-chevron-down font-extrabold ${
                                isActive ? "" : "text-green-500"
                              } group-hover:rotate-180 transform transition-transform duration-300`}
                            ></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>

                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/understanding-esr1-mutations/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll("what-you-should-know", "/understanding-esr1-mutations");
                        }}
                        className="text-left flex  mt-5 mb-1 items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left">What are mutations?</span>
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start gap-1 align-items-start pad-1 mb-2 height-auto">
                      <Link
                        href="/understanding-esr1-mutations"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll("testingEsr1", "/understanding-esr1-mutations");
                        }}
                        className="text-left flex rounded-3xl items-start rounded-t-none justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left mb-[6px]">What is an <em className="font-[700]">ESR1</em> mutation?</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="relative group h-full w-[115%]">
                  <ActiveLink
                    href="/testing/"
                    onClick={navScroll}
                    className="flex justify-center items-center h-full w-full relative"
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center hover:bg-[#F3C623] hover:rounded-full items-center xl:h-[70%] xxl:h-[80%] w-full transition-colors ${
                          isActive ? "bg-[#F3C623]" : "group-hover:bg-[#F3C623]"
                        }`}
                      >
                        <span className="flex items-center gap-1 cursor-pointer leading-4" tabIndex={0} role="button">
                          <span>Testing</span>
                          <span className="font-extrabold flex items-center">
                            <i className={`icon-down icon ml-2 fa-solid fa-chevron-down font-extrabold ${
                              isActive ? "" : "text-green-500"
                            } group-hover:rotate-180 transform transition-transform duration-300`}></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>
                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/testing"
                        onClick={(e) => { e.preventDefault(); handleScroll("how-does-testing-work", "/testing"); }}
                        className="text-left flex  mt-5 mb-1 items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">How does testing work?</span>
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start gap-1 align-items-start pad-1 mb-2 height-auto">
                      <Link
                        href="/testing"
                        onClick={(e) => { e.preventDefault(); handleScroll("when-should-testing-occur", "/testing"); }}
                        className="text-left flex rounded-3xl items-start rounded-t-none  justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%] ">When should testing occur?</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <ActiveLink
                  href="/orserdu-results/"
                  onClick={navScroll}
                  className="nav-item flex justify-center text-center items-center h-full w-[85%] "
                >
                  {({ isActive }) => (
                    <span
                      className={`xl:h-[70%] xxl:h-[80%] w-full text-center flex transition-all duration-500 hover:bg-[#F3C623] hover:rounded-full justify-center items-center ${
                        isActive
                          ? "border-dark_green bg-[#F3C623] rounded-full"
                          : ""
                      }`}
                    >
                      <span>Results</span>
                    </span>
                  )}
                </ActiveLink>

                <ActiveLink
                  href="/orserdu-safety/"
                  onClick={navScroll}
                  className="nav-item flex justify-center text-center items-center h-full w-[85%] "
                >
                  {({ isActive }) => (
                    <span
                      className={`xl:h-[70%] xxl:h-[80%] w-full text-center flex justify-center items-center hover:bg-[#F3C623] hover:rounded-full ${
                        isActive
                          ? "border-yellow bg-[#F3C623] rounded-full"
                          : ""
                      }`}
                    >
                      <span>Safety</span>
                    </span>
                  )}
                </ActiveLink>

                {/* <ActiveLink
                  href="/taking-orserdu/"
                  onClick={navScroll}
                  className="nav-item flex justify-center text-center items-center h-full w-[95%] "
                >
                  {({ isActive }) => (
                    <span
                      className={`xl:h-[70%] xxl:h-[80%] w-full hover:bg-[#F3C623] hover:rounded-full text-center flex justify-center items-center ${
                        isActive
                          ? "border-yellow bg-[#F3C623] rounded-full"
                          : ""
                      }`}
                    >
                      <span className="leading-[18px]">
                        Taking
                        <br /> ORSERDU
                      </span>
                    </span>
                  )}
                </ActiveLink> */}

                  <div className="relative group h-full w-[115%] ">
                  <ActiveLink
                    href="/taking-orserdu/"
                    onClick={navScroll}
                    className="flex justify-center items-center h-full w-full relative "
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center hover:bg-[#F3C623] hover:rounded-full items-center xl:h-[70%] xxl:h-[80%] w-full transition-colors ${
                          isActive ? "bg-[#F3C623]" : "group-hover:bg-[#F3C623]"
                        }`}
                      >
                        <span className="flex items-center xxl:gap-1 cursor-pointer leading-4" tabIndex={0}  role="button">
                          <span className="leading-4 text-center">Taking <br className="xl:hidden xxl:block" /> ORSERDU</span>
                          <span className="font-extrabold flex items-center">
                            <i className={`icon-down icon xxl:ml-2 mr-1 xxl:mr-0 fa-solid fa-chevron-down font-extrabold text-green-500 group-hover:rotate-180 transform transition-transform duration-300`}></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>
                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/taking-orserdu/"
                        onClick={(e) => { e.preventDefault(); handleScroll("resources", "/taking-orserdu"); }}
                        className="text-left flex mt-5 mb-1 items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">Resources</span>
                      </Link>
                    </li>
                    
                   
                  </ul>
                </div>

                {/* medtrix */}
                     <div className="relative group h-full w-[115%] ">
                  <ActiveLink
                    href="/medtrix"
                    onClick={navScroll}
                    className="flex justify-center items-center h-full w-full relative "
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center hover:bg-[#F3C623] hover:rounded-full items-center xl:h-[70%] xxl:h-[80%] w-full transition-colors ${
                          isActive ? "bg-[#F3C623]" : "group-hover:bg-[#F3C623]"
                        }`}
                      >
                        <span className="flex items-center xxl:gap-1 cursor-pointer leading-4" tabIndex={0}  role="button">
                          <span className="leading-4 text-center">MedTrix Healthcare</span>
                          <span className="font-extrabold flex items-center">
                            <i className={`icon-down icon xxl:ml-2 mr-1 xxl:mr-0 fa-solid fa-chevron-down font-extrabold text-green-500 group-hover:rotate-180 transform transition-transform duration-300`}></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>
                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/medtrix"
                        onClick={(e) => { e.preventDefault(); handleScroll("clients", "/medtrix"); }}
                        className="text-left flex mt-5  items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">Clients</span>
                      </Link>
                    </li>
                     <li className="flex justify-start items-center height-auto ">
                      <Link
                        href="/medtrix"
                        onClick={(e) => { e.preventDefault(); handleScroll("resources", "/medtrix"); }}
                        className="text-left flex  mb-1 items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0  text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">Medical Information</span>
                      </Link>
                    </li>
                    
                   
                  </ul>
                </div>


                   

                <div className="relative group h-full w-[115%]">
                  <ActiveLink
                    href="/savings-and-support/"
                    onClick={navScroll}
                    className="flex justify-center items-center h-full w-full relative "
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center hover:bg-[#F3C623] hover:rounded-full items-center xl:h-[70%] xxl:h-[80%] w-full transition-colors ${
                          isActive ? "bg-[#F3C623]" : "group-hover:bg-[#F3C623]"
                        }`}
                      >
                        <span className="flex items-center xxl:gap-1 cursor-pointer leading-4" tabIndex={0}  role="button">
                          <span className="leading-4 text-center">Savings  &amp; resources</span>
                          <span className="font-extrabold flex items-center">
                            <i className={`icon-down icon xxl:ml-2 mr-1 xxl:mr-0 fa-solid fa-chevron-down font-extrabold text-green-500 group-hover:rotate-180 transform transition-transform duration-300`}></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>
                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/savings-and-support"
                        onClick={(e) => { e.preventDefault(); handleScroll("resources", "/savings-and-support"); }}
                        className="text-left flex mt-5 mb-1 items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">Resources</span>
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start gap-1 align-items-start pad-1  height-auto">
                      <Link
                        href="/savings-and-support"
                        onClick={(e) => { e.preventDefault(); handleScroll("faq", "/savings-and-support"); }}
                        className="text-left flex rounded-3xl items-start rounded-t-none justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%] mb-[6px]">FAQ</span>
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start gap-1 align-items-start pad-1 mb-2 height-auto">
                      <Link
                        href="/savings-and-support"
                        onClick={(e) => { e.preventDefault(); handleScroll("testingQA", "/savings-and-support"); }}
                        className="text-left flex rounded-3xl items-start rounded-t-none justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%] mb-[6px]">TestingQA</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                 <div className="relative group h-full w-[115%] ">
                  <ActiveLink
                    href="/data"
                    onClick={navScroll}
                    className="flex justify-center items-center h-full w-full relative "
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center hover:bg-[#F3C623] hover:rounded-full items-center xl:h-[70%] xxl:h-[80%] w-full transition-colors ${
                          isActive ? "bg-[#F3C623]" : "group-hover:bg-[#F3C623]"
                        }`}
                      >
                        <span className="flex items-center xxl:gap-1 cursor-pointer leading-4" tabIndex={0}  role="button">
                          <span className="leading-4 text-center">Health Data</span>
                          <span className="font-extrabold flex items-center">
                            <i className={`icon-down icon xxl:ml-2 mr-1 xxl:mr-0 fa-solid fa-chevron-down font-extrabold text-green-500 group-hover:rotate-180 transform transition-transform duration-300`}></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>
                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/data"
                        onClick={(e) => { e.preventDefault(); handleScroll("District", "/data"); }}
                        className="text-left flex mt-5  items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">District Wise</span>
                      </Link>
                    </li>
                    
                    
                   
                  </ul>
                </div>

                <div className="relative group h-full w-[110%]">
                  <ActiveLink
                    href="/real-stories/"
                    onClick={(e) => {
                      const params = new URLSearchParams(window.location.search);
                      if (params.get("id")) {
                        e.preventDefault();
                        closeVideoFnRef?.current?.();
                        setTimeout(() => navScroll(), 50);
                      } else {
                        navScroll();
                      }
                    }}
                    className="flex justify-center items-center h-full w-full relative"
                  >
                    {({ isActive }) => (
                      <span
                        className={`z-50 rounded-full flex justify-center items-center xl:h-[70%] xxl:h-[80%] w-full transition-colors ${
                          isActive ? "bg-[#F3C623] text-dark_green" : "bg-dark_green text-white group-hover:bg-[#F3C623] group-hover:text-dark_green"
                        }`}
                      >
                        <span className="flex items-center gap-1 cursor-pointer leading-4" tabIndex={0} role="button">
                          <span className="text-center">
                            <span className="font-extrabold text-[16px] xxl:text-[18px] ">1</span>{" "}for me <br /> stories
                          </span>
                          <span className="font-extrabold flex items-center">
                            <i className={`icon-down icon ml-2 fa-solid fa-chevron-down font-extrabold ${
                              isActive ? "" : "text-green-500"
                            } group-hover:rotate-180 transform transition-transform duration-300`}></i>
                          </span>
                        </span>
                      </span>
                    )}
                  </ActiveLink>
                  <ul className="submenu shadow-box_shadow absolute w-full hidden top-[24px] left-0 rounded-b-3xl rounded-t-none z-10 group-hover:block text-dark_green bg-[#E0FAF3] border-t-0">
                    <li className="flex justify-start items-center height-auto pt-2">
                      <Link
                        href="/real-stories"
                        onClick={(e) => {
                          e.preventDefault();
                          closeVideoFnRef?.current?.();
                          handleScroll("from-people-like-you", "/real-stories");
                        }}
                        className="text-left flex  mt-5 mb-1 items-start justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[80%]">From people like you</span>
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start gap-1 align-items-start pad-1 mb-2 height-auto">
                      <Link
                        href="/real-stories"
                        onClick={(e) => {
                          e.preventDefault();
                          closeVideoFnRef?.current?.();
                          handleScroll("from-mbc-experts", "/real-stories");
                        }}
                        className="text-left flex rounded-3xl items-start rounded-t-none  justify-start gap-1 nav-item hover:opacity-55"
                      >
                        <i className="fa-solid fa-chevron-right text-green-500 shrink-0 mt-[2px] text-[13px] ml-2 mr-1" style={{WebkitTextStroke: '0.8px currentColor'}}></i>
                        <span className="text-left w-[70%] ">From experts</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black backdrop-blur-xl  bg-opacity-40  z-[100]"
              onClick={closeSidebar}
            />
          )}

          <div
            className={`fixed top-0 right-0  w-[90%] h-[100vh]  hide-scrollbar max-w-[400px] z-[800] transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <SlideNavbar
              handleLinkClick={handleLinkClick}
              closeSidebar={closeSidebar}
              handleScroll={handleScroll}
              navScroll={navScroll}
              understandingScroll={understandingScroll}
              setIsPdfOpen={setIsPdfOpen}
            />
          </div>
        </>
      )}

      <Modal2ndStyle
        isOpen={isModalOpen}
        onClose={handleCancel}
        onContinue={handleContinue}
      />

      <PdfViewerModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
      />
    </div>
  );
};

export default Navbar;


