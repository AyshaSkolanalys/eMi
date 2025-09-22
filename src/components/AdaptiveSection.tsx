// src/components/AdaptiveSection.tsx
import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

// import the single combined asset
import adaptiveImage from "../assets/images/adaptive.png"

const MotionBox = motion(Box);

export default function AdaptiveSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#0b0b0b",
        color: "common.white",
        py: { xs: "4rem", md: "6rem" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Title */}
        <Typography
          variant="h3"
          component="h2"
          fontWeight={700}
          gutterBottom
          sx={{
            color: "orange.400",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Adaptive, safe, and built to grow with every child
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: { xs: 6, md: 10 },
            color: "grey.300",
          }}
        >
          eMi is an AI-powered learning companion created for preschools.
          Running on a dedicated tablet with no distractions, it offers
          personalized games that nurture skills in math, language, and
          emotional growth. Each child has their own avatar, making it easy to
          pick up where they left off, while teachers can track progress, nudge
          incomplete tasks, and gain clear insights into every child’s
          development. eMi works seamlessly offline and syncs data when online,
          ensuring learning never stops.
        </Typography>

        {/* Image */}
        <MotionBox
          component="img"
          src={adaptiveImage}
          alt="eMi adaptive learning mockup"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{
            width: "100%",
            maxWidth: "900px",
            mx: "auto",
            borderRadius: 2,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        />
      </Container>
    </Box>
  );
}
