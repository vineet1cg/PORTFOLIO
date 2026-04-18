import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaGamepad, FaClone, FaCube, FaCode } from 'react-icons/fa'
import styles from './Projects.module.css'

const categories = [
  { id: 'games', label: 'Games', icon: FaGamepad },
  { id: 'clones', label: 'Clones', icon: FaClone },
  { id: 'fullstack', label: 'Full Stack', icon: FaCube },
  { id: 'frontend', label: 'Frontend', icon: FaCode },
]

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'A brief description of the project and what it does. Built with modern technologies.',
    category: 'fullstack',
    github: 'https://github.com/username/project1',
    live: 'https://project1.demo.com',
    youtube: 'https://youtube.com/watch?v=example',
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'Another great project showcasing your skills and expertise.',
    category: 'clones',
    github: 'https://github.com/username/project2',
    live: 'https://project2.demo.com',
    youtube: 'https://youtube.com/watch?v=example2',
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'An interactive game built with React and modern libraries.',
    category: 'games',
    github: 'https://github.com/username/project3',
    live: 'https://project3.demo.com',
    youtube: 'https://youtube.com/watch?v=example3',
  },
  {
    id: 4,
    title: 'Project Title 4',
    description: 'A beautiful frontend project with stunning UI/UX.',
    category: 'frontend',
    github: 'https://github.com/username/project4',
    live: 'https://project4.demo.com',
    youtube: null,
  },
  {
    id: 5,
    title: 'Project Title 5',
    description: 'Full-stack application with authentication and real-time features.',
    category: 'fullstack',
    github: 'https://github.com/username/project5',
    live: 'https://project5.demo.com',
    youtube: 'https://youtube.com/watch?v=example5',
  },
  {
    id: 6,
    title: 'Project Title 6',
    description: 'Clone of a popular platform with additional features.',
    category: 'clones',
    github: 'https://github.com/username/project6',
    live: 'https://project6.demo.com',
    youtube: 'https://youtube.com/watch?v=example6',
  },
]

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