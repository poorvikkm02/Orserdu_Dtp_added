"use client"
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import PreLoader from "@/components/loaders/Preloader";

const RealStories = dynamic(() => import("@/components/real-stories-components/RealStoriesClient"), {
  ssr: false,
  loading:()=>{return <PreLoader/>}

});

const RealStoryPage = () => {
  return (
    <>
      <h1 className="sr-only">Voices of Our Community: Stories From Patients Like You</h1>
      <h2 className="sr-only">Navigating Life With ESR1-Mutated Breast Cancer</h2>
      <h3 className="sr-only">Finding Balance During Treatment</h3>
      <h2 className="sr-only">Managing Expectations and Challenges</h2>
      <Suspense fallback={<div>Loading...</div>}>
      <RealStories />
    </Suspense>
    </>
  );
};

export default RealStoryPage;


