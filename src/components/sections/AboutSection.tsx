"use client";
// Leaf / plant icon from Figma
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "../../../public/assets/images/h.png";

export default function AboutSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="w-full relative h-[490px] sm:h-[590px] lg:h-[764px] bg-[url('/assets/images/about/Paralax.png')] bg-fixed bg-cover bg-center bg-no-repeat">
        <div ref={ref} className="container custompl absolute inset-0 pointer-events-none z-10">
          <span
            className={`absolute left-0 top-0 w-[1px] h-full border-l-[1.8px] border-[#A58F77] origin-top hidden md:block
            ${show ? "animate-lineGrow" : "scale-y-0"}`}
          ></span>
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
