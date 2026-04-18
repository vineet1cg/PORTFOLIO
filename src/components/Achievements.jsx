import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa'
import styles from './Achievements.module.css'
import { portfolioData } from '../data/portfolioData'

// Map achievement types to icons
const achievementIcons = {
  award: FaTrophy,
  medal: FaMedal,
  star: FaStar
}

// Convert achievements data to the format expected by this component
const achievements = portfolioData.achievements.map(achievement => ({
  id: achievement.id,
  title: achievement.title,
  description: achievement.description,
  icon: achievementIcons.award, // Default icon for now
  type: 'award'
}))

function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Achievements</h2>
          <p className={styles.subtitle}>Awards, recognitions, and milestones</p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.iconWrapper}>
                <achievement.icon />
              </div>
              <h3 className={styles.cardTitle}>{achievement.title}</h3>
              <p className={styles.cardDesc}>{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements