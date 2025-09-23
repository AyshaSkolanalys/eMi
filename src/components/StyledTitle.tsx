// src/components/WhatsInside.tsx
import { Box, Container, Typography } from "@mui/material";
import type { Variants, TargetAndTransition } from "framer-motion";
import { motion, easeOut } from "framer-motion";
import { headlineSx } from "../styles/Hero.styles";


export type WhatsInsideProps = {
  title?: string;
  fontColor?: string;
  id?: string;
};

const MotionBox = motion(Box);

const variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: easeOut },
  }),
};

export default function StyledTitle({
  title,
  fontColor,
  id
}: WhatsInsideProps) {
  return (
    <Box
      id= {id}
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        textAlign: "center",
        background: "linear-gradient(180deg, #1C2834 0%, #101820 100%)",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox variants={variants} initial="hidden" animate="show">
          <Typography
            variant="h2"
            sx={{...headlineSx, color: fontColor}}
          >
            {title}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}
