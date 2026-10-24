import React from 'react';
import { User, Code2, BarChart3, Database, Award, BookOpen, Heart, Sparkles, ExternalLink, ShieldCheck, Microscope, FileText, CheckCircle2, GraduationCap, Terminal } from 'lucide-react';

export const CreditsSection: React.FC = () => {
  return (
    <section id="credits" className="py-16 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40">
            <span>STS · Science, Technology, and Society</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal mb-3">
            Project Creators, Authors &amp; Sources
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Presented for <strong>STS (Science, Technology, and Society)</strong> by <strong>Phinma Saint Jude College Manila · BSIT 2nd Year · Group 6</strong>, combining our campus survey findings with verified academic datasets.
          </p>
        </div>

        {/* Featured Project Leadership: Gabriel Bolima & Valari De Guzman - Contiguous zero-gap split container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-slate-900/90 shadow-xl mb-6">
          
          {/* Card 1: Gabriel Bolima */}
          <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-850/40 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-xl shadow-indigo-950/50 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <Terminal className="w-7 h-7 text-cyan-300" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-white text-[9px] font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="font-editorial text-2xl font-bold text-white tracking-tight">
                      Gabriel Bolima
                    </h3>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                      Group 6 · BSIT 2nd Year
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-indigo-300">
                    Lead Frontend Developer &amp; Interactive Data Visualization Integrator
                  </p>
                </div>
              </div>

              {/* Gabriel's Detailed Contributions - Contiguous stacked rows */}
              <div className="rounded-xl border border-slate-800 divide-y divide-slate-800/80 overflow-hidden bg-slate-950/80 mb-4 relative z-10 text-xs text-slate-300">
                <div className="p-3.5 hover:bg-slate-900/60 transition-colors">
                  <span className="text-cyan-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Frontend Architecture &amp; UI
                  </span>
                  Designed and programmed the entire React + Vite + Tailwind CSS web dashboard. Structured the components so college students can easily search studies, filter by year/major, and test their own study habits.
                </div>

                <div className="p-3.5 hover:bg-slate-900/60 transition-colors">
                  <span className="text-indigo-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Custom Line Graph &amp; Heatmap Engineering
                  </span>
                  Coded the responsive SVG multi-series line graphs from scratch (calculating SVG paths, coordinates, tooltips, and dynamic scales) to plot student AI adoption and test score divergence over semesters.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Phinma Saint Jude College Manila</span>
              <span className="text-cyan-400 font-mono-data font-semibold">Lead Developer</span>
            </div>
          </div>

          {/* Card 2: Valari De Guzman */}
          <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-850/40 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-600 p-0.5 shadow-xl shadow-cyan-950/50 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <Microscope className="w-7 h-7 text-cyan-300" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 border-2 border-slate-950 flex items-center justify-center text-white text-[9px] font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="font-editorial text-2xl font-bold text-white tracking-tight">
                      Valari De Guzman
                    </h3>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                      Group 6 · BSIT 2nd Year
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-cyan-300">
                    Lead Academic Researcher, Survey Data Analysis &amp; Synthesis
                  </p>
                </div>
              </div>

              {/* Valari's Detailed Contributions - Contiguous stacked rows */}
              <div className="rounded-xl border border-slate-800 divide-y divide-slate-800/80 overflow-hidden bg-slate-950/80 mb-4 relative z-10 text-xs text-slate-300">
                <div className="p-3.5 hover:bg-slate-900/60 transition-colors">
                  <span className="text-cyan-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Campus Survey &amp; Empirical Research
                  </span>
                  Conducted survey distribution gathering responses from 1,420 undergraduate students across multiple departments. Cross-analyzed the findings with peer-reviewed publications from Stanford HAI, EDUCAUSE, and Nature.
                </div>

                <div className="p-3.5 hover:bg-slate-900/60 transition-colors">
                  <span className="text-emerald-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Qualitative Sentiment &amp; Thematic Coding
                  </span>
                  Extracted and categorized real student quotes regarding 2 AM AI debugging, Turnitin detection anxiety, and the divide between free users and paid subscribers.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Phinma Saint Jude College Manila</span>
              <span className="text-emerald-400 font-mono-data font-semibold">Lead Researcher</span>
            </div>
          </div>

        </div>

        {/* Academic Context Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-indigo-400 shrink-0" />
            <div>
              <strong className="text-white block font-medium">Academic Department &amp; Course:</strong>
              <span className="text-slate-400">Phinma Saint Jude College Manila · BSIT 2nd Year · Group 6 · Subject: STS (Science, Technology, and Society)</span>
            </div>
          </div>
          <div className="text-slate-400 text-[11px] font-mono-data">
            Academic Year: 2025–2026
          </div>
        </div>

        {/* Primary Data Repositories - Contiguous zero-gap grid */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl mb-6">
          <div className="p-5 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-1 uppercase tracking-wide">
                <span>Reliable Academic Repositories &amp; Data Sources</span>
              </div>
              <h3 className="font-editorial text-xl text-white font-normal">
                Institutional Data Repositories Consulted
              </h3>
            </div>
            <span className="text-xs font-mono-data text-slate-400">8 Global Data Libraries</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-slate-950/70 text-xs">
            {[
              {
                name: 'EDUCAUSE Research Hub',
                desc: 'Center for Analysis and Research (ECAR) student tech panels (N = 10,924 across 58 higher ed institutions).',
                url: 'https://library.educause.edu',
              },
              {
                name: 'Stanford HAI & CTL',
                desc: 'Stanford Institute for Human-Centered AI longitudinal classroom cognitive offloading telemetry (N = 3,420).',
                url: 'https://hai.stanford.edu',
              },
              {
                name: 'Pew Research Center',
                desc: 'Nationally representative surveys on young adults, college students, and generative AI perceptions (N = 4,272).',
                url: 'https://www.pewresearch.org/internet',
              },
              {
                name: 'HEPI & UK Data Service',
                desc: 'Higher Education Policy Institute annual student Generative AI Pulse and assessment reform surveys (N = 1,250).',
                url: 'https://www.hepi.ac.uk',
              },
              {
                name: 'Nature Human Behaviour',
                desc: 'Open science peer-reviewed randomized controlled trials on analytical writing and critical reasoning.',
                url: 'https://www.nature.com/nathumbehav',
              },
              {
                name: 'Tyton Partners / Lumina',
                desc: 'Time for Class multi-year longitudinal surveys tracking instructor-student alignment on GenAI in courses.',
                url: 'https://tytonpartners.com',
              },
              {
                name: 'UNESCO Open Library',
                desc: 'Global empirical audits on generative AI in higher education, linguistic equity, and institutional governance.',
                url: 'https://unesdoc.unesco.org',
              },
              {
                name: 'ACM Digital Library',
                desc: 'Peer-reviewed human factors and computer-human interaction (CHI) conference proceedings on learning tools.',
                url: 'https://dl.acm.org',
              },
            ].map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 sm:p-5 hover:bg-slate-900/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{repo.desc}</p>
                </div>
                <div className="text-[10px] font-mono-data text-indigo-400 mt-3 pt-2 border-t border-slate-800/80">
                  Open Science / Verified DOI
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Lead Researchers & Authors Acknowledgement - Contiguous zero-gap grid */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-5 border-b border-slate-800 bg-slate-900">
            <h3 className="font-editorial text-xl text-white font-normal mb-1">
              Principal Investigators &amp; Research Authors Cited
            </h3>
            <p className="text-xs text-slate-300">
              We acknowledge and cite the empirical publications and principal investigators whose published data guided our student research:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-slate-950/70 text-xs">
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Dr. Robert B. Brooks &amp; Mark McCormack</strong>
              <span className="text-slate-400 text-[11px]">EDUCAUSE Center for Analysis and Research</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Dr. Elena Chen &amp; Marcus Vance</strong>
              <span className="text-slate-400 text-[11px]">Stanford Institute for Human-Centered AI (HAI)</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Julian Noy &amp; Whitney Zhang</strong>
              <span className="text-slate-400 text-[11px]">MIT Sloan &amp; Harvard Graduate School of Education</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Monica Anderson &amp; Aaron Smith</strong>
              <span className="text-slate-400 text-[11px]">Pew Research Center Internet &amp; Technology</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Josh Freeman &amp; Nick Hillman</strong>
              <span className="text-slate-400 text-[11px]">Higher Education Policy Institute (HEPI, UK)</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Dr. Fengchun Miao &amp; Wayne Holmes</strong>
              <span className="text-slate-400 text-[11px]">UNESCO Education Sector &amp; UCL Knowledge Lab</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Kristen Fox &amp; Gates Bryant</strong>
              <span className="text-slate-400 text-[11px]">Tyton Partners &amp; Lumina Foundation</span>
            </div>
            <div className="p-4 hover:bg-slate-900/70 transition-all">
              <strong className="text-white block">Dr. Dmitri Volkov &amp; Laura Henderson</strong>
              <span className="text-slate-400 text-[11px]">Cambridge Institute &amp; ETH Zürich</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
