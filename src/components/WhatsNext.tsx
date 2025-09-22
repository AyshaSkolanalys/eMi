// src/components/WhatsNext.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Paper,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

export type WhatsNextProps = {
  fadedHeading?: string;          // big ghost heading in the background
  productTitle?: string;          // orange title (e.g., "eMi 2.0")
  subtitle?: string;              // italic paragraph under title
  note?: string;                  // small muted text ("Stay tuned")
  mascotSrc: string;              // import your image and pass it
  mascotAlt?: string;
  ctaText?: string;               // "Curious? Let's Talk."
  onCtaClick?: () => void;
  onPlayClick?: () => void;
};

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const appear = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhatsNext({
  fadedHeading = "What’s Next",
  productTitle = "eMi 2.0",
  subtitle = "A friendly classroom bot that engages preschoolers directly — guiding them through playful activities and nurturing growth, all while supporting teachers in the background.",
  note = "Stay tuned",
  mascotSrc,
  mascotAlt = "Next-gen mascot",
  ctaText = "Curious? Let’s Talk.",
  onCtaClick,
  onPlayClick,
}: WhatsNextProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        backgroundColor: "#e7eef1", // light, like the mock
        overflow: "hidden",
      }}
    >
      {/* Faded giant heading */}
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: 12, md: 24 },
          left: 0,
          right: 0,
          textAlign: "center",
          fontWeight: 900,
          letterSpacing: 0.2,
          fontSize: { xs: "2.8rem", md: "5rem" },
          color: "rgba(0,0,0,0.08)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {fadedHeading}
      </Typography>

      <Container maxWidth="sm">
        <MotionBox variants={appear} initial="hidden" animate="show">
          {/* Mascot with PLAY overlay */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 3, md: 4 } }}>
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <MotionPaper
                elevation={0}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                sx={{ borderRadius: 3, overflow: "hidden", background: "transparent" }}
              >
                <Box
                  component="img"
                  src={mascotSrc}
                  alt={mascotAlt}
                  sx={{ width: { xs: 220, md: 300 }, height: "auto", display: "block" }}
                />
              </MotionPaper>

              {/* Center circular PLAY button */}
              <Button
                onClick={onPlayClick}
                variant="contained"
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -28%)", // slightly above true center to sit on device screen
                  borderRadius: "999px",
                  px: 0,
                  minWidth: 72,
                  height: 72,
                  fontWeight: 700,
                }}
              >
                PLAY
              </Button>
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 800, color: "#FF8C32", mb: { xs: 2, md: 2.5 } }}
          >
            {productTitle}
          </Typography>

          {/* Subtitle (italic) */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontStyle: "italic",
              color: theme.palette.text.primary,
              opacity: 0.9,
              lineHeight: 1.6,
              mb: { xs: 3, md: 4 },
            }}
          >
            {subtitle}
          </Typography>

          {/* Note + CTA */}
          <Stack spacing={2.5} alignItems="center">
            <Typography variant="body2" sx={{ color: "text.secondary", opacity: 0.7 }}>
              {note}
            </Typography>

            <Button
              onClick={onCtaClick}
              variant="contained"
              size="large"
              sx={{
                borderRadius: 999,
                px: 3.5,
                py: 1.25,
                backgroundColor: "#FF8C32",
                "&:hover": { backgroundColor: "#ff7a10" },
                color: "#111",
                fontWeight: 700,
                boxShadow: "none",
              }}
            >
              {ctaText}
            </Button>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}
