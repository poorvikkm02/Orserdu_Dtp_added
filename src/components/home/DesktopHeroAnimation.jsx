"use client"

import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "../modals/Modal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavigationButton from "./NavigationButton";
// import he from "../../assets/Desktop/HelixIconDesktop.png";
// import Brochure from "../../assets/Desktop/Brochure.png";
import Brochure  from "../../assets/Desktop/new/newICons/brochure.png"
import dna from "../../assets/Desktop/new/newICons/dna.png";


import pill from "../../assets/Desktop/new/newICons/pill.png"
import laptop from "../../assets/Desktop/new/newICons/laptop.png"

import thumbnail from "@/assets/Desktop/thumbnail.png";
import play from "../../assets/Desktop/play.png";
import bg2 from "../../assets/Desktop/bf2.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { ResponsiveContext } from "@/context/ResponsiveContext";
// import { Link } from "react-router-dom";

import border from "../../assets/images/home/border.png"
import scr from "../../assets/images/home/scr.svg"
import heroImage1 from "../../assets/Desktop/new/homePage_updated.png"
import PreLoader from "@/components/loaders/PreLoader";
import img3 from "../../assets/Desktop/new/icons/img1.png"
// import heroimg from "../../assets/Desktop/new/heroimg.png"
import img1 from "../../assets/Desktop/new/icons/img2.png"
import img2 from "../../assets/Desktop/new/icons/img3.png"
import Link from "next/link";
// import Lenis from '@studio-freight/lenis';




// Cache for background images
const bgImageCache = new Map();
const heroImage=heroImage1

