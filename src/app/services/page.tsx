'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import AdvancedStickyButton from '../components/AdvancedStickyButton';
import SampleImage from '../components/SampleImage';
import ContactSection from '../components/ContactSection';
import { SparkleParticles } from '../components/SparkleParticles';
import { useMorphismScroll } from '../hooks/useMorphismScroll';
import { Code, Smartphone, Globe, Database, Cloud, Shield, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import '../components/SoftwareHouse/ServicesSection.css';

export default function Services() {
  const { activeSection, getSectionOpacity, getSectionZIndex, getSectionTransform } = useMorphismScroll({ sections: 4 });
  const [isPageInitialized, setIsPageInitialized] = useState(false);

  useEffect(() => {
    document.title = 'Our Services - DevCraft Studios';
    // Set page as initialized after a short delay to prevent initial animations
    const timer = setTimeout(() => {
      setIsPageInitialized(true);
    }, 100);
    
    // Set default tilt & shine on mount for animated cards
    if (typeof window !== 'undefined') {
      const cards = document.querySelectorAll('.card-animated');
      cards.forEach((card) => {
        const el = card as HTMLDivElement;
        el.style.setProperty('--rx', `4deg`);
        el.style.setProperty('--ry', `-4deg`);
        el.style.setProperty('--mx', `60%`);
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Fallback values to prevent errors
  const safeGetSectionOpacity = (index: number) => {
    try {
      // Before page initialization, only show first section
      if (!isPageInitialized) {
        return index === 0 ? 1 : 0;
      }
      return getSectionOpacity(index);
    } catch (error) {
      return index === 0 ? 1 : 0;
    }
  };

  const safeGetSectionZIndex = (index: number) => {
    try {
      // Before page initialization, only first section on top
      if (!isPageInitialized) {
        return index === 0 ? 20 : 1;
      }
      return getSectionZIndex(index);
    } catch (error) {
      return index === 0 ? 20 : 1;
    }
  };

  const safeGetSectionTransform = (index: number) => {
    try {
      // Before page initialization, no transforms
      if (!isPageInitialized) {
        return { scale: 1, y: 0 };
      }
      return getSectionTransform(index);
    } catch (error) {
      return { scale: 1, y: 0 };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      <ScrollProgress />
      <AdvancedStickyButton 
        text="Get Started"
        mobileText="Services"
        scrollBehavior="fixed"
        colorScheme="auburn"
        onClick={() => {
          // Navigate to contact page to start a project
          window.location.href = '/contact';
        }}
      />
      <Navigation />
      
      {/* Debug indicator */}
      <div className="fixed top-20 right-4 z-50 bg-black/80 text-white px-3 py-1 rounded text-sm">
        Active: {activeSection} | S1: {safeGetSectionOpacity(0).toFixed(2)} | S2: {safeGetSectionOpacity(1).toFixed(2)} | S3: {safeGetSectionOpacity(2).toFixed(2)} | S4: {safeGetSectionOpacity(3).toFixed(2)} | S5: {safeGetSectionOpacity(4).toFixed(2)}
      </div>
      
      {/* Create scrollable content area */}
      <div style={{ height: '500vh' }} className="relative">
        
        {/* Section 1: Hero Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20"
          style={{
            zIndex: safeGetSectionZIndex(0)
          }}
          initial={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          animate={{
            opacity: safeGetSectionOpacity(0),
            scale: safeGetSectionTransform(0).scale,
            y: safeGetSectionTransform(0).y
          }}
          transition={{ 
            duration: isPageInitialized ? 0.8 : 0,
            ease: "easeInOut",
            opacity: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            scale: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            y: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" }
          }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-gradient-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
                we handle every aspect of your digital transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Excellence</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We specialize in creating cutting-edge digital solutions that drive business growth. 
                  Our team of experts combines technical expertise with creative innovation to deliver 
                  exceptional results that exceed expectations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-rosewood-600 rounded-full"></div>
                    <span className="text-gray-700">Custom software development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-carmine-600 rounded-full"></div>
                    <span className="text-gray-700">Mobile app development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-auburn-600 rounded-full"></div>
                    <span className="text-gray-700">Web application development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-burgundy-600 rounded-full"></div>
                    <span className="text-gray-700">UI/UX design services</span>
                  </div>
                </div>
              </div>

              <div>
                <SampleImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                  alt="Web Development"
                  className="w-full h-96 shadow-bold"
                  overlay={true}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Main Services Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20 pb-20 bg-white"
          style={{
            zIndex: safeGetSectionZIndex(1)
          }}
          initial={{
            opacity: 0,
            scale: 1,
            y: 0
          }}
          animate={{
            opacity: safeGetSectionOpacity(1),
            scale: safeGetSectionTransform(1).scale,
            y: safeGetSectionTransform(1).y
          }}
          transition={{ 
            duration: isPageInitialized ? 0.8 : 0,
            ease: "easeInOut",
            opacity: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            scale: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            y: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" }
          }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to accelerate your business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Code,
                  title: 'Custom Software Development',
                  description: 'Tailored software solutions built from scratch to meet your unique business requirements.',
                  features: ['Full-stack development', 'API integrations', 'Database design', 'Performance optimization'],
                  color: 'from-rosewood-600 to-rosewood-800'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile App Development',
                  description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
                  features: ['iOS & Android apps', 'React Native', 'Flutter development', 'App store optimization'],
                  color: 'from-carmine-600 to-carmine-800'
                },
                {
                  icon: Globe,
                  title: 'Web Application Development',
                  description: 'Modern, responsive web applications using the latest technologies and frameworks.',
                  features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce solutions', 'CMS development'],
                  color: 'from-auburn-600 to-auburn-800'
                },

              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <Card
                    className="h-full p-8 bg-card card-animated border-0"
                    onMouseMove={(e) => {
                      const target = e.currentTarget as HTMLDivElement;
                      const rect = target.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const rx = ((y / rect.height) - 0.5) * -12;
                      const ry = ((x / rect.width) - 0.5) * 12;
                      target.style.setProperty('--rx', `${rx}deg`);
                      target.style.setProperty('--ry', `${ry}deg`);
                      target.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLDivElement;
                      target.style.setProperty('--rx', `4deg`);
                      target.style.setProperty('--ry', `-4deg`);
                      target.style.setProperty('--mx', `60%`);
                    }}
                  >
                    <div className="card-bg" />
                    <div className="card-shine" />
                    <div className="card-inner">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="font-display text-xl font-bold mb-4 group-hover:text-white transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="flex items-center text-sm text-muted-foreground group-hover:text-white transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-white transition-all duration-300" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <Button
                        variant="default"
                        className="mt-4 px-5 py-2.5 rounded-lg btn-check btn-crazy text-white"
                      >
                        <span className="relative z-10 flex items-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


        {/* Section 2: Ready to Get Started? Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20"
          style={{
            zIndex: safeGetSectionZIndex(2),
            background: 'linear-gradient(135deg, #9d174d 0%, #991b1b 100%)'
          }}
          initial={{
            opacity: 0,
            scale: 1,
            y: 0
          }}
          animate={{
            opacity: safeGetSectionOpacity(2),
            scale: safeGetSectionTransform(2).scale,
            y: safeGetSectionTransform(2).y
          }}
          transition={{ 
            duration: isPageInitialized ? 0.8 : 0,
            ease: "easeInOut",
            opacity: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            scale: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            y: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" }
          }}
        >
          {/* Sparkle Particles Background */}
          <SparkleParticles
            className="absolute inset-0"
            particleColor="#ffffff"
            maxParticleSize={2}
            baseDensity={30}
            maxSpeed={0.3}
            maxOpacity={0.4}
            enableHoverGrab={false}
            hoverMode="grab"
            clickEffect={false}
            particleShape="circle"
            enableParallax={false}
            zIndexLevel={1}
          />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Let's discuss your project and create something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  className="px-8 py-4 bg-white text-rosewood-800 rounded-xl font-semibold text-lg shadow-bold hover-lift flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
                </button>
                
                <button
                  onClick={() => {
                    window.location.href = '/about';
                  }}
                  className="px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all flex items-center justify-center"
                >
                  Learn More About Us
                </button>
              </div>
            </div>

          </div>
        </motion.section>





        {/* Section 3: CTA Section - COMMENTED OUT */}
        {/* 
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20 bg-gradient-to-br from-rosewood-600 to-carmine-700 relative overflow-hidden"
          style={{
            zIndex: safeGetSectionZIndex(2),
            backgroundColor: '#dc2626' // Fallback red background
          }}
          animate={{
            opacity: safeGetSectionOpacity(2),
            scale: safeGetSectionTransform(2).scale,
            y: safeGetSectionTransform(2).y
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut",
            opacity: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: 0.6, ease: "easeInOut" },
            y: { duration: 0.6, ease: "easeInOut" }
          }}
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project and create something amazing together. 
                We're here to turn your vision into reality with cutting-edge technology and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  className="px-8 py-4 bg-white text-rosewood-800 rounded-xl font-semibold text-lg shadow-bold hover-lift flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
                </button>
                
                <button
                  onClick={() => {
                    window.location.href = '/about';
                  }}
                  className="px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all flex items-center justify-center"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </motion.section>
        */}

        {/* Section 5: Contact Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20 bg-white"
          style={{
            zIndex: safeGetSectionZIndex(3)
          }}
          initial={{
            opacity: 0,
            scale: 1,
            y: 0
          }}
          animate={{
            opacity: safeGetSectionOpacity(3),
            scale: safeGetSectionTransform(3).scale,
            y: safeGetSectionTransform(3).y
          }}
          transition={{ 
            duration: isPageInitialized ? 0.8 : 0,
            ease: "easeInOut",
            opacity: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            scale: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" },
            y: { duration: isPageInitialized ? 0.6 : 0, ease: "easeInOut" }
          }}
        >
          <div className="w-full">
            <ContactSection hideDescription={true} hideMargin={true} />
          </div>
        </motion.section>

      </div>
    </div>
  );
}
