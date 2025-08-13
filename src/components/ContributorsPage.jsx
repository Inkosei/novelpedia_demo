import { motion } from "framer-motion";
import { FaUsers, FaCode, FaPaintBrush, FaBullhorn, FaEye } from "react-icons/fa";

// --- Placeholder Data (You can easily replace this) ---
const categories = [
  {
    icon: <FaUsers />,
    title: "Core Team",
    description: "People who shaped the platform's foundation, strategy, and direction.",
    members: [
      { name: "Amon", role: "Founder & Lead Architect" },
      { name: "Gemini", role: "Lead Developer & Systems Design" },
      { name: "Samael", role: "Community & Vision" },
    ],
  },
  {
    icon: <FaCode />,
    title: "Technical Contributors",
    description: "Developers, designers, and problem-solvers who helped us build the machine.",
    members: [
      { name: "helia", handle: "@helia-dev", platform: "GitHub" },
      { name: "ByteWizard", handle: "@byte_wizard", platform: "GitHub" },
      { name: "Cipher", role: "Security Consultant" },
    ],
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Contributors",
    description: "Visual designers, artists, meme-lords, editors, and chaos agents.",
    members: [
      { name: "@venerablememestear", platform: "TikTok" },
      { name: "@blasphemer_amon0", platform: "TikTok" },
      { name: "Artisan", role: "Cover Art & Banners" },
    ],
  },
  {
    icon: <FaBullhorn />,
    title: "Community Advocates",
    description: "People who helped spread the word, gave feedback, and moved the mission forward.",
    members: [
      { name: "Lectorum Nexus Staff", role: "Early Supporters" },
      { name: "The First Disciples", role: "Discord Founding Members" },
      { name: "Beta Test Squad", role: "Feedback & Bug Hunting" },
    ],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Main Component ---
export default function ContributorsPage() {
  return (
    <div className="min-h-screen w-full px-4 pt-32 pb-20 md:pt-40 text-gray-200 flex justify-center">
      <motion.div
        className="max-w-6xl w-full flex flex-col items-center text-center"
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
          People Behind the Pages
        </motion.h1>

        <motion.div
          className="bg-black/20 border-t border-b border-violet-800/50 my-12 py-6 px-8 max-w-4xl"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
            Built by Readers, Writers, and Wanderers
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            NovelPedia exists because of the talent, effort, and energy of people who believe in better platforms and storytelling freedom. This is where we honor the ones who made it happen.
          </p>
        </motion.div>

        {/* --- Contributors Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 text-left h-full"
              variants={itemVariants}
            >
              <h3 className="flex items-center text-2xl font-bold mb-2 text-violet-300">
                <span className="mr-3">{category.icon}</span>
                {category.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.members.map((member, idx) => (
                  <li key={idx} className="bg-violet-900/20 p-3 rounded-md border-l-2 border-violet-500">
                    <p className="font-semibold text-gray-100">{member.name}</p>
                    {(member.role || member.platform) && (
                      <p className="text-xs text-violet-300">{member.role || member.platform}</p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* --- Footer Note --- */}
        <motion.p
          className="mt-16 text-gray-400 italic text-center max-w-2xl"
          variants={itemVariants}
        >
          If you contributed and don’t see your name here, reach out — we’re still updating this list. No effort goes unnoticed.
        </motion.p>
      </motion.div>
    </div>
  );
}