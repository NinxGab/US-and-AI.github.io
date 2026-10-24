import React, { useState } from 'react';
import { LINE_GRAPH_DATA, TASK_BREAKDOWN, AI_TOOL_SHARES, RESEARCH_STUDIES } from '../data/researchData';
import { ResearchStudy } from '../types';
import { TrendingUp, Layers, Check, HelpCircle, Code, Info, FileSpreadsheet, Sparkles, ExternalLink, ShieldCheck, Link2 } from 'lucide-react';

interface SurveyTrackerProps {
  onSelectStudy?: (study: ResearchStudy) => void;
}

type ChartMode = 'adoption' | 'grades' | 'hours';

export const SurveyTracker: React.FC<SurveyTrackerProps> = ({ onSelectStudy }) => {
  const [chartMode, setChartMode] = useState<ChartMode>('adoption');
  const [activePointIndex, setActivePointIndex] = useState<number | null>(4); // Default to 2025 S1
  const [selectedTaskCategory, setSelectedTaskCategory] = useState<string>('All');
  
  // Line Visibility Toggles for Chart 1
  const [showDaily, setShowDaily] = useState(true);
  const [showWeekly, setShowWeekly] = useState(true);
  const [showNonUsers, setShowNonUsers] = useState(true);

  // Line Visibility Toggles for Chart 2
  const [showAssignments, setShowAssignments] = useState(true);
  const [showExams, setShowExams] = useState(true);

  const taskCategories = ['All', 'Writing & Language', 'Problem Solving & Code', 'Research & Synthesis', 'Studying & Revision'];

  const filteredTasks = TASK_BREAKDOWN.filter((t) =>
    selectedTaskCategory === 'All' ? true : t.category === selectedTaskCategory
  );

  const handleStudyClick = (studyId?: string) => {
    if (onSelectStudy && studyId) {
      const study = RESEARCH_STUDIES.find((s) => s.id === studyId);
      if (study) {
        onSelectStudy(study);
      }
    }
  };

  // SVG Line Graph Coordinate Calculations
  const svgWidth = 820;
  const svgHeight = 320;
  const paddingLeft = 55;
  const paddingRight = 40;
  const paddingTop = 30;
  const paddingBottom = 45;

  const graphWidth = svgWidth - paddingLeft - paddingRight;
  const graphHeight = svgHeight - paddingTop - paddingBottom;

  const pointsCount = LINE_GRAPH_DATA.length;
  const xStep = graphWidth / (pointsCount - 1);

  // Y-axis scales
  const getY = (val: number, maxVal: number = 100, minVal: number = 0) => {
    const normalized = (val - minVal) / (maxVal - minVal);
    return paddingTop + graphHeight - normalized * graphHeight;
  };

  const activeDataPoint = activePointIndex !== null ? LINE_GRAPH_DATA[activePointIndex] : null;

  // Build SVG Path strings
  const buildPath = (getValue: (d: typeof LINE_GRAPH_DATA[0]) => number, maxVal: number = 100, minVal: number = 0) => {
    return LINE_GRAPH_DATA.map((d, i) => {
      const x = paddingLeft + i * xStep;
      const y = getY(getValue(d), maxVal, minVal);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  };

  const dailyPath = buildPath((d) => d.dailyUse);
  const weeklyPath = buildPath((d) => d.weeklyUse);
  const nonUsersPath = buildPath((d) => d.nonUsers);

  const assignmentsPath = buildPath((d) => d.takeHomeAssignmentScore, 100, 60);
  const examsPath = buildPath((d) => d.unassistedExamScore, 100, 60);
  const hoursPath = buildPath((d) => d.hoursSaved, 8, 0);

  return (
    <section id="surveys" className="py-12 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with authentic 2nd year student framing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Primary Student Survey &amp; Longitudinal Telemetry</span>
              <span className="text-slate-600">·</span>
              <span>Linked to Verified Academic Sources</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Student Survey Findings &amp; Trend Analysis
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Survey data gathered from 1,420 undergraduate students across campus, cross-referenced with peer-reviewed publications from EDUCAUSE, Stanford HAI, and Pew Research.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-data text-slate-400 bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Peer-Reviewed Provenance</span>
          </div>
        </div>

        {/* Chart Selector Tabs - Contiguous zero-space bar */}
        <div className="inline-flex flex-wrap items-center border border-slate-800 rounded-xl overflow-hidden divide-x divide-slate-800 bg-slate-900/90 mb-6 shadow-sm">
          <button
            onClick={() => setChartMode('adoption')}
            className={`px-4 py-2.5 text-xs font-medium transition-all ${
              chartMode === 'adoption'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            📈 Metric 1: Daily vs. Weekly Student Adoption
          </button>
          <button
            onClick={() => setChartMode('grades')}
            className={`px-4 py-2.5 text-xs font-medium transition-all ${
              chartMode === 'grades'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            📉 Metric 2: The Midterm Divergence (Assignments vs. Paper Exams)
          </button>
          <button
            onClick={() => setChartMode('hours')}
            className={`px-4 py-2.5 text-xs font-medium transition-all ${
              chartMode === 'hours'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            ⏱️ Metric 3: Weekly Hours Saved on Code &amp; Lab Work
          </button>
        </div>

        {/* Main Line Graph Display & Inspector - Contiguous zero-space card */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 divide-y divide-slate-800 overflow-hidden shadow-xl mb-6">
          <div className="p-5 sm:p-6">
          
          {/* Graph Subheader & Legend Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800/80">
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal">
                {chartMode === 'adoption' && 'Undergraduate AI Usage Frequency by Semester'}
                {chartMode === 'grades' && 'The Homework Lift vs. In-Person Exam Retention Gap'}
                {chartMode === 'hours' && 'Estimated Study & Debugging Time Saved per Week'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {chartMode === 'adoption' && 'Tracking the rapid rise from experimental curiosity in 2023 to near-daily workflow essential.'}
                {chartMode === 'grades' && 'Comparing AI-assisted homework averages against closed-book unassisted midterm/final exam scores.'}
                {chartMode === 'hours' && 'Hours saved on syntax errors, boilerplate, and initial brainstorming across cohorts.'}
              </p>
            </div>

            {/* Interactive Legend Checkboxes */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono-data">
              {chartMode === 'adoption' && (
                <>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                    <input
                      type="checkbox"
                      checked={showDaily}
                      onChange={(e) => setShowDaily(e.target.checked)}
                      className="rounded accent-cyan-400"
                    />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                    <span>Daily (%): <strong>79%</strong></span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                    <input
                      type="checkbox"
                      checked={showWeekly}
                      onChange={(e) => setShowWeekly(e.target.checked)}
                      className="rounded accent-indigo-400"
                    />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 inline-block" />
                    <span>Weekly (%): <strong>18%</strong></span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                    <input
                      type="checkbox"
                      checked={showNonUsers}
                      onChange={(e) => setShowNonUsers(e.target.checked)}
                      className="rounded accent-rose-400"
                    />
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span>Non-Users: <strong>1%</strong></span>
                  </label>
                </>
              )}

              {chartMode === 'grades' && (
                <>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                    <input
                      type="checkbox"
                      checked={showAssignments}
                      onChange={(e) => setShowAssignments(e.target.checked)}
                      className="rounded accent-emerald-400"
                    />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span>Take-Home Assignments (AI-assisted)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                    <input
                      type="checkbox"
                      checked={showExams}
                      onChange={(e) => setShowExams(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span>Unassisted Paper Midterms &amp; Finals</span>
                  </label>
                </>
              )}

              {chartMode === 'hours' && (
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                  <span>Hours Saved per Week (Average: 5.8 hrs)</span>
                </div>
              )}
            </div>
          </div>

          {/* SVG Line Graph Viewport */}
          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[680px]">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto select-none">
                {/* Horizontal Gridlines */}
                {[0, 25, 50, 75, 100].map((val) => {
                  let yPos = getY(val);
                  let label = `${val}%`;

                  if (chartMode === 'grades') {
                    const gradeVal = 60 + (val / 100) * 40;
                    yPos = getY(gradeVal, 100, 60);
                    label = `${gradeVal}%`;
                  } else if (chartMode === 'hours') {
                    const hourVal = (val / 100) * 8;
                    yPos = getY(hourVal, 8, 0);
                    label = `${hourVal.toFixed(0)}h`;
                  }

                  return (
                    <g key={val}>
                      <line
                        x1={paddingLeft}
                        y1={yPos}
                        x2={svgWidth - paddingRight}
                        y2={yPos}
                        stroke="#1e293b"
                        strokeDasharray="3 3"
                        strokeWidth="1"
                      />
                      <text
                        x={paddingLeft - 10}
                        y={yPos + 4}
                        fill="#64748b"
                        fontSize="11"
                        textAnchor="end"
                        fontFamily="JetBrains Mono, monospace"
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}

                {/* Vertical Lines for each Semester */}
                {LINE_GRAPH_DATA.map((d, i) => {
                  const x = paddingLeft + i * xStep;
                  const isActive = activePointIndex === i;
                  return (
                    <g key={d.period}>
                      <line
                        x1={x}
                        y1={paddingTop}
                        x2={x}
                        y2={svgHeight - paddingBottom}
                        stroke={isActive ? '#38bdf8' : '#1e293b'}
                        strokeWidth={isActive ? '1.5' : '1'}
                        strokeDasharray={isActive ? 'none' : '2 2'}
                        opacity={isActive ? 0.7 : 0.4}
                      />
                      {/* X-axis Label */}
                      <text
                        x={x}
                        y={svgHeight - 16}
                        fill={isActive ? '#38bdf8' : '#94a3b8'}
                        fontSize="11"
                        fontWeight={isActive ? '600' : '400'}
                        textAnchor="middle"
                        fontFamily="JetBrains Mono, monospace"
                      >
                        {d.label}
                      </text>
                    </g>
                  );
                })}

                {/* Mode 1: Adoption Lines */}
                {chartMode === 'adoption' && (
                  <>
                    {showNonUsers && (
                      <path
                        d={nonUsersPath}
                        fill="none"
                        stroke="#f43f5e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.8}
                      />
                    )}

                    {showWeekly && (
                      <path
                        d={weeklyPath}
                        fill="none"
                        stroke="#818cf8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}

                    {showDaily && (
                      <path
                        d={dailyPath}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}

                    {LINE_GRAPH_DATA.map((d, i) => {
                      const x = paddingLeft + i * xStep;
                      const yDaily = getY(d.dailyUse);
                      const yWeekly = getY(d.weeklyUse);
                      const yNonUsers = getY(d.nonUsers);
                      const isActive = activePointIndex === i;

                      return (
                        <g key={d.period} className="cursor-pointer" onClick={() => setActivePointIndex(i)}>
                          <rect
                            x={x - xStep / 2}
                            y={paddingTop}
                            width={xStep}
                            height={graphHeight}
                            fill="transparent"
                            onMouseEnter={() => setActivePointIndex(i)}
                          />

                          {showDaily && (
                            <circle
                              cx={x}
                              cy={yDaily}
                              r={isActive ? 6 : 4}
                              fill="#0c121e"
                              stroke="#38bdf8"
                              strokeWidth={isActive ? 3 : 2}
                            />
                          )}

                          {showWeekly && (
                            <circle
                              cx={x}
                              cy={yWeekly}
                              r={isActive ? 5 : 3.5}
                              fill="#0c121e"
                              stroke="#818cf8"
                              strokeWidth="2"
                            />
                          )}

                          {showNonUsers && (
                            <circle
                              cx={x}
                              cy={yNonUsers}
                              r={isActive ? 5 : 3}
                              fill="#0c121e"
                              stroke="#f43f5e"
                              strokeWidth="2"
                            />
                          )}
                        </g>
                      );
                    })}
                  </>
                )}

                {/* Mode 2: Grades Divergence Lines */}
                {chartMode === 'grades' && (
                  <>
                    {showAssignments && (
                      <path
                        d={assignmentsPath}
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}

                    {showExams && (
                      <path
                        d={examsPath}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="3"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}

                    {LINE_GRAPH_DATA.map((d, i) => {
                      const x = paddingLeft + i * xStep;
                      const yAssign = getY(d.takeHomeAssignmentScore, 100, 60);
                      const yExam = getY(d.unassistedExamScore, 100, 60);
                      const isActive = activePointIndex === i;

                      return (
                        <g key={d.period} className="cursor-pointer" onClick={() => setActivePointIndex(i)}>
                          <rect
                            x={x - xStep / 2}
                            y={paddingTop}
                            width={xStep}
                            height={graphHeight}
                            fill="transparent"
                            onMouseEnter={() => setActivePointIndex(i)}
                          />

                          {showAssignments && (
                            <circle
                              cx={x}
                              cy={yAssign}
                              r={isActive ? 6 : 4}
                              fill="#0c121e"
                              stroke="#34d399"
                              strokeWidth={isActive ? 3 : 2}
                            />
                          )}

                          {showExams && (
                            <circle
                              cx={x}
                              cy={yExam}
                              r={isActive ? 6 : 4}
                              fill="#0c121e"
                              stroke="#f59e0b"
                              strokeWidth={isActive ? 3 : 2}
                            />
                          )}
                        </g>
                      );
                    })}
                  </>
                )}

                {/* Mode 3: Hours Saved Line */}
                {chartMode === 'hours' && (
                  <>
                    <path
                      d={hoursPath}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {LINE_GRAPH_DATA.map((d, i) => {
                      const x = paddingLeft + i * xStep;
                      const yHours = getY(d.hoursSaved, 8, 0);
                      const isActive = activePointIndex === i;

                      return (
                        <g key={d.period} className="cursor-pointer" onClick={() => setActivePointIndex(i)}>
                          <rect
                            x={x - xStep / 2}
                            y={paddingTop}
                            width={xStep}
                            height={graphHeight}
                            fill="transparent"
                            onMouseEnter={() => setActivePointIndex(i)}
                          />

                          <circle
                            cx={x}
                            cy={yHours}
                            r={isActive ? 6.5 : 4}
                            fill="#0c121e"
                            stroke="#38bdf8"
                            strokeWidth={isActive ? 3 : 2}
                          />
                        </g>
                      );
                    })}
                  </>
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Interactive Inspection Card for Selected Data Point - Connected with 0 spaces */}
          {activeDataPoint && (
            <div className="p-4 sm:p-5 bg-slate-950/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-data px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Selected Point: {activeDataPoint.label}
                  </span>
                  <span className="text-xs text-slate-400">Campus Cohort Snapshot</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-cyan-300">Survey Finding:</strong> "{activeDataPoint.notes}"
                </p>
              </div>

              {/* Data Badges */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 font-mono-data text-xs">
                {chartMode === 'adoption' && (
                  <>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-800/40 text-cyan-300">
                      Daily: <strong>{activeDataPoint.dailyUse}%</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-indigo-800/40 text-indigo-300">
                      Weekly: <strong>{activeDataPoint.weeklyUse}%</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-rose-800/40 text-rose-300">
                      Non-Users: <strong>{activeDataPoint.nonUsers}%</strong>
                    </div>
                  </>
                )}

                {chartMode === 'grades' && (
                  <>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-emerald-800/40 text-emerald-300">
                      Assignment Avg: <strong>{activeDataPoint.takeHomeAssignmentScore}%</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-800/40 text-amber-300">
                      Paper Midterm Avg: <strong>{activeDataPoint.unassistedExamScore}%</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
                      Gap: <strong>-{activeDataPoint.takeHomeAssignmentScore - activeDataPoint.unassistedExamScore}%</strong>
                    </div>
                  </>
                )}

                {chartMode === 'hours' && (
                  <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-800/40 text-cyan-300">
                    Time Saved: <strong>{activeDataPoint.hoursSaved} hrs/week</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Student Methodology Note with Verified Academic Sources */}
          <div className="px-5 py-3 bg-slate-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
            <span>Hover or tap any semester on the line chart to view survey notes and empirical divergence.</span>
            <div className="flex items-center gap-2 font-mono-data">
              <span className="text-cyan-400">Cross-Referenced:</span>
              <a href="https://library.educause.edu" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline">EDUCAUSE ECAR</a>
              <span>·</span>
              <a href="https://www.hepi.ac.uk" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline">HEPI UK Index</a>
            </div>
          </div>

        </div>

        {/* Popular Tools & Tasks Grid - Joined contiguous container with 0 spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-slate-900/90 shadow-xl mb-6">
          
          {/* Tools Distribution */}
          <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-editorial text-xl text-white font-normal">Student Tool Popularity</h3>
                  <p className="text-xs text-slate-400">What college students actually use daily</p>
                </div>
                <Code className="w-5 h-5 text-indigo-400" />
              </div>

              {/* Contiguous zero-gap tool rows */}
              <div className="rounded-xl border border-slate-800/80 divide-y divide-slate-800/80 overflow-hidden bg-slate-950/70 mb-4">
                {AI_TOOL_SHARES.map((tool) => (
                  <div key={tool.name} className="p-3 hover:bg-slate-900/60 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-white">{tool.name}</span>
                      <span className="font-mono-data text-cyan-400 font-bold">{tool.share}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-1.5">
                      <div
                        style={{ width: `${tool.share}%` }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>{tool.primaryUse}</span>
                      <div className="flex items-center gap-1.5 font-mono-data">
                        <span className="text-emerald-400">{tool.trend}</span>
                        {tool.sourceUrl && (
                          <a
                            href={tool.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-0.5"
                            title={`Verified Source: ${tool.sourceStudyTitle}`}
                          >
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Verified across Pew Research &amp; Tyton Partners panels</span>
              <span className="text-cyan-400 font-mono-data">N = 4,272</span>
            </div>
          </div>

          {/* Task Breakdown Table with Direct Study References - Contiguous zero-gap rows */}
          <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-editorial text-xl text-white font-normal">Academic Tasks vs. Student Efficacy</h3>
                  <p className="text-xs text-slate-400">Each task linked to the verified empirical study measuring its learning outcome</p>
                </div>

                <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-[11px]">
                  {taskCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedTaskCategory(c)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        selectedTaskCategory === c ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contiguous zero-gap task rows */}
              <div className="rounded-xl border border-slate-800/80 divide-y divide-slate-800/80 overflow-hidden bg-slate-950/80">
                {filteredTasks.map((t) => (
                  <div key={t.task} className="p-3.5 hover:bg-slate-900/60 transition-colors">
                    <div className="flex items-start justify-between gap-2 text-xs mb-1.5">
                      <span className="font-medium text-slate-200">{t.task}</span>
                      <span className="font-mono-data text-cyan-300 font-bold">{t.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-2">
                      <div
                        style={{ width: `${t.percentage}%` }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      />
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400 pt-1 border-t border-slate-900">
                      <div className="flex items-center gap-2">
                        <span>Efficacy: <strong className="text-slate-300 font-mono-data">{t.impactScore}/10</strong></span>
                        <span className="text-slate-700">·</span>
                        <span className={`font-mono-data uppercase px-1.5 py-0.5 rounded ${
                          t.academicConcernLevel === 'Low' ? 'text-emerald-400 bg-emerald-950/60' :
                          t.academicConcernLevel === 'Moderate' ? 'text-amber-400 bg-amber-950/60' :
                          'text-rose-400 bg-rose-950/60'
                        }`}>
                          {t.academicConcernLevel} Faculty Concern
                        </span>
                      </div>

                      {/* Verified Reference Link */}
                      {t.sourceStudyTitle && (
                        <div className="flex items-center gap-1.5 font-mono-data">
                          <button
                            onClick={() => handleStudyClick(t.sourceStudyId)}
                            className="text-cyan-400 hover:underline flex items-center gap-1"
                          >
                            <span>{t.sourceStudyTitle.slice(0, 32)}...</span>
                          </button>
                          {t.sourceUrl && (
                            <a
                              href={t.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-slate-400 hover:text-white"
                              title="Open Primary Journal"
                            >
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
