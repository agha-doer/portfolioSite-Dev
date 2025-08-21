import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
// import AdvancedStickyButton from '@/components/AdvancedStickyButton';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      {/* <AdvancedStickyButton 
        text="Contact Us"
        mobileText="Privacy"
        scrollBehavior="fixed"
        colorScheme="cardinal"
        onClick={() => {
          window.location.href = '/contact';
        }}
      /> */}
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-rosewood-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
          
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
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This policy explains how we collect, use, and safeguard your data.
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Fill out contact forms on our website</li>
                    <li>Request a quote or proposal</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Engage with our services</li>
                    <li>Contact us for support</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    This information may include your name, email address, phone number, company name, and project details.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about projects and services</li>
                    <li>Send you marketing materials (with your consent)</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist us in operating our website and services</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Secure data storage practices</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Cookies and Tracking</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    These technologies help us:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Improve our website functionality</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Object to certain types of processing</li>
                    <li>Request data portability</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
                  <p className="text-gray-600 mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, 
                    unless a longer retention period is required or permitted by law.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. International Transfers</h2>
                  <p className="text-gray-600 mb-4">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure that such transfers comply with applicable data protection laws and implement 
                    appropriate safeguards to protect your information.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
                  <p className="text-gray-600 mb-4">
                    Our services are not intended for children under the age of 13. We do not knowingly collect 
                    personal information from children under 13. If you believe we have collected such information, 
                    please contact us immediately.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes 
                    by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@devcraftstudios.com<br />
                      <strong>Phone:</strong> +1 (555) 123-4567<br />
                      <strong>Address:</strong> 123 Business Street, Tech City, TC 12345<br />
                      <strong>Last Updated:</strong> December 2024
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
