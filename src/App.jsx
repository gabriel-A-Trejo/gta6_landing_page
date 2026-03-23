
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./sections/nav-bar";
import Hero from "./sections/Hero";


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      
     <NavBar />
     <Hero />
    </main>
  )
}

export default App