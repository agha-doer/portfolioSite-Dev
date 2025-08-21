import React from 'react';
import AnimatedBorder from '@/components/ui/animated-border';

const members = [
  { name: 'Elena Rivera', role: 'Creative Director' },
  { name: 'Noah Williams', role: 'Lead Engineer' },
  { name: 'Sophia Chen', role: 'Product Designer' },
  { name: 'James Moore', role: 'Solutions Architect' },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Team</h2>
          <p className="mt-2 text-muted-foreground">Senior experts dedicated to your success</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, index) => (
            <AnimatedBorder 
              key={m.name}
              className="h-full"
              topColor="auburn-400"
              rightColor="burgundy-400"
              bottomColor="cardinal-400"
              leftColor="rosewood-400"
              delay={index * 0.2}
            >
              <article className="rounded-xl bg-card p-6 text-center shadow border-0 h-full">
              <img
                src="/placeholder.svg"
                alt={`${m.name} - ${m.role}`}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{m.name}</h3>
                              <p className="text-sm text-muted-foreground">{m.role}</p>
              </article>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
