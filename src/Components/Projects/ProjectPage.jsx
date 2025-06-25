import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
  {
    title: "My Blog App",
    description:
      "MyBlogApp is a full-stack web application designed for users to seamlessly create, manage, and share blog posts. It’s built with a clean, responsive UI and supports core features essential for a modern blogging experience. The goal of this app was to combine both functionality and aesthetic design while focusing on learning and implementing full-stack development concepts.",
    features: [
      "CRUD Functionality – Create, read, update, and delete blog posts",
      "Search System – Filter posts by title, content, or author",
      "User Authentication – Login/signup via Passport.js with session handling",
      "Commenting System – Logged-in users can leave comments on posts",
      "RESTful Routes – Clean, predictable URL structure and logic",
      "Responsive design for all devices",
    ],

    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "MongoDB",
      "Express",
      "EJS",
      "Passport.js",
      "Bootstrap",
    ],
    liveLink:
      "https://myblogapp-sk4z.onrender.com/blogs/",
    githubLink: "https://github.com/SimranKant/MyBlogApp",
    image:"project/blog.png",
  },
  
  {
    title: "TravaNest:-Airbnb Clone",
    description:
      "TravaNest is a full-stack vacation rental web app inspired by Airbnb, built to simulate real-world booking functionality with user authentication, listing management, and reviews.",
    features: [
      "User Authentication – Register, login, and session management using Passport.js",
      "CRUD for Listings – Users can create, edit, and delete property listings",
      "Image Upload with Cloudinary – Upload, display, and manage images for each listing",
      "Review System – Users can leave and delete reviews for listings",
      "MVC Architecture – Organized project structure for maintainability",
      "Error Handling & Validation – Server-side validation with Joi and custom error middleware",
      "Flash Messages – Real-time user feedback for actions (create, update, delete)",
    ],

    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "MongoDB",
      "Express",
      "EJS",
      "Passport.js",
      "Bootstrap",
    ],
    liveLink: "https://travanest-rm4f.onrender.com",
    githubLink: "https://github.com/SimranKant/TravaNest.git",
     image:"project/travaNest.png",
  },
  {
    title: "Simon Say Game",
    description:
      "Simon Say Game is a fun and interactive memory game where players repeat an increasingly long sequence of flashing colored buttons. Test your focus and see how far you can go!",
    features: [
      "Real-time validation",
      "High Score Tracker",
      "Sequence gets longer with each level",
      "Starts with any key press",
    ],

    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://simon-say-game-wine.vercel.app/",
    githubLink: "https://github.com/SimranKant/SimonSayGame.git",
    image:"project/simonSay.png",
  },
  

  // Add more projects here...
];

export default function ProjectPage() {
  const [showAll, setShowAll] = useState(false);
  
    const visibleCards = showAll ? projects : projects.slice(0, 4);
  return (
    <div className="Page project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {visibleCards.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <ProjectCard key={index} project={project} index={index} />
          </motion.div>
        ))}
      </div>
      {projects.length > 3 && (
        <div style={{ marginTop: "1.5rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="view-more-btn"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
