import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaNetworkWired } from 'react-icons/fa'
import { 
  SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiDocker, SiGit, SiFigma, SiLinux
} from 'react-icons/si'
import styles from './Skills.module.css'
import { portfolioData } from '../data/portfolioData'

const skillIcons = {
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Tailwind': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'Docker': SiDocker,
  'Git': SiGit,
  'Figma': SiFigma,
  'Linux': SiLinux
}

const allSkills = [
  ...portfolioData.skills.frontend,
  ...portfolioData.skills.backend,
  ...portfolioData.skills.databases,
  ...portfolioData.skills.devops,
  ...portfolioData.skills.tools,
  ...portfolioData.skills.languages
]

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>Technologies I work with</p>
        </motion.div>

        <div className={styles.skillGrid}>
          {allSkills.map((skill, index) => {
            const Icon = skillIcons[skill] || SiJavascript
            return (
              <motion.div
                key={skill}
                className={styles.skillItem}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -5 }}
              >
                <span className={styles.skillIcon}><Icon /></span>
                <span>{skill}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills