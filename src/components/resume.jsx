import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { FiFileText } from 'react-icons/fi'

function Resume() {
  return (
    <section id="resume" className="px-[8%] py-24 max-w-[1400px] mx-auto">

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
      <FiFileText className="text-xl" style={{ color: '#ff6414' }} />
      </div>
      <h2 className="text-4xl font-bold text-white">Resume</h2>
    </motion.div>
      <div className="w-12 h-[3px] rounded mb-10" style={{ background: '#ff6414' }} />

      <motion.div
        className="glass rounded-2xl p-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ borderColor: 'rgba(255,100,20,0.3)' }}
      >
        {/* icon circle */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: 'rgba(255,100,20,0.1)',
            border: '1px solid rgba(255,100,20,0.2)',
            boxShadow: '0 0 30px rgba(255,100,20,0.15)'
          }}
        >
          <HiDownload className="text-3xl" style={{ color: '#ff6414' }} />
        </div>

        <h3 className="text-white font-bold text-2xl mb-3">
          Download My Resume
        </h3>
        <p className="text-[#666] text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Get a detailed overview of my education, skills, and experience.
          Updated regularly.
        </p>

        <motion.a
          href="/Resume .pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #ff6414, #ff8c42)',
            boxShadow: '0 0 25px rgba(255,100,20,0.35)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiDownload />
          Download Resume
        </motion.a>
      </motion.div>

    </section>
  )
}

export default Resume