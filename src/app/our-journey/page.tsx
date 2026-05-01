"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import hero from "../../../public/assets/images/about/our-jorney-new.png";
import himg from "../../../public/assets/images/about/h-name.svg";
import journey from "../../../public/assets/images/about/journey.jpeg";
import upArrow from "../../../public/assets/images/about/up-arrow.svg";
import downArrow from "../../../public/assets/images/about/down-arrow.svg";
import looking from "../../../public/assets/images/about/looking.jpeg";
import jouneyGlobal from "../../../public/assets/images/about/journey-global.png";
import leafe from "../../../public/assets/images/leafe.png";
import Footer from "@/components/Footer";

function FadeSlide({
  children,
  direction = "left",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible
          ? "translateX(0)"
          : direction === "left"
            ? "translateX(-40px)"
            : "translateX(40px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.7s ease, opacity 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.7s ease, opacity 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

const awards = [
  {
    title: "BREEAM",
    subtitle: "World-Leading Building Sustainability Assessor",
    category: "Sustainable building",
    year: "2012",
    project: "The Green, University of Bradford, UK",
    titleClass: "uppercase",
  },
  {
    title: "International Green Apple Awards",
    subtitle: "",
    category: "Environmental best practice in building",
    year: "2012",
    project: "The Green, University of Bradford, UK",
    titleClass: "",
  },
  {
    title: "Building Awards",
    subtitle: "",
    category: "Recognition of excellence in building",
    year: "2012",
    project: "The Green, University of Bradford, UK",
    titleClass: "",
  },
  {
    title: "Awards",
    subtitle: "",
    category: "Recognition of excellence in building",
    year: "2012",
    project: "The Green, University of Bradford, UK",
    titleClass: "",
  },
];

function GlobalRecognition() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUp = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleDown = () => {
    setActiveIndex((prev) => Math.min(awards.length - 3, prev + 1));
  };

  return (
    <div className="bg-[#3F3B33] relative">
      {/* Up arrow — desktop only */}
      <div
        className="hidden xl:flex absolute top-[260px] right-[360px] z-10 cursor-pointer"
        onClick={handleUp}
      >
        <Image src={upArrow} alt="scroll up" width={55} height={55} />
      </div>
      {/* Down arrow — desktop only */}
      <div
        className="hidden xl:flex absolute bottom-[236px] right-[326px] z-10 cursor-pointer"
        onClick={handleDown}
      >
        <Image src={downArrow} alt="scroll down" width={75} height={75} />
      </div>

      <div className="container custompl border-l-[1.8px] border-[#A58F77]">
        <div className="md:pl-[80px] py-[75px] xl:pb-[200px]">
          <h2 className="pl-[20px] text-[35px] md:text-[53px] lg:text-[72px] text-[#BFAF9D] mb-[40px]">
            Global Recognition
          </h2>

          {/* Mobile/tablet: show all items */}
          <div className="xl:hidden">
            {awards.map((award, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px] border-b-[1px] border-[#A58F77] md:border-0 last:border-0"
              >
                <div className="md:flex items-center flex-wrap">
                  <div className="md:w-[50%]">
                    <Image
                      src={jouneyGlobal}
                      alt="award image"
                      style={{ width: "284", height: "174" }}
                      className="w-[120px] sm:w-[230px] lg:w-[284px] h-auto mb-[10px] md:mb-0"
                    />
                  </div>
                  <div className="pl-0 md:pl-[31px] md:w-[50%]">
                    <h2 className={`text-[25px] md:text-[28px] lg:text-[36px] text-[#BFAF9D] leading-[1] ${award.titleClass}`}>
                      {award.title}
                    </h2>
                    {award.subtitle && (
                      <p className="text-white text-[14px] md:text-[16px] xl:text-[19px] Inter leading-[1.2] font-light">
                        {award.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px] border-[#A58F77] pt-[11px] pb-[20px]">
                  <p className="text-white text-[14px] md:text-[16px] xl:text-[19px] mb-[3px] leading-[1.2] Inter font-light">
                    Category: {award.category}
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] xl:text-[19px] mb-[3px] leading-[1.2] Inter font-light">
                    Year: {award.year}
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] xl:text-[19px] mb-[3px] leading-[1.2] Inter font-light">
                    Project: {award.project}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: vertical slider — 3 items visible at a time */}
          <div className="hidden xl:block overflow-hidden" style={{ height: "780px" }}>
            <div
              style={{
                transform: `translateY(-${activeIndex * 260}px)`,
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 items-center mb-0"
                  style={{ height: "260px" }}
                >
                  <div className="flex items-center flex-wrap">
                    <div className="w-[50%]">
                      <Image
                        src={jouneyGlobal}
                        alt="award image"
                        style={{ width: "284", height: "174" }}
                        className="w-[284px] h-auto"
                      />
                    </div>
                    <div className="pl-[31px] w-[50%]">
                      <h2 className={`text-[36px] text-[#BFAF9D] leading-[1] ${award.titleClass}`}>
                        {award.title}
                      </h2>
                      {award.subtitle && (
                        <p className="text-white text-[19px] Inter leading-[1.2] font-light mt-[8px]">
                          {award.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pl-[32px] ml-[32px] border-l-[1.8px] border-[#A58F77] pt-[11px] pb-[20px]">
                    <p className="text-white text-[19px] mb-[3px] leading-[1.2] Inter font-light">
                      Category: {award.category}
                    </p>
                    <p className="text-white text-[19px] mb-[3px] leading-[1.2] Inter font-light">
                      Year: {award.year}
                    </p>
                    <p className="text-white text-[19px] mb-[3px] leading-[1.2] Inter font-light">
                      Project: {award.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.1 },
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
            className="block h-[500px] md:h-[90vh] xl:h-[810px] object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/20">
          <div className="container mx-auto">
            <h1
              className="pb-[100px] xl:pb-[70px] ml-[20px] md:ml-[90px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[73px] leading-[1.2] text-white max-w-[528px]"
              style={{
                transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                opacity: heroVisible ? 1 : 0,
                transition: "transform 0.8s ease, opacity 0.8s ease",
              }}
            >
              Our Journey
            </h1>
          </div>
        </div>
      </div>

      {/* Full-page wrapper — leaf + animated line run from top to bottom of this div */}
      <div ref={ref} className="relative">
        {/* Leaf image pinned to top-left of container */}
        <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-20">
          <div className="container mx-auto h-full relative">
            <Image
              src={leafe}
              alt="leafe"
              width={73}
              height={113}
              className="absolute -left-[36px] z-20"
              style={{ top: "99px" }}
            />
            <span
              className="absolute -left-[36px] bg-[#7E6952] w-[75px] h-[130px] z-10"
              style={{ top: "99px" }}
            ></span>
            {/* Animated vertical line — starts below the leaf */}
            <span
              className={`absolute left-0 w-[1px] border-l-[1.8px] border-[#A58F77] origin-top transition-all duration-[40000ms] ease-in-out
                ${show ? "h-full" : "h-0"}`}
              style={{ top: "99px" }}
            ></span>
          </div>
        </div>

        {/* Hayaat Group a Legacy Reimagined */}
        <div className="pt-[40px] md:pt-[80px] lg:pt-[114px] xl:pt-[69px] relative">
          <span className="w-full h-[380px] sm:h-[665px] bg-[#7E6952] absolute top-0 left-0 right-0 -z-[1]"></span>
          <div className="container relative z-10">
            <div className="flex items-start">
              <div className="xl:max-w-[1070px]">
                <FadeUp delay={0}>
                  <h5 className="mb-[20px] md:mb-[40px] lg:mb-[21px] text-[18px] sm:text-[25px] lg:text-[32px] xl:text-[73px] text-[#BFAF9D] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                    Hayaat Group,
                    <br /> A Legacy Reimagined
                  </h5>
                </FadeUp>
                <FadeUp delay={150}>
                  <p className="mb-[20px] md:mb-[40px] lg:mb-[24px] text-[18px] sm:text-[25px] lg:text-[32px] text-[#E2DDDB] sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                    From Family Enterprise to Institutional Investment Platform
                  </p>
                </FadeUp>
                <FadeUp delay={300}>
                  <p className="mb-[20px] md:mb-[40px] lg:mb-[48px] xl:mb-[121px] text-[18px] sm:text-[25px] lg:text-[32px] text-white sm:pl-[30px] md:pl-[64px] lg:pl-[90px]">
                    The Hayaat story spans nearly a century — rooted in
                    entrepreneurial discipline, shaped by resilience, and now
                    entering a new chapter as a focused institutional investment
                    platform.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline section */}
        <div className="py-[60px] md:py-[100px] xl:pt-[143px] xl:pb-[79px] bg-white">
          <div className="container mx-auto px-4 relative">
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#C9B99A] -translate-x-1/2 hidden md:block"></div>

            {/* 1920s–1980s — LEFT */}
            <div className="relative flex flex-col md:flex-row items-start mb-[60px] md:mb-[80px]">
              <div className="md:w-1/2 md:pr-[58px] xl:pl-[48px] md:text-right xl:text-start">
                <FadeSlide direction="left">
                  <h2
                    className="text-[40px] md:text-[55px] lg:text-[65px] xl:text-[73px] text-[#3F3B33] leading-[1] mb-[15px]"
                    style={{ fontFamily: "var(--font-antic)" }}
                  >
                    1920s–1980s
                  </h2>
                  <h4 className="text-[18px] md:text-[22px] xl:text-[36px] text-[#3F3B33] mb-[20px] xl:mb-[34px] leading-[1.3]">
                    Foundations:
                    <br />
                    Built on Family and Enterprise
                  </h4>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[16px] xl:max-w-[336px]">
                    The Hayaat story begins nearly a century ago, when the Elahi
                    family built a strong entrepreneurial foundation across real
                    estate, hospitality, and trading.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] xl:max-w-[336px]">
                    By the 1960s, the second generation expanded into the UK,
                    carrying forward a philosophy rooted in discipline,
                    resilience, and long-term thinking.
                  </p>
                </FadeSlide>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[10px] xl:top-0 z-10">
                <Image src={himg} alt="marker" width={34} height={34} />
              </div>
              <div className="md:w-1/2 md:pl-[58px]"></div>
            </div>

            {/* 1990s — RIGHT */}
            <div className="relative flex flex-col md:flex-row items-start mb-[60px] md:mb-[80px]">
              <div className="md:w-1/2 md:pr-[60px]"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[10px] xl:top-0 z-10">
                <Image src={himg} alt="marker" width={34} height={34} />
              </div>
              <div className="md:w-1/2 md:pl-[58px]">
                <FadeSlide direction="right">
                  <h2
                    className="text-[40px] md:text-[55px] lg:text-[65px] xl:text-[73px] text-[#3F3B33] leading-[1] mb-[15px]"
                    style={{ fontFamily: "var(--font-antic)" }}
                  >
                    1990s
                  </h2>
                  <h4 className="text-[18px] md:text-[22px] xl:text-[36px] text-[#3F3B33] mb-[20px] xl:mb-[34px] leading-[1.3]">
                    The Third Generation:
                    <br />
                    Built a Renewed Foundation
                  </h4>
                  <p className="text-[13px] md:text-[14px] xl:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[336px]">
                    For Mohammed Ikhlaq (MI), the journey was not simply
                    inherited — it was forged. After building strong experience
                    in global oil services, working on large-scale international
                    projects, he decided to craft his own path.
                  </p>
                  <p className="text-[13px] md:text-[14px] xl:text-[18px] text-[#7E6952] leading-[1.7] xl:max-w-[336px]">
                    That moment became the turning point. He chose to rebuild —
                    from the ground up
                  </p>
                </FadeSlide>
              </div>
            </div>

            {/* Timeline label */}
            <div className="relative flex justify-center mb-[60px] md:mb-[80px]">
              <Image
                src={journey}
                alt="The Journey: A Timeline"
                className="w-auto"
              />
            </div>

            {/* 1995–2008 — LEFT */}
            <div className="relative flex flex-col md:flex-row items-start mb-[60px] md:mb-[80px]">
              <div className="md:w-1/2 md:pr-[58px] xl:pl-[48px] md:text-right xl:text-start">
                <FadeSlide direction="left">
                  <h2
                    className="text-[40px] md:text-[55px] lg:text-[65px] xl:text-[73px] text-[#3F3B33] leading-[1] mb-[15px]"
                    style={{ fontFamily: "var(--font-antic)" }}
                  >
                    1995–2008
                  </h2>
                  <h4 className="text-[18px] md:text-[22px] xl:text-[36px] text-[#3F3B33] mb-[20px] xl:mb-[34px] leading-[1.3]">
                    Building the Core:
                    <br />
                    Oil &amp; Gas Platform
                  </h4>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[16px] xl:max-w-[368px]">
                    MI founded an oil & gas platform in the GCC, starting small
                    but growing rapidly through execution, trust, and
                    consistency.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[16px] xl:max-w-[368px]">
                    The business became part of major regional developments,
                    establishing a reputation for reliability and delivery.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] xl:max-w-[368px]">
                    This phase laid the foundation for Hayaat — built not on
                    opportunity alone, but on hard work, values, and
                    credibility.
                  </p>
                </FadeSlide>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[10px] xl:top-0 z-10">
                <Image src={himg} alt="marker" width={34} height={34} />
              </div>
              <div className="md:w-1/2 md:pl-[58px]"></div>
            </div>

            {/* 2005–2021 — RIGHT */}
            <div className="relative flex flex-col md:flex-row items-start mb-[60px] md:mb-[80px]">
              <div className="md:w-1/2 md:pr-[60px]"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[10px] xl:top-0 z-10">
                <Image src={himg} alt="marker" width={34} height={34} />
              </div>
              <div className="md:w-1/2 md:pl-[58px]">
                <FadeSlide direction="right">
                  <h2
                    className="text-[40px] md:text-[55px] lg:text-[65px] xl:text-[73px] text-[#3F3B33] leading-[1] mb-[15px]"
                    style={{ fontFamily: "var(--font-antic)" }}
                  >
                    2005–2021
                  </h2>
                  <h4 className="text-[18px] md:text-[22px] xl:text-[36px] text-[#3F3B33] mb-[20px] xl:mb-[34px] leading-[1.3]">
                    From Operator to Investor:
                    <br />
                    Expanding the Platform
                  </h4>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[354px]">
                    With a strong operating base, MI established Hayaat Group to
                    expand beyond a single sector and geography.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[354px]">
                    Expansion into new markets, including Africa.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[354px]">
                    Entry into real estate and asset development.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[354px]">
                    Gradual move into early-stage and venture investments
                    globally.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] xl:max-w-[354px]">
                    Hayaat evolved into a diversified platform — combining
                    operational expertise with investment acumen.
                  </p>
                </FadeSlide>
              </div>
            </div>

            {/* 2022+ — LEFT */}
            <div className="relative flex flex-col md:flex-row items-start mb-[60px] md:mb-[80px]">
              <div className="md:w-1/2 md:pr-[58px] xl:pl-[48px] md:text-right xl:text-start">
                <FadeSlide direction="left">
                  <h2
                    className="text-[40px] md:text-[55px] lg:text-[65px] xl:text-[73px] text-[#3F3B33] leading-[1] mb-[15px]"
                    style={{ fontFamily: "var(--font-antic)" }}
                  >
                    2022+
                  </h2>
                  <h4 className="text-[18px] md:text-[22px] xl:text-[36px] text-[#3F3B33] mb-[20px] xl:mb-[34px] leading-[1.3]">
                    Institutionalising for the Future: A Platform for Impact
                  </h4>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[400px]">
                    Hayaat is entering its next phase — institutionalising its
                    investment platform and sharpening its focus on direct
                    investments.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[400px]">
                    Moving beyond capital to become a value-creation partner.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] mb-[15px] xl:max-w-[400px]">
                    Building long-term platforms in core sectors.
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#7E6952] leading-[1.7] xl:max-w-[400px]">
                    Delivering sustainable growth across key markets.
                  </p>
                </FadeSlide>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[10px] xl:top-0 z-10">
                <Image src={himg} alt="marker" width={34} height={34} />
              </div>
              <div className="md:w-1/2 md:pl-[58px]"></div>
            </div>

            {/* Looking Ahead label */}
            <div className="relative flex justify-center pt-[20px] mb-[60px] md:mb-[80px]">
              <Image src={looking} alt="Looking Ahead" className="w-auto" />
            </div>
          </div>

          {/* Quote text */}
          <div className="text-center px-4 mb-[40px] md:mb-[56px]">
            <FadeUp>
              <p
                className="text-[18px] md:text-[22px] lg:text-[26px] xl:text-[36px] text-[#3F3B33] leading-[1.5] max-w-[700px] xl:max-w-[950px] mx-auto"
                style={{ fontFamily: "var(--font-antic)" }}
              >
                As the next generation begins to step forward, Hayaat continues
                to build on the same principles that started it all.
              </p>
            </FadeUp>
          </div>

          {/* Divider */}
          <div className="border-t border-[#A58F77] mx-4 md:mx-auto max-w-[1200px] mb-[40px] md:mb-[56px] xl:mb-[37px]"></div>

          {/* Three value boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] xl:gap-[17px] max-w-[1200px] mx-auto px-4 xl:px-0">
            {[
              { title: "Resilience in", sub: "adversity" },
              { title: "Discipline", sub: "in execution" },
              { title: "Long-Term Vision", sub: "creating lasting value" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 150}>
                <div className="bg-[#7E6952] p-[40px] md:p-[50px] xl:px-[18px] xl:pt-[43px] xl:pb-[19px] flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                  <div>
                    <p
                      className="text-[16px] md:text-[20px] xl:text-[36px] text-[#E2DDDB] leading-[1.3] mb-[6px] xl:text-center"
                      style={{ fontFamily: "var(--font-antic)" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-[16px] md:text-[20px] xl:text-[36px] text-white font-normal leading-[1.3] xl:text-center">
                      {item.sub}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-[30px]">
                    <span
                      className="text-[#A58F77] font-extrabold text-[18px] xl:text-[40px]"
                      style={{ fontFamily: "var(--font-antic)" }}
                    >
                      H
                    </span>
                    <span className="flex-1 border-t border-[#C9B99A] opacity-50"></span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
      {/* end full-page wrapper */}

      {/* Global Recognition */}
      <GlobalRecognition />
      <Footer />
    </main>
  );
}
