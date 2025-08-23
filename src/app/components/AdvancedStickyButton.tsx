import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface AdvancedStickyButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  mobileText?: string;
  showOnMobile?: boolean;
  scrollBehavior?: 'follow' | 'fixed' | 'parallax';
  startPosition?: number;
  endPosition?: number;
  colorScheme?: 'rosewood' | 'carmine' | 'auburn' | 'burgundy' | 'cardinal' | 'custom';
  customColors?: {
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
  };
}

const AdvancedStickyButton = ({ 
  text = "Let's Talk Business", 
  onClick,
  className = "",
  mobileText = "Contact",
  showOnMobile = true,
  scrollBehavior = 'fixed',
  startPosition = 0,
  endPosition = 0,
  colorScheme = 'rosewood',
  customColors
}: AdvancedStickyButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dynamicEndPosition, setDynamicEndPosition] = useState(endPosition);
  const buttonRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Initialize endPosition and check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        // Set dynamic endPosition if it's the default value
        if (endPosition === 0) {
          setDynamicEndPosition(window.innerHeight - 100);
        }
      }
    };
    
    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [endPosition]);

  // Get color scheme
  const getColorScheme = () => {
    if (customColors || colorScheme === 'custom') {
      return {
        from: customColors?.from || 'from-rosewood-600',
        to: customColors?.to || 'to-rosewood-800',
        hoverFrom: customColors?.hoverFrom || 'hover:from-rosewood-700',
        hoverTo: customColors?.hoverTo || 'hover:to-rosewood-900'
      };
    }

    const schemes = {
      rosewood: {
        from: 'from-rosewood-600',
        to: 'to-rosewood-800',
        hoverFrom: 'hover:from-rosewood-700',
        hoverTo: 'hover:to-rosewood-900'
      },
      carmine: {
        from: 'from-carmine-600',
        to: 'to-carmine-800',
        hoverFrom: 'hover:from-carmine-700',
        hoverTo: 'hover:to-carmine-900'
      },
      auburn: {
        from: 'from-auburn-600',
        to: 'to-auburn-800',
        hoverFrom: 'hover:from-auburn-700',
        hoverTo: 'hover:to-auburn-900'
      },
      burgundy: {
        from: 'from-burgundy-600',
        to: 'to-burgundy-800',
        hoverFrom: 'hover:from-burgundy-700',
        hoverTo: 'hover:to-burgundy-900'
      },
      cardinal: {
        from: 'from-cardinal-600',
        to: 'to-cardinal-700',
        hoverFrom: 'hover:from-cardinal-700',
        hoverTo: 'hover:to-cardinal-800'
      }
    };

    return schemes[colorScheme as keyof typeof schemes];
  };

  const colors = getColorScheme();

  // Create transforms based on scroll behavior
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  
  // Create all possible y transforms
  const yFollow = useTransform(scrollYProgress, [0, 1], [startPosition, dynamicEndPosition]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -(typeof window !== 'undefined' ? window.innerHeight * 0.5 : 0)]);
  
  // Select the appropriate y transform based on scroll behavior
  let y;
  switch (scrollBehavior) {
    case 'follow':
      y = yFollow;
      break;
    case 'fixed':
      y = 0;
      break;
    case 'parallax':
      y = yParallax;
      break;
    default:
      y = 0;
      break;
  }

  // Don't render on mobile if showOnMobile is false
  if (isMobile && !showOnMobile) {
    return null;
  }

  return (
    <>
      {/* Desktop Advanced Sticky Button */}
      <motion.div
        ref={buttonRef}
        className={`fixed top-1/2 right-0 z-40 hidden md:block ${className}`}
        style={{
          width: '7%',
          y: y,
          opacity: opacity,
          scale: scale
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
<motion.button
  className={`bg-gradient-primary text-white font-semibold py-4 px-3 rounded-full shadow-lg whitespace-nowrap transition-all duration-300 border border-opacity-20`}
  // className={`bg-gradient-to-b ${colors.from} ${colors.to} ${colors.hoverFrom} ${colors.hoverTo} text-white font-semibold py-4 px-3 rounded-full shadow-lg whitespace-nowrap transition-all duration-300 border border-opacity-20`}
  style={{
    textOrientation: "upright",   // keeps letters upright
    transform: "rotate(270deg)"   // flips so it reads bottom-to-top
  }}
  onClick={onClick}
  // onMouseLeave={() => setIsHovered(false)}
  // whileTap={{ scale: 0.95 }}
>
  <motion.span
    animate={{ 
      x: isHovered ? 2 : 0,
      transition: { duration: 0.2 }
    }}
  >
    {text}
  </motion.span>
</motion.button>

      </motion.div>

      {/* Mobile Advanced Sticky Button */}
      {showOnMobile && (
        <motion.div
          className={`fixed bottom-4 right-4 z-40 md:hidden ${className}`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className={`bg-gradient-to-b ${colors.from} ${colors.to} ${colors.hoverFrom} ${colors.hoverTo} text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 border border-opacity-20`}
            onClick={onClick}
                      whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(219, 39, 119, 0.3)"
          }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileText}
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default AdvancedStickyButton;
