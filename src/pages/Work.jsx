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

const workHistory = [
  {
    company: "Biomesense",
    role: "Mechatronics Engineer Intern",
    period: "Aug 2024 — Aug 2025",
    description: "Engineered the GutLab. Engineered GutLogger, an internal data analysis tool that processes system logs to visualize performance metrics, reducing cycle analysis time by 80% "
  },
  {
    company: "Shopee",
    role: "Software Engineer Intern",
    period: "Feb 2022 — Jul 2024",
    description: "Built a high-performance backend for an internal SOX Compliance Center, developing data pipelines for automated large-scale data validation. Automated large-scale data extraction and statistical analysis using Python, ensuring data quality and significantly reducing manual turnaround time."
  },
  {
    company: "Razer Inc.",
    role: "Software QA Intern",
    period: "Mar 2022 - Jul 2022",
    description: "Developed automated test suites for a Synapse4, reducing manual testing time by 90%"
  }
]

export default function Work() {
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
          <h1 className="page-title">Work</h1>
        </motion.div>

        <div className="page-list">
          {workHistory.map((job, index) => (
            <motion.div key={index} className="list-item" variants={item}>
              <div className="item-header">
                <span className="item-title">{job.company}</span>
                <span className="item-meta">{job.period}</span>
              </div>
              <p className="item-role">{job.role}</p>
              <p className="item-desc">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

