import './App.css'
import HeroBanner from './components/HeroBanner'
import heroBg from './assets/images/banner.jpg'
import emiLogo from './assets/images/logo.svg'
import AdaptiveSection from './components/AdaptiveSection'
import CorePillars from './components/CorePillars'
import HowItWorks from './components/HowItWorks'
import HowItWorksIllustration from './assets/images/studentGroup.png'
import WhyItMattersIllustration from './assets/images/whyItMatters.png'
import WhyItMatters from './components/WhyItMatters'
import StyledTitle from './components/StyledTitle'

import CurriculumBackedSection from './components/CurriculumBackedSection'
import FeaturesSection from './components/FeaturesSection'
import BenefitsSection from './components/BenefitsSection'
import MascotBear from './assets/images/mascot.png'
import MascotSection from './components/MascotSection'
import WhatsNext from './components/WhatsNext'
import EmiImage from './assets/images/emi.png'
import FromTheMakers from './components/FromTheMakers'
import TeamSection from './components/TeamSection'

function App() {

  return (
    <>
     <HeroBanner
        bgSrc={heroBg}
        logoSrc={emiLogo}
        onRequestDemo={() => console.log('Request Demo clicked')}
      />
      <AdaptiveSection />
      <StyledTitle title="Discover eMi" fontColor='#FFFFFF1A' id='discover'/>
      <CorePillars />
      <HowItWorks  imageSrc={HowItWorksIllustration}/>
      <WhyItMatters imageSrc={WhyItMattersIllustration} />
      <StyledTitle title="What's Inside" fontColor="#00000033" id='inside'/>
      <CurriculumBackedSection />
      <FeaturesSection />
      <BenefitsSection />
      <StyledTitle title="Meet the Mascot" fontColor="#FFFFFF1A" id='mascot'/>
      <MascotSection mascotImg={MascotBear} />
      <WhatsNext
      mascotSrc={EmiImage}
      onPlayClick={() => console.log("Play!")}
      onCtaClick={() => console.log("Open contact")}
      />
      <StyledTitle title="About Us" fontColor='#FFFFFF1A' id='about'/>
      <FromTheMakers />
      <TeamSection />
    </>
  )
}

export default App
