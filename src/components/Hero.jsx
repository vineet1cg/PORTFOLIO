import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import { portfolioData } from '../data/portfolioData'

function Hero() {
  const { name, title, tagline } = portfolioData
  
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
           <motion.span 
             className={styles.greeting}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
           >
             Hello, I'm
           </motion.span>
           
          <h1 className={styles.name}>
            <span className={styles.nameText}>{name}</span>
          </h1>
           
          <motion.p 
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.p>
           
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {tagline}
          </motion.p>
          
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="/images/image.jpg" 
              alt={portfolioData.name} 
              className={styles.profileImage}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.classList.add(styles.placeholder)
              }}
            />
            <div className={styles.imageRing}></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  )
}

export default Hero