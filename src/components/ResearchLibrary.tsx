import React, { useState } from 'react';
import { RESEARCH_STUDIES } from '../data/researchData';
import { ResearchStudy, Discipline, StudyYear, MethodologyType } from '../types';
import { BookOpen, ExternalLink, Copy, Check, Filter, Search, Award, FileText } from 'lucide-react';

interface ResearchLibraryProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedDisciplineFilter: string;
  setSelectedDisciplineFilter: (d: string) => void;
  selectedYearFilter: string;
  setSelectedYearFilter: (y: string) => void;
  onSelectStudy: (study: ResearchStudy) => void;
}

export const ResearchLibrary: React.FC<ResearchLibraryProps> = ({
  searchQuery,
  setSearchQuery,
  selectedDisciplineFilter,
  setSelectedDisciplineFilter,
  selectedYearFilter,
  setSelectedYearFilter,
  onSelectStudy,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedMethodology, setSelectedMethodology] = useState<string>('All');

  const disciplines: (Discipline | 'Cross-Disciplinary')[] = [
    'Computer Science & Engineering',
    'Humanities & Social Sciences',
    'Business & Economics',
    'Biological & Health Sciences',
    'Physical & Mathematical Sciences',
    'Arts & Architecture',
    'Cross-Disciplinary',
  ];

  const years: StudyYear[] = ['2023', '2024', '2025', '2026'];

  const methodologies: MethodologyType[] = [
    'Large-Scale Longitudinal Survey',
    'Randomized Controlled Trial (RCT)',
    'Mixed-Methods Study',
    'Institutional Case Analysis',
    'Meta-Analysis & Systematic Review',
  ];

  const handleCopyCitation = (study: ResearchStudy, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(study.apaCitation);
    setCopiedId(study.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredStudies = RESEARCH_STUDIES.filter((study) => {
    // Search query check
    const matchesSearch =
      searchQuery.trim() === '' ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      study.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    // Discipline filter
    const matchesDiscipline =
      selectedDisciplineFilter === 'all' ||
      study.discipline === selectedDisciplineFilter ||
      (selectedDisciplineFilter !== 'all' && study.discipline === 'Cross-Disciplinary');

    // Year filter
    const matchesYear = selectedYearFilter === 'all' || study.year === selectedYearFilter;

    // Methodology filter
    const matchesMethodology =
      selectedMethodology === 'All' || study.methodology === selectedMethodology;

    return matchesSearch && matchesDiscipline && matchesYear && matchesMethodology;
  });

  return (
    <section id="studies" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Peer-Reviewed Literature & Open Data</span>
              <span className="text-slate-600">·</span>
              <span>Primary Empirical Repositories</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              References & Empirical Research Studies
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Examine the peer-reviewed datasets, randomized controlled trials, and multi-institutional surveys underpinning our analysis, complete with DOIs and verifiable sample sizes.
            </p>
          </div>

          <div className="text-xs font-mono-data text-slate-400 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
            Showing <strong className="text-cyan-400">{filteredStudies.length}</strong> of{' '}
            {RESEARCH_STUDIES.length} Curated Studies
          </div>
        </div>

        {/* Filter Bar with Year & Discipline and Methodology */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search author, topic, keyword..."
                className="w-full bg-slate-950 text-xs text-slate-200 pl-8 pr-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Discipline Filter */}
            <div>
              <select
                value={selectedDisciplineFilter}
                onChange={(e) => setSelectedDisciplineFilter(e.target.value)}
                className="w-full bg-slate-950 text-xs text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Disciplines</option>
                {disciplines.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <select
                value={selectedYearFilter}
                onChange={(e) => setSelectedYearFilter(e.target.value)}
                className="w-full bg-slate-950 text-xs text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Study Years (2023–2026)</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    Year: {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Methodology Filter */}
            <div>
              <select
                value={selectedMethodology}
                onChange={(e) => setSelectedMethodology(e.target.value)}
                className="w-full bg-slate-950 text-xs text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
              >
                <option value="All">All Methodologies</option>
                {methodologies.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Filter Reset */}
          {(searchQuery || selectedDisciplineFilter !== 'all' || selectedYearFilter !== 'all' || selectedMethodology !== 'All') && (
            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-slate-400">
              <span>Active filters applied</span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDisciplineFilter('all');
                  setSelectedYearFilter('all');
                  setSelectedMethodology('All');
                }}
                className="text-cyan-400 hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Study Cards Grid - Contiguous zero-gap rows */}
        <div className="rounded-2xl border border-slate-800 divide-y divide-slate-800 overflow-hidden bg-slate-900/90 shadow-xl">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectStudy(study)}
              className="p-5 sm:p-6 hover:bg-slate-850/60 transition-all cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-cyan-400">{study.discipline}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="font-mono-data text-slate-300">Published {study.year}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-indigo-300">{study.methodology}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="font-mono-data text-slate-400">N = {study.sampleSize.toLocaleString()}</span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => handleCopyCitation(study, e)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    title="Copy APA Citation"
                  >
                    {copiedId === study.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied APA</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Cite (APA)</span>
                      </>
                    )}
                  </button>

                  <a
                    href={study.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-700/60 text-xs text-indigo-300 hover:bg-indigo-900 transition-colors"
                  >
                    <span>DOI / Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Authors & Institutional Affiliation */}
              <div className="text-xs text-slate-400 mb-3">
                <span className="text-slate-300">{study.authors.join(', ')}</span> —{' '}
                <span className="italic">{study.institution}</span>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {study.summary}
              </p>

              {/* Key Findings List */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4 space-y-1.5">
                <span className="text-[11px] font-mono-data uppercase text-cyan-400 block font-semibold mb-1">
                  Empirical Findings Highlight:
                </span>
                {study.keyFindings.slice(0, 2).map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">→</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>

              {/* Footer Tags & Metrics Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/70 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="font-mono-data text-[11px] text-slate-400">DOI: {study.doi}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-[11px] text-slate-400">Repo: {study.repository}</span>
                </div>

                <div className="text-cyan-400 font-medium text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Full Methodology & BibTeX</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}

          {filteredStudies.length === 0 && (
            <div className="text-center py-16 rounded-2xl bg-slate-900/40 border border-slate-800">
              <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <h4 className="font-editorial text-lg text-white mb-1">No studies match your current filter</h4>
              <p className="text-xs text-slate-400 mb-4">Try clearing the discipline or study year filter to see all research.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDisciplineFilter('all');
                  setSelectedYearFilter('all');
                  setSelectedMethodology('All');
                }}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
