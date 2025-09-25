import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type Sx = SystemStyleObject<Theme>;

export const subtitleItalicSx: Sx = {
  fontFamily: 'Georgia, serif',
  fontWeight: 400,
  fontStyle: 'italic',
  fontSize: '32px',
  lineHeight: '140%',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};
