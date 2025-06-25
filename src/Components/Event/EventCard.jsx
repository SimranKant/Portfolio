import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Event.css";

export default function HackathonCard({ event, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.3 },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      className="hackathon-card"
      animate={controls}
      initial={{ opacity: 0, y: 40 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <img src={event.image} alt={event.title} className="hackathon-img" />
      <div className="hackathon-info">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </motion.div>
  );
}
