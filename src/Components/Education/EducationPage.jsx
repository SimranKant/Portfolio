import React from "react";
import { useInView } from "react-intersection-observer";
import "./Education.css"

export default function EducationPage() {
  const educationData = [
    {
      title: "BCA",
      institution: "Vellore Institute Technology",
      detail: "CGPA: 9.84",
      date: "2023-2026",
    },
    {
      title: "Class 12",
      institution: "The Pentecostal Assembly School",
      detail: "Grade: 95.4%",
      date: "2022-2023",
    },
    {
      title: "Class 10",
      institution: "The Pentecostal Assembly School",
      detail: "Grade: 97.4%",
      date: "2020-2021",
    },
  ];

  return (
    <div className="Page main">
      <h3 className="head">Education</h3>
      <div className="scroll-container"></div>
      <div className="box">
        <ul>
          {educationData.map((item, index) => {
            const { ref, inView } = useInView({
              threshold: 0.3,
              triggerOnce: false,
            });

            return (
              <li
                ref={ref}
                className={`education-item ${inView ? "animate" : ""}`}
                key={index}
                
              >
                <h3 className="heading">{item.title}</h3>
                <p>
                  {item.institution}
                  <br />
                  {item.detail}
                </p>
                <span className="date">{item.date}</span>
                <span className="circle"></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
