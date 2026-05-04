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
    <section ref={ref} className="relative w-full overflow-hidden">
      <Image
        src="/assets/images/bg.png"
        alt="Background"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="relative z-10 container  custompl border-l-[1.8px] border-[#A58F77]">
        {/* Heading */}
        <div className="pt-[40px] sm:pt-[80px] xl:pt-[91px] md:pl-[60px] xl:pl-[76px]">
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
        <div className="-mt-[10px] mb-[45px] xl:mb-0">
          {/* <Image
            src={map}
            alt="map"
            style={{ width: "auto", height: "auto" }}
            className="mx-auto mapImage"
          /> */}
        </div>

        {/* Stats */}
        <div className="pb-[40px] sm:pb-[80px] xl:pb-[130px]">
          {stats.map((stat) => (
            <div key={stat.label} className="mb-[28px] sm:mb-[44px]">
              {/* Label row — sits above the line row */}
              <div className="flex items-end xl:pr-[348px]">
                <span className="block w-[40px] sm:w-[55px] flex-shrink-0" />
                <div className="flex-1 flex justify-end xl:justify-normal xl:ml-[522px]">
                  <span className="text-[#3F3B33] font-light text-[11px] sm:text-[13px] md:text-[16px] xl:text-[26px] tracking-wide mb-[6px] sm:mb-[8px] xl:mb-[-26px]">
                    {stat.label}
                  </span>
                </div>
              </div>
              {/* Line + Number row */}
              <div className="flex items-center">
                {/* Short left accent line */}
                <span className="block h-[1.5px] w-[40px] sm:w-[55px] bg-[#A58F77] flex-shrink-0 xl:mt-[26px]" />
                {/* Number */}
                <p className="font-antic text-[#3d3830] leading-none flex-shrink-0 mx-2 sm:mx-3 w-[130px] sm:w-[180px] md:w-[210px] xl:w-[176px]">
                  <span className="text-[48px] sm:text-[65px] md:text-[75px] xl:text-[84px]">
                    {stat.number.replace("+", "")}
                  </span>
                  <span className="text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px]">+</span>
                </p>
                {/* Right extending line */}
                <span
                  className={`block h-[1.5px] bg-[#A58F77] xl:mt-[26px] flex-1 origin-left ${show ? "animate-lineX" : "scale-x-0"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
