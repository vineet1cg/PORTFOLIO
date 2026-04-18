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

const skillCategories = [
  {
    title: 'Frontend',
    skills: portfolioData.skills.frontend,
    color: '#61DAFB'
  },
  {
    title: 'Backend',
    skills: portfolioData.skills.backend,
    color: '#68A063'
  },
  {
    title: 'Tools',
    skills: [...portfolioData.skills.devops, ...portfolioData.skills.tools],
    color: '#FF6B6B'
  },
  {
    title: 'Languages',
    skills: portfolioData.skills.languages,
    color: '#F7DF1E'
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

        <div className={styles.categoriesGrid}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className={styles.categoryHeader} style={{ borderColor: category.color }}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill] || SiJavascript
                  return (
                    <motion.div
                      key={skill}
                      className={styles.skillItem}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ x: 5 }}
                    >
                      <span className={styles.skillIcon} style={{ color: category.color }}>
                        <Icon />
                      </span>
                      <span className={styles.skillName}>{skill}</span>
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