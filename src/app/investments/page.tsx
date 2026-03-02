"use client";
import Image from "next/image";
import {Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import hero from "../../../public/assets/images/international/hero.png"
import leafe from "../../../public/assets/images/leafe.png";
import Footer from "@/components/Footer";


const images = [
  "/assets/images/home/card/1.jpg",
  "/assets/images/home/card/2.jpg",
  "/assets/images/home/card/3.jpg", 
  "/assets/images/home/card/4.jpg", 
];

export default function InvestmentsPage() {
  return (
    <main>      
      {/* Hero */}
      <div className="relative">
        <div className="image">
          <Image src={hero} alt="hero image" style={{"width": '100%', height: '810'}} className="block h-[500px] md:h-[90vh] xl:h-auto object-cover" />        
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/50">
          <div className="container mx-auto ">
            <h1 className="pb-[40px]  pt-[100px] ml-[20px] xl:ml-[100px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white max-w-[450px] lg:max-w-[570pxgit]">Global Investment<br /> Partnerships </h1>
          </div>
        </div>
      </div>            
      {/* Body intro */} 
      <div className="pt-[50px] md:pt-[80px] lg:pt-[114px] relative bg-[#3F3B33]">                          
        <div className="container relative z-20">            
          <div className="text  flex items-start pb-[50px] md:pb-[90px]">
            <span className="hidden md:inline-block w-[1.8px] h-auto bg-[#A58F77] absolute top-[120px] bottom-0 left-0"> </span>
            <Image src={leafe} alt="leafe" width={73} height={113} className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block" />
            <div>
              <p className="mb-[20px] md:mb-[45px] text-[18px] sm:text-[25px] lg:text-[31px]  text-[#BFAF9D] md:pl-[90px]">
                At Hayaat Group, we deploy patient, principal capital across a 
                diversified platform of investments — from building communities to 
                backing ideas, scaling businesses, and managing global portfolios. Our 
                approach is long-term, disciplined, and informed by deep sector 
                experience and macroeconomic perspective.
              </p>
              <p className="mb-[20px] md:mb-[45px] text-[18px] sm:text-[25px] lg:text-[31px]  text-[#BFAF9D] md:pl-[90px]">
                We invest across four core areas: real estate, venture capital, growth 
                equity, and global capital markets. Each area reflects our belief in 
                high-conviction investing, strategic alignment with partners, and the 
                pursuit of value that compounds over time. Our strategy focuses on 
                combining the Hayaat DNA- our core values, strengths, and passionate 
                teams.                    
              </p>
              <p className="text-[18px] sm:text-[25px] lg:text-[31px]  text-[#BFAF9D] md:pl-[90px]">
                As active operators or long-term capital partners, we bring a 
                combination of agility and structure to every investment. What unites 
                our work across sectors is a shared commitment to thoughtful 
                deployment, strong governance, and creating outcomes that endure 
                beyond market cycles.                      
              </p>
            </div>
          </div>                      
        </div>
      </div>   
      {/* Feature project */}    
      <div className="bg-[#3F3B33] ">
        <div className="container  border-[#A58F77] border-l-[1.8px] ">                             
          <div className="pb-[50px] md:pb-[90px] md:pl-[90px]">
            {/* Cards */}
            <div className="relative">
              <div className="slider">
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
              <div className="flex justify-between mt-[20px] md:mt-[62px]">          
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
      <Footer />     
    </main>
  );
}
