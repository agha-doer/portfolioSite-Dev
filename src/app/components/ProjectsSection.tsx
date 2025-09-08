import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';
import AnimatedBorder from './ui/animated-border';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      id: 1,
      title: 'SaaS Admin Panel',
      description: 'React + Tailwind CSS dashboard with intuitive billing & analytics interface. Features real-time data visualization, user management, and comprehensive reporting tools.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'ERP HR & Finance UI',
      description: 'Angular + RxJS application optimized for 10k+ daily active users. Streamlined workflows for HR management and financial operations with real-time data synchronization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
      tags: ['Angular 17', 'RxJS', 'TypeScript', 'Angular Material'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'eCommerce Front-End',
      description: 'React + Stripe API integration with simplified checkout flow and accessible forms. Mobile-first design with optimized conversion rates and seamless payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
      tags: ['React 18', 'Stripe API', 'Tailwind CSS', 'Accessibility'],
      github: '#',
      demo: '#',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Real-Time Dashboard',
      description: 'Angular + WebSockets application for live data visualization in logistics. Interactive mapping interfaces with real-time updates and comprehensive analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
      tags: ['Angular 17', 'WebSockets', 'Mapbox', 'RxJS'],
      github: '#',
      demo: '#',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient-primary">Strengths</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Senior Front-End Engineer with expertise in UI/UX design, modern frameworks, and performance optimization. 
            Specializing in React 18, Angular 17, and TypeScript with a focus on creating engaging, accessible, and responsive user interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <AnimatedBorder 
                className="h-full"
                gradientTop="linear-gradient(90deg, #9d174d, #991b1b)"
                gradientRight="linear-gradient(180deg, #991b1b, #92400e)"
                gradientBottom="linear-gradient(90deg, #92400e, #dc2626)"
                gradientLeft="linear-gradient(180deg, #dc2626, #9d174d)"
                duration={4 + index * 0.3}
              >
                <Card className="overflow-hidden shadow-medium hover-lift bg-card border-0 h-full">
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-bold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                                  </div>
                </Card>
              </AnimatedBorder>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg hover-lift"
          >
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;