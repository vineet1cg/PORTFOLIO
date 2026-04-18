import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaNetworkWired } from 'react-icons/fa'
import { 
  SiJavascript, SiReact, SiTailwindcss, SiRedux, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiSupabase, SiRust, SiGit, SiGithub, 
  SiPostman, SiDocker, SiVercel, SiNetlify, 
  SiLinux, SiFigma, SiBlender, SiFirebase 
} from 'react-icons/si'
import styles from './Skills.module.css'
import { portfolioData } from '../data/portfolioData'

const skillIcons = {
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Tailwind': SiTailwindcss,
  'Redux': SiRedux,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'REST APIs': FaNetworkWired,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Firebase': SiFirebase,
  'Git': SiGit,
  'Docker': SiDocker,
  'Postman': SiPostman,
  'Figma': SiFigma,
  'Linux': SiLinux,
  'Blender': SiBlender,
  'Unity': SiBlender,
  'Java': SiJavascript,
  'C': SiJavascript,
  'C++': SiJavascript,
  'Rust': SiRust
}

const skillCategories = [
  {
    title: 'Frontend',
    skills: portfolioData.skills.frontend
  },
  {
    title: 'Backend',
    skills: portfolioData.skills.backend
  },
  {
    title: 'Databases',
    skills: portfolioData.skills.databases
  },
  {
    title: 'DevOps',
    skills: portfolioData.skills.devops
  },
  {
    title: 'Tools',
    skills: portfolioData.skills.tools
  },
  {
    title: 'Languages',
    skills: portfolioData.skills.languages
  }
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

        <div className={styles.categories}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill] || SiGithub
                  return (
                    <motion.div
                      key={skill}
                      className={styles.skillTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={styles.skillIcon}><Icon /></span>
                      <span>{skill}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills