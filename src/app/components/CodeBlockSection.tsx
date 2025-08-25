"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CodeBlock } from "./ui/code-block";

const CodeBlockSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};`;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Quality <span className="text-gradient-primary">Code</span> And Optimized Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clean, efficient code that delivers exceptional performance and user experience.
          </p>
        </motion.div>

        {/* First Row: Code on Left, Description on Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Side - Code Block */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
            <CodeBlock
              language="jsx"
              filename="DummyComponent.jsx"
              highlightLines={[9, 13, 14, 18]}
              code={code}
            />
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Clean & Maintainable Code</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Our development approach focuses on writing clean, readable, and maintainable code 
                that follows industry best practices and modern standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Semantic HTML and accessible components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>TypeScript for type safety and better DX</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Component-based architecture with reusability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Modern React patterns and hooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Comprehensive error handling and validation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Second Row: Description on Left, Bundle Size on Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Side - Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Optimized Performance</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We prioritize performance optimization to ensure fast loading times, 
                smooth interactions, and excellent user experience across all devices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Code splitting and lazy loading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Image optimization and compression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Minimal bundle size with tree shaking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Efficient state management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>CDN integration for global performance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Bundle Size Display */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">E-commerce Site Bundle Analysis</h4>
            <div className="space-y-6">
              {/* Main Bundle */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Main Bundle</span>
                  <span className="text-sm text-muted-foreground">JavaScript</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>45%</span>
                  <span>234 KB</span>
                </div>
              </div>

              {/* CSS Bundle */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">CSS Bundle</span>
                  <span className="text-sm text-muted-foreground">Styles</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>25%</span>
                  <span>128 KB</span>
                </div>
              </div>

              {/* Images */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Images</span>
                  <span className="text-sm text-muted-foreground">Optimized</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>20%</span>
                  <span>102 KB</span>
                </div>
              </div>

              {/* Other Assets */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Other Assets</span>
                  <span className="text-sm text-muted-foreground">Fonts, Icons</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>10%</span>
                  <span>52 KB</span>
                </div>
              </div>

              {/* Total Size */}
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Bundle Size</span>
                  <span className="text-2xl font-bold text-primary">516 KB</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Optimized for fast loading and excellent performance
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeBlockSection;
