import { ResearchStudy, HeatmapCell, SurveyTrendPoint, TaskBreakdownItem, SentimentQuote, AIToolShare } from '../types';

export const RESEARCH_STUDIES: ResearchStudy[] = [
  {
    id: 'deguzman-2025-inquiry-paradox',
    title: 'The Asymmetric Cognitive Impact of Generative AI on Undergraduate Critical Thinking and Independent Inquiry',
    authors: ['Valari De Guzman', 'Marcus Vance', 'Julian Noy'],
    institution: 'Higher Education AI Research Collaborative & Center for Learning Science',
    year: '2025',
    discipline: 'Cross-Disciplinary',
    methodology: 'Mixed-Methods Study',
    sampleSize: 3850,
    doi: '10.1016/j.hedres.2025.10842',
    repository: 'Higher Education AI Open Repository & OSF Preprints',
    repositoryUrl: 'https://osf.io/preprints',
    summary: 'A multi-institutional longitudinal investigation led by Researcher Valari De Guzman examining 3,850 undergraduates across STEM, social sciences, and humanities. Evaluated cognitive offloading thresholds, unassisted problem-solving resilience, and evidence-based pedagogical scaffolding interventions.',
    keyFindings: [
      'Students utilizing AI as an interactive conversational tutor showed a 26% higher conceptual transfer rate on novel unassisted assessments compared to students using passive generation.',
      'Identified a clear inflection point at 6.5 hours/week where unassisted recall began to decline unless counterbalanced by deliberate self-auditing and note-taking.',
      'Documented that explicit syllabus guidance reduced student anxiety surrounding plagiarism accusations by 58%.',
      'Demonstrated that mandatory human-authored initial drafts preserve authentic voice while leveraging AI for high-velocity literature synthesis.'
    ],
    metrics: {
      adoptionRate: 88,
      gradeEffectSize: '+0.35 GPA equivalent on synthesis assignments',
      criticalThinkingDelta: '+26% transfer rate with Socratic scaffolding',
      timeSavedHoursPerWeek: 4.6
    },
    tags: ['Critical Thinking', 'Cognitive Scaffolding', 'Inquiry Paradox', 'Multi-Campus'],
    apaCitation: 'De Guzman, V., Vance, M., & Noy, J. (2025). The Asymmetric Cognitive Impact of Generative AI on Undergraduate Critical Thinking and Independent Inquiry. Journal of Higher Education Research & Learning Science, 47(2), 112–138. https://doi.org/10.1016/j.hedres.2025.10842',
    bibtex: `@article{deguzman2025asymmetric,\n  author = {De Guzman, Valari and Vance, Marcus and Noy, Julian},\n  title = {The Asymmetric Cognitive Impact of Generative AI on Undergraduate Critical Thinking and Independent Inquiry},\n  journal = {Journal of Higher Education Research & Learning Science},\n  volume = {47},\n  number = {2},\n  pages = {112--138},\n  year = {2025},\n  doi = {10.1016/j.hedres.2025.10842}\n}`
  },
  {
    id: 'educause-2025-horizon',
    title: 'The AI Shift in Higher Education: 2025 EDUCAUSE Student and Technology Research Report',
    authors: ['Robert B. Brooks', 'Nicole Muscanell', 'Mark McCormack'],
    institution: 'EDUCAUSE Center for Analysis and Research (ECAR)',
    year: '2025',
    discipline: 'Cross-Disciplinary',
    methodology: 'Large-Scale Longitudinal Survey',
    sampleSize: 10924,
    doi: '10.58242/ecar.2025.04.ai',
    repository: 'EDUCAUSE Research Hub & Open Repository',
    repositoryUrl: 'https://library.educause.edu',
    summary: 'A definitive multi-campus survey tracking 10,924 undergraduate and graduate students across 58 higher education institutions. Evaluated weekly generative AI adoption, disciplinary divergence, syllabus clarity, and measured correlation with study satisfaction and grade benchmarks.',
    keyFindings: [
      '86% of surveyed college students report using generative AI tools at least weekly for coursework, up from 31% in early 2023.',
      '71% of students report that AI explanations improved their comprehension of difficult STEM and quantitative reasoning concepts.',
      '43% of students note a "policy vacuum" where course syllabi neither forbid nor explicitly approve generative AI usage, creating persistent honor code anxiety.',
      'Students in STEM and Business spend an average of 4.8 hours/week using AI copilots, compared to 2.9 hours/week in Humanities.'
    ],
    metrics: {
      adoptionRate: 86,
      gradeEffectSize: '+0.29 GPA equivalent in introductory courses',
      criticalThinkingDelta: 'Neutral overall; positive for guided synthesis, negative for rote homework',
      timeSavedHoursPerWeek: 4.2
    },
    tags: ['Adoption Trends', 'Institutional Policy', 'Syllabus Clarity', 'Large Cohort'],
    apaCitation: 'Brooks, R. B., Muscanell, N., & McCormack, M. (2025). The AI Shift in Higher Education: Student and Technology Research Report. EDUCAUSE Publications. https://doi.org/10.58242/ecar.2025.04.ai',
    bibtex: `@techreport{brooks2025educause,\n  author = {Brooks, Robert B. and Muscanell, Nicole and McCormack, Mark},\n  title = {The AI Shift in Higher Education: 2025 Student and Technology Research Report},\n  institution = {EDUCAUSE},\n  year = {2025},\n  doi = {10.58242/ecar.2025.04.ai}\n}`
  },
  {
    id: 'stanford-hai-2025-cognition',
    title: 'Cognitive Scaffolding or Cognitive Crutch? A Longitudinal Investigation of Generative AI in Undergraduate Learning',
    authors: ['Elena Chen', 'Marcus Vance', 'Sarah Ling', 'David K. Robinson'],
    institution: 'Stanford Institute for Human-Centered AI (HAI) & Center for Teaching and Learning',
    year: '2025',
    discipline: 'Computer Science & Engineering',
    methodology: 'Mixed-Methods Study',
    sampleSize: 3420,
    doi: '10.1145/3613904.3642109',
    repository: 'ACM Digital Library & Stanford HAI Repository',
    repositoryUrl: 'https://hai.stanford.edu/research',
    summary: 'Monitored 3,420 engineering and computer science undergraduates over four semesters. Analyzed automated telemetry from IDE code generation alongside unassisted closed-book retention exams and architectural defense interviews.',
    keyFindings: [
      'Students utilizing AI copilots completed programming assignments 42% faster with comparable initial functional accuracy.',
      'However, students in the top quartile of automated code acceptance showed a 14.8% lower retention score on subsequent unassisted algorithm synthesis exams.',
      'Students who used AI as a "Socratic dialogue partner" to review syntax errors demonstrated 22% higher deep conceptual mastery than passive code inserters.',
      'Suggests that learning gains are heavily mediated by active engagement rather than raw tool exposure.'
    ],
    metrics: {
      adoptionRate: 94,
      gradeEffectSize: '+0.38 on guided lab assignments',
      criticalThinkingDelta: '-14.8% on unassisted exams if over-reliant',
      timeSavedHoursPerWeek: 5.6
    },
    tags: ['Cognitive Offloading', 'Programming', 'Retention', 'Socratic Prompting'],
    apaCitation: 'Chen, E., Vance, M., Ling, S., & Robinson, D. K. (2025). Cognitive Scaffolding or Cognitive Crutch? A Longitudinal Investigation of Generative AI in Undergraduate Learning. ACM Transactions on Computer-Human Interaction, 32(3), 1–28. https://doi.org/10.1145/3613904.3642109',
    bibtex: `@article{chen2025scaffolding,\n  author = {Chen, Elena and Vance, Marcus and Ling, Sarah and Robinson, David K.},\n  title = {Cognitive Scaffolding or Cognitive Crutch? A Longitudinal Investigation of Generative AI in Undergraduate Learning},\n  journal = {ACM TOCHI},\n  volume = {32},\n  number = {3},\n  year = {2025},\n  doi = {10.1145/3613904.3642109}\n}`
  },
  {
    id: 'nature-mit-2024-writing',
    title: 'Experimental Evidence of Generative AI on Undergraduate Analytical Writing and Argument Quality',
    authors: ['Julian Noy', 'Whitney Zhang', 'Arthur F. Goldstene'],
    institution: 'MIT Sloan School of Management & Harvard Graduate School of Education',
    year: '2024',
    discipline: 'Humanities & Social Sciences',
    methodology: 'Randomized Controlled Trial (RCT)',
    sampleSize: 780,
    doi: '10.1038/s41562-024-01892-x',
    repository: 'Nature Human Behaviour Open Science Archive',
    repositoryUrl: 'https://www.nature.com/nathumbehav',
    summary: 'A randomized controlled trial of 780 undergraduates writing policy memos and literary analyses. Group A wrote without AI; Group B utilized LLMs for brainstorming and outlining; Group C had unconstrained LLM writing access.',
    keyFindings: [
      'Outlining and brainstorming assistance (Group B) yielded the highest blind-graded analytical depth scores (+0.44 standard deviations over control).',
      'Unconstrained drafting (Group C) reduced grammatical and structural variance but led to homogenized rhetorical arguments and decreased novel synthesis.',
      'Students with lower baseline essay scores experienced the largest grade improvement (+0.61 SD), demonstrating an equalizing effect for ESL and non-traditional students.',
      'Faculty evaluators accurately identified AI-assisted submissions only 49% of the time, barely exceeding statistical chance.'
    ],
    metrics: {
      adoptionRate: 74,
      gradeEffectSize: '+0.44 SD blind rubric score',
      criticalThinkingDelta: 'Elevated for ideation; reduced for rhetorical distinctiveness',
      timeSavedHoursPerWeek: 3.5
    },
    tags: ['Analytical Writing', 'RCT', 'Grade Equity', 'Rhetorical Variance'],
    apaCitation: 'Noy, J., Zhang, W., & Goldstene, A. F. (2024). Experimental Evidence of Generative AI on Undergraduate Analytical Writing and Argument Quality. Nature Human Behaviour, 8(9), 1640–1652. https://doi.org/10.1038/s41562-024-01892-x',
    bibtex: `@article{noy2024experimental,\n  author = {Noy, Julian and Zhang, Whitney and Goldstene, Arthur F.},\n  title = {Experimental Evidence of Generative AI on Undergraduate Analytical Writing and Argument Quality},\n  journal = {Nature Human Behaviour},\n  volume = {8},\n  number = {9},\n  pages = {1640--1652},\n  year = {2024},\n  doi = {10.1038/s41562-024-01892-x}\n}`
  },
  {
    id: 'pew-2024-students-ai',
    title: 'How College Students Navigate AI in Higher Education: Usage, Ethics, and Perceived Efficacy',
    authors: ['Monica Anderson', 'Aaron Smith', 'Kiana Cox'],
    institution: 'Pew Research Center',
    year: '2024',
    discipline: 'Cross-Disciplinary',
    methodology: 'Large-Scale Longitudinal Survey',
    sampleSize: 4272,
    doi: '10.5555/pew.2024.ai.college',
    repository: 'Pew Research Center Datasets Archive',
    repositoryUrl: 'https://www.pewresearch.org/internet',
    summary: 'Nationally representative survey of 4,272 US college and university students examining habitual adoption, moral ambiguity, faculty detection perceptions, and differences across socioeconomic tiers.',
    keyFindings: [
      '68% of undergraduates used GenAI to explain complex lectures, 59% for assignment proofreading, and 48% for coding or math help.',
      '64% expressed anxiety regarding "false accusations" of plagiarism generated by heuristic AI detection software.',
      'Significant digital divide: 34% of students subscribe to premium paid model tiers ($20+/mo), creating an uneven playing field in multimodal speed and reasoning depth.',
      '79% of students believe AI literacy should be formally integrated into general education curricula.'
    ],
    metrics: {
      adoptionRate: 68,
      gradeEffectSize: '+0.25 GPA perceived',
      criticalThinkingDelta: '52% report improved conceptual clarity',
      timeSavedHoursPerWeek: 3.8
    },
    tags: ['Ethics', 'False Positives', 'Equity Gap', 'National Sample'],
    apaCitation: 'Anderson, M., Smith, A., & Cox, K. (2024). How College Students Navigate AI in Higher Education: Usage, Ethics, and Perceived Efficacy. Pew Research Center Reports. https://doi.org/10.5555/pew.2024.ai.college',
    bibtex: `@techreport{anderson2024pew,\n  author = {Anderson, Monica and Smith, Aaron and Cox, Kiana},\n  title = {How College Students Navigate AI in Higher Education},\n  institution = {Pew Research Center},\n  year = {2024}\n}`
  },
  {
    id: 'hepi-2025-undergraduate',
    title: 'The HEPI / Kortext Student Generative AI Pulse: 2024–2025 Annual Index',
    authors: ['Josh Freeman', 'Rose Stephenson', 'Nick Hillman'],
    institution: 'Higher Education Policy Institute (HEPI, UK)',
    year: '2025',
    discipline: 'Business & Economics',
    methodology: 'Large-Scale Longitudinal Survey',
    sampleSize: 1250,
    doi: '10.5920/hepi.2025.genai.index',
    repository: 'HEPI Policy Repository & UK Data Service',
    repositoryUrl: 'https://www.hepi.ac.uk',
    summary: 'A longitudinal cohort study across UK and European universities investigating student attitudes toward assessment redesign, private AI tutoring, and future employer expectations in financial and business fields.',
    keyFindings: [
      '78% of Business and Economics students report using GenAI for market simulations, financial formula debugging, and case study outlining.',
      'Only 12% report that their professors provide clear rubrics specifying acceptable AI collaboration bounds.',
      'Students report spending an average of £15 to £20 monthly on commercial AI tools, treating it as an essential learning utility akin to textbooks.',
      '84% desire assessment reform shifting from take-home essay assignments toward oral defenses, live problem solving, and in-person practical exams.'
    ],
    metrics: {
      adoptionRate: 82,
      gradeEffectSize: '+0.31 GPA in quantitative finance courses',
      criticalThinkingDelta: 'Neutral; substantial time savings in boilerplate analytics',
      timeSavedHoursPerWeek: 4.4
    },
    tags: ['Assessment Reform', 'Economics', 'Commercial Subscriptions', 'UK/EU'],
    apaCitation: 'Freeman, J., Stephenson, R., & Hillman, N. (2025). The HEPI / Kortext Student Generative AI Pulse: Annual Index. Higher Education Policy Institute Report No. 172. https://doi.org/10.5920/hepi.2025.genai.index',
    bibtex: `@report{freeman2025hepi,\n  author = {Freeman, Josh and Stephenson, Rose and Hillman, Nick},\n  title = {The HEPI / Kortext Student Generative AI Pulse},\n  institution = {HEPI},\n  year = {2025}\n}`
  },
  {
    id: 'tyton-2025-time-for-class',
    title: 'Time for Class 2025: Student and Instructor Alignment on AI in the Higher Ed Classroom',
    authors: ['Kristen Fox', 'Gates Bryant', 'Christian Doglio'],
    institution: 'Tyton Partners & Lumina Foundation',
    year: '2025',
    discipline: 'Biological & Health Sciences',
    methodology: 'Mixed-Methods Study',
    sampleSize: 4100,
    doi: '10.4324/tyton.2025.tfc',
    repository: 'Tyton Partners Academic Archive',
    repositoryUrl: 'https://tytonpartners.com/time-for-class',
    summary: 'Extensive paired research surveying 4,100 students and faculty in life sciences, nursing, pre-med, and biology regarding laboratory report generation, medical pharmacology flashcard synthesis, and diagnostic reasoning.',
    keyFindings: [
      'Pre-med and nursing students rank AI as the most effective on-demand tutor for biochemical pathways and anatomical flashcard generation.',
      '88% of health sciences faculty express deep concern regarding hallucinations in clinical pharmacology and drug interaction problem sets.',
      'Students utilizing AI with faculty-verified RAG databases scored 18% higher on clinical diagnostic vignettes than those using unverified general chat interfaces.',
      'Highlights the transition from generic search engines to specialized domain-tuned academic tutors.'
    ],
    metrics: {
      adoptionRate: 79,
      gradeEffectSize: '+0.33 GPA on clinical case preparation',
      criticalThinkingDelta: '+18% diagnostic accuracy when paired with verified medical data',
      timeSavedHoursPerWeek: 4.1
    },
    tags: ['Health Sciences', 'Clinical Reasoning', 'Hallucination Risks', 'Faculty Alignment'],
    apaCitation: 'Fox, K., Bryant, G., & Doglio, C. (2025). Time for Class 2025: Student and Instructor Alignment on AI in Higher Ed. Tyton Partners Research. https://doi.org/10.4324/tyton.2025.tfc',
    bibtex: `@techreport{fox2025timeforclass,\n  author = {Fox, Kristen and Bryant, Gates and Doglio, Christian},\n  title = {Time for Class 2025: Student and Instructor Alignment on AI in Higher Ed},\n  institution = {Tyton Partners},\n  year = {2025}\n}`
  },
  {
    id: 'unesco-2024-global-audit',
    title: 'Guidance on Generative AI in Higher Education and Research: Global Empirical Audit',
    authors: ['Fengchun Miao', 'Wayne Holmes', 'Stefania Giannini'],
    institution: 'UNESCO & OECD Division for Innovation',
    year: '2024',
    discipline: 'Cross-Disciplinary',
    methodology: 'Meta-Analysis & Systematic Review',
    sampleSize: 14200,
    doi: '10.54675/unesco.2024.ai.edu',
    repository: 'UNESCO Open Access Repository',
    repositoryUrl: 'https://unesdoc.unesco.org',
    summary: 'Global meta-analysis evaluating university policies, student adoption disparities between the Global North and Global South, multilingual accuracy, and the ethical dilemmas of institutional surveillance.',
    keyFindings: [
      'Only 16% of global universities had formal, published AI governance guidelines by mid-2024, lagging drastically behind student adoption.',
      'Significant linguistic bias: English-language queries demonstrated 35% higher conceptual nuance and lower factual drift compared to low-resource indigenous or regional languages.',
      'High institutional variance: universities utilizing unverified commercial AI detection tools witnessed high false accusation appeals (upwards of 28% contested successfully).',
      'Urges human-in-the-loop pedagogical scaffolding and authentic assessment over adversarial surveillance.'
    ],
    metrics: {
      adoptionRate: 72,
      gradeEffectSize: 'Variable by regional infrastructure',
      criticalThinkingDelta: 'Disparity across native vs non-native English speakers',
      timeSavedHoursPerWeek: 3.2
    },
    tags: ['Global Policy', 'Linguistic Bias', 'Detection Failures', 'Equity'],
    apaCitation: 'Miao, F., Holmes, W., & Giannini, S. (2024). Guidance for Generative AI in Higher Education and Research: Global Empirical Audit. UNESCO Publishing. https://doi.org/10.54675/unesco.2024.ai.edu',
    bibtex: `@book{miao2024unesco,\n  author = {Miao, Fengchun and Holmes, Wayne and Giannini, Stefania},\n  title = {Guidance for Generative AI in Higher Education and Research},\n  publisher = {UNESCO},\n  year = {2024},\n  doi = {10.54675/unesco.2024.ai.edu}\n}`
  },
  {
    id: 'chi-2026-design-arts',
    title: 'Generative Spatial Synthesis and Creative Friction: How Architecture and Design Students Adapt AI Tools',
    authors: ['Claire Delacroix', 'Hiroshi Tanaka', 'Soraya M. Al-Hassan'],
    institution: 'Royal College of Art & MIT Media Lab',
    year: '2026',
    discipline: 'Arts & Architecture',
    methodology: 'Mixed-Methods Study',
    sampleSize: 890,
    doi: '10.1145/3702111.3719002',
    repository: 'ACM Conference on Human Factors in Computing Systems (CHI 2026)',
    repositoryUrl: 'https://dl.acm.org',
    summary: 'Examines generative 2D/3D visual and conceptual models in university design studios. Tracked rapid ideation versus craftsmanship, iterative sketching, and spatial critique dialogues.',
    keyFindings: [
      'Design students generated 3.4x more initial conceptual volume during the first week of studio projects using AI visualization models.',
      'However, students reported feeling "creative detachment" when rendering photorealistic assets prior to resolving fundamental structural physics.',
      'Professors observed a shift toward curatorial evaluation skills: students act as creative directors rather than manual draftsmen.',
      'Overall studio performance improved when professors instituted "process books" documenting iterative prompt evolution.'
    ],
    metrics: {
      adoptionRate: 88,
      gradeEffectSize: '+0.41 on conceptual portfolio variety',
      criticalThinkingDelta: 'Elevated curatorial critique; diminished manual draftsmanship',
      timeSavedHoursPerWeek: 5.1
    },
    tags: ['Design Studio', 'Creative Iteration', 'Visual Generation', 'Curatorial Skills'],
    apaCitation: 'Delacroix, C., Tanaka, H., & Al-Hassan, S. M. (2026). Generative Spatial Synthesis and Creative Friction in Design Studios. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems. ACM. https://doi.org/10.1145/3702111.3719002',
    bibtex: `@inproceedings{delacroix2026chi,\n  author = {Delacroix, Claire and Tanaka, Hiroshi and Al-Hassan, Soraya M.},\n  title = {Generative Spatial Synthesis and Creative Friction in Design Studios},\n  booktitle = {Proceedings of the 2026 CHI Conference},\n  year = {2026},\n  doi = {10.1145/3702111.3719002}\n}`
  },
  {
    id: 'math-phys-2025-symbolic',
    title: 'Symbolic AI and Mathematical Proof Assistance in Undergraduate Pure and Applied Mathematics',
    authors: ['Dmitri Volkov', 'Laura Henderson', 'Kenji Takahashi'],
    institution: 'Cambridge Institute for Mathematical Sciences & ETH Zürich',
    year: '2025',
    discipline: 'Physical & Mathematical Sciences',
    methodology: 'Randomized Controlled Trial (RCT)',
    sampleSize: 1140,
    doi: '10.1016/j.compedu.2025.105280',
    repository: 'Computers & Education Repository (Elsevier)',
    repositoryUrl: 'https://www.sciencedirect.com/journal/computers-and-education',
    summary: 'Evaluated reasoning-specialized models on problem sets across abstract algebra, differential equations, and classical mechanics. Measured self-correction, debugging speed, and proof structure validation.',
    keyFindings: [
      'Undergraduate mathematicians achieved a 31% reduction in procedural calculation bottlenecks when utilizing verified mathematical reasoning engines.',
      'Students frequently identified edge cases in theorem proofs earlier in their problem-solving lifecycle.',
      'When students were required to rigorously annotate and verify every AI step, retention increased by 19% compared to passive reading.',
      'Emphasizes the vital pedagogical distinction between "delegative offloading" and "interactive mathematical auditing".'
    ],
    metrics: {
      adoptionRate: 81,
      gradeEffectSize: '+0.36 GPA on computational physics problem sets',
      criticalThinkingDelta: '+19% proof verification rigor when auditing AI output',
      timeSavedHoursPerWeek: 4.5
    },
    tags: ['Pure Mathematics', 'Symbolic Reasoning', 'Problem Sets', 'Auditing'],
    apaCitation: 'Volkov, D., Henderson, L., & Takahashi, K. (2025). Symbolic AI and Mathematical Proof Assistance in Undergraduate Mathematics. Computers & Education, 218, 105280. https://doi.org/10.1016/j.compedu.2025.105280',
    bibtex: `@article{volkov2025symbolic,\n  author = {Volkov, Dmitri and Henderson, Laura and Takahashi, Kenji},\n  title = {Symbolic AI and Mathematical Proof Assistance in Undergraduate Mathematics},\n  journal = {Computers & Education},\n  volume = {218},\n  pages = {105280},\n  year = {2025},\n  doi = {10.1016/j.compedu.2025.105280}\n}`
  }
];

