'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import AdvancedStickyButton from '../components/AdvancedStickyButton';
import Footer from '../components/Footer';
import SampleImage from '../components/SampleImage';
import ContactSection from '../components/ContactSection';
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, Users, Globe } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      <AdvancedStickyButton 
        text="Start Project"
        mobileText="Get Quote"
        scrollBehavior="fixed"
        colorScheme="carmine"
        onClick={() => {
          // Scroll to contact form or trigger contact action
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
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
                Get in <span className="text-gradient-primary">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your next project? Let's discuss how we can bring your vision to life.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're here to help you transform your ideas into reality. Whether you have a 
                  specific project in mind or just want to explore possibilities, we'd love to 
                  hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-medium border border-rosewood-200"
                      style={{ background: 'linear-gradient(135deg, #9d174d 0%, #991b1b 100%)' }}
                    >
                      <Mail className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@devcraftstudios.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-medium border border-auburn-200"
                      style={{ background: 'linear-gradient(135deg, #92400e 0%, #7f1d1d 100%)' }}
                    >
                      <Phone className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-medium border border-carmine-200"
                      style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #be185d 100%)' }}
                    >
                      <MapPin className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <SampleImage
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="w-full h-96 shadow-bold"
                  overlay={true}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors">
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors">
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors">
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>6-12 months</option>
                      <option>12+ months</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosewood-500 focus:border-transparent transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>
              </motion.form>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-8"
              >
                <button className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold text-lg shadow-bold hover-lift flex items-center justify-center mx-auto">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Visit us at one of our locations or schedule a virtual meeting
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: 'San Francisco',
                  address: '123 Tech Street, SF, CA 94105',
                  phone: '+1 (555) 123-4567',
                  image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  city: 'New York',
                  address: '456 Innovation Ave, NY, NY 10001',
                  phone: '+1 (555) 234-5678',
                  image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  city: 'London',
                  address: '789 Digital Lane, London, UK SW1A 1AA',
                  phone: '+44 20 1234 5678',
                  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                }
              ].map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-medium hover-lift overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <SampleImage
                      src={office.image}
                      alt={office.city}
                      className="w-full h-full"
                      overlay={false}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                    <div className="space-y-3 text-gray-600">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-rosewood-600" />
                        {office.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-carmine-600" />
                        {office.phone}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">24/7 Support</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're here to help you succeed with round-the-clock support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock support for urgent issues' },
                { icon: MessageSquare, title: 'Live Chat', description: 'Instant messaging with our support team' },
                { icon: Users, title: 'Dedicated Team', description: 'Personal support representative assigned to you' },
                { icon: Globe, title: 'Global Reach', description: 'Support available in multiple time zones' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
