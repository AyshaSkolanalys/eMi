// src/components/FromTheMakers.tsx
import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import SkolanalysIllustration from '../assets/images/skolanalys-illustration.png';
import MyranScreenshot from '../assets/images/myran-screenshot.png';

type MakerItem = {
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string; // e.g., "Skolanalys"
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  href?: string; // if provided, CTA will be <a>
  reverse?: boolean; // flips image/text on desktop
};

export type FromTheMakersProps = {
  introTop?: React.ReactNode; // italic first line
  introBottom?: React.ReactNode; // italic second line
  items?: MakerItem[]; // two blocks expected
};

const MotionBox = motion(Box);

const appear = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function FromTheMakers({
  introTop = (
    <>
      From the makers of{" "}
      <Box component="span" sx={{ color: "#4EA3FF", fontWeight: 600 }}>
        Skolanalys
      </Box>{" "}
      and{" "}
      <Box component="span" sx={{ color: "#C874FF", fontWeight: 600 }}>
        Myran
      </Box>
      .
    </>
  ),
  introBottom = (
    <>
      Our work in the Swedish education sector goes beyond vision — it’s rooted
      in real, on-the-ground impact.
    </>
  ),
  items = [
    {
      brandName: "Skolanalys",
      title:
        "Smart follow-up in schools helps educational institutions and municipalities to facilitate systematic quality work",
      description:
        "We analyze school and pupils’ results using AI and present them in an understandable and easily accessible manner. We identify correlations and patterns and make predictions about future outcomes quickly. With the help of Skolanalys, you can track initiatives, identify challenges and strengths, and plan for future actions.",
      imageSrc: SkolanalysIllustration,
      ctaText: "Read more",
    },
    {
      brandName: "Myran",
      title: "Knowledge development in preschool at group level",
      description:
        "Myran is created to increase children’s curiosity and desire to learn. With the help of Myran, you get a formative assessment of the children’s skills and can follow their development over time at group level. The result is analyzed with the help of digital technology and presented broken down by knowledge criteria, age and gender.",
      imageSrc: MyranScreenshot,
      ctaText: "Read more",
      reverse: true,
    },
  ],
}: FromTheMakersProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #0B0F14 0%, #0D141A 35%, #0B0F14 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Intro */}
        <MotionBox variants={appear} initial="hidden" animate="show">
          <Stack spacing={1.2} alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h6"
              sx={{ fontStyle: "italic", opacity: 0.95, maxWidth: 900 }}
            >
              {introTop}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontStyle: "italic", opacity: 0.8, maxWidth: 900 }}
            >
              {introBottom}
            </Typography>
          </Stack>
        </MotionBox>

        {/* Items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 8, md: 12 } }}>
          {items.map((it, i) => {
            const Content = (
              <Stack spacing={2} sx={{ flex: 1, minWidth: 0 }}>
                {/* Brand line (optional logo) */}
                <Stack direction="row" spacing={1.2} alignItems="center">
                  {it.logoSrc && (
                    <Box
                      component="img"
                      src={it.logoSrc}
                      alt={it.logoAlt || it.brandName || "brand"}
                      sx={{ width: 24, height: 24, objectFit: "contain" }}
                    />
                  )}
                  {it.brandName && (
                    <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                      {it.brandName}
                    </Typography>
                  )}
                </Stack>

                <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                  {it.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {it.description}
                </Typography>

                {(it.ctaText || it.href) && (
                  <Box>
                    <Button
                      component={it.href ? "a" : "button"}
                      href={it.href}
                      onClick={it.onCtaClick}
                      size="small"
                      variant="contained"
                      sx={{
                        borderRadius: 999,
                        px: 2.2,
                        py: 0.6,
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#14171A" : "#111",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 600,
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor:
                            theme.palette.mode === "dark" ? "#1A1F24" : "#000",
                          boxShadow: "none",
                        },
                      }}
                    >
                      {it.ctaText || "Read more"}
                    </Button>
                  </Box>
                )}
              </Stack>
            );

            const Visual = (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={it.imageSrc}
                  alt={it.imageAlt || it.brandName || "illustration"}
                  sx={{
                    width: "100%",
                    maxWidth: 520,
                    height: "auto",
                    borderRadius: 2,
                    objectFit: "contain",
                  }}
                />
              </Box>
            );

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: it.reverse ? "row-reverse" : "row" },
                    gap: { xs: 3, md: 6 },
                    alignItems: "center",
                  }}
                >
                  {Content}
                  {Visual}
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