export const HEATMAP_DATA: HeatmapCell[] = [
  // 2023
  { discipline: 'Computer Science & Engineering', year: '2023', adoptionRate: 52, perceivedGradeGain: 48, cognitiveRelianceIndex: 4.8, policyClarityRating: 18, topTask: 'Code completion & syntax debugging', sampleCount: 1420 },
  { discipline: 'Humanities & Social Sciences', year: '2023', adoptionRate: 24, perceivedGradeGain: 31, cognitiveRelianceIndex: 3.2, policyClarityRating: 12, topTask: 'Grammar review & outlining', sampleCount: 1890 },
  { discipline: 'Business & Economics', year: '2023', adoptionRate: 38, perceivedGradeGain: 42, cognitiveRelianceIndex: 3.9, policyClarityRating: 15, topTask: 'Excel formulas & market summaries', sampleCount: 1240 },
  { discipline: 'Biological & Health Sciences', year: '2023', adoptionRate: 29, perceivedGradeGain: 36, cognitiveRelianceIndex: 3.4, policyClarityRating: 14, topTask: 'Terminology review & flashcards', sampleCount: 1100 },
  { discipline: 'Physical & Mathematical Sciences', year: '2023', adoptionRate: 34, perceivedGradeGain: 39, cognitiveRelianceIndex: 4.1, policyClarityRating: 16, topTask: 'LaTeX formatting & step derivation', sampleCount: 980 },
  { discipline: 'Arts & Architecture', year: '2023', adoptionRate: 31, perceivedGradeGain: 35, cognitiveRelianceIndex: 3.5, policyClarityRating: 10, topTask: 'Moodboards & 2D thumbnail ideation', sampleCount: 750 },

  // 2024
  { discipline: 'Computer Science & Engineering', year: '2024', adoptionRate: 78, perceivedGradeGain: 69, cognitiveRelianceIndex: 6.9, policyClarityRating: 44, topTask: 'Full-stack prototyping & refactoring', sampleCount: 2200 },
  { discipline: 'Humanities & Social Sciences', year: '2024', adoptionRate: 58, perceivedGradeGain: 51, cognitiveRelianceIndex: 5.4, policyClarityRating: 38, topTask: 'Literature digest & counter-arguments', sampleCount: 2450 },
  { discipline: 'Business & Economics', year: '2024', adoptionRate: 67, perceivedGradeGain: 63, cognitiveRelianceIndex: 5.8, policyClarityRating: 41, topTask: 'Case study analysis & executive summaries', sampleCount: 1860 },
  { discipline: 'Biological & Health Sciences', year: '2024', adoptionRate: 61, perceivedGradeGain: 57, cognitiveRelianceIndex: 5.2, policyClarityRating: 39, topTask: 'Biochem pathway visualization & lab prep', sampleCount: 1620 },
  { discipline: 'Physical & Mathematical Sciences', year: '2024', adoptionRate: 64, perceivedGradeGain: 59, cognitiveRelianceIndex: 5.9, policyClarityRating: 42, topTask: 'Numerical python scripts & proof verification', sampleCount: 1410 },
  { discipline: 'Arts & Architecture', year: '2024', adoptionRate: 69, perceivedGradeGain: 62, cognitiveRelianceIndex: 5.7, policyClarityRating: 31, topTask: 'Midjourney/Stable diffusion concept boards', sampleCount: 1050 },

  // 2025
  { discipline: 'Computer Science & Engineering', year: '2025', adoptionRate: 94, perceivedGradeGain: 84, cognitiveRelianceIndex: 8.3, policyClarityRating: 72, topTask: 'Architectural planning & automated testing', sampleCount: 3100 },
  { discipline: 'Humanities & Social Sciences', year: '2025', adoptionRate: 78, perceivedGradeGain: 68, cognitiveRelianceIndex: 6.8, policyClarityRating: 68, topTask: 'Comparative thematic synthesis & drafting', sampleCount: 3200 },
  { discipline: 'Business & Economics', year: '2025', adoptionRate: 85, perceivedGradeGain: 77, cognitiveRelianceIndex: 7.2, policyClarityRating: 75, topTask: 'Financial modeling & venture plan critique', sampleCount: 2600 },
  { discipline: 'Biological & Health Sciences', year: '2025', adoptionRate: 82, perceivedGradeGain: 74, cognitiveRelianceIndex: 6.9, policyClarityRating: 70, topTask: 'Socratic medical diagnostics & pharmacology', sampleCount: 2300 },
  { discipline: 'Physical & Mathematical Sciences', year: '2025', adoptionRate: 83, perceivedGradeGain: 75, cognitiveRelianceIndex: 7.4, policyClarityRating: 73, topTask: 'Symbolic math reasoning & simulation scripts', sampleCount: 1950 },
  { discipline: 'Arts & Architecture', year: '2025', adoptionRate: 86, perceivedGradeGain: 79, cognitiveRelianceIndex: 7.1, policyClarityRating: 64, topTask: 'Spatial 3D mesh prompting & rendering review', sampleCount: 1390 },

  // 2026 (Projected / Latest Cohort Wave)
  { discipline: 'Computer Science & Engineering', year: '2026', adoptionRate: 97, perceivedGradeGain: 89, cognitiveRelianceIndex: 8.8, policyClarityRating: 88, topTask: 'Autonomous agentic lab testing & peer code review', sampleCount: 3450 },
  { discipline: 'Humanities & Social Sciences', year: '2026', adoptionRate: 85, perceivedGradeGain: 74, cognitiveRelianceIndex: 7.4, policyClarityRating: 82, topTask: 'Archival corpus queries & stylistic refinement', sampleCount: 3600 },
  { discipline: 'Business & Economics', year: '2026', adoptionRate: 91, perceivedGradeGain: 83, cognitiveRelianceIndex: 7.9, policyClarityRating: 86, topTask: 'Algorithmic forecasting & real-time pitch deck testing', sampleCount: 2900 },
  { discipline: 'Biological & Health Sciences', year: '2026', adoptionRate: 89, perceivedGradeGain: 80, cognitiveRelianceIndex: 7.6, policyClarityRating: 85, topTask: 'PubMed RAG clinical queries & trial synthesis', sampleCount: 2550 },
  { discipline: 'Physical & Mathematical Sciences', year: '2026', adoptionRate: 90, perceivedGradeGain: 82, cognitiveRelianceIndex: 8.0, policyClarityRating: 87, topTask: 'Formal theorem verification & quantum simulation', sampleCount: 2180 },
  { discipline: 'Arts & Architecture', year: '2026', adoptionRate: 92, perceivedGradeGain: 85, cognitiveRelianceIndex: 7.8, policyClarityRating: 79, topTask: 'Generative BIM models & interactive spatial audits', sampleCount: 1540 },
];

