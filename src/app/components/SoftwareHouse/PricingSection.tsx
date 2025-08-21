import React from 'react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$8k - $15k',
    points: ['MVP scope', 'Design system seed', 'Deployment setup'],
  },
  {
    name: 'Growth',
    price: '$20k - $40k',
    points: ['Feature sprints', 'Analytics & A/B', 'Performance tuning'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    points: ['Dedicated squad', 'SLA & monitoring', 'Roadmap partnership'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Pricing</h2>
          <p className="mt-2 text-muted-foreground">Flexible models that match your stage</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <article key={t.name} className="rounded-xl border border-border bg-card p-6 shadow">
              <h3 className="text-xl font-semibold text-foreground">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold text-foreground">{t.price}</p>
              <ul className="mt-4 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="text-muted-foreground">• {p}</li>
                ))}
              </ul>
              <Link href="/contact" className="story-link mt-6 inline-block text-primary">Get started</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
