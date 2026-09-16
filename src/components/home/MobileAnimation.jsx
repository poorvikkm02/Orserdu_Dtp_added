"use client"

import React, { useRef, useEffect, useState, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavigationButton from './NavigationButton';
import thumbnail from "../../assets/Desktop/thumbnail.png";
import play from "../../assets/Desktop/play.png";
import { ResponsiveContext } from "@/context/ResponsiveContext"
import insta from "../../assets/Desktop/insta.png";
import facebook from "../../assets/Desktop/facebook.png";
import yt from "../../assets/Desktop/yt.png";
import tictok from "../../assets/Desktop/tictok.png";
import { FaAngleDown } from "react-icons/fa6";
import Hamburger from 'hamburger-react';
import brochure from "../../assets/Desktop/new/newICons/brochure.png"
import dna from "../../assets/Desktop/new/newICons/dna1.png";
import scr from "../../assets/images/home/scr.svg"
import pill from "../../assets/Desktop/new/newICons/pill1.png"
import Link from 'next/link';
import PreLoader from "@/components/loaders/PreLoader";
import laptop from "../../assets/Desktop/new/newICons/laptop1.png"
import Modal from "../modals/Modal";

gsap.registerPlugin(ScrollTrigger);



function MobileAnimation() {
  const img = "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/lightbg.png"
  const heroImg = "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/homepage_mobile_21_05.webp"
  const { isMobile } = useContext(ResponsiveContext);
  const [isOpen, setOpen] = useState(false);
  const [ph, setPh] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hamColor, setHamColor] = useState("#008000");
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

  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const contentGroup1Ref = useRef(null);
  const contentGroup2Ref = useRef(null);
  const scrollRef = useRef(null);
  const hamRef = useRef(null);
  const hamLine1Ref = useRef(null);
  const hamLine2Ref = useRef(null);
  const hamLine3Ref = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isChrome = /CriOS/.test(ua);
  const isSafari = isIOS && !isChrome;

  if (isSafari) document.documentElement.classList.add("ios-safari");
  if (isChrome) document.documentElement.classList.add("ios-chrome");
}, []);


  // All image URLs to be loaded
  const imageUrls = [
    heroImg,
    img,
    thumbnail.src,
    play.src,
    insta.src,
    facebook.src,
    yt.src,
    tictok.src,
    brochure.src,
    dna.src,
    scr.src,
    pill.src
  ];

  useEffect(() => {
    // Load all images
    const loadImages = () => {
      let loadedCount = 0;
      const totalImages = imageUrls.length;

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / totalImages) * 100);
          setLoadingProgress(progress);
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
      });
    };

    loadImages();

    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPh(isMobile);
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (id) => {
    setOpen(false);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const offset = navbarHeight + 200;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const ctx = gsap.context(() => {
      if (
        !section1Ref.current ||
        !section2Ref.current ||
        !contentGroup2Ref.current ||
        !scrollRef.current ||
        !containerRef.current
      ) {
        return;
      }
         ScrollTrigger.refresh();

      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
      gsap.set(section2Ref.current, { scale: 0.5, zIndex: -100, backgroundImage: 'none' });
      gsap.set(contentGroup2Ref.current, { y: 100, opacity: 0 });
      gsap.set(scrollRef.current, { opacity: 1, color: "#008000" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1,
            duration: 0.1,
            delay: 0,
            ease: "power1.inOut"
          },
        }
      });

      tl.to(section1Ref.current, {
        scale: 30,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }, 0);

      tl.to(scrollRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      }, 0);

      tl.to(section2Ref.current, {
        zIndex: 10,
        duration: 0,
      }, 0.4);

      tl.to(section2Ref.current, {
        scale: 1,
        display: "block",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }, 0);

      tl.to(contentGroup2Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }, 1);
      
      tl.to(section2Ref.current, {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        duration: 0,
        delay: 0.8,
        ease: "power1.inOut",
      }, 0);

    }, containerRef);

    return () => {
      setTimeout(() => {
        ctx.revert();
      }, 10);
    };
  }, [windowSize.width, imagesLoaded]);

  const buttonData = [
    {
      text: "Learn about <i class=' italic font-[500] '>ESR1</i> mutations",
      link: "/understanding-esr1-mutations",
      alt: "What is esr1 mutation explanation button",
      imageSrc: dna,
      newTab: false
    },
    {
      text: "Learn about ORSERDU",
      alt: "Once-daily pill button",
      link: "/orserdu-results",
      imageSrc: pill,
      newTab: false
    },
      {
           text: "Learn about testing",
           alt:"Download Orserdu® (elacestrant) brochure",
           link: "/testing",
           imageSrc: laptop,
            newTab:false
         },
    // {
    //   text: "Download the brochure",
    //   alt: "Download Orserdu® (elacestrant) brochure",
    //   link: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/doc/ORSERDU_Patient_Brochure.pdf",
    //   imageSrc: brochure,
    //   newTab: true
    // },
  ];

  if (!imagesLoaded) {
    return (
      <PreLoader />
    );
  }

  return (
    <>
    <div ref={containerRef} className="relative w-full h-[89vh] overflow-hidden">
      <div className="h-fit w-full absolute top-0 z-[1001]">
        <div className="relative h-fit">
          <div className="top-section h-[40px] w-full flex justify-center decoration-gray items-center z-50 text-[12px] bg-mint_green xl:hidden xl:h-0">
            <div className="xl:hidden w-full flex items-center justify-center">
              <p
                onClick={() => handleScroll("isi")}
                className="xl:hidden text-[14px] font-light tracking-tight underline text-left leading-tight hover:text-dark_green whitespace-normal"
              >
                Important Safety Information
              </p>
            </div>
          </div>
          {/* <div className="w-full flex justify-center h-20">
            <div className="w-[85%] flex items-center justify-between h-full">
              <NavLink
                to="/"
                onClick={navScroll} 
                className="relative cursor-pointer"
              >
                <img src={mobileicon} className="w-[190px] relative -z-[1] -top-1 object-contain" alt="" />
              </NavLink>
              <div className="xl:w-[0px] xl:hidden ml-4 flex items-center justify-end">
                <div >
                   <div className="w-[30px] h-[36px] flex flex-col justify-between py-[6px]">
  <span ref={hamLine1Ref} className="block h-[4px] bg-black rounded"></span>
  <span ref={hamLine2Ref} className="block h-[4px] bg-black rounded"></span>
  <span ref={hamLine3Ref} className="block h-[4px] bg-black rounded"></span>
</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Hero image section */}
      <div ref={section1Ref} className="flex justify-center items-start absolute top-0 left-0 w-full h-[100vh]">
        <div className="w-full h-[100vh] -mt-8  ios-safari:-mt-4
  ios-chrome:-mt-10">
  <img src={heroImg} className="h-full w-full object-cover" alt="When it’s ESR1, it may be the 1 for me header image" />
</div>

      </div>

      <div className="absolute  bottom-[calc(100px+env(safe-area-inset-bottom))]
left-0 w-full h-10 flex justify-center items-center z-1  ios-chrome:bottom-[115px] ios-safari:bottom-[85px] ">
        <p ref={scrollRef}  className="flex justify-center items-center animate-bounce text-dark_green text-[22px] gap-1 font-[800]">
          {/* Scroll <FaAngleDown style={{fontWeight:900}} className='text-[16px]' /> */}
          <img 
                  src={scr.src} 
                  className="h-[26px]  animate-bounce " 
                  alt="Top banner" 
                />
        </p>
      </div>

      {/* Content section */}
      <div  ref={section2Ref} className="absolute top-0 opacity-0  hidden left-0 w-full h-[90vh]">
        <div className="w-full h-[105vh]">
          <div className="flex h-full flex-col justify-center gap-[2px] items-center ">
            {/* First group of content (text, buttons, stories) */}
            <div ref={contentGroup1Ref} className="w-full gap-5 flex flex-col items-center">
              {/* Information */}
              <p className='w-[80%] text-white leading-5 text-center mt-0 text-[18px]'>
                For postmenopausal women and adult men 
                with <i className='italic'>ESR1</i>-mutated, ER+/HER2- advanced or 
                metastatic breast cancer whose disease has 
                progressed on endocrine therapy
              </p>
              
              {/* Buttons */}
              <div className="div flex w-[80%] flex-col gap-4">
                {buttonData.map((button, index) => (
                  <NavigationButton
                    w={80}
                    key={index}
                    text={button.text}
                    link={button.link}
                    imageSrc={button.imageSrc.src}
                    newTab={button.newTab}
                  />
                ))}
              </div>
              
              {/* Real stories */}
              <div className="flex w-[80%] justify-center gap-2 items-center">
                <div className="text-left w-[60%] md:text-left text-white">
                   <p className="text-[28px] leading-[28px] pb-2 font-medium"><span>Watch “</span>
 <span className='text-[27px] font-bold'>1</span> for me” stories</p>
                  <p className="text-[12px] leading-[14px]">and learn how to share your own</p>
                </div>
                <Link 
                  href="/real-stories?id=patient-1" 
                  className="relative w-[50%] aspect-video rounded-lg "
                >
                  <div className="w-full  relative flex h-full">
                    <img 
                      src={thumbnail.src} 
                      alt="Watch real patient story videos | ORSERDU (elacestrant)" 
                      className="w-full h-full object-cover rounded-lg thubShadow" 
                    />
                    <img 
                                    src={play.src} 
                                    alt="Play Icon" 
                                    className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3"/>
                                 
                    <div className="absolute text-white font-[100] left-0 -bottom-4 text-left text-[10px] w-full  opacity-80 ">ORSERDU ambassador</div>
                  </div>
                </Link>
              </div>
              <p className='text-white font-[100] text-[10px] leading-[12px] text-left mb-0 w-[80%]'>
                <span>You may report side effects to the FDA at 1-800-FDA-1088 or visit <a href="https://www.fda.gov/medwatch" onClick={(e) => handleLinkClick(e, 'https://www.fda.gov/medwatch')} className="underline cursor-pointer">www.fda.gov/medwatch</a>.</span>
              </p>
            </div>
            
            {/* Second group (social media footer) */}
            <div ref={contentGroup2Ref} className="w-full">
              <div className="flex bg-[#FFD506] justify-center items-center w-full  h-10 mt-2">
                <div className="flex justify-center items-center w-full max-w-max">
                   {[
                   
                    { href: "https://www.facebook.com/share/16dYMY7Any/?mibextid=wwXIfr", icon: facebook, alt: "Facebook icon" },
                     { href: "https://www.instagram.com/orserdu_elacestrant/", icon: insta, alt: "Instagram icon" },
                    { href: "https://www.tiktok.com/@orserdu_elacestrant", icon: tictok, alt: "TikTok icon" },
                    { href: "https://www.youtube.com/@orserdu", icon: yt, alt: "YouTube icon" }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                     
                      className="flex justify-center items-center z-[100] w-12 h-12"
                    >
                      <img 
                        src={item.icon.src} 
                        alt={item.alt} 
                        className="w-full h-full object-contain mt-2  " 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Modal isOpen={isModalOpen} onClose={handleCancel} onContinue={handleContinue} />
    </>
  );
}

export default MobileAnimation;