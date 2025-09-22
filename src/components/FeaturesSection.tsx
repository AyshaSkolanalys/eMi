// src/components/FeaturesSection.tsx
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export type Feature = {
  title: string;
  description: string;
};

export type FeaturesSectionProps = {
  heading?: string;
  features?: Feature[];
};

const MotionBox = motion(Box);

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

export default function FeaturesSection({
  heading = "Features",
  features = [
    {
      title: "Adaptive AI Learning",
      description:
        "Activities adjust instantly to each child’s pace, ensuring learning is always challenging yet achievable.",
    },
    {
      title: "Always-There Mascot",
      description:
        "A friendly guide that supports, motivates, and celebrates every child — making learning fun and personal.",
    },
    {
      title: "Offline-First Design",
      description:
        "Works without internet, syncing automatically when online, so classrooms never depend on Wi-Fi.",
    },
    {
      title: "Curriculum Aligned",
      description:
        "Developed in collaboration with preschool experts, ensuring every activity matches early learning goals.",
    },
    {
      title: "Teacher Dashboard",
      description:
        "Real-time feedback, progress tracking, and gentle nudging tools to keep learning on track.",
    },
    {
      title: "Safe & Focused",
      description:
        "Runs only eMi — no other apps, ads, or distractions.",
    },
    {
      title: "Multilingual & Inclusive",
      description:
        "Accessible for all children, regardless of language, background, or needs.",
    },
  ],
}: FeaturesSectionProps) {
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
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#FF8C32",
                letterSpacing: 0.2,
              }}
            >
              {heading}
            </Typography>
          </Stack>

          {/* Features flexbox */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 3, md: 4 },
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
                style={{ flex: "1 1 280px", maxWidth: "calc(33.33% - 16px)" }}
              >
                <Stack spacing={1.2} textAlign="left">
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
