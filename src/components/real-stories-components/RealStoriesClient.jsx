"use client";

import React, { useState, useEffect, useMemo, useContext, useRef } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import smoothscroll from "smoothscroll-polyfill";
import { ResponsiveContext } from "@/context/ResponsiveContext";
import { StoreContext } from "@/context/SlideUpContext";
import { RiCloseLargeLine } from "react-icons/ri";

const HeroContainer = dynamic(
  () => import("@/components/wrappers/HeroContainer"),
  {
    ssr: false,
  }
);

const VideoPlayer = dynamic(
  () => import("@/components/real-stories-components/VideoPlayer"),
  {
    ssr: false,
  }
);
const VideoListPlayer = dynamic(
  () => import("@/components/real-stories-components/VideoListPlayer"),
  {
    ssr: false,
  }
);

const VideoList = dynamic(
  () => import("@/components/real-stories-components/VideoList"),
  {
    ssr: false,
  }
);

const SocialCarousel = dynamic(
  () => import("@/components/real-stories-components/SocialCarousel"),
  {
    ssr: false,
  }
);

const StoryModal = dynamic(() => import("@/components/modals/StoryModal"), {
  ssr: false,
});

import arrowImg from "@/assets/images/figure/arrow-right.png";
import Video from "@/assets/Desktop/new/icons/video.png";
import bethny from "@/assets/RealS/Benthany_Thumbnail.jpg";
import sherri from "@/assets/RealS/sherri.png";
import tim from "@/assets/RealS/Tim_Thumbnail.jpg";
import img9 from "@/assets/RealS/thumbnail_v2.png";
import img10 from "@/assets/RealS/Thumbanail_1.png";
import c1 from "@/assets/RealS/c1.png";
import c2 from "@/assets/RealS/c2.png";
import c3 from "@/assets/RealS/c3.png";
import c4 from "@/assets/RealS/c4.png";

