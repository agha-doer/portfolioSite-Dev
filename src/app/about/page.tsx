'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import AdvancedStickyButton from '../components/AdvancedStickyButton';
import Footer from '../components/Footer';
import SampleImage from '../components/SampleImage';
import ContactSection from '../components/ContactSection';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      <AdvancedStickyButton 
        text="Let's Talk Business"
        mobileText="Contact"
        scrollBehavior="fixed"
        colorScheme="rosewood"
        onClick={() => {
          // Scroll to contact section or navigate to contact page
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
                About <span className="text-gradient-primary">DevCraft</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're passionate about creating exceptional digital experiences that drive business growth and user engagement.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2019, DevCraft Studios has been at the forefront of digital innovation. 
                  We started with a simple mission: to create software that not only meets technical 
                  requirements but exceeds user expectations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're a team of passionate developers, designers, and strategists working 
                  together to build the next generation of digital solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <SampleImage
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Team working together"
                  className="w-full h-96 shadow-bold"
                  overlay={true}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
                  icon: '🚀',
                  color: 'from-rosewood-600 to-rosewood-800'
                },
                {
                  title: 'Quality',
                  description: 'Every line of code, every design element, and every user interaction is crafted with precision.',
                  icon: '✨',
                  color: 'from-carmine-600 to-carmine-800'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe the best results come from working together with our clients and team members.',
                  icon: '🤝',
                  color: 'from-auburn-600 to-auburn-800'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl bg-white shadow-medium hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals behind our success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                { name: 'Michael Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                { name: 'Emily Rodriguez', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                { name: 'David Kim', role: 'Senior Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-medium">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that technology should be accessible, intuitive, and transformative. 
                  Every project we undertake is an opportunity to push boundaries and create 
                  something extraordinary.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Proven track record of success
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Cutting-edge technology stack
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Dedicated support team
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Transparent communication
                    </li>
                  </ul>
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
}
