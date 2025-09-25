import React from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import {
  headlineSx,
  para1Sx,
  pillGradientSx,
  ctaButtonSx,
  heroRootSx,
  bgImageSx,
  vignetteSx,
  appBarSx,
  heroContainerSx,
  logoImgSx,
  para2Sx,
} from '../styles/Hero.styles';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const LINKS = [
  { label: 'Discover eMi', href: '#discover' },
  { label: 'Inside eMi', href: '#inside' },
  { label: 'Meet the Mascot', href: '#mascot' },
  { label: 'What’s Next', href: '#next' },
  { label: 'About us', href: '#about' },
] as const;

const NAV_HEIGHT = 72;
const NAV_HEIGHT_SCROLLED = 64;
const SCROLL_TRIGGER = 8;

export default function HeroBanner({
  bgSrc,
  logoSrc,
  onRequestDemo,
}: {
  bgSrc: string;
  logoSrc: string;
  onRequestDemo?: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const toolbarRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_TRIGGER);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const toolbarH =
      toolbarRef.current?.getBoundingClientRect().height ??
      (scrolled ? NAV_HEIGHT_SCROLLED : NAV_HEIGHT);
    const y = el.getBoundingClientRect().top + window.pageYOffset - toolbarH - 8;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, '', href);
  };

  return (
    <Box position="relative" sx={heroRootSx}>
      {/* Background */}
      <Box
        aria-hidden
        sx={{ ...bgImageSx, backgroundImage: `url(${bgSrc})`, pointerEvents: 'none', zIndex: 0 }}
      />
      <Box aria-hidden sx={{ ...vignetteSx, pointerEvents: 'none', zIndex: 1 }} />
      <AppBar
        position={scrolled ? 'fixed' : 'absolute'}
        elevation={0}
        color="transparent"
        sx={(theme) => ({
          ...appBarSx,
          zIndex: theme.zIndex.appBar + 2,
          transition:
            'background .25s ease, backdrop-filter .25s ease, border-color .25s ease, box-shadow .25s ease',
          background: scrolled ? 'rgba(12,12,12,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.25)' : 'none',
        })}
      >
        <Container maxWidth="lg">
          <Toolbar
            ref={toolbarRef}
            disableGutters
            sx={{
              minHeight: scrolled ? NAV_HEIGHT_SCROLLED : NAV_HEIGHT,
              transition: 'min-height .2s ease',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              component="a"
              href={import.meta.env?.BASE_URL ?? '/'}
              onClick={(e) => {
                const base = (import.meta.env?.BASE_URL ?? '/').replace(/\/+$/, '');
                const here = location.pathname.replace(/\/+$/, '');
                if (here === base) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  history.replaceState(null, '', base || '/');
                }
              }}
              aria-label="Go to homepage"
              sx={{
                display: { xs: scrolled ? 'inline-flex' : 'none', md: 'inline-flex' },
                alignItems: 'center',
                lineHeight: 0,
                cursor: 'pointer',
                opacity: scrolled ? 1 : 0,
                pointerEvents: scrolled ? 'auto' : 'none',
                transition: 'opacity .2s ease',
              }}
            >
              <Box component="img" src={logoSrc} alt="eMi logo" sx={{ ...logoImgSx, height: 28 }} />
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: 'auto',
                alignItems: 'center',
                gap: 2,
                py: '1rem',
              }}
            >
              <Box component="nav" sx={{ display: 'flex', gap: 5 }}>
                {LINKS.map((l) => (
                  <MLink
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    sx={{
                      ...para2Sx,
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.92)',
                      textDecoration: 'none',
                      transition: 'opacity .2s ease',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    {l.label}
                  </MLink>
                ))}
              </Box>

              <Button
                href="#contact"
                sx={{ ...pillGradientSx, px: 2.5, py: 0.75, borderRadius: 999, ml: 4 }}
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

      <Box
        sx={{
          height: scrolled
            ? (toolbarRef.current?.getBoundingClientRect().height ?? NAV_HEIGHT_SCROLLED)
            : 0,
        }}
      />

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <List>
            {LINKS.map((l) => (
              <ListItemButton
                key={l.href}
                component="a"
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  requestAnimationFrame(() => handleNavClick(e as any, l.href));
                }}
                sx={{ ...para1Sx, color: 'grey', justifyContent: 'flex-start' }}
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
                  e.preventDefault();
                  setOpen(false);
                  requestAnimationFrame(() => handleNavClick(e as any, '#contact'));
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
          <Box className="text-block" paddingTop="2rem">
            <Typography variant="h1" sx={{ ...headlineSx, marginBottom: '1rem' }}>
              Preschool’s{' '}
              <Box component="span" sx={{ display: 'block' }}>
                New Best Buddy
              </Box>
            </Typography>

            <Typography variant="h6" sx={{ ...para1Sx, marginBottom: '1rem' }}>
              An AI-powered companion that supports little learners in language, math, and emotional
              <br />
              growth — while giving teachers more time to do what they do best: care.
            </Typography>

            <Box>
              <Button size="large" sx={ctaButtonSx} onClick={onRequestDemo} href="#request-demo">
                Request Demo
              </Button>
            </Box>
          </Box>
          <Box
            component={motion.div}
            role="button"
            aria-label="Scroll to content"
            tabIndex={0}
            onClick={(e) => handleNavClick(e as any, '#discover')}
            initial={{ opacity: 0.7, y: 0 }}
            animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              color: '#ffffff80',
              left: '48%',
              bottom: { xs: 16, sm: 24, md: 32 },
              transform: 'translateX(-50%)',
              cursor: 'pointer',
              lineHeight: 0,
              zIndex: 2,
              '&:hover': { transform: 'translateX(-50%) scale(1.06)' },
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                borderRadius: 12,
              },
            }}
          >
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: { xs: 44, sm: 52, md: 60 } }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
