// src/components/BenefitsSection.tsx
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
import ChildrenImg from '../assets/images/children.png';
import TeachersImg from '../assets/images/teachers.png';
import ParentsImg from '../assets/images/parents.png';

type BenefitItem = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  points: string[];
};

export type BenefitsSectionProps = {
  heading?: string;
  items?: BenefitItem[]; // expect 3
};

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function BenefitsSection({
  heading = "Benefits",
  items = [
    {
      imageSrc: ChildrenImg,
      imageAlt: "For Children",
      title: "For Children",
      points: [
        "Learning feels like play, guided by a trusted mascot.",
        "Builds confidence through encouragement and small celebrations.",
        "Adaptive challenges help every child progress at their own pace.",
      ],
    },
    {
      imageSrc: TeachersImg,
      imageAlt: "For Teachers",
      title: "For Teachers",
      points: [
        "Less stress tracking progress manually.",
        "Easy-to-use dashboard with real-time insights.",
        "More time to focus on care, creativity, and meaningful interactions.",
      ],
    },
    {
      imageSrc: ParentsImg,
      imageAlt: "For Schools & Parents",
      title: "For Schools & Parents",
      points: [
        "Safe, structured, distraction-free learning environment.",
        "Curriculum aligned and multilingual.",
        "A consistent, reliable way to support every child’s development.",
      ],
    },
  ],
}: BenefitsSectionProps) {
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
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: 800, color: "#FF8C32", letterSpacing: 0.2, mb: { xs: 4, md: 6 } }}
          >
            {heading}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 5, md: 6 },
            }}
          >
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                style={{ flex: 1 }}
              >
                <Stack spacing={2}>
                  <MotionPaper
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 140, damping: 16 }}
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#e9eef3" : "#f3f6fa",
                      width: "100%",
                      aspectRatio: "16/9",
                    }}
                  >
                    <Box
                      component="img"
                      src={it.imageSrc}
                      alt={it.imageAlt || it.title}
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </MotionPaper>

                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {it.title}
                  </Typography>

                  <Stack spacing={1.2}>
                    {it.points.map((p, idx) => (
                      <Typography key={idx} variant="body2" color="text.secondary">
                        {p}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
