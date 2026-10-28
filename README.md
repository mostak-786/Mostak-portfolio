# Md Mostak Laheri - Developer Portfolio Website

A modern, high-performance personal developer portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Tailored specifically for placement applications in the UK technology sector, presenting genuine skills, undergraduate studies at the **University of Wolverhampton**, and planned practical projects.

---

## 🌟 Features

- **Recruiter-Centric Design**: Clean, modern dark aesthetic with navy & black backgrounds, electric-blue accents, and subtle purple gradients.
- **Theme Toggle**: Full dark/light mode toggle with persistent local storage support.
- **Centralized Data Hub**: All personal details, bio, skills, education, projects, experience, and contact channels are configured in one central file: [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
- **Placement-Ready Narrative**: Transparent and honest presentation of current skill levels (Beginner / Foundational / Learning), avoiding exaggerated claims.
- **Project Roadmap & Showcase**:
  - *Python Expense Tracker*
  - *Student Grade Calculator*
  - *Student Database Management System*
  - Project specification modals detailing learning outcomes and planned deliverables.
- **Smart CV Download Handler**: Downloads `/public/cv.pdf` directly. If the PDF is ever missing, it provides a helpful on-screen fallback and plain-text copy utility.
- **Direct Placement Inquiry Form**: Validates inputs and generates a pre-formatted `mailto:` link opening the recruiter's native email client directly to Mostak's verified email.
- **Fully Responsive & Accessible**: Seamlessly adapts to smartphones, tablets, laptops, and ultra-wide desktop displays.

---

## 📁 Project Structure

```text
mostak-portfolio/
├── public/
│   ├── cv.pdf                   <-- Place your official PDF CV here!
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           <-- Header, brand monogram, theme toggle, mobile drawer
│   │   ├── Hero.tsx             <-- Hero headline, placement badges, CTAs, code preview
│   │   ├── About.tsx            <-- Academic background, personal story, value proposition
│   │   ├── Skills.tsx           <-- Filterable skills cards with honest learning meters
│   │   ├── Projects.tsx         <-- Project gallery with status tags and GitHub/demo buttons
│   │   ├── ProjectModal.tsx     <-- Modal detailing learning plans & planned architecture
│   │   ├── Education.tsx        <-- BSc (Hons) Computer Science details & core modules
│   │   ├── Experience.tsx       <-- Genuine employment & transferable workplace skills
│   │   ├── Contact.tsx          <-- Direct channels, copy email button, and message form
│   │   ├── CvModal.tsx          <-- Direct PDF download and CV preview modal
│   │   └── Footer.tsx           <-- Copyright, social links, back-to-top button
│   ├── context/
│   │   └── ThemeContext.tsx     <-- React Context managing light/dark theme
│   ├── data/
│   │   └── portfolioData.ts     <-- ⭐ EDIT ALL YOUR CONTENT HERE!
│   ├── types/
│   │   └── index.ts             <-- TypeScript interfaces
│   ├── App.tsx                  <-- Root layout and modal state management
│   ├── index.css                <-- Tailwind styles, gradients, glass utilities
│   └── main.tsx                 <-- Application entry point
├── index.html                   <-- Meta tags, SEO, page title, and fonts
├── package.json                 <-- Project dependencies & scripts
├── tailwind.config.js           <-- Custom colors, glows, animations
├── tsconfig.json                <-- Strict TypeScript configuration
└── vite.config.ts               <-- Vite bundler configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your computer.

Check your versions by running in your terminal:
```bash
node -v
npm -v
```

### Installation

1. Open your terminal or Command Prompt.
2. Navigate to the project directory:
   ```bash
   cd path/to/mostak-portfolio
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local Vite dev server:
```bash
npm run dev
```

Your terminal will display a local address, typically:
```text
  VITE v5.4.11  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open `http://localhost:5173/` in your web browser to view your website live. Any code or data edits you make will automatically update in real time!

### Building for Production

To test the optimized production build:
```bash
npm run build
```
This compiles your website into the `dist/` directory.

To preview the built production site locally:
```bash
npm run preview
```

---

## ✏️ How to Customise Your Details

Everything on the website is controlled from a single configuration file:
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Open this file in your code editor (e.g. VS Code) to update:

### 1. Personal Information & Social Links
```typescript
export const personalInfo = {
  fullName: "Md Mostak Laheri",
  preferredName: "Mostak",
  email: "your.real.email@gmail.com", // <-- Update your email
  githubUrl: "https://github.com/your-username", // <-- Update your GitHub URL
  linkedinUrl: "https://linkedin.com/in/your-username", // <-- Update your LinkedIn URL
  location: "Birmingham, UK",
  // ...
};
```

### 2. Updating Your CV PDF
1. Export or download your updated CV as a PDF document.
2. Name the file **`cv.pdf`**.
3. Place it into the **`public/`** folder:
   ```text
   mostak-portfolio/public/cv.pdf
   ```
4. The "Download My CV" button on your website will now download your real PDF file automatically.

### 3. Adding or Updating Projects
When you start building a project or push it to GitHub, find the project in `src/data/portfolioData.ts` and update its status and repository URL:
```typescript
{
  id: "python-expense-tracker",
  title: "Python Expense Tracker",
  status: "In Development", // Change from "Proposed Idea" to "In Development" or "Completed"
  githubUrl: "https://github.com/your-username/python-expense-tracker", // Add repo link
  demoUrl: "https://...", // Add live demo link (if web-based)
  // ...
}
```

### 4. Updating Skills
Add, adjust, or refine your skills in the `skillsData` array in `portfolioData.ts`. You can change the percentage, category, description, and focus tags at any time.

---

## 🐙 Publishing to GitHub

Follow these steps to upload your portfolio to GitHub:

### Step 1: Initialize Git in your project
```bash
cd path/to/mostak-portfolio
git init
git add .
git commit -m "Initial commit: modern portfolio for UK placement application"
```

### Step 2: Create a new repository on GitHub
1. Log into your account on [GitHub.com](https://github.com).
2. Click the **+** icon in the top right corner and select **New repository**.
3. Name your repository (e.g., `mostak-portfolio`).
4. Set the repository to **Public**.
5. Leave "Add a README file" unchecked (you already have one).
6. Click **Create repository**.

### Step 3: Link and push your code
GitHub will show you command instructions. Run:
```bash
git branch -M main
git remote add origin https://github.com/<your-github-username>/mostak-portfolio.git
git push -u origin main
```

---

## 🌐 Deploying Online (Free on Vercel)

Vercel is the recommended platform for hosting Vite + React projects. It is completely free for personal use and provides automatic SSL and custom domain support.

### Option A: Deploy via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign up / log in with your GitHub account.
2. Click **Add New...** > **Project**.
3. Choose your `mostak-portfolio` repository and click **Import**.
4. In the configuration screen:
   - **Framework Preset**: Vite (detected automatically)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. Within ~60 seconds, your website will be live at a public URL (e.g., `https://mostak-portfolio.vercel.app`)!
7. Any future changes you push to GitHub will automatically trigger a new deployment.

### Option B: Deploy with Netlify
1. Go to [netlify.com](https://netlify.com) and log in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy mostak-portfolio**.

---

## 💼 Placement Recruiter Guidance

This portfolio was designed specifically to showcase:
- **Integrity**: Clear distinctions between current capabilities and future roadmap goals.
- **Academic Foundation**: Core coursework in computer science at the University of Wolverhampton.
- **Transferable Soft Skills**: Collaboration, time management, and customer service experience gained through genuine employment and group study.
- **Readiness to Learn**: Growth mindset, proactive learning of industry tools (Git, Python, SQL), and readiness to take on a 12-month UK placement role.
