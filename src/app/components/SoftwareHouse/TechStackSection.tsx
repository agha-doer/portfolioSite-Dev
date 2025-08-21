import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Type, 
  Database, 
  Palette, 
  Zap, 
  Globe, 
  Cloud, 
  Shield, 
  Cpu, 
  Server, 
  CreditCard, 
  Wifi 
} from 'lucide-react';

const techs = [
  { 
    name: 'React', 
    icon: Code, 
    color: 'text-rosewood-600',
    bgGradient: 'from-rosewood-50 to-rosewood-100',
    borderGradient: 'from-rosewood-400 to-rosewood-600'
  },
  { 
    name: 'TypeScript', 
    icon: Type, 
    color: 'text-carmine-600',
    bgGradient: 'from-carmine-50 to-carmine-100',
    borderGradient: 'from-carmine-400 to-carmine-600'
  },
  { 
    name: 'Supabase', 
    icon: Database, 
    color: 'text-auburn-600',
    bgGradient: 'from-auburn-50 to-auburn-100',
    borderGradient: 'from-auburn-400 to-auburn-600'
  },
  { 
    name: 'Tailwind CSS', 
    icon: Palette, 
    color: 'text-burgundy-600',
    bgGradient: 'from-burgundy-50 to-burgundy-100',
    borderGradient: 'from-burgundy-400 to-burgundy-600'
  },
  { 
    name: 'Framer Motion', 
    icon: Zap, 
    color: 'text-cardinal-600',
    bgGradient: 'from-cardinal-50 to-cardinal-100',
    borderGradient: 'from-cardinal-400 to-cardinal-600'
  },
  { 
    name: 'Embla Carousel', 
    icon: Globe, 
    color: 'text-rosewood-700',
    bgGradient: 'from-rosewood-50 to-rosewood-100',
    borderGradient: 'from-rosewood-400 to-rosewood-600'
  },
  { 
    name: 'Vite', 
    icon: Zap, 
    color: 'text-carmine-700',
    bgGradient: 'from-carmine-50 to-carmine-100',
    borderGradient: 'from-carmine-400 to-carmine-600'
  },
  { 
    name: 'GraphQL', 
    icon: Code, 
    color: 'text-auburn-700',
    bgGradient: 'from-auburn-50 to-auburn-100',
    borderGradient: 'from-auburn-400 to-auburn-600'
  },
  { 
    name: 'AWS', 
    icon: Cloud, 
    color: 'text-burgundy-700',
    bgGradient: 'from-burgundy-50 to-burgundy-100',
    borderGradient: 'from-burgundy-400 to-burgundy-600'
  },
  { 
    name: 'PostgreSQL', 
    icon: Database, 
    color: 'text-cardinal-700',
    bgGradient: 'from-cardinal-50 to-cardinal-100',
    borderGradient: 'from-cardinal-400 to-cardinal-600'
  },
  { 
    name: 'Stripe', 
    icon: CreditCard, 
    color: 'text-rosewood-800',
    bgGradient: 'from-rosewood-50 to-rosewood-100',
    borderGradient: 'from-rosewood-400 to-rosewood-600'
  },
  { 
    name: 'Cloudflare', 
    icon: Shield, 
    color: 'text-carmine-800',
    bgGradient: 'from-carmine-50 to-carmine-100',
    borderGradient: 'from-carmine-400 to-carmine-600'
  },
  { 
    name: 'Node.js', 
    icon: Server, 
    color: 'text-auburn-800',
    bgGradient: 'from-auburn-50 to-auburn-100',
    borderGradient: 'from-auburn-400 to-auburn-600'
  },
  { 
    name: 'Next.js', 
    icon: Code, 
    color: 'text-burgundy-800',
    bgGradient: 'from-burgundy-50 to-burgundy-100',
    borderGradient: 'from-burgundy-400 to-burgundy-600'
  },
  { 
    name: 'MongoDB', 
    icon: Database, 
    color: 'text-cardinal-800',
    bgGradient: 'from-cardinal-50 to-cardinal-100',
    borderGradient: 'from-cardinal-400 to-cardinal-600'
  },
  { 
    name: 'Docker', 
    icon: Cpu, 
    color: 'text-rosewood-900',
    bgGradient: 'from-rosewood-50 to-rosewood-100',
    borderGradient: 'from-rosewood-400 to-rosewood-600'
  },
  { 
    name: 'Redis', 
    icon: Database, 
    color: 'text-carmine-900',
    bgGradient: 'from-carmine-50 to-carmine-100',
    borderGradient: 'from-carmine-400 to-carmine-600'
  },
  { 
    name: 'Socket.io', 
    icon: Wifi, 
    color: 'text-auburn-900',
    bgGradient: 'from-auburn-50 to-auburn-100',
    borderGradient: 'from-auburn-400 to-auburn-600'
  }
];

const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-gray-900">Tech Stack</h2>
          <p className="mt-2 text-gray-600">Tools we use to ship fast and reliably</p>
        </header>

        <div className="relative">
          {/* Infinite Scroll Container */}
          <div className="flex overflow-hidden">
            {/* First set of items */}
            <div 
              className="flex space-x-8 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
              }}
            >
              {techs.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-36 h-36"
                >
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${tech.bgGradient} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 group relative overflow-hidden border border-gray-200`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                    
                    {/* Icon Container */}
                    <motion.div
                      className={`w-14 h-14 mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className="w-full h-full drop-shadow-sm" />
                    </motion.div>
                    
                    {/* Tech Name */}
                    <span className="text-sm font-semibold text-gray-800 text-center leading-tight relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                      {tech.name}
                    </span>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second set of items (duplicate for seamless loop) */}
            <div 
              className="flex space-x-8 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
                animationDelay: '-15s',
              }}
            >
              {techs.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-36 h-36"
                >
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${tech.bgGradient} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 group relative overflow-hidden border border-gray-200`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                    
                    {/* Icon Container */}
                    <motion.div
                      className={`w-14 h-14 mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className="w-full h-full drop-shadow-sm" />
                    </motion.div>
                    
                    {/* Tech Name */}
                    <span className="text-sm font-semibold text-gray-800 text-center leading-tight relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                      {tech.name}
                    </span>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `
      }} />
    </section>
  );
};

export default TechStackSection;
