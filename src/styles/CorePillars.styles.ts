import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type Sx = SystemStyleObject<Theme>;

export const sectionSx: Sx = {
  color: 'common.white',
  py: { xs: 8, md: 6 },
};

export const panelSx: Sx = {
  p: { xs: 3, md: 6 },
  borderRadius: 3,
  mx: 'auto',
  bgcolor: 'transparent',
  backdropFilter: 'blur(4px)',
};

export const gridSx: Sx = {
  display: 'grid',
  gap: { xs: 4, md: 6 },
  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' },
};

export const cardPaperSx: Sx = {
  bgcolor: 'transparent',
  p: { xs: 1, md: 2 },
};

export const cardStackSx: Sx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 1.5,
};

export const iconWrapperSx: Sx = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  overflow: 'hidden',
  backgroundColor: 'transparent',
  p: 1,
};

export const iconImgSx: Sx = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
};

export const cardTitleSx: Sx = {
  fontFamily: 'Inter Variable',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: { xs: '20px', md: '30px' },
  lineHeight: '140%',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mt: 1,
  color: 'white',
};

export const cardInitial = { opacity: 0, y: 20 } as const;
export const cardWhileInView = { opacity: 1, y: 0 } as const;
export const cardViewport = { once: true, amount: 0.3 } as const;
export const cardWhileHover = { y: -4 } as const;
export const getCardTransition = (idx: number) => ({ duration: 0.5, delay: idx * 0.08 });
