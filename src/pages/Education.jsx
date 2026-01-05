import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Page.css'

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

const education = [
  {
    school: "National University of Singapore",
    degree: "Bachelor of Science in Computer Engineering",
    period: "2022 — 2026",
    details: "Machine Learning, Digital Design, Discrete Mathematics, Data Structures and Algorithms, Operating Systems, Computer Architecture, Computer Networks."
  }
]

export default function Education() {
  return (
    <motion.div 
      className="page"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="page-content">
        <motion.div className="page-header" variants={item}>
          <Link to="/" className="back">← back</Link>
          <h1 className="page-title">Education</h1>
        </motion.div>

        <div className="page-list">
          {education.map((edu, index) => (
            <motion.div key={index} className="list-item" variants={item}>
              <div className="item-header">
                <span className="item-title">{edu.school}</span>
                <span className="item-meta">{edu.period}</span>
              </div>
              <p className="item-role">{edu.degree}</p>
              <p className="item-desc">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

