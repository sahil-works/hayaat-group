// Leaf / plant icon from Figma
import Image from "next/image";
import arrowRight from "../../../public/assets/images/home/arrowRight.png";
import house from "../../../public/assets/images/home/house.png";
import clock from "../../../public/assets/images/home/clock.png";
import about1 from "../../../public/assets/images/home/about1.png";


export default function AboutSection() {
  return (
    <>
    <div className="relative ">
      <div className="container border-[#A58F77] border-l-[1.8px]">
        <div className="pb-[70px]">
          <div  className="relative">            
            <div className="pt-[60px]">
              <div className="flex justify-between max-w-[778px] pb-[120px] ml-[35px]">
                <p className="text-[#3F3B33] max-w-[513px] text-[18px] leading-[2] Inter">We work with people who share our passion for success, and accelerate value creation through capital, capabilities, and experience.</p>
                <Image src={arrowRight} alt="arrow right" width={200} height={200}/>
              </div>
              <div className="absolute  -top-[150px] -right-[120px] -z-[99]">
                <Image src={house} alt="clock image" style={{"width": 'auto', height: 'auto'}} />
              </div>
              <div className="flex pl-[40px] items-center">
                <Image src={clock} alt="clock image" width={280} height={554} className="-mr-[60px]"/>
                <Image src={about1} alt="clock image" style={{"width": 'auto', height: 'auto'}} />
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
