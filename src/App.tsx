import { Suspense } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import TechSection from "./components/tech/TechSection";

const techFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const techPromise = techFetch();

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Navbar />

      <main className="flex-1 overflow-y-auto">
        <HeroSection />
        <Suspense fallback={<h5>Loading.....</h5>}>
          <TechSection techPromise={techPromise} />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
