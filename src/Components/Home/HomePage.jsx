import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function HomePage() {
  return (
    <div
      className="Page d-flex flex-column flex-md-row align-items-center justify-content-center p-6"
      style={{ minHeight: "100vh" }}
    >
      {/* Text Section */}
      <div className="content p-4 text-center text-md-start ">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Hi I'm Simran Kant
        </h1>
        <h2
  className="d-flex flex-column flex-md-row align-items-center justify-content-center"
  style={{ fontSize: "2rem", marginTop: "1rem", textAlign: "center" }}
>
  <span className="me-md-2 mb-2 mb-md-0">I am</span>
  <span style={{ color: "white" }}>
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Programmer",
          "BCA Student@VIT",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}
    />
  </span>
</h2>

        <p style={{fontSize: "1.25rem"}}>
           A curious and creative developer who loves bringing projects to life through code. From interactive interfaces to backend logic, I enjoy every part of the development journey — always learning, always building.


        </p>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            className: "social",
          }}
        >
          <a
            href="https://leetcode.com/u/Simran_Kant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={30} className="social-icons" />
          </a>
          <a
            href="https://github.com/SimranKant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="social-icons" />
          </a>
          <a
          href="https://www.linkedin.com/in/simran-kant-74056a281/"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} className="social-icons" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="image p-4">
        <img
          src="photo.jpg"
          alt="Profile"
          style={{
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
