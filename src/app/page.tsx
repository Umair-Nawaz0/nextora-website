import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Solutions from "@/components/Solutions";
import Engineering from "@/components/Engineering";
import WhyNextora from "@/components/WhyNextora";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col">
      {/* Sticky navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* What We Do / Core Services */}
        <WhatWeDo />

        {/* Our Solutions */}
        <Solutions />

        {/* Proven Engineering & Founder Leadership */}
        <Engineering />

        {/* Why Choose Nextora */}
        <WhyNextora />

        {/* How We Work / Process Timeline */}
        <Process />

        {/* Industries We Serve */}
        <Industries />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
