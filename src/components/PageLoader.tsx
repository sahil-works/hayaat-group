"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [hidePreloader, setHidePreloader] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const timer1 = setTimeout(() => {
      setShowLoadingText(false);
      setShowLogo(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setHidePreloader(true);

      setTimeout(() => {
        if (typeof window !== "undefined") {
          document.body.style.overflow = "";
        }
        if (typeof onFinish === "function") {
          onFinish();
        }
      }, 1000);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [onFinish]);

  return (
    <div
      className={` bg-black fixed inset-0 z-[9999] themeColor text-white flex flex-col items-center justify-center transition-transform duration-1500 ease-in-out ${
        hidePreloader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {showLoadingText && (
        <div className="flex items-end space-x-2 text-lg font-semibold text-white animate-fade-in">
          <span className="inline-block text-[24px] font-medium leading-[1] uppercase tracking-[10px]">
            Loading
          </span>
          <div className="flex space-x-1">
            {/* <span className="h-[8px] w-[8px] bg-white rounded-full animate-bounce [animation-delay:0ms]"></span>
            <span className="h-[8px] w-[8px] bg-white rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="h-[8px] w-[8px] bg-white rounded-full animate-bounce [animation-delay:300ms]"></span> */}
          </div>
        </div>
      )}
      {showLogo && (
        <Image
          src="/assets/images/logo.png"
          alt="logo image"
          width="100"
          height="100"
          className="animate-fade-in"
        />
      )}
    </div>
  );
};

export default Loader;
