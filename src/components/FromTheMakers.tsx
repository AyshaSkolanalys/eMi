// src/components/FromTheMakers.tsx
import type { ReactNode } from 'react';
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';

import SkolanalysIllustration from '../assets/images/skolanalys-illustration.png';
import MyranScreenshot from '../assets/images/myran-screenshot.png';
import { subtitleItalicSx } from '../styles/HowItWorks.styles';
import { cardTitleSx } from '../styles/CorePillars.styles';
import { para1Sx } from '../styles/Hero.styles';
import { para4Sx } from '../styles/FeaturesSection.styles';
import SkolanalysLogo from '../assets/images/skolanalys.svg';
import MyranLogo from '../assets/images/myran.svg';

type MakerItem = {
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  href?: string;
  reverse?: boolean;
};

export type FromTheMakersProps = {
  introTop?: ReactNode;
  introBottom?: ReactNode;
  items?: MakerItem[];
};

const MotionBox = motion(Box);
const MotionItem = motion(Box);

const appear: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function FromTheMakers({
  introTop = (
    <>
      From the makers of &nbsp;
      <Box component="span" sx={{ color: '#4EA3FF', fontWeight: 600 }}>
        Skolanalys
      </Box>
      &nbsp; and &nbsp;
      <Box component="span" sx={{ color: '#C874FF', fontWeight: 600 }}>
        Myran
      </Box>
    </>
  ),
  introBottom = (
    <>
      Our work in the Swedish education sector goes beyond vision — <br></br>it’s rooted in real,
      on-the-ground impact.
    </>
  ),
  items = [
    {
      logoSrc: SkolanalysLogo,
      logoAlt: 'Skolanalys',
      title:
        'Smart follow-up in schools helps educational institutions and municipalities to facilitate systematic quality work',
      description:
        'We analyze school and pupils’ results using AI and present them in an understandable and easily accessible manner. We identify correlations and patterns and make predictions about future outcomes quickly. With the help of Skolanalys, you can track initiatives, identify challenges and strengths, and plan for future actions.',
      imageSrc: SkolanalysIllustration,
      ctaText: 'Read more',
      href: 'https://skolanalys.se/se/',
    },
    {
      logoSrc: MyranLogo,
      logoAlt: 'Myran',
      title: 'Knowledge development in preschool at group level',
      description:
        'Myran is created to increase children’s curiosity and desire to learn. With the help of Myran, you get a formative assessment of the children’s skills and can follow their development over time at group level. The result is analyzed with the help of digital technology and presented broken down by knowledge criteria, age and gender.',
      imageSrc: MyranScreenshot,
      ctaText: 'Read more',
      reverse: true,
      href: 'https://myranappen.se/',
    },
  ],
}: FromTheMakersProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Intro */}
        <MotionBox variants={appear} initial="hidden" animate="show">
          <Stack spacing={1.2} alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h6"
              sx={{ ...subtitleItalicSx, display: { xs: 'none', md: 'block' } }}
            >
              {introTop}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '32px',
                display: { xs: 'block', md: 'none' },
              }}
            >
              From the makers of
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>
                {' '}
                <Box component="span" sx={{ color: '#4EA3FF', fontWeight: 600 }}>
                  Skolanalys
                </Box>{' '}
                and{' '}
                <Box component="span" sx={{ color: '#C874FF', fontWeight: 600 }}>
                  Myran
                </Box>
              </Box>
            </Typography>
            <Typography variant="h6" sx={subtitleItalicSx}>
              {introBottom}
            </Typography>
          </Stack>
        </MotionBox>

        {/* Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
          {items.map((it, i) => {
            const Content = (
              <Stack spacing={2} sx={{ flex: 1, minWidth: 0 }}>
                {/* Brand line (optional logo) */}
                <Stack direction="row" spacing={1.2} alignItems="center">
                  {it.logoSrc && (
                    <Box
                      component="img"
                      src={it.logoSrc}
                      alt={it.logoAlt || it.brandName || 'brand'}
                      sx={{ objectFit: 'contain' }}
                    />
                  )}
                  {it.brandName && (
                    <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                      {it.brandName}
                    </Typography>
                  )}
                </Stack>

                <Typography variant="h5" sx={{ ...cardTitleSx, textAlign: 'left' }}>
                  {it.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ...para1Sx, color: '#FFFFFF80', textAlign: 'left' }}
                >
                  {it.description}
                </Typography>

                {(it.ctaText || it.href) && (
                  <Box>
                    <Button
                      component={it.href ? 'a' : 'button'}
                      href={it.href ?? undefined}
                      target={it.href ? '_blank' : undefined}
                      rel={it.href ? 'noopener noreferrer' : undefined}
                      onClick={it.onCtaClick}
                      size="small"
                      variant="contained"
                      sx={{
                        ...para4Sx,
                        textTransform: 'none',
                        borderRadius: 999,
                        px: 2.2,
                        py: 0.6,
                        width: '133px',
                        height: '38px',
                        backgroundColor: theme.palette.mode === 'dark' ? '#1A1F24' : '#000',

                        color: '#fff',
                        boxShadow: 'none',
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#14171A' : '#111',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      {it.ctaText || 'Read more'}
                    </Button>
                  </Box>
                )}
              </Stack>
            );

            const Visual = (
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={it.imageSrc}
                  alt={it.imageAlt || it.brandName || 'illustration'}
                  sx={{
                    width: '100%',
                    maxWidth: 520,
                    height: 'auto',
                    borderRadius: 2,
                    objectFit: 'contain',
                  }}
                />
              </Box>
            );

            return (
              <MotionItem
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: it.reverse ? 'row-reverse' : 'row' },
                    gap: { xs: 3, md: 6 },
                    alignItems: 'center',
                  }}
                >
                  {Content}
                  {Visual}
                </Box>
              </MotionItem>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
