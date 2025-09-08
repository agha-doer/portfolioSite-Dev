'use client';

import { useEffect } from 'react';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';

import AdvancedStickyButton from './components/AdvancedStickyButton';
import HeroSection from './components/SoftwareHouse/HeroSection';
import FeaturedInsightsSection from './components/SoftwareHouse/FeaturedInsightsSection';
import ServicesSection from './components/SoftwareHouse/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FAQSection from './components/SoftwareHouse/FAQSection';
import TechStackSection from './components/SoftwareHouse/TechStackSection';
import GallerySection from './components/SoftwareHouse/GallerySection';
import MetricsSection from './components/SoftwareHouse/MetricsSection';
import ProcessSection from './components/SoftwareHouse/ProcessSection';
import TimelineSection from './components/SoftwareHouse/TimelineSection';
import { useStickyHeroAnimation } from './hooks/useStickyHeroAnimation';
import { useMorphismAnimation } from './hooks/useMorphismAnimation';
import CarouselSection from './components/SoftwareHouse/CarouselSection';
import { SparkleParticles } from './components/SparkleParticles';
import CodeBlockSection from './components/CodeBlockSection';
import ThreeDImageRingGallery from './components/3DImageRingGallery';

export default function Home() {
  const { heroRef, sectionsRef } = useStickyHeroAnimation();
  const { featuredInsightsRef, servicesRef } = useMorphismAnimation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.overflowX = 'auto';
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background font-body overflow-x-hidden overflow-y-hidden">
      {/* <ScrollProgress /> */}
      <AdvancedStickyButton 
        text="Let's Talk Business"
        mobileText="Contact"
        scrollBehavior="fixed"
        colorScheme="rosewood"
        onClick={() => {
          // Scroll to contact section
          if (typeof window !== 'undefined') {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      <Navigation />
      <main>
        {/* Hero Section - Will stay sticky */}
        <section ref={heroRef} className="relative h-screen overflow-hidden bg-background">
          {/* <GearsBackground /> */}
          {/* Sparkle Particles Background */}
          <SparkleParticles
            className="absolute inset-0"
            particleColor="#9d174d"
            maxParticleSize={2}
            baseDensity={40}
            maxSpeed={0.5}
            maxOpacity={0.3}
            enableHoverGrab={true}
            hoverMode="grab"
            clickEffect={true}
            particleShape="circle"
            enableParallax={true}
            zIndexLevel={1}
          />
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
          <TechStackSection />
          <MetricsSection />
          <ProcessSection />
          <TimelineSection />
          <div id="portfolio">
            <ProjectsSection />
          </div>
          <CodeBlockSection />
          <ThreeDImageRingGallery />
          {/* <GallerySection /> */}
          {/* <TeamSection /> */}
          <FAQSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
    </ErrorBoundary>
  );
}
