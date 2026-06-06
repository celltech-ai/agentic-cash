import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { WhatsInside } from "@/components/landing/whats-inside";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { AboutAuthor } from "@/components/landing/about-author";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <WhatsInside />
      <Features />
      <Testimonials />
      <Pricing />
      <AboutAuthor />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
