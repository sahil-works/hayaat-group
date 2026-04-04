"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../public/assets/images/cta.png";

type Card = {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
};

const cards: Card[] = [
  {
    image: "/assets/images/home/card/wiki.jpeg",
    title: "Direct Private\nEquity",
    subtitle: "BUILDING AND TRANSFORMING SCALABLE PLATFORMS",
    description:
      "This pillar represents our active commitment to scaling market-leading enterprises. We focus on high-conviction mandates across three tiers: Core Industrials for long-term stability, Platform Rollups for aggressive consolidation e.g. our UK Packaging and Regional Veterinary platforms—and Disruptive Innovation Plays such as Loyyal.",
  },
  {
    image: "/assets/images/home/card/real-estate.png",
    title: "Real Estate &\nDevelopment",
    subtitle: "DEVELOPMENT OF\nLANDMARK ASSETS",
    description:
      "This signals our core capability as a high-impact developer of institutional and trophy assets. Our mandate covers the full lifecycle of development, from Mixed-Use Waterfront Projects like Isolana and specialized institutional niches such as award winning UK Student Housing, to the development of Signature Ultra-Prime Mansions ($50M–$100M+), including landmark estates in prestigious enclaves such as Al Barari, Dubai.",
  },
  {
    image: "/assets/images/home/card/basket.jpeg",
    title: "Strategic\nFund Investments",
    subtitle: "PARTNERING WITH LEADING\nPRIVATE MARKET MANAGERS",
    description:
      "This signals our institutional reach and connectivity within the global PE/VC ecosystem. It highlights our GP and LP commitments to elite managers, providing Hayaat Group with deep market intelligence and a proprietary co-investment pipeline alongside world-class fund partners.",
  },
  {
    image: "/assets/images/home/card/global.jpeg",
    title: "Global\nCapital Markets",
    subtitle: "SYSTEMATIC INVESTMENTS\nACROSS PUBLIC MARKET",
    description:
      "This serves as the Group's liquidity engine and macro-hedging platform. By utilizing data-driven, systematic strategies across Public Equities and Treasury Management, we ensure organizational agility and maintain immediate capital readiness for our broader private market allocations.",
  },
];

