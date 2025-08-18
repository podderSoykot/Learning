import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { PricingSection } from "@/components/pricing-section";
import { BlogSection } from "@/components/blog-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <Header />

      <main className="w-full">
        <HeroSection />

        {/* Features inside container */}
        <Container>
          <FeaturesSection />
        </Container>

        {/* Sections outside container */}
        <HowItWorks />
        <WhyChoose />
        <Testimonials />

        {/* Remaining sections inside container */}
        <Container>
          <PricingSection />
          <BlogSection />
          <FAQSection />
          <CTASection />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
