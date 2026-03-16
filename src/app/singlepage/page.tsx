"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import hero from "../../../public/assets/images/singlpage/hero.jpg";
import leafe from "../../../public/assets/images/leafe.png";
import Footer from "@/components/Footer";

const images = [
  {
    src: "/assets/images/singlpage/news/1.jpg",
    title: "Landmark project in partnership with the University of Bradford",
    description:
      "Hayaat Group was invited to develop The Green in association with the university, as well as the Bradford Municipal Development Council, and Yorkshire Forward. An ambitious sustainable residential complex at the heart of the university’s campus, its 10 blocks have more than 1,000 study bedrooms in townhouse and cluster flat arrangements.",
  },
  {
    src: "/assets/images/singlpage/news/2.jpg",
    title: "Sustainable student village",
    description:
      "Hayaat Group was invited to develop The Green in association with the university, as well as the Bradford Municipal Development Council, and Yorkshire Forward. An ambitious sustainable residential complex at the heart of the university’s campus, its 10 blocks have more than 1,000 study bedrooms in townhouse and cluster flat arrangements.",
  },
  {
    src: "/assets/images/singlpage/news/3.jpg",
    title: "Award-winning development",
    description:
      "The Green was the first multi-residential building in the UK to achieve a BREEAM Outstanding standard, and achieved the highest ever grade on the BREEAM scale for any building – 95.05%. In total, the development has won seven national and international awards and is part of the £750 million redevelopment of Bradford City Centre.",
  },
  {
    src: "/assets/images/singlpage/news/4.jpg",
    title: "Delivered on target in a challenging market",
    description:
      "The Green followed the purchase of 20 acres of city centre land by Hayaat Group, and was the UK’s largest single-phase development in terms of bed spaces ever attempted. It was completed within budget and in a recorded timeline of just 84 weeks, during a once in a generation economic downturn that halted most major UK construction projects.",
  },
];

const Itemimages = [
  "/assets/images/singlpage/slider/1.jpg",
  "/assets/images/singlpage/slider/2.jpg",
  "/assets/images/singlpage/slider/3.jpg",
  "/assets/images/singlpage/slider/4.jpg",
];

export default function NewsSinglePage() {
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
            className="block h-[80vh] lg:h-auto"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-start bg-black/80"></div>
      </div>

      {/* About */}
      <div className="pt-[40px] md:pt-[80px] lg:pt-[114px] relative bg-[#3F3B33]">
        <div className="container relative z-20 ">
          <div className="text  flex items-start pb-[100px]">
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
              className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block"
            />
            <span className="absolute top-0  -left-[36px]  bg-[#3F3B33]  w-[75px] h-[130px] z-10 hidden sm:block"></span>

            <div className="pl-[90px]">
              <h2 className="text-[35px] mb-[30px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white">
                The Green, UK
              </h2>
              <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-[20px]">
                <p className=" text-[18px] sm:text-[18px] lg:text-[22px] text-white ">
                  Multi-award winning 1,000-bed sustainable student village at
                  the University of Bradford, part of a £150 million series of
                  developments. The Green was conceived, designed, developed,
                  and managed (before exit) by Hayaat Group.
                </p>
                <p className=" text-[18px] sm:text-[18px] lg:text-[22px] text-white ">
                  <span className="block mb-[10px]">INDUSTRY</span>
                  Real Estate
                </p>
                <p className=" text-[18px] sm:text-[18px] lg:text-[22px] text-white ">
                  <span className="block mb-[10px]">LOCATION</span>
                  University of Bradford (UoB), UK
                </p>
                <p className=" text-[18px] sm:text-[18px] lg:text-[22px] text-white ">
                  <span className="block mb-[10px]">STATUS</span>
                  Completed and
                  <br /> sold
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="bg-[#3F3B33]">
        <div className="container custompl  border-[#A58F77] border-l-[1.8px]">
          <div className="slider relative pb-[48px] pl-[70px]">
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
              }}>
              {images.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className=" flex flex-col relative border border-[#A58F77] h-full">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={540}
                      height={340}
                      className="w-full h-auto object-cover"
                    />

                    <div className="py-[30px] px-[20px] min-h-[385px]">
                      <h3 className="text-white text-[32px] leading-[1.2] mb-[20px] font-light ">
                        {item.title}
                      </h3>
                      <p className="text-[20px] text-white leading-[28px] font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Arrow navigation */}
            <div className="flex justify-between mt-[10px] sm:mt-[35px] xl:mt-[62px]">
              <div className="custom-prev  cursor-pointer">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
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
                  width="55"
                  height="55"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="bg-[#3F3B33] pt-[58px] pb-[130px] ImageSlider">
        <div className="max-w-[1200px] mx-auto">
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            className="w-full">
            {Itemimages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="h-full">
                  <Image
                    src={src}
                    alt={`Slide ${index}`}
                    width={400}
                    height={545}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Arrow navigation */}
          <div className="flex justify-between mt-[10px] sm:mt-[35px] xl:mt-[62px]">
            <div className="custom-prev  cursor-pointer">
              <svg
                width="55"
                height="55"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
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
                width="55"
                height="55"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
