import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFolder, FiDatabase,FiCode,FiGithub,FiCpu } from 'react-icons/fi'

const projects = [
  {
    title:'RecruitIQ — AI Candidate Ranking System',
    description:'Built for Redrob Data & AI Hackathon 2026. AI pipeline ranking 100,000 candidates to Top 100 in 5.8 seconds.',
    icon: FiCpu,
    features: [
                "100K+ profile ranking",
                "AI-powered semantic matching",
                "Fast embedding-based scoring",
                "Interactive analytics dashboard"

    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Sentence Transformers', 'Streamlit',],
    link: 'https://github.com/Yubarajsaha/redrob'
  },
  {
    title: 'Coming soon...',
    description: 'Ongoing...',
    icon: FiCode,
    features: [

    ],
    tech: [''],
    link: '#'
  },
  {
    title: 'Coming Soon...',
    description: 'Ongoing...',
    icon: FiCode,
    features: [

    ],
    tech: [''],
    link: '#'
  }
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.a
      href={project.link}
      target={project.link !== '#' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="block glass rounded-xl p-8 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, borderColor: 'rgba(255,100,20,0.4)' }}
    >
      {/* Header with icon */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(255,100,20,0.15)',
            border: '1px solid rgba(255,100,20,0.3)'
          }}
        >
          <Icon className="text-2xl" style={{ color: '#ff6414' }} />
        </div>
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-[#666] text-sm mb-5 leading-relaxed">
        {project.description}
      </p>

      {/* Features list */}
      <div className="mb-5 space-y-2">
        {project.features.map((feature, i) => (
          <p key={i} className="text-[#555] text-base">
            <span style={{ color: '#ff6414',fontSize:'40px' }}>. </span>
            {feature}
          </p>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded text-xs font-semibold border"
            style={{
              background: 'rgba(255,100,20,0.1)',
              borderColor: 'rgba(255,100,20,0.3)',
              color: '#ff6414'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-[8%] py-24 max-w-[1800px] mx-auto">

      <motion.div
        className="flex items-center gap-3 mb-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: 'rgba(255,100,20,0.15)',
            border: '1px solid rgba(255,100,20,0.3)'
          }}
        >
          <FiFolder className="text-xl" style={{ color: '#ff6414' }} />
        </div>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
      </motion.div>
      <div className="w-12 h-[3px] rounded mb-10" style={{ background: '#ff6414' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Projects