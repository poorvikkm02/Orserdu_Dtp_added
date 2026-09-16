"use client"

import React, { useContext, useEffect } from "react";
import dynamic from "next/dynamic";


import { ResponsiveContext } from "@/context/ResponsiveContext";

import { StoreContext } from "@/context/SlideUpContext";
import { useInView } from "react-intersection-observer";
import DOMPurify from "dompurify";
const Footer =  dynamic(()=> import("@/components/Footer/Footer"),{
  ssr: false,
  
}) ;
const  ISIPOPUP = dynamic(()=> import("@/components/isi/ISIPOPUP"),{
  ssr:false,
  loading:()=>{return <PreLoader/>}

}) ;
import { useRouter } from "next/navigation";
import Link from "next/link";
import PreLoader from "@/components/loaders/Preloader";

 
const Sitemap = () => {
  const navigate = useRouter();
  const { isMobile, navbarWidth } = useContext(ResponsiveContext);
  // useNavHeader("Sitemap")
  const routes = [
    {
      path: "",
      label: "Home",
    },
    {
      path: "understanding-esr1-mutations",
      label: "Understanding your cancer",
      children: [
        { path: "What are mutations?", label: "what-you-should-know" },
        { path: "What is an <i class='font-medium'>ESR1</i> mutation?", label: "testingEsr1" },
      ],
    },
    {
      path: "testing",
      label: "Testing",
      children: [
        { path: "How does testing work?", label: "how-does-testing-work" },
        { path: "When should testing occur?", label: "when-should-testing-occur" },
      ],
    },
    {
      path: "orserdu-results",
      label: "Results",
    },
    {
      path: "orserdu-safety",
      label: "Safety",
    },
    {
      path: "taking-orserdu",
      label: "Taking ORSERDU",
    },
    {
      path: "savings-and-support",
      label: "Savings & resources",
      children: [
        { path: "Resources", label: "resources" },
        { path: "FAQ", label: "faq" },
      ],
    },
    {
      path: "real-stories",
      label: "1 for me stories",
      children: [
        { path: "From people like you", label: "from-people-like-you" },
        { path: "From experts", label: "from-mbc-experts" },
      ],
    },
  ];

  


const handleScroll = (id) => {
  
    if (typeof window !== "undefined"){
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

  const { setComponentOneVisible } = useContext(StoreContext);
  const { ref, inView } = useInView({
    threshold: 0.1, // visibility triggers the observer
  });

  useEffect(() => {
    setComponentOneVisible(inView);
  }, [inView, setComponentOneVisible]);

  const navItemClass = (isActive) =>
    `nav-item  flex items-center   text-dark_green w-full flex-col justify-center ${
      isActive
        ? "bg-custom-gradient text-white"
        : "hover:bg-custom-gradient hover:text-white"
    }`;
  return (
   <>
   <div className="flex justify-center overflow-hidden w-full   xl:px-4">
  <div
    style={!isMobile ? { width: `${navbarWidth.width}px` } : {width: "100%"}}
    className="w-full  flex flex-col items-center"
  >
    {/* Content Wrapper */}
    <div className="w-full pl-6 xl:pl-0  xl:pr-10  mt-[42%] md:mt-[25%] xl:mt-[16.5%] 3xl:mt-[15%] xxl:mt-[15%] ">
      <div></div>
 <div className="w-full items-start ml-0 xl:ml-[185px] xxl:ml-[185px] xxxl:ml-[190px] 5xl:ml-[170px] ">
        <ul className="list-disc ml-4 space-y-1 marker:text-[#6BCDB2] font-semibold text-[1.31rem]">
          {routes.map((route, idx) => (
            <li key={idx}>
              <Link
                href={`/${route.path}`}
                scroll={true}
                className="underline text-[#006937] "
              >
                {route.label.includes("ESR1") ? (
                  <span className="underline">
                    Understanding <i className="font-[600]">ESR1</i> mutations
                  </span>
                ) : (
                  route.label
                )}
              </Link>

              {route.children && (
                <ul className="ml-6 mt-2 space-y-2 text-green-600 list-[circle] marker:text-[#6BCDB2]">
                  {route.children.map((child, cIdx) => (
                    <li key={cIdx}>
                      <Link
                      
                        onClick={(e) => {
                          e.preventDefault();
                          navigate.push(`/${route.path}`, { scroll: true });
                          setTimeout(() => handleScroll(child.label), 700);
                        }}
                        href={`/${route.path}`}
                        className="underline text-[#006937]"
                      >
                        {child.label === "from-people-like-you" || child.label === "from-mbc-experts" ? (
                  <span dangerouslySetInnerHTML={{ __html: child.path }} />
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: child.path }} />
                )}
                        
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Text Section */}
    <div
      ref={ref}
      className="w-full mt-6 flex flex-col justify-center items-center"
    >
      <div className="w-full bg-white pb-4 xl:pb-0 flex justify-center items-center">
        
      </div>

      {/* Target scroll component with ID */}
      <div id="IMPORTANT_SAFETY_INFORMATION" className="w-full p-10 pb-0 pt-0 xl:p-0">
        <div className="text-[16px] font-light w-[90%] sm:w-[80%] xl:w-[70%] text-left leading-6">
          <i className="font-light">ESR1</i>, estrogen receptor 1.
        </div>
        <ISIPOPUP />
        
      </div>
  {isMobile &&   <Footer />}
    </div>

 
  </div>
 
</div> {!isMobile && <Footer />}
   </>


  );
};

export default Sitemap;
