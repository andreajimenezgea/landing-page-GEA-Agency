import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBanner } from "@/components/StatsBanner";
import { LogoCloud } from "@/components/LogoCloud";
import { Problem } from "@/components/Problem";
import { Method } from "@/components/Method";
import { LeadForm } from "@/components/LeadForm";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Appearances } from "@/components/Appearances";
import { Suitability } from "@/components/Suitability";
import { Diagnosis } from "@/components/Diagnosis";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollScaleSection } from "@/components/ui/ScrollScaleSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBanner />
        <LogoCloud />
        <ScrollScaleSection>
          <Problem />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Method />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <LeadForm />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Process />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Cases />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <VideoTestimonials />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Testimonials />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Team />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Appearances />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Suitability />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <Diagnosis />
        </ScrollScaleSection>
        <ScrollScaleSection>
          <FAQ />
        </ScrollScaleSection>
      </main>
      <Footer />
    </>
  );
}
