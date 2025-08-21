import React from 'react';
import AnimatedBorder from '@/components/ui/animated-border';

const cases = [
  {
    title: 'AI-Powered Analytics Platform',
    summary:
      'Reduced query latency by 68% with reactive caching and chart virtualization. Delivered a modular design system for rapid feature rollout.',
    tags: ['React', 'Recharts', 'Edge Caching'],
  },
  {
    title: 'E-commerce Performance Revamp',
    summary:
      'Implemented SSR-like patterns on SPA, optimized images, and improved core web vitals to green across devices.',
    tags: ['Vite', 'Lazy Loading', 'Perf'],
  },
  {
    title: 'Healthcare Portal Redesign',
    summary:
      'Accessible UI with WCAG AA compliance, secure auth flows, and streamlined onboarding.',
    tags: ['Accessibility', 'Auth', 'Design System'],
  },
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-muted/20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Case Studies</h2>
          <p className="mt-2 text-muted-foreground">Selected work with measurable outcomes</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, idx) => (
            <AnimatedBorder 
              className="h-full"
              topColor="burgundy-400"
              rightColor="auburn-400"
              bottomColor="rosewood-400"
              leftColor="carmine-400"
              delay={idx * 0.2}
            >
              <article
                key={idx}
                className="group relative rounded-xl bg-card p-6 shadow hover:shadow-lg transition-shadow border-0 h-full"
              >
              <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-secondary/40 px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
                              </ul>
              </article>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
