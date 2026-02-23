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
import about from "../../../public/assets/images/about/about.png";
import Cta from "../../../public/assets/images/cta.png";
import ship from "../../../public/assets/images/about/ship.png";
import whiteh from "../../../public/assets/images/whiteH.png";



const images = [
  "/assets/images/about/team/1.png",
  "/assets/images/about/team/2.png",  
  "/assets/images/about/team/1.png",
  "/assets/images/about/team/2.png",
];
// Hero bg - team/office photo
const leafIcon = "https://www.figma.com/api/mcp/asset/be7d38da-e21c-41eb-8bda-9577aee6a92a";
const teamImg1 = "https://www.figma.com/api/mcp/asset/0ed1a1ae-9a38-454c-aaf6-a1598dc522a1";
const teamImg2 = "https://www.figma.com/api/mcp/asset/d6c687a5-dd92-42bc-97c2-a3e009a31e58";
const teamImg3 = "https://www.figma.com/api/mcp/asset/7212592c-5129-4a21-aafc-d0bb6e0ddc13";

const dnaItems = [
  {
    title: "Entrepreneurial Spirit",
    text: "Your team must start seeing customers as assets before you can start managing them strategically."
  },
  {
    title: "Client Centricity",
    text: "Always putting the needs and best interests of clients first, building trust and loyalty through every interaction."
  },
  {
    title: "Global Partnerships",
    text: "Collaboration with world-class partners, fostering relationships built on mutual respect and shared vision."
  },
  {
    title: "Strategic Collaboration",
    text: "Putting the needs and best interests of clients first, building trust and loyalty through every interaction."
  },
];

const timeline = [
  {
    year: "1925",
    title: "Foundation",
    text: "The Hayaat family business established its roots with humble origins and a clear vision.",
  },
  {
    year: "2000",
    title: "Global Expansion",
    text: "The Group expanded its investment footprint across multiple continents and asset classes.",
  },
  {
    year: "2002",
    title: "Hayaat Group",
    text: "Formalisation of the single family office structure to manage growing multi-asset portfolios.",
  },
];

const awards = [
  { label: "Gold Award", body: "Best Family Office — MENA Region, 2023" },
  { label: "Silver Award", body: "Excellence in Real Estate Investment, 2022" },
  { label: "Bronze Award", body: "Venture Capital Innovation Award, 2021" },
];

const teamMembers = [
  { name: "Ahmed Al Hayaat", role: "Chairman & Principal", image: teamImg1 },
  { name: "Khalid Al Hayaat", role: "Managing Director",    image: teamImg2 },
  { name: "Sara Hayaat",      role: "Chief Investment Officer", image: teamImg3 },
];

