import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type Sx = SystemStyleObject<Theme>;

export const subtitleItalicLeftSx: Sx = {
  fontFamily: 'Georgia, serif',
  fontWeight: 400,
  fontStyle: 'italic',
  fontSize: { xs: '24px', md: '32px' },
  lineHeight: '140%',
  letterSpacing: '-0.02em',
  color: 'white',
  textAlign: 'left',
};

export const para3Sx: Sx = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '160%',
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF80',
};
