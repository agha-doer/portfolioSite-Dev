import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        className={`fixed top-0 left-44 w-[80%] z-50 transition-all duration-300 ${
      // className={`fixed top-0 left-3/4 transform z-50 transition-all duration-300
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6" style={{ borderRadius: '40px' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-display text-xl font-bold text-gray-900">
              DevCraft
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.path}>
                <Link href={item.path}>
                  <motion.div
                    className="relative font-medium text-gray-700 hover:text-rosewood-800 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-2 bg-gradient-primary text-white rounded-lg font-medium hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
