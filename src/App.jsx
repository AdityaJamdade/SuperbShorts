import './App.css'
import About from './components/About/About'
import LearnMore from './components/LearnMore/LearnMore'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <LearnMore />
        <About />
      </div>
    </>
  )
}

export default App
