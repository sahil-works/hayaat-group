import Image from "next/image";
import Link from "next/link";
import Cta from "../../../public/assets/images/cta.png";

// import realEstateImg from "../../../public/assets/images/home/card/1.jpg";
// import ventureImg from "../../../public/assets/images/home/card/2.jpg";
// import growthImg from "../../../public/assets/images/home/card/3.jpg";

// Card images
// const realEstateImg = "https://www.figma.com/api/mcp/asset/d6c687a5-dd92-42bc-97c2-a3e009a31e58";
// const ventureImg    = "https://www.figma.com/api/mcp/asset/0ed1a1ae-9a38-454c-aaf6-a1598dc522a1";
// const growthImg     = "https://www.figma.com/api/mcp/asset/7212592c-5129-4a21-aafc-d0bb6e0ddc13";



const focusItems = [
  { title: "Real Estate", image: "/assets/images/home/card/1.jpg" },
  { title: "Venture Capital", image: "/assets/images/home/card/2.jpg" },
  { title: "Growth Capital", image: "/assets/images/home/card/3.jpg" },
];

export default function FutureInFocus() {
  return (
    <section className="bg-[#3F3B33] ">
      <div className="container border-t-[1.8px] border-[#A58F77] border-l-[1.8px] ">  
        <div className="pb-[120px] pl-[70px]">
        <h2 className="text-[#BFAF9D] text-[42px] lg:text-[72px] leading-tight mb-[28px]">
          The Future in Focus
        </h2>        
        <p className="Inter text-white text-[15px] lg:text-[18px] font-[300] leading-[3] max-w-[905px] mb-[150px]">
         At the Hayaat Group, our investment strategy is guided by generational enterprise and time-tested expertise. 
         We function as principal investor across thoughtfully diversified areas, balancing active capital deployment
         in strategic ventures with disciplined stewardship of long-term assets. These focus areas reflect our 
         progressive commitment to value creation, and evolving vision for the future.
        </p>       
        
        <Link
          href="/about"
          className="relative inline-block  text-[#bfaf9d] font-light text-[24px] px-8 py-3 hover:bg-[#bfaf9d] hover:text-[#3d3830] transition-colors mb-14 tracking-wide"
        >
          <Image  src={Cta} alt="Cta" width={205} height={63} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center " />
          Read More
        </Link>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {focusItems.map((item) => (
            <div key={item.title} className="relative overflow-hidden group cursor-pointer" style={{ height: "auto" }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-antic text-white text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Arrow navigation */}
        <div className="flex justify-between mt-[62px]">
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#bfaf9d] hover:border-[#bfaf9d] transition-colors">
           <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.4004 55.9C43.5882 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5882 0.900024 28.4004 0.900024C13.2126 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2126 55.9 28.4004 55.9Z" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
            <path d="M42.9218 28.4H14.3008" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
            <path d="M23.9226 18.7781L14.3008 28.4L23.9226 38.0111" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
          </svg>

          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#bfaf9d] hover:border-[#bfaf9d] transition-colors">
           <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.4003 55.9C43.5881 55.9 55.9004 43.5879 55.9004 28.4C55.9004 13.2122 43.5881 0.900024 28.4003 0.900024C13.2125 0.900024 0.900391 13.2122 0.900391 28.4C0.900391 43.5879 13.2125 55.9 28.4003 55.9Z" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
            <path d="M13.8887 28.4H42.4991" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
            <path d="M32.8887 18.7781L42.5 28.4L32.8887 38.0111" stroke="#A58F77" stroke-width="1.8" stroke-miterlimit="10"/>
          </svg>

          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
