import React from 'react';
import { Link } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import AnimatedBorder from '@/components/ui/animated-border';

const posts = [
  {
    title: 'Improving LCP on SPA apps',
    excerpt: 'Techniques we use to ship blazing fast single page apps that score green on CWV.',
  },
  {
    title: 'Design systems at scale',
    excerpt: 'How a robust token system accelerates delivery and keeps UX consistent.',
  },
  {
    title: 'Motion for meaning',
    excerpt: 'Using animations to inform, not distract. Patterns that work for enterprise.',
  },
  {
    title: 'From MVP to V1',
    excerpt: 'Structuring your codebase to evolve gracefully as product-market fit sharpens.',
  },
];

const BlogCarouselSection: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-muted/20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Insights</h2>
          <p className="mt-2 text-muted-foreground">Ideas from our engineering and design teams</p>
        </header>

        <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })]}>
          <CarouselContent>
            {posts.map((p, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <AnimatedBorder 
                  className="h-full"
                  gradientTop="linear-gradient(90deg, #9d174d, #960018)"
                  gradientRight="linear-gradient(180deg, #960018, #A52A2A)"
                  gradientBottom="linear-gradient(90deg, #A52A2A, #dc2626)"
                  gradientLeft="linear-gradient(180deg, #dc2626, #9d174d)"
                >
                  <article className="h-full rounded-xl bg-card p-6 shadow hover:shadow-lg transition-shadow border-0">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                                      <Link to="/contact" className="story-link mt-6 inline-block text-primary">Read more</Link>
                  </article>
                </AnimatedBorder>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" aria-label="Previous post" />
          <CarouselNext className="-right-6" aria-label="Next post" />
        </Carousel>
      </div>
    </section>
  );
};

export default BlogCarouselSection;