export default function FutureInFocus() {
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
    <div>
      <div className="bg-[#3F3B33] -mt-[1px]">
        <div className="container  border-[#A58F77] border-l-[1.8px] relative">
          {/* <span className="absolute left-0 top-0 h-[2px] w-full bg-[#A58F77] origin-left scale-x-0 animate-lineX"></span> */}
          <div ref={ref} className="">
            <span
              className={`absolute left-0 top-0 h-[1px] w-full bg-[#A58F77] origin-left hidden md:block
            ${show ? "animate-lineX" : "scale-x-0"}`}
            ></span>
          </div>
          <div className="pb-[28px] sm:pb-[54px] sm:pl-[60px] xl:pl-[120px] pt-[60px] md:pt-[80px]">
            <h2 className="text-[#BFAF9D] text-[37px] sm:text-[42px] md:text-[60px] xl:text-[72px] leading-tight mb-[30px] sm:mb-[28px] mt-0 font-[400]">
              The Future in Focus
            </h2>
            <p className="Inter text-white text-[15px] lg:text-[18px] font-[300] leading-[2] xl:leading-[3] max-w-[1100px] mb-[30px] sm:mb-[50px] xl:mb-[50px] opacity-85">
              At the Hayaat Group, our investment strategy is guided by
              generational enterprise and time-tested expertise. We function as
              principal investor across thoughtfully diversified areas,
              balancing active capital deployment in strategic ventures with
              disciplined stewardship of long-term assets. These focus areas
              reflect our progressive commitment to value creation, and evolving
              vision for the future.
            </p>

            <Link
              href="/about"
              className="relative inline-block  text-[#bfaf9d] font-light text-[18px] md:text-[24px] px-8 py-3 transition-colors mb-8 sm:mb-14 tracking-wide"
            >
              <Image
                src={Cta}
                alt="Cta"
                width={205}
                height={63}
                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center "
              />
              Read More
              <span className="inline-block"></span>
            </Link>

            {/* Cards */}
            {/* <div className="relative">
            <div className="">
              <Swiper
                modules={[Navigation]}
                loop
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 1,
                  },

                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      alt={`Slide ${index}`}
                      width={400}
                      height={545}
                      className="w-full h-auto object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex justify-between mt-[10px] sm:mt-[35px] xl:mt-[62px]">
              <div className="custom-prev  cursor-pointer">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.4004 55.9C43.5882 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5882 0.900024 28.4004 0.900024C13.2126 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2126 55.9 28.4004 55.9Z"
                    stroke="#A58F77"
                    stroke-width="1.8"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M42.9218 28.4H14.3008"
                    stroke="#A58F77"
                    stroke-width="1.8"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M23.9226 18.7781L14.3008 28.4L23.9226 38.0111"
                    stroke="#A58F77"
                    stroke-width="1.8"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
              <div className="custom-next  cursor-pointer">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.4003 55.9C43.5881 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5881 0.900024 28.4003 0.900024C13.2125 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2125 55.9 28.4003 55.9Z"
                    stroke="#A58F77"
                    stroke-width="1.8"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8887 28.4H42.4991"
                    stroke="#A58F77"
                    stroke-width="1.8"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M32.8887 18.7781L42.5 28.4L32.8887 38.0111"
                    stroke="#A58F77"
                    stroke-width="1.8"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <div className="bg-[#BFAF9D]">
        <div className="container  border-[#A58F77] border-l-[1.8px] relative">
          <div className="sm:pl-[60px] xl:pl-[120px] pt-[60px] md:pt-[80px] pb-[79px]">
            {/* <p className="font-normal text-3xl sm:text-4xl text-[#3F3B33]">
              Strategic framework
            </p> */}
            <h2 className="mt-2 font-normal text-[38px] md:text-[48px] lg:text-[73px] text-[#3F3B33]">
              Our Four Investment Verticals
            </h2>

            <p className="font-normal text-lg leading-6 text-[#3F3B33] max-w-[1100px]">
              Hayaat Group is structured around four complementary pillars —
              each purpose-built to generate alpha within its domain, while
              collectively forming a resilient, self-reinforcing platform
              capable of deploying capital across market cycles.
            </p>
          </div>

          {/* Cards — pulled left to sit flush against the border line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 xl:gap-0 pb-[80px] xl:pb-[145px] xl:-ml-[80px]  xl:-mr-[100px]">
            {cards.map((card, i) =>
              card.image ? (
                <div
                  key={i}
                  className="relative h-[587px] overflow-hidden group"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  {/* Default: gradient + bottom text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="flex flex-col xl:items-center absolute bottom-0 xl:bottom-[76px] left-0 right-0 p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-normal text-[26px] xl:text-[30px] xl:text-center leading-tight text-white mb-9">
                      {card.title.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                    <p className="font-normal text-[15px] xl:text-[20px] xl:text-center leading-snug text-white">
                      {card.subtitle.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  {/* Hover: solid #3F3B33 overlay + centered text */}
                  <div className="absolute inset-0 bg-[#3F3B33] flex flex-col justify-center items-center px-8 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="font-normal text-[28px] xl:text-[30px] leading-tight mb-4 xl:mb-9 text-white">
                      {card.title.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                    <p className="font-normal text-[15px] xl:text-[20px] text-white leading-snug mb-4 xl:mb-10">
                      {card.subtitle.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    {card.description && (
                      <p className="font-light text-[14px] xl:text-[18px] text-white leading-relaxed">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className="relative h-[587px] bg-[#3A3A3A] flex flex-col justify-center px-8 text-white text-center"
                >
                  <h3
                    className="font-light text-[28px] leading-tight mb-6"
                    style={{ fontFamily: "var(--font-antic)" }}
                  >
                    {card.title.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className="font-semibold text-[15px] leading-snug mb-4">
                    {card.subtitle.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="font-light text-[14px] leading-relaxed opacity-90">
                    {"description" in card ? card.description : ""}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
