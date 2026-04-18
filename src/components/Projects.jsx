import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaGamepad, FaClone, FaCube, FaCode } from 'react-icons/fa'
import styles from './Projects.module.css'
import { portfolioData } from '../data/portfolioData'

const categories = [
  { id: 'fullstack', label: 'Full Stack', icon: FaCube },
  { id: 'frontend', label: 'Frontend', icon: FaCode },
  { id: 'backend', label: 'Backend', icon: FaCube },
  { id: 'clones', label: 'Clones', icon: FaClone },
]

const projects = portfolioData.projects.map(project => {
  let category = 'fullstack'
  if (project.title.includes('Banking Backend')) category = 'backend'
  else if (project.title.includes('Learn JS')) category = 'frontend'
  else if (project.title.includes('AI Recipe')) category = 'frontend'
  
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    category,
    github: project.githubUrl,
    live: project.demoUrl,
    youtube: null,
  }
})

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>Showcasing my work across different categories</p>
        </motion.div>

        <motion.div 
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            className={`${styles.categoryBtn} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <cat.icon />
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          layout
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className={styles.techStack}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  <div className={styles.links}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
                    {project.youtube && (
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FaYoutube />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={styles.cardBadge}>
                  {categories.find(c => c.id === project.category)?.label}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects