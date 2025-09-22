// src/components/WhyItMatters.tsx
import React from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

export type Feature = {
  title: string;
  description: React.ReactNode; // can include <a> or <Typography>
};

export type WhyItMattersProps = {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
  features?: Feature[]; // 3 items (flex row on md+, stacked on mobile)
};

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

export default function WhyItMatters({
  title = "Why It Matters",
  imageSrc,
  imageAlt = "Illustration of kids and teachers",
  features = [
    {
      title: "The Challenge",
      description:
        "Preschool teachers manage many children at once, each with different strengths and needs. Some require extra support, others more challenge, and it’s difficult to give personalized attention to everyone. Regular tablets and apps add distractions, making focused learning even harder.",
    },
    {
      title: "The Opportunity",
      description: (
        <>
          Technology now makes personalization possible, in a safe and structured
          way. <br />
          <u>
            With adaptive AI, curriculum-aligned content, and engaging
            activities, digital tools can finally support teachers, instead of
            adding more work.
          </u>
        </>
      ),
    },
    {
      title: "The eMi Difference",
      description: (
        <>
          <strong>For Children:</strong> Learn at their own pace with a mascot
          that guides, motivates, and celebrates progress. <br />
          <br />
          <strong>For Teachers:</strong> Real-time tracking and feedback lighten
          the workload and free time for care. <br />
          <br />
          <strong>For Schools & Parents:</strong> Curriculum-aligned,
          multilingual, and offline-first — making eMi inclusive and reliable.
        </>
      ),
    },
  ],
}: WhyItMattersProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #0D1117 0%, #0B0F14 100%)",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={containerVariants} initial="hidden" animate="show">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: "#FF8C32", letterSpacing: 0.2 }}
            >
              {title}
            </Typography>

            {/* Illustration */}
            <MotionPaper
              layout
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              elevation={0}
              sx={{
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#e9eef3" : "#f3f6fa",
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={imageAlt}
                sx={{
                  display: "block",
                  width: "100%",
                  height: { xs: 200, sm: 260, md: 300 },
                  objectFit: "cover",
                }}
              />
            </MotionPaper>
          </Stack>

          {/* Features: 3 column flex */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                style={{ flex: 1 }}
              >
                <Stack spacing={1.5} textAlign="left">
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.description}
                  </Typography>
                </Stack>
              </motion.div>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
