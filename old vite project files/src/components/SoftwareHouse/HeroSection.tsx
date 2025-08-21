import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap, Shield, Rocket } from 'lucide-react';
import { useParallax } from '@/hooks/useScrollAnimation';
import ParticleBackground from '@/components/ParticleBackground';
import ImageMask from '@/components/ImageMask';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);

  const features = [
    { icon: Code, text: 'Modern Tech Stack' },
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Shield, text: 'Enterprise Grade' },
    { icon: Rocket, text: 'Scalable Solutions' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <ParticleBackground />
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rosewood-800/20 to-carmine-800/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-auburn-800/30 to-burgundy-900/30 rounded-full blur-lg"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-cardinal-700/25 to-rosewood-800/25 rounded-full blur-md"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orbiting particles */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? '#9d174d' : '#991b1b',
                left: `${10 + i * 10}%`,
                top: `${(i % 2 === 0 ? 30 : 60)}%`,
                boxShadow: '0 0 20px rgba(157, 23, 77, 0.5)'
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            {/* Main Headline */}
            <motion.h1
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-gray-900">Build</span>
              <br />
              <span className="text-gradient-animated">Amazing</span>
              <br />
              <span className="text-gray-900">Software</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We craft exceptional digital experiences with cutting-edge technology 
              and innovative design. From concept to deployment, we bring your 
              vision to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="btn-crazy relative px-8 py-4 rounded-xl font-semibold text-lg shadow-bold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Navigate to contact page
                  window.location.href = '/contact';
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  const rect = el.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const percentX = Math.max(0, Math.min(1, x / rect.width)) * 100
                  el.style.setProperty('--mx', `${percentX}%`)
                }}
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="btn-shine" />
                <span className="btn-glow" />
              </motion.button>
              <motion.button
                className="btn-crazy-outline relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Scroll to portfolio section
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  const rect = el.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const percentX = Math.max(0, Math.min(1, x / rect.width)) * 100
                  el.style.setProperty('--mx', `${percentX}%`)
                }}
              >
                <span className="relative z-10">View Portfolio</span>
                <span className="btn-shine" />
                <span className="btn-glow" />
              </motion.button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="pill-animated flex items-center space-x-2 px-4 py-2 rounded-full shadow-soft"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-5 h-5 text-rosewood-800" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))} */}

{features.map((feature, index) => (
  <motion.div
    key={feature.text}
    className="group pill-animated flex items-center space-x-2 px-4 py-2 rounded-full shadow-soft"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <feature.icon className="w-5 h-5 text-rosewood-800 group-hover:text-white transition-colors duration-200" />
    <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors duration-200">
      {feature.text}
    </span>
  </motion.div>
))}

            </motion.div>
          </div>

          {/* Image Mask Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <ImageMask className="h-96">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    }}
                  >
                    <Code className="w-16 h-16 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-display text-white mb-2">Innovation Hub</h3>
                  <p className="text-white/80">Where ideas become reality</p>
                </div>
              </div>
            </ImageMask>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;