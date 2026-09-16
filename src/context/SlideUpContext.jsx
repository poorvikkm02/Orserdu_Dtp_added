"use client";

import { createContext, useState, useEffect } from "react";

const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // State to track visibility of components
  const [isComponentOneVisible, setComponentOneVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isSecondComponentVisible, setIsSecondComponentVisible] =
    useState(false);
  const [stopScroll, setStopScroll] = useState(false);
  const closeVideoFnRef = { current: null };

  // Manage scroll behavior based on isExpanded state
  useEffect(() => {
    if (isOpenNav) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup function to ensure the scroll behavior is reset if the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded, isOpenNav]);

  useEffect(() => {
    if (stopScroll) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup function to ensure the scroll behavior is reset if the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [stopScroll]);

  const contextValue = {
    isComponentOneVisible,
    setComponentOneVisible,
    isExpanded,
    setIsExpanded,
    isOpenNav,
    setIsOpenNav,
    stopScroll,
    setStopScroll,
    closeVideoFnRef,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
