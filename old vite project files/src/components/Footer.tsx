import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUp, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rosewood-600 to-carmine-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-auburn-600 to-burgundy-600 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cardinal-600 to-rosewood-600 rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="py-16">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <span className="font-display text-2xl font-bold">DevCraft</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  We craft exceptional digital experiences that drive business growth and user engagement. 
                  From concept to deployment, we bring your vision to life.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Instagram, href: '#', label: 'Instagram' }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'UI/UX Design',
                  'Cloud Solutions',
                  'Consulting'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-6">Legal</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Terms & Conditions', path: '/terms' },
                  { label: 'Privacy Policy', path: '/privacy' },
                  { label: 'Blog', path: '/blog' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">hello@devcraftstudios.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 DevCraft Studios. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 mt-4 md:mt-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;