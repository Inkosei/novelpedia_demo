import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { HomePage } from './components/HomePage';
import SupportPage from './components/SupportPage';
import RoadmapPage from './components/RoadmapPage';
import BackgroundBooks from './components/BackgroundBooks';
import NewsPage from './components/NewsPage';

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

        <div className="relative min-h-screen font-sans overflow-x-hidden text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}
