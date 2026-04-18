import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFigma, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import styles from './FigmaDesigns.module.css'

const designs = [
  { id: 1, title: 'Design Project 1', description: 'UI/UX design for a mobile app', image: '/images/figma1.jpg', figma: 'https://figma.com/file/example1' },
  { id: 2, title: 'Design Project 2', description: 'Dashboard design for SaaS platform', image: '/images/figma2.jpg', figma: 'https://figma.com/file/example2' },
  { id: 3, title: 'Design Project 3', description: 'E-commerce checkout flow', image: '/images/figma3.jpg', figma: 'https://figma.com/file/example3' },
  { id: 4, title: 'Design Project 4', description: 'Portfolio template design', image: '/images/figma4.jpg', figma: 'https://figma.com/file/example4' },
]

function FigmaDesigns() {
  const [selectedDesign, setSelectedDesign] = useState(null)

  return (
    <section id="figma" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Figma Designs</h2>
          <p className={styles.subtitle}>UI/UX designs created using Figma</p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedDesign(design)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.placeholder}>
                  <FaFigma size={40} />
                  <span>Preview Image</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{design.title}</h3>
                <p className={styles.cardDesc}>{design.description}</p>
                <a href={design.figma} target="_blank" rel="noopener noreferrer" className={styles.link} onClick={(e) => e.stopPropagation()}>
                  <FaFigma />
                  <span>Open in Figma</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedDesign && (
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDesign(null)}
            >
              <motion.div
                className={styles.lightboxContent}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeBtn} onClick={() => setSelectedDesign(null)}>
                  <FaTimes />
                </button>
                <div className={styles.lightboxImage}>
                  <FaFigma size={80} />
                  <span>{selectedDesign.title}</span>
                </div>
                <h3>{selectedDesign.title}</h3>
                <p>{selectedDesign.description}</p>
                <a href={selectedDesign.figma} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                  <FaFigma />
                  Open in Figma
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FigmaDesigns