import HeroSection from "./components/HeroSection";
import WhatIsNovelPedia from "./components/WhatIsNovelPedia";
import OurGoal from "./components/OurGoal";
import ValuesVision from "./components/ValuesVision";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-purple-700 to-purple-400 overflow-x-hidden text-white">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

          <HeroSection />
          <WhatIsNovelPedia />
          <OurGoal />
          <ValuesVision />
          <AboutSection />
          <ContactSection />
      </div>
    </div>
  );
}
