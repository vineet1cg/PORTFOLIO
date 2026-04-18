import { motion } from 'framer-motion'
import { FaHackerrank, FaGithub, FaYoutube } from 'react-icons/fa'
import styles from './Hackathon.module.css'

const hackathons = [
  { id: 1, name: 'Hackathon Name 1', problem: 'Problem statement describing the challenge', solution: 'Solution approach and implementation', outcome: 'Winner/Runner-up/Participant', github: '#', youtube: '#' },
  { id: 2, name: 'Hackathon Name 2', problem: 'Problem statement describing the challenge', solution: 'Solution approach and implementation', outcome: 'Participant', github: '#', youtube: '#' },
  { id: 3, name: 'Hackathon Name 3', problem: 'Problem statement describing the challenge', solution: 'Solution approach and implementation', outcome: 'Top 10', github: '#', youtube: null },
]

function Hackathon() {
  return (
    <section id="hackathon" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Hackathons</h2>
          <p className={styles.subtitle}>Problem statements and solutions</p>
        </motion.div>

        <motion.div 
          className={styles.timeline}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hackathons.map((hack, index) => (
            <motion.div
              key={hack.id}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.marker}>
                <FaHackerrank />
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.name}>{hack.name}</h3>
                  <span className={`${styles.outcome} ${hack.outcome.includes('Winner') ? styles.winner : ''}`}>
                    {hack.outcome}
                  </span>
                </div>
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.label}>Problem:</span>
                    <span>{hack.problem}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.label}>Solution:</span>
                    <span>{hack.solution}</span>
                  </div>
                </div>
                <div className={styles.links}>
                  {hack.github && (
                    <a href={hack.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FaGithub /> Code
                    </a>
                  )}
                  {hack.youtube && (
                    <a href={hack.youtube} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FaYoutube /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hackathon