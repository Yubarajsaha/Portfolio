import { useRef } from 'react'

function ResumeLayout() {
  const resumeRef = useRef(null)

  const handleDownload = async () => {
    const html2pdf = (await import('html2pdf.js')).default
    const element = document.getElementById('resume-print')
    const opt = {
      margin: 10,
      filename: 'Yubaraj_Saha_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      enableLinks: true
    }
    html2pdf().set(opt).from(element).save()
  }

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resume-print, #resume-print * { visibility: visible; }
          #resume-print { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Download button */}
      <div className="no-print flex justify-center my-4">
        <button
          onClick={handleDownload}
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
            
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '12px' }}>
            <a href="mailto:yubarajsaha025@gmail.com" style={{ color: '#2563EB' }}>yubarajsaha025@gmail.com</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/yubaraj-saha-488883285/" target="_blank" style={{ color: '#2563EB' }}>LinkedIn</a>
            <span>·</span>
            <a href="https://github.com/Yubarajsaha" target="_blank" style={{ color: '#2563EB' }}>GitHub</a>
            <span>·</span>
            <a href="https://yubaraj-portfolio.vercel.app/" target="_blank" style={{ color: '#2563EB' }}>Portfolio</a>
          </div>
        </div>

        <hr style={{ border: '1px solid #000', margin: '12px 0' }} />

        {/* Summary */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Summary
          </h2>
          <p style={{ margin: 0, color: '#333' }}>
            Aspiring Software Development Engineer with a strong foundation in Java,
            Data Structures & Algorithms, OOP, SQL, and backend development. Experienced in building
            software applications using Java, React, Python,and MySQL, with exposure to AWS and cloud
            technologies.Built an AI-powered candidate ranking solution capable of processing100,000+
            profiles, demonstrating strong problem-solving and engineering skills. Seeking to contribute
            to scalable, reliable, and customer-focused software solutions
          </p>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Experience
          </h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Web Designer Intern</strong>
              <span style={{ color: '#555' }}>Dec 2025 — Feb 2026</span>
            </div>
            <div style={{ color: '#555', fontSize: '12px', marginBottom: '4px' }}>PaperBill, India</div>
            <ul style={{ margin: '4px 0', paddingLeft: '16px',listStyleType: 'disc', }}>
              <li>Digital Presence Optimization.</li>
              <li>Customer Engagement Solutions.</li>
              <li>Develop GST billing pages.</li>
              <li>User-Centric UI Design.</li>
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
              <strong>Masters of Computer Application (MCA)</strong>
              <span style={{ color: '#555' }}>Aug 2026 - Jun 2028</span>
            </div>
            <div style={{ color: '#555', fontSize: '12px' }}>Lovely Professional University</div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Bachelor of Computer Applications (BCA)</strong>
              <span style={{ color: '#555' }}>Jul 2023 - Jun 2026</span>
            </div>
            <div style={{ color: '#555', fontSize: '12px' }}>Institute of engineering and management | 8.15 CGPA</div>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>
            Skills
          </h2>
          <p style={{ margin: '2px 0' }}>
            <strong>Languages:</strong> Java, Python, SQL, HTML & CSS
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>Framework:</strong> React, Tailwind CSS, Framer Motion, Streamlit
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>Tools:</strong> Git, GitHub, VS Code, MS office, linux
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>AI Tools:</strong> Claude, Chatgpt
          </p>
          <p style={{ margin: '2px 0' }}>
            <strong>Soft Skills:</strong> Problem Solving, Clean Code, Teamwork, Continuous Learning, Time Management
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
            <a href="https://github.com/Yubarajsaha/redrob" target="_blank" style={{ color: '#2563EB', fontSize: '12px' }}>Link</a>
            <ul style={{ margin: '4px 0', paddingLeft: '16px',listStyleType: 'disc' }}>
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
            <a href="https://yubaraj-portfolio.vercel.app" target="_blank" style={{ color: '#2563EB', fontSize: '12px' }}>Link</a>
            <ul style={{ margin: '4px 0', paddingLeft: '16px',listStyleType: 'disc' }}>
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
          <ul style={{ margin: 0, paddingLeft: '16px',listStyleType: 'disc', }}>
            <li>
              <strong>Redrob Data & AI Challenge 2026</strong> — Built AI powered candidate matching software.
            </li>
            <li>
              Ranked among the Top 10% of the BCA graduating class.
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default ResumeLayout