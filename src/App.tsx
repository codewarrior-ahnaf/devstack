import { Suspense } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import TechSection from "./components/tech/TechSection";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Navbar />

      <main className="flex-1 overflow-y-auto">
        <HeroSection />
        <TechSection />
        <Suspense fallback={<h5>Loading.....</h5>} />
      </main>
    </div>
  );
}

export default App;
