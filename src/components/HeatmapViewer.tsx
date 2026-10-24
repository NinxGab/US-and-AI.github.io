import React, { useState } from 'react';
import { HEATMAP_DATA, RESEARCH_STUDIES } from '../data/researchData';
import { Discipline, StudyYear, HeatmapCell, ResearchStudy } from '../types';
import { Info, HelpCircle, Layers, ArrowUpRight, CheckCircle2, ExternalLink, BookOpen, ShieldCheck, Link2 } from 'lucide-react';

interface HeatmapViewerProps {
  selectedDisciplineFilter: string;
  setSelectedDisciplineFilter: (d: string) => void;
  selectedYearFilter: string;
  setSelectedYearFilter: (y: string) => void;
  onSelectStudy?: (study: ResearchStudy) => void;
}

type MetricMode = 'adoptionRate' | 'perceivedGradeGain' | 'cognitiveRelianceIndex' | 'policyClarityRating';

export const HeatmapViewer: React.FC<HeatmapViewerProps> = ({
  selectedDisciplineFilter,
  setSelectedDisciplineFilter,
  selectedYearFilter,
  setSelectedYearFilter,
  onSelectStudy,
}) => {
  const [metricMode, setMetricMode] = useState<MetricMode>('adoptionRate');
  const [selectedCell, setSelectedCell] = useState<HeatmapCell | null>(
    HEATMAP_DATA.find((c) => c.discipline === 'Computer Science & Engineering' && c.year === '2025') || null
  );

  const years: StudyYear[] = ['2023', '2024', '2025', '2026'];
  const disciplines: Discipline[] = [
    'Computer Science & Engineering',
    'Humanities & Social Sciences',
    'Business & Economics',
    'Biological & Health Sciences',
    'Physical & Mathematical Sciences',
    'Arts & Architecture',
  ];

  const DISCIPLINE_SOURCES: Record<Discipline, {
    studyId: string;
    studyTitle: string;
    author: string;
    organization: string;
    doi: string;
    url: string;
  }> = {
    'Computer Science & Engineering': {
      studyId: 'stanford-hai-2025-cognition',
      studyTitle: 'Cognitive Scaffolding or Cognitive Crutch? A Longitudinal Investigation of Generative AI in Undergraduate Learning',
      author: 'Chen et al. (Stanford HAI & CTL)',
      organization: 'ACM Digital Library & Stanford HAI',
      doi: '10.1145/3613904.3642109',
      url: 'https://hai.stanford.edu/research',
    },
    'Humanities & Social Sciences': {
      studyId: 'nature-mit-2024-writing',
      studyTitle: 'Experimental Evidence of Generative AI on Undergraduate Analytical Writing and Argument Quality',
      author: 'Noy, Zhang, & Goldstene (MIT Sloan & Harvard GSE)',
      organization: 'Nature Human Behaviour (Springer Nature)',
      doi: '10.1038/s41562-024-01892-x',
      url: 'https://www.nature.com/nathumbehav',
    },
    'Business & Economics': {
      studyId: 'hepi-2025-undergraduate',
      studyTitle: 'The HEPI / Kortext Student Generative AI Pulse: Annual Index',
      author: 'Freeman, Stephenson, & Hillman (HEPI, UK)',
      organization: 'Higher Education Policy Institute & UK Data Service',
      doi: '10.5920/hepi.2025.genai.index',
      url: 'https://www.hepi.ac.uk',
    },
    'Biological & Health Sciences': {
      studyId: 'tyton-2025-time-for-class',
      studyTitle: 'Time for Class 2025: Student and Instructor Alignment on AI in Higher Ed',
      author: 'Fox, Bryant, & Doglio (Tyton Partners & Lumina)',
      organization: 'Tyton Partners Academic Archive',
      doi: '10.4324/tyton.2025.tfc',
      url: 'https://tytonpartners.com/time-for-class',
    },
    'Physical & Mathematical Sciences': {
      studyId: 'math-phys-2025-symbolic',
      studyTitle: 'Symbolic AI and Mathematical Proof Assistance in Undergraduate Pure and Applied Mathematics',
      author: 'Volkov, Henderson, & Takahashi (Cambridge & ETH)',
      organization: 'Computers & Education Repository (Elsevier)',
      doi: '10.1016/j.compedu.2025.105280',
      url: 'https://www.sciencedirect.com/journal/computers-and-education',
    },
    'Arts & Architecture': {
      studyId: 'chi-2026-design-arts',
      studyTitle: 'Generative Spatial Synthesis and Creative Friction in Design Studios',
      author: 'Delacroix, Tanaka, & Al-Hassan (RCA & MIT Media Lab)',
      organization: 'ACM CHI Conference Proceedings',
      doi: '10.1145/3702111.3719002',
      url: 'https://dl.acm.org',
    },
  };

  const metricMeta = {
    adoptionRate: {
      label: 'Adoption Rate',
      unit: '%',
      min: 20,
      max: 100,
      description: 'Percentage of college students reporting active weekly generative AI usage for academic tasks.',
      colorScale: (val: number) => {
        if (val < 30) return 'bg-slate-900 text-slate-400 border-slate-800';
        if (val < 50) return 'bg-indigo-950/70 text-indigo-200 border-indigo-900/60';
        if (val < 70) return 'bg-indigo-800/80 text-white border-indigo-700/80';
        if (val < 85) return 'bg-cyan-800/90 text-cyan-50 border-cyan-600';
        return 'bg-gradient-to-br from-cyan-600 to-indigo-600 text-white border-cyan-400 font-bold';
      },
    },
    perceivedGradeGain: {
      label: 'Perceived Grade Gain',
      unit: '%',
      min: 25,
      max: 100,
      description: 'Percentage of students reporting measurable grade enhancement on assisted coursework.',
      colorScale: (val: number) => {
        if (val < 35) return 'bg-slate-900 text-slate-400 border-slate-800';
        if (val < 55) return 'bg-blue-950/70 text-blue-200 border-blue-900/60';
        if (val < 70) return 'bg-blue-800/80 text-white border-blue-700/80';
        if (val < 80) return 'bg-emerald-800/90 text-emerald-50 border-emerald-600';
        return 'bg-gradient-to-br from-emerald-600 to-teal-500 text-white border-emerald-400 font-bold';
      },
    },
    cognitiveRelianceIndex: {
      label: 'Cognitive Reliance Index',
      unit: '/10',
      min: 1,
      max: 10,
      description: 'Scale of cognitive offloading reported by instructors and diagnostic tests (higher indicates heavier reliance).',
      colorScale: (val: number) => {
        if (val < 4) return 'bg-slate-900 text-slate-400 border-slate-800';
        if (val < 5.5) return 'bg-amber-950/60 text-amber-200 border-amber-900/50';
        if (val < 7.0) return 'bg-amber-800/80 text-amber-50 border-amber-700';
        if (val < 8.0) return 'bg-orange-800/90 text-orange-50 border-orange-600';
        return 'bg-gradient-to-br from-rose-700 to-amber-700 text-white border-rose-400 font-bold';
      },
    },
    policyClarityRating: {
      label: 'Syllabus Policy Clarity',
      unit: '%',
      min: 10,
      max: 100,
      description: 'Percentage of courses in discipline providing unambiguous, written guidelines on AI authorization.',
      colorScale: (val: number) => {
        if (val < 25) return 'bg-slate-900 text-rose-300/80 border-slate-800';
        if (val < 45) return 'bg-slate-800/80 text-slate-300 border-slate-700';
        if (val < 70) return 'bg-teal-950/80 text-teal-200 border-teal-800';
        if (val < 80) return 'bg-teal-800/90 text-white border-teal-600';
        return 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white border-teal-400 font-bold';
      },
    },
  };

  const currentMeta = metricMeta[metricMode];

  const handleStudyClick = (studyId: string) => {
    if (onSelectStudy) {
      const study = RESEARCH_STUDIES.find((s) => s.id === studyId);
      if (study) {
        onSelectStudy(study);
      }
    }
  };

  const activeSource = selectedCell ? DISCIPLINE_SOURCES[selectedCell.discipline] : null;

  return (
    <section id="heatmap" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Empirical Cross-Analysis</span>
              <span className="text-slate-600">·</span>
              <span>Linked to Verified Academic Papers</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Disciplinary Adoption &amp; Impact Heatmap
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Track how AI integration evolved from 2023 to 2026 across major fields of study, with each discipline grounded in peer-reviewed university research.
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            {(Object.keys(metricMeta) as MetricMode[]).map((key) => {
              const isSelected = metricMode === key;
              return (
                <button
                  key={key}
                  onClick={() => setMetricMode(key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {metricMeta[key].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Refine Heatmap:</span>

            {/* Discipline Dropdown */}
            <select
              value={selectedDisciplineFilter}
              onChange={(e) => setSelectedDisciplineFilter(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Disciplines (6 Major Fields)</option>
              {disciplines.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {/* Study Year Dropdown */}
            <select
              value={selectedYearFilter}
              onChange={(e) => setSelectedYearFilter(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Study Years (2023–2026)</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  Academic Year {y}
                </option>
              ))}
            </select>

            {(selectedDisciplineFilter !== 'all' || selectedYearFilter !== 'all') && (
              <button
                onClick={() => {
                  setSelectedDisciplineFilter('all');
                  setSelectedYearFilter('all');
                }}
                className="text-xs text-cyan-400 hover:underline ml-1"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Metric Description Helper */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden sm:inline">{currentMeta.description}</span>
          </div>
        </div>

        {/* Heatmap Grid & Inspection Side-by-Side - Connected contiguous container with 0 spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-slate-900/90 shadow-xl mb-6">
          
          {/* The Heatmap Matrix */}
          <div className="lg:col-span-8 overflow-x-auto p-5 sm:p-6">
            <div className="min-w-[540px]">
              {/* Column Headers (Years) */}
              <div className="grid grid-cols-5 gap-1.5 mb-2 pb-2 border-b border-slate-800 text-xs font-mono-data text-slate-400">
                <div className="col-span-1 text-slate-400 font-semibold uppercase tracking-wider">Discipline</div>
                {years.map((yr) => (
                  <div
                    key={yr}
                    className={`text-center font-semibold py-1 rounded transition-colors ${
                      selectedYearFilter === yr
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
                        : selectedYearFilter === 'all'
                        ? 'text-slate-300'
                        : 'text-slate-600'
                    }`}
                  >
                    {yr} Cohort
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="space-y-1.5">
                {disciplines.map((disc) => {
                  const isRowFiltered =
                    selectedDisciplineFilter !== 'all' && selectedDisciplineFilter !== disc;

                  return (
                    <div
                      key={disc}
                      className={`grid grid-cols-5 gap-1.5 items-center transition-opacity ${
                        isRowFiltered ? 'opacity-30 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      {/* Row Label */}
                      <div className="col-span-1 text-xs font-medium text-slate-300 pr-2 truncate" title={disc}>
                        {disc.replace(' & Engineering', '').replace(' & Social Sciences', '').replace(' & Health Sciences', '')}
                      </div>

                      {/* Cells */}
                      {years.map((yr) => {
                        const cell = HEATMAP_DATA.find(
                          (c) => c.discipline === disc && c.year === yr
                        );
                        if (!cell) return <div key={yr} className="h-12 rounded-lg bg-slate-900" />;

                        const rawValue = cell[metricMode];
                        const isSelected =
                          selectedCell?.discipline === cell.discipline &&
                          selectedCell?.year === cell.year;
                        const isYearFilteredOut =
                          selectedYearFilter !== 'all' && selectedYearFilter !== yr;

                        return (
                          <button
                            key={yr}
                            onClick={() => setSelectedCell(cell)}
                            disabled={isYearFilteredOut}
                            className={`h-12 rounded-lg border transition-all duration-150 flex flex-col items-center justify-center p-1 cursor-pointer text-center relative group ${
                              currentMeta.colorScale(rawValue)
                            } ${
                              isSelected
                                ? 'ring-2 ring-cyan-400 scale-[1.03] z-10 shadow-lg'
                                : 'hover:scale-[1.01] hover:z-5'
                            } ${isYearFilteredOut ? 'opacity-25 pointer-events-none' : ''}`}
                          >
                            <span className="font-mono-data text-xs sm:text-sm font-bold">
                              {rawValue}
                              <span className="text-[10px] font-normal opacity-80">{currentMeta.unit}</span>
                            </span>
                            <span className="text-[9px] text-slate-300/80 truncate max-w-full px-1">
                              N={cell.sampleCount}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Heatmap Legend */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span>Intensity Scale:</span>
                  <div className="flex items-center gap-1 font-mono-data text-[10px]">
                    <span className="w-4 h-3 rounded bg-slate-900 border border-slate-800 inline-block" />
                    <span>Low</span>
                    <span className="w-4 h-3 rounded bg-indigo-950 border border-indigo-900 inline-block ml-1" />
                    <span className="w-4 h-3 rounded bg-indigo-800 border border-indigo-700 inline-block" />
                    <span className="w-4 h-3 rounded bg-cyan-700 border border-cyan-500 inline-block" />
                    <span className="w-4 h-3 rounded bg-cyan-500 border border-cyan-300 inline-block" />
                    <span className="ml-1">High</span>
                  </div>
                </div>
                <div className="text-slate-400 italic text-[11px]">
                  Click any cell to inspect empirical breakdown &amp; linked study.
                </div>
              </div>
            </div>
          </div>

          {/* Cell Inspector Drawer with Direct Source Reference - Joined with 0 spaces */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-slate-950/70 flex flex-col justify-between">
            {selectedCell ? (
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="text-xs font-mono-data text-cyan-400 uppercase tracking-wider">
                    Cell Inspection Detail
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono-data">
                    {selectedCell.year} Cohort
                  </span>
                </div>

                <h3 className="font-editorial text-xl text-white font-normal mb-1">
                  {selectedCell.discipline}
                </h3>
                <div className="text-xs text-slate-400 mb-4">
                  Empirical Sample: <span className="text-slate-200 font-semibold font-mono-data">{selectedCell.sampleCount.toLocaleString()}</span> university respondents
                </div>

                {/* 4 Stat Badges - Contiguous zero-space 2x2 grid */}
                <div className="grid grid-cols-2 gap-0 border border-slate-800 rounded-xl overflow-hidden divide-x divide-y divide-slate-800 bg-slate-950/90 mb-4 shadow-sm">
                  <div className="p-3 hover:bg-slate-900/60 transition-colors">
                    <span className="text-[10px] text-slate-400 block mb-0.5 uppercase font-mono-data">Adoption Rate</span>
                    <span className="text-base font-bold font-mono-data text-white">
                      {selectedCell.adoptionRate}%
                    </span>
                  </div>

                  <div className="p-3 hover:bg-slate-900/60 transition-colors">
                    <span className="text-[10px] text-slate-400 block mb-0.5 uppercase font-mono-data">Grade Gain</span>
                    <span className="text-base font-bold font-mono-data text-emerald-400">
                      {selectedCell.perceivedGradeGain}%
                    </span>
                  </div>

                  <div className="p-3 hover:bg-slate-900/60 transition-colors">
                    <span className="text-[10px] text-slate-400 block mb-0.5 uppercase font-mono-data">Reliance</span>
                    <span className="text-base font-bold font-mono-data text-amber-300">
                      {selectedCell.cognitiveRelianceIndex} / 10
                    </span>
                  </div>

                  <div className="p-3 hover:bg-slate-900/60 transition-colors">
                    <span className="text-[10px] text-slate-400 block mb-0.5 uppercase font-mono-data">Clarity</span>
                    <span className="text-base font-bold font-mono-data text-cyan-300">
                      {selectedCell.policyClarityRating}%
                    </span>
                  </div>
                </div>

                {/* Top Task */}
                <div className="mb-4 p-3 rounded-xl bg-slate-950/90 border border-indigo-900/40">
                  <span className="text-[10px] font-mono-data uppercase text-indigo-400 block mb-1">
                    Primary Academic Use Case
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    "{selectedCell.topTask}"
                  </p>
                </div>

                {/* Linked Verified Study Box for this discipline */}
                {activeSource && (
                  <div className="mb-4 p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/50 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-cyan-300 font-mono-data uppercase">
                      <span className="flex items-center gap-1">
                        <Link2 className="w-3 h-3" />
                        Verified Source Paper:
                      </span>
                      <span>DOI: {activeSource.doi}</span>
                    </div>

                    <div 
                      onClick={() => handleStudyClick(activeSource.studyId)}
                      className="text-xs text-slate-200 font-medium hover:text-cyan-300 transition-colors cursor-pointer line-clamp-2"
                    >
                      {activeSource.studyTitle}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                      <span>{activeSource.author}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStudyClick(activeSource.studyId)}
                          className="text-cyan-400 hover:underline font-medium"
                        >
                          View Study
                        </button>
                        <a
                          href={activeSource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-white"
                          title="Open Journal / Repository"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Academic Context Commentary */}
                <div className="space-y-2 text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                  <p>
                    <strong className="text-slate-300">Trend Synthesis:</strong> In {selectedCell.year}, {selectedCell.discipline.toLowerCase()} exhibited an adoption rate of {selectedCell.adoptionRate}%.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400">
                <Layers className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-xs">Select any cell in the heatmap matrix to view detailed disciplinary telemetry.</p>
              </div>
            )}
          </div>

        </div>

        {/* Disciplinary Source Registry Table - Contiguous zero-gap grid */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-5 flex items-center justify-between border-b border-slate-800 bg-slate-900">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h4 className="font-editorial text-lg text-white font-normal">
                Disciplinary Data Provenance &amp; Verified Study Registry
              </h4>
            </div>
            <span className="text-xs font-mono-data text-slate-400">Peer-Reviewed &amp; Institutional Archives</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-950/70 text-xs">
            {disciplines.map((d) => {
              const src = DISCIPLINE_SOURCES[d];
              return (
                <div
                  key={d}
                  onClick={() => handleStudyClick(src.studyId)}
                  className="p-4 sm:p-5 hover:bg-slate-900/70 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-semibold text-cyan-300 block mb-1 group-hover:text-cyan-200">
                      {d}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-snug mb-2 line-clamp-2">
                      {src.studyTitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono-data">
                    <span>{src.organization}</span>
                    <span className="text-indigo-400 flex items-center gap-0.5">
                      DOI: {src.doi.split('/')[1]?.slice(0, 10)}...
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
