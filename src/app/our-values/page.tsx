"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import hero from "../../../public/assets/images/about/our-values.jpeg";
import pillar from "../../../public/assets/images/about/Pillar.png";
import leafe from "../../../public/assets/images/leafe.png";
import Footer from "@/components/Footer";

const dnaItems = [
  {
    title: "Entrepreneurial Experience",
    text: "Time-tested expertise across diverse sectors and markets, committed to value-creation, and not wavered by short-term market conditions.",
  },
  {
    title: "Passion-Forward ",
    text: "A zeal for ‘disruptors’, driving investments in developed, emerging, and frontier markets, that goes beyond traditional private equity constraints.",
  },
  {
    title: "Patient Partnership",
    text: "Shared purpose, risks and rewards, based on mutual trust and values for co-prosperity. Partnering founders, management, and co-investors",
  },
  {
    title: "Proactive Collaboration",
    text: "Strategic and tactical mentorship with our in-house, agile advisory for transparency across stakeholders.",
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <div className="relative">
        <div className="image">
          <Image
            src={hero}
            alt="hero image"
            style={{ width: "100%", height: "810" }}
            className="block h-[500px] md:h-[90vh] xl:h-auto object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/20">
          <div className="container mx-auto flex justify-center">
            <h1 className="block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[72px] leading-[1.2] text-white text-center">
              Our Values
            </h1>
          </div>
        </div>
      </div>

      {/* Hayaat DNA — leaf + animated line wrapper */}
      <div ref={ref} className="relative bg-[#BFAF9D] pillarBlock">
        {/* Leaf + animated vertical line */}
        <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-20">
          <div className="container mx-auto h-full relative">
            <Image
              src={leafe}
              alt="leafe"
              width={73}
              height={113}
              className="absolute -left-[36px] z-20"
              style={{ top: "70px" }}
            />
            <span
              className="absolute -left-[36px] bg-[#BFAF9D] w-[75px] h-[183px] z-10"
              style={{ top: "0px" }}
            ></span>
            <span
              className="absolute left-0 w-[1px] border-l-[1.8px] border-[#A58F77] origin-top transform transition-transform duration-[30000ms] ease-linear"
              style={{
                top: "183px",
                height: "calc(100% - 183px)",
                transform: show ? "scaleY(1)" : "scaleY(0)",
              }}
            ></span>
          </div>
        </div>

        <div className="container custompl relative">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,332px] items-center">
            <div className="">
              <h2 className="md:pl-[124px] font-antic text-[rgb(63,59,51)] text-[36px] md:text-[40px] lg:text-[64px] xl:text-[72px] mb-[20px] md:mb-[35px] xl:mb-0 mt-7 lg:mt-10 xl:mt-0">
                The Hayaat DNA
              </h2>
              {dnaItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`md:pl-[124px] pb-[40px] md:pb-[38px] ${index !== dnaItems.length - 1 ? "border-b-[1.53px] border-[#A58F77]" : ""}`}
                >
                  <h3 className="font-antic text-white text-[26px] md:text-[36px] mb-[10px] md:mb-[22px] pt-[15px] md:pt-[30px]">
                    {item.title}
                  </h3>
                  <p className="text-[#3F3B33] font-light text-[16px] md:text-[19px] leading-relaxed max-w-[490px] xl:leading-[48px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="image xl:mb-[92px]">
              <Image
                src={pillar}
                alt="pillar"
                style={{ width: "auto", height: "auto" }}
                className="hidden md:block pillarImage"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
