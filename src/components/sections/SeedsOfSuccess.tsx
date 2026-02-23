"use client";
import Image from "next/image";
import Cta from "../../../public/assets/images/cta1.png";
import map from "../../../public/assets/images/map.png"

const stats = [
  { number: "90+",  label: "Years of Family Business" },
  { number: "120+", label: "Investments Made" },
  { number: "100+", label: "Elite Partnerships" },
  { number: "20+",  label: "Countries Reached" },
];

export default function SeedsOfSuccess() {
  return (
    <section className="" style={{ backgroundImage: "url('/assets/images/bg.png')" }}>
      <div className="container  custompl border-l-[1.8px] border-[#A58F77]">
      <div className="">
        {/* Heading */}
        <div className="pt-[130px] pl-[60px]">
         <h2 className="text-[72px] mb-[15px] leading-[1.2] text-[#3F3B33]">Seeds of Success </h2>
         <p className="text-[#3F3B33] text-[35px] mb-[36px]">Countries where the Group has interests</p>
          
          <button          
          className="relative inline-block  text-[#bfaf9d] font-light text-[24px] px-8 py-3 "
        >
          <Image  src={Cta} alt="Cta" width={205} height={63} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
          Read More
        </button>
        </div>

        {/* World map placeholder */}
       <div className="-mt-[10px] mb-[45px]">
        <Image src={map} alt="map" style={{"width": 'auto', height: 'auto'}} className="mx-auto"/>
       </div>

        {/* Stats */}
        <div className="max-w-[880px] demo">
          {stats.map((stat) => (
            <div key={stat.label} className="item pt-5 mb-[46px] flex justify-between items-start relative">
              <p className="font-antic text-[#3d3830] text-[83px] inline-block py-[10px] px-[30px] bg-white leading-none ml-[85px] mb-2">
                {stat.number}
              </p>
              <p className="text-[#3F3B33] font-light text-[25px] leading-snug w-[300px] text-left">{stat.label}</p>
              <span className="block h-[1.83px] bg-[#A58F77] absolute left-0 right-0 bottom-[47px] -z-20"></span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
