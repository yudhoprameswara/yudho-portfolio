'use client';

import { portfolioData } from '../data/content';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

export default function About() {
  const { about } = portfolioData;

  return (
    <SectionWrapper id="about">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary tracking-tighter">01.</span> {about.title}
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-slate-300 text-lg leading-relaxed space-y-4">
          <p>{about.content}</p>
        </div>
        
        <div className="md:col-span-2 relative group w-full max-w-[300px] mx-auto">
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition duration-500"></div>
          
          <div className="relative aspect-square rounded-xl overflow-hidden border border-primary/20 bg-slate-800/50">
            <Image 
              src="/photos/profile.png" 
              alt="Yudho Prameswara" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-20 pointer-events-none"></div>
          </div>
          
          {/* Decorative frame */}
          <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
