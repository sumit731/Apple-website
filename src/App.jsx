import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import Model from "./components/model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"

const App= ()=> {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/>
    </main>
  )
}

export default App
