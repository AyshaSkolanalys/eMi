import React from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  Link as MLink,
  Stack,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'

type LinkItem = { label: string; href: string }

const LINKS: LinkItem[] = [
  { label: 'Discover eMi', href: '#discover' },
  { label: 'Inside eMi', href: '#inside' },
  { label: 'Meet the Mascot', href: '#mascot' },
  { label: "What’s Next", href: '#next' },
  { label: 'About us', href: '#about' },
]

export default function HeroBanner({
  bgSrc,
  logoSrc,
  onRequestDemo,
}: {
  bgSrc: string
  logoSrc: string
  onRequestDemo?: () => void
}) {
  const [open, setOpen] = React.useState(false)

  const linkStyles = {
    color: 'common.white',
    opacity: 0.95,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: 14,
    '&:hover': { opacity: 1, textDecoration: 'none' },
  } as const

  const pillGradient = {
    px: 3,
    py: 1,
    borderRadius: 999,
    color: '#fff',
    fontWeight: 600,
    textTransform: 'none' as const,
    background: 'linear-gradient(135deg, #FFA726 0%, #FB8C00 50%, #F57C00 100%)',
    boxShadow: '0 6px 16px rgba(245,124,0,0.35)',
    '&:hover': {
      background:
        'linear-gradient(135deg, #FFB74D 0%, #FF9800 50%, #F57C00 100%)',
      boxShadow: '0 8px 20px rgba(245,124,0,0.45)',
    },
  }

  return (
    <Box
      position="relative"
      sx={{
        minHeight: '100vh',  // full viewport height
        width: '100%',       // full width
        overflow: 'hidden',
        m: 0,
      }}
    >
      {/* FULL-WIDTH BACKGROUND */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,            // cover entire hero
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* OVERLAY / VIGNETTE */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(100% 600px at 50% 60%, rgba(0,0,0,0.15), rgba(0,0,0,0.75))',
          zIndex: 1,
        }}
      />

      {/* NAVBAR OVER BANNER */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ top: 0, background: 'transparent', color: 'common.white', zIndex: 2 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            {/* centered links (desktop) */}
            <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, mx: 'auto' }}>
              {LINKS.map((l) => (
                <MLink key={l.href} href={l.href} sx={linkStyles}>
                  {l.label}
                </MLink>
              ))}
            </Box>

            {/* contact (desktop) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
              <Button href="#contact" sx={pillGradient}>
                Contact
              </Button>
            </Box>

            {/* hamburger (mobile) */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 'auto', color: 'common.white' }}
              aria-label="Open Menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <List>
            {LINKS.map((l) => (
              <ListItemButton
                key={l.href}
                component="a"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </ListItemButton>
            ))}
            <Box sx={{ p: 2 }}>
              <Button fullWidth href="#contact" sx={pillGradient} onClick={() => setOpen(false)}>
                Contact
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>

      {/* HERO CONTENT (CONSTRAINED TO 1200PX) */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
          py: 0,
        }}
      >
        <Stack
          spacing={3}
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ maxWidth: 980, mx: 'auto' }}
        >
          {/* eMi LOGO (IMAGE) */}
          <Box
            component="img"
            src={logoSrc}
            alt="eMi logo"
            sx={{
              mx: 'auto',
              width: { xs: 84, md: 120 },
              height: 'auto',
              mb: { xs: 1, md: 2 },
              filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.4))',
              alignSelf:'center'
            }}
          />

          {/* HEADLINE */}
          <Typography
            variant="h1"
            sx={{
              color: 'common.white',
              fontWeight: 900,
              letterSpacing: { xs: -0.5, md: -1 },
              lineHeight: 1.05,
              fontSize: { xs: 38, sm: 52, md: 80 },
            }}
          >
            Preschool’s <Box component="span" sx={{ display: 'block' }}>New Best Buddy</Box>
          </Typography>

          {/* SUBHEAD */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 400,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            An AI-powered companion that supports little learners in language, math, and emotional
            growth — while giving teachers more time to do what they do best: care.
          </Typography>

          {/* CTA */}
          <Box>
            <Button
              size="large"
              sx={{ ...pillGradient, px: 4, py: 1.2, fontSize: 16, mt: 1 }}
              onClick={onRequestDemo}
              href="#request-demo"
            >
              Request Demo
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
