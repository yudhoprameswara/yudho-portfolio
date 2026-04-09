'use client';

import { portfolioData } from '../data/content';
import SectionWrapper from './SectionWrapper';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <SectionWrapper id="contact" className="min-h-[70vh] items-center text-center">
      <p className="text-primary font-mono mb-4 block">05. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
        Get In Touch
      </h2>
      
      <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
        Currently looking for new opportunities as an Angular/Frontend Developer.
        Whether you have a question or just want to say hi, I'll try my best
        to get back to you!
      </p>
      
      <a 
        href={`mailto:${contact.email}`}
        className="inline-block border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-medium transition-colors duration-300"
      >
        Say Hello
      </a>
    </SectionWrapper>
  );
}
