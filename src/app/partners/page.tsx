"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import hero from "../../../public/assets/images/partners/hero.jpg";
import leafe from "../../../public/assets/images/leafe.png";
import slider from "../../../public/assets/images/partners/slider/1.jpg";
import new1 from "../../../public/assets/images/realEstate/slider/1.jpg";
import cta from "../../../public/assets/images/partners/cta.png";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PartnersPage() {
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
    <>
      {/* Hero */}
      <div className="relative">
        <div className="image">
          <Image
            src={hero}
            alt="hero image"
            style={{ width: "100%", height: "810" }}
            className="block h-[70vh] lg:h-auto object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-start bg-black/80">
          <div className="text-center ">
            <h1 className="pb-[100px] ml-[20px] md:ml-[90px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white">
              Investments and partners
            </h1>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="pt-[40px] md:pt-[80px] lg:pt-[114px] relative bg-[#3F3B33]">
        <div className="container relative z-20 ">
          <div className="text  flex items-start pb-[50px] md:pb-[100px]">
            <div ref={ref} className="">
              <span
                className={`absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top hidden md:block
                        ${show ? "animate-lineGrow" : "scale-y-0"}`}></span>
            </div>
            <Image
              src={leafe}
              alt="leafe"
              width={73}
              height={113}
              className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block "
            />
            <span className="absolute top-0  -left-[36px]  bg-[#3F3B33]  w-[75px] h-[130px] z-10 hidden md:block"></span>

            <div className="max-w-[980px]">
              <p className="mb-[20px] md:mb-[40px] lg:mb-[74px] text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] md:pl-[90px]">
                Hayaat Group takes pride in maintaining a diverse portfolio from
                a variety of sectors, from residential and commercial real
                estate and urban regeneration across several markets, to next
                generation disruptors.
              </p>
              <p className="text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] md:pl-[90px] ">
                We prefer to work with partners who are leaders and innovators
                in their chosen fields, including international loyalty and
                incentive organisations, real estate experts and major
                developers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-[#BFAF9D] relative">
        <div className="container  custompl border-l-[1.8px] border-[#A58F77]">
          <div className="py-[100px] teamslider md:pl-[90px]">
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              className="w-full">
              <SwiperSlide>
                <div className="">
                  <div className="grid grid-cols-2 items-center lg:min-h-[650px]">
                    <div className="text max-w-[517px]">
                      <h2 className="Inter text-[#A58F77] text-[96px] leading-1">
                        01
                      </h2>
                      <p className="text-[18px] text-black Inter font-light mb-[20px]">
                        Donna Benton, CEO and Founder, <br />
                        the ENTERTAINER
                      </p>
                      <p className="text-[18px] text-black Inter font-light">
                        We are very pleased that Hayaat Group, as a co-investor
                        with The Abraaj Group, believed in our vision and growth
                        story which is still going strong as we complete our
                        transformation from a print publication to a 100%
                        digital data-driven global company.
                      </p>
                    </div>
                    <div className="image ">
                      <Image
                        src={slider}
                        alt="slider"
                        width={600}
                        height={650}
                        className=" block"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="">
                  <div className="grid grid-cols-2 items-center">
                    <div className="text max-w-[517px]">
                      <h2 className="Inter text-[#A58F77] text-[96px] leading-1">
                        01
                      </h2>
                      <p className="text-[18px] text-black Inter font-light mb-[20px]">
                        Donna Benton, CEO and Founder, <br />
                        the ENTERTAINER
                      </p>
                      <p className="text-[18px] text-black Inter font-light">
                        We are very pleased that Hayaat Group, as a co-investor
                        with The Abraaj Group, believed in our vision and growth
                        story which is still going strong as we complete our
                        transformation from a print publication to a 100%
                        digital data-driven global company.
                      </p>
                    </div>
                    <div className="image">
                      <Image
                        src={slider}
                        alt="slider"
                        width={600}
                        height={650}
                        className=" top-0 left-0 md:-left-[36px] z-20 hidden md:block"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>

      {/* new */}
      <div className="bg-[#3F3B33]">
        <div className="container  custompl border-l-[1.8px] border-[#A58F77]">
          <div className="pt-[40px] md:pt-[90px] pb-[80px] md:pb-[140px] md:pl-[90px]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* 1 */}
              <div className="item border md:border-r-0 border-[#A58F77] p-[10px] bg-[#3e3e3e]">
                <Image
                  src={new1}
                  alt="image"
                  style={{ width: "100%", height: "auto" }}
                  className="max-h-[200px] block w-full object-cover"
                />
                <h3 className="text-white text-[18px] Inter pt-[10px] lg:pt-[30px] pb-[20px] lg:pb-[40px] pl-[10px] lg:pl-[20px]">
                  <Link href="">IncentiaPay</Link>
                </h3>
              </div>
              {/* 2 */}
              <div className="item border md:border-r-0 border-[#A58F77] p-[10px] bg-[#3e3e3e]">
                <Image
                  src={new1}
                  alt="image"
                  style={{ width: "100%", height: "auto" }}
                  className="max-h-[200px] block w-full object-cover"
                />
                <h3 className="text-white text-[18px] Inter pt-[10px] lg:pt-[30px] pb-[20px] lg:pb-[40px] pl-[10px] lg:pl-[20px]">
                  <Link href="">IncentiaPay</Link>
                </h3>
              </div>
              {/* 3 */}
              <div className="item border md:border-b-0 border-[#A58F77] p-[10px] bg-[#3e3e3e]">
                <Image
                  src={new1}
                  alt="image"
                  style={{ width: "100%", height: "auto" }}
                  className="max-h-[200px] block w-full object-cover"
                />
                <h3 className="text-white text-[18px] Inter pt-[10px] lg:pt-[30px] pb-[20px] lg:pb-[40px] pl-[10px] lg:pl-[20px]">
                  <Link href="">IncentiaPay</Link>
                </h3>
              </div>
              {/* 4 */}
              <div className="item border border-t-0 md:border-r-0 border-[#A58F77] p-[10px] bg-[#3e3e3e]">
                <Image
                  src={new1}
                  alt="image"
                  style={{ width: "100%", height: "auto" }}
                  className="max-h-[200px] block w-full object-cover"
                />
                <h3 className="text-white text-[18px] Inter pt-[10px] lg:pt-[30px] pb-[20px] lg:pb-[40px] pl-[10px] lg:pl-[20px]">
                  <Link href="">IncentiaPay</Link>
                </h3>
              </div>
              {/* 5 */}
              <div className="item border md:border-r-0 border-t-0  border-[#A58F77] p-[10px] bg-[#3e3e3e]">
                <Image
                  src={new1}
                  alt="image"
                  style={{ width: "100%", height: "auto" }}
                  className="max-h-[200px] block w-full object-cover"
                />
                <h3 className="text-white text-[18px] Inter pt-[10px] lg:pt-[30px] pb-[20px] lg:pb-[40px] pl-[10px] lg:pl-[20px]">
                  <Link href="">IncentiaPay</Link>
                </h3>
              </div>
              {/* 6 */}
              <div className="item border  border-[#A58F77] p-[10px] bg-[#3e3e3e]">
                <Image
                  src={new1}
                  alt="image"
                  style={{ width: "100%", height: "auto" }}
                  className="max-h-[200px] block w-full object-cover"
                />
                <h3 className="text-white text-[18px] Inter pt-[10px] lg:pt-[30px] pb-[20px] lg:pb-[40px] pl-[10px] lg:pl-[20px]">
                  <Link href="">IncentiaPay</Link>
                </h3>
              </div>
            </div>
            <div className="text-center ">
              <Link
                href="/about"
                className="relative inline-block  text-[#bfaf9d] font-light text-[18px] md:text-[24px] transition-colors mt-[50px] md:mt-[104px] tracking-wide">
                <Image
                  src={cta}
                  alt="Cta"
                  width={300}
                  height={55}
                  className=" z-20"
                />

                <span className="text-[24px] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-30 text-[#000]">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
