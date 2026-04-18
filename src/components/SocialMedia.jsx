import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import styles from './SocialMedia.module.css'

const socialLinks = [
  { name: 'LeetCode', url: 'https://leetcode.com/username', icon: SiLeetcode },
  { name: 'GitHub', url: 'https://github.com/username', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: FaLinkedin },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: FaTwitter },
  { name: 'YouTube', url: 'https://youtube.com/@username', icon: FaYoutube },
]

function SocialMedia() {
  return (
    <section className={styles.section}>
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
