"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import hero from "../../../public/assets/images/about/hero.jpg";
import ship from "../../../public/assets/images/about/ship.png";
import whiteh from "../../../public/assets/images/whiteH.png";
import breeam from "../../../public/assets/images/about/icon/1.png";
import international from "../../../public/assets/images/about/icon/2.png";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/20">
          <div className="container mx-auto ">
            <h1 className="pb-[100px] ml-[20px] md:ml-[90px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white max-w-[528px]">
              Our Journey
            </h1>
          </div>
        </div>
      </div>

      {/* We've Come A Long Way — Timeline */}
      <div className="container border-l-[1.83px] border-[#A58F77]  overflow-x-hidden">
        <div className="pt-[35px] md:pt-[80px] lg:pt-[127px] pb-[50px] md:pb-[88px]">
          <h2 className="text-[35px] md:text-[50px] lg:text-[60px] xl:text-[72px]  text-center mb-8 md:mb-0">
            We’ve Come A Long Way
          </h2>
          <div className="relative">
            <div className="ml-auto -mr-[80px] md:-mr-[120px]">
              <Image
                src={ship}
                alt="ship"
                style={{ width: "auto", height: "auto" }}
                className="ml-auto shipImage"
              />
            </div>
            <div className=" max-w-[80%] md:max-w-full mx-auto absolute top-0 left-0 right-0 bottom-0 md:flex justify-start items-center ">
              <div className="relative slider max-w-[860px] mx-auto ">
                <Swiper
                  modules={[Navigation, Autoplay]}
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

                    562: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                      <h2 className="text-[46px] md:text-[72px] text-white mb-[20px]">
                        1925
                      </h2>
                      <p className="text-[16px] Inter pb-[50px] min-h-[146px]">
                        The first generation Elahi family enters the business
                        world managing contracts for the British Army
                      </p>
                      <div className="flex items-center">
                        <span className="h-[1px] bg-white block w-full"></span>
                        <Image
                          src={whiteh}
                          alt="about"
                          style={{ width: "auto", height: "auto" }}
                          className="ml-[10px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                      <h2 className="text-[46px] md:text-[72px] text-white mb-[20px]">
                        2000
                      </h2>
                      <p className="text-[16px] Inter pb-[50px] min-h-[146px]">
                        Hayaat Group is founded
                      </p>
                      <div className="flex items-center">
                        <span className="h-[1px] bg-white block w-full"></span>
                        <Image
                          src={whiteh}
                          alt="about"
                          style={{ width: "auto", height: "auto" }}
                          className="ml-[10px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                      <h2 className="text-[46px] md:text-[72px] text-white mb-[20px]">
                        2002
                      </h2>
                      <p className="text-[16px] Inter pb-[50px] min-h-[146px]">
                        The group embarks on real estate development and urban
                        regeneration in the Northwest of England
                      </p>
                      <div className="flex items-center">
                        <span className="h-[1px] bg-white block w-full"></span>
                        <Image
                          src={whiteh}
                          alt="about"
                          style={{ width: "auto", height: "auto" }}
                          className="ml-[10px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                      <h2 className="text-[46px] md:text-[72px] text-white mb-[20px]">
                        1925
                      </h2>
                      <p className="text-[16px] Inter pb-[50px] min-h-[146px]">
                        The first generation Elahi family enters the business
                        world managing contracts for the British Army
                      </p>
                      <div className="flex items-center">
                        <span className="h-[1px] bg-white block w-full"></span>
                        <Image
                          src={whiteh}
                          alt="about"
                          style={{ width: "auto", height: "auto" }}
                          className="ml-[10px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                      <h2 className="text-[46px] md:text-[72px] text-white mb-[20px]">
                        2000
                      </h2>
                      <p className="text-[16px] Inter pb-[50px] min-h-[146px]">
                        Hayaat Group is founded
                      </p>
                      <div className="flex items-center">
                        <span className="h-[1px] bg-white block w-full"></span>
                        <Image
                          src={whiteh}
                          alt="about"
                          style={{ width: "auto", height: "auto" }}
                          className="ml-[10px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                      <h2 className="text-[46px] md:text-[72px] text-white mb-[20px]">
                        2002
                      </h2>
                      <p className="text-[16px] Inter pb-[50px] min-h-[146px]">
                        The group embarks on real estate development and urban
                        regeneration in the Northwest of England
                      </p>
                      <div className="flex items-center">
                        <span className="h-[1px] bg-white block w-full"></span>
                        <Image
                          src={whiteh}
                          alt="about"
                          style={{ width: "auto", height: "auto" }}
                          className="ml-[10px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="">
                  <div className="custom-prev  cursor-pointer absolute top-[50%] -left-[40px] sm:-left-[50px] -translate-y-[50%]">
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
                  <div className="custom-next  cursor-pointer absolute top-[50%] -right-[40px] sm:-right-[50px] -translate-y-[50%]">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Recognition */}
      <div className="bg-[#3F3B33]">
        <div className="container custompl border-l-[1.8px] border-[#A58F77]">
          <div className="md:pl-[80px] py-[75px]">
            <h2 className="pl-[20px]  text-[35px] md:text-[53px] lg:text-[72px] text-[#BFAF9D] mb-[40px]">
              Global Recognition
            </h2>
            <div className="">
              {/* 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px] border-b-[1px] border-[#A58F77] md:border-0">
                <div className=" md:flex items-center flex-wrap">
                  <div className="md:w-[50%]">
                    <Image
                      src={breeam}
                      alt="hero image"
                      style={{ width: "284", height: "174" }}
                      className="w-[120px] sm:w-[230px] lg:w-[284px] h-auto mb-[10px] md:mb-0 "
                    />
                  </div>
                  <div className="pl-0 md:pl-[31px] md:w-[50%]">
                    <h2 className="text-[25px] md:text-[28px] lg:text-[36px] text-[#BFAF9D] uppercase">
                      BREEAM
                    </h2>
                    <p className="text-white text-[14px] md:text-[16px] Inter leading-[1.2]">
                      World-Leading Building Sustainability Assessor{" "}
                    </p>
                  </div>
                </div>
                <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px]  border-[#A58F77] pt-[11px] pb-[20px]">
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Category: Sustainable building
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Year: 2012
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Project: The Green, University of Bradford, UK
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px]  border-b-[1px] border-[#A58F77] md:border-0">
                <div className=" md:flex items-center flex-wrap">
                  <div className="md:w-[50%]">
                    <Image
                      src={international}
                      alt="hero image"
                      style={{ width: "284", height: "174" }}
                      className="w-[120px] sm:w-[230px] lg:w-[284px] h-auto mb-[10px] md:mb-0 "
                    />
                  </div>
                  <div className="pl-0 md:pl-[31px] md:w-[50%]">
                    <h2 className="text-[25px] md:text-[28px] lg:text-[36px] text-[#BFAF9D]  leading-[1]">
                      International Green Apple Awards
                    </h2>
                  </div>
                </div>
                <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px]  border-[#A58F77] pt-[11px] pb-[20px]">
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Category: Environmental best practice in building
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Year: 2012
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] leading-[1.2] Inter">
                    ProjectProject: The Green, University of Bradford, UK
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px]">
                <div className=" md:flex items-center flex-wrap">
                  <div className="md:w-[50%]">
                    <Image
                      src={international}
                      alt="hero image"
                      style={{ width: "284", height: "174" }}
                      className="w-[120px] sm:w-[230px] lg:w-[284px] h-auto mb-[10px] md:mb-0"
                    />
                  </div>
                  <div className="pl-0 md:pl-[31px] md:w-[50%]">
                    <h2 className="text-[25px] md:text-[28px] lg:text-[36px] text-[#BFAF9D] leading-[1]">
                      Building Awards
                    </h2>
                  </div>
                </div>
                <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px]  border-[#A58F77] pt-[11px] pb-[20px]">
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Category: Recognition of excellence in building
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">
                    Year: 2012
                  </p>
                  <p className="text-white text-[14px] md:text-[16px] leading-[1.2] Inter">
                    ProjectProject: The Green, University of Bradford, UK{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