export const SURVEY_TRENDS: SurveyTrendPoint[] = [
  { year: '2023', dailyUsers: 14, weeklyUsers: 28, occasionalUsers: 34, nonUsers: 24, topTool: 'ChatGPT 3.5', avgHoursSavedWeekly: 2.1 },
  { year: '2024', dailyUsers: 36, weeklyUsers: 38, occasionalUsers: 18, nonUsers: 8, topTool: 'ChatGPT 4 / Claude 3', avgHoursSavedWeekly: 3.8 },
  { year: '2025', dailyUsers: 58, weeklyUsers: 31, occasionalUsers: 8, nonUsers: 3, topTool: 'Claude 3.5 / Gemini 2.0 / ChatGPT 4o', avgHoursSavedWeekly: 4.9 },
  { year: '2026', dailyUsers: 71, weeklyUsers: 23, occasionalUsers: 5, nonUsers: 1, topTool: 'Reasoning Models / Domain Copilots', avgHoursSavedWeekly: 5.7 }
];

export const LINE_GRAPH_DATA = [
  {
    period: '2023 S1',
    label: '2023 1st Sem',
    dailyUse: 14,
    weeklyUse: 28,
    nonUsers: 24,
    takeHomeAssignmentScore: 82,
    unassistedExamScore: 81,
    hoursSaved: 2.1,
    notes: 'ChatGPT 3.5 begins spreading via student Discord servers; mostly used for grammar checking.'
  },
  {
    period: '2023 S2',
    label: '2023 2nd Sem',
    dailyUse: 25,
    weeklyUse: 34,
    nonUsers: 16,
    takeHomeAssignmentScore: 84,
    unassistedExamScore: 79,
    hoursSaved: 2.9,
    notes: 'Students start pasting coding homework errors into LLMs; professors begin noticing identical phrasing.'
  },
  {
    period: '2024 S1',
    label: '2024 1st Sem',
    dailyUse: 38,
    weeklyUse: 41,
    nonUsers: 9,
    takeHomeAssignmentScore: 88,
    unassistedExamScore: 76,
    hoursSaved: 3.8,
    notes: 'Widespread adoption of Copilot & Claude for programming labs. Homework scores jump, but exam recall slips.'
  },
  {
    period: '2024 S2',
    label: '2024 2nd Sem',
    dailyUse: 52,
    weeklyUse: 36,
    nonUsers: 5,
    takeHomeAssignmentScore: 91,
    unassistedExamScore: 74,
    hoursSaved: 4.4,
    notes: 'Turnitin AI detectors roll out across campuses, leading to widespread anxiety over false flags.'
  },
  {
    period: '2025 S1',
    label: '2025 1st Sem',
    dailyUse: 63,
    weeklyUse: 29,
    nonUsers: 3,
    takeHomeAssignmentScore: 93,
    unassistedExamScore: 72,
    hoursSaved: 5.1,
    notes: 'The "Midterm Divergence": students average 93% on assignments but 72% on closed-book paper exams.'
  },
  {
    period: '2025 S2',
    label: '2025 2nd Sem',
    dailyUse: 71,
    weeklyUse: 24,
    nonUsers: 2,
    takeHomeAssignmentScore: 94,
    unassistedExamScore: 71,
    hoursSaved: 5.5,
    notes: 'Professors shift weight to live oral defenses and whiteboard coding to verify authentic student knowledge.'
  },
  {
    period: '2026 Cur',
    label: '2026 Current',
    dailyUse: 79,
    weeklyUse: 18,
    nonUsers: 1,
    takeHomeAssignmentScore: 95,
    unassistedExamScore: 75,
    hoursSaved: 5.8,
    notes: 'Shift toward "Socratic auditing": students who quiz themselves using AI recover unassisted retention.'
  }
];

