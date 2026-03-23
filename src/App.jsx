
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./sections/nav-bar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      
     <NavBar />
     <Hero />
     <FirstVideo />
    </main>
  )
}

export default App