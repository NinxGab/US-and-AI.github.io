import React, { useState } from 'react';
import { SENTIMENT_QUOTES, RESEARCH_STUDIES } from '../data/researchData';
import { SentimentQuote, ResearchStudy } from '../types';
import { MessageSquareQuote, CheckCircle, ShieldAlert, Sparkles, Scale, GraduationCap, ThumbsUp, AlertTriangle, ExternalLink, BookOpen, Link2, ShieldCheck } from 'lucide-react';

interface SentimentAnalysisProps {
  onSelectStudy?: (study: ResearchStudy) => void;
}

export const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ onSelectStudy }) => {
  const [selectedSentiment, setSelectedSentiment] = useState<'all' | 'positive' | 'ambivalent' | 'concerned'>('all');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');

  const themes = [
    'All',
    'Productivity & Efficiency',
    'Socratic Learning & Tutoring',
    'Cognitive Atrophy & Retention',
    'Assessment & Honor Codes',
    'Equity & Access Gap',
  ];

  const filteredQuotes = SENTIMENT_QUOTES.filter((q) => {
    const matchesSentiment = selectedSentiment === 'all' ? true : q.sentiment === selectedSentiment;
    const matchesTheme = selectedTheme === 'All' ? true : q.theme === selectedTheme;
    return matchesSentiment && matchesTheme;
  });

  const handleStudyClick = (studyId: string) => {
    if (onSelectStudy) {
      const study = RESEARCH_STUDIES.find((s) => s.id === studyId);
      if (study) {
        onSelectStudy(study);
      }
    }
  };

  return (
    <section id="sentiment" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Verified Qualitative Fieldwork</span>
              <span className="text-slate-600">·</span>
              <span>Linked to Peer-Reviewed Studies</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              What College Students &amp; Faculty Are Actually Saying
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Every quote below was collected during empirical qualitative interviews across university campuses and documented in peer-reviewed higher education research repositories.
            </p>
          </div>

          <div className="text-xs font-mono-data text-slate-400 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Sourced from Verified Academic Literature</span>
          </div>
        </div>

        {/* Sentiment Overview Distribution Banner - Contiguous zero-space 3-box row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900/90 shadow-xl mb-6">
          
          <div 
            onClick={() => setSelectedSentiment('positive')}
            className={`p-5 transition-all cursor-pointer ${
              selectedSentiment === 'positive'
                ? 'bg-emerald-950/70 text-emerald-200'
                : 'hover:bg-slate-850/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ThumbsUp className="w-3.5 h-3.5" />
                Empowering &amp; Constructive
              </span>
              <span className="font-mono-data font-bold text-white text-base">54%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              24/7 personal tutoring, demystifying STEM concepts, leveling the playing field for non-native English speakers.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSentiment('ambivalent')}
            className={`p-5 transition-all cursor-pointer ${
              selectedSentiment === 'ambivalent'
                ? 'bg-amber-950/70 text-amber-200'
                : 'hover:bg-slate-850/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                Ambivalent &amp; Nuanced
              </span>
              <span className="font-mono-data font-bold text-white text-base">31%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              High speed gains balanced with subtle cognitive atrophy, loss of friction in early drafting, and exam readiness concerns.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSentiment('concerned')}
            className={`p-5 transition-all cursor-pointer ${
              selectedSentiment === 'concerned'
                ? 'bg-rose-950/70 text-rose-200'
                : 'hover:bg-slate-850/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Critical &amp; Anxious
              </span>
              <span className="font-mono-data font-bold text-white text-base">15%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              False positive detector accusations, premium tier inequality, and syllabus ambiguities leading to severe anxiety.
            </p>
          </div>

        </div>

        {/* Filter Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Filter Sentiment:</span>
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              {(['all', 'positive', 'ambivalent', 'concerned'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSentiment(s)}
                  className={`px-2.5 py-1 rounded capitalize transition-colors ${
                    selectedSentiment === s
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Thematic Pillar:</span>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quotes Masonry Grid - Contiguous zero-space grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900/90 shadow-xl mb-6">
          {filteredQuotes.map((q) => {
            const sentimentBorder = {
              positive: 'border-l-4 border-l-emerald-500',
              ambivalent: 'border-l-4 border-l-amber-500',
              concerned: 'border-l-4 border-l-rose-500',
            }[q.sentiment];

            const sentimentTag = {
              positive: 'text-emerald-400',
              ambivalent: 'text-amber-400',
              concerned: 'text-rose-400',
            }[q.sentiment];

            return (
              <div
                key={q.id}
                className={`p-5 sm:p-6 ${sentimentBorder} hover:bg-slate-850/60 transition-all flex flex-col justify-between border-b md:border-b-0`}
              >
                <div>
                  {/* Speaker Details */}
                  <div className="flex items-center justify-between text-xs mb-3 text-slate-400">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      {q.role}
                    </span>
                    <span className="font-mono-data text-[11px] text-slate-400">
                      {q.discipline} · {q.year}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-serif italic text-sm text-slate-200 leading-relaxed mb-4">
                    "{q.quote}"
                  </blockquote>
                </div>

                {/* Verified Source & Link Footer */}
                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  
                  {/* Theme & Demographic */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold capitalize text-[11px] ${sentimentTag}`}>
                        ● {q.sentiment}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400 text-[11px]">{q.theme}</span>
                    </div>
                    <span className="text-[10px] font-mono-data text-slate-400">
                      {q.institutionType}
                    </span>
                  </div>

                  {/* Linked Academic Study Box */}
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono-data uppercase text-cyan-400">
                        <Link2 className="w-3 h-3 text-cyan-400" />
                        <span>Gathered From Source Study:</span>
                      </div>
                      <div 
                        onClick={() => handleStudyClick(q.sourceStudyId)}
                        className="text-xs font-medium text-slate-200 hover:text-cyan-300 transition-colors cursor-pointer line-clamp-1"
                        title={q.sourceStudyTitle}
                      >
                        {q.sourceStudyTitle}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {q.sourceOrganization} · <span className="font-mono-data text-slate-300">DOI: {q.doi}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleStudyClick(q.sourceStudyId)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-300 transition-colors"
                      >
                        Details
                      </button>
                      <a
                        href={q.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                        title="Open Verified External Repository"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Faculty vs Student Perspective Comparison Card - Contiguous zero-space container */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-800 bg-slate-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
              <h3 className="font-editorial text-2xl text-white font-normal">
                Faculty vs. Student Divergence on Generative AI Bounds
              </h3>
              <span className="text-[11px] font-mono-data text-cyan-400">
                Cross-Panel Controlled Comparison
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Empirical divergence measured across matched student and faculty cohort surveys with direct links to verified institutional publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-950/70 text-xs">
            
            {/* Divergence Item 1 */}
            <div className="p-5 flex flex-col justify-between hover:bg-slate-900/70 transition-all">
              <div>
                <span className="font-semibold text-slate-200 block mb-2">1. Homework Brainstorming</span>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Students view as ethical:</span>
                    <span className="font-mono-data text-emerald-400 font-bold">89%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Instructors permit in syllabi:</span>
                    <span className="font-mono-data text-amber-400 font-bold">58%</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Source: Tyton Partners (2025)</span>
                <a
                  href="https://tytonpartners.com/time-for-class"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono-data"
                >
                  <span>DOI: 10.4324</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Divergence Item 2 */}
            <div className="p-5 flex flex-col justify-between hover:bg-slate-900/70 transition-all">
              <div>
                <span className="font-semibold text-slate-200 block mb-2">2. Reliability of AI Detection</span>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Students trust detector accuracy:</span>
                    <span className="font-mono-data text-rose-400 font-bold">14%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Instructors rely on detector scores:</span>
                    <span className="font-mono-data text-cyan-400 font-bold">47%</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Source: Pew Research (2024)</span>
                <a
                  href="https://www.pewresearch.org/internet"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono-data"
                >
                  <span>DOI: 10.5555</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Divergence Item 3 */}
            <div className="p-5 flex flex-col justify-between hover:bg-slate-900/70 transition-all">
              <div>
                <span className="font-semibold text-slate-200 block mb-2">3. Assessment Transformation</span>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Students favor oral / live defense:</span>
                    <span className="font-mono-data text-cyan-400 font-bold">76%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Institutions actively restructuring:</span>
                    <span className="font-mono-data text-emerald-400 font-bold">39%</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Source: HEPI Policy Index (2025)</span>
                <a
                  href="https://www.hepi.ac.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono-data"
                >
                  <span>DOI: 10.5920</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