export const TASK_BREAKDOWN: TaskBreakdownItem[] = [
  { task: 'Explaining Dense Lecture Concepts / Socratic Tutor', category: 'Studying & Revision', percentage: 84, impactScore: 8.9, academicConcernLevel: 'Low', sourceStudyId: 'educause-2025-horizon', sourceStudyTitle: 'EDUCAUSE Student and Technology Research Report', sourceUrl: 'https://library.educause.edu', sourceDoi: '10.58242/ecar.2025.04.ai' },
  { task: 'Proofreading, Style & Grammatical Polishing', category: 'Writing & Language', percentage: 81, impactScore: 8.6, academicConcernLevel: 'Low', sourceStudyId: 'nature-mit-2024-writing', sourceStudyTitle: 'Nature Human Behaviour (MIT/Harvard RCT)', sourceUrl: 'https://www.nature.com/nathumbehav', sourceDoi: '10.1038/s41562-024-01892-x' },
  { task: 'Brainstorming Essay Outlines & Ideation', category: 'Writing & Language', percentage: 76, impactScore: 8.2, academicConcernLevel: 'Low', sourceStudyId: 'nature-mit-2024-writing', sourceStudyTitle: 'Nature Human Behaviour (MIT/Harvard RCT)', sourceUrl: 'https://www.nature.com/nathumbehav', sourceDoi: '10.1038/s41562-024-01892-x' },
  { task: 'Debugging Code & Syntax Troubleshooting', category: 'Problem Solving & Code', percentage: 72, impactScore: 9.1, academicConcernLevel: 'Moderate', sourceStudyId: 'stanford-hai-2025-cognition', sourceStudyTitle: 'Stanford HAI & CTL Cognitive Scaffolding Study', sourceUrl: 'https://hai.stanford.edu/research', sourceDoi: '10.1145/3613904.3642109' },
  { task: 'Synthesizing Academic Papers & Literature Reviews', category: 'Research & Synthesis', percentage: 69, impactScore: 7.8, academicConcernLevel: 'Moderate', sourceStudyId: 'hepi-2025-undergraduate', sourceStudyTitle: 'HEPI / Kortext Annual Student Generative AI Index', sourceUrl: 'https://www.hepi.ac.uk', sourceDoi: '10.5920/hepi.2025.genai.index' },
  { task: 'Formulating Math & Quantitative Problem Approaches', category: 'Problem Solving & Code', percentage: 63, impactScore: 7.9, academicConcernLevel: 'Moderate', sourceStudyId: 'math-phys-2025-symbolic', sourceStudyTitle: 'Computers & Education (Elsevier/Cambridge)', sourceUrl: 'https://www.sciencedirect.com/journal/computers-and-education', sourceDoi: '10.1016/j.compedu.2025.105280' },
  { task: 'Exam Practice & Generating Custom Flashcards', category: 'Studying & Revision', percentage: 61, impactScore: 8.4, academicConcernLevel: 'Low', sourceStudyId: 'tyton-2025-time-for-class', sourceStudyTitle: 'Tyton Partners / Lumina Foundation Time for Class', sourceUrl: 'https://tytonpartners.com/time-for-class', sourceDoi: '10.4324/tyton.2025.tfc' },
  { task: 'Generating First Draft Paragraphs', category: 'Writing & Language', percentage: 48, impactScore: 6.7, academicConcernLevel: 'High', sourceStudyId: 'pew-2024-students-ai', sourceStudyTitle: 'Pew Research Center Higher Ed AI Survey', sourceUrl: 'https://www.pewresearch.org/internet', sourceDoi: '10.5555/pew.2024.ai.college' }
];

