"use client";

import HomeHero from "@/components/sections/HomeHero";
import HomeIntro from "@/components/sections/HomeIntro";
import FutureInFocus from "@/components/sections/FutureInFocus";
import SeedsOfSuccess from "@/components/sections/SeedsOfSuccess";
import LatestInvestments from "@/components/sections/LatestInvestments";
import AboutSection from "@/components/sections/AboutSection";
import { Fragment, useEffect, useState } from "react";
import Loader from "@/components/PageLoader";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [introLineDone, setIntroLineDone] = useState(false);
  const [aboutLineDone, setAboutLineDone] = useState(false);

  const handleLoaderFinish = () => {
    setIsLoaded(true);
    setShowLoader(false);
    localStorage.setItem("hasVisited", "true");
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) setShowLoader(true);
    else setIsLoaded(true);
  }, []);

  return (
    <Fragment>
      {showLoader && !isLoaded && <Loader onFinish={handleLoaderFinish} />}
      {isLoaded && (
        <main>
          <HomeHero />
          <HomeIntro onLineFinish={() => setIntroLineDone(true)} />
          <AboutSection canStart={introLineDone} onLineFinish={() => setAboutLineDone(true)} />
          <FutureInFocus canStart={aboutLineDone} />
          <SeedsOfSuccess />
          <LatestInvestments />
          <Footer />
        </main>
      )}
    </Fragment>
  );
}
