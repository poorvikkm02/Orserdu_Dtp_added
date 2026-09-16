"use client"

import { useState, useEffect } from 'react';

const usePreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check current ready state immediately
    if (document.readyState === 'complete') {
      setLoading(false);
      return;
    }

    // Set up event listeners for both DOMContentLoaded and load
    window.addEventListener('DOMContentLoaded', handleLoad);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoad);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return loading;
};

export default usePreLoader;