import { portfolioData } from '../data/content';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const { contact } = portfolioData;

  return (
    <footer className="py-8 text-center text-slate-500 font-mono text-sm mt-20">
      <div className="flex justify-center gap-6 mb-6">
        <a href={contact.github} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
          <FiGithub size={20} />
        </a>
        <a href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://${contact.linkedin}`} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
          <FiLinkedin size={20} />
        </a>
        <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
          <FiMail size={20} />
        </a>
        <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
          <FiPhone size={20} />
        </a>
      </div>
      <div>
        <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        <p className="mt-2 text-slate-600">© {new Date().getFullYear()} Yudho Prameswara</p>
      </div>
    </footer>
  );
}
