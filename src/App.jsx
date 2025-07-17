import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { HomePage } from './components/HomePage';
import SupportPage from './components/SupportPage';
import RoadmapPage from './components/RoadmapPage';
import BackgroundBooks from './components/BackgroundBooks';
import NewsPage from './components/NewsPage';
import ConstitutionPage from './components/ConstitutionPage';

export default function App() {
  return (
 <>
      <div
        className="
          fixed inset-0
          bg-cover bg-center
          bg-no-repeat
          opacity-100
          
          z-[-1]
        "
        style={{ backgroundImage: "url('./bg-cover.png')" }}
      ></div>


      <Router>
        <BackgroundBooks />

        <div className="relative font-sans text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/constitution" element={<ConstitutionPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}
