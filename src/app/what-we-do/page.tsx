import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroBg    = "https://www.figma.com/api/mcp/asset/09bc2385-cac4-45b5-9cc2-21f5264223ff";
const leafIcon  = "https://www.figma.com/api/mcp/asset/be7d38da-e21c-41eb-8bda-9577aee6a92a";
const realEstate = "https://www.figma.com/api/mcp/asset/d6c687a5-dd92-42bc-97c2-a3e009a31e58";
const venture    = "https://www.figma.com/api/mcp/asset/0ed1a1ae-9a38-454c-aaf6-a1598dc522a1";
const growth     = "https://www.figma.com/api/mcp/asset/7212592c-5129-4a21-aafc-d0bb6e0ddc13";
const globalCap  = "https://www.figma.com/api/mcp/asset/d7ef4097-fc0b-4f75-858c-fac4a2953def";

const cards = [
  {
    title: "Real Estate",
    image: realEstate,
    desc: "From sustainable residential developments to landmark commercial properties, we invest in real estate that creates enduring communities and long-term value.",
  },
  {
    title: "Venture Capital",
    image: venture,
    desc: "We back ambitious founders at the forefront of technology, healthcare, and consumer sectors, providing patient capital and strategic guidance to accelerate growth.",
  },
  {
    title: "Growth Capital",
    image: growth,
    desc: "Our growth equity investments support established businesses seeking to scale, expand into new markets, or transform their operations with the right capital partner.",
  },
  {
    title: "Global Capital Markets",
    image: globalCap,
    desc: "We manage diversified public market portfolios, leveraging global macroeconomic insight to generate risk-adjusted returns across equity, fixed income, and alternatives.",
  },
];

export const metadata = {
  title: "What We Do — Hayaat Group",
};

export default function WhatWeDoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[760px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <Navbar />
        <div className="absolute bottom-[15%] left-[13%]">
          <h1 className="font-antic text-white leading-[1.1]">
            <span className="block text-[52px] lg:text-[64px]">Global Investment</span>
            <span className="block text-[52px] lg:text-[64px]">Partnerships</span>
          </h1>
        </div>
      </section>

      {/* Intro text */}
      <section className="bg-[#6b6355] py-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
          <div className="flex gap-8 items-start">
            <img src={leafIcon} alt="" className="w-10 flex-shrink-0 mt-1" />
            <div className="text-[#bfaf9d] font-light text-[16px] leading-[1.9] max-w-[860px] space-y-5">
              <p>
                At Hayaat Group, we deploy patient, principal capital across a diversified platform
                of investments — from building communities to backing ideas, scaling businesses,
                and managing global portfolios. Our approach is long-term, disciplined, and informed
                by deep sector experience and macroeconomic perspective.
              </p>
              <p>
                We invest across four core areas: real estate, venture capital, growth equity, and
                global capital markets. Each area reflects our belief in high-conviction investing,
                strategic alignment with partners, and the pursuit of value that compounds over time.
                Our strategy focuses on combining the Hayaat DNA — our core values, strengths, and
                passionate teams.
              </p>
              <p>
                As active operators or long-term capital partners, we bring a combination of agility
                and structure to every investment. What unites our work across sectors is a shared
                commitment to thoughtful deployment, strong governance, and creating outcomes that
                endure beyond market cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment pillars carousel */}
      <section className="bg-[#3d3830] py-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
          <div className="flex flex-wrap gap-6 overflow-x-auto pb-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group flex-shrink-0 relative overflow-hidden"
                style={{ width: "260px", height: "340px" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-antic text-white text-xl mb-2">{card.title}</p>
                  <p className="text-white/70 font-light text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex justify-between mt-8">
            <button className="w-9 h-9 rounded-full border border-[#bfaf9d]/50 flex items-center justify-center text-[#bfaf9d] hover:border-[#bfaf9d] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="w-9 h-9 rounded-full border border-[#bfaf9d]/50 flex items-center justify-center text-[#bfaf9d] hover:border-[#bfaf9d] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
