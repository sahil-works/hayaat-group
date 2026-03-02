"use client";

import HomeHero from "@/components/sections/HomeHero";
import HomeIntro from "@/components/sections/HomeIntro";
import FutureInFocus from "@/components/sections/FutureInFocus";
import SeedsOfSuccess from "@/components/sections/SeedsOfSuccess";
import LatestInvestments from "@/components/sections/LatestInvestments";
import AboutSection from "@/components/sections/AboutSection";
// import {  useEffect, useState } from "react";
// import Loader from "@/components/PageLoader";

export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [showLoader, setShowLoader] = useState(false);

  // const handleLoaderFinish = () => {
  //   setIsLoaded(true);
  //   setShowLoader(false);
  //   localStorage.setItem("hasVisited", "true"); // Save flag
  // };

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("hasVisited");

  //   if (!hasVisited) setShowLoader(true);
  //   else setIsLoaded(true);
  // }, []);

  return (
    <>
      {/* {showLoader && !isLoaded && <Loader onFinish={handleLoaderFinish} />}
      {isLoaded && ( */}
      <main>
        <HomeHero />
        <HomeIntro />
        <AboutSection />
        <FutureInFocus />
        <SeedsOfSuccess />
        <LatestInvestments />
      </main>
      {/* )} */}
    </>
  );
}
