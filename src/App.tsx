import { Suspense } from "react";
import HeroSection from "./components/layout/HeroSection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import LoadingScreen from "./components/loadingscreen/LoadingScreen";
import TechSection from "./components/tech/TechSection";
import type { techType } from "./types/type";

const techFetch = async (): Promise<techType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const techPromise = techFetch();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="flex h-screen min-w-5xl flex-col overflow-hidden bg-white">
        <Navbar />

        <main className="scroll-container scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#db2777] hover:scrollbar-thumb-[#7c3aed] flex-1 overflow-y-auto">
          <HeroSection />
          <TechSection techPromise={techPromise} />
          <Footer />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
