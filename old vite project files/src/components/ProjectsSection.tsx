import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';
import AnimatedBorder from '@/components/ui/animated-border';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with beautiful visualizations, location-based forecasts, and detailed weather analytics.',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'D3.js', 'OpenWeather API', 'Tailwind'],
      github: '#',
      demo: '#',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for social media insights with interactive charts, engagement metrics, and performance tracking.',
      image: '/placeholder.svg',
      tags: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
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
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring web applications built with modern technologies 
            and best practices. Each project represents a unique challenge and creative solution.
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
                topColor="rosewood-400"
                rightColor="carmine-400"
                bottomColor="auburn-400"
                leftColor="burgundy-400"
                delay={index * 0.3}
              >
                <Card className="overflow-hidden shadow-medium hover-lift bg-card border-0 h-full">
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-br ${project.color} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-foreground/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale"
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
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;