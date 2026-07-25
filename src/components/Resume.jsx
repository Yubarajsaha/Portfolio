import React, { useRef } from 'react';

export default function Resume({ fullName = "Yubaraj Saha" }) {
  const resumeRef = useRef(null);

  // Download handler: saves PDF as "Your_Name_Resume.pdf" with clickable links intact
  const handleDownloadPDF = async () => {
    // Dynamic import compatible with Vite 8 / ES modules
    const html2pdf = (await import('html2pdf.js')).default;
    const element = resumeRef.current;

    // Convert "John Doe" -> "John_Doe_Resume.pdf"
    const formattedName = fullName.trim().replace(/\s+/g, '_');
    const fileName = `${formattedName}_Resume.pdf`;

    const options = {
      margin: [12, 15, 12, 15], // Top, Left, Bottom, Right in mm (A4 margins)
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true 
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-auto py-8 bg-gray-100 min-h-screen">
      {/* DOWNLOAD BUTTON */}
      <div className="mb-4 flex justify-end w-full max-w-[210mm]">
        <button
          onClick={handleDownloadPDF}
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-medium px-5 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* A4 RESUME CANVAS */}
      <div
        ref={resumeRef}
        id="resume-content"
        className="bg-white text-black shadow-2xl box-border mx-auto leading-normal text-left font-serif"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '12mm 15mm',
          fontFamily: "'Times New Roman', Times, serif",
        }}
      >
        {/* HEADER SECTION */}
        <header className="text-center mb-4">
          <h1 className="text-3xl font-bold tracking-tight mb-1 text-black">
            {fullName}
          </h1>
          <p className="text-sm mb-1">
            <a
              href="mailto:letscode@lets-code.co.in"
              className="text-blue-700 underline hover:text-blue-900 transition-colors"
            >
              letscode@lets-code.co.in
            </a>
          </p>
          <p className="text-sm text-blue-700 space-x-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-900"
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-900"
            >
              GitHub
            </a>{' '}
            |{' '}
            <a
              href="https://portfolio.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-900"
            >
              Portfolio
            </a>{' '}
            |{' '}
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-900"
            >
              LeetCode
            </a>{' '}
            |{' '}
            <a
              href="https://codechef.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-900"
            >
              CodeChef
            </a>
          </p>
        </header>

        {/* EDUCATION SECTION */}
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
            EDUCATION
          </h2>
          <div className="text-sm space-y-1">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="font-bold">B.Tech</span> —{' '}
                <span className="font-bold">
                  Computer Science & Engineering
                </span>
                , ABC University, 8.6 CGPA
              </div>
              <div className="font-bold whitespace-nowrap">2020 – 2024</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div>
                <span className="font-bold">Class XII</span> — CBSE, XYZ Senior
                Secondary School, 94.2%
              </div>
              <div className="font-bold whitespace-nowrap">2020</div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
            SKILLS
          </h2>
          <div className="text-sm space-y-1">
            <p>
              <span className="font-bold">Coursework:</span> Data Structures
              and Algorithms, Object Oriented Programming, Web Development,
              Database Management System, Operating System
            </p>
            <p>
              <span className="font-bold">Languages:</span> C/C++, Java,
              JavaScript, TypeScript, Python, SQL
            </p>
            <p>
              <span className="font-bold">Technologies:</span> React, Next.js,
              Node.js, Express, MongoDB, PostgreSQL, Redis, AWS, Docker, Git
            </p>
            <p>
              <span className="font-bold">Soft Skills:</span> Leadership,
              Teamwork, Time Management, Problem Solving
            </p>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
            WORK EXPERIENCE
          </h2>
          <div className="text-sm space-y-3">
            {/* Experience Item 1 */}
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">Software Engineer</span> Lets
                  Code
                </div>
                <div className="whitespace-nowrap">
                  Jul 2024 – Present, New Delhi, India
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 mt-1 space-y-0.5">
                <li>
                  Built placement prep platform serving 50K+ students with DSA
                  roadmaps, mock tests, and AI-powered resume tools.
                </li>
                <li>
                  Designed Node.js APIs handling 20K+ requests/day with 99.9%
                  uptime using MongoDB and Redis caching.
                </li>
                <li>
                  Developed AI Resume Optimizer, Cover Letter Generator, and
                  Job Finder — cutting application time by 60%.
                </li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">Software Engineering Intern</span>{' '}
                  Lets Code
                </div>
                <div className="whitespace-nowrap">
                  Jan 2024 – Jun 2024, New Delhi, India
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 mt-1 space-y-0.5">
                <li>
                  Built PYQ pages and interview experience modules, increasing
                  organic traffic by 35%.
                </li>
                <li>
                  Integrated Clerk auth and built user dashboard with profile,
                  bookmarks, and progress tracking.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
            PROJECTS
          </h2>
          <div className="text-sm space-y-3">
            {/* Project Item 1 */}
            <div>
              <p>
                <span className="font-bold">
                  Lets Code — Placement Prep Platform
                </span>{' '}
                -{' '}
                <a
                  href="https://portfolio.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Portfolio
                </a>
              </p>
              <ul className="list-disc list-outside ml-5 mt-1 space-y-0.5">
                <li>
                  Full-stack platform with 500+ PYQs, AI resume studio, mock
                  tests, job board, and interview experiences.
                </li>
              </ul>
              <p className="ml-5 mt-0.5">
                <span className="font-bold">Tech stack used:</span> Next.js,
                TypeScript, MongoDB, Clerk, Tailwind CSS
              </p>
            </div>

            {/* Project Item 2 */}
            <div>
              <p>
                <span className="font-bold">AI Resume Studio</span> -{' '}
                <a
                  href="https://portfolio.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Portfolio
                </a>
              </p>
              <ul className="list-disc list-outside ml-5 mt-1 space-y-0.5">
                <li>
                  ATS resume analyser that scores, edits inline, runs AI
                  rewrites, and exports as PDF or DOCX.
                </li>
              </ul>
              <p className="ml-5 mt-0.5">
                <span className="font-bold">Tech stack used:</span> Next.js,
                Claude API, jsPDF, MongoDB
              </p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section className="mb-4">
          <h2 className="text-base font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
            ACHIEVEMENTS & EXTRA-CURRICULAR ACTIVITIES
          </h2>
          <ul className="list-disc list-outside ml-5 text-sm space-y-0.5">
            <li>
              Smart India Hackathon 2023 Finalist — Top 50 teams nationally.
            </li>
            <li>AWS Cloud Practitioner Certified (2024).</li>
            <li>Solved 600+ problems on LeetCode — Max Rating 1920.</li>
            <li>Winner — college-level Code Sprint 2023.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}