const DesktopHeroAnimation = ({  cutoutImage }) => {

  useEffect(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    setRedirectUrl(url);
    setIsModalOpen(true);
  };
  const handleContinue = () => {
    setIsModalOpen(false);
    setTimeout(() => window.open(redirectUrl, '_blank'), 0);
  };
  const handleCancel = () => setIsModalOpen(false);

  const { isMobile, navbarWidth } = useContext(ResponsiveContext);
  const bgImage="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/homePage_updated_2_new.png"
 const buttonData = [
    {
      text: "Learn about <span class='whitespace-nowrap'><br/><i class='italic font-[500]'>ESR1</i> mutations</span>",
      link: "/understanding-esr1-mutations",
      alt:"What is esr1 mutation explanation button",
      imageSrc: dna,
       newTab:false
    },
    {
      text: "Learn about<br/>ORSERDU",
      link: "/orserdu-results",
      alt:"Once-daily pill button",
      imageSrc: pill,
       newTab:false
    },
    {
      text: "Learn about <br/>testing",
      alt:"Download Orserdu® (elacestrant) brochure",
      link: "/testing",
      imageSrc: laptop,
       newTab:false
    },
  ];

  const animationContainerRef = useRef(null);
  const cutoutRef = useRef(null);
  const bgRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const esr1Ref = useRef(null);
  const borderRef=useRef(null)
  const slidupRef=useRef(null)
  const fdaTextRef=useRef(null)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
 const [isImageLoaded, setIsImageLoaded] = useState(false);
 
useEffect(() => {
  if (!bgImage) return;

  const loadImage = async () => {
    setIsImageLoaded(false);

    try {
      await Promise.race([
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = bgImage;
          if (img.complete) resolve();
        }),
        new Promise((resolve) => setTimeout(resolve, 5000))
      ]);
    } catch (error) {
      console.error('Error loading background image:', error);
    } finally {
      setIsImageLoaded(true);
    }
  };

  loadImage();
}, [bgImage]);
  // Preload and cache the background image
  useEffect(() => {
    if (!bgImage) return;

    const loadImage = async () => {
      if (bgImageCache.has(bgImage)) {
        return; // Image already loaded and cached
      }

      try {
        const img = new Image();
        img.src = bgImage;
        await img.decode();
        bgImageCache.set(bgImage, true);
      } catch (error) {
        console.error('Error loading background image:', error);
      }
    };

    loadImage();
  }, [bgImage]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
//  useEffect(() => {
//   const lenis = new Lenis({
//     lerp: 0.2,
//     smooth: true,
//     direction: 'vertical',
//   });

//   // Connect Lenis to GSAP ScrollTrigger
//   lenis.on('scroll', ScrollTrigger.update);
  
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
  
//   gsap.ticker.lagSmoothing(0);

//   // Reset scroll position when navigating away
//   return () => {
//     lenis.destroy();
//     gsap.ticker.remove((time) => {
//       lenis.raf(time * 1000);
//     });
//     // Reset scroll position to top
//     window.scrollTo(0, 0);
//   };
// }, []);
  const getTextPositions = () => {
    const { width } = windowSize;
    
    // Your existing position logic remains the same
    if (width >= 2030) {
      return {
        text1Initial: { top: "8%", left: "50.5%", fontSize: "48px" },
        text2Initial: { top: "36%", left: "36.5%", fontSize: "48px" },
        text3Initial: { top: "35.5%", right: "37%", fontSize: "62px" },
        text4Initial: { top: "64%", fontSize: "22px" },
        esr1Initial: { fontSize: "62px" },
        text1Final: { top: "24%", left: "34.1%", fontSize: "1.5vw" },
        text2Final: { top: "24.4%", left: "45.4%", fontSize: "1.5vw" },
        text3Final: { top: "24%", right: "37.5%", fontSize: "2vw" },
        text4Final: { top: "41%", fontSize: "19px" },
        esr1Final: { fontSize: "2vw" },
        borderRef: { top: "512px" },
        bgRef: { top: "10%", left: "61%" },
        containerWidth: "75%",
        textWidth: "35%"
      };
    }
    if (width >= 1910) {
      return {
        text1Initial: { top: "10%", left: "50.5%", fontSize: "48px" },
        text2Initial: { top: "36%", left: "36.5%", fontSize: "48px" },
        text3Initial: { top: "35.5%", right: "37%", fontSize: "62px" },
        text4Initial: { top: "62%", fontSize: "22px" },
        esr1Initial: { fontSize: "62px" },
        text1Final: { top: "26%", left: "34.1%", fontSize: "1.5vw" },
        text2Final: { top: "26.4%", left: "45.4%", fontSize: "1.5vw" },
        text3Final: { top: "26%", right: "37.5%", fontSize: "2vw" },
        text4Final: { top: "42%", fontSize: "19px" },
        esr1Final: { fontSize: "2vw" },
        borderRef: { top: "512px" },
        bgRef: { top: "10%", left: "61%" },
        containerWidth: "75%",
        textWidth: "35%"
      };
    }
  else if (width >= 2560) {
    return {
      text1Initial: { top: "16%", left: "50%", fontSize: "3.5vw" },
      text2Initial: { top: "35%", left: "43%", fontSize: "3.5vw" },
      text3Initial: { top: "35%", right: "41%", fontSize: "4vw" },
        text4Initial: { top: "56%",fontSize:"11.50px"},
      esr1Initial: { fontSize: "4vw" },
      text1Final: { top: "35%", left: "41.5%", fontSize: "2vw" },
      text2Final: { top: "35%", left: "48%", fontSize: "2vw" }, // Added top position
      text3Final: { top: "35%", right: "39%", fontSize: "2.5vw" }, // Added top position
      text4Final: { top: "53%",fontSize:"11.50px" },
      esr1Final: { fontSize: "2.5vw" },
      containerWidth: "70%",
      textWidth: "30%",
         bgRef:{top:"10%"}
    };
  }
  else if (width >= 1700) {
    return {
      text1Initial: { top: "17.9%", left: "51.5%", fontSize: "2.5vw" },
      text2Initial: { top: "41.8%", left: "37%", fontSize: "2.5vw" },
      text3Initial: { top: "41%", right: "35%", fontSize: "3.5vw" },
        text4Initial: { top: "68%",fontSize:"20px"},
      esr1Initial: { fontSize: "3.5vw" },
      text1Final: { top: "28%", left: "33.8%", fontSize: "1.5vw" },
      text2Final: { top: "28.4%", left: "45%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "28%", right: "37%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "44%",fontSize:"16.50px" }, 
      esr1Final: { fontSize: "2vw" },
      containerWidth: "75%",
      textWidth: "35%",
        initialScale: 1.7,
        borderRef:{top:"520px",left:"61%"},
        
         bgRef:{top:"14%"}
    };
  }
  else if (width >= 1650) {
    return {
      text1Initial: { top: "17.9%", left: "51.5%", fontSize: "2.5vw" },
      text2Initial: { top: "41.8%", left: "37%", fontSize: "2.5vw" },
      text3Initial: { top: "41%", right: "35%", fontSize: "3.5vw" },
        text4Initial: { top: "68%",fontSize:"20px"},
      esr1Initial: { fontSize: "3.5vw" },
      text1Final: { top: "28%", left: "33.7%", fontSize: "1.5vw" },
      text2Final: { top: "28.4%", left: "45%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "28%", right: "37%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "44%",fontSize:"16.50px" }, 
      esr1Final: { fontSize: "2vw" },
      containerWidth: "75%",
      textWidth: "35%",
        initialScale: 1.7,
        borderRef:{top:"490px",left:"61%"},
        
         bgRef:{top:"14%"}
    };
  }
  else if (width >= 1580) {
    return {
      text1Initial: { top: "15%", left: "51%", fontSize: "40px" },
      text2Initial: { top: "34.5%", left: "37%", fontSize: "40px" },
      text3Initial: { top: "34%", right: "36%", fontSize: "56px" },
        text4Initial: { top: "58%",fontSize:"19.50px"},
      esr1Initial: { fontSize: "56px" },
      text1Final: { top: "26%", left: "33.5%", fontSize: "1.5vw" },
      text2Final: { top: "26.6%", left: "45.5%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "26%", right: "36%", fontSize: "2.5vw" }, // Added top position
      text4Final: { top: "43%" ,fontSize:"15.50px"},
      esr1Final: { fontSize: "2.5vw" },
      containerWidth: "75%",
      textWidth: "35%",
      borderRef:{top:"418px",left:"60.5%"},
         bgRef:{top:"9%"}
      
    };
  }

  else if (width >= 1526) {
   return {
      text1Initial: { top: "16.5%", left: "51%", fontSize: "40px" },
      text2Initial: { top: "38.6%", left: "36.5%", fontSize: "40px" },
      text3Initial: { top: "38%", right: "36%", fontSize: "56px" },
        text4Initial: { top: "60%",fontSize:"18.50px"},
      esr1Initial: { fontSize: "56px" },
      text1Final: { top: "28%", left: "33.5%", fontSize: "1.5vw" },
      text2Final: { top: "28.6%", left: "45.5%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "28%", right: "37%", fontSize: "2.5vw" }, // Added top position
      text4Final: { top: "43%" ,fontSize:"15.50px"},
      esr1Final: { fontSize: "2.5vw" },
      containerWidth: "75%",
      textWidth: "35%",
      borderRef:{top:"408px",left:"61%"},
         bgRef:{top:"10%"}
    };
  }

  else if (width >= 1430) {
    return {
      text1Initial: { top: "18.5%", left: "51%", fontSize: "36px" },
      text2Initial: { top: "39%", left: "37%", fontSize: "36px" },
      text3Initial: { top: "38.4%", right: "36%", fontSize: "50px" },
        text4Initial: { top: "57%",fontSize:"15.50px"},
      esr1Initial: { fontSize: "50px" },
      text1Final: { top: "28%", left: "33.7%", fontSize: "1.5vw" },
      text2Final: { top: "28.5%", left: "45.6%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "28%", right: "36%", fontSize: "2.5vw" }, // Added top position
      text4Final: { top: "42%",fontSize:"13.50px" },
      esr1Final: { fontSize: "2.5vw" },
      borderRef:{top:"385px",left:"61%"},
         bgRef:{top:"10%"}
    };
  }
  // else if (width >= 1365) {
  //   return {
  //     text1Initial: { top: "19.5%", left: "51%", fontSize: "34px" },
  //     text2Initial: { top: "38.4%", left: "39%", fontSize: "34px" },
  //     text3Initial: { top: "38%", right: "37%", fontSize: "47.50px" },
  //       text4Initial: { top: "59%",fontSize:"15px"},
  //     esr1Initial: { fontSize: "47.50px" },
  //     text1Final: { top: "30%", left: "38.5%", fontSize: "1.5vw" },
  //     text2Final: { top: "30.2%", left: "47%", fontSize: "1.5vw" }, // Added top position
  //     text3Final: { top: "30%", right: "38.5%", fontSize: "2vw" }, // Added top position
  //     text4Final: { top: "42%",fontSize:"10.50px" },
  //     esr1Final: { fontSize: "2vw" },
  //       initialScale: 2,
  //        bgRef:{top:"18%"}
      
  //   };

  // }
  
  else if (width >= 1360) {
    return {
      text1Initial: { top: "18.5%", left: "51%", fontSize: "34px" },
      text2Initial: { top: "38.4%", left: "37%", fontSize: "34px" },
      text3Initial: { top: "38%", right: "36%", fontSize: "47.50px" },
        text4Initial: { top: "59%",fontSize:"18px"},
      esr1Initial: { fontSize: "47.50px" },
      text1Final: { top: "29%", left: "34%", fontSize: "1.5vw" },
      text2Final: { top: "29.2%", left: "45.3%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "29%", right: "37.5%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "42%",fontSize:"14.50px" },
      esr1Final: { fontSize: "2vw" },
        initialScale: 1.6,
        borderRef:{top:"368px",left:"61.5%"},
         bgRef:{top:"10%"}
      
    };

  } 
  else if (width >= 1260) {
    return {
      text1Initial: { top: "19.5%", left: "51%", fontSize: "32px" },
      text2Initial: { top: "36.5%", left: "37.6%", fontSize: "32px" },
      text3Initial: { top: "36%", right: "37%", fontSize: "44.50px" },
        text4Initial: { top: "56%",fontSize:"15px"},
      esr1Initial: { fontSize: "44.50px" },
      text1Final: { top: "28%", left: "35.3%", fontSize: "1.3vw" },
      text2Final: { top: "28.2%", left: "45.5%", fontSize: "1.3vw" }, // Added top position
      text3Final: { top: "28%", right: "37.5%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "40%",fontSize:"12px" },
      esr1Final: { fontSize: "2vw" },
      borderRef:{top:"340px",left:"61%"},
         bgRef:{top:"10%"}
    };
  } else if (width >= 1140) {
    return {
      text1Initial: { top: "27.5%", left: "51.9%", fontSize: "2.2vw" },
      text2Initial: { top: "44%", left: "38.2%", fontSize: "2.2vw" },
      text3Initial: { top: "44%", right: "34%", fontSize: "3vw" },
        text4Initial: { top: "63%",fontSize:"13.50px"},
      esr1Initial: { fontSize: "3vw" },
      text1Final: { top: "32%", left: "33.8%", fontSize: "1.5vw" },
      text2Final: { top: "32.2%", left: "45%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "32%", right: "37%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "42%",fontSize:"11.50px" },
      esr1Final: { fontSize: "2vw" },
       initialScale: 1.9,
       borderRef:{top:"365px",left:"64%"},
         bgRef:{top:"17%"}
    };
  } else if (width >= 1014) {
    return {
      text1Initial: { top: "27%", left: "75%", fontSize: "2vw" },
      text2Initial: { top: "43%", left: "39%", fontSize: "2vw" },
      text3Initial: { top: "42.7%", right: "36%", fontSize: "3vw" },
        text4Initial: { top: "58%",fontSize:"11.50px"},
      esr1Initial: { fontSize: "3vw" },
      text1Final: { top: "32%", left: "35%", fontSize: "1.5vw" },
      text2Final: { top: "32%", left: "45.5%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "32%", right: "37%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "40%",fontSize:"9.50px" },
      esr1Final: { fontSize: "2vw" },
      initialScale:1.8,
      borderRef:{top:"340px",left:"63%"},
         bgRef:{top:"15%"}
    };
  } else {
      return {
        text1Initial: { top: "27%", left: "52%", fontSize: "2vw" },
      text2Initial: { top: "43%", left: "39%", fontSize: "2vw" },
      text3Initial: { top: "42.7%", right: "36%", fontSize: "3vw" },
        text4Initial: { top: "58%",fontSize:"9.50px"},
      esr1Initial: { fontSize: "3vw" },
      text1Final: { top: "32%", left: "38%", fontSize: "1.5vw" },
      text2Final: { top: "32%", left: "43.5%", fontSize: "1.5vw" }, // Added top position
      text3Final: { top: "32%", right: "37%", fontSize: "2vw" }, // Added top position
      text4Final: { top: "40%",fontSize:"7.50px" },
      esr1Final: { fontSize: "2vw" },
      initialScale:1.8,
      borderRef:{top:"40%",left:"60%"},
         bgRef:{top:"15%"}
      };
    }
  };

  // original 
//   useEffect(() => {
//     if (!animationContainerRef.current|| !isImageLoaded) return;

//     const positions = getTextPositions();
//     let ctx;
//     let mm;

//     const setupAnimation = () => {
//       if (ctx) ctx.revert();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//       ctx = gsap.context(() => {
//         gsap.set([text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current], {
//           willChange: "transform, opacity"
//         });
        
//         gsap.set(bgRef.current, { 
//              scale: positions?.initialScale||1.6,
//             top:positions.bgRef.top,
//             left:"-5.4%",
//           transformOrigin: "center center",
//           willChange: "transform"
//         });
        
//         gsap.set(slidupRef.current, { 
//           y: 100, 
//           opacity: 0,
//           willChange: "transform, opacity"
//         });

//         gsap.set(fdaTextRef.current, {
//           y: 30,
         
//           opacity: 0,
//           willChange: "transform, opacity"
//         });
        
//         gsap.set(borderRef.current, { opacity: 1,top: positions.borderRef?.top ,left:positions.borderRef?.left});
// // gsap.set(animationContainerRef.current,{height:"100vh"})
//         // Set initial text positions
//         gsap.set(text1Ref.current, positions.text1Initial);
//         gsap.set(text2Ref.current, positions.text2Initial);
//         gsap.set(text3Ref.current, positions.text3Initial);
//         gsap.set(text4Ref.current, positions.text4Initial);
//         gsap.set(esr1Ref.current, { fontSize: positions.esr1Initial.fontSize });

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: animationContainerRef.current,
//              start: "top top",
//             end: "+=500px",
//             scrub: 3,
//             // markers:true,
//             delay:0,
//             pin: true,
//             anticipatePin: 1,
//             invalidateOnRefresh: true,
//             // markers: true,
//             snap: {
//               snapTo: 1,
//               duration: {min:0.2,max:0.4},
//               delay: 1,
//               ease: "sine.out"
//             },
//           }
//         });

//         tl.to(slidupRef.current, {
//           y: 0,
//           opacity: 1,
//           display:"block",
//           ease: "sine.out",
//           duration: 1
//         }, 0.8);

//         tl.to(fdaTextRef.current, {
//           y: 0,
        
//           opacity: 0.8,
//           ease: "sine.out",
//           duration: 1
//         }, 1);

//         tl.to(bgRef.current, {
//           scale: 1,
//           top:0,
//           left:0,
//           ease: "sine.out",
//           duration: 1.2
//         }, 0);

//         tl.to(borderRef.current, {
//           opacity: 0,
//           ease: "power2.inOut",
//           duration: 0.1
//         }, 0);

//         tl.to(text1Ref.current, {
//           ...positions.text1Final,
//           ease: "power4.inOut",
//           duration: 1.2
//         }, 0);

//         tl.to(text2Ref.current, {
//           ...positions.text2Final,
//           ease: "power2.inOut",
//           duration: 1.2
//         }, 0);

//         tl.to(text3Ref.current, {
//           ...positions.text3Final,
//           ease: "power2.inOut",
//           duration: 1.2
//         }, 0);

//         tl.to(text4Ref.current, {
//           ...positions.text4Final,
//           ease: "power2.inOut",
//           duration: 1.2
//         }, 0);

//         tl.to(esr1Ref.current, {
//           fontSize: positions.esr1Final.fontSize,
//           ease: "power2.inOut",
//           duration: 1.2
//         }, 0);
//       }, animationContainerRef);

//       mm = gsap.matchMedia();
//       mm.add("(max-width: 1024px)", () => {
//         // Adjust animations for smaller screens if needed
//       });
//     };

//     setupAnimation();

//     return () => {
//       if (ctx) ctx.revert();
//       if (mm) mm.revert();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [windowSize.width,isImageLoaded]);


// Practice

useEffect(() => {
  if (!animationContainerRef.current || !isImageLoaded) return;

  const positions = getTextPositions();
  let ctx;
  let mm;

  const setupAnimation = () => {
    if (ctx) ctx.revert();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    ctx = gsap.context(() => {
      gsap.set([text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current], {
        willChange: "transform, opacity"
      });

      gsap.set(bgRef.current, {
        scale: positions?.initialScale || 1.6,
        top: positions.bgRef.top,
        left: "-5.4%",
        transformOrigin: "center center",
        willChange: "transform"
      });

      gsap.set(slidupRef.current, {
        y: 100,
        opacity: 0,
        willChange: "transform, opacity"
      });

      gsap.set(fdaTextRef.current, {
        y: 30,
        opacity: 0,
        willChange: "transform, opacity"
      });

      gsap.set(borderRef.current, {
        opacity: 1,
        top: positions.borderRef?.top,
        left: positions.borderRef?.left
      });

      gsap.set(text1Ref.current, positions.text1Initial);
      gsap.set(text2Ref.current, positions.text2Initial);
      gsap.set(text3Ref.current, positions.text3Initial);
      gsap.set(text4Ref.current, positions.text4Initial);
      gsap.set(esr1Ref.current, { fontSize: positions.esr1Initial.fontSize });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationContainerRef.current,
          start: "top top",
          end: "+=500px",
          scrub: 3,
          delay: 0,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1,
            duration: { min: 0.2, max: 0.4 },
            delay: 1,
            ease: "sine.out"
          },
        }
      });

      tl.to(slidupRef.current, {
        y: 0,
        opacity: 1,
        // display: "flex", // button group renders as a row it is cpommented out by me for testing
        ease: "sine.out",
        duration: 1
      }, 0.8);

      tl.to(fdaTextRef.current, {
        y: 0,
        opacity: 0.8,
        ease: "sine.out",
        duration: 1
      }, 1);

      tl.to(bgRef.current, {
        scale: 1,
        top: 0,
        left: 0,
        ease: "sine.out",
        duration: 1.2
      }, 0);

      tl.to(borderRef.current, {
        opacity: 0,
        ease: "power2.inOut",
        duration: 0.1
      }, 0);

      tl.to(text1Ref.current, {
        ...positions.text1Final,
        ease: "power4.inOut",
        duration: 1.2
      }, 0);

      tl.to(text2Ref.current, {
        ...positions.text2Final,
        ease: "power2.inOut",
        duration: 1.2
      }, 0);

      tl.to(text3Ref.current, {
        ...positions.text3Final,
        ease: "power2.inOut",
        duration: 1.2
      }, 0);

      tl.to(text4Ref.current, {
        ...positions.text4Final,
        ease: "power2.inOut",
        duration: 1.2
      }, 0);

      tl.to(esr1Ref.current, {
        fontSize: positions.esr1Final.fontSize,
        ease: "power2.inOut",
        duration: 1.2
      }, 0);
    }, animationContainerRef);

    mm = gsap.matchMedia();
    mm.add("(max-width: 1024px)", () => {
      // room for smaller-screen overrides
    });
  };

  setupAnimation();

  return () => {
    if (ctx) ctx.revert();
    if (mm) mm.revert();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, [windowSize.width, isImageLoaded]);



 if (!isImageLoaded) {
    return (
    <div className="overflow-hidden">
          <PreLoader />
    </div>
    
     
    );
  }

  return (

   
    <div className="relative overflow-hidden   xl:mb-8">
      
    <div ref={borderRef} className="fixed left-[60%] transform -translate-x-1/2   flex justify-center    z-[666]">
      <img 
        src={scr.src} 
        className="5xl:h-[30px] xl:h-[28px]  animate-bounce" 
        alt="When it’s ESR1, it may be the 1 for me header image" 
      />
    </div>
      <div
        ref={animationContainerRef}
        className="relative w-full h-[660px]  border-b-4 border-[#F3C623] 6xl:h-[920px] xxl:h-[760px] xxxl:h-[880px] 3xl:h-[clamp(780px,_100vh,_780px)] 4xl:h-[800px] 2xl:h-[840px] 5xl:h-[1010px] 8xl:h-[1090px] z-30 overflow-hidden bg-gradient-to-r from-[#41dc8e] via-dark_green to-[#41dc8e]"
      >
        <img
          ref={bgRef}
          src={bgImage}
          alt="When it’s ESR1, it may be the 1 for me header image"
          className="absolute top-0 left-0 w-full object-cover z-50"
          onError={(e) => {
            e.target.style.display = 'none';
            console.error('Failed to load background image');
          }}
        />
        
        <div className="w-[100%] h-[800px] absolute top-1/2 left-1/2 z-[100] transform -translate-x-1/2 -translate-y-1/2">
          <p
            ref={text1Ref}
            className="absolute text-black uppercase font-[700] z-30"
            style={{
              transform: 'translate(-50%, -50%)',
              willChange: 'top, left, fontSize'
            }}
          >
            when iT’s <span><i ref={esr1Ref} className="font-[800] text-dark_green">ESR1<span className="lowercase font-[800] not-italic">m</span></i>,</span>
          </p>
          <p
            ref={text2Ref}
            className="absolute top-[35%] text-black font-[700] z-30"
            style={{
              transform: 'translate(-50%, -50%)',
              willChange: 'transform,left,top, fontSize'
            }}
          >
            IT MAY BE THE
          </p>
          <p
            ref={text3Ref}
            className="absolute top-[35%] text-dark_green italic font-[800] uppercase z-30"
            style={{
              transform: 'translate(50%, -50%)',
              willChange: 'transform,right,top, fontSize'
            }}
          >
            FOR ME
          </p>
          <div 
            ref={text4Ref}
            className="absolute top-[60%] w-full text-center  flex justify-center left-[50%] text-black font-semibold z-30"
            style={{
              transform: 'translate(-50%, -50%)',
              willChange: 'transform',
              fontSize: '1.4vw'
            }}
          >
                                <p className="w-[58%] leading-[17px]  4xl:leading-[18px] xxl:leading-[18px] 2xl:leading-[18px] 5xl:leading-[21px] h-full">

              For postmenopausal women and adult men with < i className="font-semibold">ESR1</i>-mutated,<br/> ER+/HER2- advanced or metastatic breast cancer whose disease has progressed on endocrine therapy
            </p>
          </div>
          
          {/* <div 
              className="fixed bg-red z-[9999]  bottom-36 w-full text-center flex justify-center left-[50%] top-[70%] text-black text-sm font-semibold "
            style={{
              transform: 'translate(-50%, -50%)',
              willChange: 'transform'
            }}
          >
            <div className="flex items-center justify-center xl:-mt-2 xxl:-mt-24 3xl:mt-1  4xl:-mt-32 2xl:mt-20 xxxl:-mt-10 5xl:mt-4 6xl:mt-20">
              <div className="py-1   animate-bounce flex items-center justify-between gap-2 ">
                <div ref={borderRef} className="text-black  font-normal text-sm flex items-center gap-1 tracking-wide">
                  <img src={scr} className="h-[20px]" alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        
        <div ref={slidupRef} className="w-full   z-[100]   absolute bottom-10 overflow-hidden">
          <div className="w-full  items-center  flex justify-center">
           <div 
  className="flex gap-6   space-x-4 mt-3 justify-between  "style={!isMobile ? { width: `${navbarWidth.width-200}px` } : {}}>
              {buttonData.map((button, index) => (
                <NavigationButton
                  key={index}
                  text={button.text}
                  link={button.link}
                  imageSrc={button.imageSrc.src}
                  newTab={button.newTab}
                  alt={button.alt}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-10 md:flex-row justify-center w-full  gap-20  items-center">
            <div className="text-center md:text-left text-white leading-[30px] 5xl:leading-[45.78px] relative -top-[10px] 6xl:-top-[7px] 5xl:-top-[9px] flex flex-col gap-0 ">
              <p className="5xl:text-[40px] 3xl:text-[25px] 2xl:text-[25px] xxl:text-[30px] 4xl:text-[30px] text-[27px]  font-[700]">Watch “<span className="font-[800] text-[35px] 5xl:text-[50px]">1</span> for me” stories</p>
              <p className="5xl:text-[30px] 3xl:text-[20px] 4xl:text-[20px] xxl:text-[20px]  text-[20px] text-left">and learn how to share your own</p>
            </div>
            <Link href="/real-stories?id=patient-1" className="relative  flex-col w-[20%]  flex justify-end ml-8 items-r rounded-lg overflow-visible  hover:scale-105 transition-transform duration-200 ">
              <img 
                src={thumbnail.src} 
                alt="Watch real patient story videos | ORSERDU (elacestrant)" 
                className="w-[95%] object-right rounded-2xl  thubShadow" 
              />
              <img 
                src={play.src} 
                alt="Play Icon" 
                className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7"/>
             
              <div className="-bottom-6 text-white font-[100] text-left  w-full  opacity-80 left-12">ORSERDU ambassador</div>
            </Link>
            
          </div>
          
        </div>
        <p ref={fdaTextRef} className="text-white z-[100] text-center text-[16px] font-[100]  absolute     left-[48.65%] bottom-[10px] xxl:left-[46.5%] 3xl:left-[47.8%] 4xl:left-[45.9%]       xxxl:left-[46.8%]  2xl:left-[47.05%] 6xl:left-[46.05%] 5xl:left-[41.7%] -translate-x-1/2 w-full">You may report side effects to the FDA at 1-800-FDA-1088 or visit <a href="https://www.fda.gov/medwatch" onClick={(e) => handleLinkClick(e, 'https://www.fda.gov/medwatch')} className="underline cursor-pointer">www.fda.gov/medwatch</a>.</p>
        
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCancel} onContinue={handleContinue} />

    </div>
  );
};

export default DesktopHeroAnimation;