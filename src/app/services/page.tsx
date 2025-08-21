'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import AdvancedStickyButton from '../components/AdvancedStickyButton';
import Footer from '../components/Footer';
import SampleImage from '../components/SampleImage';
import ContactSection from '../components/ContactSection';
import { Code, Smartphone, Globe, Database, Cloud, Shield, ArrowRight } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-gradient-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
                we handle every aspect of your digital transformation.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <SampleImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                  alt="Web Development"
                  className="w-full h-96 shadow-bold"
                  overlay={true}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {
                  icon: Database,
                  title: 'Backend & Database Solutions',
                  description: 'Robust backend systems and database architectures that scale with your business.',
                  features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database optimization'],
                  color: 'from-burgundy-600 to-burgundy-800'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Infrastructure',
                  description: 'Scalable cloud solutions that ensure high availability and performance.',
                  features: ['AWS/Azure/GCP', 'DevOps automation', 'CI/CD pipelines', 'Monitoring & logging'],
                  color: 'from-cardinal-600 to-cardinal-800'
                },
                {
                  icon: Shield,
                  title: 'Security & Compliance',
                  description: 'Enterprise-grade security solutions to protect your data and ensure compliance.',
                  features: ['Security audits', 'Penetration testing', 'GDPR compliance', 'Data encryption'],
                  color: 'from-rosewood-700 to-rosewood-900'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-medium hover-lift border border-gray-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-rosewood-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-rosewood-800 rounded-xl font-semibold text-lg shadow-bold hover-lift flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
