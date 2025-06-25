import React from "react";
import CertificationCard from "./CertificationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogTitle, IconButton, Box } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import "./Certification.css";

const certifications = [
  {
    title: "Java (Basic)",
    description:
      "Demonstrates understanding of core Java concepts including OOP, data types, control structures, and basic algorithms.",
    image: "certificate/java.png",
  },
  {
    title: "SQL (Basic)",
    description:
      "Covers fundamental SQL operations like SELECT, JOIN, GROUP BY, and data manipulation on relational databases.",
    image: "certificate/sql.png",
  },
  {
    title: "Frontend (React)",
    description:
      "Covers building responsive and dynamic web interfaces using React, including hooks, state management, and component lifecycle.",
    image: "certificate/react.png",
  },
  {
    title: "Full Stack Web Development",
    description:
      "Covers both frontend and backend development using technologies like HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
    image: "certificate/fullStack.png",
  },
  { 
    title: "C Programming",
    description:
      "Covers basics of procedural programming, including data structures, memory management, and control flow using the C language.",
    image: "certificate/c.png",
  },
  { 
    title: "Create a Promotional Video using Canva",
    description:
      "Covers basics of procedural programming, including data structures, memory management, and control flow using the C language.",
    image: "certificate/canva.png",
  },
];


export default function CertificationPage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);
  const handleCardClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <div className="Page certification-section">
      <h1 className="heading">Certification</h1>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // 👈 save swiper instance
        }}
        speed={800}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        className="certification-slider"
      >
        {certifications.map((ach, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <CertificationCard
              title={ach.title}
              description={ach.description}
              image={ach.image}
              onClick={() => handleCardClick(ach.image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#888",
            backgroundColor: "#ffdede",
            "&:hover": {
              color:"#ff0055",
               backgroundColor: "#ffdede",
            },
          }}
          
        >
          <CloseIcon sx={{color:"#white"}} />
        </IconButton>
        <img
          src={selectedImage}
          alt="certification"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Dialog>
    </div>
  );
}
