import { motion } from 'framer-motion';

interface SampleImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

const SampleImage = ({ src, alt, className = '', overlay = false }: SampleImageProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
      {overlay && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Very subtle hover effect that enhances the image */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SampleImage;
