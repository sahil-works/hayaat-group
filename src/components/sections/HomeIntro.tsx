import Image from "next/image";
import about from "../../../public/assets/images/home/about.png";
import leafe from "../../../public/assets/images/leafe.png";
import Icon from "../../../public/assets/images/h.png";


const leafIcon = "https://www.figma.com/api/mcp/asset/be7d38da-e21c-41eb-8bda-9577aee6a92a";



export default function HomeIntro() {
  return (
    <>
    {/* <section className="bg-[#6b6355] py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">

        
          <div className="flex gap-8 items-start flex-1">
            <img src={leafIcon} alt="" className="w-12 flex-shrink-0 mt-1 opacity-90" />
            <div className="text-[#bfaf9d] font-light text-[15px] lg:text-[16.5px] leading-[1.85] space-y-5">
              <p>
                We are Hayaat Group, a family investment firm rooted in principled values and
                geographical expertise. We are privileged to be entrusted with deploying principal
                capital, actively managing a unique portfolio of investments that includes building
                communities, accelerating growth and upholding values that deserve respect.
              </p>
            </div>
          </div>

        
          <div className="flex gap-4 flex-shrink-0">
            <div className="w-36 h-44 lg:w-44 lg:h-56 overflow-hidden">
              <img src={img1} alt="Investment" className="w-full h-full object-cover" />
            </div>
            <div className="w-36 h-44 lg:w-44 lg:h-56 overflow-hidden self-end">
              <img src={img2} alt="Investment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        
        <div className="border-t border-[#bfaf9d]/20 my-14" />

        
        <div className="text-[#bfaf9d] font-light text-[15px] lg:text-[16.5px] leading-[1.85] max-w-[700px] space-y-5">
          <p>
            We serve our local, regional, and global investment mandates through an integrated
            single family office framework that covers venture capital, private equity growth capital,
            real estate, and global capital markets.
          </p>
          <p>
            What sets us apart is the Hayaat DNA — a unique blend of entrepreneurial heritage,
            global perspective, and a deep-rooted commitment to value creation that endures.
          </p>
        </div>
      </div>
    </section> */}
    <div className="pt-[114px] relative">
      
      <span className="w-full h-[665px] bg-[#3F3B33] absolute top-0 left-0 right-0 -z-2"></span>
      <div className="container relative z-20">        
        <div className="text pb-[126px] max-w-[722px] flex items-start">
          <span className="inline-block w-[1.8px] h-[690px] bg-[#A58F77] absolute bottom-0 left-0"> </span>
          <Image src={leafe} alt="leafe" width={73} height={113} className="absolute top-0 -left-[36px]"/>
          <Image src={Icon} alt="leafe" width={37} height={75} className="absolute top-[55%] -left-[56px]"/>
          <p className="text-[31px] text-[#BFAF9D] pl-[90px]">We are the Hayaat Group, a reputed, global principal investment firm creating and accelerating growth through talent, integrity and respect</p>
        </div>
        <div className="image max-w-[65%] pl-[80px]">
          <Image src={about} alt="about" style={{"width": '100%', height: 'auto'}}  />
        </div>
      </div>
    </div>
    </>
  );
}
