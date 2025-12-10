'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import AdvancedStickyButton from '../components/AdvancedStickyButton';
import SampleImage from '../components/SampleImage';
import ContactSection from '../components/ContactSection';
import { useMorphismScroll } from '../hooks/useMorphismScroll';

export default function About() {
  const { activeSection, getSectionOpacity, getSectionZIndex, getSectionTransform } = useMorphismScroll({ sections: 5 });
  const [isPageInitialized, setIsPageInitialized] = useState(false);

  // Safe functions with page initialization check
  const safeGetSectionOpacity = (index: number) => {
    try {
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
      if (!isPageInitialized) {
        return { scale: 1, y: 0 };
      }
      return getSectionTransform(index);
    } catch (error) {
      return { scale: 1, y: 0 };
    }
  };

  useEffect(() => {
    document.title = 'About Us - DevCraft Studios';
    
    // Initialize page after a short delay
    const initTimer = setTimeout(() => {
      setIsPageInitialized(true);
    }, 100);

    return () => clearTimeout(initTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      <ScrollProgress />
      <AdvancedStickyButton 
        text="Let's Talk Business"
        mobileText="Contact"
        scrollBehavior="fixed"
        colorScheme="rosewood"
        onClick={() => {
          // Scroll to contact section or navigate to contact page
          window.location.href = '/contact';
        }}
      />
      <Navigation />
      
      {/* Create scrollable content area */}
      <div style={{ height: '400vh' }} className="relative">
        
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
                About <span className="text-gradient-primary">DevCraft</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're passionate about creating exceptional digital experiences that drive business growth and user engagement.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2019, DevCraft Studios has been at the forefront of digital innovation. 
                  We started with a simple mission: to create software that not only meets technical 
                  requirements but exceeds user expectations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're a team of passionate developers, designers, and strategists working 
                  together to build the next generation of digital solutions.
                </p>
              </div>

              <div>
                <SampleImage
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Team working together"
                  className="w-full h-96 shadow-bold"
                  overlay={true}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Values Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20 bg-white"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
                  icon: '🚀',
                  color: 'from-rosewood-600 to-rosewood-800'
                },
                {
                  title: 'Quality',
                  description: 'Every line of code, every design element, and every user interaction is crafted with precision.',
                  icon: '✨',
                  color: 'from-carmine-600 to-carmine-800'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe the best results come from working together with our clients and team members.',
                  icon: '🤝',
                  color: 'from-auburn-600 to-auburn-800'
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl bg-white shadow-medium hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Stats Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-white"
          style={{
            zIndex: safeGetSectionZIndex(2)
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
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Numbers that speak to our commitment and success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Mission Section */}
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
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that technology should be accessible, intuitive, and transformative. 
                  Every project we undertake is an opportunity to push boundaries and create 
                  something extraordinary.
                </p>
              </div>

              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Proven track record of success
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Cutting-edge technology stack
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Dedicated support team
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Transparent communication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Contact Section */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-white"
          style={{
            zIndex: safeGetSectionZIndex(4)
          }}
          initial={{
            opacity: 0,
            scale: 1,
            y: 0
          }}
          animate={{
            opacity: safeGetSectionOpacity(4),
            scale: safeGetSectionTransform(4).scale,
            y: safeGetSectionTransform(4).y
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
