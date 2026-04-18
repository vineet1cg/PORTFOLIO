import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFileAlt, FaDownload, FaTimes } from 'react-icons/fa'
import styles from './Resume.module.css'

function Resume() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="resume" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Resume</h2>
          <p className={styles.subtitle}>View my professional background</p>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.preview}>
            <FaFileAlt size={60} />
            <h3>Your Name</h3>
            <p>Full-Stack Developer</p>
            <p>Email: your.email@example.com</p>
            <p>Location: City, Country</p>
          </div>

          <div className={styles.actions}>
            <button className={styles.viewBtn} onClick={() => setShowModal(true)}>
              <FaFileAlt />
              View Resume
            </button>
            <p className={styles.notice}>
              <FaDownload style={{ marginRight: '8px' }} />
              Auto-download is strictly prohibited
            </p>
          </div>
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
                  <FaTimes />
                </button>
                <div className={styles.pdfViewer}>
                  <FaFileAlt size={80} />
                  <h3>Resume Preview</h3>
                  <p>PDF viewer would display here</p>
                  <p className={styles.hint}>
                    Replace with actual PDF embed or use a PDF viewer library
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Resume