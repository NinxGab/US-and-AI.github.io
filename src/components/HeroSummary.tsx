import React from 'react';
import { KEY_AGGREGATE_STATS } from '../data/researchData';
import { TrendingUp, Clock, AlertTriangle, BookCheck, ShieldAlert, Cpu, ArrowRight, BarChart3, Users, GraduationCap, Terminal } from 'lucide-react';

interface HeroSummaryProps {
  onNavigateTab: (tab: string) => void;
}

export const HeroSummary: React.FC<HeroSummaryProps> = ({ onNavigateTab }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 border-b border-slate-800/80">
      {/* Background ambient academic subtle grid and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950/0 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Authentic Student Project Badge & Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-data text-cyan-400 mb-4 tracking-wide uppercase">
          <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 font-semibold">
            STS
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300">Phinma Saint Jude College Manila · BSIT 2nd Year · Group 6</span>
          <span className="text-slate-600">·</span>
          <span>Gabriel Bolima &amp; Valari De Guzman</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] mb-5">
            The Impact of Artificial Intelligence on <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-white font-normal">College Students' Learning</span> &amp; Academic Performance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
            When our batch entered 2nd year IT, ChatGPT, Claude, and Copilot quickly became as common as VS Code. While take-home coding labs and essays saw immediate grade boosts, in-person written exams revealed an unexpected retention gap. We gathered survey responses from <strong>1,420 college students</strong> and synthesized verified findings from Stanford HAI, EDUCAUSE, Pew Research, and Nature to investigate what is genuinely happening in lecture halls.
          </p>
        </div>

        {/* Aggregate KPI Grid with Student Context - Organized with 0 spaces between boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900/90 mb-6 shadow-xl">
          
          <div className="p-4 sm:p-5 hover:bg-slate-850 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span>Student Weekly Adoption</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="font-editorial text-3xl font-bold text-white mb-1">
                {KEY_AGGREGATE_STATS.nationalAdoptionRate}
              </div>
            </div>
            <div className="text-[11px] text-slate-400">
              Active weekly coursework usage <span className="text-emerald-400 font-mono-data">(+57% since 2023)</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 hover:bg-slate-850 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span>Time Saved per Week</span>
                <Clock className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="font-editorial text-3xl font-bold text-white mb-1">
                {KEY_AGGREGATE_STATS.avgHoursSavedPerWeek}
              </div>
            </div>
            <div className="text-[11px] text-slate-400">
              Saved on syntax debugging, boilerplate, and drafting
            </div>
          </div>

          <div className="p-4 sm:p-5 hover:bg-slate-850 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span>Assignment Grade Lift</span>
                <BookCheck className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="font-editorial text-3xl font-bold text-white mb-1">
                {KEY_AGGREGATE_STATS.gpaEnhancementDelta}
              </div>
            </div>
            <div className="text-[11px] text-slate-400">
              On assisted homework labs, outlines, and reports
            </div>
          </div>

          <div className="p-4 sm:p-5 hover:bg-slate-850 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span>Unassisted Exam Drop</span>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="font-editorial text-3xl font-bold text-amber-300 mb-1">
                {KEY_AGGREGATE_STATS.unassistedRetentionPenalty}
              </div>
            </div>
            <div className="text-[11px] text-slate-400">
              Average drop on closed-book paper exams if over-reliant
            </div>
          </div>

        </div>

        {/* Real Student Experience Tensions - Zero spaces between boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900/90 shadow-xl">
          <div className="p-5 sm:p-6 flex flex-col justify-between hover:bg-slate-850/60 transition-all">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 flex items-center justify-center border border-indigo-700/50">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>
                <h2 className="text-base font-semibold text-white">The Midnight Debugger Paradox</h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                AI fixes Java pointer errors and React state bugs at 2 AM in seconds when professor office hours aren't available. But Stanford and MIT data show students who passively accept generated code suffer a 14.8% drop on unprompted whiteboard exams.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('surveys')}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors pt-2"
            >
              <span>View Survey Line Graphs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 flex flex-col justify-between hover:bg-slate-850/60 transition-all">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 flex items-center justify-center border border-cyan-700/50">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                </div>
                <h2 className="text-base font-semibold text-white">Syllabus Gray Zones &amp; Turnitin</h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                64% of college students report feeling severe anxiety over false positive accusations from AI detectors. Many students now screen-record their Google Docs version history just to prove their authentic authoring.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('sentiment')}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors pt-2"
            >
              <span>Read Student &amp; Faculty Quotes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 flex flex-col justify-between hover:bg-slate-850/60 transition-all">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 flex items-center justify-center border border-emerald-700/50">
                  <Users className="w-4 h-4 text-emerald-400" />
                </div>
                <h2 className="text-base font-semibold text-white">The $20/Month Subscription Gap</h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                34% of students pay for premium subscriptions ($20+/mo), gaining advanced reasoning models and multimodal context that don't rate-limit during finals week, while free-tier students face factual drift and cutoffs.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('heatmap')}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors pt-2"
            >
              <span>Check Disciplinary Heatmaps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
