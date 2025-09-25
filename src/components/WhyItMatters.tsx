import { Box, Container, Paper, Stack, Typography, useTheme } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
import { titleSx } from '../styles/AdaptiveSection.styles';
import { cardTitleSx } from '../styles/CorePillars.styles';

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
const MotionItem = motion(Box);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function WhyItMatters({
  title = 'Why It Matters',
  imageSrc,
  imageAlt = 'Illustration of kids and teachers',
  features = [
    {
      title: 'The Challenge',
      description:
        'Preschool teachers manage many children at once, each with different strengths and needs. Some require extra support, others more challenge, and it’s difficult to give personalized attention to everyone. Regular tablets and apps add distractions, making focused learning even harder.',
    },
    {
      title: 'The Opportunity',
      description: (
        <>
          Technology now makes personalization possible, in a safe and structured way. <br />
          With adaptive AI, curriculum-aligned content, and engaging activities, digital tools can
          finally support teachers, instead of adding more work.
        </>
      ),
    },
    {
      title: 'The eMi Difference',
      description: (
        <>
          For Children: Learn at their own pace with a mascot that guides, motivates, and celebrates
          progress. <br />
          <br />
          For Teachers: Real-time tracking and feedback lighten the workload and free time for care.{' '}
          <br />
          <br />
          For Schools & Parents: Curriculum-aligned, multilingual, and offline-first — making eMi
          inclusive and reliable.
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
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={containerVariants} initial="hidden" animate="show">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3" sx={titleSx}>
              {title}
            </Typography>

            {/* Illustration */}
            <MotionPaper
              layout
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              elevation={0}
              sx={{
                width: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                marginTop: '3rem !important',
                marginBottom: '3rem !important',
                backgroundColor: theme.palette.mode === 'dark' ? '#e9eef3' : '#f3f6fa',
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={imageAlt}
                sx={{
                  display: 'block',
                  width: '100%',
                  height: { xs: 200, sm: 260, md: 300 },
                  objectFit: 'cover',
                }}
              />
            </MotionPaper>
          </Stack>

          {/* Features: 3 column flex */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 },
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
                  flex: '1 1 320px',
                  minWidth: { xs: '100%', sm: 320 },
                  maxWidth: { md: '33.333%' },
                }}
              >
                <Stack spacing={1.5} textAlign="left" alignItems="baseline">
                  <Typography variant="h6" sx={cardTitleSx}>
                    {f.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: 'Inter Variable', fontSize: '18px', color: '#ffffff80' }}
                  >
                    {f.description}
                  </Typography>
                </Stack>
              </MotionItem>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
