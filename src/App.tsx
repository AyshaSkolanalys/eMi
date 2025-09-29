import './App.css';
import HeroBanner from './components/HeroBanner';
import heroBg from './assets/images/banner.jpg';
import emiLogo from './assets/images/logo.svg';
import AdaptiveSection from './components/AdaptiveSection';
import CorePillars from './components/CorePillars';
import HowItWorks from './components/HowItWorks';
import HowItWorksIllustration from './assets/images/studentGroup.png';
import WhyItMattersIllustration from './assets/images/whyItMatters.png';
import WhyItMatters from './components/WhyItMatters';
import StyledTitle from './components/StyledTitle';

import CurriculumBackedSection from './components/CurriculumBackedSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import MascotBear from './assets/images/mascot.png';
import MascotSection from './components/MascotSection';
import WhatsNext from './components/WhatsNext';
import EmiImage from './assets/images/emi.png';
import FromTheMakers from './components/FromTheMakers';
import TeamSection from './components/TeamSection';
import { Box } from '@mui/material';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const scrollToContact = () => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById('contact');
    if (!el) return;

    const OFFSET = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;

    window.scrollTo({ top: y, behavior: 'smooth' });
    el.focus({ preventScroll: true });
  };

  return (
    <>
      <HeroBanner bgSrc={heroBg} logoSrc={emiLogo} onRequestDemo={scrollToContact} />
      <AdaptiveSection />
      <Box
        sx={{
          background: 'linear-gradient(180deg, #000000 0%, #3F4952 100%)',
          color: '#fff',
        }}
      >
        <StyledTitle title="Discover eMi" fontColor="#FFFFFF4A" id="discover" />
        <CorePillars />
        <HowItWorks imageSrc={HowItWorksIllustration} />
        <WhyItMatters imageSrc={WhyItMattersIllustration} />
      </Box>
      <Box
        sx={{
          background: 'linear-gradient(180deg, #3F4952 0%, #000000 100%)',
          color: '#fff',
        }}
      >
        <StyledTitle title="What's Inside" fontColor="#FFFFFF8A" id="inside" />
        <CurriculumBackedSection />
        <FeaturesSection />
        <BenefitsSection />
      </Box>
      <Box
        sx={{
          background: 'linear-gradient(180deg, #000000 0%, #3F4952 100%)',
          color: '#fff',
        }}
      >
        <StyledTitle title="Meet the Mascot" fontColor="#FFFFFF4A" id="mascot" />
        <MascotSection mascotImg={MascotBear} />
      </Box>
      <Box sx={{ backgroundColor: '#E1E8EB' }}>
        <StyledTitle title="What's Next" fontColor="#1919194A" id="mascot" />
        <WhatsNext mascotSrc={EmiImage} onCtaClick={scrollToContact} />
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(180deg, #000000 0%, #3F4952 100%)',
          color: '#fff',
        }}
      >
        <StyledTitle title="About Us" fontColor="#FFFFFF7A" id="about" />
        <FromTheMakers />
        <TeamSection />
      </Box>
      <ContactSection />
      <Footer sx={{ mt: 'auto' }} />
    </>
  );
}

export default App;
