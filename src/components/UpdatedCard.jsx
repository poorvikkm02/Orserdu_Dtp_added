"use client";
import React, { useContext } from "react";
import { ResponsiveContext } from "@/context/ResponsiveContext";

const Card = ({ img, alt, title, body, extraClass = "", imgTop = "0px", mobileLeft = "0px", imgLeft = "0px", mobileTop = "0px" }) => {
  const { isMobile } = useContext(ResponsiveContext);

  const ImageBox = () => (
    <div className="xl:w-[90px] w-[90px] flex-shrink-0 relative" style={{ top: isMobile ? mobileTop : imgTop, left: isMobile ? mobileLeft : imgLeft }}>
      <img src={img} className="w-full h-full object-contain" alt={alt} />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, white 0%, transparent 20%, transparent 90%, white 100%)",
        }}
      />
    </div>
  );

  return (
    <div className={extraClass}>
      {/* Desktop */}
      {!isMobile && (
        <div className="flex gap-4 items-start relative -left-[16px]">
          <ImageBox />
          <div className="flex flex-col">
            <p
              className="leading-[20px] text-[18px] font-light"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="leading-[20px] font-light mt-[10px]" dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
      )}
      {/* Mobile */}
      {isMobile && (
        <>
          <div className="flex gap-0 xl:gap-4 items-center mb-4 xl:mb-2">
            <ImageBox />
            <p
              className="leading-[20px] text-[18px] font-light"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <p
            className="leading-[20px] text-[18px] font-light"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </>
      )}
    </div>
  );
};

export default Card;
