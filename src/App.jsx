import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { HomePage } from './components/HomePage';
import SupportPage from './components/SupportPage';
import RoadmapPage from './components/RoadmapPage';
import NewsPage from './components/NewsPage';
import ConstitutionPage from './components/ConstitutionPage';
import ScrollToTop from './components/SrollToTop';

export default function App() {
  return (
 <>
      <div
        className="
          fixed inset-0
          bg-cover bg-center
          bg-no-repeat
          opacity-100
          w-full h-full
          z-[-1]
        "
        style={{ backgroundImage: "url('./bg-cover.png')" }}
      ></div>


      <Router>
        <ScrollToTop />

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
