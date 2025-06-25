import React, { useState } from "react";
import Badge from "./Badge";
import Modal from "./Modal";
import { useInView } from "react-intersection-observer";
import "./Project.css";

export default function ProjectCard({ project, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <>
      <div
        ref={ref}
        className={`project-card-wrapper ${inView ? "animate" : ""}`}
        style={{ animationDelay: `${index * 0.2}s` }}
        onClick={() => setIsOpen(true)}
      >
        <h3 className="project-title" style={{ color: "#ff0055" }}>{project.title}</h3>
        {/* Image goes here */}
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-image"
          />
        )}
        <div className="tech-stack">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} skill={tech} />
          ))}
        </div>
      </div>

      {isOpen && <Modal project={project} onClose={() => setIsOpen(false)} />}
    </>
  );
}
