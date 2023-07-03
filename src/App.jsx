import './App.css'
import About from './components/About/About'
import LearnMore from './components/LearnMore/LearnMore'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
// import { Navbar, About, LearnMore, Services } from './components'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <LearnMore />
        <About />
        <Services />
      </div>
    </>
  )
}

export default App
