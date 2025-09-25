// src/components/HowItWorks.tsx
import { Box, Container, Paper, Stack, Typography, useTheme, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';
import { titleSx } from '../styles/AdaptiveSection.styles';
import { subtitleItalicSx } from '../styles/HowItWorks.styles';
import { para1Sx } from '../styles/Hero.styles';
import { cardTitleSx } from '../styles/CorePillars.styles';

export type Feature = {
  title: string;
  description: string;
};

export type HowItWorksProps = {
  title?: string;
  subtitle?: string;
  blurb?: string;
  imageSrc: string;
  imageAlt?: string;
  features?: Feature[]; // 4 items (renders 2x2 on md+, stacked on mobile)
};

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);
const MotionItem = motion(Box);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function HowItWorks({
  title = 'How it Works',
  subtitle = 'Seamless for Teachers. Engaging for Kids.',
  blurb = 'eMi is designed to fit into any preschool classroom — no complicated setup, no distractions, just learning that feels like play.',
  imageSrc,
  imageAlt = 'Kids learning with tablets',
  features = [
    {
      title: 'Tablet in the Classroom',
      description:
        'A dedicated iPad or Android tablet stays in the classroom, preloaded with eMi. It works fully offline, syncing progress once online.',
    },
    {
      title: 'Play Adaptive Games',
      description:
        'Each child has their own profile. They choose their avatar and favorite mascot, who guides them through every activity.',
    },
    {
      title: 'Teacher Oversight',
      description:
        'Teachers can track progress on the dashboard, see where each child needs help, and gently nudge unfinished tasks.',
    },
    {
      title: 'Always in Sync',
      description:
        'All results are stored safely offline and sync automatically when the device connects to the internet.',
    },
  ],
}: HowItWorksProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={containerVariants} initial="hidden" animate="show">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              background: 'transparent',
            }}
          >
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography variant="h3" sx={titleSx}>
                {title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  ...subtitleItalicSx,
                  marginTop: '3.5rem !important',
                  marginBottom: '3rem !important',
                }}
              >
                {subtitle}
              </Typography>

              {/* Illustration */}
              <MotionPaper
                layout
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                elevation={0}
                sx={{
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: 'transparent',
                }}
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={imageAlt}
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 220, sm: 280, md: 320 },
                    objectFit: 'cover',
                  }}
                />
              </MotionPaper>

              <Divider
                flexItem
                sx={{
                  width: '100%',
                  opacity: 0.16,
                  borderColor:
                    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.12)',
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  ...para1Sx,
                  color: '#ffffff80',
                  marginTop: '3rem !important',
                  marginBottom: '3rem !important',
                }}
              >
                {blurb}
              </Typography>
            </Stack>
            <Box
              sx={{
                mt: { xs: 2, md: 4 },
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 3, md: 4 },
              }}
            >
              {features.map((f, i) => (
                <MotionItem
                  key={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  sx={{
                    flex: '1 1 100%',
                    maxWidth: { xs: '100%', md: '45%' },
                    pr: { md: 1 },
                  }}
                >
                  <Stack spacing={1.2} alignItems="baseline">
                    <Typography variant="h6" sx={cardTitleSx}>
                      {f.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ...para1Sx,
                        color: '#ffffff80',
                        textAlign: 'left',
                        marginBottom: '3rem !important',
                        marginTop: '1rem !important',
                      }}
                    >
                      {f.description}
                    </Typography>
                  </Stack>
                </MotionItem>
              ))}
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
}
