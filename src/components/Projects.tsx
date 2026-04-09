'use client';

import { portfolioData } from '../data/content';
import SectionWrapper from './SectionWrapper';
import { FiExternalLink, FiGithub, FiFolder, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary tracking-tighter">03.</span> Featured Projects
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group relative overflow-hidden"
          >
            {/* Background subtle glow effect on hover */}
            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex justify-between items-center mb-6 z-10">
              <FiFolder size={40} className="text-primary" />
              <div className="flex gap-4 items-center">
                {project.gitHubLink !== '#' ? (
                  <a href={project.gitHubLink} className="text-slate-400 hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                    <FiGithub size={22} />
                  </a>
                ) : null}
                {project.liveLink !== '#' ? (
                  <a href={project.liveLink} className="text-slate-400 hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                    <FiExternalLink size={22} />
                  </a>
                ) : null}
                
                {project.gitHubLink === '#' && project.liveLink === '#' && (
                  <div className="flex items-center gap-1.5 text-slate-500 bg-slate-800/80 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700/50">
                    <FiLock size={14} />
                    <span>Confidential / Internal</span>
                  </div>
                )}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-primary transition-colors z-10">
              {project.title}
            </h3>
            
            <p className="text-slate-400 mb-8 leading-relaxed z-10 flex-grow">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-mono z-10">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
