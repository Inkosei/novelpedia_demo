import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Navbar from "./components/Navbar";
import { HomePage } from './components/HomePage';
import SupportPage from './components/SupportPage';
import RoadmapPage from './components/RoadmapPage';
import NewsPage from './components/NewsPage';
import ConstitutionPage from './components/ConstitutionPage';
import ScrollToTop from './components/SrollToTop';
import AuthorPage from './components/AuthorsPage';
import ReadersPage from './components/ReadersPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

export default function App() {
  return (
 <>
       <Helmet>

        <title>NovelPedia</title>
        <meta name="title" content="NovelPedia | By authors, for authors. By readers, for readers" />
        <meta name="description" content="Reading and writing reimagined on NovelPedia. A platform created for authors and readers to share, grow, and connect." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novelpedia.net/" />
        <meta property="og:title" content="NovelPedia | By authors, for authors. By readers, for readers" />
        <meta property="og:description" content="Reading and writing reimagined on NovelPedia. A platform created for authors and readers to share, grow, and connect." />
        <meta property="og:image" content="https://novelpedia.net/banner.png" /> 

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://novelpedia.net/" />
        <meta property="twitter:title" content="NovelPedia | By authors, for authors. By readers, for readers" />
        <meta property="twitter:description" content="Reading and writing reimagined on NovelPedia. A platform created for authors and readers to share, grow, and connect." />
        <meta property="twitter:image" content="https://novelpedia.net/banner.png" />
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
            <Route path="/authors" element={<AuthorPage />} />
            <Route path="/readers" element={<ReadersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}
