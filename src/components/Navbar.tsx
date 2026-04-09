'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary tracking-tighter">YP.</a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="text-primary/70 text-xs font-mono">0{i + 1}.</span> {link.name}
            </a>
          ))}
          <a 
            href="/Yudho_Prameswara_CV.pdf" 
            target="_blank"
            rel="noreferrer"
            className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded font-medium text-sm transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button placeholder */}
        <button className="md:hidden text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
