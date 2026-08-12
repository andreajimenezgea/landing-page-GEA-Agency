import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Solutions } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { Team } from "@/components/Team";
import { Comparison } from "@/components/Comparison";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Solutions />
        <Features />
        <Team />
        <Comparison />
        <VideoTestimonials />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
