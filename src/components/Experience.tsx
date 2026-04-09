'use client';

import { portfolioData } from '../data/content';
import SectionWrapper from './SectionWrapper';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary tracking-tighter">04.</span> Experience
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-slate-700 group-hover:bg-primary transition-colors duration-300 ring-4 ring-background"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
              <h3 className="text-xl font-bold text-slate-200">{exp.role}</h3>
              <span className="text-primary font-medium">@ {exp.company}</span>
            </div>
            
            <span className="text-sm font-mono text-slate-500 block mb-4">
              {exp.duration}
            </span>
            
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
