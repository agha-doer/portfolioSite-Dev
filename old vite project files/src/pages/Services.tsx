import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import AdvancedStickyButton from '@/components/AdvancedStickyButton';
import Footer from '@/components/Footer';
import SampleImage from '@/components/SampleImage';
import ContactSection from '@/components/ContactSection';
import { Code, Smartphone, Globe, Database, Cloud, Shield, Palette, BarChart, Cog, ArrowRight, Zap, Users, Target, Award } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiGo, SiPostgresql, SiMongodb, SiRedis, SiMysql, SiFirebase } from "react-icons/si";


const techIcons = {
  React: <FaReact className="text-sky-500 text-3xl" />,
  "Next.js": <SiNextdotjs className="text-black text-3xl" />,
  "Vue.js": <SiVuedotjs className="text-green-500 text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500 text-3xl" />,
  "Node.js": <FaNodeJs className="text-green-600 text-3xl" />,
  Python: <FaPython className="text-yellow-500 text-3xl" />,
  Java: <FaJava className="text-red-500 text-3xl" />,
  Go: <SiGo className="text-sky-600 text-3xl" />,
  PHP: <FaPhp className="text-indigo-500 text-3xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-700 text-3xl" />,
  MongoDB: <SiMongodb className="text-green-700 text-3xl" />,
  Redis: <SiRedis className="text-red-600 text-3xl" />,
  MySQL: <SiMysql className="text-blue-500 text-3xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-3xl" />,
};


