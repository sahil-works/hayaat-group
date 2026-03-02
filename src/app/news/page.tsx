import Image from "next/image";
import hero from "../../../public/assets/images/realEstate/hero.jpg"


export const metadata = {
  title: "What We Do — Hayaat Group",
};
export default function WhatWeDoPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative">
          <div className="image">
            <Image src={hero} alt="hero image" style={{"width": '100%', height: '810'}} className="block h-[80vh] lg:h-auto" />        
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/80">
            <div className="text-center ">
              <h1 className="block text-[50px] md:text-[80px] xl:text-[100px] leading-[1.2] text-white capitalize px-[15px] md:px-0">coming soon </h1>
            </div>
          </div>
        </div>      
    </main>    
  );
}