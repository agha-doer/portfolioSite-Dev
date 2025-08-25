"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Draggable3DImageRing } from "./ui/draggable-3d-image-ring";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const ThreeDImageRingGallery = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  // 8 project images for better spacing - replace with your actual project images
  const projectImages = [
    // Web Development Projects
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop&crop=center",
    
    // Mobile App Projects
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&crop=center",
  ];

         return (

     <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rosewood-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-carmine-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-auburn-500 to-transparent rounded-full blur-3xl"></div>
      </div>
       <BackgroundBeamsWithCollision className="absolute inset-0">
         <div className="container mx-auto mt-40 mb-20 px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Project <span className="text-gradient-primary">Gallery</span> 
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative projects through an interactive 3D gallery. 
              Drag to rotate and discover our latest web applications, mobile apps, and digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-5xl h-[700px] relative">
              <Draggable3DImageRing
                images={projectImages}
                width={500} // Reduced width to prevent overlap
                perspective={3000} // Increased perspective for better depth
                imageDistance={700} // Significantly increased distance to prevent merging
                initialRotation={180}
                animationDuration={2}
                staggerDelay={0.15}
                hoverOpacity={0.3}
                backgroundColor="transparent"
                draggable={true}
                mobileBreakpoint={768}
                mobileScaleFactor={0.5} // Further reduced for mobile
                inertiaPower={0.9}
                inertiaTimeConstant={400}
                inertiaVelocityMultiplier={25}
              />
            </div>
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default ThreeDImageRingGallery;
