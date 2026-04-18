import { motion } from 'framer-motion'
import { FaHtml5, FaNetworkWired } from 'react-icons/fa'
import { 
  SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiDocker, SiGit, SiFigma, SiLinux, SiBlender, SiUnity
} from 'react-icons/si'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML/CSS', icon: FaHtml5 },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
    color: '#61DAFB'
  },
  {
    title: 'Backend Architecture',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'REST APIs', icon: FaNetworkWired },
    ],
    color: '#68A063'
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: SiLinux },
      { name: 'Git', icon: SiGit },
    ],
    color: '#FF6B6B'
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Unity', icon: SiUnity },
      { name: 'Blender', icon: SiBlender },
    ],
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.categoryHeader} style={{ borderColor: category.color }}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ x: 5 }}
                  >
                    <span className={styles.skillIcon} style={{ color: category.color }}>
                      <skill.icon />
                    </span>
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