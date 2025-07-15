import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import WhatIsNovelPedia from "./components/WhatIsNovelPedia";
import OurGoal from "./components/OurGoal";
import ValuesVision from "./components/ValuesVision";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import { HomePage } from './components/HomePage';

const NewsPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">News Page</h1></div>;
const FindUsPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">Find Us Page</h1></div>;
const SupportPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">Support Page</h1></div>;
const AffiliatesPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">Affiliates Page</h1></div>;
const RoadmapPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">Roadmap Page</h1></div>;

export default function App() {
  return (
    
      <Router>
        <div className="relative min-h-screen font-sans bg-gradient-to-br from-purple-700 to-purple-400 overflow-x-hidden text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/find-us" element={<FindUsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
                    
          {/* <HeroSection />
          <WhatIsNovelPedia />
          <OurGoal />
          <ValuesVision />
          <AboutSection />
          <ContactSection /> */}
          
          </Routes>
        </div>
        </Router>



  );
}
