"use client";

import { createContext, useState, useEffect } from "react";

const ResponsiveContext = createContext(null);

const ResponsiveContextProvider = ({ children }) => {
  // State to track visibility of components

  // Manage scroll behavior based on isExpanded state
  const [hamburgerColor, setHamburgerColor] = useState("green");
  const [navHeader, setNavheader] = useState("home");
  const [navbarWidth, setNavbarWidth] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const changeColor = (newColor) => {
    setHamburgerColor(newColor);
  };

  const fn = () => {
    setTimeout(() => {
      console.log("okkk");
      setHamburgerColor("red");
    }, 100);
  };
  // Function to reset to default
  const resetColor = () => {
    setHamburgerColor("green");
  };
  useEffect(() => {
    console.log(navbarWidth, "width");
  }, [navbarWidth]);
  // Check for screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const contextValue = {
    isMobile,
    setIsMobile,
    navHeader,
    setNavheader,
    hamburgerColor,
    changeColor,
    resetColor,
    navbarWidth,
    setNavbarWidth,
    fn,
  };

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export { ResponsiveContext, ResponsiveContextProvider };
