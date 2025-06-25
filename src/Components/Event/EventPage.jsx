import React, { useState } from "react";
import EventCard from "./EventCard";
import "./Event.css";

const hackathonEvents = [
  {
    title: "Code Rush 2.0",
    description:
      "A team-based coding competition where we tackled a series of algorithmic challenges under time constraints.",
    image: "Event/codeRush2.png",
  },
  {
    title: "Socket & Packet Mastery",
    description:
      "Hands-on hackathon using Socket.io and Packet Tracer for real-time network solutions.",
    image: "Event/c.png",
  },
  {
    title: "Ad-a-thon",
    description:
      "Creative video advertising competition for fictional products using editing and storytelling.",
    image: "Event/add.png",
  },
  {
    title: "CookOff 9.0",
    description:
      "Competitive coding contest with algorithmic and logic challenges under time pressure.",
    image: "Event/cookOff9.png",
  },
  
];

export default function EventPage() {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? hackathonEvents : hackathonEvents.slice(0, 4);

  return (
    <section className="Page hackathon-section">
      <h2 className="hackathon-title">Hackathons & Competitions</h2>
      <div className="hackathon-grid">
        {visibleCards.map((event, index) => (
          <EventCard key={index} event={event} index={index} />
        ))}
      </div>

      {/* Show toggle button only if more than 4 events */}
      {hackathonEvents.length > 4 && (
        <div style={{ marginTop: "1.5rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="view-more-btn"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
