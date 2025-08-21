import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
// import AdvancedStickyButton from '@/components/AdvancedStickyButton';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Shield, FileText, Users, Lock } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    document.title = 'Terms and Conditions - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      {/* <AdvancedStickyButton 
        text="Contact Us"
        mobileText="Terms"
        scrollBehavior="fixed"
        colorScheme="burgundy"
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
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Terms and <span className="text-gradient-primary">Conditions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services. 
                By accessing or using our website, you agree to be bound by these terms.
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
                  <p className="text-gray-600 mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on DevCraft Studios's website for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Description</h2>
                  <p className="text-gray-600 mb-4">
                    DevCraft Studios provides web development, mobile app development, and digital consulting services. 
                    We strive to deliver high-quality solutions tailored to our clients' specific needs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
                  <p className="text-gray-600 mb-4">
                    Payment terms will be specified in individual project agreements. Generally, we require:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>50% deposit upon project initiation</li>
                    <li>Remaining balance upon project completion</li>
                    <li>Payment via bank transfer or approved payment methods</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
                  <p className="text-gray-600 mb-4">
                    Upon full payment, clients retain ownership of the final deliverables. However, DevCraft Studios reserves the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Use the work in our portfolio</li>
                    <li>Retain ownership of proprietary frameworks and libraries</li>
                    <li>Use the work for promotional purposes with client permission</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    DevCraft Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy Policy</h2>
                  <p className="text-gray-600 mb-4">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                    to understand our practices.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Changes to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    DevCraft Studios reserves the right to modify these terms at any time. We will notify users of any material changes 
                    via email or through a notice on our website.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-medium p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> legal@devcraftstudios.com<br />
                      <strong>Phone:</strong> +1 (555) 123-4567<br />
                      <strong>Address:</strong> 123 Business Street, Tech City, TC 12345
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

export default Terms;
