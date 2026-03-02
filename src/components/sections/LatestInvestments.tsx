"use client";
import Image from "next/image";
import {Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Cta from "../../../public/assets/images/cta.png";
const images = [
  "/assets/images/home/slider/1.jpg",
  "/assets/images/home/slider/2.jpg",
  "/assets/images/home/slider/3.jpg", 
  "/assets/images/home/slider/1.jpg", 
];
export default function LatestInvestments() {
  return (
    <>
   
    <div className="bg-[#3F3B33]">
      <div className="container border-l-[1.8px] border-[#A58F77]">
        <div className=" py-[100px] ">
          <div className="relative "> 
            
            <div className="GallerySlider">
              <Swiper
                modules={[ Navigation]}
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
            <div className="mt-[20px] -mb-[30px] max-w-[370px] flex justify-between items-center mx-auto">          
              <div className="custom-prev  cursor-pointer">
                <svg width="35" height="35" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4004 55.9C43.5882 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5882 0.900024 28.4004 0.900024C13.2126 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2126 55.9 28.4004 55.9Z" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                    <path d="M42.9218 28.4H14.3008" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                    <path d="M23.9226 18.7781L14.3008 28.4L23.9226 38.0111" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                  </svg>
              </div>
              <div className="custom-next  cursor-pointer">
                <svg width="35" height="35" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4003 55.9C43.5881 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5881 0.900024 28.4003 0.900024C13.2125 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2125 55.9 28.4003 55.9Z" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                    <path d="M13.8887 28.4H42.4991" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                    <path d="M32.8887 18.7781L42.5 28.4L32.8887 38.0111" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                  </svg>
              
              </div>
            </div>
          </div>
          <div className="max-w-[200px] mx-auto" >
            <h4 className="text-[10px] Inter text-white uppercase mb-[10px]">driect investment</h4>
            <h2 className="text-[26px] mb-[10px] leading-[1] text-[#BFAF9D]" >The Entertainer</h2>
            <p className="text-white Inter">A leading provide <br /> 
            of app-based incentives</p>
            <button className="mt-[20px] relative inline-block  text-[#bfaf9d] font-light text-[14px] px-8 py-3  transition-colors  tracking-wide"
          >
            <Image  src={Cta} alt="Cta" width={205} height={63} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
            Read More
          </button>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
