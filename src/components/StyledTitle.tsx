// src/components/WhatsInside.tsx
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export type WhatsInsideProps = {
  title?: string;
};

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StyledTitle({
  title = "What’s Inside",
}: WhatsInsideProps) {
  return (
    <Box
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
            sx={{
              fontWeight: 800,
              color: "rgba(255,255,255,0.08)", // subtle faded text look
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            {title}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}
