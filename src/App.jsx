import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { HomePage } from './components/HomePage';
import SupportPage from './components/SupportPage';
import RoadmapPage from './components/RoadmapPage';

const NewsPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">News Page</h1></div>;
const AffiliatesPage = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">Affiliates Page</h1></div>;

export default function App() {
  return (
    
      <Router>
        <div className="relative min-h-screen font-sans bg-gradient-to-br from-purple-700 to-purple-400 overflow-x-hidden text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
               
          </Routes>
        </div>
        </Router>
  );
}
