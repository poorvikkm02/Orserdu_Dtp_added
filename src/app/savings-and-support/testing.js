// src/app/savings-and-support/testing.js
import React from "react";

export const TestingQA = () => {
  return (
    <div
      id="testingQA"
      className="bg-white xl:rounded-[1.7rem] shadow-md xl:shadow-box_shadow mx-0 xl:mt-6 mb-4 p-6 xl:px-[34px] xl:py-8"
    >
      {/* Section Title */}
      <h2 className="leading-9 text-[30px] xl:text-[36px] font-[600] xl:tracking-[0.36px] xl:leading-[38px] mb-4 text-left text-dark_green">
        Testing &amp; Diagnostics
      </h2>

      {/* Main Description */}
      <p className="font-light text-[18px] leading-[24px] text-gray-700 mb-6">
        Understanding your mutation status helps you and your healthcare team
        make informed decisions regarding your treatment journey.
      </p>

      {/* Standard HTML Content Block (Two Columns / Cards / Lists) */}
      <div className="flex flex-col xl:flex-row gap-6 text-[18px] font-light">
        {/* Column 1 */}
        <div className="w-full xl:w-1/2">
          <h3 className="text-[20px] xl:text-[22px] font-[500] text-dark_green mb-3">
            How testing works
          </h3>
          <p className="text-gray-700 leading-[22px] mb-3">
            A simple blood draw (liquid biopsy) can detect circulating tumor
            DNA (<em className="font-light">ctDNA</em>) to identify <em className="font-light">ESR1</em> mutations.
          </p>
          <ul className="list-disc ml-[18px] flex flex-col gap-2 marker:text-mint leading-[22px]">
            <li>Fast and minimally invasive</li>
            <li>Identifies mutations as cancer changes over time</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full xl:w-1/2">
          <h3 className="text-[20px] xl:text-[22px] font-[500] text-dark_green mb-3">
            When to discuss testing
          </h3>
          <p className="text-gray-700 leading-[22px] mb-3">
            Testing is recommended upon disease progression to evaluate
            next-step treatment options.
          </p>
          <ul className="list-disc ml-[18px] flex flex-col gap-2 marker:text-mint leading-[22px]">
            <li>Talk with your oncologist at regular appointments</li>
            <li>Ask whether liquid biopsy is appropriate for you</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
