import HeroSection from "./components/HeroSection";
import WhatIsNovelPedia from "./components/WhatIsNovelPedia";
import OurGoal from "./components/OurGoal";
import ValuesVision from "./components/ValuesVision";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SectionWrapper from "./components/SectionWrapper";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-purple-700 to-purple-400 overflow-x-hidden text-white">

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <SectionWrapper id="hero" bg="bg-gradient-to-br from-purple-600 to-purple-400">
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper id="what" bg="bg-gradient-to-br from-purple-500 to-purple-700">
          <WhatIsNovelPedia />
        </SectionWrapper>
        <SectionWrapper id="goal" bg="bg-gradient-to-br from-purple-600 to-purple-400">
          <OurGoal />
        </SectionWrapper>
        <SectionWrapper id="values" bg="bg-gradient-to-br from-purple-500 to-purple-700">
          <ValuesVision />
        </SectionWrapper>
        <SectionWrapper id="about" bg="bg-gradient-to-br from-purple-600 to-purple-400">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="contact" bg="bg-gradient-to-br from-purple-500 to-purple-700">
          <ContactSection />
        </SectionWrapper>
      </div>
    </div>
  );
}
