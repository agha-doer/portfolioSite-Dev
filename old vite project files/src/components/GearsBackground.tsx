import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Settings } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

const Gear: React.FC<{
  size: number;
  top: string;
  left?: string;
  right?: string;
  opacity?: string;
  rotateFactor?: number; // degrees per progress unit
}> = ({ size, top, left, right, opacity = 'opacity-20', rotateFactor = 8 }) => {
  const progress = useScrollProgress(); // 0..100
  const rotation = progress * rotateFactor; // degrees

  return (
    <motion.div
      className={`absolute ${opacity} text-crimson`}
      style={{ top, left, right, rotate: rotation }}
      aria-hidden="true"
    >
      <Cog size={size} className="drop-shadow-sm" />
    </motion.div>
  );
};

const GearsBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Top-left small gear */}
      <Gear size={64} top="8%" left="4%" opacity="opacity-15" rotateFactor={6} />
      {/* Top-right big gear */}
      <Gear size={128} top="10%" right="6%" opacity="opacity-10" rotateFactor={10} />
      {/* Mid-left gear */}
      <Gear size={96} top="45%" left="-2%" opacity="opacity-10" rotateFactor={7} />
      {/* Bottom-right gear */}
      <Gear size={72} top="70%" right="8%" opacity="opacity-20" rotateFactor={9} />
      {/* Center subtle gear overlay */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-crimson/5"
        style={{ rotate: useScrollProgress() * 4 }}
        aria-hidden
      >
        <Settings size={220} />
      </motion.div>
    </div>
  );
};

export default GearsBackground;
