import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaDiscord, FaXTwitter } from 'react-icons/fa6'

const socials = [
  {
    name: 'Email',
    icon: HiMail,
    href: 'mailto:yubaraj459@gmail.com',
    label: 'yubaraj459@gmail.com',
    color: '#EA4335'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/yubaraj-saha-488883285/',
    label: 'linkedin.com/in/Yubaraj Saha',
    color: '#0A66C2'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    href: 'https://discord.com/channels/@me',
    label: 'yubarajsaha',
    color: '#5865F2'
  },
  {
    name: 'X',
    icon: FaXTwitter,
    href: 'https://x.com/SahaYubara59519',
    label: '@yubarajsaha',
    color: '#ffffff'
  }
]

function Contact() {
  return (
    <section id="contact" className="px-[8%] py-24 max-w-[1100px] mx-auto text-center">

      <motion.h2
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Want To Connect?
      </motion.h2>
      <div className="w-12 h-[3px] rounded mx-auto mb-4" style={{ background: '#ff6414' }} />

      <motion.p
        className="text-[#666] max-w-md mx-auto mb-12 leading-loose"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let's turn ideas into reality. Whether you're looking for a developer, collaborator, or tech enthusiast to connect with, my inbox is always open.

      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass rounded-xl p-5 text-left transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: `${social.color}40` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${social.color}15`,
                border: `1px solid ${social.color}30`,
                boxShadow: `0 0 15px ${social.color}10`
              }}
            >
              <social.icon className="text-2xl" style={{ color: social.color }} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{social.name}</p>
              <p className="text-[#555] text-xs mt-0.5">{social.label}</p>
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  )
}

export default Contact