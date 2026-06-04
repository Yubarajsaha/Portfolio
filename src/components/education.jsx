import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Lovely Professional University(LPU)- Jalandhar',
    year: '2026 — 2028',
    description: 'Pursuing MCA with focus on software engineering and modern web technologies.'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Institute Of Engineering And Management(IEM)-Kolkata',
    year: '2023 — 2026',
    description: 'Completed BCA with strong foundation in programming and computer science fundamentals.'
  },
  {
    degree: '10+2TH',
    school: 'Falakata High School(H.S)',
    year: '2021 — 2023',
  },
  {
    degree: '10TH',
    school: 'Falakata High School(H.S)',
    year: '2020 — 2021',
  },
]

function Education() {
  return (
    <section id="education" className="px-[8%] py-24 max-w-[1100px] mx-auto">

      <motion.h2
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="w-12 h-[3px] rounded mb-10" style={{ background: '#ff6414' }} />

      <div className="flex flex-col gap-6">
        {education.map((item, index) => (
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
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-white font-semibold text-lg">{item.degree}</h3>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(255,100,20,0.1)',
                    border: '1px solid rgba(255,100,20,0.2)',
                    color: '#ff6414'
                  }}
                >
                  {item.year}
                </span>
              </div>
              <p className="text-[#aaa] text-sm font-medium mb-2">{item.school}</p>
              <p className="text-[#666] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Education