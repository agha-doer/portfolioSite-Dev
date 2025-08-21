import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './ServicesSection.css';
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Palette,
  BarChart,
  Cog,
  ArrowRight
} from 'lucide-react';
import { useEffect } from 'react';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  // 🔹 Set default tilt & shine on mount
  useEffect(() => {
    const cards = document.querySelectorAll('.card-animated');
    cards.forEach((card) => {
      const el = card as HTMLDivElement;
      el.style.setProperty('--rx', `4deg`);
      el.style.setProperty('--ry', `-4deg`);
      el.style.setProperty('--mx', `60%`);
    });
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description:
        'Tailored software solutions built from scratch to meet your unique business requirements and objectives.',
      features: ['Full-stack development', 'API integrations', 'Database design', 'Performance optimization'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android apps', 'React Native', 'Flutter development', 'App store optimization'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description:
        'Modern, responsive web applications using the latest technologies and frameworks for optimal performance.',
      features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce solutions', 'CMS development'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Backend & Database Solutions',
      description:
        'Robust backend systems and database architectures that scale with your business growth.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database optimization'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Services',
      description:
        'Cloud infrastructure setup, deployment automation, and DevOps practices for seamless operations.',
      features: ['AWS/Azure/GCP', 'CI/CD pipelines', 'Docker containers', 'Monitoring & analytics'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description:
        'Comprehensive security audits, ongoing maintenance, and support to keep your applications secure.',
      features: ['Security audits', 'Performance monitoring', 'Bug fixes & updates', '24/7 support'],
      color: 'from-red-500 to-pink-500',
    },
  ];

  const processSteps = [
    { icon: Palette, title: 'Discovery & Design', description: 'Understanding your vision and creating the perfect blueprint' },
    { icon: Cog, title: 'Development', description: 'Building your solution with cutting-edge technologies' },
    { icon: BarChart, title: 'Testing & Launch', description: 'Rigorous testing and seamless deployment' },
    { icon: Shield, title: 'Support & Maintenance', description: 'Ongoing support to ensure optimal performance' },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end software development services 
            that drive innovation and deliver measurable business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Card
                className="h-full p-8 bg-card card-animated border-0"
                onMouseMove={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rx = ((y / rect.height) - 0.5) * -12;
                  const ry = ((x / rect.width) - 0.5) * 12;
                  target.style.setProperty('--rx', `${rx}deg`);
                  target.style.setProperty('--ry', `${ry}deg`);
                  target.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  // Instead of flat, go back to idle tilt
                  target.style.setProperty('--rx', `4deg`);
                  target.style.setProperty('--ry', `-4deg`);
                  target.style.setProperty('--mx', `60%`);
                }}
              >
                <div className="card-bg" />
                <div className="card-shine" />
                <div className="card-inner">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold mb-4 group-hover:text-white transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground group-hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.05 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-white transition-all duration-300" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    variant="default"
                    className="mt-4 px-5 py-2.5 rounded-lg btn-check btn-crazy text-white"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section — unchanged */}
                {/* Process Section */}
                <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.h3 
            className="font-display text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 }
            }}
          >
            Our Development <span className="text-gradient-primary">Process</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -90 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2 + index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3, type: "spring" }
                }}
                className="relative group"
              >
                {/* Step Number */}
                <motion.div 
                  className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6, type: "spring" }
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.5 + index * 0.3,
                    type: "spring",
                    bounce: 0.6
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  {index + 1}
                </motion.div>
                
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-card rounded-xl shadow-soft flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.8 + index * 0.3,
                    type: "spring",
                    bounce: 0.4
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl"
                    animate={{ 
                      x: [-100, 100],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <motion.h4 
                  className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(255,255,255,0.6)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {step.title}
                </motion.h4>
                {/* <motion.p 
                  className="text-muted-foreground text-sm group-hover:text-white transition-colors"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {step.description}
                </motion.p> */}
<motion.p
  className="flex items-center gap-2 text-muted-foreground text-sm group-hover:text-black transition-colors"
  whileHover={{
    scale: 1.02,
    transition: { duration: 0.3 }
  }}
>
  {step.description}
</motion.p>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="hidden md:block ml-7 absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-6"
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 2.5 + index * 0.2,
                      ease: "easeOut"
                    }}
                  />
                )}
                
                {/* Floating Particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{ 
                        y: [-10, 10, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5 + index * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ... rest of your process section code ... */}
      </div>
    </section>
  );
};

export default ServicesSection;
