'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found - DevCraft Studios';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <main className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-9xl md:text-[12rem] font-bold text-gradient-primary mb-8"
            >
              404
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/">
                <motion.button
                  className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold text-lg shadow-medium hover-lift flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </motion.button>
              </Link>

              <motion.button
                onClick={() => window.history.back()}
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-rosewood-500 hover:text-rosewood-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </motion.button>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 p-6 bg-white rounded-2xl shadow-medium max-w-md mx-auto"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Search className="w-6 h-6 text-rosewood-600" />
                <h3 className="text-lg font-semibold text-gray-900">Looking for something?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Try searching our site or check out our popular pages:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/services">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-rosewood-100 hover:text-rosewood-700 transition-colors">
                    Services
                  </span>
                </Link>
                <Link href="/about">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-rosewood-100 hover:text-rosewood-700 transition-colors">
                    About
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-rosewood-100 hover:text-rosewood-700 transition-colors">
                    Contact
                  </span>
                </Link>
                <Link href="/blog">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-rosewood-100 hover:text-rosewood-700 transition-colors">
                    Blog
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
