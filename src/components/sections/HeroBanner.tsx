import Navbar from "@/components/Navbar";

// Hero background image from Figma
const heroBgImage =
  "https://www.figma.com/api/mcp/asset/09bc2385-cac4-45b5-9cc2-21f5264223ff";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[810px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Text */}
      <div className="absolute bottom-[22%] left-[17.5%]">
        <h1 className="font-antic-didone text-white leading-tight">
          <span className="block text-[72px] md:text-[80px]">
            Global Investment
          </span>
          <span className="block text-[72px] md:text-[80px]">Partnerships</span>
        </h1>
      </div>
    </section>
  );
}
