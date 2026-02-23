import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroBg = "https://www.figma.com/api/mcp/asset/09bc2385-cac4-45b5-9cc2-21f5264223ff";

export const metadata = { title: "News — Hayaat Group" };

export default function NewsPage() {
  return (
    <main>
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="absolute inset-0 bg-black/50" />
        <Navbar />
        <div className="absolute bottom-[15%] left-[13%]">
          <h1 className="font-antic text-white text-[52px] lg:text-[64px] leading-tight">News</h1>
        </div>
      </section>
      <section className="bg-[#6b6355] py-20 min-h-[300px] flex items-center justify-center">
        <p className="text-[#bfaf9d] font-light text-lg">News articles coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
