import React from 'react';
import Link from 'next/link';
import AnimatedBorder from '../ui/animated-border';

const roles = [
  { title: 'Senior Frontend Engineer', type: 'Remote', tag: 'React, TS, Animations' },
  { title: 'Product Designer', type: 'Remote', tag: 'Design Systems, Prototyping' },
  { title: 'Tech Lead', type: 'Hybrid', tag: 'Architecture, Delivery' },
];

const CareersSection: React.FC = () => {
  return (
    <section id="careers" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Careers</h2>
          <p className="mt-2 text-muted-foreground">Join a team that ships beautiful software</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, index) => (
            <AnimatedBorder 
              key={r.title}
              className="h-full"
              gradientTop="linear-gradient(90deg, #800020, #960018)"
              gradientRight="linear-gradient(180deg, #960018, #A52A2A)"
              gradientBottom="linear-gradient(90deg, #A52A2A, #9d174d)"
              gradientLeft="linear-gradient(180deg, #9d174d, #800020)"
            >
              <article className="rounded-xl bg-card p-6 shadow border-0 h-full">
              <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.type}</p>
              <p className="mt-2 text-muted-foreground">{r.tag}</p>
                              <Link href="/contact" className="story-link mt-4 inline-block text-primary">Apply now</Link>
              </article>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
