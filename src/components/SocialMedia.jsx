import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import styles from './SocialMedia.module.css'
import { portfolioData } from '../data/portfolioData'

const socialLinks = [
  { name: 'LeetCode', url: portfolioData.social.leetcode, icon: SiLeetcode },
  { name: 'GitHub', url: portfolioData.social.github, icon: FaGithub },
  { name: 'LinkedIn', url: portfolioData.social.linkedin, icon: FaLinkedin },
  { name: 'Twitter', url: portfolioData.social.twitter, icon: FaTwitter },
  { name: 'YouTube', url: portfolioData.social.youtube, icon: FaYoutube },
]

function SocialMedia() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Connect</h2>
          <p className={styles.subtitle}>Find me on these platforms</p>
        </motion.div>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SocialMedia
