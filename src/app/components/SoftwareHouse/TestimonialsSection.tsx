import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import AnimatedBorder from '../ui/animated-border';

const testimonials = [
  {
    quote:
      'They delivered our MVP in 6 weeks with exceptional quality. The animations and performance are top-notch.',
    author: 'Ava Thompson',
    role: 'CTO, FinEdge',
  },
  {
    quote:
      'Our dashboard now loads 3x faster. The team understood our domain and executed flawlessly.',
    author: 'Liam Parker',
    role: 'Head of Product, LogiFlow',
  },
  {
    quote:
      'From UX to deployment, they handled everything. Communication was great and deadlines were met.',
    author: 'Maya Patel',
    role: 'Founder, CareSync',
  },
  {
    quote:
      'World-class engineering with a strong design sense. We saw conversion uplift within days.',
    author: 'Daniel Kim',
    role: 'Growth Lead, ShopSpark',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Client Testimonials</h2>
          <p className="mt-2 text-muted-foreground">What partners say about working with us</p>
        </header>

        <div className="relative">
          <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <AnimatedBorder 
                    className="h-full"
                    gradientTop="linear-gradient(90deg, #E63946, #F1A208)"
                    gradientRight="linear-gradient(180deg, #F1A208, #800020)"
                    gradientBottom="linear-gradient(90deg, #800020, #A52A2A)"
                    gradientLeft="linear-gradient(180deg, #A52A2A, #E63946)"
                    duration={4 + i * 0.3}
                  >
                    <article className="h-full rounded-xl bg-card p-6 shadow border-0">
                    <p className="text-foreground/90">“{t.quote}”</p>
                    <div className="mt-6">
                      <p className="font-medium text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                                          </div>
                    </article>
                  </AnimatedBorder>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" aria-label="Previous testimonial" />
            <CarouselNext className="-right-6" aria-label="Next testimonial" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
