import './App.css'
import HeroBanner from './components/HeroBanner'
import heroBg from './assets/images/banner.jpg'
import emiLogo from './assets/images/logo.svg'
import AdaptiveSection from './components/AdaptiveSection'
import CorePillars from './components/CorePillars'

function App() {

  return (
    <>
     <HeroBanner
        bgSrc={heroBg}
        logoSrc={emiLogo}
        onRequestDemo={() => console.log('Request Demo clicked')}
      />
      <AdaptiveSection />
      <CorePillars />
    </>
  )
}

export default App
