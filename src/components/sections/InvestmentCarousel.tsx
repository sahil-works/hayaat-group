"use client";

import { useRef, useState } from "react";

// Investment category images from Figma
const realEstateImg =
  "https://www.figma.com/api/mcp/asset/d6c687a5-dd92-42bc-97c2-a3e009a31e58";
const ventureCapitalImg =
  "https://www.figma.com/api/mcp/asset/0ed1a1ae-9a38-454c-aaf6-a1598dc522a1";
const growthCapitalImg =
  "https://www.figma.com/api/mcp/asset/7212592c-5129-4a21-aafc-d0bb6e0ddc13";
const globalCapitalImg =
  "https://www.figma.com/api/mcp/asset/d7ef4097-fc0b-4f75-858c-fac4a2953def";

const cards = [
  { title: "Real Estate", image: realEstateImg },
  { title: "Venture Capital", image: ventureCapitalImg },
  { title: "Growth Capital", image: growthCapitalImg },
  { title: "Global Capital Markets", image: globalCapitalImg },
];

export default function InvestmentCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]
        ? (trackRef.current.children[0] as HTMLElement).offsetWidth + 16
        : 349;
      trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
    }
  };

  const handlePrev = () => scrollTo(currentIndex - 1);
  const handleNext = () => scrollTo(currentIndex + 1);

  return (
    <section className="bg-[#6b6355] py-14">
      <div className="max-w-[1103px] mx-auto px-4 relative">
        {/* Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-hidden carousel-track"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="carousel-item flex-shrink-0 relative overflow-hidden rounded-sm"
              style={{ width: "332px", height: "386px" }}
            >
              {/* Background image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Title */}
              <p className="absolute bottom-6 left-6 font-antic-didone text-white text-[26px] leading-tight z-10">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 px-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-[#bfaf9d] flex items-center justify-center text-[#bfaf9d] hover:bg-[#bfaf9d] hover:text-[#3d3830] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="w-10 h-10 rounded-full border border-[#bfaf9d] flex items-center justify-center text-[#bfaf9d] hover:bg-[#bfaf9d] hover:text-[#3d3830] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
