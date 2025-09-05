import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useStickyHeroAnimation = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!heroRef.current || !sectionsRef.current) return;
  
      const hero = heroRef.current;
      const sections = sectionsRef.current;
  
      // Start sections below hero (offscreen)
      gsap.set(sections, { y: '100vh' });
  
      // Scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,        // trigger on hero
          start: 'top top',
          end: '+=100%',        // scroll distance
          scrub: true,
          pin: hero,            // pin hero
          pinSpacing: false,    // no extra space below
          markers: false,
        }
      });
  
      // Animate sections sliding up over hero
      tl.to(sections, {
        y: 0,
        ease: 'none',
      });
  
      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
  
    return { heroRef, sectionsRef };
  };
  