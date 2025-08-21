import React from 'react';
import AnimatedBorder from '@/components/ui/animated-border';

const awards = [
  { name: 'Awwwards SOTD', year: '2024' },
  { name: 'CSS Design Awards', year: '2023' },
  { name: 'Product Hunt Top 5', year: '2024' },
];

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-muted/20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Awards</h2>
          <p className="mt-2 text-muted-foreground">Recognition for our work</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, index) => (
            <AnimatedBorder 
              key={a.name}
              className="h-full"
              topColor="cardinal-400"
              rightColor="rosewood-400"
              bottomColor="carmine-400"
              leftColor="auburn-400"
              delay={index * 0.3}
            >
              <article className="rounded-xl bg-card p-6 text-center shadow border-0 h-full">
              <h3 className="text-lg font-semibold text-foreground">{a.name}</h3>
                              <p className="text-muted-foreground">{a.year}</p>
              </article>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
