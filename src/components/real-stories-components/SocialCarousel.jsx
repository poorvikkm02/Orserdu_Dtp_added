"use client"

import React, { useRef,useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { FaAngleRight } from 'react-icons/fa';
import arrowImg from "../../assets/images/figure/arrow-right.png"
const SocialCarousel = ({ items }) => {
  // Create a larger array for seamless looping
  const loopItems = [...items, ...items, ...items];
  const swiperRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleNext = () => {
   if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext(500, false);
      setHasUserInteracted(true);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev(500, false);
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    
    if (swiperInstance) {
      const updateButtons = () => {
        setShowLeftButton(!swiperInstance.isBeginning);
        setShowRightButton(!swiperInstance.isEnd);
      };

      swiperInstance.on('slideChange', updateButtons);
      updateButtons();

      return () => {
        swiperInstance.off('slideChange', updateButtons);
      };
    }
  }, []);


   return (
    <div className="w-full max-w-7xl mx-auto mt-4 relative">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={0}
        loop={true}
        speed={500}
        autoplay={false}
        freeMode={{
          enabled: true,
          momentum: true,
          sticky: true,
          momentumBounce: true,
          momentumBounceRatio: 0.5
        }}
        resistance={true}
        resistanceRatio={0.5}
        followFinger={true}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.5 },
          1280: { slidesPerView: 5.2 }
        }}
        className="!overflow-hidden"
      >
       {loopItems.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`} className="w-full">
            <div className="w-full overflow-hidden  rounded-[18px] p-1 transition-all duration-300 ease-out group">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative cursor-pointer  h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt || "Social Story"}
                  className="w-full p rounded-[18px]  overflow-hidden object-contain transition-transform duration-700 group-hover:opacity-60 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
     
      {(hasUserInteracted || showLeftButton) && (
        <div className="absolute left-0 top-0 h-full z-[100] w-fit ml-1 xl:ml-2  flex items-center justify-start">
          <button
            onClick={handlePrev}
            className="bg-white hover:bg-gray-200 rounded-full shadow-box_shadow p-2 transition z-10 w-[30px] h-[30px] xl:w-[45px] xl:h-[45px] ml-[2px] mr-2 box_shadow flex justify-center items-center rotate-180"
          >
            <img src={arrowImg.src} alt="Previous" className="w-[80%] ml-1 object-contain h-[90%]" />
          </button>
        </div>
      )}
      
      {/* Right Button */}
      <div className="absolute right-0 top-0 h-full z-[100] mr-1 xl:mr-2 w-fit  flex items-center justify-start">
        <button
          onClick={handleNext}
          className="bg-white hover:bg-gray-200 rounded-full  shadow-box_shadow p-2  transition z-10 w-[30px] h-[30px] xl:w-[45px] xl:h-[45px] mr-[2px] ml-2 box_shadow flex justify-center items-center"
        >
          <img src={arrowImg.src} alt="Next" className="w-[80%]   object-contain h-[90%]" />
        </button>
      </div>
    </div>
  );
};

export default SocialCarousel;