import { motion } from 'framer-motion'

function About() {
  const skills = [
    'Java',
    'React',
    'Python',
    'HTML & CSS',
    'Tailwindcss',
    'DSA',
    'Git & GitHub',
    'SQL',
    'VS CODE',
    'Intelij idea',
    'MS Office',
  ]

  return (
    <section id="about" className="px-[8%] py-24 max-w-[1300px] mx-auto">

      <motion.h2
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="w-12 h-[3px] bg-[#dd5e0a] rounded mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-[#999] mb-4 leading-loose">
            I'm currently pursuing my MCA and working towards becoming a
            Software Engineer. I enjoy learning new technologies and building
            projects that solve real problems.
          </p>
          <p className="text-[#999] leading-loose">
            I'm especially interested in Problem Solving and building clean,
            efficient software. Always looking to learn and grow.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white font-semibold mb-4">Technologies I work with:</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-1 border border-[#da500c] rounded-full text-[#ee6f1a] text-sm font-medium hover:bg-[#f4844d] hover:text-white transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About