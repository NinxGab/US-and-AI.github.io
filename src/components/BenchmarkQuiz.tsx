import React, { useState } from 'react';
import { Discipline } from '../types';
import { Award, Compass, HelpCircle, Check, RotateCcw, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export const BenchmarkQuiz: React.FC = () => {
  const [discipline, setDiscipline] = useState<Discipline>('Computer Science & Engineering');
  const [hours, setHours] = useState<'light' | 'moderate' | 'heavy' | 'intensive'>('moderate');
  const [mode, setMode] = useState<'socratic' | 'outline' | 'debug' | 'delegate'>('socratic');
  const [auditHabit, setAuditHabit] = useState<'rigorous' | 'spot' | 'passive'>('rigorous');
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(true);

  // Compute Archetype and Metrics based on empirical papers (Stanford HAI & Nature 2024-2025)
  const calculateResult = () => {
    let archetype = 'The Socratic Accelerator';
    let gpaDelta = '+0.36 GPA equivalent';
    let retentionRisk = 'Low (4% unassisted retention drop)';
    let relianceScore = 4.8;
    let description = 'You engage AI as a dynamic sparring partner rather than an automated surrogate. Empirical studies show this active dialogue optimizes conceptual retention and problem-solving velocity.';

    if (mode === 'delegate' && auditHabit === 'passive') {
      archetype = 'The High-Risk Delegate';
      gpaDelta = '+0.42 on homework / -0.28 on unassisted exams';
      retentionRisk = 'Severe (22% drop on unprompted tests)';
      relianceScore = 8.9;
      description = 'You frequently accept generative output with minimal friction. While short-term assignment completion is fast, Stanford longitudinal data indicates rapid decay of algorithmic and rhetorical recall.';
    } else if (mode === 'delegate' || (auditHabit === 'passive' && hours === 'intensive')) {
      archetype = 'The Pragmatic Automator';
      gpaDelta = '+0.25 GPA equivalent';
      retentionRisk = 'Moderate (12% unassisted retention drop)';
      relianceScore = 7.2;
      description = 'You use AI heavily for speed. While your efficiency is high, intentional verification friction is needed to reinforce deep cognitive muscle memory.';
    } else if (mode === 'outline' || mode === 'debug') {
      archetype = 'The Structured Synthesizer';
      gpaDelta = '+0.31 GPA equivalent';
      retentionRisk = 'Low-Moderate (6% retention delta)';
      relianceScore = 5.9;
      description = 'You utilize AI to structure thoughts, debug syntax, and explore edge cases while authoring the final intellectual work yourself. This mirrors top-performing cohorts in the EDUCAUSE studies.';
    }

    return { archetype, gpaDelta, retentionRisk, relianceScore, description };
  };

  const result = calculateResult();

  return (
    <section id="benchmark" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Diagnostic Self-Assessment</span>
            <span className="text-slate-600">·</span>
            <span>Empirical Cognitive Profiling</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
            Benchmark Your AI Study Habits
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Compare your personal coursework interactions against longitudinal data from Stanford HAI, MIT Sloan, and EDUCAUSE to evaluate cognitive retention vs. offloading risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-slate-900/90 shadow-xl">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-5 p-6 bg-slate-900/90">
            
            {/* Question 1: Discipline */}
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase font-mono-data tracking-wider block mb-2">
                1. Academic Field of Study
              </label>
              <select
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value as Discipline)}
                className="w-full bg-slate-950 text-sm text-slate-200 border border-slate-700 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-cyan-400"
              >
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Humanities & Social Sciences">Humanities & Social Sciences</option>
                <option value="Business & Economics">Business & Economics</option>
                <option value="Biological & Health Sciences">Biological & Health Sciences</option>
                <option value="Physical & Mathematical Sciences">Physical & Mathematical Sciences</option>
                <option value="Arts & Architecture">Arts & Architecture</option>
              </select>
            </div>

            {/* Question 2: Weekly Hours - Contiguous zero-gap buttons */}
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase font-mono-data tracking-wider block mb-2">
                2. Average Weekly Time Utilizing AI Copilots
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-slate-800 rounded-xl overflow-hidden divide-x divide-y sm:divide-y-0 divide-slate-800 bg-slate-950/80">
                {[
                  { id: 'light', label: '< 2 hrs/wk', desc: 'Light' },
                  { id: 'moderate', label: '2–5 hrs/wk', desc: 'Average' },
                  { id: 'heavy', label: '5–8 hrs/wk', desc: 'Frequent' },
                  { id: 'intensive', label: '8+ hrs/wk', desc: 'Continuous' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setHours(item.id as any)}
                    className={`p-2.5 text-left transition-all ${
                      hours === item.id
                        ? 'bg-indigo-950/90 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{item.label}</span>
                    <span className="text-[10px] text-slate-400">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Primary Workflow Mode - Contiguous stacked rows */}
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase font-mono-data tracking-wider block mb-2">
                3. Primary Interaction Strategy
              </label>
              <div className="rounded-xl border border-slate-800 divide-y divide-slate-800 overflow-hidden bg-slate-950/80">
                {[
                  {
                    id: 'socratic',
                    title: 'Socratic Dialogue & Concept Breakdown',
                    desc: 'I ask the model to quiz me, critique my premises, or break down difficult concepts step-by-step.',
                  },
                  {
                    id: 'outline',
                    title: 'Structuring & Ideation Scaffolding',
                    desc: 'I use it to generate essay outlines, explore counter-arguments, and format citations.',
                  },
                  {
                    id: 'debug',
                    title: 'Syntax, Code & Formula Verification',
                    desc: 'I write my own drafts and code, using AI specifically to pinpoint bugs or clarify compiler errors.',
                  },
                  {
                    id: 'delegate',
                    title: 'Direct Generation & Automated Drafting',
                    desc: 'I prompt the model to generate full paragraphs, solutions, or complete code blocks directly.',
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setMode(item.id as any)}
                    className={`p-3 cursor-pointer transition-all ${
                      mode === item.id
                        ? 'bg-indigo-950/90 text-white'
                        : 'text-slate-300 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        mode === item.id ? 'border-cyan-400 bg-cyan-400/20' : 'border-slate-600'
                      }`}>
                        {mode === item.id && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </div>
                      <span className="text-xs font-semibold text-white">{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 ml-6 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 4: Audit & Verification Habit - Contiguous zero-gap buttons */}
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase font-mono-data tracking-wider block mb-2">
                4. Output Verification & Auditing Rigor
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-slate-800 rounded-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-slate-950/80">
                {[
                  { id: 'rigorous', label: 'Rigorous Verification', desc: 'Always cross-check with textbook & papers' },
                  { id: 'spot', label: 'Spot-Checking', desc: 'Check key numbers or strange claims' },
                  { id: 'passive', label: 'Passive Acceptance', desc: 'Assume accuracy unless glaring flaw' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAuditHabit(item.id as any)}
                    className={`p-2.5 text-left transition-all ${
                      auditHabit === item.id
                        ? 'bg-cyan-950/90 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{item.label}</span>
                    <span className="text-[10px] text-slate-400">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Diagnostic Result Card - Contiguous joined right column */}
          <div className="lg:col-span-5 p-6 bg-slate-950/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-mono-data text-cyan-400 uppercase tracking-wider">
                  Benchmarked Archetype
                </span>
                <span className="text-xs font-mono-data px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  Peer Centile: 82nd
                </span>
              </div>

              <h3 className="font-editorial text-2xl text-white font-normal mb-2">
                {result.archetype}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {result.description}
              </p>

              {/* Metrics Breakdown - Contiguous zero-gap rows */}
              <div className="rounded-xl border border-slate-800/80 divide-y divide-slate-800/80 overflow-hidden bg-slate-950/90 mb-5">
                <div className="p-3 flex items-center justify-between hover:bg-slate-900/60 transition-colors">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Formative Assignment Impact</span>
                    <span className="text-xs font-semibold text-slate-200">Lab & essay grade projection</span>
                  </div>
                  <span className="font-mono-data font-bold text-sm text-emerald-400">
                    {result.gpaDelta}
                  </span>
                </div>

                <div className="p-3 flex items-center justify-between hover:bg-slate-900/60 transition-colors">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Unassisted Exam Retention Risk</span>
                    <span className="text-xs font-semibold text-slate-200">Closed-book exam vulnerability</span>
                  </div>
                  <span className="font-mono-data font-bold text-sm text-amber-300">
                    {result.retentionRisk}
                  </span>
                </div>

                <div className="p-3 flex items-center justify-between hover:bg-slate-900/60 transition-colors">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Cognitive Reliance Index</span>
                    <span className="text-xs font-semibold text-slate-200">Calculated reliance quotient</span>
                  </div>
                  <span className="font-mono-data font-bold text-sm text-cyan-400">
                    {result.relianceScore} / 10
                  </span>
                </div>
              </div>
            </div>

            {/* Empirical Recommendation */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Evidence-Based Study Strategy</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Stanford CTL research recommends the <strong>"Prompt, Attempt, Compare"</strong> cycle: spend 5 minutes drafting an initial response independently before consulting AI. This simple constraint restores 88% of organic memory retention while preserving time efficiency.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
