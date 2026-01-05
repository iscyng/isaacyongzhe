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

const projects = [
  {
    name: "Formalyze",
    description: "AI-powered survey platform for businesses to collect feedback and insights.",
    tech: "React, Firebase, AI",
    link: "https://formalyze-frontend.vercel.app"
  },
  {
    name: "Alex",
    description: "Robot for obstacle navigation using LiDAR sensors, integrating real-time sensor fusion algorithms and low-level motor control in C++",
    tech: "C++, Slamtec LiDAR, Hector SLAM, ROS",
    // link: "#"
  },
  {
    name: "MyHomeCloud",
    description: "Programmed Raspberry Pi 4 with NextCloud to create a personal cloud solution, showcasing Linux systemconfiguration and networking protocols.",
    tech: "Linux, Networking, Raspberry Pi",
    // link: "#"
  }
]

export default function Projects() {
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
          <h1 className="page-title">Projects</h1>
        </motion.div>

        <div className="page-list">
          {projects.map((project, index) => (
            <motion.a 
              key={index} 
              className="list-item list-item-link" 
              variants={item}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item-header">
                <span className="item-title">{project.name}</span>
                <span className="item-arrow">↗</span>
              </div>
              <p className="item-desc">{project.description}</p>
              <p className="item-tech">{project.tech}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

