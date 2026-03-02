import type { Metadata } from "next";
import "./globals.css";
import "./font.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hayaat Group",
    template: "%s | Hayaat Group",
  },
  description:
    "Global Investment Partnerships — Real Estate, Venture Capital, Growth Equity, Capital Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
