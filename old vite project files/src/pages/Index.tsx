import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import StickyButton from '@/components/StickyButton';
import AdvancedStickyButton from '@/components/AdvancedStickyButton';
import HeroSection from '@/components/SoftwareHouse/HeroSection';
import FeaturedInsightsSection from '@/components/SoftwareHouse/FeaturedInsightsSection';
import ServicesSection from '@/components/SoftwareHouse/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/SoftwareHouse/TestimonialsSection';
import CaseStudiesSection from '@/components/SoftwareHouse/CaseStudiesSection';
import TeamSection from '@/components/SoftwareHouse/TeamSection';
import FAQSection from '@/components/SoftwareHouse/FAQSection';
import GearsBackground from '@/components/GearsBackground';
import TechStackSection from '@/components/SoftwareHouse/TechStackSection';
import PartnersSection from '@/components/SoftwareHouse/PartnersSection';
import BlogCarouselSection from '@/components/SoftwareHouse/BlogCarouselSection';
import GallerySection from '@/components/SoftwareHouse/GallerySection';
import MetricsSection from '@/components/SoftwareHouse/MetricsSection';
import ProcessSection from '@/components/SoftwareHouse/ProcessSection';
import PricingSection from '@/components/SoftwareHouse/PricingSection';
import TimelineSection from '@/components/SoftwareHouse/TimelineSection';
import AwardsSection from '@/components/SoftwareHouse/AwardsSection';
import CareersSection from '@/components/SoftwareHouse/CareersSection';
import AnimatedBorderDemo from '@/components/ui/animated-border-demo';
import { useStickyHeroAnimation } from '@/hooks/useStickyHeroAnimation';
import { useMorphismAnimation } from '@/hooks/useMorphismAnimation';
import CarouselSection from '@/components/SoftwareHouse/CarouselSection';
import GlowingCardsDemo from '@/components/SoftwareHouse/GlowingCardsDemo';
const Index = () => {
  const { heroRef, sectionsRef } = useStickyHeroAnimation();
  const { featuredInsightsRef, servicesRef } = useMorphismAnimation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      {/* <ScrollProgress /> */}
      <AdvancedStickyButton 
        text="Let's Talk Business"
        mobileText="Contact"
        scrollBehavior="fixed"
        colorScheme="rosewood"
        onClick={() => {
          // Scroll to contact section
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <Navigation />
      <main>
        {/* Hero Section - Will stay sticky */}
        <section ref={heroRef} className="relative h-screen overflow-hidden bg-background">
          {/* <GearsBackground /> */}
          <HeroSection />
        </section>
        
        {/* All other sections - Will slide over hero */}
        <div ref={sectionsRef} className="relative z-20 bg-background min-h-screen">
          <div ref={featuredInsightsRef}>
            <FeaturedInsightsSection />
          </div>
          <div ref={servicesRef}>
            <ServicesSection />
          </div>
          <CarouselSection />
          {/* <GlowingCardsDemo /> */}
          <TechStackSection />
          {/* <PartnersSection /> */}
          <MetricsSection />
          <ProcessSection />
          <PricingSection />
          <TimelineSection />
          <div id="portfolio">
            <ProjectsSection />
          </div>
          <GallerySection />
          <TestimonialsSection />
          <CaseStudiesSection />
          <TeamSection />
          <BlogCarouselSection />
          <AwardsSection />
          <AboutSection />
          <FAQSection />
          <CareersSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
