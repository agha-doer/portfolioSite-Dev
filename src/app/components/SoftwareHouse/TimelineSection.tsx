import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Clock, Target, Code, Rocket } from 'lucide-react';

const milestones = [
  { 
    t: 'Week 1', 
    d: 'Discovery workshops, scope alignment, and success metrics.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    t: 'Week 2-3', 
    d: 'Design explorations, flows, and component architecture.',
    icon: Clock,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    t: 'Week 4-6', 
    d: 'Core feature build, integrations, and accessibility pass.',
    icon: Code,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    t: 'Week 7-8', 
    d: 'QA, optimization, launch prep, and handover.',
    icon: Rocket,
    color: 'from-orange-500 to-red-500'
  },
];

const TimelineSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-rotate the wheel
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % milestones.length);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="timeline" ref={ref} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Engagement <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            What a typical MVP development journey looks like
          </p>
        </motion.div>

        {/* Rotating Timeline */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center">
          {/* Rotating Wheel */}
          <div className="relative w-96 h-96">
            {/* Main Wheel */}
            <motion.div
              className="w-full h-full rounded-full relative"
              animate={{ 
                rotate: currentStep * 90
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              {/* Four Colored Arcs */}
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 384 384">
                {/* Arc 1 - Blue (Top Right) */}
                <path
                  d="M 192 32 A 160 160 0 0 1 352 192"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className={currentStep === 0 ? 'opacity-100' : 'opacity-50'}
                />
                {/* Arc 2 - Purple (Bottom Right) */}
                <path
                  d="M 352 192 A 160 160 0 0 1 192 352"
                  fill="none"
                  stroke="url(#purpleGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className={currentStep === 1 ? 'opacity-100' : 'opacity-50'}
                />
                {/* Arc 3 - Green (Bottom Left) */}
                <path
                  d="M 192 352 A 160 160 0 0 1 32 192"
                  fill="none"
                  stroke="url(#greenGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className={currentStep === 2 ? 'opacity-100' : 'opacity-50'}
                />
                {/* Arc 4 - Orange (Top Left) */}
                <path
                  d="M 32 192 A 160 160 0 0 1 192 32"
                  fill="none"
                  stroke="url(#orangeGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className={currentStep === 3 ? 'opacity-100' : 'opacity-50'}
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9d174d" />
                    <stop offset="100%" stopColor="#be185d" />
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#991b1b" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#92400e" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b91c1c" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Wheel Steps */}
              {/* {milestones.map((milestone, index) => {
                const angle = (index * 90) - 5; // Start from -45 degrees
                const radius = 150; // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      x: x,
                      y: y,
                    }}
                  >
                    <motion.div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        index === currentStep 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-primary/30 bg-card'
                      }`}
                      animate={{
                        scale: index === currentStep ? 1.2 : 1,
                        opacity: index === currentStep ? 1 : 0.5
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <milestone.icon className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                );
              })} */}

              {/* Center Hub */}
              <motion.div
                className="absolute top-[40%] left-[40%] transform bg-gradient-primary rounded-full flex items-center justify-center shadow-lg w-24 h-24"
                animate={{ 
                  rotate: -currentStep * 90 // Counter-rotate to keep text upright
                }}
                transition={{ 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <div className="text-white font-bold text-sm text-center">
                  <div>MVP</div>
                  <div>Journey</div>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Current Step Display */}
          <div className="ml-16 w-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-8 shadow-soft"
              >
                {/* Step Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-r ${milestones[currentStep].color} flex items-center justify-center mb-6`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {React.createElement(milestones[currentStep].icon, { className: "w-8 h-8 text-white" })}
                </motion.div>

                {/* Step Content */}
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {milestones[currentStep].t}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {milestones[currentStep].d}
                </motion.p>

                {/* Progress Indicator */}
                <div className="flex gap-2 mt-6">
                  {milestones.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentStep ? 'bg-primary' : 'bg-primary/20'
                      }`}
                      animate={{
                        scale: index === currentStep ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Manual Navigation
        <div className="flex justify-center gap-4 mt-12">
          {milestones.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep ? 'bg-primary' : 'bg-primary/30'
              }`}
              onClick={() => setCurrentStep(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TimelineSection;