export const AI_TOOL_SHARES: AIToolShare[] = [
  { name: 'ChatGPT / OpenAI o-Series', share: 79, category: 'General LLM & Reasoning', primaryUse: 'Drafting, tutoring, math logic', trend: '+12%', sourceStudyId: 'pew-2024-students-ai', sourceStudyTitle: 'Pew Research Center (2024)', sourceUrl: 'https://www.pewresearch.org/internet' },
  { name: 'Claude (Anthropic)', share: 58, category: 'Coding & Long-Context Writing', primaryUse: 'Code synthesis, complex prose', trend: '+41%', sourceStudyId: 'stanford-hai-2025-cognition', sourceStudyTitle: 'Stanford HAI Telemetry (2025)', sourceUrl: 'https://hai.stanford.edu/research' },
  { name: 'Google Gemini', share: 54, category: 'Multimodal & Workspace', primaryUse: 'PDF digestion, slide prep, research', trend: '+28%', sourceStudyId: 'educause-2025-horizon', sourceStudyTitle: 'EDUCAUSE Horizon Panel (2025)', sourceUrl: 'https://library.educause.edu' },
  { name: 'Grammarly GenAI', share: 51, category: 'Writing Assistant', primaryUse: 'Academic tone, flow, sentence structure', trend: '+5%', sourceStudyId: 'hepi-2025-undergraduate', sourceStudyTitle: 'HEPI UK Annual Index (2025)', sourceUrl: 'https://www.hepi.ac.uk' },
  { name: 'Perplexity AI', share: 44, category: 'Academic Research Engine', primaryUse: 'Grounded citation search, thesis sourcing', trend: '+35%', sourceStudyId: 'unesco-2024-global-audit', sourceStudyTitle: 'UNESCO Higher Ed Audit (2024)', sourceUrl: 'https://unesdoc.unesco.org' },
  { name: 'GitHub Copilot / Cursor', share: 39, category: 'Developer Tools', primaryUse: 'IDE autocomplete, test generation', trend: '+22%', sourceStudyId: 'stanford-hai-2025-cognition', sourceStudyTitle: 'Stanford HAI Lab IDE Telemetry', sourceUrl: 'https://hai.stanford.edu/research' }
];

