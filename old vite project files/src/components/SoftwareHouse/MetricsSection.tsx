import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';

const metrics = [
  { label: 'Projects Delivered', value: '120+', icon: Star },
  { label: 'Avg. Time to MVP', value: '6-8 weeks', icon: Zap },
  { label: 'Client NPS', value: '72', icon: Star },
  { label: 'Uptime on Managed Apps', value: '99.95%', icon: Zap },
];

const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rosewood-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-carmine-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-auburn-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <header className="mb-16 text-center">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            By the Numbers
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Proof that our process works and delivers exceptional results
          </motion.p>
        </header>

        {/* Metrics Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {metrics.map((m, index) => (
            <motion.div
              key={m.label}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rosewood-500 via-carmine-500 to-auburn-500 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900"></div>
              </div>
              
              <article className="relative rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 text-center border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rosewood-500 to-carmine-600 flex items-center justify-center">
                  <m.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{m.value}</p>
                <p className="text-gray-300 font-medium">{m.label}</p>
              </article>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background Image with Mask */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&crop=center" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-rosewood-900/90 via-carmine-900/80 to-auburn-900/90"></div>
          </div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into reality with cutting-edge technology and innovative design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-rosewood-600 to-carmine-600 hover:from-rosewood-700 hover:to-carmine-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-gray-300 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
