"use client"

import React from 'react';
// import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import DOMPurify from 'dompurify'
import smoothscroll from "smoothscroll-polyfill";
import img2 from "../../assets/Desktop/new/arrow.png"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from 'next/link';

gsap.registerPlugin(ScrollToPlugin);
const NavigationButton = ({w, imageSrc, text,alt, link,newTab=false,scroll=false }) => {



    smoothscroll.polyfill();
 const navScroll = () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: { y: 0 },
    ease: "power2.in",
    // close sidebar after scroll
  });
};
  return (
    <Link
      href={link} 
    //  target={newTab ? '_blank' : '_self'}
     target={newTab ? '_blank' : '_self'}

    
    //     onClick={(e) => {
    // // Skip navScroll if opening in a new tab
    // if (!newTab) {
    //   navScroll(e);
    // }}}
      className="flex  cursor-pointer items-center bg-white rounded-full  overflow-hidden  py-1 px-1 shadow-md transition duration-300 space-x-3  h-12 xxl:h-12 5xl:h-16 w-[100%]  hover:shadow-lg"
    >
      <div className=" h-full scale-[1.6] xl:scale-[2]  flex  items-center justify-center ml-2 xl:p-[1px]  overflow-hidden  ">
        <img src={imageSrc} alt={alt} className=" w-[50px] xl:w-[60px] 5xl:w-[90px]  h-[90%] xl:p-[3px]  object-contain bg-left " />
      </div>
      <div className="xl:bg-[#006937] bg-[#005812] pr-0  h-[100%] 5xl:h-[100%]  w-full  rounded-full flex justify-around items-center ">
        <span className="5xl:text-[22px] 5xl:leading-[22px] xxl:text-[16px] xxl:leading-[16px] 4xl:text-[16px] 4xl:leading-[16px] text-[18px] 2xl:text-[14px] 2xl:leading-[14px] font-medium w-[85%] pl-4   text-white leading-[18px] xl:leading-[20px]  xl:pl-5   " dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text, { ADD_ATTR: ['class', 'style'] })}}></span>
<img src={img2.src}  className=' h-[20px] mr-2 object-cover' alt="" />
      {/* <FaAngleRight style={{fontWeight:900}} className="text-white font-extrabold  xl:w-[30px] xl:h-[30px] " /> */}
      </div>
    </Link>
  );
};

export default NavigationButton;