import { Suspense } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import TechSection from "./tech/TechSection";

function App() {
  return (
    // 1. পুরো পেজকে viewport height (h-screen) দিয়ে overflow লুকিয়ে রাখা হয়েছে
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      {/* Navbar ফিক্সড থাকবে, এর পাশে কোনো স্ক্রলবার আসবে না */}
      <Navbar />

      {/* 2. শুধু মেইন কনটেন্ট অংশে custom-scrollbar সহ স্ক্রল হবে */}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <HeroSection />
        <TechSection />
        <Suspense fallback={<h5>Loading.....</h5>} />
      </main>
    </div>
  );
}

export default App;
