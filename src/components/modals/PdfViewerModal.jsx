"use client";

import React, { useEffect, useState } from "react";

export default function PdfViewerModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(true);

  // Close on Escape key & manage body scroll
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      setLoading(true);
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 rounded-xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] text-white border-b border-gray-700">
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide">
              Patient Brochure
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/documents/Patient_Brochure.pdf"
              download="Patient_Brochure.pdf"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white bg-dark_green hover:bg-green-700 px-3.5 py-1.5 rounded-lg transition-all shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 relative w-full h-full bg-gray-800">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 text-white gap-3 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-600 border-t-dark_green"></div>
              <p className="text-sm text-gray-300 font-medium">Loading document...</p>
            </div>
          )}

          <iframe
            src="/documents/Patient_Brochure.pdf#toolbar=1"
            className="w-full h-full border-0 bg-white"
            title="Patient Brochure"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}

