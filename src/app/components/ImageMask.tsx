import { motion } from 'framer-motion';

interface ImageMaskProps {
  className?: string;
  children?: React.ReactNode;
}

const ImageMask = ({ className = '', children }: ImageMaskProps) => {

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(157, 23, 77, 0.1) 0%,
            rgba(153, 27, 27, 0.05) 50%,
            rgba(146, 64, 14, 0.1) 100%
          )
        `,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-rosewood-400 to-carmine-400 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-10 right-10 w-8 h-8 border-2 border-rosewood-300/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-6 h-6 border-2 border-carmine-300/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-auburn-300/30 rotate-45"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>



      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 0%, 
              rgba(157, 23, 77, 0.1) 25%, 
              rgba(153, 27, 27, 0.1) 50%, 
              rgba(146, 64, 14, 0.1) 75%, 
              transparent 100%
            )
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ImageMask;
