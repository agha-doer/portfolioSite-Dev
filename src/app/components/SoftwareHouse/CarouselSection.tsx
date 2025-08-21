import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Play, Pause, Star, Zap, TrendingUp, Users, Award, Rocket } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    title: "Revolutionary Web Solutions",
    subtitle: "Cutting-edge technology meets stunning design",
    description: "Transform your business with our innovative web solutions that combine powerful functionality with breathtaking aesthetics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    stats: { users: "10K+", rating: "4.9", projects: "500+" },
    icon: Rocket,
    gradient: "from-rosewood-500 to-carmine-600",
    accent: "rosewood"
  },
  {
    id: 2,
    title: "AI-Powered Applications",
    subtitle: "Intelligence that drives results",
    description: "Leverage the power of artificial intelligence to create applications that learn, adapt, and deliver exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    stats: { users: "25K+", rating: "4.8", projects: "750+" },
    icon: Zap,
    gradient: "from-burgundy-500 to-auburn-600",
    accent: "burgundy"
  },
  {
    id: 3,
    title: "Mobile-First Excellence",
    subtitle: "Apps that users love",
    description: "Create mobile applications that users can't put down. Our mobile-first approach ensures perfect performance across all devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    stats: { users: "50K+", rating: "4.9", projects: "1000+" },
    icon: TrendingUp,
    gradient: "from-cardinal-500 to-rosewood-600",
    accent: "cardinal"
  },
  {
    id: 4,
    title: "Enterprise Solutions",
    subtitle: "Scalable, secure, and powerful",
    description: "Build enterprise-grade applications that scale with your business. Security, performance, and reliability built-in from day one.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    stats: { users: "100K+", rating: "5.0", projects: "2000+" },
    icon: Award,
    gradient: "from-auburn-500 to-burgundy-600",
    accent: "auburn"
  }
];

const CarouselSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isVisible || !isPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Background Particles */}
        {[...Array(30)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const left = ((i * 7) % 100) + (i % 20);
          const top = ((i * 11) % 100) + (i % 15);
          const duration = 4 + (i % 3);
          const delay = (i % 3);
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/10 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-rosewood-500/5 to-carmine-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rosewood-500/20 to-carmine-500/20 px-6 py-3 rounded-full mb-8"
          >
            <Star className="w-5 h-5 text-rosewood-500" />
            <span className="text-sm font-semibold text-rosewood-600">Our Solutions</span>
          </motion.div>
          
          <h2 className="font-display text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-rosewood-600 via-carmine-600 to-burgundy-600 bg-clip-text text-transparent">
            Amazing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge solutions that transform businesses and delight users
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-white/10">
            
            {/* Carousel Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full p-12">
                  
                  {/* Content Side */}
                  <div className="space-y-8">
                    {/* Icon and Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${carouselItems[currentIndex].gradient} flex items-center justify-center shadow-xl`}>
                        {React.createElement(carouselItems[currentIndex].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div className="bg-gradient-to-r from-rosewood-500/20 to-carmine-500/20 px-4 py-2 rounded-full">
                        <span className="text-sm font-semibold text-rosewood-600">
                          {carouselItems[currentIndex].accent.charAt(0).toUpperCase() + carouselItems[currentIndex].accent.slice(1)} Solution
                        </span>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-5xl md:text-6xl font-bold leading-tight"
                    >
                      <span className="bg-gradient-to-r from-rosewood-600 to-carmine-600 bg-clip-text text-transparent">
                        {carouselItems[currentIndex].title}
                      </span>
                    </motion.h3>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-2xl text-muted-foreground font-medium"
                    >
                      {carouselItems[currentIndex].subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                    >
                      {carouselItems[currentIndex].description}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex gap-8"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{carouselItems[currentIndex].stats.users}</div>
                        <div className="text-sm text-muted-foreground">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground flex items-center gap-1">
                          {carouselItems[currentIndex].stats.rating}
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{carouselItems[currentIndex].stats.projects}</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className={`px-8 py-4 rounded-xl bg-gradient-to-r ${carouselItems[currentIndex].gradient} text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                    >
                      Get Started
                    </motion.button>
                  </div>

                                     {/* Image Side */}
                   <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     className="relative"
                   >
                     {/* Background Pattern */}
                     <div className="absolute inset-0 bg-gradient-to-br from-rosewood-500/10 to-carmine-500/10 rounded-3xl" />
                     
                     {/* Main Image Container */}
                     <div className="relative bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden">
                       {/* Background Image */}
                       <motion.div
                         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                         style={{
                           backgroundImage: `url(${carouselItems[currentIndex].image})`,
                         }}
                         animate={{
                           scale: [1, 1.05, 1],
                         }}
                         transition={{
                           duration: 8,
                           repeat: Infinity,
                           ease: "easeInOut"
                         }}
                       />
                       
                       {/* Overlay Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-br from-rosewood-900/60 via-carmine-900/40 to-transparent" />
                       
                       {/* Content Overlay */}
                       <div className="relative z-10 h-full flex flex-col justify-between">
                         {/* Top Icon */}
                         <motion.div
                           className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${carouselItems[currentIndex].gradient} flex items-center justify-center shadow-xl self-end`}
                           animate={{
                             scale: [1, 1.1, 1],
                             rotate: [0, 5, 0],
                           }}
                           transition={{
                             duration: 4,
                             repeat: Infinity,
                             ease: "easeInOut"
                           }}
                         >
                           {React.createElement(carouselItems[currentIndex].icon, { className: "w-10 h-10 text-white" })}
                         </motion.div>
                         
                         {/* Bottom Content */}
                         <div className="text-white">
                           <motion.h4
                             className="text-2xl font-bold mb-2"
                             animate={{
                               opacity: [0.8, 1, 0.8],
                             }}
                             transition={{
                               duration: 3,
                               repeat: Infinity,
                             }}
                           >
                             {carouselItems[currentIndex].title}
                           </motion.h4>
                           <p className="text-white/80 text-sm">
                             {carouselItems[currentIndex].subtitle}
                           </p>
                         </div>
                       </div>
                     </div>

                     {/* Floating Elements */}
                     {[...Array(8)].map((_, i) => {
                       // Use deterministic values based on index to avoid hydration mismatch
                       const top = 10 + ((i * 11) % 80) + (i % 10);
                       const left = 5 + ((i * 13) % 90) + (i % 8);
                       const duration = 4 + (i % 3);
                       const delay = i % 3;
                       
                       return (
                         <motion.div
                           key={i}
                           className="absolute w-3 h-3 bg-gradient-to-r from-rosewood-400 to-carmine-400 rounded-full shadow-lg"
                           style={{
                             top: `${top}%`,
                             left: `${left}%`,
                           }}
                           animate={{
                             y: [0, -30, 0],
                             opacity: [0.3, 1, 0.3],
                             scale: [0.8, 1.3, 0.8],
                           }}
                           transition={{
                             duration,
                             repeat: Infinity,
                             delay,
                           }}
                         />
                       );
                     })}
                     
                     {/* Glowing Border Effect */}
                     <motion.div
                       className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-rosewood-500/30 to-carmine-500/30"
                       animate={{
                         opacity: [0.3, 0.8, 0.3],
                       }}
                       transition={{
                         duration: 3,
                         repeat: Infinity,
                       }}
                     />
                   </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-3 mt-8"
          >
            {carouselItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gradient-to-r from-rosewood-500 to-carmine-500' : 'bg-white/20 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: index === currentIndex 
                    ? "0 0 20px rgba(139, 69, 19, 0.6)" 
                    : "none"
                }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rosewood-400 to-carmine-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