// export const metadata = {
//   title: "Who We Are — Hayaat Group",
// };

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative">
        <div className="image">
          <Image src={hero} alt="hero image" style={{"width": '100%', height: '810'}} className="block" />        
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/20">
          <div className="container mx-auto ">
            <h1 className="pb-[100px] ml-[90px] block text-[58px] lg:text-[70px] leading-[1.2] text-white max-w-[528px]">From Principle<br />to Principal</h1>
          </div>
        </div>
      </div>

      {/* Intro body text */}
      <div className="pt-[114px] relative bg-[#BFAF9D]">            
        <span className=" bg-[#3F3B33] absolute top-0 left-0 right-0 bottom-[140px] "></span>              
        <div className="container relative z-20">            
          <div className="text  flex items-start">
            <span className="inline-block w-[1.8px] h-auto bg-[#A58F77] absolute top-[120px] bottom-0 left-0"> </span>
            <Image src={leafe} alt="leafe" width={73} height={113} className="absolute top-0 -left-[36px]"/>
            <Image src={Icon} alt="leafe" width={37} height={75} className="absolute top-[50%] -left-[56px]"/>
            <div>
              <p className="mb-[45px] text-[31.5px] text-[#BFAF9D] pl-[90px]">The Hayaat Group is a family investment legacy, committed to building  enduring value across sectors and geographies. Founded by the  entrepreneurial Elahi family, the group is driven by discipline, a global outlook, and the flexibility of principal capital.</p>
              <p className="text-[31.5px] text-[#BFAF9D] pl-[90px] mr-[15px]">We began with the UK real estate market, expanding into new markets, and further growing globally with venture capital and growth equity. Ever evolving, yet anchored in our values of purposeful investing, responsible stewardship, and a belief in the power of aligned partnerships. Today, the group is led by a cross-generational team, actively shaping future initiatives and leading investments across sectors.</p>
            </div>
          </div>  
           <div className="-ml-[100px]">
            <Image src={globe} alt="about" style={{"width": 'auto', height: 'auto'}}  />
          </div>      
        </div>
      </div>
     
      {/* Hayaat DNA */}
      <div className="bg-[#BFAF9D] ">
        <div className="container  custompl border-l-[1.8px] border-[#A58F77]">
          
          <div className="grid grid-cols-[1fr,332px] items-center ">
            <div className="">
              <h2 className="pl-[124px] font-antic text-[rgb(63,59,51)] text-[72px] mb-[35px]">The Hayaat DNA</h2>
                {dnaItems.map((item) => (
                  <div key={item.title} className="pl-[124px] pb-[38px] border-b-[1.53px] border-[#A58F77]">
                    <h3 className="font-antic text-white text-[36px] mb-[22px] pt-[30px]">{item.title}</h3>
                    <p className="text-[#6b6355] font-light text-[19px] leading-relaxed max-w-[490px]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="image">
                <Image src={pillar} alt="about" style={{"width": 'auto', height: 'auto'}}  />
              </div>
          </div>
         
        </div>
      </div>      

      {/* Capital Growth dark section */}
      <div className="relative">
        <span className="block h-[127px] absolute top-0 left-0 right-0 bg-[#BFAF9D] -z-[1]"></span>
        <div className="container custompl border-l-[1.8px] border-[#A58F77] ">
          <div className="pb-[90px]">
            <div className="pl-[47px] grid grid-cols-[1fr,290px] -mt-[20px]">
              <Image src={about} alt="about" style={{"width": 'auto', height: 'auto'}}  />
            </div>
            <div className="mt-[45px] pl-[111px] pb-[46px] border-b-[1.8px] border-[#A58F77]">
              <h2 className="font-antic text-[72px] mb-[25px]">Capital Growth</h2>
              <p className="text-[#bfaf9d] font-light text-[18.5px] leading-[2] max-w-[910px]">
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
      <section className="bg-[#3F3B33]">
        <div className="container border-l-[1.83px] border-[#A58F77]">
          <div className="pb-[200px] pt-[67px]">
            <h2 className="text-[72px] text-center text-[#BFAF9D] mb-[200px]">Meet Our Team</h2>            
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
                <button className="mt-[20px] relative inline-block  text-[#bfaf9d] font-light text-[14px] px-8 py-3 hover:bg-[#bfaf9d] hover:text-[#3d3830] transition-colors  tracking-wide"
              >
                <Image  src={Cta} alt="Cta" width={205} height={63} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
                Read More
              </button>
              </div>            
          </div>
        </div>
      </section>

      {/* We've Come A Long Way — Timeline */}      
      <div className="container border-l-[1.83px] border-[#A58F77]">
        <div className="pt-[127px] pb-[88px]">
          <h2 className="text-[60px]  text-center">We’ve Come A Long Way</h2>
          <div className="relative">
            <div className="ml-auto -mr-[120px]">
              <Image src={ship} alt="about" style={{"width": 'auto', height: 'auto'}} className="ml-auto"  />
             </div>
             <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-start items-center">
              <div className="relative slider max-w-[860px] mx-auto ">
                  <Swiper
                    modules={[ Navigation, Autoplay]}
                    loop={false}
                    navigation={{
                      prevEl: ".custom-prev",
                      nextEl: ".custom-next",
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{ delay: 3000 }}
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
                    <div className="custom-prev  cursor-pointer absolute top-[50%] -left-[50px] -translate-y-[50%]">
                      <svg width="35" height="35" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28.4004 55.9C43.5882 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5882 0.900024 28.4004 0.900024C13.2126 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2126 55.9 28.4004 55.9Z" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                          <path d="M42.9218 28.4H14.3008" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                          <path d="M23.9226 18.7781L14.3008 28.4L23.9226 38.0111" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                    <div className="custom-next  cursor-pointer absolute top-[50%] -right-[50px] -translate-y-[50%]">
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
     
    </main>
  );
}
