import { Suspense } from "react";
import logo from "./assets/logo-text.png";
import HeroSection from "./components/layout/HeroSection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import TechSection from "./components/tech/TechSection";
import type { techType } from "./types/type";

const techFetch = async (): Promise<techType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

const LoadingScreen = () => {
  return (
    <div className="loading-screen flex min-h-screen items-center justify-center px-6">
      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        <div className="loading-mark mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-[0_18px_50px_rgba(139,92,246,0.16)]">
          <span className="loading-ring" />
          <span className="absolute text-xl font-black text-[#db2777]">DS</span>
        </div>

        <img src={logo} alt="Dev Stack" className="h-9 w-auto" />
        <p className="mt-4 text-sm font-medium tracking-wide text-[#64748b]">
          Preparing your development stack
        </p>

        <div className="mt-8 h-1 w-44 overflow-hidden rounded-full bg-[#e2e8f0]">
          <span className="loading-progress block h-full rounded-full bg-linear-to-r from-[#60a5fa] to-[#db2777]" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const techPromise = techFetch();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="flex h-screen flex-col overflow-hidden bg-white">
        <Navbar />

        <main className="scroll-container flex-1 overflow-y-auto">
          <HeroSection />
          <TechSection techPromise={techPromise} />
          <Footer />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
