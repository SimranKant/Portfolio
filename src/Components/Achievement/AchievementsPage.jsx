import React, { useState } from "react";
import FlipCard from "./FlipCard";
import "./Achievement.css";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Merit Scholarship (1st Year)",
    description: "Awarded for outstanding academic performance and dedication in the first year.",
    image: "achievement/merit2024.png",
  },
  {
    title: "Merit Scholarship (2nd Year)",
    description: "Recognized for academic excellence and technical contribution through a full-stack MERN project.",
    image: "achievement/merit2025.png",
  },
  {
    title: "Cent Percentage Attendance",
    description: "Maintained 100% attendance, demonstrating commitment, consistency, and discipline.",
    image: "achievement/atten2025.png",
  },
  {
  title: "Reliance Foundation Scholarship",
  description: "Awarded on the basis of academic merit by the Reliance Foundation in recognition of consistent scholastic excellence.",
  image: "achievement/scholarship.png",
},

  {
    title: "Principal Award",
    description: "It is given on basis of student's overall performance. This will include academic progress and excellence, maximumparticipation in extra curricular activities, acts of school service, outstanding conduct and attendance.",
    image: "achievement/principal.png",
  },
  {
    title: "12 Years of Perfect Attendance",
    description: "This was given for having perfect attendance from class 1 to 12.",
    image: "achievement/perfect.png",
  },
  {
  title: "Rank 1 in Class 12",
  description: "Secured 1st position in the Humanities stream for Class 12, recognizing consistent academic excellence and dedication.",
  image: "achievement/rank.png",
}

];


export default function AchievementsPage() {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? achievements : achievements.slice(0, 3);

  return (
    <div className="Page achievement-section">
      <h1 className="heading mt-3">My Achievements</h1>

      <div className="flip-card-container">
        {visibleCards.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <FlipCard
              title={ach.title}
              description={ach.description}
              image={ach.image}
            />
          </motion.div>
        ))}
      </div>

      {achievements.length > 3 && (
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
