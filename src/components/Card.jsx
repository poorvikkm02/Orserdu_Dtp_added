"use client";
import React, { useContext } from "react";
import { ResponsiveContext } from "@/context/ResponsiveContext";

const Card = ({ img, alt, title, body, extraClass = "", imgTop = "0px", mobileLeft = "0px", imgLeft = "0px", mobileTop = "0px", imgSize = "full" }) => {
  const { isMobile } = useContext(ResponsiveContext);
  const sizeMap = { full: "90px", lg: "75px", md: "60px", sm: "45px", xs: "30px" };
  const resolvedSize = sizeMap[imgSize] ?? imgSize;

  const ImageBox = () => (
    <div className="flex-shrink-0 relative" style={{ width: resolvedSize, top: isMobile ? mobileTop : imgTop, left: isMobile ? mobileLeft : imgLeft }}>
      <img src={img} className="w-full h-full object-contain" alt={alt} />
     <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(to right, white 0%, transparent 10%, transparent 95%, white 100%)",
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
              className="mb-0 text-[18px] xl:text-[22px] font-medium leading-[24px] text-dark_green"
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
              className="text-[20px] xl:text-[22px] font-medium leading-[22px] xl:leading-[24px] text-dark_green flex-1"
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
