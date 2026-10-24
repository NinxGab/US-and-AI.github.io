# AI & Us — The Impact of AI on College Learning & Academic Performance

An interactive, peer-reviewed academic research dashboard synthesizing empirical findings on how generative artificial intelligence impacts undergraduate and graduate students' learning outcomes, cognitive retention, academic integrity, and disciplinary workflows.

---

## 👥 Authors & Core Team

- **Gabriel Bolima** — *Website Maker & Frontend Developer* (Frontend Architecture & Interactive Data Visualization Integration)
- **Valari De Guzman** — *Lead Researcher* (Academic Investigation, Empirical Literature Synthesis & Cognitive Analysis)

---

## 📊 Key Features & Visualizations

- **Disciplinary Heatmap Matrix**: Interactive multi-year comparison (2023–2026) across 6 major academic fields covering Adoption Rate, Perceived Grade Gain, Cognitive Reliance Index, and Syllabus Clarity.
- **Survey Visualizations & Telemetry**: Multi-year longitudinal frequency distribution, AI model ecosystem market share, and task breakdown with faculty concern indices.
- **Qualitative Sentiment Analysis**: Thematic clustering of lived student and instructor experiences (*Productivity, Socratic Tutoring, Cognitive Atrophy, Honor Codes, Digital Equity*).
- **Cognitive Diagnostic Benchmark Tool**: Interactive 4-question self-assessment mapping student habits against empirical benchmarks from Stanford HAI and MIT Sloan.
- **Research Library**: Searchable reference browser filterable by study year and discipline, with sample sizes ($N$), DOI links, and 1-click APA/BibTeX export.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher, v20+ recommended)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### 2. Installation
Open your terminal in the project directory and run:

```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will start at:
```
http://localhost:3000
```
*(or another port if port 3000 is occupied)*

### 4. Build for Production
To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🐙 How to Upload to GitHub

Follow these steps to upload this project to your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Go to [github.com](https://github.com) and log in.
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Name your repository (e.g., `ai-and-us` or `ai-college-impact`).
4. Set it to **Public** or **Private** based on your preference.
5. **Do NOT** check "Initialize this repository with a README", `.gitignore`, or license (we already have them).
6. Click **Create repository**.
7. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/ai-and-us.git`).

---

### Step 2: Push Your Project via Terminal

Open your terminal in this project's root folder and run the following commands:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files to staging
git add .

# 3. Create your initial commit
git commit -m "feat: initial commit for AI & Us academic dashboard"

# 4. Set the main branch
git branch -M main

# 5. Link to your GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/ai-and-us.git

# 6. Push your code to GitHub
git push -u origin main
```

*(If prompted, log in with your GitHub credentials or personal access token).*

---

### Alternative: Using GitHub Desktop
If you prefer a graphical user interface:
1. Download and open **[GitHub Desktop](https://desktop.github.com/)**.
2. Click **File > Add Local Repository...** and select this project folder.
3. If it asks to create a repository, click **Create Repository**.
4. Click **Publish repository** in the top bar to push it to your GitHub account.

---

## 🌐 Free 1-Click Hosting Options

Once your code is on GitHub, you can deploy it live for free in under 2 minutes:
- **Vercel**: Import your GitHub repository at [vercel.com/new](https://vercel.com/new) (automatic Vite detection, click Deploy).
- **Netlify**: Connect your repository at [app.netlify.com](https://app.netlify.com) (Build command: `npm run build`, Publish directory: `dist`).
- **GitHub Pages**: You can also use GitHub Actions to deploy the `dist/` folder to GitHub Pages.

---

## 📜 Academic Repositories Consulted
- **EDUCAUSE Center for Analysis and Research (ECAR)**
- **Stanford Institute for Human-Centered AI (HAI)**
- **Higher Education Policy Institute (HEPI, UK)**
- **Pew Research Center Internet & Technology**
- **Nature Human Behaviour Open Science**
- **Tyton Partners / Lumina Foundation**
- **UNESCO Higher Education Guidance**
