"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Cta from "../../../public/assets/images/cta.png";

const images = [
  "/assets/images/home/card/1.jpg",
  "/assets/images/home/card/2.jpg",
  "/assets/images/home/card/3.jpg", 
  "/assets/images/home/card/4.jpg", 
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
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#3F3B33] ">
      <div className="container  border-[#A58F77] border-l-[1.8px] relative">  
        {/* <span className="absolute left-0 top-0 h-[2px] w-full bg-[#A58F77] origin-left scale-x-0 animate-lineX"></span> */}
        <div ref={ref} className="">
          <span
            className={`absolute left-0 top-0 h-[2px] w-full bg-[#A58F77] origin-left hidden md:block
            ${show ? "animate-lineX" : "scale-x-0"}`}
          ></span>
        </div>
        <div className="pb-[120px] pl-[70px]">
        <h2 className="text-[#BFAF9D] text-[37px] sm:text-[42px] md:text-[60px] xl:text-[72px] leading-tight mb-[15px] sm:mb-[28px] mt-0 md:mt-[20px] xl:mt-0">
          The Future in Focus
        </h2>        
        <p className="Inter text-white text-[15px] lg:text-[18px] font-[300] leading-[2] xl:leading-[3] max-w-[905px] mb-[30px] sm:mb-[50px] xl:mb-[150px]">
         At the Hayaat Group, our investment strategy is guided by generational enterprise and time-tested expertise. 
         We function as principal investor across thoughtfully diversified areas, balancing active capital deployment
         in strategic ventures with disciplined stewardship of long-term assets. These focus areas reflect our 
         progressive commitment to value creation, and evolving vision for the future.
        </p>       
        
        <Link
          href="/about"
          className="relative inline-block  text-[#bfaf9d] font-light text-[18px] md:text-[24px] px-8 py-3 transition-colors mb-8 sm:mb-14 tracking-wide"
        >
          <Image  src={Cta} alt="Cta" width={205} height={63} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
          Read More
          <span className="inline-block"></span>
        </Link>

        {/* Cards */}
        <div className="relative">
          <div className="">
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
          {/* Arrow navigation */}
          <div className="flex justify-between mt-[10px] sm:mt-[35px] xl:mt-[62px]">          
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
        </div>
      </div>
    </div>
  );
}
