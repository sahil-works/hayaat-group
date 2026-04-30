"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import hero from "../../../public/assets/images/about/chairman-new.png";
import leafe from "../../../public/assets/images/leafe.png";
import Icon from "../../../public/assets/images/h.png";
import Footer from "@/components/Footer";

export default function ChairmanMessagePage() {
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
    <main>
      {/* Hero */}
      <div className="relative">
        <div className="image w-full">
          <Image
            src={hero}
            alt="hero image"
            style={{ width: "100%", height: "810" }}
            className="block h-[500px] md:h-[90vh] xl:h-auto"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/20">
          <div className="container mx-auto ">
            <h1 className="pb-[100px] xl:pb-[210px] ml-[20px] md:ml-[90px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white max-w-[528px]">
              Message from
              <br />
              the Chairman
            </h1>
          </div>
        </div>
      </div>

      {/* Intro body text */}

      <div className="pt-[40px] md:pt-[80px] lg:pt-[114px] xl:pt-[38px] relative bg-[#BFAF9D]">
        <span className=" bg-[#3F3B33] absolute top-0 left-0 right-0 bottom-0 "></span>
        <span className="w-full h-[380px] sm:h-[665px] bg-[#3F3B33] absolute top-0 xl:top-[-12px] left-0 right-0 -z-2"></span>
        <div className="container relative z-20">
          <div className="text  flex items-start">
            {/* <span className="absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top scale-y-0 animate-lineGrow hidden md:block"></span> */}
            <div ref={ref} className="">
              <span
                className={`absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top hidden md:block
                ${show ? "animate-lineGrow-slow" : "scale-y-0"}`}
              ></span>
            </div>
            <Image
              src={leafe}
              alt="leafe"
              width={73}
              height={113}
              className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block"
            />
            <span className="absolute top-0  -left-[36px]  bg-[#3F3B33]  w-[75px] h-[130px] z-10 hidden sm:block"></span>
            {/* <Image
              src={Icon}
              alt="leafe"
              width={37}
              height={75}
              className="hidden md:block absolute top-[50%] left-0 xl:-left-[56px] md:ml-5 xl:ml-0"
            /> */}
            <div className="xl:mt-[126px] xl:max-w-[1014px]">
              <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                Chairman’s Message
              </p>
              <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                Our journey began with a simple belief: build with conviction
                and take responsibility for outcomes.
              </p>
              <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                My early career in the Oil & Gas industry exposed me to
                environments where execution leaves little room for error. That
                experience instilled a mindset of discipline, technical rigor,
                and accountability - principles that continue to define how we
                approach investments today.
              </p>
              <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                As we transitioned into real estate, we found an opportunity to
                translate that mindset into creating physical assets of lasting
                value. We worked in markets that required patience and
                resilience, often delivering through cycles where others stepped
                back. Over time, this became a cornerstone of our identity -
                backing opportunities where conviction, not sentiment, drives
                decisions.
              </p>
              <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                Being a family-led platform allows us to take a longer view. We
                are not constrained by short-term horizons; instead, we focus on
                creating value that compounds over years, not quarters. This
                perspective shapes how we evaluate opportunities, structure
                partnerships, and manage risk.
              </p>
              <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                I would like to thank our partners, teams, and stakeholders who
                have trusted us over the years. The journey continues, and we
                approach it with the same discipline and intent that defined our
                beginnings.
              </p>
              <p className="mb-[20px] sm:mb-[80px] lg:mb-[133px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                Mohammed Ikhlaq
                <br />
                Founder & Chairman
                <br />
                Hayaat Group
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
