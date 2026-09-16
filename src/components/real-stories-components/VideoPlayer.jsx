"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import DOMPurify from 'dompurify';

// Global singleton guard
let videoPlayerInstanceCount = 0;

const VideoPlayer = React.forwardRef(({ 
  selectedVideo, 
  closeVideoPlayer, 
  className, 
  mute = false,
  ...props 
}, forwardedRef) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Safe HTML states (prevents SSR mismatch)
  const [safeTitle, setSafeTitle] = useState("");
  const [safeDescription, setSafeDescription] = useState("");

  // Instance guard
  const instanceIdRef = useRef(Math.random().toString(36).substring(7));
  const isMountedRef = useRef(false);

  // Memoized cleanup function
  const cleanupVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = "";
      videoRef.current.load();
    }
    setIsLoading(true);
  }, []);

  useEffect(() => {
    // Mount guard
    if (isMountedRef.current) return;
    
    isMountedRef.current = true;
    videoPlayerInstanceCount++;
    
    console.log(`VideoPlayer instance ${instanceIdRef.current} mounted. Total instances: ${videoPlayerInstanceCount}`);
    
    return () => {
      isMountedRef.current = false;
      videoPlayerInstanceCount--;
      console.log(`VideoPlayer instance ${instanceIdRef.current} unmounted. Total instances: ${videoPlayerInstanceCount}`);
      
      // Cleanup video on unmount
      cleanupVideo();
    };
  }, [cleanupVideo]);

  // Prevent duplicate video initialization
  const hasVideoInitializedRef = useRef(false);

  // Safe HTML update
  useEffect(() => {
    if (selectedVideo) {
      setSafeTitle(DOMPurify.sanitize(selectedVideo.title));
      setSafeDescription(DOMPurify.sanitize(selectedVideo.description));
    }
  }, [selectedVideo]);

  // Single initialization effect
  useEffect(() => {
    if (typeof window === 'undefined' || !videoRef.current || !selectedVideo) return;

    const videoElement = videoRef.current;
    
    // Guard against duplicate initialization
    if (hasVideoInitializedRef.current && videoElement.src === selectedVideo.videoUrl) {
      return;
    }

    const setupVideo = () => {
      // Clear previous initialization flag if video source changed
      if (videoElement.src !== selectedVideo.videoUrl) {
        hasVideoInitializedRef.current = false;
      }
      
      if (!hasVideoInitializedRef.current) {
        videoElement.src = selectedVideo.videoUrl;
        videoElement.muted = mute;
        videoElement.load();
        hasVideoInitializedRef.current = true;
        console.log(`VideoPlayer ${instanceIdRef.current}: Video initialized for ${selectedVideo.id}`);
      }
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      console.log(`VideoPlayer ${instanceIdRef.current}: Video loaded for ${selectedVideo.id}`);
    };

    const handleMediaChange = () => {
      if (!videoElement) return;
      
      const mediaQuery = window.matchMedia('(min-width: 850px) and (orientation: portrait)');
      if (mediaQuery.matches) {
        videoElement.pause();
      } else if (hasVideoInitializedRef.current) {
        videoElement.play().catch(e => console.log("Autoplay prevented:", e));
      }
    };

    // Setup event listeners
    videoElement.addEventListener('loadeddata', handleLoadedData);
    const mediaQuery = window.matchMedia('(min-width: 850px) and (orientation: portrait)');
    mediaQuery.addEventListener('change', handleMediaChange);

    // Initialize video
    setupVideo();
    handleMediaChange();

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [selectedVideo?.id, selectedVideo?.videoUrl, mute]);

  // Handle mute changes without reinitializing
  useEffect(() => {
    if (videoRef.current && hasVideoInitializedRef.current) {
      videoRef.current.muted = mute;
    }
  }, [mute]);

  // Handle video source changes without full reinitialization
  useEffect(() => {
    if (videoRef.current && selectedVideo && hasVideoInitializedRef.current) {
      if (videoRef.current.src !== selectedVideo.videoUrl) {
        cleanupVideo();
        hasVideoInitializedRef.current = false;
      }
    }
  }, [selectedVideo?.videoUrl, cleanupVideo]);

  return (
    <div 
      id="VideoPlayercontainer" 
      ref={containerRef}
      className={className}
      data-video-player-instance={instanceIdRef.current}
      data-video-id={selectedVideo?.id}
    >
      <p className="green-color py-3 p-4 md:p-0 mobPad" style={{ fontWeight: 600 }}>
        {closeVideoPlayer && (
          <button
            onClick={closeVideoPlayer}
            className="text-[18px] hidden xl:block font-light tracking-[0.18px] leading-[22px] z-[100] text-left no-underline text-black mb-5"
          >
            Go Back
          </button>
        )}
        <div className="flex justify-between">
          <p 
            className="mb-6 text-[26px] xl:text-4xl font-semibold leading-[38px] tracking-[0.36px] text-left no-underline text-dark_green"
            dangerouslySetInnerHTML={{ __html: safeTitle }}
          />
        </div>
      </p>
      
      <div className="relative w-full pb-[56.25%] rounded-xl bg-gray-100"> 
        <video
          ref={(el) => {
            videoRef.current = el;
            if (forwardedRef) {
              if (typeof forwardedRef === 'function') {
                forwardedRef(el);
              } else {
                forwardedRef.current = el;
              }
            }
          }}
          id={`videoPlayer-${instanceIdRef.current}`}
          key={`video-${selectedVideo?.id}`}
          autoPlay
          controls
          muted={mute}
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          onError={() => {
            setIsLoading(false);
            console.error(`VideoPlayer ${instanceIdRef.current}: Failed to load video`);
          }}
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        )}
      </div>

      <div className="DescriptionContainer1 py-4 mobPad">
        <p 
          className="mt-2 p-4 md:p-0 text-[16px] xl:text-[16px] font-light tracking-[0.16px] leading-[22px] text-left no-underline text-white xl:text-black" 
          dangerouslySetInnerHTML={{ __html: safeDescription }}
        />
      </div>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default React.memo(VideoPlayer, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  return (
    prevProps.selectedVideo?.id === nextProps.selectedVideo?.id &&
    prevProps.mute === nextProps.mute &&
    prevProps.className === nextProps.className
  );
});