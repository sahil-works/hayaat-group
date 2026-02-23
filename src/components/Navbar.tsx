"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../../public/assets/images/logo.png";
import Image from "next/image";


const navLinks = [
  { label: "Home",        href: "/" },
  { label: "Who are we",  href: "/about" },
  { label: "What we do",  href: "/what-we-do" },
  { label: "Investments", href: "/investments" },
  { label: "News",        href: "/news" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* <nav className="absolute top-0 left-0 right-0 z-50 flex items-start justify-between px-8 pt-7">
        
        <Link href="/" className="flex flex-col items-center gap-[3px]">
          <div className="w-8 h-8 border border-white flex items-center justify-center">
            <span className="font-antic text-white text-xl leading-none select-none">H</span>
          </div>
          <span className="text-white text-[7px] font-light tracking-[0.22em] uppercase select-none">
            HAYAAT GROUP
          </span>
        </Link>

        
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-[5px] cursor-pointer p-2 mt-1 group"
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-white transition-all group-hover:w-5" />
          <span className="block w-6 h-px bg-white" />
          <span className="block w-6 h-px bg-white transition-all group-hover:w-4" />
        </button>
      </nav> */}
      <div className="hidden">
       <div
          className={`fixed inset-0 z-[100] transition-opacity duration-400 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

          {/* Slide-in panel */}
          <div
            className={`absolute right-0 top-0 h-full w-80 bg-[#3d3830] flex flex-col py-10 px-10 transition-transform duration-500 ease-out ${
              open ? "translate-x-0" : "translate-x-0"
            }`}
          >
            {/* Logo + close row */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex flex-col items-center gap-[3px]">
                <div className="w-7 h-7 border border-white flex items-center justify-center">
                  <span className="font-antic text-white text-lg leading-none">H</span>
                </div>
                <span className="text-white text-[6px] font-light tracking-[0.22em] uppercase">HAYAAT GROUP</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl leading-none hover:text-[#bfaf9d] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-antic text-2xl leading-tight transition-colors hover:text-[#bfaf9d] ${
                      pathname === link.href ? "text-[#bfaf9d]" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bottom contact */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm font-light leading-relaxed">
                info@hayaatgroup.com<br />
                +971 4 513 4951
              </p>
            </div>
          </div>
       </div>
      </div>     
      <header className="pt-[50px] absolute top-0 left-0 right-0 z-[99]">
        <div className="container mx-auto">
          <div className="flex justify-between items-start">
            {/* Logo */}
            <div className="image">
              <Link href="/" className="inline-block">
                <Image src={Logo} alt="Logo image" width={132} height={130} />
              </Link>
            </div>

            {/* Menu icon */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[7px] cursor-pointer p-2 mt-1 group"
              aria-label="Open menu"
            >
              <span className="block w-[40px] h-[2px] bg-white transition-all group-hover:w-[34px]" />
              <span className="block w-[40px] h-[2px] bg-white" />
              <span className="block w-[40px] h-[2px] bg-white transition-all group-hover:w-[29px]" />
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div className={`fixed  left-0 right-0 bottom-0 h-[100%] bg-[#3E3E3E] z-[99] pt-[70px] px-[88px] transition-all duration-500 ease-in-out  ${
            open ? "top-0" : "-top-[200%]"
          }`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-start">
                    <div className="image">
                      <Link href="/" className="inline-block">
                        <Image src={Logo} alt="Logo image" width={132} height={130} />
                      </Link>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-[#C4C4C4] text-[20px] leading-none hover:text-[#bfaf9d] transition-colors flex items-center"
                    >
                      ✕ <span className="inline-block pl-[10px] text-[12px]">MENU</span>
                    </button>
                </div>                
                {/* Nav links */}
                <ul className="pt-[70px] ">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`font-antic text-[36px] mb-[20px] inline-block leading-tight transition-colors hover:text-[#bfaf9d] ${
                          pathname === link.href ? "text-[#bfaf9d]" : "text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>                                 
            </div>
        </div>        
      </header>
    </>
  );
}
