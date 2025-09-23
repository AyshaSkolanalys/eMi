import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import adaptiveImage from '../assets/images/adaptive.png'

import {
  sectionSx,
  containerSx,
  titleSx,
  imageSx,
  imageMotionProps,
} from '../styles/AdaptiveSection.styles'
import { para1Sx } from '../styles/Hero.styles'

export default function AdaptiveSection() {
  return (
    <Box component="section" sx={sectionSx}>
      <Container maxWidth="lg" sx={containerSx}>
        <Typography variant="h3" component="h2" gutterBottom sx={titleSx}>
          Adaptive, safe, and built to grow with every child
        </Typography>

        <Typography variant="body1" sx={{...para1Sx, color:'#FFFFFF80'}}>
          eMi is an AI-powered learning companion created for preschools. Running on a dedicated
          tablet with no distractions, it offers personalized games that nurture skills in math,
          language, and emotional growth. Each child has their own avatar, making it easy to pick up
          where they left off, while teachers can track progress, nudge incomplete tasks, and gain
          clear insights into every child’s development. eMi works seamlessly offline and syncs data
          when online, ensuring learning never stops.
        </Typography>

        <Box
          component={motion.img as React.ElementType}
          src={adaptiveImage}
          alt="eMi adaptive learning mockup"
          {...imageMotionProps}
          sx={imageSx}
        />
      </Container>
    </Box>
  )
}
