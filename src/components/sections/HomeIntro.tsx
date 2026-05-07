"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import about from "../../../public/assets/images/home/about.png";
// import bg from "../../../public/assets/images/home/aboutbg.png";
import leafe from "../../../public/assets/images/leafe.png";
// import Icon from "../../../public/assets/images/h.png";

type Props = {
  onLineFinish?: () => void;
};

export default function HomeIntro({ onLineFinish }: Props) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Notify parent when this line animation ends
  useEffect(() => {
    if (show && onLineFinish) {
      const timer = setTimeout(onLineFinish, 10000);
      return () => clearTimeout(timer);
    }
  }, [show, onLineFinish]);

  return (
    <>
      <div className="pt-[50px] sm:pt-[80px] xl:pt-[140px] relative overflow-hidden">
        <span className="w-full h-[380px] sm:h-[665px] bg-[#3F3B33] absolute top-0 left-0 right-0 -z-2"></span>
        <div className="container custompl relative  z-20 ">
          {/* <span className="absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top scale-y-0 animate-lineGrow hidden md:block"></span> */}
          <div ref={ref} className="">
            <span
              className={`absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top hidden md:block
            ${show ? "animate-lineGrow" : "scale-y-0"}`}
            ></span>
          </div>
          <div className="pb-[40px] sm:pb-[80px] xl:pb-[59px] max-w-[1200px] flex items-start">
            <Image
              src={leafe}
              alt="leafe"
              width={73}
              height={113}
              className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block"
            />
            <span className="absolute top-0  -left-[36px]  bg-[#3F3B33]  w-[75px] h-[130px] z-10 hidden sm:block"></span>

            <div className="max-w-[950px] xl:ml-[66px]">
              <p className="text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] sm:pl-[90px] xl:text-center">
                We are the Hayaat Group, a reputed, global principal investment
                firm creating and accelerating growth through talent, integrity
                and respect.
              </p>

              <p className="mt-[32px] sm:mt-[48px] text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] sm:pl-[90px] xl:text-center">
                We work with people who share our passion for success, and
                accelerate value creation through capital, capabilities, and
                experience.
              </p>
            </div>
          </div>

          {/* <div className="image sm:max-w-[80%] xl:max-w-[65%] pl-0 sm:pl-[35px] ">
            <div className="relative group mr-[10px] md:mr-[30px]">
              <Image
                src={about}
                alt="about"
                style={{ width: "100%", height: "auto" }}
                className="relative z-20"
              />
              <Image
                src={bg}
                alt="about bbg"
                style={{ width: "100%", height: "auto" }}
                className="absolute  top-0 right-0  opacity-0 z-10  transition-all duration-500 group-hover:-right-[10px] md:group-hover:-right-[30px] group-hover:-top-[10px] md:group-hover:-top-[30px] group-hover:opacity-100"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
