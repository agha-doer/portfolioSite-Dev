'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { FileText, Shield, Users, Calendar } from 'lucide-react';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service - DevCraft Studios';
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
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Terms of <span className="text-gradient-primary">Service</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
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
                    <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By accessing and using DevCraft Studios' services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                {/* Section 2 */}
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

                {/* Section 3 */}
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

                {/* Section 4 */}
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

                {/* Section 5 */}
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

                {/* Section 6 */}
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

                {/* Section 7 */}
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

                {/* Section 8 */}
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
