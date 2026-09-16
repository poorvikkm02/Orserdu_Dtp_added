"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CookieSettingsInit() {
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Function to check if OneTrust is loaded
    const checkOneTrustLoaded = () => {
      return typeof window !== "undefined" && 
             typeof window.OptanonWrapper === "function";
    };

    // Function to initialize OneTrust
    const initializeOneTrust = () => {
      if (checkOneTrustLoaded()) {
        try {
          window.OptanonWrapper();
          setIsInitialized(true);
          console.log("OneTrust initialized successfully");
        } catch (error) {
          console.error("Error initializing OneTrust:", error);
        }
      } else {
        console.warn("OneTrust not loaded yet, retrying...");
        
        // If OneTrust isn't loaded, try again after a delay
        const retryInterval = setInterval(() => {
          if (checkOneTrustLoaded()) {
            try {
              window.OptanonWrapper();
              setIsInitialized(true);
              console.log("OneTrust initialized on retry");
              clearInterval(retryInterval);
            } catch (error) {
              console.error("Error initializing OneTrust on retry:", error);
            }
          }
        }, 1000); // Retry every second

        // Stop retrying after 10 seconds
        setTimeout(() => {
          clearInterval(retryInterval);
          if (!isInitialized) {
            console.error("OneTrust failed to initialize after retries");
          }
        }, 10000);
      }
    };

    // Initialize on component mount and pathname change
    initializeOneTrust();

    // Cleanup function
    return () => {
      // Add any cleanup if needed
    };
  }, [pathname, isInitialized]);

  // Listen for OneTrust events
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOneTrustEvent = (event) => {
      console.log("OneTrust event:", event.detail);
      // You can add custom logic here based on OneTrust events
      // For example, update analytics based on consent changes
    };

    window.addEventListener("OptanonWrapper", handleOneTrustEvent);
    window.addEventListener("OneTrustGroupsUpdated", handleOneTrustEvent);
    window.addEventListener("OneTrustLoaded", handleOneTrustEvent);

    return () => {
      window.removeEventListener("OptanonWrapper", handleOneTrustEvent);
      window.removeEventListener("OneTrustGroupsUpdated", handleOneTrustEvent);
      window.removeEventListener("OneTrustLoaded", handleOneTrustEvent);
    };
  }, []);

  // Monitor consent changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.OnetrustActiveGroups) return;

    const checkConsent = () => {
      const activeGroups = window.OnetrustActiveGroups || "";
      console.log("Active consent groups:", activeGroups);
      
      // Example: Check if analytics cookies are accepted
      const hasAnalyticsConsent = activeGroups.includes("C0002");
      if (hasAnalyticsConsent) {
        // Trigger analytics initialization
        console.log("Analytics cookies accepted");
      }
    };

    // Check consent when OneTrust changes
    const observer = new MutationObserver(checkConsent);
    const banner = document.getElementById("onetrust-banner-sdk");
    if (banner) {
      observer.observe(banner, { attributes: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [isInitialized]);

  return null; // This component doesn't render anything
}

export function openCookieSettings() {
  if (typeof window !== "undefined" && window.OneTrust) {
    try {
      window.OneTrust.ToggleInfoDisplay();
    } catch (error) {
      console.error("Error opening cookie settings:", error);
      // Fallback: try to open via the Optanon object
      if (window.Optanon && window.Optanon.ToggleInfoDisplay) {
        window.Optanon.ToggleInfoDisplay();
      }
    }
  } else {
    console.warn("OneTrust is not ready yet");
    
    // Try to open the banner directly as fallback
    const bannerButton = document.querySelector('.onetrust-pc-dark-filter, [aria-label="Cookie Settings"]');
    if (bannerButton) {
      bannerButton.click();
    }
  }
}

export function closeCookieSettings() {
  if (typeof window !== "undefined" && window.OneTrust) {
    try {
      window.OneTrust.Close();
    } catch (error) {
      console.error("Error closing cookie settings:", error);
    }
  }
}

export function getCookieConsent(category = "C0002") {
  if (typeof window === "undefined") return false;
  
  try {
    const activeGroups = window.OnetrustActiveGroups || "";
    return activeGroups.includes(category);
  } catch (error) {
    console.error("Error getting cookie consent:", error);
    return false;
  }
}

export function isOneTrustLoaded() {
  return typeof window !== "undefined" && 
         typeof window.OneTrust !== "undefined" && 
         typeof window.OptanonWrapper === "function";
}

// Utility hook for components that need cookie consent
export function useCookieConsent(category = "C0002") {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      setHasConsent(getCookieConsent(category));
    };

    // Initial check
    checkConsent();

    // Listen for consent changes
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener("OneTrustGroupsUpdated", handleConsentChange);

    return () => {
      window.removeEventListener("OneTrustGroupsUpdated", handleConsentChange);
    };
  }, [category]);

  return hasConsent;
}

// Component to conditionally render based on cookie consent
export function WithCookieConsent({ 
  children, 
  category = "C0002", 
  fallback = null 
}) {
  const hasConsent = useCookieConsent(category);
  
  return hasConsent ? children : fallback;
}