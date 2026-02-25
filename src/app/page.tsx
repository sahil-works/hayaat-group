import HomeHero from "@/components/sections/HomeHero";
import HomeIntro from "@/components/sections/HomeIntro";
import FutureInFocus from "@/components/sections/FutureInFocus";
import SeedsOfSuccess from "@/components/sections/SeedsOfSuccess";
import LatestInvestments from "@/components/sections/LatestInvestments";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>      
      <HomeHero />
      <HomeIntro />
      <AboutSection />
      <FutureInFocus />
      <SeedsOfSuccess />
      <LatestInvestments />      
    </main>
  );
}
