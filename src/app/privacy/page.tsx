'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Users, Calendar } from 'lucide-react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Privacy <span className="text-gradient-primary">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we collect, use, and protect your personal information
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                {/* Section 1 */}
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

                {/* Section 2 */}
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

                {/* Section 3 */}
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

                {/* Section 4 */}
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

                {/* Section 5 */}
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

                {/* Section 6 */}
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

                {/* Section 7 */}
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

                {/* Section 8 */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-auburn-500 to-burgundy-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">8</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you have any questions about this privacy policy, please contact us using the information provided below.
                  </p>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16 p-8 bg-gradient-to-br from-rosewood-50 to-carmine-50 rounded-2xl border border-rosewood-200 shadow-lg"
              >
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
