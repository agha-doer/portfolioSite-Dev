import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StickyButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  mobileText?: string;
  showOnMobile?: boolean;
}

const StickyButton = ({ 
  text = "Let's Talk Business", 
  onClick,
  className = "",
  mobileText = "Contact",
  showOnMobile = true
}: StickyButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Transform scroll progress to button position
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight - 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  // Don't render on mobile if showOnMobile is false
  if (isMobile && !showOnMobile) {
    return null;
  }

  return (
    <>
      {/* Desktop Sticky Button */}
      <motion.div
        className={`fixed left-4 z-40 hidden md:block ${className}`}
        style={{
          y: yTransform,
          opacity,
          scale
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          className="bg-gradient-to-b from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform -rotate-90 origin-center whitespace-nowrap transition-all duration-300 border border-teal-400/20"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ 
              x: isHovered ? 5 : 0,
              transition: { duration: 0.2 }
            }}
          >
            {text}
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Mobile Sticky Button */}
      {showOnMobile && (
        <motion.div
          className={`fixed bottom-4 right-4 z-40 md:hidden ${className}`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className="bg-gradient-to-b from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 border border-teal-400/20"
            onClick={onClick}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)"
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

export default StickyButton;
