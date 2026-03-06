"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import hero from "../../../public/assets/images/about/hero.jpg"
import globe from "../../../public/assets/images/about/globe1.png";
import leafe from "../../../public/assets/images/leafe.png";
import Icon from "../../../public/assets/images/h.png";
import pillar from "../../../public/assets/images/about/Pillar.png";
import capital from "../../../public/assets/images/about/capital.png";
import aboutbg from "../../../public/assets/images/about/aboutbg.png";
import Cta from "../../../public/assets/images/cta.png";
import ship from "../../../public/assets/images/about/ship.png";
import whiteh from "../../../public/assets/images/whiteH.png";
import breeam from "../../../public/assets/images/about/icon/1.png"
import international from "../../../public/assets/images/about/icon/2.png"
import building from "../../../public/assets/images/about/icon/3.png"
import Footer from "@/components/Footer";



const images = [
  "/assets/images/about/team/1.png",
  "/assets/images/about/team/2.png",  
  "/assets/images/about/team/1.png",
  "/assets/images/about/team/2.png",
];

const dnaItems = [
  {
    title: "Entrepreneurial Experience",
    text: "Time-tested expertise across diverse sectors and markets, committed to value-creation, and not wavered by short-term market conditions."
  },
  {
    title: "Passion-Forward ",
    text: "A zeal for ‘disruptors’, driving investments in developed, emerging, and frontier markets, that goes beyond traditional private equity constraints."
  },
  {
    title: "Patient Partnership",
    text: "Shared purpose, risks and rewards, based on mutual trust and values for co-prosperity. Partnering founders, management, and co-investors"
  },
  {
    title: "Proactive Collaboration",
    text: "Strategic and tactical mentorship with our in-house, agile advisory for transparency across stakeholders."
  },
];


