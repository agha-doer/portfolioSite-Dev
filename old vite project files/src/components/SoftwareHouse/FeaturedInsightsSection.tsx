import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimatedBorder from '@/components/ui/animated-border';

// Background Animation Components
const FloatingCube = ({ delay = 0, duration = 20, size = 4, color = 'rosewood' }) => (
  <motion.div
    className={`absolute w-${size} h-${size} bg-${color}-500/20 rounded-sm`}
    animate={{
      y: [0, -100, 0],
      x: [0, 50, 0],
      rotate: [0, 360],
      opacity: [0.2, 0.8, 0.2],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const FloatingSphere = ({ delay = 0, duration = 15, size = 6, color = 'carmine' }) => (
  <motion.div
    className={`absolute w-${size} h-${size} bg-${color}-400/30 rounded-full blur-sm`}
    animate={{
      y: [0, -80, 0],
      x: [0, -30, 0],
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.6, 0.1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const ShootingStar = ({ delay = 0, duration = 8 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gradient-to-r from-rosewood-400 to-transparent rounded-full"
    animate={{
      x: [-100, window.innerWidth + 100],
      y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      filter: 'blur(1px)',
    }}
  />
);

const BackgroundAnimation = () => {
  const [stars, setStars] = useState([]);
  const [cubes, setCubes] = useState([]);
  const [spheres, setSpheres] = useState([]);

  useEffect(() => {
    // Generate random shooting stars
    const newStars = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 6 + Math.random() * 4,
    }));
    setStars(newStars);

    // Generate random cubes
    const newCubes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 2 + Math.floor(Math.random() * 4),
      color: ['rosewood', 'carmine', 'auburn', 'burgundy', 'cardinal'][Math.floor(Math.random() * 5)],
    }));
    setCubes(newCubes);

    // Generate random spheres
    const newSpheres = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 8,
      size: 4 + Math.floor(Math.random() * 4),
      color: ['rosewood', 'carmine', 'auburn', 'burgundy', 'cardinal'][Math.floor(Math.random() * 5)],
    }));
    setSpheres(newSpheres);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <ShootingStar key={star.id} delay={star.delay} duration={star.duration} />
      ))}
      {cubes.map((cube) => (
        <FloatingCube key={cube.id} delay={cube.delay} duration={cube.duration} size={cube.size} color={cube.color} />
      ))}
      {spheres.map((sphere) => (
        <FloatingSphere key={sphere.id} delay={sphere.delay} duration={sphere.duration} size={sphere.size} color={sphere.color} />
      ))}
    </div>
  );
};

const FeaturedInsightsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const insights = [
    {
      type: 'Blogs',
      title: 'Custom Web Application Development: Everything You Need to Know',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
      icon: Code,
      gradient: 'from-rosewood-600 to-carmine-700'
    },
    {
      type: 'Case Study',
      title: 'Empowering XQUIC for Automated Financial Accuracy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      icon: BarChart3,
      gradient: 'from-auburn-600 to-burgundy-700'
    },
    {
      type: 'Case Study',
      title: 'Enabling Seamless Resale Operations Across E-Commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      icon: TrendingUp,
      gradient: 'from-cardinal-600 to-rosewood-700'
    },
    {
      type: 'Case Study',
      title: "KUDO's Journey to Bridging Global Communications",
      image: 'https://images.unsplash.com/photo-1526378800653-83df4e2492d6?w=400&h=250&fit=crop&crop=center',
      icon: Globe,
      gradient: 'from-burgundy-600 to-auburn-700'
    },
    {
      type: 'Blogs',
      title: 'How Cloud Computing Can Transform Small Businesses',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center',
      icon: Zap,
      gradient: 'from-carmine-600 to-cardinal-700'
    },
    {
      type: 'Blogs',
      title: 'How Generative AI is Transforming Business Operations',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center',
      icon: Users,
      gradient: 'from-rosewood-500 to-auburn-600'
    }
  ];

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Featured Insights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h3 
                className="text-rosewood-400 font-semibold text-sm uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Featured Insights
              </motion.h3>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Stories of our transformations across{' '}
                <span className="text-rosewood-400">Services and Industries</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                From Concept to Completion
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                className="bg-gradient-to-r from-rosewood-600 to-carmine-600 hover:from-rosewood-700 hover:to-carmine-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                size="lg"
              >
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Content Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
              >
                                 <AnimatedBorder 
                   className="h-48"
                   topColor="rosewood-400"
                   rightColor="carmine-400"
                   bottomColor="auburn-400"
                   leftColor="burgundy-400"
                   delay={index * 0.2}
                 >
                  <Card className="relative overflow-hidden bg-gray-800 border-0 transition-all duration-300 h-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${insight.image})` }}
                    />
                    
                    {/* Background Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <insight.icon className="h-4 w-4 text-rosewood-400" />
                          <span className="text-xs font-medium text-rosewood-400 uppercase tracking-wider">
                            {insight.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="text-sm font-semibold text-white leading-tight line-clamp-3 group-hover:text-rosewood-300 transition-colors duration-300">
                          {insight.title}
                        </h3>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </AnimatedBorder>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
