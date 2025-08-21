import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useMorphismAnimation = () => {
  const featuredInsightsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!featuredInsightsRef.current || !servicesRef.current) return;

    const featuredInsights = featuredInsightsRef.current;
    const services = servicesRef.current;

    // Create morphism timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: services,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      }
    });

    // Morphism effect - FeaturedInsights transforms into Services
    tl.to(featuredInsights, {
      scale: 0.95,
      opacity: 0.7,
      filter: 'blur(2px)',
      ease: 'power2.out',
      duration: 0.5
    }, 0)
    .to(services, {
      scale: 1.05,
      opacity: 1,
      filter: 'blur(0px)',
      ease: 'power2.out',
      duration: 0.5
    }, 0.2)
    .to(featuredInsights, {
      y: -50,
      ease: 'power2.out',
      duration: 0.3
    }, 0)
    .to(services, {
      y: 0,
      ease: 'power2.out',
      duration: 0.3
    }, 0.2);

    // Add glass morphism effect
    tl.to(featuredInsights, {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      ease: 'power2.out',
      duration: 0.4
    }, 0.1)
    .to(services, {
      backdropFilter: 'blur(0px)',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: '1px solid rgba(255, 255, 255, 0)',
      ease: 'power2.out',
      duration: 0.4
    }, 0.3);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { featuredInsightsRef, servicesRef };
};
