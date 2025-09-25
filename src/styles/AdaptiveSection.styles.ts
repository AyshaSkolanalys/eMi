import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type Sx = SystemStyleObject<Theme>;

export const sectionSx: Sx = {
  bgcolor: '#0b0b0b',
  color: 'common.white',
  py: { xs: '4rem', md: '6rem' },
  position: 'relative',
  overflow: 'hidden',
};

export const containerSx: Sx = {
  textAlign: 'center',
};

export const titleSx: Sx = {
  fontFamily: 'Inter Variable',
  color: 'orange.400',
  fontWeight: 700,
  fontSize: { xs: '1.8rem', md: '3rem' },
  backgroundImage: 'linear-gradient(90deg, #EE7900 0%, #F29408 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const imageSx: Sx = {
  width: '100%',
  maxWidth: '900px',
  mx: 'auto',
  borderRadius: 2,
  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
  display: 'block',
};

export const imageMotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true },
} as const;
