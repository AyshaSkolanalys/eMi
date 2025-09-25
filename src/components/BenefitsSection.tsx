import { Box, Container, Paper, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ChildrenImg from '../assets/images/children.png';
import TeachersImg from '../assets/images/teachers.png';
import ParentsImg from '../assets/images/parents.png';
import type { Variants, TargetAndTransition } from 'framer-motion';
import { titleSx } from '../styles/AdaptiveSection.styles';
import { cardTitleSx } from '../styles/CorePillars.styles';

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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.08,
      duration: 0.45,
      ease: 'easeOut',
    },
  }),
};

export default function BenefitsSection({
  heading = 'Benefits',
  items = [
    {
      imageSrc: ChildrenImg,
      imageAlt: 'For Children',
      title: 'For Children',
      points: [
        'Learning feels like play, guided by a trusted mascot.',
        'Builds confidence through encouragement and small celebrations.',
        'Adaptive challenges help every child progress at their own pace.',
      ],
    },
    {
      imageSrc: TeachersImg,
      imageAlt: 'For Teachers',
      title: 'For Teachers',
      points: [
        'Less stress tracking progress manually.',
        'Easy-to-use dashboard with real-time insights.',
        'More time to focus on care, creativity, and meaningful interactions.',
      ],
    },
    {
      imageSrc: ParentsImg,
      imageAlt: 'For Schools & Parents',
      title: 'For Schools & Parents',
      points: [
        'Safe, structured, distraction-free learning environment.',
        'Curriculum aligned and multilingual.',
        'A consistent, reliable way to support every child’s development.',
      ],
    },
  ],
}: BenefitsSectionProps) {
  const theme = useTheme();
  const MotionItem = motion(Box);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          <Typography
            variant="h3"
            align="center"
            sx={{ ...titleSx, marginBottom: '3rem !important' }}
          >
            {heading}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 5, md: 6 },
            }}
          >
            {items.map((it, i) => (
              <MotionItem
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                sx={{ flex: 1 }}
              >
                <Stack spacing={2} alignItems="baseline">
                  <MotionPaper
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 16 }}
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      backgroundColor: theme.palette.mode === 'dark' ? '#e9eef3' : '#f3f6fa',
                      width: '100%',
                      aspectRatio: '16/9',
                      marginBottom: '2rem !important',
                    }}
                  >
                    <Box
                      component="img"
                      src={it.imageSrc}
                      alt={it.imageAlt || it.title}
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </MotionPaper>

                  <Typography variant="h5" sx={{ ...cardTitleSx, marginBottom: '1rem !important' }}>
                    {it.title}
                  </Typography>

                  <Stack spacing={1.4}>
                    {it.points.map((p, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          fontFamily: 'Inter Variable',
                          fontSize: '18px',
                          color: '#ffffff80',
                          textAlign: 'left',
                        }}
                      >
                        {p}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </MotionItem>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
