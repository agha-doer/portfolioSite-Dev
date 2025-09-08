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

        {/* Carousel Section */}
        <section 
          className="relative min-h-screen flex items-center py-20 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Trusted Collaborators</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                One of the most important values embodied by our team is our relationship with our clients. 
                Software development is, by its nature, a collaborative and iterative process that requires 
                many different people from different disciplines coming together to solve complex problems.
              </p>
            </motion.div>

            {/* Carousel Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rosewood-500 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-carmine-500 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Main Carousel Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - 3D TEAM Letters */}
                  <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <div className="flex space-x-4">
                      {['T', 'E', 'A', 'M'].map((letter, index) => (
                        <motion.div
                          key={letter}
                          className="relative"
                          initial={{ opacity: 0, y: 50, rotateY: -90 }}
                          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.6 + index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotateY: 10,
                            transition: { duration: 0.3 }
                          }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* 3D Letter */}
                          <div className="relative w-16 h-20 md:w-20 md:h-24">
                            {/* Main Letter Face */}
                            <div 
                              className={`absolute inset-0 rounded-lg flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-xl ${
                                index === 0 ? 'bg-gradient-to-br from-red-500 to-red-600' :
                                index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                                index === 2 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                                'bg-gradient-to-br from-blue-500 to-blue-600'
                              }`}
                              style={{ 
                                transform: "translateZ(8px)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                              }}
                            >
                              {letter}
                            </div>
                            
                            {/* 3D Depth Effect */}
                            <div 
                              className={`absolute inset-0 rounded-lg ${
                                index === 0 ? 'bg-gradient-to-br from-red-600 to-red-700' :
                                index === 1 ? 'bg-gradient-to-br from-green-600 to-green-700' :
                                index === 2 ? 'bg-gradient-to-br from-yellow-600 to-yellow-700' :
                                'bg-gradient-to-br from-blue-600 to-blue-700'
                              }`}
                              style={{ 
                                transform: "translateZ(0px) translateY(4px) translateX(4px)",
                                zIndex: -1
                              }}
                            />
                            
                            {/* Glow Effect */}
                            <motion.div
                              className={`absolute inset-0 rounded-lg opacity-0 ${
                                index === 0 ? 'bg-red-400' :
                                index === 1 ? 'bg-green-400' :
                                index === 2 ? 'bg-yellow-400' :
                                'bg-blue-400'
                              }`}
                              animate={{
                                opacity: [0, 0.3, 0],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                delay: index * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              style={{ 
                                filter: "blur(8px)",
                                zIndex: -2
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-black font-sans">
                        Collaborative Excellence
                      </h3>
                      <p className="text-black leading-relaxed font-body">
                        Because of this, we work closely with our clients to realize their vision, 
                        integrate their feedback into their projects, and help them effectively bring 
                        their business software to market.
                      </p>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3">
                      {[
                        { label: 'Agile Development', color: 'bg-red-100 text-red-700' },
                        { label: 'Client Feedback', color: 'bg-green-100 text-green-700' },
                        { label: 'Iterative Process', color: 'bg-yellow-100 text-yellow-700' },
                        { label: 'Market Ready', color: 'bg-blue-100 text-blue-700' }
                      ].map((pill, index) => (
                        <motion.span
                          key={pill.label}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.8 + index * 0.1,
                            type: "spring",
                            stiffness: 150
                          }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${pill.color} cursor-default`}
                        >
                          {pill.label}
                        </motion.span>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="pt-4"
                    >
                      <motion.button
                        className="bg-gradient-to-r from-rosewood-600 to-carmine-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(157, 23, 77, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Start Collaborating
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-20 right-10 w-4 h-4 bg-rosewood-400 rounded-full opacity-60"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-6 h-6 bg-carmine-400 rounded-full opacity-60"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
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
