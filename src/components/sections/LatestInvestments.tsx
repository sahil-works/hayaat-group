"use client";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    src: "/assets/images/home/slider/Isolana3x4.jpg",
    title: "Hayaat Developments",
    description:
      "Boutique high-end developer delivering\npremium residences in the UAE",
  },
  {
    src: "/assets/images/home/slider/Packaging.jpg",
    title: "Packaging Platform",
    description: "Agile packaging solutions\nfor growing UK businesses",
  },
  {
    src: "/assets/images/home/slider/pojanco.jpg",
    title: " Oil & Gas Advisory",
    description:
      "Boutique O&G advisory for global, blue-chip\nsuppliers in the GCC region",
  },
  {
    src: "/assets/images/home/slider/ZaynVC3x4.jpg",
    title: "Zayn VC",
    description:
      "Largest VC fund powering bold founders and\nstartups in Pakistan",
  },
  {
    src: "/assets/images/home/slider/vetclinic.jpg",
    title: " Vet Clinics Platform",
    description: "Building the future of\nveterinary excellence in the UAE",
  },
  {
    src: "/assets/images/home/slider/Loyyal.jpg",
    title: "Loyyal",
    description: "Blockchain as a\nloyalty service platform",
  },
  {
    src: "/assets/images/home/slider/Greens3x4.jpg",
    title: " Greens Student Village",
    description:
      "Highest rated sustainable\nstudent residence complex in the UK",
  },
];
export default function LatestInvestments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex % slides.length];

  return (
    <>
      <div className="bg-[#3F3B33]">
        <div className="container border-l-[1.8px] border-[#A58F77]">
          <div className=" py-[100px] ">
            <div className="relative ">
              <div className="GallerySlider">
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
                  onSlideChange={(swiper) => {
                    const centerIndex = (swiper.realIndex + 1) % slides.length;
                    setActiveIndex(centerIndex);
                  }}
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
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={slide.src}
                        alt={slide.title}
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
                <div className="custom-next  cursor-pointer">
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
            <div className="max-w-[200px] mx-auto">
              <h2 className="text-[26px] mb-[10px] leading-[1] text-[#BFAF9D]">
                {active.title}
              </h2>
              <p className="text-white Inter">
                {active.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
