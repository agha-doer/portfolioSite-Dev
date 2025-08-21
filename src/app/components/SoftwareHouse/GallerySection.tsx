import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import AnimatedBorder from '../ui/animated-border';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    alt: 'E-commerce Platform Dashboard',
    service: 'E-commerce Development',
    description: 'Custom online stores with payment integration'
  },
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center',
    alt: 'Mobile App Development',
    service: 'Mobile App Development',
    description: 'iOS & Android native applications'
  },
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center',
    alt: 'Web Application Interface',
    service: 'Web Applications',
    description: 'Custom web solutions & dashboards'
  },
  {
    src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
    alt: 'Data Analytics Dashboard',
    service: 'Data Analytics',
    description: 'Business intelligence & reporting'
  },
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center',
    alt: 'Code Development Workspace',
    service: 'Custom Development',
    description: 'Tailored software solutions'
  },
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center',
    alt: 'UI/UX Design Process',
    service: 'UI/UX Design',
    description: 'User-centered design systems'
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    alt: 'Project Management System',
    service: 'Project Management',
    description: 'Agile development & delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center',
    alt: 'Software Architecture',
    service: 'System Architecture',
    description: 'Scalable & secure infrastructure'
  },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Project Gallery</h2>
          <p className="mt-2 text-muted-foreground">A glimpse at interactions and UI systems</p>
        </header>

        <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]}>
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <AnimatedBorder
                  className="h-56 group cursor-pointer"
                  gradientTop="linear-gradient(90deg, #65000B, #960018)"
                  gradientRight="linear-gradient(180deg, #960018, #A52A2A)"
                  gradientBottom="linear-gradient(90deg, #A52A2A, #800020)"
                  gradientLeft="linear-gradient(180deg, #800020, #65000B)"
                  duration={4}
                >
                  <figure className="overflow-hidden rounded-xl border-0 bg-card h-full relative">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-50" 
                    />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{img.service}</h3>
                      <p className="text-gray-200 text-sm">{img.description}</p>
                    </div>
                  </figure>
                </AnimatedBorder>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" aria-label="Previous image" />
          <CarouselNext className="-right-6" aria-label="Next image" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
