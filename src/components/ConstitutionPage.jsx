import { motion } from "framer-motion";
import { FaPenFancy, FaBookOpen } from "react-icons/fa";

const authorPledges = [
  "You retain full ownership of your work—always.",
  "You control how your stories are presented and marketed.",
  "We will tirelessly protect your copyright and assist with DMCA takedowns.",
  "We’ll promote your tip jars, Patreon, and Ko-fi to help sustain your craft.",
  "We provide powerful, intuitive tools for creating, analyzing, and engaging your audience.",
  "We defend you against unfair reviews and malicious attacks.",
  "Your mental health matters; we’ll handle the noise, so you can write freely.",
];

const readerPledges = [
  "You’ll always have free, unobstructed access to content—no paywalls ever.",
  "You are valued community members, never wallets to exploit.",
  "Your privacy is sacred; we’ll always protect it.",
  "Constructive criticism won’t be censored. Your thoughtful reviews matter.",
  "You deserve a clean, intuitive reading experience without unnecessary clutter.",
  "Fake reviews and manipulative practices will never have space here.",
  "A new double rating system helps you celebrate stories honestly—whether they're masterpieces or delightful binges.",
];

export default function ConstitutionPage() {
  const introLines = [
    "Wait—a constitution? For a webnovel site?",
    "Presenting the NovelPedia Constitution.",
    "A constitution not for the readers—but for us, the builders.",
    "A constitution you can always use to hold us accountable.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen w-full text-gray-200 overflow-hidden px-4 pt-32 pb-20 md:pt-40 flex justify-center touch-pan-y"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-7xl w-full flex flex-col items-center">
        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-violet-300 mb-6"
          style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
          variants={itemVariants}
        >
          NovelPedia Constitution
        </motion.h1>

        {/* Intro Lines */}
        <div className="flex flex-col items-center mb-12">
          {introLines.map((line, index) => (
            <motion.p
              key={index}
              className="text-center text-lg md:text-xl italic text-gray-300 mb-2"
              variants={itemVariants}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Pledge Intro */}
        <motion.p
          className="text-lg md:text-xl text-center max-w-3xl italic text-gray-300 mb-16"
          variants={itemVariants}
        >
          At NovelPedia, we commit fully to each other. Here’s our mutual pledge:
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Authors' Pledge Card */}
          <motion.div
            className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 md:p-8"
            variants={itemVariants}
          >
            <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 text-violet-300">
              <FaPenFancy className="mr-4 flex-shrink-0" />
              For Our Authors
            </h2>
            <ul className="space-y-4 text-gray-300">
              {authorPledges.map((pledge, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-violet-400 mr-3 mt-1">▸</span>
                  <span>{pledge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Readers' Pledge Card */}
          <motion.div
            className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 md:p-8"
            variants={itemVariants}
          >
            <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 text-violet-300">
              <FaBookOpen className="mr-4 flex-shrink-0" />
              For Our Readers
            </h2>
            <ul className="space-y-4 text-gray-300">
              {readerPledges.map((pledge, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-violet-400 mr-3 mt-1">▸</span>
                  <span>{pledge}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing Line */}
        <motion.p
          className="text-xl md:text-2xl text-center font-semibold max-w-3xl text-gray-100 mt-16"
          variants={itemVariants}
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
        >
          Together, we’re redefining storytelling as a collaboration—not exploitation.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
