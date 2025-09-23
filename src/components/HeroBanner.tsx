import React from 'react'
import {
  AppBar, Toolbar, Container, Box, Button, IconButton, Drawer, List, ListItemButton, Link as MLink, Stack, Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'
import {
  headlineSx, para1Sx, pillGradientSx, ctaButtonSx,
  heroRootSx, bgImageSx, vignetteSx, appBarSx, heroContainerSx, logoImgSx,
  para2Sx,
} from '../styles/Hero.styles'

const LINKS = [
  { label: 'Discover eMi', href: '#discover' },
  { label: 'Inside eMi', href: '#inside' },
  { label: 'Meet the Mascot', href: '#mascot' },
  { label: "What’s Next", href: '#next' },
  { label: 'About us', href: '#about' },
] as const

const NAV_OFFSET = 72 // Toolbar height

export default function HeroBanner({
  bgSrc,
  logoSrc,
  onRequestDemo,
}: { bgSrc: string; logoSrc: string; onRequestDemo?: () => void }) {
  const [open, setOpen] = React.useState(false)

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET
    window.scrollTo({ top: y, behavior: 'smooth' })
    history.pushState(null, '', href) // optional: sync URL
  }

  return (
    <Box position="relative" sx={heroRootSx}>
      {/* FULL-WIDTH BACKGROUND — ignore pointer events so it never blocks clicks */}
      <Box
        aria-hidden
        sx={{ ...bgImageSx, backgroundImage: `url(${bgSrc})`, pointerEvents: 'none', zIndex: 0 }}
      />

      {/* OVERLAY / VIGNETTE — also ignore pointer events */}
      <Box aria-hidden sx={{ ...vignetteSx, pointerEvents: 'none', zIndex: 1 }} />

      {/* NAVBAR OVER BANNER — ensure it's above overlays */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={(theme) => ({ ...appBarSx, zIndex: theme.zIndex.appBar + 2 })}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: NAV_OFFSET }}>
            <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, mx: 'auto' }}>
              {LINKS.map(l => (
                <MLink
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  sx={{ ...para2Sx, cursor: 'pointer', pointerEvents: 'auto' }}
                >
                  {l.label}
                </MLink>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
              <Button
                href="#contact"
                sx={pillGradientSx}
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact
              </Button>
            </Box>

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
            {LINKS.map(l => (
              <ListItemButton
                key={l.href}
                component="a"
                href={l.href}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  requestAnimationFrame(() => handleNavClick(e as any, l.href))
                }}
              >
                {l.label}
              </ListItemButton>
            ))}
            <Box sx={{ p: 2 }}>
              <Button
                fullWidth
                href="#contact"
                sx={pillGradientSx}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  requestAnimationFrame(() => handleNavClick(e as any, '#contact'))
                }}
              >
                Contact
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>

      {/* HERO CONTENT */}
      <Container maxWidth="lg" sx={heroContainerSx}>
        <Stack
          spacing={3}
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ maxWidth: 980, mx: 'auto' }}
        >
          <Box component="img" src={logoSrc} alt="eMi logo" sx={logoImgSx} />

          <Typography variant="h1" sx={headlineSx}>
            Preschool’s <Box component="span" sx={{ display: 'block' }}>New Best Buddy</Box>
          </Typography>

          <Typography variant="h6" sx={para1Sx}>
            An AI-powered companion that supports little learners in language, math, and emotional
            growth — while giving teachers more time to do what they do best: care.
          </Typography>

          <Box>
            <Button size="large" sx={ctaButtonSx} onClick={onRequestDemo} href="#request-demo">
              Request Demo
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
