'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import { Shield, Eye, Lock, Users, Calendar } from 'lucide-react';
import { useMorphismScroll } from '../hooks/useMorphismScroll';

export default function Privacy() {
  const [isPageInitialized, setIsPageInitialized] = useState(false);
  const { activeSection, scrollProgress } = useMorphismScroll({ sections: 5 });

  useEffect(() => {
    document.title = 'Privacy Policy - DevCraft Studios';
    
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
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                  Privacy <span className="text-gradient-primary">Policy</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  How we collect, use, and protect your personal information
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Information Collection & Usage */}
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
                {/* Information We Collect */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and other contact information.
                  </p>
                </div>

                {/* How We Use Your Information */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-carmine-500 to-auburn-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features and services.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Information Sharing & Security */}
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
                {/* Information Sharing */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-auburn-500 to-burgundy-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.
                  </p>
                </div>

                {/* Data Security */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-burgundy-500 to-cardinal-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Cookies, Rights & Changes */}
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
                {/* Cookies and Tracking */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cardinal-500 to-rosewood-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Cookies and Tracking</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">6</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                  </p>
                </div>

                {/* Changes to This Policy */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-carmine-500 to-auburn-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">7</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Changes to This Policy</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
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
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Contact Us</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    If you have any questions about our Privacy Policy, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-rosewood-500 to-carmine-500 rounded-lg flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <p className="text-gray-900 font-semibold">privacy@devcraftstudios.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-carmine-500 to-auburn-500 rounded-lg flex items-center justify-center">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                        <p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-auburn-500 to-burgundy-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Address</p>
                        <p className="text-gray-900 font-semibold">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-burgundy-500 to-cardinal-500 rounded-lg flex items-center justify-center">
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
