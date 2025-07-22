import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserShield, FaBalanceScale, FaAward, FaPenFancy } from "react-icons/fa";

// Data objects to keep the JSX clean
const ownershipPoints = [
  {
    icon: <FaUserShield />,
    title: "Complete Ownership",
    text: "You retain absolute rights to your stories. There are no hidden terms or fine print—ever.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Intellectual Property Security",
    text: "We actively support your rights through efficient DMCA assistance, safeguarding your creations diligently.",
  },
  {
    icon: <FaAward />,
    title: "Total Control",
    text: "You determine how your work is displayed, promoted, and distributed.",
  },
];

const pathsToThrive = [
    { path: "Referral Author", whatYouGet: "Algorithm discovery boosts · extra DMCA credits · marketing tokens", howItWorks: "Share an invite link. Every verified author you bring unlocks perks for both of you." },
    { path: "First Feather", whatYouGet: "Front‑page spotlight · founding badge · white‑glove onboarding · full analytics suite", howItWorks: "The first 100 hand‑picked novels. We invest design, promo, and community resources to make these our flagship titles." },
    { path: "Exclusivity Contract", whatYouGet: "+50 % visibility multiplier · higher revenue share · diamond badge · Promo suite · 1‑on‑1 editorial session", howItWorks: "Six‑month term, manually renewed, cancel anytime with one‑week notice—always in the author’s favour." }
];

const monetizationPoints = [
    "Direct Financial Support: Highlighted placement of your tip jars, Patreon links, and Ko-fi pages.",
    "Memberships & Gifts: Monthly tiers, virtual gifts, and Super Comments.",
    "Curated Bundles & Engagement Pools: Rotating packs unlocked by one fee.",
    "Marketing Boost Credits: Pre‑paid promo slots & a Self‑Serve Ad Manager.",
    "Transparent Revenue Sharing: Clear models without hidden fees.",
    "Optional Exclusivity Agreements: Fully opt-in for enhanced visibility and higher revenue share."
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Main Component
export default function AuthorsPage() {
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
          For Authors: Welcome to Inkosei
        </motion.h1>
        <motion.p className="text-lg text-violet-100 mt-2" variants={itemVariants}>
          Inkosei — Ink + 生 or Born From Ink
        </motion.p>
        <motion.blockquote
          className="bg-black/20 border-t border-b border-violet-800/50 my-12 py-6 px-8 max-w-3xl italic"
          variants={itemVariants}
        >
          <FaPenFancy className="mx-auto mb-4 text-violet-400" size={24} />
          Welcome, creative minds. Inkosei was intentionally built by authors who were tired of being squeezed by algorithms and fine‑print. Here, anyone who follows our content guidelines can publish, and every feature is tuned to protect your rights, grow your audience, and keep the joy in writing.
        </motion.blockquote>

        {/* --- Ownership Section --- */}
        <motion.h2 className="text-3xl md:text-4xl font-bold text-violet-300 mt-8 mb-8" style={{ textShadow: "0 0 10px #a78bfa" }} variants={itemVariants}>
          Ownership, Protection, and Autonomy
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
            {ownershipPoints.map(point => (
                <motion.div key={point.title} className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 text-center" variants={itemVariants}>
                    <div className="text-violet-400 text-4xl mb-4 inline-block">{point.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-100">{point.title}</h3>
                    <p className="text-gray-300">{point.text}</p>
                </motion.div>
            ))}
        </div>

        {/* --- Paths to Thrive Table --- */}
        <motion.h2 className="text-3xl md:text-4xl font-bold text-violet-300 mt-8 mb-8" style={{ textShadow: "0 0 10px #a78bfa" }} variants={itemVariants}>
          Three Paths to Thrive
        </motion.h2>
        <motion.div className="w-full overflow-x-auto bg-black/30 border border-violet-700/50 rounded-xl p-1 backdrop-blur-sm mb-6" variants={itemVariants}>
            <table className="w-full min-w-[700px] text-left">
                <thead className="bg-violet-900/50">
                    <tr>
                        <th className="p-4">Path</th>
                        <th className="p-4">What You Get</th>
                        <th className="p-4">How It Works</th>
                    </tr>
                </thead>
                <tbody>
                    {pathsToThrive.map(path => (
                        <tr key={path.path} className="border-b border-violet-800/50 last:border-b-0 hover:bg-violet-900/30 transition-colors">
                            <td className="p-4 font-bold text-gray-100">{path.path}</td>
                            <td className="p-4 text-gray-300">{path.whatYouGet}</td>
                            <td className="p-4 text-gray-300">{path.howItWorks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
        <motion.p className="text-sm italic text-gray-400 mb-16" variants={itemVariants}>
            Everyone starts as a Standard Author with full tool access and can join any path later—zero pressure, no lock‑ins.
        </motion.p>
        
        {/* --- Monetization Section --- */}
        <motion.div className="w-full text-left bg-black/30 border border-violet-700/50 rounded-xl p-8 backdrop-blur-sm mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-violet-300 mb-6" style={{ textShadow: "0 0 10px #a78bfa" }}>Ethical Monetization</h2>
            <ul className="space-y-3 list-inside">
                {monetizationPoints.map((point, i) => <li key={i} className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>{point}</li>)}
            </ul>
        </motion.div>

        {/* --- Other Sections (condensed for brevity, same structure) --- */}
        {/* You can create similar styled sections for "Purpose-Built Author Tools", "Community Safety", etc. */}

        {/* --- Looking Ahead --- */}
        <motion.div className="text-center my-16 p-8 border-y border-violet-800/50 max-w-3xl" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-violet-300 mb-4" style={{ textShadow: "0 0 10px #a78bfa" }}>
            Looking Ahead
          </h2>
          <p className="text-lg text-gray-300">
            Mobile creator dashboard, API access, AI translation & audio, global licensing marketplace, and long‑term revenue‑share tokens are all on the public&nbsp;
            <Link to="/roadmap" className="font-bold text-violet-300 hover:text-violet-200 underline underline-offset-4 transition-colors">
              Author Feature Roadmap →
            </Link>
          </p>
        </motion.div>

        {/* --- Conclusion --- */}
        <motion.blockquote
          className="bg-black/20 border-t border-b border-violet-800/50 py-6 px-8 max-w-3xl italic"
          variants={itemVariants}
        >
          <FaPenFancy className="mx-auto mb-4 text-violet-400" size={24} />
          Inkosei is more than just another platform; it's your creative refuge—carefully crafted by authors, for authors. Join us, and rediscover the joy of storytelling.
        </motion.blockquote>

      </motion.div>
    </div>
  );
}