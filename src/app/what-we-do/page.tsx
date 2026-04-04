"use client";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import hero from "../../../public/assets/images/realEstate/hero.jpg"
import leafe from "../../../public/assets/images/leafe.png";
import Cta from "../../../public/assets/images/cta2.png";
import Ctabg from "../../../public/assets/images/ctabg.png";
import blog from "../../../public/assets/images/realEstate/blog.jpg"
import Footer from "@/components/Footer";



const images = [
  "/assets/images/realEstate/slider/1.png",
  "/assets/images/realEstate/slider/2.png",  
  "/assets/images/realEstate/slider/3.png",
  "/assets/images/realEstate/slider/2.png",
];
export default function NewsPage() {
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
    <main>      
      {/* hero */}
       <div className="relative h-[480px] sm:h-auto">
        <div className="image">
          <Image src={hero} alt="hero image" style={{"width": '100%', height: '810'}} className="block h-[500px] md:h-[90vh] xl:h-auto object-cover" />        
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/50">
          <div className="container mx-auto ">
            <h1 className="pb-[40px] pt-[100px] ml-[20px] xl:ml-[100px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white max-w-[450px] lg:max-w-[528px]">Real Estate </h1>
          </div>
        </div>
      </div>  
      {/* body intro */}
       <div className="pt-[40px] md:pt-[80px] lg:pt-[114px] relative bg-[#3F3B33]">                          
        <div className="container relative z-20">            
          <div className="text  flex items-start pb-[30px] md:pb-[50px] xl:pb-[90px]">
            {/* <span className="absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top scale-y-0 animate-lineGrow hidden md:block"></span>*/}
            <div ref={ref} className="">
              <span
                className={`absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top hidden md:block
                ${show ? "animate-lineGrow" : "scale-y-0"}`}
              ></span>
            </div>
            <Image src={leafe} alt="leafe" width={73} height={113} className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block" />
            <span className="absolute top-0 -left-[64px]  lg:-left-[36px]  bg-[#3F3B33]  w-[75px] h-[130px] z-10 hidden sm:block"></span>
            <div className="pl-0 md:pl-[90px]">
              <p className="mb-[40px] lg:mb-[74px] text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] ">
                The Hayaat Group invests in high value opportunities across the real 
                estate sector, from development to investments, asset management, 
                structuring and capital management. As a foundational pillar of our 
                portfolio, the focus is on locations and opportunities that offer 
                durable value, rooted in strategic insight, disciplined execution, and 
                aligned partnerships.
              </p>         
              <div className="lg:flex flex-wrap  justify-between items-center max-w-[95%] md:max-w-[76%]">
                 <button className="relative mb-[20px] inline-block  leading-[1.5] text-[#bfaf9d] font-light text-[24px] px-8 py-3  transition-colors tracking-wide group">
                    <Image  src={Cta} alt="Cta" width={288} height={55} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
                    <Image  src={Ctabg} alt="Cta" width={268} height={46.43} className="absolute top-[50%] left-[49%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-colors" />
                    <span className="relative z-20 group-hover:text-[#3F3B33] transition-colors text-[22px] sm:text-[25px]">Project Development</span>
                  </button>
                   <button className="relative mb-[20px] inline-block  leading-[1.5] text-[#bfaf9d] font-light text-[24px] px-6 lg:px-8 py-3  transition-colors tracking-wide group">
                    <Image  src={Cta} alt="Cta" width={288} height={55} className="lg:mx-auto absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
                    <Image  src={Ctabg} alt="Cta" width={268} height={46.43} className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hidden lg:flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-colors" />
                    <span className="relative z-20 lg:group-hover:text-[#3F3B33] transition-colors text-[22px] sm:text-[25px]">Property Management</span>
                  </button>
                   <button className="relative mb-[20px] inline-block  leading-[1.5] text-[#bfaf9d] font-light text-[24px] px-8 py-3  transition-colors tracking-wide group">
                    <Image  src={Cta} alt="Cta" width={288} height={55} className="mx-auto absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
                    <Image  src={Ctabg} alt="Cta" width={250} height={46.43} className="absolute top-[49%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-colors" />
                    <span className="relative z-20 group-hover:text-[#3F3B33] transition-colors text-[22px] sm:text-[25px]">Asset Management</span>                    
                  </button>
              </div>
            </div>
          </div>                      
        </div>
      </div> 
      {/* Blog  */}
      <div className="bg-[#BFAF9D]">
         <div className="container custompl border-l-[1.8px] border-[#A58F77]">
          <div className="py-[30px] md:py-[90px] lg:py-[130px]">
            <div className="md:pl-[80px] border-b border-[#A58F77]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,325px] gap-[20px] md:gap-[50px] md:pr-[68px] pb-[30px] md:pb-[65px]">
                <div className="">
                  <Image src={blog} alt="" style={{"width": '100%', height: 'auto'}} />
                  <p className="mt-[15px] Inter text-[15px] md:text-[19px] font-medium leading-[1] mb-[10px]">
                    Showcase: The Green, Sustainable student village (SSV)
                  </p>
                  <p className="Inter text-[15px] md:text-[19px] font-medium leading-[1] mb-[10px]">Location: On campus, University of Bradford (UoB), UK</p>
                  <p className="Inter text-[15px] md:text-[19px] font-medium leading-[1]">Location: 2010</p>
                </div>
                <div className="">
                  <p className="Inter font-bold text-[15px]  md:text-[19px] leading-[2]">
                    At the Hayaat Group, our investment strategy is guided by generational enterprise and time-tested expertise. We function as principal investor across thoughtfully diversified areas, balancing active capital deployment in strategic ventures with disciplined stewardship of long-term assets. These focus areas reflect our progressive commitment to value creation, and evolving vision for the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:pl-[80px] pt-[25px] md:pt-[45px] md:pr-[68px] ">
              <p className=" Inter text-[15px] md:text-[19px] font-medium mb-[20px] md:mb-[45px] ">
                Hayaat Group was invited by the University of Bradford to develop The Green, an ambitious 1,026-bed 
                on-campus sustainable residential complex. The result was the UK’s largest single-phase 
                development of bed spaces ever attempted, completed in a record timeline of just 84 weeks following 
                the purchase of more than 20 acres of land in Bradford City Centre by the group. The project was 
                delivered on a very tight budget, and on time, despite an economic downturn that brought many of the 
                UK’s major developments to a halt.
              </p>
              <p className=" Inter text-[15px] md:text-[19px] font-medium">
                The Green remains a flagship project for the Hayaat Group, winning multiple awards for building 
                sustainability, and, ensuring our status as a key player in the £750million development of the Learning 
                Quarter in Bradford City Centre, in partnership with Bradford Council. Among its many accolades, The 
                Green was the first multi-residential building in the UK to achieve the BREEAM sustainability assessor 
                “outstanding” rating, as well as the body’s highest ever score of 95.05%. It is now seen as the 
                benchmark in sustainable construction.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#3F3B33] relative">        
        <div className="container border-l-[1.8px] border-[#A58F77]">
          <div className="pb-[60px] md:pb-[80px] lg:pb-[150px] pt-6 sm:pt-[67px]">
            <h2 className="md:pl-[54px] text-[40px] sm:text-[42px] md:text-[60px] xl:text-[72px] text-left text-[#BFAF9D]  mb-[40px] lg:mb-[80px] xl:mb-[200px]">Related Folio</h2>            
              <div className="GallerySlider">
                <Swiper
                  modules={[ Navigation]}
                  loop={false}
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
              <div className="max-w-[326px] mx-auto text-center" >
                
                <h2 className="text-[22px] sm:text-[28px] mb-[10px] leading-[1] text-[#BFAF9D]" >Al Barari Luxury Villa</h2>
                <p className=" Inter text-[22px] sm:text-[24px] text-[#BFAF9D]">UAE</p>              
              </div>            
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
