import React from "react";
import "./Achievement.css";

export default function FlipCard({ title, description, image }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front: Certificate Image */}
        <div className="flip-card-front">
          <h3 style={{color: "#e60045"}}>{title}</h3>
          <p>{description}</p>
        </div>

        {/* Back: Description */}
        <div className="flip-card-back">
          <img src={image} alt={title} className="achievement-img" />
        </div>
      </div>
    </div>
  );
}
