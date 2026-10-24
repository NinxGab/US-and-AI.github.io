import React from 'react';
import { BookOpen, Search, Sparkles, Database, UserCheck, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => setActiveTab('overview')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-950 border border-indigo-500/30 shadow-lg shadow-indigo-950/50 group">
              {/* Interlocking Academic Cap & Neural Synapse SVG Logo */}
              <svg className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {/* Academic Mortarboard diamond */}
                <path d="M14 3L2 9L14 15L26 9L14 3Z" className="stroke-indigo-400 fill-indigo-950/40" />
                {/* Synapse nodes & connecting arcs */}
                <path d="M6 11.5V18.5C6 21 9.5 24 14 24C18.5 24 22 21 22 18.5V11.5" className="stroke-cyan-400" />
                {/* Neural interconnecting nodes */}
                <circle cx="14" cy="9" r="1.5" fill="#38bdf8" />
                <circle cx="8" cy="18" r="1.2" fill="#818cf8" />
                <circle cx="20" cy="18" r="1.2" fill="#818cf8" />
                <circle cx="14" cy="22" r="1.2" fill="#38bdf8" />
                <line x1="14" y1="9" x2="8" y2="18" stroke="#6366f1" strokeDasharray="1.5 1.5" />
                <line x1="14" y1="9" x2="20" y2="18" stroke="#6366f1" strokeDasharray="1.5 1.5" />
                <line x1="8" y1="18" x2="14" y2="22" stroke="#38bdf8" strokeDasharray="1.5 1.5" />
                <line x1="20" y1="18" x2="14" y2="22" stroke="#38bdf8" strokeDasharray="1.5 1.5" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  AI <span className="text-cyan-400 font-light">&</span> Us
                </span>
                <span className="text-[11px] font-mono-data tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-700/50">
                  STS
                </span>
              </div>
              <p className="text-xs text-slate-400 font-normal hidden sm:block">
                How Artificial Intelligence is Changing College Student Learning, Late-Night Coding &amp; Grades
              </p>
            </div>
          </div>

          {/* Quick Search Filter bar */}
          <div className="flex-1 max-w-xs md:max-w-sm relative hidden md:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search studies, papers, metrics..."
              className="w-full bg-slate-900/90 text-sm text-slate-200 pl-9 pr-4 py-2 rounded-lg border border-slate-700/80 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition-all placeholder:text-slate-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Top Nav Action / Repository link */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('credits')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'credits'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-700/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700/70'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Creators</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 border-t border-slate-800/60 no-scrollbar">
          {[
            { id: 'overview', label: 'Project Overview' },
            { id: 'surveys', label: 'Survey Line Graphs' },
            { id: 'heatmap', label: 'Disciplinary Heatmap' },
            { id: 'sentiment', label: 'Student & Faculty Voices' },
            { id: 'benchmark', label: 'Habit Self-Test' },
            { id: 'studies', label: 'Research Papers & DOIs' },
            { id: 'credits', label: 'Project Creators & Credits' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
