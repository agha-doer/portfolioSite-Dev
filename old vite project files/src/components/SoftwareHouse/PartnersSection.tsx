import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const clients = [
  'FinEdge',
  'LogiFlow',
  'CareSync',
  'ShopSpark',
  'NovaPay',
  'OmniWare',
  'UrbanCart',
  'DataForge',
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Trusted by</h2>
          <p className="mt-2 text-muted-foreground">Companies partnering with our team</p>
        </header>

        <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2200, stopOnInteraction: false, stopOnMouseEnter: true })]}>
          <CarouselContent>
            {clients.map((c) => (
              <CarouselItem key={c} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="h-20 rounded-lg border border-border bg-card grid place-items-center shadow">
                  <span className="text-sm text-muted-foreground">{c}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" aria-label="Previous partner" />
          <CarouselNext className="-right-6" aria-label="Next partner" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;
