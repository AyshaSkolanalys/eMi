import { Box, Container, Typography, Button, useTheme, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { titleSx } from '../styles/AdaptiveSection.styles';
import { subtitleItalicSx } from '../styles/HowItWorks.styles';
import { ctaButtonSx, para1Sx } from '../styles/Hero.styles';

export type WhatsNextProps = {
  fadedHeading?: string; // big ghost heading in the background
  productTitle?: string; // orange title (e.g., "eMi 2.0")
  subtitle?: string; // italic paragraph under title
  note?: string; // small muted text ("Stay tuned")
  mascotSrc: string; // import your image and pass it
  mascotAlt?: string;
  ctaText?: string; // "Curious? Let's Talk."
  onCtaClick?: () => void;
};

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const appear: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
export default function WhatsNext({
  productTitle = 'eMi 2.0',
  subtitle = 'A friendly classroom bot that engages preschoolers directly — guiding them through playful activities and nurturing growth, all while supporting teachers in the background.',
  note = 'Stay tuned',
  mascotSrc,
  mascotAlt = 'Next-gen mascot',
  ctaText = 'Curious? Let’s Talk.',
  onCtaClick,
}: WhatsNextProps) {
  const theme = useTheme();

  return (
    <Box
      id="next"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Faded giant heading */}

      <Container maxWidth="lg">
        <MotionBox variants={appear} initial="hidden" animate="show">
          {/* Mascot with PLAY overlay */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 3, md: 4 } }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <MotionPaper
                elevation={0}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                sx={{ borderRadius: 3, overflow: 'hidden', background: 'transparent' }}
              >
                <Box
                  component="img"
                  src={mascotSrc}
                  alt={mascotAlt}
                  sx={{ width: { xs: 220, md: 300 }, height: 'auto', display: 'block' }}
                />
              </MotionPaper>
            </Box>
          </Box>

          {/* Title */}
          <Typography variant="h4" align="center" sx={{ ...titleSx, my: '3rem' }}>
            {productTitle}
          </Typography>

          {/* Subtitle (italic) */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              ...subtitleItalicSx,
              color: theme.palette.text.primary,
              opacity: 0.9,
              lineHeight: 1.6,
              mb: { xs: 3, md: 4 },
            }}
          >
            {subtitle}
          </Typography>

          {/* Note + CTA */}
          <Stack spacing={2.5} alignItems="center">
            <Typography
              variant="body2"
              sx={{ ...para1Sx, color: '#0E1C2966', my: '3rem !important' }}
            >
              {note}
            </Typography>

            <Button
              size="large"
              sx={{ ...ctaButtonSx, width: '245px' }}
              onClick={onCtaClick}
              href="#request-demo"
            >
              {ctaText}
            </Button>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}
