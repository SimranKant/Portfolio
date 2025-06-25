import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Project.css";

export default function Modal({ onClose, project }) {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay " style={{marginTop: "1.5rem",}} onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={{ color: "#ff0055" }}>{project.title}</h2>
        <p style={{ color: "black" }}>{project.description}</p>

        <p style={{ color: "black", textAlign: "left", margin: "0" }}>Key Features:</p>
        <ul className="modal-features">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="modal-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="skill-badge">{tech}</span>
          ))}
        </div>

        <div className="modal-buttons">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="modal-btn">Live Demo</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-btn">GitHub</a>
        </div>

        <button className="modal-close" onClick={onClose} >Close</button>
      </motion.div>
    </div>
  );
}
