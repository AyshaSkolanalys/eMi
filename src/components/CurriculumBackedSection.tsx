// src/components/CurriculumBackedSection.tsx
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import LangImg from '../assets/images/lang.jpg'
import MathImg from '../assets/images/math.jpg'
import SocialImg from '../assets/images/social.jpg'

type Pillar = {
  imageSrc: string; // import & pass in
  imageAlt?: string;
  title: string;
  description: string;
};

export type CurriculumBackedSectionProps = {
  heading?: string;
  subheading?: string;
  thinNote?: string;
  pillars?: Pillar[]; // expect 3
};

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

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

export default function CurriculumBackedSection({
  heading = "Learning That’s Backed by Curriculum",
  subheading = "Every activity is carefully aligned with early childhood curriculum, designed together with preschool experts.",
  thinNote = "That means children are not just playing — they are building real skills that matter for school readiness and lifelong learning.",
  pillars = [
    {
      imageSrc: LangImg,
      imageAlt: "Language & Communication",
      title: "Language & Communication",
      description:
        "Letters, sounds, stories, and conversations that help children express themselves and build confidence.",
    },
    {
      imageSrc: MathImg,
      imageAlt: "Math & Logic",
      title: "Math & Logic",
      description:
        "Numbers, shapes, colors, and matching tasks that strengthen problem-solving and numeracy skills.",
    },
    {
      imageSrc: SocialImg,
      imageAlt: "Emotional & Social Growth",
      title: "Emotional & Social Growth",
      description:
        "Activities that encourage expression, turn-taking, listening, and early science exploration — supporting emotional awareness and curiosity.",
    },
  ],
}: CurriculumBackedSectionProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, #14202B 0%, #0F1720 100%)",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: "#FF8C32", letterSpacing: 0.2 }}
            >
              {heading}
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontStyle: "italic", maxWidth: 900, opacity: 0.95 }}
            >
              {subheading}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                opacity: 0.8,
                maxWidth: 900,
                mt: { xs: 1, md: 2 },
              }}
            >
              {thinNote}
            </Typography>
          </Stack>

          {/* Cards */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 5 },
            }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title + i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                style={{ flex: 1 }}
              >
                <Stack spacing={1.5} textAlign="left">
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
                      src={p.imageSrc}
                      alt={p.imageAlt || p.title}
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </MotionPaper>

                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.description}
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
