// src/components/TeamSection.tsx
import { Box, Container, Stack, Typography, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';

import NordicLogo from '../assets/images/2mnordic.png';
import FoxsyLogo from '../assets/images/foxsy.png';
import AiLogo from '../assets/images/ai.png';
import HelsingborgLogo from '../assets/images/helsingborg.png';
import UniversityLogo from '../assets/images/university.png';
import EuropUnionLogo from '../assets/images/europe-union.jpg';
import MariusImage from '../assets/images/MariusImage.png';
import AdrianImage from '../assets/images/AdrianImage.png';
import SebastianImage from '../assets/images/SebastianImage.png';
import { titleSx } from '../styles/AdaptiveSection.styles';
import { para1Sx } from '../styles/Hero.styles';
import { body3Sx } from '../styles/FeaturesSection.styles';

type Partner = {
  logoSrc: string; // import and pass in
  alt: string;
  href?: string; // optional link
  maxWidth?: number; // optional per-logo max width (px)
};

export type TeamSectionProps = {
  title?: string;
  description?: string;
  partnersLabel?: string;
  partners?: Partner[];
};

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function TeamSection({
  title = 'The Team',
  description = `Our team brings together preschool educators, social workers, and award-winning robotics engineers — guided by visionary leaders deeply rooted in the Swedish early education system. With proven experience in child development and technology, we're building tools that truly understand the classroom.`,
  partnersLabel = 'Partners',
  partners = [
    { logoSrc: NordicLogo, alt: '2Mnordic', maxWidth: 130, href: 'https://2mnordic.com/' },
    { logoSrc: FoxsyLogo, alt: 'FOXSY.AI', maxWidth: 140, href: 'https://foxsy.ai/' },
    { logoSrc: AiLogo, alt: 'AI Sweden', maxWidth: 90, href: 'https://www.ai.se/sv' },
    { logoSrc: HelsingborgLogo, alt: 'Helsingborg', maxWidth: 80, href: 'https://helsingborg.se/' },
    {
      logoSrc: UniversityLogo,
      alt: 'University Partner',
      maxWidth: 110,
      href: 'https://familjenhelsingborg.se/',
    },
    {
      logoSrc: EuropUnionLogo,
      alt: 'Europe Union',
      maxWidth: 110,
    },
  ],
}: TeamSectionProps) {
  const theme = useTheme();

  const teamMembers = [
    {
      imageSrc: MariusImage,
      imageAlt: 'Marius Image',
      title: 'Marius',
      designation: 'CEO',
      description:
        'Marius, with over 20 years of IT experience, is a continuous learner passionate about business development and innovation, in the setting of new technology.',
    },
    {
      imageSrc: AdrianImage,
      imageAlt: 'Adrian Image',
      title: 'Adrian',
      designation: 'CRO',
      description:
        'Adrian, a NYC tech entrepreneur with a PhD in Physics and a Master’s in Computer Science, leads ventures in fintech and AI, driven by his passion for startups, blockchain, and artificial intelligence.',
    },
    {
      imageSrc: SebastianImage,
      imageAlt: 'Sebastian Image',
      title: 'Sebastian',
      designation: 'Senior AI and Robotics Advisor',
      description:
        'Sebastian, a 22+ year AI and robotics pioneer. He won 1st place in RoboCup’s Cooperative Challenge and secured 4x 3rd place finishes in the main competition, showcasing his innovation and leadership.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' ? '#F4F7FA' : '#F4F7FA',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Typography variant="h4" sx={titleSx}>
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{ ...para1Sx, color: '#19191999', my: '3rem !important' }}
            >
              {description}
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              justifyContent="center"
              alignItems="stretch"
              sx={{ flexWrap: 'wrap', marginBottom: '80px !important' }}
            >
              {teamMembers.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  style={{ flex: 1, minWidth: 280, maxWidth: 400 }}
                >
                  <Stack
                    spacing={2}
                    textAlign="left"
                    alignItems="flex-start"
                    sx={{
                      backgroundColor: '#000',
                      color: 'white',
                      height: '100%',
                    }}
                  >
                    <MotionPaper
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 140, damping: 16 }}
                      elevation={0}
                      sx={{
                        borderRadius: 0,
                        overflow: 'hidden',
                        width: '100%',
                        height: 'auto',
                      }}
                    >
                      <Box
                        component="img"
                        src={p.imageSrc}
                        alt={p.imageAlt}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </MotionPaper>

                    <Box sx={{ px: 2, pb: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'Inter Variable',
                          fontWeight: 700,
                          color: 'white',
                          mb: 0.5,
                        }}
                      >
                        {p.title}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: 'Inter Variable',
                          fontWeight: 400,
                          color: '#ffffff80',
                          mb: 2,
                        }}
                      >
                        {p.designation}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Inter Variable',
                          fontSize: '16px',
                          color: '#ffffffb3',
                          lineHeight: 1.6,
                        }}
                      >
                        {p.description}
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              ))}
            </Stack>

            <Typography variant="subtitle2" sx={{ ...body3Sx, color: '#19191999' }}>
              {partnersLabel}
            </Typography>
          </Stack>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
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
                    transition: 'opacity .2s ease, transform .2s ease',
                    '&:hover': { opacity: 1, transform: 'translateY(-2px)' },
                  }}
                >
                  <Box
                    component="img"
                    src={p.logoSrc}
                    alt={p.alt}
                    sx={{
                      display: 'block',
                      height: 'auto',
                      maxWidth: p.maxWidth ?? 140,
                      width: '100%',
                    }}
                  />
                </MotionBox>
              );

              return p.href ? (
                <Box
                  key={p.alt + '_link'}
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
