import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaNetworkWired } from 'react-icons/fa'
import { 
  SiJavascript, SiReact, SiTailwindcss, SiRedux, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiSupabase, SiRust, SiGit, SiGithub, 
  SiPostman, SiDocker, SiVercel, SiNetlify, 
  SiLinux, SiFigma, SiBlender 
} from 'react-icons/si'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux Toolkit', icon: SiRedux },
    ]
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST API', icon: FaNetworkWired },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Rust', icon: SiRust },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Docker', icon: SiDocker },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
    ]
  },
  {
    title: 'Design & OS',
    skills: [
      { name: 'Linux', icon: SiLinux },
      { name: 'Figma', icon: SiFigma },
      { name: 'Blender', icon: SiBlender },
    ]
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
