import { useRef } from 'react'

function ResumeLayout() {
  const resumeRef = useRef(null)

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resume-print, #resume-print * { visibility: visible; }
          #resume-print { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Print button */}
      <div className="no-print flex justify-center my-4">
        <button
          onClick={handlePrint}
          className="px-6 py-2 rounded-lg font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #ff6414, #ff8c42)' }}
        >
          Download as PDF
        </button>
      </div>

      {/* Resume Content */}
      <div
        id="resume-print"
        ref={resumeRef}
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px',
          background: '#fff',
          color: '#000',
          fontSize: '13px',
          lineHeight: '1.5'
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Yubaraj Saha
          </h1>
          <p style={{ color: '#555', margin: '0 0 6px 0', fontSize: '13px' }}>
            Software Engineer
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '12px' }}>
            <a href="mailto:yubaraj459@gmail.com" style={{ color: '#ff6414' }}>yubaraj459@gmail.com</a>
            <span>·</span>
            <a href="https://linkedin.com/in/yubarajsaha" target="_blank" style={{ color: '#ff6414' }}>LinkedIn</a>
            <span>·</span>
            <a href="https://github.com/Yubarajsaha" target="_blank" style={{ color: '#ff6414' }}>GitHub</a>
            <span>·</span>
            <a href="https://yubaraj-portfolio.vercel.app" target="_blank" style={{ color: '#ff6414' }}>Portfolio</a>
          </div>
        </div>

        <hr style={{ border: '1px solid #000', margin: '12px 0' }} />

        {/* Summary */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Summary
          </h2>
          <p style={{ margin: 0, color: '#333' }}>
            Motivated MCA Student and Aspiring Software Engineer with hands-on experience in
            Java, React, and Python. Passionate about building scalable applications,
            solving complex problems with clean code, and continuously learning new technologies.
          </p>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Experience
          </h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Your Job Title</strong>
              <span style={{ color: '#555' }}>Jan 2024 — Present</span>
            </div>
            <div style={{ color: '#555', fontSize: '12px', marginBottom: '4px' }}>Company Name · City, India</div>
            <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
              <li>Describe what you worked on and what technologies you used.</li>
              <li>Mention any achievement or impact you had.</li>
              <li>Add one more responsibility or skill you learned.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Education
          </h2>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Master of Computer Applications (MCA)</strong>
              <span style={{ color: '#555' }}>2023 — Present</span>
            </div>
            <div style={{ color: '#555', fontSize: '12px' }}>Your University Name</div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Bachelor of Computer Applications (BCA)</strong>
              <span style={{ color: '#555' }}>2020 — 2023</span>
            </div>
            <div style={{ color: '#555', fontSize: '12px' }}>Your College Name</div>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Skills
          </h2>
          <p style={{ margin: '2px 0' }}>
            <strong>Languages:</strong> Java, Python, JavaScript, SQL, HTML & CSS
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>Technologies:</strong> React, Spring Boot, Tailwind CSS, Framer Motion, Streamlit
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>Tools:</strong> Git, GitHub, VS Code, IntelliJ IDEA, Google Colab, Docker
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>AI/ML:</strong> sentence-transformers, pandas, scikit-learn, LLM APIs
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>Soft Skills:</strong> Problem Solving, Clean Code, Teamwork, Continuous Learning
          </p>
        </div>

        {/* Projects */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Projects
          </h2>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>RecruitIQ — AI Candidate Ranking System</strong>
              <span style={{ color: '#555', fontSize: '12px' }}>Python · sentence-transformers · pandas · scikit-learn · Streamlit</span>
            </div>
            <a href="https://github.com/Yubarajsaha/redrob" target="_blank" style={{ color: '#ff6414', fontSize: '12px' }}>github.com/Yubarajsaha/redrob</a>
            <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
              <li>Built 3-stage AI pipeline ranking 100,000 candidates to Top 100 shortlist in 5.8 seconds on CPU</li>
              <li>Implemented semantic matching using sentence-transformers to compare career stories with job description</li>
              <li>Detected 13,579 fake/honeypot profiles using 4-layer validation logic</li>
              <li>Deployed end-to-end sandbox on Google Colab with full pipeline reproducibility</li>
            </ul>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Personal Portfolio Website</strong>
              <span style={{ color: '#555', fontSize: '12px' }}>React · Vite · Tailwind CSS · Framer Motion · Vercel</span>
            </div>
            <a href="https://yubaraj-portfolio.vercel.app" target="_blank" style={{ color: '#ff6414', fontSize: '12px' }}>yubaraj-portfolio.vercel.app</a>
            <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
              <li>Built modern futuristic portfolio from scratch without any templates</li>
              <li>Implemented parallax scrolling background and glassmorphism UI design</li>
              <li>Deployed with auto CI/CD pipeline via GitHub and Vercel</li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Achievements
          </h2>
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            <li>
              <strong>Redrob Data & AI Challenge 2026</strong> — Built AI powered candidate matching software · Results Pending
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default ResumeLayout