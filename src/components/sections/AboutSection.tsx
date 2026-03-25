// Leaf / plant icon from Figma
import Image from "next/image";
import Icon from "../../../public/assets/images/h.png";

export default function AboutSection() {
  return (
    <>
      <div className="w-full relative h-[764px] bg-[url('/assets/images/about/Paralax.png')] bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="container custompl absolute inset-0 pointer-events-none z-10">
          <span className="absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] hidden md:block"></span>
          <Image
            src={Icon}
            alt="H logo"
            width={37}
            height={75}
            className="absolute top-[2%] left-[10px] xl:-left-[56px] hidden sm:block"
          />
        </div>
      </div>
    </>
  );
}
