"use client"

import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { StoreContext } from "@/context/SlideUpContext";
 // Adjust the path if necessary

const useVisibilityObserver = (threshold = 0.01) => {
  const { setComponentOneVisible } = useContext(StoreContext);

  // Use the Intersection Observer hook to track visibility
  const { ref, inView } = useInView({
    threshold, // Visibility triggers the observer when the element is 10% in view
  });

  // Update visibility state based on the element's visibility
  useEffect(() => {
    setComponentOneVisible(inView);
  

  }, [inView, setComponentOneVisible]);

  return { ref, inView };
};

export default useVisibilityObserver;