const RealStories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isMobile } = useContext(ResponsiveContext);
  const { closeVideoFnRef } = useContext(StoreContext);
  let [IsMobileForrealstr, setIsMobileForrealstr] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [hasScrolledToVideo, setHasScrolledToVideo] = useState(false);
  const videoPlayerRef = useRef(null);
  const hashScrolledRef = useRef(false);
  const hashProcessedRef = useRef(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileForrealstr(window.innerWidth < 850);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Handle hash scrolling (for #sherri, #bethany, etc.)
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;
    
    const scrollToHashElement = (hash) => {
      retryCount = 0;
      const attemptScroll = () => {
        // Clean the hash to match naming convention
        const cleanHash = hash.toLowerCase().replace(/\s+/g, '');
        
        // Find element by ID (this matches the IDs set in VideoList component)
        let element = document.getElementById(cleanHash);
        
        // If not found by exact ID, try to find by data attribute
        if (!element) {
          const elementsWithDataId = document.querySelectorAll('[data-video-id]');
          for (const el of elementsWithDataId) {
            const elId = el.getAttribute('data-video-id').toLowerCase().replace(/\s+/g, '');
            if (elId === cleanHash) {
              element = el;
              break;
            }
          }
        }
        
        // Also check for video cards
        if (!element) {
          const videoCards = document.querySelectorAll('[data-video-title]');
          for (const el of videoCards) {
            const title = el.getAttribute('data-video-title').toLowerCase().replace(/\s+/g, '');
            if (title === cleanHash) {
              element = el;
              break;
            }
          }
        }
        
        if (element) {
          const offset = 200;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Highlight the element briefly
          // element.style.boxShadow = '0 0 0 3px rgba(255, 215, 0, 0.5)';
          // setTimeout(() => {
          //   element.style.boxShadow = '';
          // }, 2000);
          
          return true;
        }
        
        return false;
      };
      
      const tryScroll = () => {
        if (retryCount >= maxRetries) {
          console.log(`Max retries reached for hash: ${hash}`);
          hashProcessedRef.current = true;
          return;
        }
        
        if (attemptScroll()) {
          hashScrolledRef.current = true;
          hashProcessedRef.current = true;
          return;
        }
        
        retryCount++;
        setTimeout(tryScroll, 300);
      };
      
      tryScroll();
    };
    
    const handleHashScroll = () => {
      // Only process hash if there's no video playing from query param
      const videoId = searchParams.get("id");
      if (!videoId && window.location.hash && !hashProcessedRef.current) {
        const hash = window.location.hash.substring(1);
        if (hash.trim()) {
          // Don't play video, just scroll
          setTimeout(() => {
            scrollToHashElement(hash);
          }, 500);
        }
      }
    };
    
    // Initial scroll attempt
    handleHashScroll();
    
    // Listen for hash changes
    const handleHashChange = () => {
      const videoId = searchParams.get("id");
      if (!videoId) {
        hashScrolledRef.current = false;
        hashProcessedRef.current = false;
        handleHashScroll();
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Check after content loads
    const checkAfterLoad = () => {
      const videoId = searchParams.get("id");
      if (!videoId && !hashProcessedRef.current && window.location.hash) {
        handleHashScroll();
      }
    };
    
    setTimeout(checkAfterLoad, 1000);
    setTimeout(checkAfterLoad, 2000);
    setTimeout(checkAfterLoad, 3000);
    
    // Mutation observer to check when video list loads
    const observer = new MutationObserver(() => {
      const videoId = searchParams.get("id");
      if (!videoId && !hashProcessedRef.current && window.location.hash) {
        handleHashScroll();
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [searchParams]);

  const imageUrl = useMemo(() => {
    if (isMobile) {
      return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/mobile/Video+Library_Mobile_mobile_8.webp "
    }
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/orserdu_main_v.0.07/Video_Library_desktop_61.webp";
  }, [isMobile]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleContinue = () => {
    if (typeof window !== "undefined") {
      setIsModalOpen(false);
      setTimeout(() => window.open(redirectUrl, "_blank"), 0);
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

  // scroll polyfill
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
    }
  }, []);

  const scrollToVideoPlayer = () => {
    if (typeof window !== "undefined" && videoPlayerRef.current && !hasScrolledToVideo) {
      const offsetPercentage = 0.5;
      const offset = window.innerHeight * offsetPercentage;

      setTimeout(() => {
        window.scrollTo({ 
          top: offset, 
          behavior: "smooth" 
        });
        setHasScrolledToVideo(true);
      }, 500);
    }
  };

  const scrollToVideo = () => {
    if (isMobile) return;
    if (typeof window !== "undefined") {
      const offsetPercentage = 0.5;
      const offset = window.innerHeight * offsetPercentage;

      setTimeout(() => {
        window.scrollTo({ top: offset, behavior: "smooth" });
      }, 10);
    }
  };

  const header = (
    <p>
      ER+, estrogen receptor-positive; <i style={{ fontWeight: 300 }}>ESR1</i>,
      estrogen receptor 1; HER2-, human epidermal growth factor receptor
      2-negative; mBC, metastatic breast cancer.
    </p>
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mute, setMute] = useState(false);

  const carouselItems = [
    { id: 1, link: "https://www.instagram.com/reel/DMaoxWTglRo/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails.webp", alt: "Learn about a patient's journey with ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer and her Orserdu® (elacestrant) treatment." },
    { id: 2, link: "https://www.instagram.com/reel/DMtEPrZgSbj/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails2.webp", alt: "Learn about how to be a good caregiver to a loved one with ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer." },
    { id: 3, link: "https://www.instagram.com/p/DLh1aAgAVVW/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails3.webp", alt: "Learn about treatment with Orserdu® (elacestrant) from a patient with ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer." },
    { id: 4, link: "https://www.instagram.com/p/DL0YR65gPim/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails4.webp", alt: "Hear about the Orserdu® (elacestrant) treatment journey from a patient with ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer." },
    { id: 5, link: "https://www.instagram.com/p/DLh2AFqgwqx/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails5.webp", alt: "Hear the story of a patient with ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer and their Orserdu® (elacestrant) treatment journey." },
    { id: 6, link: "https://www.instagram.com/p/DLh0yW_AowG/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails6.webp", alt: "Review a patient's ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer diagnosis and treatment journey with Orserdu® (elacestrant)." },
    { id: 7, link: "https://www.instagram.com/p/DMtDyroghBU/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails7.webp", alt: "Review a patient's ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer diagnosis and treatment journey with Orserdu® (elacestrant)." },
    { id: 8, link: "https://www.instagram.com/p/DL0YyNjgWlo/", image: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/cour/Website_RealStories_Social_Thumbnails8.webp", alt: "Review a patient's ESR1-mutated ER+/HER2- advanced breast cancer or metastatic breast cancer diagnosis and treatment journey with Orserdu® (elacestrant)." },
  ];

  const patientVideos = [
    {
      id: "patient-0",
      title: "Sherri",
      alt: "Sherri's ORSERDU patient story | Video",
      description: "Sherri discusses why ORSERDU was the 1 for her <i  class='font-[300] '>ESR1</i>-mutated, ER+/HER2- advanced or metastatic breast cancer, and how the decision to start treatment with it had a ripple effect on her life.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Mat-Us-Ela-00860+Sherri+Long+Form+Final+Video+081925.mp4",
      thumbnail: sherri,
      category: "patient",
    },
    {
      id: "patient-1",
      title: "Bethany",
      alt: "Bethany's ORSERDU patient experience | Video",
      description: "Bethany shares her journey, and she explains why ORSERDU was the best possible treatment for her <i  class='font-[300] '>ESR1</i>-mutated, ER+/HER2- advanced or  metastatic breast cancer.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Bethany_2.mp4",
      thumbnail: bethny,
      category: "patient",
    },
    {
      id: "patient-2",
      title: "Tim",
      alt: "Tim's ORSERDU caregiver story | Video",
      description: "Tim’s wife, Bethany, has been prescribed ORSERDU for <i  class='font-[300] '>ESR1</i>-mutated, ER+/HER2- advanced or  metastatic breast cancer. He shares his experience as a breast cancer care partner and offers advice for other care partners in his position.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Tim.mp4",
      thumbnail: tim,
      category: "patient",
    },
  ];

  const professionalVideos = [
    {
      id: "professional-0",
      title: "Dr Jules Cohen and Dr Kelly Shanahan",
      alt: "Listen to breast cancer experts, Dr Jules Cohen and Dr Kelly Shanahan, chapter 1 video | ORSERDU",
      description: "In this first chapter, Dr Jules Cohen, medical oncologist, and Dr Kelly Shanahan, retired MD OB/GYN, mBC patient advocate, and president of METAvivor, explain what <i class='font-light'>ESR1</i> mutations are and why testing may be an important step in your treatment journey.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Chapter+1+Zvl+V10.mp4",
      thumbnail: c1,
      category: "professional",
    },
    {
      id: "professional-1",
      title: "Dr Jules Cohen and Dr Kelly Shanahan ",
      alt: "Listen to breast cancer experts, Dr Jules Cohen and Dr Kelly Shanahan, chapter 2 video | ORSERDU",
      description: "In this chapter, Dr Jules Cohen and Dr Shanahan break down the EMERALD trial, a pivotal study evaluating how well ORSERDU works in indicated patients. They walk through the trial results together, helping you understand what the finding could mean for you.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Chapter+2+Zvl+V10.mp4",
      thumbnail: c2,
      category: "professional",
    },
    {
      id: "professional-2",
      title: "Dr Jules Cohen and Dr Kelly Shanahan",
      alt: "Listen to breast cancer experts, Dr Jules Cohen and Dr Kelly Shanahan, chapter 3 video | ORSERDU",
      description: "Here, Dr Cohen and Dr Shanahan discuss how well ORSERDU works and what patients can expect in terms of effectiveness and side effects, so you can feel more informed about your treatment options.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Chapter+3+Zvl+V10.mp4",
      thumbnail: c3,
      category: "professional",
    },
    {
      id: "professional-3",
      title: "Dr Jules Cohen and Dr Kelly Shanahan",
      alt: "Listen to breast cancer experts, Dr Jules Cohen and Dr Kelly Shanahan, chapter 4 video | ORSERDU",
      description: "In the final chapter, Dr Cohen and Dr Shanahan talk about how ORSERDU fits into daily life. They cover dosing, guidelines, and where to find reliable support throughout your treatment journey.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/Chapter+4+Zvl+V10.mp4",
      thumbnail: c4,
      category: "professional",
    },
    // {
    //   id: "professional-4",
    //   title: "Dr Anne O'Dea",
    //   alt: "Dr Anne O'Dea, medical oncology and breast cancer specialist, discusses treatment options, as well as how Orserdu® (elacestrant) works.",
    //   description: "Dr Anne O’Dea, medical oncologist and breast cancer specialist, discusses the changing treatment opportunities in metastatic breast cancer and why ORSERDU may be right for you.",
    //   videoUrl: "#",
    //   thumbnail: img9,
    //   category: "professional",
    // },
  ];
  const professionalVideos2=[
     {
      id: "professional-4",
      title: "Dr Anne O’Dea",
      alt: "Dr Anne O’Dea, medical oncology and breast cancer specialist, discusses treatment options, as well as how Orserdu® (elacestrant) works.",
      description: "Dr Anne O’Dea, medical oncologist and breast cancer specialist, discusses the changing treatment opportunities in metastatic breast cancer and why ORSERDU may be right for you.",
      videoUrl: "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Video/DRVideo_v2.mp4",
      thumbnail: img9,
      category: "professional",
    },
  ]

  const allVideos = [...patientVideos, ...professionalVideos,...professionalVideos2];

  const playVideo = (video) => {
    setSelectedVideo(video);
    scrollToVideo();
    resetSearch();
    setIsVideoPlaying(true);
    setHasScrolledToVideo(false);
    
    // Only update URL with query param, not hash
    router.replace(`?id=${video.id}`);
    
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `${window.location.pathname}?id=${video.id}`);
    }
  };

  const closeVideoPlayer = () => {
    setIsVideoPlaying(false);
    setSelectedVideo(null);
    setHasScrolledToVideo(false);
    const params = new URLSearchParams(searchParams);
    params.delete('id');
    
    const newUrl = `?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
    
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `${window.location.pathname}${newUrl}`);
    }
  };

  // Register closeVideoPlayer so navbar can call it
  useEffect(() => {
    closeVideoFnRef.current = closeVideoPlayer;
    return () => { closeVideoFnRef.current = null; };
  });

  const resetSearch = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    router.replace(`?${params.toString()}`);
  };

  const filteredPatientVideos = patientVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProfessionalVideos = professionalVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
    const filteredProfessionalVideos2 = professionalVideos2.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle query param video playing (?id=patient-0)
  useEffect(() => {
    const videoId = searchParams.get("id");

    if (videoId) {
      const videoToPlay = allVideos.find((video) => video.id === videoId);
      if (videoToPlay) {
        setMute(true);
        playVideo(videoToPlay);
        setIsInitialLoad(true);
      }
    } else {
      setIsInitialLoad(false);
    }
  }, [searchParams]);

  // Handle scrolling after the video player is rendered (for query param videos only)
  useEffect(() => {
    const videoId = searchParams.get("id");
    if (videoId && isVideoPlaying && isInitialLoad && !hasScrolledToVideo) {
      const timer = setTimeout(() => {
        scrollToVideoPlayer();
        setIsInitialLoad(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isVideoPlaying, isInitialLoad, hasScrolledToVideo, searchParams]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroContainer header={header} img={imageUrl} alt={"Real patient stories icon"}>
        <div className="mt-6  xl:mt-0      xl:pb-2 pb-0">
          {isVideoPlaying ? (
            <>
              {!IsMobileForrealstr && (
                <div ref={videoPlayerRef} id="video-player-container">
                  <VideoPlayer
                    key={selectedVideo.id}
                    selectedVideo={selectedVideo}
                    closeVideoPlayer={closeVideoPlayer}
                    mute={false}
                    className="videoContainer border-bottom"
                  />
                </div>
              )}

              <div className="mt-6 ">
                <VideoListPlayer
                  videos={allVideos.filter((v) => v.id !== selectedVideo.id)}
                  playVideo={playVideo}
                  className="w-full"
                />
              </div>
            </>
          ) : (
            <>
              <div className="xl:p-12  xl:pt-0   p-4 px-6 xl:pr-6  pt-0 w-full h-auto pb-4 xl:pl-[32px] xl:pb-0   xl:mb-[32px]">
                <p className="font-[300] pb-4 text-[14px] leading-[16px]">The patients featured in these videos are ORSERDU ambassadors who have been compensated for sharing their story. Every patient’s journey with metastatic breast cancer is unique. These patients’ cancer treatment may have changed since filming. Talk to your doctor to see if ORSERDU is right for you.</p>
                <p className="text-dark_green font-[600] leading-[32px] xl:leading-[38px] mb-2 text-[30px] xl:text-[36px]">
                  “1 for me” <span className="font-[300]">stories</span>
                </p>
                <p className="text-dark_green font-[500] text-[22px] xl:text-[22px] pb-2 leading-[22px]">A real-world view of the ORSERDU treatment experience </p>
                <p className="text-[18px] xl:text-[18px]  pb-2 leading-[20px] xl:leading-[21px] font-light" >Together with their healthcare team, our ambassadors chose ORSERDU to help treat their cancer. Their stories reflect a kaleidoscope of moments of humanity, resilience, and joy.</p>
                <p className="text-[18px] xl:text-[18px]  pb-4 leading-[20px] xl:leading-[21px] xl:pb-0 font-light">
                  To hear real stories about advanced or metastatic breast cancer and treatment with ORSERDU, watch our videos below. All content was accurate at the time of publication but may have since changed.{" "}
                  <span
                    className="underline hover:cursor-pointer whitespace-nowrap decoration-[0.7px]"
                    onClick={(e) => {
                      handleLinkClick(e, "https://myesr1story.com/");
                    }}
                  >
                    Learn how
                  </span>{" "}
                     to share your own story.
                </p>
              </div>

              <div className="w-full shadow-box_shadow pt-4  pb-6 xl:rounded-2xl xl:pl-[32px] xl:p-6 xl:pr-[32px] xl:py-[32px]" >
               <div> <p className="text-[30px]  leading-[32px] xl:text-[36px] xl:leading-[38px] text-dark_green font-[600] mb-4 p-4 px-6 xl:p-0" id="from-people-like-you">
                  Real stories: Living with advanced or metastatic breast cancer 
                </p>
                <VideoList
                  videos={filteredPatientVideos}
                  playVideo={playVideo}
                /></div>

                
              </div>
              <div className="w-full  pt-6 pb-6 xl:rounded-2xl xl:pl-[32px] xl:p-6 xl:pr-[32px] xl:py-[32px]" >
               <div> <p className="text-[30px] xl:text-[36px]  leading-[32px] xl:leading-[38px] text-dark_green  font-[600]  mb-1 p-4 px-6 pt-0 xl:p-0 xl:mt-0" id="from-mbc-experts">
                  Advancing care for people living with advanced or metastatic breast cancer 
                </p>
                <p className="font-light p-4 px-6 pt-0 xl:p-0 pb-0  mb-[2.1rem] xl:mb-[3rem] text-[18px] leading-[20px]">With a deep understanding of metastatic breast cancer, these healthcare experts share their insights and experiences with ORSERDU treatment.</p>
                <VideoList
                  className="pb-2"
                  videos={filteredProfessionalVideos}
                  professional={true}
                  playVideo={playVideo}
                /></div>

                
              </div>
                <div className="w-full shadow-box_shadow pt-4  pb-6 xl:rounded-2xl xl:pl-[32px] xl:p-6 xl:pr-[32px] xl:py-[32px]" >
               <div> 
                {/* <h2 className="text-[22px] leading-[24px] xl:leading-[38px] text-dark_green font-[700] mb-4 p-4 xl:p-0" id="from-people-like-you">
                  Real Stories: Living with mBC
                </h2> */}
                <VideoList
                  videos={filteredProfessionalVideos2}
                  playVideo={playVideo}
                /></div>

                
              </div>
              
            </>
          )}

          <div
            className={`${
              isVideoPlaying
                ? "xl:p-0 p-4 "
                : "xl:p-[32px] xl:pb-2 xl:pt-0 p-4 px-1 xl:pr-6 pt-0 xl:relative xl:-left-[26px] xl:mt-[10px] xl:pb-0 "
            } mt-4`}
          >
            <div className="flex xl:flex-row  items-center xl:justify-start justify-center  h-[120px] ">
              <div className="w-[120px] scale-100 xl:scale-100 ml-[6px]   xl:w-[120px] xl:ml-[8px] h-full flex justify-start  items-center overflow-hidden">
                <img
                  src={Video.src}
                  alt="Video icon"
                  className=" object-cover  relative xl:top-0 top-2"
                />
              </div>
              <div className="font-light border-l h-[60%] pl-6  justify-start flex items-center border-yellow text-[18px] w-full mt-4 xl:mt-0 xl:text-[18px] xxl:text-[18px] leading-[22px] tracking-[0.18px] xl:mt-0">
                <p className="text-dark_green text-[30px] ml-[2px] xl:ml-0  leading-[32px] xl:leading-[38px] xl:text-[36px] font-semibold">
                  Share. Support. Inspire.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${
              isVideoPlaying
                ? "xl:p-0 p-4"
                : "xl:p-[32px] xl:pb-2 xl:pt-0  p-4 px-6 xl:pr-6 pt-0  "
            } mt-2 gap-4 pb-4 flex flex-col xl:-mt-[10px] `}
          >
            <p className="text-[18px] xl:text-[22px]  leading-[20px] xl:leading-[24px]  font-light">
              If you or your loved one have experience with advanced or metastatic breast
              cancer and ORSERDU,{" "}
              <span className="font-[600] text-dark_green">we’d like to hear from you.</span> We
              are looking for people to join our ambassador program and share
              their experience. Help, support, and inspire others with your
              unique story.
            </p>
            <p className="xl:text-[18px] text-[14px] leading-[16px] font-light xl:leading-[20px]  ">
              Opportunities may include appearances in photographs, videos, and
              online content. It may also include speaking at live and/or
              virtual events. To become a patient ambassador, you must be 18
              years or older. Qualified candidates will go through an interview
              and screening process.
            </p>
            <div className="flex justify-center items-center ">
            <a
              href="https://www.myesr1story.com"
              target="_blank"
              onClick={(e) => {
                handleLinkClick(e, "https://myesr1story.com/");
              }}
              className="flex   mb-2 mt-2   w-full  xl:w-fit hover:cursor-pointer gap-4 md:w-fit xl:h-[60px] h-fit  rounded-full border-2 border-[#ffd506] xl:justify-between justify-between items-center p-2 xl:p-4 xl:pr-1 xl:mt-4"
            >
              <p className="text-[20px] leading-[21px] w-[70%] xl:w-fit  xl:text-[24px] font-medium tracking-[0.22px] xl:leading-[26px] text-[#006937] text-center xl:text-left ml-4">
                Share your story
              </p>
              <div
                onClick={(e) => {
                  handleLinkClick(e, "https://myesr1story.com/");
                }}
                className="w-[42px] h-[42px] xl:w-[45px] xl:h-[45px]  mr-[2px] ml-2 rounded-full box_shadow flex justify-center items-center"
              >
                <img
                  src={arrowImg.src}
                  className="xl:w-[70%] h-full object-contain p-2"
                  alt=""
                />
              </div>
            </a>
            </div>
          </div>

          {/* <div
            className={`${
              isVideoPlaying
                ? "xl:p-0 p-4"
                : "xl:p-[32px] xl:pb-2 xl:pt-0 p-4 px-6 xl:pr-6 pt-0 "
            }  mt-4 xl:mt-[14px] w-full h-auto`}
          >
            <div className="text-[30px] xl:text-[36px] leading-[32px] xl:leading-[38px] lead font-[700] text-dark_green">
              Watch more stories on our social pages
            </div>
            <SocialCarousel items={carouselItems} />
          </div> */}
        </div>
      </HeroContainer>
      {isVideoPlaying && IsMobileForrealstr && (
        <div className=" fixed top-0 left-0 w-screen h-screen  bg-black z-[10000] backdrop-blur-2xl  bg-opacity-85  flex justify-center items-center">
          <button
            onClick={closeVideoPlayer}
            className="text-[18px] absolute top-5 right-5 xl:hidden font-light tracking-[0.18px] leading-[22px] z-[100] text-left no-underline text-white mb-5"
          >
            <div className="flex border-full border-[1px] p-2  rounded-md animate-pulse items-center">
              <RiCloseLargeLine />
            </div>
          </button>
          <VideoPlayer
            id="video-player-container"
            key={selectedVideo.id}
            selectedVideo={selectedVideo}
            closeVideoPlayer={closeVideoPlayer}
            mute={false}
            className="videoContainer border-bottom"
          />
        </div>
      )}
      <StoryModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onContinue={handleContinue}
      />
    </Suspense>
  );
};

export default RealStories;