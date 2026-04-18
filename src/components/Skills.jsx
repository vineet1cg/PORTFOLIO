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

// Icon mapping for skills
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

// Convert skills data to categories format
const skillCategories = [
  {
    title: 'Frontend',
    skills: portfolioData.skills.frontend.map(skill => ({
      name: skill,
      icon: skillIcons[skill] || SiJavascript
    }))
  },
  {
    title: 'Backend',
    skills: portfolioData.skills.backend.map(skill => ({
      name: skill,
      icon: skillIcons[skill] || SiNodedotjs
    }))
  },
  {
    title: 'Databases',
    skills: portfolioData.skills.databases.map(skill => ({
      name: skill,
      icon: skillIcons[skill] || SiMongodb
    }))
  },
  {
    title: 'DevOps & Tools',
    skills: portfolioData.skills.devops.concat(portfolioData.skills.tools).map(skill => ({
      name: skill,
      icon: skillIcons[skill] || SiGit
    }))
  },
  {
    title: 'Languages & Other',
    skills: portfolioData.skills.languages.map(skill => ({
      name: skill,
      icon: skillIcons[skill] || SiJavascript
    }))
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

        <div className={styles.grid}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ y: -5, color: 'var(--accent-coral)' }}
                  >
                    <div className={styles.skillIcon}>
                      <skill.icon />
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
