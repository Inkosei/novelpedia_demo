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
       <Helmet>
        <title>NovelPedia | Read, Write & Explore Webnovels</title>
        <meta
          name="description"
          content="Reading and writing reimagined on NovelPedia. This is a platform for the authors and readers, and made by authors and readers. Join us in the revolution of webnovels community."
        />
      </Helmet>
      <div
        className="
          fixed inset-0
          bg-cover bg-center
          bg-no-repeat
          opacity-100
          w-full h-full
        "
        style={{ backgroundImage: "url('./bg-cover.webp')" }}
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
