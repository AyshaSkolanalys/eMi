// src/components/FeaturesSection.tsx
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';
import { titleSx } from '../styles/AdaptiveSection.styles';
import { cardTitleSx } from '../styles/CorePillars.styles';

export type Feature = {
  title: string;
  description: string;
};

export type FeaturesSectionProps = {
  heading?: string;
  features?: Feature[];
};

const MotionBox = motion(Box);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function FeaturesSection({
  heading = 'Features',
  features = [
    {
      title: 'Adaptive AI Learning',
      description:
        'Activities adjust instantly to each child’s pace, ensuring learning is always challenging yet achievable.',
    },
    {
      title: 'Always-There Mascot',
      description:
        'A friendly guide that supports, motivates, and celebrates every child — making learning fun and personal.',
    },
    {
      title: 'Offline-First Design',
      description:
        'Works without internet, syncing automatically when online, so classrooms never depend on Wi-Fi.',
    },
    {
      title: 'Curriculum Aligned',
      description:
        'Developed in collaboration with preschool experts, ensuring every activity matches early learning goals.',
    },
    {
      title: 'Teacher Dashboard',
      description:
        'Real-time feedback, progress tracking, and gentle nudging tools to keep learning on track.',
    },
    {
      title: 'Safe & Focused',
      description: 'Runs only eMi — no other apps, ads, or distractions.',
    },
    {
      title: 'Multilingual & Inclusive',
      description: 'Accessible for all children, regardless of language, background, or needs.',
    },
  ],
}: FeaturesSectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h3" sx={{ ...titleSx, mb: '1rem !important' }}>
              {heading}
            </Typography>
          </Stack>

          {/* Features flexbox */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 3, md: 4 },
            }}
          >
            {features.map((f, i) => (
              <MotionBox
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                sx={{
                  flexGrow: 1,
                  flexBasis: {
                    xs: '100%',
                    sm: 'calc(50% - 12px)',
                    md: 'calc(25% - 16px)',
                  },
                  maxWidth: {
                    xs: '100%',
                    sm: 'calc(50% - 12px)',
                    md: 'calc(33.333% - 16px)',
                  },
                  minWidth: 0,
                }}
              >
                <Stack spacing={2.5} textAlign="left">
                  <Typography variant="h6" sx={{...cardTitleSx, justifyContent: 'flex-start'}}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2"  sx={{ fontFamily: 'Inter Variable', fontSize: '18px', color: '#ffffff80' }}>
                    {f.description}
                  </Typography>
                </Stack>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
