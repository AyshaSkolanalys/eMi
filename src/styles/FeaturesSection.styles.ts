import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type Sx = SystemStyleObject<Theme>;

export const body3Sx: Sx = {
  fontFamily: 'Inter Variable, sans-serif',
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '130%',
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
};

export const para4Sx: Sx = {
  fontFamily: 'Inter Variable, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '160%',
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF80',
};
