import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )

      .then(() => {
        setIsLoading(false);
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 10000);
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Failed to send message.");
        console.error(error);
      });
  };

  return (
    <div className="Page">
      <h1 style={{ textAlign: "center", paddingTop: "4rem" }}>Contact Me</h1>
      <div className="contact-container">
        <motion.div
          className="contact-social"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Let's Connect!</h2>
          <p>
            Whether it's a collaboration or just to say hi, feel free to reach
            out. I’d love to hear from you!
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem" }}>
            <a
              href="https://www.linkedin.com/in/simran-kant-74056a281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="social-icons" />
            </a>
            <a
              href="https://github.com/SimranKant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="social-icons" />
            </a>
            <a
              href="https://leetcode.com/u/Simran_Kant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={30} className="social-icons" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Drop Me a Message</h2>
          <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
            I’ll get back to you within 24 hours!
          </p>

          <form ref={form} onSubmit={sendEmail}>
            {["user_name", "user_email", "message"].map((field, idx) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                {field === "message" ? (
                  <textarea name={field} placeholder="Your Message" required />
                ) : (
                  <input
                    type={field === "user_email" ? "email" : "text"}
                    name={field}
                    placeholder={
                      field === "user_name" ? "Your Name" : "Your Email"
                    }
                    required
                  />
                )}
              </motion.div>
            ))}

            {/* Spinner or Button */}
            {isLoading ? (
              <div className="spinner-container">
                <div className="spinner"></div>
                <p>Sending...</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button type="submit">Send Message</button>
              </motion.div>
            )}

            {/* Success Message Animation */}
            <AnimatePresence>
              {isSent && (
                <motion.div
                  key="sent-msg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="success-message"
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
