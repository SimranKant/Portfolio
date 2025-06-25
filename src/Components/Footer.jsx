import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Simran Kant. All rights reserved.</p>
        <div className="footer-icons">
          <a
            href="https://leetcode.com/u/Simran_Kant/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://github.com/SimranKant"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/simran-kant-74056a281/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
