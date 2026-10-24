/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSummary } from './components/HeroSummary';
import { HeatmapViewer } from './components/HeatmapViewer';
import { SurveyTracker } from './components/SurveyTracker';
import { SentimentAnalysis } from './components/SentimentAnalysis';
import { BenchmarkQuiz } from './components/BenchmarkQuiz';
import { ResearchLibrary } from './components/ResearchLibrary';
import { CreditsSection } from './components/CreditsSection';
import { Footer } from './components/Footer';
import { StudyDetailModal } from './components/StudyDetailModal';
import { ResearchStudy } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDisciplineFilter, setSelectedDisciplineFilter] = useState<string>('all');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [selectedStudy, setSelectedStudy] = useState<ResearchStudy | null>(null);

  // If the user searches from the header, auto-route or highlight research studies
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 1 && activeTab === 'overview') {
      setActiveTab('studies');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c121e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Academic Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* Tab 1: Executive Overview & Headline Findings */}
        {activeTab === 'overview' && (
          <>
            <HeroSummary onNavigateTab={setActiveTab} />
            <SurveyTracker onSelectStudy={setSelectedStudy} />
            <HeatmapViewer
              selectedDisciplineFilter={selectedDisciplineFilter}
              setSelectedDisciplineFilter={setSelectedDisciplineFilter}
              selectedYearFilter={selectedYearFilter}
              setSelectedYearFilter={setSelectedYearFilter}
              onSelectStudy={setSelectedStudy}
            />
            <SentimentAnalysis onSelectStudy={setSelectedStudy} />
            <BenchmarkQuiz />
            <ResearchLibrary
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedDisciplineFilter={selectedDisciplineFilter}
              setSelectedDisciplineFilter={setSelectedDisciplineFilter}
              selectedYearFilter={selectedYearFilter}
              setSelectedYearFilter={setSelectedYearFilter}
              onSelectStudy={setSelectedStudy}
            />
            <CreditsSection />
          </>
        )}

        {/* Tab 2: Disciplinary Heatmap */}
        {activeTab === 'heatmap' && (
          <HeatmapViewer
            selectedDisciplineFilter={selectedDisciplineFilter}
            setSelectedDisciplineFilter={setSelectedDisciplineFilter}
            selectedYearFilter={selectedYearFilter}
            setSelectedYearFilter={setSelectedYearFilter}
            onSelectStudy={setSelectedStudy}
          />
        )}

        {/* Tab 3: Survey Visualizations */}
        {activeTab === 'surveys' && <SurveyTracker onSelectStudy={setSelectedStudy} />}

        {/* Tab 4: Qualitative Sentiment */}
        {activeTab === 'sentiment' && <SentimentAnalysis onSelectStudy={setSelectedStudy} />}

        {/* Tab 5: Benchmark Study Habits Diagnostic */}
        {activeTab === 'benchmark' && <BenchmarkQuiz />}

        {/* Tab 6: References & Research Studies Library */}
        {activeTab === 'studies' && (
          <ResearchLibrary
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedDisciplineFilter={selectedDisciplineFilter}
            setSelectedDisciplineFilter={setSelectedDisciplineFilter}
            selectedYearFilter={selectedYearFilter}
            setSelectedYearFilter={setSelectedYearFilter}
            onSelectStudy={setSelectedStudy}
          />
        )}

        {/* Tab 7: Credits Section & Maker Attributions */}
        {activeTab === 'credits' && <CreditsSection />}
      </main>

      {/* Study Detail Modal */}
      <StudyDetailModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />

      {/* Academic Footer */}
      <Footer onNavigateTab={setActiveTab} />
    </div>
  );
}