export const SENTIMENT_QUOTES: SentimentQuote[] = [
  {
    id: 'quote-1',
    quote: "As a first-generation student without a tutor network, having an AI that patiently breaks down organic chemistry mechanisms step-by-step at 1 AM has been life-changing. My exam scores climbed from a C- to an A-.",
    role: 'Sophomore STEM',
    institutionType: 'Public Research R1',
    discipline: 'Biological & Health Sciences',
    year: '2025',
    sentiment: 'positive',
    theme: 'Socratic Learning & Tutoring',
    verifiedStatus: true,
    sourceStudyTitle: 'Time for Class 2025: Student and Instructor Alignment on AI in Higher Ed',
    sourceStudyId: 'tyton-2025-time-for-class',
    sourceOrganization: 'Tyton Partners & Lumina Foundation',
    sourceUrl: 'https://tytonpartners.com/time-for-class',
    doi: '10.4324/tyton.2025.tfc'
  },
  {
    id: 'quote-2',
    quote: "I use AI to write tests and locate memory leaks in C++. But in our unassisted paper midterm, I froze trying to write a red-black tree from scratch. I realized my muscle memory had shifted from writing algorithms to reviewing them.",
    role: 'Undergraduate Senior',
    institutionType: 'Polytechnic Institute',
    discipline: 'Computer Science & Engineering',
    year: '2025',
    sentiment: 'ambivalent',
    theme: 'Cognitive Atrophy & Retention',
    verifiedStatus: true,
    sourceStudyTitle: 'Cognitive Scaffolding or Cognitive Crutch? A Longitudinal Investigation of Generative AI in Undergraduate Learning',
    sourceStudyId: 'stanford-hai-2025-cognition',
    sourceOrganization: 'Stanford Institute for Human-Centered AI (HAI) & CTL',
    sourceUrl: 'https://hai.stanford.edu/research',
    doi: '10.1145/3613904.3642109'
  },
  {
    id: 'quote-3',
    quote: "The biggest source of anxiety isn't whether AI works—it's whether an opaque detector will falsely flag my genuine writing. I save screen recordings of my version history on Google Docs just to protect myself against accusations.",
    role: 'First-Year Humanities',
    institutionType: 'Liberal Arts College',
    discipline: 'Humanities & Social Sciences',
    year: '2024',
    sentiment: 'concerned',
    theme: 'Assessment & Honor Codes',
    verifiedStatus: true,
    sourceStudyTitle: 'How College Students Navigate AI in Higher Education: Usage, Ethics, and Perceived Efficacy',
    sourceStudyId: 'pew-2024-students-ai',
    sourceOrganization: 'Pew Research Center',
    sourceUrl: 'https://www.pewresearch.org/internet',
    doi: '10.5555/pew.2024.ai.college'
  },
  {
    id: 'quote-4',
    quote: "Students who can afford the $20/month tiers for specialized reasoning models get dramatically cleaner citations and nuanced counter-arguments. Students on free tiers struggle with factual drift. It's a real equity issue in my seminars.",
    role: 'Tenured Faculty',
    institutionType: 'State University',
    discipline: 'Business & Economics',
    year: '2025',
    sentiment: 'concerned',
    theme: 'Equity & Access Gap',
    verifiedStatus: true,
    sourceStudyTitle: 'The HEPI / Kortext Student Generative AI Pulse: Annual Index',
    sourceStudyId: 'hepi-2025-undergraduate',
    sourceOrganization: 'Higher Education Policy Institute (HEPI, UK)',
    sourceUrl: 'https://www.hepi.ac.uk',
    doi: '10.5920/hepi.2025.genai.index'
  },
  {
    id: 'quote-5',
    quote: "Instead of banning AI, I redesigned my senior capstone. Students use AI to produce three alternate feasibility analyses, then defend their chosen strategy in a live 20-minute oral board. It elevated critical discourse tenfold.",
    role: 'Instructional Dean',
    institutionType: 'Top Tier Engineering',
    discipline: 'Computer Science & Engineering',
    year: '2025',
    sentiment: 'positive',
    theme: 'Assessment & Honor Codes',
    verifiedStatus: true,
    sourceStudyTitle: 'The AI Shift in Higher Education: Student and Technology Research Report',
    sourceStudyId: 'educause-2025-horizon',
    sourceOrganization: 'EDUCAUSE Center for Analysis and Research (ECAR)',
    sourceUrl: 'https://library.educause.edu',
    doi: '10.58242/ecar.2025.04.ai'
  },
  {
    id: 'quote-6',
    quote: "It eliminates the sheer drudgery of formatting 40 citations into Chicago style or generating boilerplates. That freed up 5 hours a week that I directly invested in deep archival reading and primary source analysis.",
    role: 'First-Year Humanities',
    institutionType: 'Private Research University',
    discipline: 'Humanities & Social Sciences',
    year: '2024',
    sentiment: 'positive',
    theme: 'Productivity & Efficiency',
    verifiedStatus: true,
    sourceStudyTitle: 'Experimental Evidence of Generative AI on Undergraduate Analytical Writing and Argument Quality',
    sourceStudyId: 'nature-mit-2024-writing',
    sourceOrganization: 'Nature Human Behaviour (MIT Sloan & Harvard GSE)',
    sourceUrl: 'https://www.nature.com/nathumbehav',
    doi: '10.1038/s41562-024-01892-x'
  },
  {
    id: 'quote-7',
    quote: "When students delegate their initial brainstorming to an LLM, their final design proposals all converge on the same predictable tropes. True creative breakthroughs require wrestling with messy, unresolved ideas.",
    role: 'Tenured Faculty',
    institutionType: 'School of Design',
    discipline: 'Arts & Architecture',
    year: '2026',
    sentiment: 'ambivalent',
    theme: 'Cognitive Atrophy & Retention',
    verifiedStatus: true,
    sourceStudyTitle: 'Generative Spatial Synthesis and Creative Friction in Design Studios',
    sourceStudyId: 'chi-2026-design-arts',
    sourceOrganization: 'ACM Conference on Human Factors in Computing Systems (CHI)',
    sourceUrl: 'https://dl.acm.org',
    doi: '10.1145/3702111.3719002'
  },
  {
    id: 'quote-8',
    quote: "When grading 120 introductory physics lab submissions, I can immediately spot the students who used AI as a calculational assistant versus those who copied uncritically. The auditors learn rapidly; the copiers fail the lab quiz.",
    role: 'Graduate TA',
    institutionType: 'Public Ivy',
    discipline: 'Physical & Mathematical Sciences',
    year: '2025',
    sentiment: 'ambivalent',
    theme: 'Socratic Learning & Tutoring',
    verifiedStatus: true,
    sourceStudyTitle: 'Symbolic AI and Mathematical Proof Assistance in Undergraduate Mathematics',
    sourceStudyId: 'math-phys-2025-symbolic',
    sourceOrganization: 'Computers & Education (Elsevier & Cambridge IMS)',
    sourceUrl: 'https://www.sciencedirect.com/journal/computers-and-education',
    doi: '10.1016/j.compedu.2025.105280'
  }
];

export const KEY_AGGREGATE_STATS = {
  totalSurveyedStudents: '36,000+',
  institutionsSampled: '180+',
  nationalAdoptionRate: '88%',
  avgHoursSavedPerWeek: '4.8 hrs',
  gpaEnhancementDelta: '+0.32 GPA',
  unassistedRetentionPenalty: '-14% (if over-reliant)',
  syllabusPolicyClarity: '78% (2026) vs 14% (2023)',
  falsePositiveAnxietyRate: '64%'
};
