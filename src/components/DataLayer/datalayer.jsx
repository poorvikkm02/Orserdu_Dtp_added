"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function DataLayerTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Wait for component to mount and ensure window is available
    if (typeof window === "undefined") return;

    // Get the current path without leading/trailing slashes
    const cleanPathname = pathname.replace(/^\/|\/$/g, "") || "Home";
    
    // Get query parameters
    const queryString = searchParams.toString();
    
    // Build the full URL
    let fullUrl;
    if (typeof window !== "undefined") {
      fullUrl = `${window.location.origin}${pathname}`;
      if (queryString) {
        fullUrl += `?${queryString}`;
      }
    } else {
      fullUrl = `https://www.orserdu.com${pathname}`;
      if (queryString) {
        fullUrl += `?${queryString}`;
      }
    }

    // Initialize dataLayer if it doesn't exist
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Push page view event (standard for GA4)
    window.dataLayer.push({
      event: "page_view",
      page_path: pathname,
      page_location: fullUrl,
      page_title: document.title || cleanPathname,
    });

    // Push your custom navLink event
    window.dataLayer.push({
      linkText: cleanPathname,
      linkUrl: fullUrl,
      event: "navLink",
    });

    console.log("DataLayer event pushed:", cleanPathname, window.dataLayer);

    // Optional: Uncomment for debugging redirect
    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 3000);
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}