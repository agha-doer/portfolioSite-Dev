import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GlowingCards, GlowingCard } from '../lightswind/glowing-cards';
import { Rocket, Zap, TrendingUp, Award, Star, Users, Code, Shield } from 'lucide-react';

const GlowingCardsDemo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const cards = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
      glowColor: "#9d174d", // Rosewood
      stats: "10x Faster"
    },
    {
      icon: Zap,
      title: "AI Powered",
      description: "Intelligent automation and insights",
      glowColor: "#991b1b", // Carmine
      stats: "99% Accuracy"
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Grows with your business needs",
      glowColor: "#92400e", // Auburn
      stats: "∞ Scale"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence",
      glowColor: "#b91c1c", // Cardinal
      stats: "50+ Awards"
    },
    {
      icon: Users,
      title: "User Centric",
      description: "Designed for real people",
      glowColor: "#7f1d1d", // Burgundy
      stats: "1M+ Users"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable and efficient",
      glowColor: "#9d174d", // Rosewood
      stats: "100% Clean"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Background Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-rosewood-500/5 to-carmine-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rosewood-500/20 to-carmine-500/20 px-6 py-3 rounded-full mb-8"
          >
            <Star className="w-5 h-5 text-rosewood-500" />
            <span className="text-sm font-semibold text-rosewood-600">Interactive Cards</span>
          </motion.div>
          
          <h2 className="font-display text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-rosewood-600 via-carmine-600 to-burgundy-600 bg-clip-text text-transparent">
            Glowing Cards
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience our interactive glowing cards with mouse-following effects
          </p>
        </motion.div>

        {/* Glowing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GlowingCards
            enableGlow={true}
            glowRadius={30}
            glowOpacity={0.8}
            animationDuration={300}
            gap="2rem"
            maxWidth="80rem"
            padding="2rem"
            responsive={true}
            customTheme={{
              '--card-bg': 'rgba(255, 255, 255, 0.05)',
              '--card-border': 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                                 <GlowingCard
                   glowColor={card.glowColor}
                   className="backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                 >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-rosewood-500 to-carmine-600 flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {React.createElement(card.icon, { className: "w-8 h-8 text-white" })}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-4">
                      <div className="text-lg font-semibold bg-gradient-to-r from-rosewood-600 to-carmine-600 bg-clip-text text-transparent">
                        {card.stats}
                      </div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </GlowingCards>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rosewood-500/10 to-carmine-500/10 px-6 py-3 rounded-full">
            <span className="text-sm text-muted-foreground">
              💡 Move your mouse over the cards to see the glowing effect
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlowingCardsDemo;
