// Leaf / plant icon from Figma
import Image from "next/image";
import arrowRight from "../../../public/assets/images/home/arrowRight.png";
import house from "../../../public/assets/images/home/house.png";
import clock from "../../../public/assets/images/home/clock.png";
import about1 from "../../../public/assets/images/home/about1.png";


export default function AboutSection() {
  return (
    <>
    <div className="relative overflow-x-hidden">
      <div className="container border-[#A58F77] border-l-[1.8px]">
        <div className="pb-[40px] sm:pb-[70px]">
          <div  className="relative">            
            <div className="pt-[30px] sm:pt-[60px] relative">
              <div className="xl:flex justify-between max-w-[778px] pb-[120px] sm:ml-[35px]">
                <p className="text-[#3F3B33] max-w-[513px] text-[16px] sm:text-[18px] leading-[2] Inter mb-[20px] xl:mb-0">We work with people who share our passion for success, and accelerate value creation through capital, capabilities, and experience.</p>
                <Image src={arrowRight} alt="arrow right" width={200} height={200} className="w-auto"/>
              </div>
              <div className="absolute top-[100px] sm:top-0 xl:-top-[150px]  -right-[60px] xl:-right-[120px] -z-[99]">
                <Image src={house} alt="House image" style={{"width": 'auto', height: 'auto'}}  />
              </div>
              <div className="sm:flex pl-0 md:pl-[40px] items-center pr-[10px] sm:pr-0">
                <Image src={clock} alt="clock image" width={280} height={554} className="mr-0 sm:-mr-[60px] w-auto -mt-[100px] sm:mt-0"/>
                <Image src={about1} alt="About image" style={{"width": '823px', height: 'auto'}} className="-mt-[140px] sm:mt-0" />
              </div>
            </div>          
          </div>
        </div>
      </div>
      <span className="w-full h-[260px] bg-[#3F3B33] absolute bottom-0 left-0 right-0 -z-[99]"></span>
    </div>
    </>
  );
}
