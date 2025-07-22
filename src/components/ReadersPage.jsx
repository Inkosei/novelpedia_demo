import { motion } from "framer-motion";
import { FaBookOpen, FaShieldAlt, FaCompass, FaMagic, FaComments } from "react-icons/fa";

// --- Data for lists to keep JSX clean ---
const promisePoints = [
    "Stories won’t ever hide behind paywalls. Enjoy unrestricted reading without surprise fees.",
    "No intrusive ads, pointless notifications, or clutter—just a clean, intuitive interface.",
    "Every rating below 3 stars requires explanation, reducing unfair, spammy feedback.",
    "Your data stays yours. We never sell or misuse reader information."
];
const discoveryPoints = [
    "Detailed filters: Sort novels by mood, pacing, or even exclude tags you dislike.",
    "Vertical scrolling discovery: Quickly preview stories through detailed novel cards.",
    "Personalized recommendations, both reader-generated and algorithm-enhanced.",
    "View reviewers' profiles, likes, and past recommendations for trust and transparency.",
    "Authors cannot delete constructive reviews—your feedback remains visible and respected.",
    "Explore public collections or find similar novels in reader-made lists."
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Component ---
export default function ForReadersPage() {
  return (
    <div className="min-h-screen w-full px-4 pt-32 pb-20 md:pt-40 text-gray-200 flex justify-center">
      <motion.div
        className="max-w-5xl w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Header --- */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-violet-300"
          style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
          variants={itemVariants}
        >
          For Readers: Welcome to NovelPedia
        </motion.h1>

        <motion.blockquote
          className="bg-black/20 border-t border-b border-violet-800/50 my-12 py-6 px-8 max-w-3xl italic"
          variants={itemVariants}
        >
          <FaBookOpen className="mx-auto mb-4 text-violet-400" size={24} />
          At NovelPedia, we've built the space readers always dreamed of: clear, authentic, and community-driven. Because we're readers ourselves, we crafted every pixel with your reading pleasure in mind. Here’s what that means:
        </motion.blockquote>

        {/* --- Promise Section --- */}
        <motion.div className="w-full text-left bg-black/30 border border-violet-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm mb-8" variants={itemVariants}>
          <h2 className="flex items-center text-3xl font-bold text-violet-300 mb-6" style={{ textShadow: "0 0 10px #a78bfa" }}>
            <FaShieldAlt className="mr-4 flex-shrink-0" />
            Our Promise to Readers
          </h2>
          <ul className="space-y-4 text-gray-300">
            {promisePoints.map((point, i) => <li key={i} className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>{point}</span></li>)}
          </ul>
        </motion.div>

        {/* --- Discovery Section --- */}
        <motion.div className="w-full text-left bg-black/30 border border-violet-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm mb-8" variants={itemVariants}>
          <h2 className="flex items-center text-3xl font-bold text-violet-300 mb-6" style={{ textShadow: "0 0 10px #a78bfa" }}>
            <FaCompass className="mr-4 flex-shrink-0" />
            Discover Stories That Truly Resonate
          </h2>
          <ul className="space-y-4 text-gray-300">
            {discoveryPoints.map((point, i) => <li key={i} className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>{point}</span></li>)}
          </ul>
        </motion.div>

        {/* --- Reading Reimagined Section --- */}
        <motion.div className="w-full text-left bg-black/30 border border-violet-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm mb-8" variants={itemVariants}>
          <h2 className="flex items-center text-3xl font-bold text-violet-300 mb-6" style={{ textShadow: "0 0 10px #a78bfa" }}>
            <FaMagic className="mr-4 flex-shrink-0" />
            Reading, Reimagined
          </h2>
          <h3 className="text-xl font-semibold text-violet-200 mb-3">Engaging Experience Enhancements:</h3>
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Enjoy novels enriched with music, GIFs, and thematic visuals (toggle on/off at any time).</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Customize your reading layout: change fonts, colors, padding, and more.</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>In-built note-taking: save favorite quotes, scenes, or character dynamics.</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Advanced bookmarking system: clearly mark novels as "will read", "reading now", or "dropped".</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Your “For You” Page – an ever-updating feed fine-tuned to your reading history.</span></li>
          </ul>
        </motion.div>

        {/* --- Community Section --- */}
        <motion.div className="w-full text-left bg-black/30 border border-violet-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm" variants={itemVariants}>
          <h2 className="flex items-center text-3xl font-bold text-violet-300 mb-6" style={{ textShadow: "0 0 10px #a78bfa" }}>
            <FaComments className="mr-4 flex-shrink-0" />
            Vibrant Community & Genuine Connections
          </h2>
           <h3 className="text-xl font-semibold text-violet-200 mb-3">Interactive Community Feed:</h3>
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Engage directly within novels via chapter and paragraph comments.</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Follow authors to receive their posts, polls, and announcements.</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Explore author-moderated wikis and prominently displayed fanart.</span></li>
          </ul>
           <h3 className="text-xl font-semibold text-violet-200 mb-3">Build Friendships:</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Follow friends, see their book lists, and discover new reads together.</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Use direct messaging to chat with fellow readers.</span></li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span><span>Join the live “Ask for Recs” thread for instant, personalized suggestions.</span></li>
          </ul>
        </motion.div>

        {/* --- Conclusion --- */}
        <motion.blockquote
          className="bg-black/20 border-t border-b border-violet-800/50 my-16 py-6 px-8 max-w-3xl italic"
          variants={itemVariants}
        >
          <FaBookOpen className="mx-auto mb-4 text-violet-400" size={24} />
          At NovelPedia, reading isn’t a solitary pastime—it’s a shared journey, carefully crafted, respectful, and alive.
        </motion.blockquote>

        <motion.h2 className="text-3xl font-bold text-gray-100" variants={itemVariants} style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'}}>
            Welcome home, dear reader. Your next adventure awaits.
        </motion.h2>

      </motion.div>
    </div>
  );
}