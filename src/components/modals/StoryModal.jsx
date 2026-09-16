import React, { useEffect } from 'react';
 
const StoryModal = ({
  isOpen,
  onClose,
  onContinue,
  title = "You are now leaving ORSERDU.com",
  description = "This page is redirecting to myESR1story.com, where you can sign up to be an ambassador for ORSERDU through Menarini Stemline.",
  continueText = "Proceed to myESR1story.com",
  cancelText = "Stay on ORSERDU.com"
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;
 
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Black opacity blur background */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
 
      {/* White modal container */}
      <div className="relative bg-white rounded-xl shadow-xl  max-w-[800px] w-full p-4 xl:px-12 xl:py-10 text-center">
        {/* Modal content */}
        <div className="space-y-4 p-2 xl:px-10">
          <p className="text-[15px] xl:text-xl font-[700] text-gray-900">
            {title}
          </p>
         
          <p className="text-gray-700 text-[14px] xl:text-base font-[400]">
            {description}
          </p>
 
          <div className="flex flex-col xl:flex-row gap-6 justify-center xl:space-x-4 pt-4">
            <button
              onClick={onContinue}
              className="p-6 py-3 w-full text-xl font-[800] text-dark_green bg-[#FFD506] rounded-xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              {continueText}
            </button>
            <button
              onClick={onClose}
              className="p-6 py-3 w-full  text-xl font-[800] text-white bg-black rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default StoryModal;
 