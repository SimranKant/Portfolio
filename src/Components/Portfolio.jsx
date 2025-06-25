import React from "react";
import NavBar from "./NavBar";
import HomePage from "./Home/HomePage";
import EducationPage from "./Education/EducationPage";
import SkillPage from "./Skills/SkillPage";
import ProjectPage from "./Projects/ProjectPage";
import Footer from "./Footer";
import ContactPage from "./Contact/ContactPage";
import CertificationPage from "./Certification/CertificationPage";
import AchievementsPage from "./Achievement/AchievementsPage";
import EventPage from "./Event/EventPage";

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <section id="home">
        <HomePage />
      </section>
      <section id="education">
        <EducationPage />
      </section>
      <section id="skill">
        <SkillPage />
      </section>
      <section id="project">
        <ProjectPage />
      </section>
      <section id="certification">
        <CertificationPage />
      </section>
      <section id="achievement">
        <AchievementsPage />
      </section>
      <section id="event">
       <EventPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <Footer />
    </>
  );
}
