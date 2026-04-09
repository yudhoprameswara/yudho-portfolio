'use client';

import { portfolioData } from '../data/content';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary tracking-tighter">02.</span> Tech Stack
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-200 border-b border-slate-700 pb-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3 mt-auto">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-800/80 text-primary text-sm font-medium rounded-full cursor-default hover:bg-slate-700 hover:text-white border border-primary/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
