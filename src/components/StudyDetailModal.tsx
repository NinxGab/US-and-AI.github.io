import React, { useState } from 'react';
import { ResearchStudy } from '../types';
import { X, Copy, Check, ExternalLink, BookOpen, BarChart2, ShieldCheck, Database } from 'lucide-react';

interface StudyDetailModalProps {
  study: ResearchStudy | null;
  onClose: () => void;
}

export const StudyDetailModal: React.FC<StudyDetailModalProps> = ({ study, onClose }) => {
  const [copiedType, setCopiedType] = useState<'apa' | 'bibtex' | null>(null);

  if (!study) return null;

  const handleCopy = (text: string, type: 'apa' | 'bibtex') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
          <span className="font-semibold text-cyan-400">{study.discipline}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="font-mono-data text-slate-300">Cohort {study.year}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-indigo-300">{study.methodology}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="font-mono-data text-slate-400">N = {study.sampleSize.toLocaleString()}</span>
        </div>

        {/* Title */}
        <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-2 pr-8 leading-tight">
          {study.title}
        </h2>

        {/* Authors & Institutional Affiliation */}
        <div className="text-xs sm:text-sm text-slate-400 mb-6">
          <span className="text-slate-200 font-medium">{study.authors.join(', ')}</span>
          <br />
          <span className="italic text-slate-400">{study.institution}</span>
        </div>

        {/* Quantitative Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Sample Size (N)</span>
            <span className="font-mono-data text-base font-bold text-white">
              {study.sampleSize.toLocaleString()} participants
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Grade Effect Size</span>
            <span className="font-mono-data text-base font-bold text-emerald-400">
              {study.metrics.gradeEffectSize || 'Documented'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Weekly Time Saved</span>
            <span className="font-mono-data text-base font-bold text-cyan-400">
              {study.metrics.timeSavedHoursPerWeek ? `${study.metrics.timeSavedHoursPerWeek} hrs/week` : 'Variable'}
            </span>
          </div>
        </div>

        {/* Summary Narrative */}
        <div className="mb-6">
          <h4 className="text-xs font-mono-data uppercase tracking-wider text-slate-400 mb-2 font-semibold">
            Executive Abstract
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
            {study.summary}
          </p>
        </div>

        {/* Empirical Findings */}
        <div className="mb-6">
          <h4 className="text-xs font-mono-data uppercase tracking-wider text-slate-400 mb-2 font-semibold">
            Key Empirical Findings & Statistical Observations
          </h4>
          <div className="space-y-2">
            {study.keyFindings.map((finding, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <span className="text-cyan-400 font-bold mt-0.5">●</span>
                <span className="leading-relaxed">{finding}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Citations & Export Blocks */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          
          {/* APA Citation */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono-data uppercase text-slate-400 font-semibold">
                APA Citation (7th Edition)
              </span>
              <button
                onClick={() => handleCopy(study.apaCitation, 'apa')}
                className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
              >
                {copiedType === 'apa' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy APA</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 font-mono-data text-xs text-slate-300 border border-slate-800 select-all">
              {study.apaCitation}
            </div>
          </div>

          {/* BibTeX */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono-data uppercase text-slate-400 font-semibold">
                BibTeX Entry
              </span>
              <button
                onClick={() => handleCopy(study.bibtex, 'bibtex')}
                className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
              >
                {copiedType === 'bibtex' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy BibTeX</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-slate-950 font-mono-data text-[11px] text-slate-300 border border-slate-800 overflow-x-auto select-all">
              {study.bibtex}
            </pre>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-8 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Repository: <span className="text-slate-300 font-medium">{study.repository}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={study.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Visit Primary Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
