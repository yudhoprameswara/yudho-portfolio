'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium mb-4 text-lg"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 glow-text"
        >
          {hero.name}.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-400 mb-6"
        >
          {hero.headline}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          {hero.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
            View Projects <FiArrowRight size={20} />
          </a>
          <a 
            href="/Yudho_Prameswara_CV.pdf" 
            download="Yudho_Prameswara_CV.pdf"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-foreground border border-slate-700 hover:border-slate-600 font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            <FiDownload size={20} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
