"use client"

import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
// Play button image URL
const playImg = "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/PlayButton.png"
 
const VideoCard = ({ video, playVideo }) => {
  // Log video data whenever the video prop changes
 const safeHTML = DOMPurify.sanitize(video.description);
  return (
    <div className="videodescpContainer     px-6 md:p-0">
      <div className="DescriptionContainer">
        <p className="videoheader text-[22px]  font-[400] tracking-[0.22px] leading-[24px] xl:leading-[21px] text-left no-underline text-dark_green mb-4">
          {video.title}
        </p>
      </div>
      <div className="thumbnailContainer relative">
        <div className="thumbnailImg   w-full ">
          <img
            src={video.thumbnail.src}
            alt={video.alt || "Video Thumbnail"}
              className="img-fluid rounded-[18px] w-full  "
            // onClick={() => playVideo(video)} // Clicking the thumbnail triggers the playVideo function
          />
        </div>
        <div
          className="play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-[40px] h-[40px] v   rounded-lg text-center"
          onClick={() => {
            if(video?.videoUrl !== "#"){

              playVideo(video)
            }
          }} // Clicking the play button also triggers playVideo
        
        >
          <img src={playImg} alt="play" className="cursor-pointer object-contain  h-full w-full" />
        </div>
      </div>
      <div className="DescriptionContainer  mt-4">
        <p className="viddescp  text-[18px]  xl:leading-[21px]  xl:text-[18px] font-light tracking-[0.18px] leading-[20px] text-left no-underline text-black" dangerouslySetInnerHTML={{__html:safeHTML}}>
         
        </p>
      </div>
    </div>
  );
};
 
export default VideoCard;
 