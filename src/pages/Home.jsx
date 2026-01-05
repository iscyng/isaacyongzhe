import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function Home() {
  return (
    <motion.div 
      className="home"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="home-content">
        {/* Name */}
        <motion.h1 className="name" variants={item}>
          Isaac Yong Zhe
        </motion.h1>
        
        {/* Title */}
        <motion.p className="title" variants={item}>
          Software Engineer
        </motion.p>

        {/* Navigation */}
        <motion.nav className="nav" variants={item}>
          <Link to="/work" className="nav-link">work</Link>
          <span className="nav-sep">/</span>
          <Link to="/projects" className="nav-link">projects</Link>
          <span className="nav-sep">/</span>
          <Link to="/education" className="nav-link">education</Link>
        </motion.nav>

        {/* Social Links */}
        <motion.div className="links" variants={item}>
          <a 
            href="https://www.linkedin.com/in/isaacyongzhe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link"
          >
            linkedin
          </a>
          <span className="link-sep">·</span>
          <a 
            href="mailto:justisaacyong@gmail.com"
            className="link"
          >
            justisaacyong@gmail.com
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

