// src/components/TeamSection.tsx
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";

import NordicLogo from "../assets/images/2mnordic.png";
import FoxsyLogo from "../assets/images/foxsy.png";
import AiLogo from "../assets/images/ai.png";
import HelsingborgLogo from "../assets/images/helsingborg.png";
import UniversityLogo from "../assets/images/university.png";
import { titleSx } from "../styles/AdaptiveSection.styles";
import { para1Sx } from "../styles/Hero.styles";
import { body3Sx } from "../styles/FeaturesSection.styles";

type Partner = {
  logoSrc: string;         // import and pass in
  alt: string;
  href?: string;           // optional link
  maxWidth?: number;       // optional per-logo max width (px)
};

export type TeamSectionProps = {
  title?: string;
  description?: string;
  partnersLabel?: string;
  partners?: Partner[];
};

const MotionBox = motion(Box);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

export default function TeamSection({
  title = "The Team",
  description = `Our team brings together preschool educators, social workers, and award-winning robotics engineers — guided by visionary leaders deeply rooted in the Swedish early education system. With proven experience in child development and technology, we're building tools that truly understand the classroom.`,
  partnersLabel = "Partners",
  partners = [
    { logoSrc: NordicLogo, alt: "2Mnordic", maxWidth: 130 },
    { logoSrc: FoxsyLogo, alt: "FOXSY.AI", maxWidth: 140 },
    { logoSrc: AiLogo, alt: "AI Sweden", maxWidth: 90 },
    { logoSrc: HelsingborgLogo, alt: "Helsingborg", maxWidth: 80 },
    { logoSrc: UniversityLogo, alt: "University Partner", maxWidth: 110 },
  ],
}: TeamSectionProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === "dark" ? "#F4F7FA" : "#F4F7FA",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Typography
              variant="h4"
              sx={titleSx}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{...para1Sx, color:'#19191999'}}
            >
              {description}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{...body3Sx, color:'#19191999'}}
            >
              {partnersLabel}
            </Typography>
          </Stack>

          {/* Logos row (no Grid) */}
          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 3, md: 6 },
            }}
          >
            {partners.map((p, i) => {
              const content = (
                <MotionBox
                  key={p.alt + i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  sx={{
                    opacity: 0.9,
                    transition: "opacity .2s ease, transform .2s ease",
                    "&:hover": { opacity: 1, transform: "translateY(-2px)" },
                  }}
                >
                  <Box
                    component="img"
                    src={p.logoSrc}
                    alt={p.alt}
                    sx={{
                      display: "block",
                      height: "auto",
                      maxWidth: p.maxWidth ?? 140,
                      width: "100%",
                    }}
                  />
                </MotionBox>
              );

              return p.href ? (
                <Box
                  key={p.alt + "_link"}
                  component="a"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ lineHeight: 0 }}
                >
                  {content}
                </Box>
              ) : (
                content
              );
            })}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
