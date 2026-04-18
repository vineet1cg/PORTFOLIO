import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Certificates.module.css'
import { portfolioData } from '../data/portfolioData'

// Convert certificates data to the format expected by this component
const certificates = portfolioData.certificates.map(cert => ({
  id: cert.id,
  title: cert.title,
  organization: cert.organization,
  date: cert.date,
  proof: cert.proof,
  description: cert.description
}))

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