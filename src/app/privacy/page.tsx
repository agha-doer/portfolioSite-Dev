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
                className="prose prose-lg max-w-none"
              >
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and other contact information.
                </p>

                <h2>2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features and services.
                </p>

                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.
                </p>

                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2>5. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                </p>

                <h2>7. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us using the information provided below.
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
                  If you have any questions about our Privacy Policy, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-rosewood-600" />
                    <span className="text-gray-700">Email: privacy@devcraftstudios.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-carmine-600" />
                    <span className="text-gray-700">Phone: +1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-auburn-600" />
                    <span className="text-gray-700">Address: San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-burgundy-600" />
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
