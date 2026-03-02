import Image from "next/image";
import about from "../../../public/assets/images/home/about.png";
import leafe from "../../../public/assets/images/leafe.png";
import Icon from "../../../public/assets/images/h.png";


export default function HomeIntro() {
  return (
    <>    
    <div className="pt-[40px] sm:pt-[80px] xl:pt-[114px] relative overflow-hidden">
      
      <span className="w-full h-[380px] sm:h-[665px] bg-[#3F3B33] absolute top-0 left-0 right-0 -z-2"></span>
      <div className="container relative border-l-[1.8px] border-[#A58F77] z-20">        
        <div className="pb-[40px] sm:pb-[80px] xl:pb-[126px] max-w-[722px] flex items-start">          
          <Image src={leafe} alt="leafe" width={73} height={113} className="absolute top-0 left-0 md:-left-[36px] z-20 hidden sm:block" />          
          <span className="absolute top-0  -left-[36px]  bg-[#3F3B33]  w-[75px] h-[130px] z-10 hidden sm:block"></span>
          <Image src={Icon} alt="leafe" width={37} height={75} className="absolute top-[55%] left-[10px] xl:-left-[56px] hidden sm:block"/>
          <p className="text-[18px] sm:text-[25px] lg:text-[31px] text-[#BFAF9D] sm:pl-[90px]">We are the Hayaat Group, a reputed, global principal investment firm creating and accelerating growth through talent, integrity and respect</p>
        </div>
        <div className="image sm:max-w-[80%] xl:max-w-[65%] pl-0 sm:pl-[80px]">
          <Image src={about} alt="about" style={{"width": '100%', height: 'auto'}}  />
        </div>
      </div>
    </div>
    </>
  );
}