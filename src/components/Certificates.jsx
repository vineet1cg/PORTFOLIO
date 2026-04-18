import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Certificates.module.css'

const certificates = [
  { id: 1, title: 'Certificate Name 1', organization: 'Issuing Organization', date: '2024', proof: '#', description: 'Brief description of what was learned' },
  { id: 2, title: 'Certificate Name 2', organization: 'Issuing Organization', date: '2024', proof: '#', description: 'Brief description of what was learned' },
  { id: 3, title: 'Certificate Name 3', organization: 'Issuing Organization', date: '2023', proof: '#', description: 'Brief description of what was learned' },
  { id: 4, title: 'Certificate Name 4', organization: 'Issuing Organization', date: '2023', proof: '#', description: 'Brief description of what was learned' },
]

function Certificates() {
  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Certificates</h2>
          <p className={styles.subtitle}>Professional certifications and achievements</p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.iconWrapper}>
                <FaCertificate />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.org}>{cert.organization}</p>
                <p className={styles.desc}>{cert.description}</p>
                <div className={styles.footer}>
                  <span className={styles.date}>{cert.date}</span>
                  <a href={cert.proof} target="_blank" rel="noopener noreferrer" className={styles.proofLink}>
                    View Proof <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates