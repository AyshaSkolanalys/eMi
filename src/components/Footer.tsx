// Footer.tsx
import { Box, Container, Typography } from '@mui/material';

export type FooterProps = {
  company?: string;
  year?: number;
  sx?: object;
};

export default function Footer({
  company = 'eMi',
  year = new Date().getFullYear(),
  sx,
}: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000',
        color: '#9CA3AF',
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            borderTop: '1px solid #1F1F1F',
            py: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontSize: 12, color: 'rgba(255,255,255,0.72)' }}>
            © {year}. All Rights Reserved. {company}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
