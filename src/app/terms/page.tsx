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
                className="prose prose-lg max-w-none"
              >
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using DevCraft Studios' services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on DevCraft Studios' website for personal, non-commercial transitory viewing only.
                </p>

                <h2>3. Disclaimer</h2>
                <p>
                  The materials on DevCraft Studios' website are provided on an 'as is' basis. DevCraft Studios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>4. Limitations</h2>
                <p>
                  In no event shall DevCraft Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevCraft Studios' website.
                </p>

                <h2>5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on DevCraft Studios' website could include technical, typographical, or photographic errors. DevCraft Studios does not warrant that any of the materials on its website are accurate, complete or current.
                </p>

                <h2>6. Links</h2>
                <p>
                  DevCraft Studios has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DevCraft Studios of the site.
                </p>

                <h2>7. Modifications</h2>
                <p>
                  DevCraft Studios may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                </p>

                <h2>8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-rosewood-600" />
                    <span className="text-gray-700">Email: legal@devcraftstudios.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-carmine-600" />
                    <span className="text-gray-700">Phone: +1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-auburn-600" />
                    <span className="text-gray-700">Last updated: December 2024</span>
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
