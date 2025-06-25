
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./Certification.css";
export default function CertificationCard({
  title,
  description,
  image,
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: {
          xs: "90%", // 90% of container on small screens
          sm: "80%",
          md: "100%", // 100% inside Swiper on tablets/desktops
        },
        // maxWidth: 345,
        // allow it to shrink

        mx: "auto", // center horizontally
        borderRadius: "1rem",
        cursor: "pointer",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: 6,
        },
      }}
      className="custom-card"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "1rem",
            backgroundColor: "black",
            // optional background for clarity
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
