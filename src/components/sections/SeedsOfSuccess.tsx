"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Cta from "../../../public/assets/images/cta1.png";
import map from "../../../public/assets/images/map.png";

const stats = [
  { number: "20+", label: "Years of Track Record" },
  { number: "120+", label: "Investments Made" },
  { number: "$8B+", label: "Project Value" },
  { number: "20+", label: "Countries" },
];

export default function SeedsOfSuccess() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/assets/images/bg.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="container  custompl border-l-[1.8px] border-[#A58F77]">
        {/* Heading */}
        <div className="pt-[40px] sm:pt-[80px] xl:pt-[130px] md:pl-[60px]">
          <h2 className="text-[38px] sm:text-[50px] md:text-[65px] xl:text-[72px] mb-[5px] xl:mb-[15px] leading-[1.2] text-[#3F3B33]">
            Seeds of Success{" "}
          </h2>
          {/* <p className="text-[#3F3B33] text-[18px] sm:text-[28px] xl:text-[35px] mb-[20px] sm:mb-[36px]">
            Countries where the Group has interests
          </p> */}
          {/* <button className="relative inline-block  text-[#bfaf9d] font-light text-[20px] sm:text-[24px] px-8 py-3 ">
            <Image
              src={Cta}
              alt="Cta"
              width={205}
              height={63}
              className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center "
            />
            Read More
          </button> */}
        </div>

        {/* World map placeholder */}
        <div className="-mt-[10px] mb-[45px]">
          {/* <Image
            src={map}
            alt="map"
            style={{ width: "auto", height: "auto" }}
            className="mx-auto mapImage"
          /> */}
        </div>

        {/* Stats */}
        <div className="max-w-[880px] demo">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="item pt-5 mb-[25px] sm:mb-[46px] flex items-start gap-12 relative"
            >
              <p className="font-antic text-[#3d3830] text-[30px] sm:text-[55px] md:text-[65px] xl:text-[83px] inline-block py-[10px] px-[20px] sm:px-[30px] bg-white/90 leading-none mb-2 min-w-[180px] text-right">
                {stat.number}
              </p>
              <p className="text-[#3F3B33] font-light text-[16px] md:text-[25px] leading-snug absolute left-[220px] right-0 sm:text-left ml-[200px]">
                {stat.label}
              </p>
              {/* <span className="block h-[0.8px] sm:h-[1.83px] bg-[#A58F77] absolute left-0 right-0 bottom-[30px] sm:bottom-[47px] -z-20 origin-left scale-x-0 animate-lineX"></span> */}
              <div ref={ref} className="">
                <span
                  className={`block h-[0.8px] sm:h-[1px] bg-[#A58F77] absolute left-0 right-0 bottom-[30px] sm:bottom-[47px] -z-20 origin-left
                  ${show ? "animate-lineX" : "scale-x-0"}`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
