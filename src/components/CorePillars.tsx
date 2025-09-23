import { Box, Container, Typography, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { titleSx } from '../styles/AdaptiveSection.styles'

import CurriculumIcon from '../assets/images/curriculum.svg'
import AIPoweredIcon from '../assets/images/poweredLearning.svg'
import TeacherFriendlyIcon from '../assets/images/teacherFriendly.svg'
import InclusiveIcon from '../assets/images/inclusive.svg'

import {
  sectionSx, panelSx, gridSx, cardPaperSx, cardStackSx,
  iconWrapperSx, iconImgSx, cardTitleSx,
  cardInitial, cardWhileInView, cardViewport, cardWhileHover, getCardTransition,
} from '../styles/CorePillars.styles'
import { para1Sx } from '../styles/Hero.styles'

type Pillar = {
  title: string
  description: string
  iconSrc?: string
  alt?: string
  Icon?: React.ElementType
}

type CorePillarsProps = {
  heading?: string
  pillars?: Pillar[]
}

const MotionPaper = motion(Paper)

const defaultPillars: Pillar[] = [
  {
    title: 'Curriculum Aligned',
    description:
      'Content built hand-in-hand with preschool experts and aligned with early childhood learning standards. Every activity is designed to match curriculum goals while keeping play fun, age-appropriate, and meaningful.',
    iconSrc: CurriculumIcon,
    alt: 'Curriculum aligned',
  },
  {
    title: 'AI-Powered Learning',
    description:
      'At the heart of eMi is adaptive AI that understands each child’s pace. It personalizes tasks in math, language, and emotional growth, always adjusting to keep learning challenging yet achievable.',
    iconSrc: AIPoweredIcon,
    alt: 'AI powered learning',
  },
  {
    title: 'Teacher-Friendly',
    description:
      'A smart assistant in the classroom — eMi tracks progress, gives real-time feedback, and reduces the stress of constant monitoring. Teachers can focus on caring and guiding while eMi handles the repetitive tracking.',
    iconSrc: TeacherFriendlyIcon,
    alt: 'Teacher friendly',
  },
  {
    title: 'Inclusive for All',
    description:
      'Multilingual support and accessibility features ensure that every child, regardless of background, ability, or needs, has an equal chance to learn, grow, and shine with eMi.',
    iconSrc: InclusiveIcon,
    alt: 'Inclusive for all',
  },
]

export default function CorePillars({
  heading = 'Core Pillars of eMi',
  pillars = defaultPillars,
}: CorePillarsProps) {
  return (
    <Box component="section" sx={sectionSx}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" sx={titleSx}>
          {heading}
        </Typography>

        <Paper elevation={0} sx={panelSx}>
          <Box sx={gridSx}>
            {pillars.map((p, idx) => (
              <MotionPaper
                key={p.title}
                elevation={0}
                initial={cardInitial}
                whileInView={cardWhileInView}
                viewport={cardViewport}
                whileHover={cardWhileHover}
                transition={getCardTransition(idx)}
                sx={cardPaperSx}
              >
                <Box sx={cardStackSx}>
                  <Box sx={iconWrapperSx}>
                    {p.iconSrc ? (
                      <Box component="img" src={p.iconSrc} alt={p.alt ?? ''} sx={iconImgSx} />
                    ) : p.Icon ? (
                      <p.Icon fontSize="medium" />
                    ) : null}
                  </Box>

                  <Typography variant="h6" sx={cardTitleSx}>
                    {p.title}
                  </Typography>

                  <Typography variant="body2" sx={{...para1Sx, color:'#FFFFFF80'}}>
                    {p.description}
                  </Typography>
                </Box>
              </MotionPaper>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
