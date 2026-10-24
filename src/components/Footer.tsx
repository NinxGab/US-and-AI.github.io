import React from 'react';
import { BookOpen, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                AI <span className="text-cyan-400 font-light">&</span> Us
              </span>
              <span className="text-[10px] font-mono-data tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-700/50">
                2023–2026 Archive
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              An undergraduate research project exploring how generative AI is reshaping student learning, late-night coding, and exams across college campuses.
            </p>
            <div className="text-xs text-slate-400 pt-2">
              Presented for <strong className="text-slate-300">STS</strong> by <strong className="text-slate-300">Gabriel Bolima</strong> (Frontend &amp; Line Graphs) &amp; <strong className="text-slate-300">Valari De Guzman</strong> (Research &amp; Survey) · Phinma Saint Jude College Manila · BSIT 2nd Year · Group 6.
            </div>
          </div>

          {/* Quick Sections */}
          <div>
            <h4 className="text-xs font-mono-data uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Project Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTab('overview')} className="hover:text-cyan-400 transition-colors">
                  Project Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('surveys')} className="hover:text-cyan-400 transition-colors">
                  Survey Line Graphs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('heatmap')} className="hover:text-cyan-400 transition-colors">
                  Disciplinary Heatmap Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('sentiment')} className="hover:text-cyan-400 transition-colors">
                  Qualitative Sentiment Quotes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('benchmark')} className="hover:text-cyan-400 transition-colors">
                  Study Habits Diagnostic
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('studies')} className="hover:text-cyan-400 transition-colors">
                  Research Library & BibTeX
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Repositories */}
          <div>
            <h4 className="text-xs font-mono-data uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Data Provenance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://library.educause.edu" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  EDUCAUSE Research Hub
                </a>
              </li>
              <li>
                <a href="https://hai.stanford.edu" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  Stanford HAI & CTL
                </a>
              </li>
              <li>
                <a href="https://www.hepi.ac.uk" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  HEPI Higher Ed Policy
                </a>
              </li>
              <li>
                <a href="https://www.pewresearch.org" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  Pew Research Center
                </a>
              </li>
              <li>
                <button onClick={() => onNavigateTab('credits')} className="text-cyan-400 hover:underline">
                  View Full Author Credits →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {new Date().getFullYear()} AI & Us. Academic synthesis designed for educators, students, and researchers.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