export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative">
        <div className="image">
          <Image src={hero} alt="hero image" style={{"width": '100%', height: '810'}} className="block h-[500px] md:h-[90vh] xl:h-auto object-cover" />        
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/20">
          <div className="container mx-auto ">
            <h1 className="pb-[100px] ml-[20px] md:ml-[90px] block text-[35px] sm:text-[50px] md:text-[55px] xl:text-[70px] leading-[1.2] text-white max-w-[528px]">From Principle<br />to Principal</h1>
          </div>
        </div>
      </div>

      {/* Intro body text */}
      <div className="pt-[40px] md:pt-[80px] lg:pt-[114px] relative bg-[#BFAF9D]">            
        <span className=" bg-[#3F3B33] absolute top-0 left-0 right-0 bottom-[140px] "></span>              
        <div className="container relative z-20">            
          <div className="text  flex items-start">
            <span className="hidden md:inline-block w-[1.8px] h-auto bg-[#A58F77] absolute top-[120px] bottom-0 left-0"> </span>
            <Image src={leafe} alt="leafe" width={73} height={113} className="absolute top-0 left-0 md:-left-[36px] z-20 hidden md:block" />
            <Image src={Icon} alt="leafe" width={37} height={75} className="hidden md:block absolute top-[50%] left-0 xl:-left-[56px]"/>
            <div>
              <p className="mb-[20px] md:mb-[40px] lg:mb-[74px] text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] md:pl-[90px]">The Hayaat Group is a family investment legacy, committed to building  enduring value across sectors and geographies. Founded by the  entrepreneurial Elahi family, the group is driven by discipline, a global outlook, and the flexibility of principal capital.</p>
              <p className="text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] md:pl-[90px] mr-[15px]">We began with the UK real estate market, expanding into new markets, and further growing globally with venture capital and growth equity. Ever evolving, yet anchored in our values of purposeful investing, responsible stewardship, and a belief in the power of aligned partnerships. Today, the group is led by a cross-generational team, actively shaping future initiatives and leading investments across sectors.</p>
            </div>
          </div>  
           <div className="-ml-[100px]">
            <Image src={globe} alt="about" style={{"width": 'auto', height: 'auto'}} className=" object-contain" />
          </div>      
        </div>
      </div>
     
      {/* Hayaat DNA */}
      <div className="bg-[#BFAF9D] ">
        <div className="container  md:custompl border-l-[1.8px] border-[#A58F77]">          
          <div className="grid grid-cols-1 md:grid-cols-[1fr,332px] items-center ">
            <div className="">
              <h2 className="md:pl-[124px] font-antic text-[rgb(63,59,51)] text-[40px] md:text-[53px] lg:text-[72px] mb-[20px] md:mb-[35px]">The Hayaat DNA</h2>
                {dnaItems.map((item) => (
                  <div key={item.title} className="md:pl-[124px] pb-[20px] md:pb-[38px] border-b-[1.53px] border-[#A58F77]">
                    <h3 className="font-antic text-white text-[26px] md:text-[36px] mb-[10px] md:mb-[22px] pt-[15px] md:pt-[30px]">{item.title}</h3>
                    <p className="text-[#6b6355] font-light text-[16px] md:text-[19px] leading-relaxed max-w-[490px]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="image">
                <Image src={pillar} alt="about" style={{"width": 'auto', height: 'auto'}} className="hidden md:block" />
              </div>
          </div>
         
        </div>
      </div>      

      {/* Capital Growth dark section */}
      <div className="relative pt-[30px]">
        <span className="block h-[127px] absolute top-0 left-0 right-0 bg-[#BFAF9D] -z-[1]"></span>
        <div className="container md:custompl border-l-[1.8px] border-[#A58F77] ">
          <div className="pb-[40px] md:pb-[90px]">
            <div className="pl-0 md:pl-[47px] md:grid grid-cols-[1fr,320px] pt-[50px] md:pt-0 md:-mt-[20px]">
              <div className="relative group">
                <Image src={capital} alt="about" style={{"width": 'auto', height: 'auto'}} className="relative z-20" />
                <Image src={aboutbg} alt="about" style={{"width": 'auto', height: 'auto'}} className="absolute  top-0 right-0  opacity-0 z-10  transition-all duration-500 group-hover:-right-[10px] md:group-hover:-right-[30px] group-hover:-top-[10px] md:group-hover:-top-[30px] group-hover:opacity-100" />
              </div>
            </div>
            <div className="mt-[25px] md:mt-[45px] md:pl-[111px] md:pb-[46px] md:border-b-[1.8px] border-[#A58F77]">
              <h2 className="font-antic text-[40px] md:text-[53px] lg:text-[72px] mb-[10px] md:mb-[25px]">Capital Growth</h2>
              <p className="text-[#bfaf9d] font-light text-[16px] md:text-[18.5px] leading-[2] max-w-[910px]">
                Making a significant impact in the UK and UAE real estate markets, the Elahi family expanded its footprint from 
                urban regeneration projects and residential communities to high-growth, financial ventures in the UK, UAE, 
                South Asia, and beyond. As a global, cross-generational and multi-asset investment firm, the Hayaat Group 
                continues to enrich its experience, broaden its scope, and stay focused on long-term value creation. With 
                each investment, we build on our foundation of trust, ambition, and impact, ensuring that we prosper with 
                purpose, energized by the vision of the future. 
              </p>            
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-[#3F3B33] relative ">
        <Image src={Icon} alt="leafe" width={37} height={75} className="absolute top-[50px] left-[50px] z-20 hidden md:block"/>
        <div className="container border-l-[1.8px] border-[#A58F77]">
          <div className="pb-[80px] lg:pb-[150px] xl:pb-[200px] pt-[67px]">
            <h2 className="text-[40px] md:text-[53px] lg:text-[72px] text-center text-[#BFAF9D] mb-[50px] md:mb-[150px] xl:mb-[200px]">Meet Our Team</h2>            
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
                
                <h2 className="text-[28px] mb-[10px] leading-[1] text-[#BFAF9D]" >Mohammed Ikhlaq</h2>
                <p className="text-white Inter text-[18px]">Founder & Group Managing Director</p>
                <button className="mt-[20px] relative inline-block  text-[#bfaf9d] font-light text-[14px] px-8 py-3  transition-colors  tracking-wide"
                >
                  <Image  src={Cta} alt="Cta" width={205} height={63} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
                  Read More
                </button>
              </div>            
          </div>
        </div>
      </div>

      {/* We've Come A Long Way — Timeline */}      
      <div className="container border-l-[1.83px] border-[#A58F77]  overflow-x-hidden">
        <div className="pt-[35px] md:pt-[80px] lg:pt-[127px] pb-[50px] md:pb-[88px]">
          <h2 className="text-[35px] md:text-[50px] lg:text-[60px]  text-center">We’ve Come A Long Way</h2>
          <div className="relative">
            <div className="ml-auto -mr-[80px] md:-mr-[120px]">
              <Image src={ship} alt="about" style={{"width": 'auto', height: 'auto'}} className="ml-auto"  />
             </div>
             <div className=" max-w-[80%] md:max-w-full mx-auto absolute top-0 left-0 right-0 bottom-0 md:flex justify-start items-center ">
              <div className="relative slider max-w-[860px] mx-auto ">
                  <Swiper
                    modules={[ Navigation, Autoplay]}
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
                            <h2 className="text-[72px] text-white mb-[20px]">1925</h2>
                            <p className="text-[16px] Inter pb-[50px] min-h-[146px]">The first generation Elahi family enters the business world managing contracts for the British Army</p>
                            <div className="flex items-center">
                              <span className="h-[1px] bg-white block w-full"></span>
                              <Image src={whiteh} alt="about" style={{"width": 'auto', height: 'auto'}}  className="ml-[10px]" /> 
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                            <h2 className="text-[72px] text-white mb-[20px]">2000</h2>
                            <p className="text-[16px] Inter pb-[50px] min-h-[146px]">Hayaat Group is founded</p>
                            <div className="flex items-center">
                              <span className="h-[1px] bg-white block w-full"></span>
                              <Image src={whiteh} alt="about" style={{"width": 'auto', height: 'auto'}}  className="ml-[10px]" /> 
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                            <h2 className="text-[72px] text-white mb-[20px]">2002</h2>
                            <p className="text-[16px] Inter pb-[50px] min-h-[146px]">The group embarks on real estate development  and urban regeneration in the Northwest of England</p>
                            <div className="flex items-center">
                              <span className="h-[1px] bg-white block w-full"></span>
                              <Image src={whiteh} alt="about" style={{"width": 'auto', height: 'auto'}}  className="ml-[10px]" /> 
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                            <h2 className="text-[72px] text-white mb-[20px]">1925</h2>
                            <p className="text-[16px] Inter pb-[50px] min-h-[146px]">The first generation Elahi family enters the business world managing contracts for the British Army</p>
                            <div className="flex items-center">
                              <span className="h-[1px] bg-white block w-full"></span>
                              <Image src={whiteh} alt="about" style={{"width": 'auto', height: 'auto'}}  className="ml-[10px]" /> 
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                            <h2 className="text-[72px] text-white mb-[20px]">2000</h2>
                            <p className="text-[16px] Inter pb-[50px] min-h-[146px]">Hayaat Group is founded</p>
                            <div className="flex items-center">
                              <span className="h-[1px] bg-white block w-full"></span>
                              <Image src={whiteh} alt="about" style={{"width": 'auto', height: 'auto'}}  className="ml-[10px]" /> 
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="bg-[#BFAF9D] py-[20px] pr-[24px] pl-[33px] rounded-[10px] h-full">
                            <h2 className="text-[72px] text-white mb-[20px]">2002</h2>
                            <p className="text-[16px] Inter pb-[50px] min-h-[146px]">The group embarks on real estate development  and urban regeneration in the Northwest of England</p>
                            <div className="flex items-center">
                              <span className="h-[1px] bg-white block w-full"></span>
                              <Image src={whiteh} alt="about" style={{"width": 'auto', height: 'auto'}}  className="ml-[10px]" /> 
                            </div>
                          </div>
                      </SwiperSlide>
                    
                  </Swiper>
                  <div className="">          
                    <div className="custom-prev  cursor-pointer absolute top-[50%] -left-[40px] sm:-left-[50px] -translate-y-[50%]">
                      <svg width="35" height="35" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28.4004 55.9C43.5882 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5882 0.900024 28.4004 0.900024C13.2126 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2126 55.9 28.4004 55.9Z" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                          <path d="M42.9218 28.4H14.3008" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                          <path d="M23.9226 18.7781L14.3008 28.4L23.9226 38.0111" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                    <div className="custom-next  cursor-pointer absolute top-[50%] -right-[40px] sm:-right-[50px] -translate-y-[50%]">
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
      </div>
      
     
      {/* Global Recognition */}
      <div className="bg-[#3F3B33]">
        <div className="container md:custompl border-l-[1.8px] border-[#A58F77]">
          <div className="md:pl-[80px] py-[75px]">
            <h2 className="pl-[20px]  text-[35px] md:text-[53px] lg:text-[72px] text-[#BFAF9D] mb-[40px]">Global Recognition</h2>
            <div className="">
              {/* 1 */} 
              <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px] border-b-[1px] border-[#A58F77] md:border-0">
                  <div className=" md:flex items-center flex-wrap">
                    <div className="md:w-[50%]">
                      <Image src={breeam} alt="hero image" style={{"width": '284', height: '174'}} className="w-[150px] sm:w-[284px] h-auto mb-[10px] md:mb-0 " />
                    </div>
                    <div className="pl-0 md:pl-[31px] md:w-[50%]">
                      <h2 className="text-[25px] md:text-[36px] text-[#BFAF9D] uppercase">BREEAM</h2>
                      <p className="text-white text-[14px] md:text-[16px] Inter leading-[1.2]">World-Leading Building Sustainability Assessor </p>
                    </div>
                  </div>
                  <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px]  border-[#A58F77] pt-[11px] pb-[20px]">
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Category: Sustainable building</p>
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Year: 2012</p>
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Project: The Green, University of Bradford, UK</p>
                  </div>
              </div>
              {/* 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px]  border-b-[1px] border-[#A58F77] md:border-0">
                  <div className=" md:flex items-center flex-wrap">
                    <div className="md:w-[50%]">
                      <Image src={international} alt="hero image" style={{"width": '284', height: '174'}} className="w-[150px] sm:w-[284px] h-auto mb-[10px] md:mb-0 " />
                    </div>
                    <div className="pl-0 md:pl-[31px] md:w-[50%]">
                      <h2 className="text-[25px] md:text-[36px] text-[#BFAF9D]  leading-[1]">International Green Apple Awards</h2>                      
                    </div>
                  </div>
                  <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px]  border-[#A58F77] pt-[11px] pb-[20px]">
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Category: Environmental best practice in building</p>
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Year: 2012</p>
                    <p className="text-white text-[14px] md:text-[16px] leading-[1.2] Inter">ProjectProject: The Green, University of Bradford, UK</p>
                  </div>
              </div>
              {/* 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-[25px] md:mb-[40px] lg:mb-[72px]">
                  <div className=" md:flex items-center flex-wrap">
                    <div className="md:w-[50%]">
                      <Image src={international} alt="hero image" style={{"width": '284', height: '174'}} className="w-[150px] sm:w-[284px] h-auto mb-[10px] md:mb-0" />
                    </div>
                    <div className="pl-0 md:pl-[31px] md:w-[50%]">
                      <h2 className="text-[25px] md:text-[36px] text-[#BFAF9D] leading-[1]">Building  Awards</h2>                      
                    </div>
                  </div>
                  <div className="pl-0 md:pl-[32px] md:ml-[32px] border-l-[1.8px]  border-[#A58F77] pt-[11px] pb-[20px]">
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Category: Recognition of excellence in building</p>
                    <p className="text-white text-[14px] md:text-[16px] mb-[3px] leading-[1.2] Inter">Year: 2012</p>
                    <p className="text-white text-[14px] md:text-[16px] leading-[1.2] Inter">ProjectProject: The Green, University of Bradford, UK </p>
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
