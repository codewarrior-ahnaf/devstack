import { Suspense } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import TechSection from "./components/layout/TechSection";



function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <TechSection />
      <Suspense fallback={<h5>Loading.....</h5>} 
      
      />
    </>
  )
}

export default App
