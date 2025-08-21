import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What industries do you specialize in?',
    a: 'We focus on fintech, logistics, health, and B2B SaaS with a strong emphasis on performance and accessibility.',
  },
  {
    q: 'What is your typical engagement model?',
    a: 'We work in agile sprints with weekly demos. Fixed-scope and dedicated-team models are available.',
  },
  {
    q: 'Do you handle design and development?',
    a: 'Yes. We deliver end-to-end—research, UX/UI, frontend, and integrations with your existing stack.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">FAQs</h2>
          <p className="mt-2 text-muted-foreground">Answers to common questions</p>
        </header>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
