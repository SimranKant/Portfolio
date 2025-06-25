import React from "react";
import "devicon/devicon.min.css";
import "./Skill.css"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import {
  SiMysql,
  SiExpress,
  SiEjs,
  SiPostman,
  SiMongodb,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const categorizedSkills = {
  Languages: [
    { icon: <FaJava />, name: "Java" },
    { icon: <i className="devicon-c-plain  custom-icon"></i>, name: "C" },
    { icon: <i className="devicon-cplusplus-plain  custom-icon"></i>, name: "C++" },
    { icon: <i className="devicon-python-plain  custom-icon"></i>, name: "Python" },
  ],
  Frontend: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiEjs />, name: "EJS" },
  ],
  Backend: [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <MdApi />, name: "RESTful API" },
  ],
  Tools: [
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <i className="devicon-canva-plain custom-icon"></i>, name: "Canva" },
  ],
};

export default function SkillPage() {
  const categoryRefs = Object.keys(categorizedSkills).map(() =>
    useInView({
      threshold: 0.3,
      triggerOnce: false,
    })
  );

  return (
    <div className="Page">
      <div className="skills-section">
        <h2 className="skills-heading mt-5">My Skills</h2>
        {Object.entries(categorizedSkills).map(
          ([category, skills], catIndex) => {
            const { ref, inView } = categoryRefs[catIndex];

            return (
              <div
                ref={ref}
                className={`skill-category category-wrapper ${
                  inView ? "animate" : ""
                }`}
                key={category}
                style={{ animationDelay: `${catIndex * 0.3}s` }}
              >
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {skills.map((skill, i) => (
                    <div
                      className={`skill-icon ${inView ? "animate" : ""}`}
                      key={i}
                      title={skill.name}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {skill.icon}
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
