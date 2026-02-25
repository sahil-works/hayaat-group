import Navbar from "@/components/Navbar";
// import heroBg from "../../../public/assets/images/home/hero.jpg";

import Image from "next/image";
// Hero bg from Figma (Dubai skyline at golden hour)
// const heroBg = "https://www.figma.com/api/mcp/asset/09bc2385-cac4-45b5-9cc2-21f5264223ff";


export default function HomeHero() {
  return (
    <>
    <div className="relative">
      <div className="image">
        {/* <Image src={heroBg} alt="hero image" style={{"width": '100%', height: 'auto'}} className="block" /> */}
          <video            
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          >
             <source src="/assets/images/home/video.mp4"></source>
            </video>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center bg-black/50">
        <div className="container mx-auto ">
          <h1 className="pt-[100px] ml-[100px] block text-[58px] lg:text-[70px] leading-[1.2] text-white max-w-[528px]">Where<br /> financial growth comes to life.</h1>
        </div>
      </div>
    </div>
    
    </>
  );
}