const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - DevCraft Studios';
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      <AdvancedStickyButton 
        text="Get Started"
        mobileText="Services"
        scrollBehavior="fixed"
        colorScheme="auburn"
        onClick={() => {
          // Navigate to contact page to start a project
          window.location.href = '/contact';
        }}
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gentle Floating Stars */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-rosewood-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
            
            {/* Subtle Shimmering Dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-1.5 h-1.5 bg-rosewood-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
            
            {/* Random Direction Moving Lines */}
            {[...Array(6)].map((_, i) => {
              const directions = ['horizontal', 'vertical', 'diagonal-up', 'diagonal-down', 'curved'];
              const direction = directions[Math.floor(Math.random() * directions.length)];
              const angle = Math.random() * 360;
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              
              let animateProps = {};
              
              switch(direction) {
                case 'horizontal':
                  animateProps = {
                    x: [-200, window.innerWidth + 200],
                    y: [0, 0],
                    opacity: [0, 0.6, 0],
                  };
                  break;
                case 'vertical':
                  animateProps = {
                    x: [0, 0],
                    y: [-200, window.innerHeight + 200],
                    opacity: [0, 0.6, 0],
                  };
                  break;
                case 'diagonal-up':
                  animateProps = {
                    x: [-300, window.innerWidth + 300],
                    y: [window.innerHeight + 300, -300],
                    opacity: [0, 0.6, 0],
                  };
                  break;
                case 'diagonal-down':
                  animateProps = {
                    x: [-300, window.innerWidth + 300],
                    y: [-300, window.innerHeight + 300],
                    opacity: [0, 0.6, 0],
                  };
                  break;
                case 'curved':
                  animateProps = {
                    x: [-200, window.innerWidth / 2, window.innerWidth + 200],
                    y: [0, -100, 0],
                    opacity: [0, 0.6, 0],
                  };
                  break;
                default:
                  animateProps = {
                    x: [-200, window.innerWidth + 200],
                    y: [0, 0],
                    opacity: [0, 0.6, 0],
                  };
              }
              
              return (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-0.5 bg-gradient-to-r from-transparent via-rosewood-400 to-transparent"
                  style={{
                    left: `${startX}%`,
                    top: `${startY}%`,
                    width: `${80 + Math.random() * 120}px`,
                    transform: direction.includes('diagonal') ? `rotate(${angle}deg)` : 'none',
                  }}
                  animate={animateProps}
                  transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
          
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-gradient-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
                we handle every aspect of your digital transformation.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Excellence</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We specialize in creating cutting-edge digital solutions that drive business growth. 
                  Our team of experts combines technical expertise with creative innovation to deliver 
                  exceptional results that exceed expectations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-rosewood-600 rounded-full"></div>
                    <span className="text-gray-700">Custom software development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-carmine-600 rounded-full"></div>
                    <span className="text-gray-700">Mobile app development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-auburn-600 rounded-full"></div>
                    <span className="text-gray-700">Web application development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-burgundy-600 rounded-full"></div>
                    <span className="text-gray-700">UI/UX design services</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <SampleImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                  alt="Web Development"
                  className="w-full h-96 shadow-bold"
                  overlay={true}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Cards Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gentle Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-rosewood-200 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-8, 8, -8],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
            
            {/* Rotating Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute border border-rosewood-200 rounded-full opacity-20"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + i * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Showcasing our expertise through successful client projects
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
                  title: "Irreplicable",
                  description: "High-converting landing page for premium ghostwriting services.",
                  features: ["Increased conversions", "Improved lead quality"],
                  technologies: ["React", "Tailwind CSS", "GSAP"],
                  liveUrl: "#",
                  caseStudyUrl: "#",
                  hasLive: true
                },
                {
                  image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
                  title: "Give 2 Grow",
                  description: "A revolutionary school donation platform connecting brands with moms through purpose-driven marketing.",
                  features: ["35+ years of proven success", "Millions given to schools annually"],
                  technologies: ["React", "Node.js", "PostgreSQL", "+1"],
                  liveUrl: "#",
                  caseStudyUrl: "#",
                  hasLive: true
                },
                {
                  image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                  title: "My Tube Platform",
                  description: "Video metadata management system for media and manufacturing.",
                  features: ["Faster metadata processing", "High user satisfaction"],
                  technologies: ["React", "Node.js", "AI/ML", "+1"],
                  liveUrl: "#",
                  caseStudyUrl: "#",
                  hasLive: false
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-bold hover-lift border border-gray-200"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                    
                    {/* Animated Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: [-100, 100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    
                    {/* Floating Dots */}
                    {[...Array(3)].map((_, dotIndex) => (
                      <motion.div
                        key={dotIndex}
                        className="absolute w-1 h-1 bg-white/60 rounded-full"
                        style={{
                          left: `${20 + dotIndex * 30}%`,
                          top: `${30 + dotIndex * 20}%`,
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: dotIndex * 0.3 + index * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Key Benefits</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-rosewood-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex gap-3">
                      {project.hasLive && (
                        <motion.button
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-rosewood-600 to-rosewood-700 hover:from-rosewood-700 hover:to-rosewood-800 text-white rounded-lg font-medium text-sm transition-all shadow-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Live Website
                        </motion.button>
                      )}
                      <motion.button
                        className={`px-4 py-2 border border-gray-300 hover:border-rosewood-500 text-gray-700 hover:text-rosewood-700 rounded-lg font-medium text-sm transition-colors ${project.hasLive ? 'flex-1' : 'w-full'}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Read Case Study
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Custom Software Development',
                  description: 'Tailored software solutions built from scratch to meet your unique business requirements.',
                  features: ['Full-stack development', 'API integrations', 'Database design', 'Performance optimization'],
                  color: 'from-rosewood-600 to-rosewood-800'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile App Development',
                  description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
                  features: ['iOS & Android apps', 'React Native', 'Flutter development', 'App store optimization'],
                  color: 'from-carmine-600 to-carmine-800'
                },
                {
                  icon: Globe,
                  title: 'Web Application Development',
                  description: 'Modern, responsive web applications using the latest technologies and frameworks.',
                  features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce solutions', 'CMS development'],
                  color: 'from-auburn-600 to-auburn-800'
                },
                {
                  icon: Database,
                  title: 'Backend & Database Solutions',
                  description: 'Robust backend systems and database architectures that scale with your business.',
                  features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database optimization'],
                  color: 'from-burgundy-600 to-burgundy-800'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Infrastructure',
                  description: 'Scalable cloud solutions that ensure high availability and performance.',
                  features: ['AWS/Azure/GCP', 'DevOps automation', 'CI/CD pipelines', 'Monitoring & logging'],
                  color: 'from-cardinal-600 to-cardinal-800'
                },
                {
                  icon: Shield,
                  title: 'Security & Compliance',
                  description: 'Enterprise-grade security solutions to protect your data and ensure compliance.',
                  features: ['Security audits', 'Penetration testing', 'GDPR compliance', 'Data encryption'],
                  color: 'from-rosewood-700 to-rosewood-900'
                }
              ].map((service, index) => (
                                 <motion.div
                   key={service.title}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: index * 0.1 }}
                   className="service-card-animated p-8"
                 >
                   <div className="service-card-inner">
                     <div className={`service-card-icon bg-gradient-to-r ${service.color}`}>
                       <service.icon className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="service-card-title">{service.title}</h3>
                     <p className="service-card-description">{service.description}</p>
                     <ul className="service-card-features">
                       {service.features.map((feature, idx) => (
                         <li key={idx} className="service-card-feature">
                           <div className="service-card-feature-dot"></div>
                           {feature}
                         </li>
                       ))}
                     </ul>
                   </div>
                 </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Discovery', description: 'Understanding your requirements and objectives', icon: Target },
                { number: '02', title: 'Planning', description: 'Creating detailed project roadmap and architecture', icon: BarChart },
                { number: '03', title: 'Development', description: 'Building your solution with best practices', icon: Code },
                { number: '04', title: 'Launch', description: 'Deploying and maintaining your application', icon: Zap }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technologies to build robust and scalable solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: "Frontend",
              technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
            },
            {
              category: "Backend",
              technologies: ["Node.js", "Python", "Java", "Go", "PHP"],
            },
            {
              category: "Database",
              technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
            },
          ].map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 animated-border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{tech.category}</h3>
              <div className="space-y-3">
                {tech.technologies.map((technology) => (
                  <div key={technology} className="flex items-center justify-between">
                    <span className="text-gray-700">{technology}</span>
                    {techIcons[technology] || <FaDatabase className="text-gray-400 text-3xl" />}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional results through expertise, innovation, and dedication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Expert Team', description: 'Seasoned professionals with years of experience' },
                { icon: Award, title: 'Quality Assured', description: 'Rigorous testing and quality control processes' },
                { icon: Target, title: 'Results Driven', description: 'Focus on delivering measurable business outcomes' },
                { icon: Cog, title: 'Continuous Support', description: 'Ongoing maintenance and support services' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-white shadow-medium hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gentle Shimmering Stars */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Subtle Pulsing Circles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute border border-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${80 + Math.random() * 120}px`,
                  height: `${80 + Math.random() * 120}px`,
                }}
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
            
            {/* Gentle Light Lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`light-line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${25 + Math.random() * 50}%`,
                  width: `${120 + Math.random() * 100}px`,
                }}
                animate={{
                  x: [-250, window.innerWidth + 250],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 12 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 6,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-6 text-center">

              {/* Multi-Direction Moving Lines */}
              {[...Array(5)].map((_, i) => {
                const directions = ['horizontal', 'vertical', 'diagonal', 'wave'];
                const direction = directions[Math.floor(Math.random() * directions.length)];
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                
                let animateProps = {};
                
                switch(direction) {
                  case 'horizontal':
                    animateProps = {
                      x: [-300, window.innerWidth + 300],
                      y: [0, 0],
                      opacity: [0, 0.5, 0],
                    };
                    break;
                  case 'vertical':
                    animateProps = {
                      x: [0, 0],
                      y: [-300, window.innerHeight + 300],
                      opacity: [0, 0.5, 0],
                    };
                    break;
                  case 'diagonal':
                    animateProps = {
                      x: [-400, window.innerWidth + 400],
                      y: [-200, window.innerHeight + 200],
                      opacity: [0, 0.5, 0],
                    };
                    break;
                  case 'wave':
                    animateProps = {
                      x: [-200, window.innerWidth / 3, window.innerWidth * 2/3, window.innerWidth + 200],
                      y: [0, -50, 50, 0],
                      opacity: [0, 0.5, 0.5, 0],
                    };
                    break;
                  default:
                    animateProps = {
                      x: [-300, window.innerWidth + 300],
                      y: [0, 0],
                      opacity: [0, 0.5, 0],
                    };
                }
                
                return (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    style={{
                      left: `${startX}%`,
                      top: `${startY}%`,
                      width: `${120 + Math.random() * 100}px`,
                      transform: direction === 'diagonal' ? `rotate(${Math.random() > 0.5 ? 45 : -45}deg)` : 'none',
                    }}
                    animate={animateProps}
                    transition={{
                      duration: 12 + Math.random() * 8,
                      repeat: Infinity,
                      delay: Math.random() * 10,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-rosewood-800 rounded-xl font-semibold text-lg shadow-bold hover-lift flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
