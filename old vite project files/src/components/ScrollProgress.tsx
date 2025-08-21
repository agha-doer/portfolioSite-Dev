import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-primary origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;