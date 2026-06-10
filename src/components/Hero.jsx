import { motion } from 'framer-motion'

const tags = ['#WebDevelopment', '#Java', '#React', '#DSA', '#SoftwareEngineering', '#Data Analytics', '#Backend']

function Hero() {
  return (
    <section className="min-h-[95vh] flex flex-col justify-center px-[8%] py-24 max-w-[1100px] mx-auto">

      {/* profile photo placeholder */}
      <motion.div
        className="w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-2xl font-bold text-white"
        style={{
          background: 'linear-gradient(135deg, rgba(255,100,20,0.3), rgba(255,140,50,0.1))',
          border: '1px solid rgba(255,100,20,0.3)',
          boxShadow: '0 0 30px rgba(255,100,20,0.2)'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Y.S
      </motion.div>

      <motion.p
        className="text-[#ff6414] text-sm font-semibold tracking-widest uppercase mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        MCA Student & Aspiring Software Engineer
      </motion.p>

      <motion.h1
        className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold text-white leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Turning <span style={{ color: '#ff6414' }}>Ideas,</span>{' '}
        <br />
        <span style={{ color: '#ff6414' }}>Into</span>{' '}
        Impact Through <span style={{ color: '#ff6414' }}>Code!</span>
      </motion.h1>

      <motion.p
        className="max-w-[520px] text-[#888] mb-8 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        As an aspiring software engineer, I'm constantly learning, adapting, and challenging myself to solve real-world problems through technology. 
        I enjoy building clean, scalable applications and transforming ideas into meaningful digital experiences.

      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-wrap gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
          className="px-7 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #ff6414, #ff8c42)',
            boxShadow: '0 0 25px rgba(255,100,20,0.35)'
          }}
        >
          See Portfolio
        </button>
        <button
          onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          className="px-7 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 glass"
        >
          Contact Me
        </button>
      </motion.div>

      {/* hashtag tags */}
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {tags.map((tag, i) => (
          <span
            key={tag}
            className="text-xs text-[#f85903] font-mono tracking-wide"
          >
            {tag}
          </span>
        ))}
      </motion.div>

    </section>
  )
}

export default Hero