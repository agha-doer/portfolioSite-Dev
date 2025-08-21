import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Palette, Rocket, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: Code,
      title: 'Expert Development',
      description: 'Our team of seasoned developers brings years of experience in cutting-edge technologies.'
    },
    {
      icon: Palette,
      title: 'Creative Solutions',
      description: 'We combine technical expertise with creative thinking to deliver innovative solutions.'
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Agile methodologies ensure rapid development cycles without compromising quality.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you throughout the entire process.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance processes ensure flawless delivery.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable business results and ROI for every project.'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">DevCraft Studios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just developers – we're digital craftsmen who transform your ideas into 
            powerful software solutions. With cutting-edge technology and creative innovation, 
            we deliver exceptional results that drive your business forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe in the transformative power of technology. Our mission is to bridge the gap 
              between complex business challenges and innovative digital solutions, empowering 
              companies to thrive in the digital age.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to enterprise-level organizations, we deliver scalable, secure, and 
              high-performance software solutions that drive measurable business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-8 shadow-medium hover-lift">
              <div className="bg-gradient-primary rounded-xl p-6 mb-6">
                <div className="w-16 h-16 bg-background/20 rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h4 className="font-display text-xl font-bold mb-3">DevCraft Studios</h4>
              <p className="text-muted-foreground">
                Your trusted partner for custom software development, web applications, and digital transformation
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft hover-lift text-center"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;