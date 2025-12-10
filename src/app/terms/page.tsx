'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import { FileText, Shield, Users, Calendar } from 'lucide-react';
import { useMorphismScroll } from '../hooks/useMorphismScroll';

export default function Terms() {
  const [isPageInitialized, setIsPageInitialized] = useState(false);
  const { activeSection, scrollProgress } = useMorphismScroll({ sections: 5 });

  useEffect(() => {
    document.title = 'Terms of Service - DevCraft Studios';
    
    // Initialize page after a short delay to prevent initial animations
    const timer = setTimeout(() => {
      setIsPageInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Safe getters to prevent animations on initial load
  const safeGetSectionOpacity = (index: number) => {
    if (!isPageInitialized) {
      return index === 0 ? 1 : 0;
    }
    return activeSection === index ? 1 : 0;
  };

  const safeGetSectionZIndex = (index: number) => {
    if (!isPageInitialized) {
      return index === 0 ? 20 : 1;
    }
    return activeSection === index ? 20 : 1;
  };

  const safeGetSectionTransform = (index: number) => {
    if (!isPageInitialized) {
      return { y: 0, scale: 1 };
    }
    const isActive = activeSection === index;
    const direction = scrollProgress > 0.5 ? 1 : -1;
    return {
      y: isActive ? 0 : direction * 50,
      scale: isActive ? 1 : 0.95
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      <Navigation />
      
      {/* Fixed height container for morphism effect */}
      <div style={{ height: '500vh' }}>
        <main className="fixed inset-0 w-full">
          {/* Section 1: Hero */}
          <motion.section
            className="absolute inset-0 flex items-center justify-center pt-32 pb-20 relative overflow-hidden"
            style={{
              opacity: safeGetSectionOpacity(0),
              zIndex: safeGetSectionZIndex(0),
            }}
            initial={{ opacity: 1 }}
            animate={{
              opacity: safeGetSectionOpacity(0),
              y: safeGetSectionTransform(0).y,
              scale: safeGetSectionTransform(0).scale,
            }}
            transition={{ duration: isPageInitialized ? 0.8 : 0 }}
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                  Terms of <span className="text-gradient-primary">Service</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Please read these terms carefully before using our services
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Acceptance & License */}
          <motion.section
            className="absolute inset-0 flex items-center justify-center py-20 bg-white"
            style={{
              opacity: safeGetSectionOpacity(1),
              zIndex: safeGetSectionZIndex(1),
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: safeGetSectionOpacity(1),
              y: safeGetSectionTransform(1).y,
              scale: safeGetSectionTransform(1).scale,
            }}
            transition={{ duration: isPageInitialized ? 0.8 : 0 }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Acceptance of Terms */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By accessing and using DevCraft Studios' services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                {/* Use License */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-carmine-500 to-auburn-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Use License</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials (information or software) on DevCraft Studios' website for personal, non-commercial transitory viewing only.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Disclaimer & Limitations */}
          <motion.section
            className="absolute inset-0 flex items-center justify-center py-20 bg-white"
            style={{
              opacity: safeGetSectionOpacity(2),
              zIndex: safeGetSectionZIndex(2),
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: safeGetSectionOpacity(2),
              y: safeGetSectionTransform(2).y,
              scale: safeGetSectionTransform(2).scale,
            }}
            transition={{ duration: isPageInitialized ? 0.8 : 0 }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Disclaimer */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-auburn-500 to-burgundy-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Disclaimer</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The materials on DevCraft Studios' website are provided on an 'as is' basis. DevCraft Studios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                {/* Limitations */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-burgundy-500 to-cardinal-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Limitations</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In no event shall DevCraft Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevCraft Studios' website.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Accuracy, Links & Modifications */}
          <motion.section
            className="absolute inset-0 flex items-center justify-center py-20 bg-white"
            style={{
              opacity: safeGetSectionOpacity(3),
              zIndex: safeGetSectionZIndex(3),
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: safeGetSectionOpacity(3),
              y: safeGetSectionTransform(3).y,
              scale: safeGetSectionTransform(3).scale,
            }}
            transition={{ duration: isPageInitialized ? 0.8 : 0 }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Accuracy of Materials */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cardinal-500 to-rosewood-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Accuracy of Materials</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The materials appearing on DevCraft Studios' website could include technical, typographical, or photographic errors. DevCraft Studios does not warrant that any of the materials on its website are accurate, complete or current.
                  </p>
                </div>

                {/* Links */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">6</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Links</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    DevCraft Studios has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DevCraft Studios of the site.
                  </p>
                </div>

                {/* Modifications */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-carmine-500 to-auburn-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">7</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Modifications</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    DevCraft Studios may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-auburn-500 to-burgundy-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">8</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Governing Law</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Contact Information */}
          <motion.section
            className="absolute inset-0 flex items-center justify-center py-20 bg-white"
            style={{
              opacity: safeGetSectionOpacity(4),
              zIndex: safeGetSectionZIndex(4),
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: safeGetSectionOpacity(4),
              y: safeGetSectionTransform(4).y,
              scale: safeGetSectionTransform(4).scale,
            }}
            transition={{ duration: isPageInitialized ? 0.8 : 0 }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-rosewood-50 to-carmine-50 rounded-2xl border border-rosewood-200 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Contact Us</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <p className="text-gray-900 font-semibold">legal@devcraftstudios.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-carmine-500 to-auburn-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                        <p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-auburn-500 to-burgundy-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Last Updated</p>
                        <p className="text-gray-900 font-semibold">December 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
