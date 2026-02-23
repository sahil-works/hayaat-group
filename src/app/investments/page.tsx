import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const heroBg   = "https://www.figma.com/api/mcp/asset/d6c687a5-dd92-42bc-97c2-a3e009a31e58";
const leafIcon = "https://www.figma.com/api/mcp/asset/be7d38da-e21c-41eb-8bda-9577aee6a92a";
const img1     = "https://www.figma.com/api/mcp/asset/7212592c-5129-4a21-aafc-d0bb6e0ddc13";
const img2     = "https://www.figma.com/api/mcp/asset/0ed1a1ae-9a38-454c-aaf6-a1598dc522a1";
const folio1   = "https://www.figma.com/api/mcp/asset/d7ef4097-fc0b-4f75-858c-fac4a2953def";
const folio2   = "https://www.figma.com/api/mcp/asset/d6c687a5-dd92-42bc-97c2-a3e009a31e58";
const folio3   = "https://www.figma.com/api/mcp/asset/7212592c-5129-4a21-aafc-d0bb6e0ddc13";

const subNavItems = ["Project Development", "Property Management", "Asset Management"];

const relatedFolio = [
  { title: "Al Hayaat Luxury Villas",  location: "UAE",  image: folio1 },
  { title: "The Green, Bradford",      location: "UK",   image: folio2 },
  { title: "Hayaat Business Park",     location: "KSA",  image: folio3 },
];

export const metadata = {
  title: "Investments — Hayaat Group",
};

export default function InvestmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[760px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/65" />
        <Navbar />
        <div className="absolute bottom-[12%] left-[13%]">
          <h1 className="font-antic text-white text-[52px] lg:text-[64px] leading-tight">Real Estate</h1>
        </div>
      </section>

      {/* Sub-nav */}
      <section className="bg-[#6b6355]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20 py-6">
          <div className="flex flex-wrap gap-3">
            {subNavItems.map((item, i) => (
              <button
                key={item}
                className={`px-5 py-2 text-sm font-light tracking-wide border transition-colors ${
                  i === 0
                    ? "border-[#bfaf9d] text-[#3d3830] bg-[#bfaf9d]"
                    : "border-[#bfaf9d]/50 text-[#bfaf9d] hover:border-[#bfaf9d]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Body intro */}
      <section className="bg-[#6b6355] py-16">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
          <div className="flex gap-8 items-start">
            <img src={leafIcon} alt="" className="w-10 flex-shrink-0 mt-1" />
            <div className="text-[#bfaf9d] font-light text-[16px] leading-[1.9] max-w-[680px] space-y-4">
              <p>
                The Hayaat Group invests in high-value opportunities across the real estate sector: from
                development to investment asset management, structuring and capital management. As a
                foundational pillar of our portfolio, the focus is on locations and opportunities that offer
                durable value, rooted in strategic insight, disciplined execution, and aligned partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature project */}
      <section className="bg-[#3d3830] py-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: image + caption */}
            <div>
              <div className="overflow-hidden mb-3" style={{ height: "320px" }}>
                <img src={img1} alt="The Green" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#bfaf9d]/70 font-light text-xs leading-relaxed">
                Showcase: The Green, Sustainable student village (SSV)<br />
                Location: On campus, University of Bradford (UoB), UK<br />
                Location: 2010
              </p>
            </div>

            {/* Right: text */}
            <div className="text-[#bfaf9d] font-light text-[15px] leading-[1.9] space-y-4">
              <p>
                At the Hayaat Group, our investment strategy is guided by generational enterprise and
                time-tested expertise. We function as principal investor across thoughtfully diversified
                areas, balancing active capital deployment in strategic ventures with disciplined
                stewardship of long-term assets. These focus areas reflect our progressive approach, and
                our exciting vision for the future.
              </p>
            </div>
          </div>

          {/* Long description */}
          <div className="mt-12 text-[#bfaf9d] font-light text-[15px] leading-[1.9] space-y-5">
            <p>
              Hayaat Group was invited by the University of Bradford to develop The Green, an innovative
              1,039-bed on-campus sustainable residential complex. The result was the UK&apos;s largest
              single-phase development of bed spaces ever attempted, completed in a record timeline of just
              84 weeks following the purchase of more than 20 acres of land in Bradford City Centre by the
              Group. This project was delivered on a very tight budget, and in time, despite an economic
              downturn that brought many of the UK&apos;s major developments to a halt.
            </p>
            <p>
              The Green remains a flagship project for the Hayaat Group, winning multiple awards for
              building sustainability, and securing our status as a key player in the £750million development
              of the Learning Quarter in Bradford City Centre, in partnership with Bradford Council. Among
              its many accolades, The Green was the first multi-residential building in the UK to achieve
              the BREEAM sustainability assessment &apos;outstanding&apos; rating, as well as the country&apos;s highest
              ever score of 90.09%. It is now seen as the benchmark in sustainable construction.
            </p>
          </div>
        </div>
      </section>

      {/* Related Folio */}
      <section className="bg-[#6b6355] py-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
          <h2 className="font-antic text-white text-[36px] lg:text-[44px] mb-10">Related Folio</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedFolio.map((item) => (
              <Link key={item.title} href="#" className="group block">
                <div className="overflow-hidden mb-3" style={{ height: "220px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-antic text-white text-lg group-hover:text-[#bfaf9d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#bfaf9d]/70 font-light text-xs mt-1">{item.location}</p>
              </Link>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex justify-between mt-8">
            <button className="flex items-center gap-2 text-[#bfaf9d] font-light text-sm hover:opacity-70 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
              Al Hayaat Luxury Villa
            </button>
            <button className="flex items-center gap-2 text-[#bfaf9d] font-light text-sm hover:opacity-70 transition-opacity">
              Next Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
