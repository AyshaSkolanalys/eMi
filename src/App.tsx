import './App.css'
import HeroBanner from './components/HeroBanner'
import heroBg from './assets/images/banner.jpg'
import emiLogo from './assets/images/logo.svg'

function App() {

  return (
    <HeroBanner
        bgSrc={heroBg}
        logoSrc={emiLogo}
        onRequestDemo={() => console.log('Request Demo clicked')}
      />
  )
}

export default App
