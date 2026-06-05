import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Coming soon...',
    description: 'Ongoing..',
    link: '#'
  },
  {
    title: 'Coming soon...',
    description: 'Ongoing..',
    link: '#'
  },
  {
    title: 'Coming soon...',
    description: 'Ongoing..',
    link: '#'
  }
]

function ProjectCard({ title, description, link, index }) {
  return (
    <motion.div
      className="bg-[#111] border border-[#222] rounded-xl p-7 cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: 'rgba(255,100,20,1)', y: -4 }}
    >
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#888] text-sm mb-4 leading-relaxed">{description}</p>
      <a href={link} className="text-[#f77008] text-sm font-semibold hover:underline">
        View Project →
      </a>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-[8%] py-24 max-w-[1100px] mx-auto">

      <motion.h2
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="w-12 h-[3px] bg-[#f57c0c] rounded mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Projects