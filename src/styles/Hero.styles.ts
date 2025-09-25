// src/styles/Hero.styles.ts
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type Sx = SystemStyleObject<Theme>;

export const para1Sx: Sx = {
  fontFamily: 'Inter Variable, Inter, system-ui, sans-serif',
  fontWeight: 500,
  fontSize: '1.125rem',
  lineHeight: 1.6,
  letterSpacing: '-0.02em',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
};

export const headlineSx: Sx = {
  color: 'common.white',
  fontWeight: 700,
  letterSpacing: { xs: -0.5, md: -1 },
  lineHeight: 1.05,
  fontSize: { xs: 38, sm: 52, md: 96 },
  fontFamily: 'Inter Variable, Inter, system-ui, sans-serif',
};

export const pillGradientSx: Sx = {
  px: 3,
  py: 1,
  borderRadius: 999,
  color: '#fff',
  textTransform: 'none',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #FFA726 0%, #FB8C00 50%, #F57C00 100%)',
  boxShadow: '0 6px 16px rgba(245,124,0,0.35)',
  '&:hover': {
    background: 'linear-gradient(135deg, #FFB74D 0%, #FF9800 50%, #F57C00 100%)',
    boxShadow: '0 8px 20px rgba(245,124,0,0.45)',
  },
};

export const ctaButtonSx: Sx = {
  ...pillGradientSx,
  fontFamily: 'Inter Variable, Inter, system-ui, sans-serif',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.6,
  fontSize: '1rem',
  px: 4,
  py: 1.2,
  mt: 1,
  width: '205px',
  height: '64px',
};
export const para2Sx: Sx = {
  fontFamily: 'Inter Variable, sans-serif',
  color: 'common.white',
  textDecoration: 'none',
  fontWeight: 500, // Medium
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '160%',
  letterSpacing: '-0.02em',
  textAlign: 'center', // horizontal center
  display: 'flex',
  alignItems: 'center', // vertical middle
  justifyContent: 'center', // center horizontally inside flex
};
export const heroRootSx: Sx = {
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
  m: 0,
};

export const bgImageSx: Sx = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,
};

export const vignetteSx: Sx = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(100% 600px at 50% 60%, rgba(0,0,0,0.15), rgba(0,0,0,0.75))',
  zIndex: 1,
};

export const appBarSx: Sx = {
  top: 0,
  background: 'transparent',
  color: 'common.white',
  zIndex: 2,
};

export const heroContainerSx: Sx = {
  position: 'relative',
  zIndex: 2,
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
  py: 0,
};

export const logoImgSx: Sx = {
  mx: 'auto',
  width: { xs: 84, md: 120 },
  height: 'auto',
  mb: { xs: 1, md: 2 },
  filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.4))',
  alignSelf: 'center',
};
