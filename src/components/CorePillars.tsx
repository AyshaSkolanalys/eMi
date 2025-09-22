// src/components/CorePillars.tsx
import { Box, Container, Typography, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

type Pillar = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

type CorePillarsProps = {
  heading?: string;
  pillars?: Pillar[];
};

const MotionPaper = motion(Paper);

const defaultPillars: Pillar[] = [
  {
    title: "Curriculum Aligned",
    description:
      "Content built hand-in-hand with preschool experts and aligned with early childhood learning standards. Every activity is designed to match curriculum goals while keeping play fun, age-appropriate, and meaningful.",
    Icon: MenuBookRoundedIcon,
  },
  {
    title: "AI-Powered Learning",
    description:
      "At the heart of eMi is adaptive AI that understands each child’s pace. It personalizes tasks in math, language, and emotional growth, always adjusting to keep learning challenging yet achievable.",
    Icon: EmojiEmotionsRoundedIcon,
  },
  {
    title: "Teacher-Friendly",
    description:
      "A smart assistant in the classroom — eMi tracks progress, gives real-time feedback, and reduces the stress of constant monitoring. Teachers can focus on caring and guiding while eMi handles the repetitive tracking.",
    Icon: BoltRoundedIcon,
  },
  {
    title: "Inclusive for All",
    description:
      "Multilingual support and accessibility features ensure that every child, regardless of background, ability, or needs, has an equal chance to learn, grow, and shine with eMi.",
    Icon: PublicRoundedIcon,
  },
];

export default function CorePillars({
  heading = "Core Pillars of eMi",
  pillars = defaultPillars,
}: CorePillarsProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#0b0b0b",
        color: "common.white",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            color: "orange.400",
          }}
        >
          {heading}
        </Typography>

        {/* Card container */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            mx: "auto",
            bgcolor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Responsive grid without MUI Grid */}
          <Box
            sx={{
              display: "grid",
              gap: { xs: 4, md: 6 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr", // 2 columns at md+
              },
            }}
          >
            {pillars.map((p, idx) => {
              const Icon = p.Icon;
              return (
                <MotionPaper
                  key={p.title}
                  elevation={0}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  sx={{
                    bgcolor: "transparent",
                    p: { xs: 1, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        border: "2px solid #ffb300",
                        color: "#ffb300",
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                      {p.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.grey[300],
                        maxWidth: 440,
                      }}
                    >
                      {p.description}
                    </Typography>
                  </Box>
                </MotionPaper>
              );
            })}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
