import { Box, Container, Stack, Typography } from "@mui/material";
import { motion, easeOut } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";
import { titleSx } from "../styles/AdaptiveSection.styles";
import { para3Sx, subtitleItalicLeftSx } from "../styles/MascotSection.styles";

export type MascotSectionProps = {
  heading?: string;
  mascotImg: string; // imported image
  mascotAlt?: string;
  speech?: string;
  leftText?: string;
  rightText?: string;
};

const MotionBox = motion(Box);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: easeOut },
  }),
};

export default function MascotSection({
  heading = "A friend who guides, cheers, and grows with the kid.",
  mascotImg,
  mascotAlt = "Mascot",
  leftText = "Learning with eMi is never a solo journey. From the very first tap, each child chooses their own mascot — a friendly buddy who stays by their side on every page.",
  rightText = "Whenever they feel stuck, the mascot is there: offering gentle hints, cheering small victories, and keeping spirits high. It motivates without pressure, guiding children step by step in a way that feels fun and safe. What makes it magical is that the mascot learns with the child. It adapts to their pace, style, and mood — becoming a trusted companion who knows when to encourage, when to guide, and when to celebrate. For preschoolers, that means every learning moment feels like playtime with a friend who truly understands them.",
}: MascotSectionProps) {

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0D1117 0%, #0B0F14 100%)",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={sectionVariants} initial="hidden" animate="show">
          {/* Heading */}
          <Typography
            variant="h4"
            align="center"
            sx={titleSx}
          >
            {heading}
          </Typography>

          {/* Mascot with speech */}
          <Stack alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
            <Box sx={{ position: "relative", display: "inline-block" }}>
            

              <Box
                component="img"
                src={mascotImg}
                alt={mascotAlt}
                sx={{
                  width: { xs: 160, md: 220 },
                  height: "auto",
                  display: "block",
                  mx: "auto",
                }}
              />
            </Box>
          </Stack>

          {/* Two-column text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 6 },
            }}
          >
            <Typography
              variant="body1"
              sx={{...subtitleItalicLeftSx,
                flex: 1
              }}
            >
              {leftText}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                ...para3Sx,
                flex: 1,
                lineHeight: 1.6,
              }}
            >
              {rightText}
            </Typography>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
