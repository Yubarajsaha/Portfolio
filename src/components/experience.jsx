import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    role: 'Web Designer',
    company: 'PaperBill',
    year: 'Dec 2025 — Mar 2026',
    type: 'Internship',
    Skills:['Html', 'CSS', 'Tailwind CSS', 'Git & Github', 'Seo'],
    points: [
      'Digital Presence Optimization', 
      'Customer Engagement Solutions', 
      'Develelop GST billig pages', 
      'User-Centric UI Design',
    ],
    Skills:['Html & CSS', 'Tailwind CSS', 'Git & Github', 'SEO',]
  }
]

function Experience() {
  return (
    <section id="experience" className="px-[8%] py-24 max-w-[1300px] mx-auto">

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
        <FiBriefcase className="text-xl" style={{ color: '#ff6414' }} />
      </div>
        <h2 className="text-4xl font-bold text-white">Experience</h2>
    </motion.div>
      <div className="w-12 h-[3px] rounded mb-10" style={{ background: '#ff6414' }} />

      <div className="flex flex-col gap-6">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-8"
            style={{ borderLeft: '2px solid rgba(255,100,20,0.2)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* timeline dot */}
            <div
              className="absolute left-[-9px] top-1 w-4 h-4 rounded-full border-4 border-[#080808]"
              style={{ background: '#ff6414', boxShadow: '0 0 10px rgba(255,100,20,0.6)' }}
            />

            <motion.div
              className="glass rounded-xl p-6 transition-all duration-300"
              whileHover={{ borderColor: 'rgba(255,100,20,0.4)', y: -2 }}
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <h3 className="text-white font-semibold text-lg">{item.role}</h3>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(255,100,20,0.1)',
                    border: '1px solid rgba(255,100,20,0.2)',
                    color: '#ff6414'
                  }}
                >
                  {item.type}
                </span>
              </div>

              <div className="flex justify-between items-center mb-3">
                <p className="text-[#aaa] text-sm font-medium">{item.company}</p>
                <p className="text-[#555] text-xs">{item.year}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#777] text-sm leading-relaxed">
                    <span className="mt-1 text-xs" style={{ color: '#ff6414' }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#ff6414]/10">
              {item.Skills.map((skill, i) => (
              <span
              key={i}
              className="px-3 py-1 rounded text-xs font-medium border"
              style={{
              background: 'rgba(255,100,20,0.1)',
              borderColor: 'rgba(255,100,20,0.3)',
              color: '#ff6414'
              }}
              >
            {skill}
            </span>
            ))}
            </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience