import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';
import Galaxy from '../ui/Galaxy';

const metrics = [
  { label: 'Projects Delivered', value: '120+', icon: Star },
  { label: 'Avg. Time to MVP', value: '6-8 weeks', icon: Zap },
  { label: 'Client NPS', value: '72', icon: Star },
  { label: 'Uptime on Managed Apps', value: '99.95%', icon: Zap },
];

const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    margin: "-100px 0px -100px 0px" 
  });

  return (
    <section ref={sectionRef} id="metrics" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Optimized Galaxy Background - Only render when in view */}
      {isInView && (
        <div className="absolute inset-0 opacity-20">
          <Galaxy 
            density={0.6}
            hueShift={240}
            glowIntensity={0.2}
            saturation={0.2}
            twinkleIntensity={0.3}
            rotationSpeed={0.02}
            mouseInteraction={false}
            transparent={true}
            speed={0.5}
            disableAnimation={!isInView}
          />
        </div>
      )}
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rosewood-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-carmine-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-auburn-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <header className="mb-16 text-center">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-gradient-primary">Track Record</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering excellence through proven results and measurable success
          </motion.p>
        </header>

        {/* Metrics Grid with Glowing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, index) => {
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2, // Each card appears 0.2s after the previous
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="group"
                >
                  <motion.div 
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-rose-500 p-8 text-center rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/20 relative overflow-hidden group perspective-1000"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 2,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* 3D Background Layers */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-rosewood-900/20 via-rosewood-800/20 to-rosewood-700/20 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(157, 23, 77, 0.2), rgba(153, 27, 27, 0.2))",
                          "linear-gradient(135deg, rgba(153, 27, 27, 0.2), rgba(157, 23, 77, 0.2))",
                          "linear-gradient(135deg, rgba(157, 23, 77, 0.2), rgba(153, 27, 27, 0.2))",
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Floating particles effect */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#9d174d] rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Animated border glow */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9d174d]/20 via-[#991b1b]/20 to-[#9d174d]/20 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(157, 23, 77, 0.2), rgba(153, 27, 27, 0.2), rgba(157, 23, 77, 0.2))",
                          "linear-gradient(45deg, rgba(153, 27, 27, 0.2), rgba(157, 23, 77, 0.2), rgba(153, 27, 27, 0.2))",
                          "linear-gradient(45deg, rgba(157, 23, 77, 0.2), rgba(153, 27, 27, 0.2), rgba(157, 23, 77, 0.2))",
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Magnetic effect container */}
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#9d174d] to-[#991b1b] flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      whileHover={{
                        boxShadow: "0 0 30px rgba(157, 23, 77, 0.5)",
                        transition: { duration: 0.3 }
                      }}
                      drag
                      dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                      dragElastic={0.1}
                    >
                      {/* Icon pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#9d174d]/30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <m.icon className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Animated value with counting effect */}
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.5,
                        ease: "easeOut"
                      }}
                    >
                      <motion.p 
                        className="text-4xl font-bold text-white mb-2 relative"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Animated underline */}
                        <motion.span
                          className="block w-0 h-0.5 bg-gradient-to-r from-[#9d174d] to-[#991b1b] mx-auto mt-2"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        {m.value}
                      </motion.p>
                      
                      {/* Floating numbers effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="absolute text-xs text-[#9d174d] font-mono"
                            style={{
                              left: `${Math.random() * 80 + 10}%`,
                              top: `${Math.random() * 60 + 20}%`,
                            }}
                            animate={{
                              y: [-10, -30],
                              opacity: [0, 1, 0],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          >
                            {Math.floor(Math.random() * 9) + 1}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-300 font-medium relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.7,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        color: "#ffffff",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {m.label}
                    </motion.p>

                    {/* Corner accent */}
                    <motion.div 
                      className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-[#9d174d] to-[#991b1b] rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Bottom glow line */}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background Image with Mask */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&crop=center" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            {/* Solid Mask */}
            <div className="absolute inset-0 bg-gradient-primary"
            // <div className="absolute inset-0 bg-rosewood-900/90"
            style={{
              opacity: 0.6
            }}></div>

            {/* Gradient Mask */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-rosewood-900/90 via-carmine-900/80 to-auburn-900/90"></div> */}
          </div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into reality with cutting-edge technology and innovative design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:from-rosewood-700 hover:to-carmine-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-2 border-white/30 text-black/70 hover:text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
