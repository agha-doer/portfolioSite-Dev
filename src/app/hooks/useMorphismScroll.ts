'use client';

import { useState, useEffect } from 'react';

interface UseMorphismScrollProps {
  sections: number;
  threshold?: number;
}

export const useMorphismScroll = ({ sections, threshold = 0.5 }: UseMorphismScrollProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialized, setIsInitialized] = useState(true); // Start as initialized
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Determine scroll direction
      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else if (scrollTop < lastScrollTop) {
        setScrollDirection('up');
      }
      lastScrollTop = scrollTop;
      
      // Calculate total scrollable area
      const totalScrollable = documentHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / totalScrollable, 1);
      setScrollProgress(progress);
      
      // Calculate which section should be active
      const sectionHeight = totalScrollable / sections;
      let newActiveSection = Math.floor(scrollTop / sectionHeight);
      
      // Add some threshold to prevent rapid switching
      const threshold = sectionHeight * 0.1; // 10% of section height
      const adjustedScrollTop = scrollTop + threshold;
      newActiveSection = Math.floor(adjustedScrollTop / sectionHeight);
      
      // Ensure we don't go below 0 or above sections-1
      newActiveSection = Math.max(0, Math.min(newActiveSection, sections - 1));
      
      setActiveSection(newActiveSection);
      setIsInitialized(true);
      
      // Debug logging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log('Scroll Debug:', {
          scrollTop,
          totalScrollable,
          sectionHeight,
          newActiveSection,
          sections,
          isInitialized,
          scrollDirection
        });
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Initial call to set up the scroll state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [sections]);

  return {
    activeSection,
    scrollProgress,
    scrollDirection,
    isSectionActive: (index: number) => activeSection === index,
    getSectionOpacity: (index: number) => {
      // Before initialization, only show the first section
      if (!isInitialized) {
        return index === 0 ? 1 : 0;
      }
      
      // Only show the active section, hide all others
      return index === activeSection ? 1 : 0;
    },
    getSectionZIndex: (index: number) => {
      // Before initialization, only the first section should be visible
      if (!isInitialized) {
        return index === 0 ? 20 : 1;
      }
      
      // Only the active section should be on top
      return index === activeSection ? 20 : 1;
    },
    getSectionTransform: (index: number) => {
      // Before initialization, only the first section should be visible
      if (!isInitialized) {
        return index === 0 ? { y: 0, scale: 1 } : { y: 0, scale: 1 };
      }
      
      const isActive = index === activeSection;
      const isPrevious = index === activeSection - 1;
      const isNext = index === activeSection + 1;
      
      if (isActive) {
        return { y: 0, scale: 1 };
      } else if (isPrevious) {
        // Previous section fades out downward when scrolling up, upward when scrolling down
        return { 
          y: scrollDirection === 'up' ? 30 : -30, 
          scale: 0.95 
        };
      } else if (isNext) {
        // Next section fades out upward when scrolling down, downward when scrolling up
        return { 
          y: scrollDirection === 'down' ? -30 : 30, 
          scale: 0.95 
        };
      } else {
        return { y: 0, scale: 0.98 };
      }
    }
  };
};
