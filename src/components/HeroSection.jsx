"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Countdown from "./Countdown"; 

export default function HeroSection() {
  // ---------------------------
  // Variants
  // ---------------------------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: {
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
    },
    animate: {
      boxShadow: [
        "0 0 20px rgba(168, 85, 247, 0.3)",
        "0 0 40px rgba(168, 85, 247, 0.6)",
        "0 0 20px rgba(168, 85, 247, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // ---------------------------
  // JSX
  // ---------------------------
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white relative px-4 md:px-8 pt-24 md:pt-28 pb-10">

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h1
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 inline-block"
        >
          <span className="bg-black px-4 md:px-6 py-2 md:py-3 rounded-lg border border-purple-500/50 shadow-2xl">
            Novel<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-400">Pedia</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl italic text-gray-300 mb-12 md:mb-16"
        >
          - A community-driven online sanctuary
        </motion.p>

        {/* Two-column Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-full max-w-3xl mx-auto text-center p-8 rounded-2xl border border-purple-500/40 bg-gray-900/50 backdrop-blur-md shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 mb-12"
        >
          <h2 className="text-xl md:text-3xl font-bold glowing-text mb-4">
            BY AUTHORS - FOR AUTHORS
          </h2>
          <h2 className="text-xl md:text-3xl font-bold glowing-text">
            BY READERS - FOR READERS
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl mx-auto mb-12"
        >
          <Countdown targetDateUTC="2025-08-15T00:00:00Z" />
        </motion.div>

        {/* Constitution & Promise */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row justify-center lg:items-stretch gap-8 mb-12 md:mb-16"
        >
          {/* Constitution */}
          <Link to="/constitution" className="w-full lg:w-80">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full text-left p-6 rounded-lg border border-purple-500/30 bg-gray-900/40 backdrop-blur-sm shadow-xl shadow-purple-500/10 cursor-pointer transition-all hover:border-purple-400 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 underline underline-offset-4 decoration-purple-400">
                  Our Constitution
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  {["- For Readers", "- For Authors"].map((text, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="transition-transform"
                    >
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Link>

          {/* Promise */}
          <motion.div
            whileHover={{ y: -5 }}
            className="w-full lg:w-80 h-full text-left p-6 rounded-lg border border-purple-500/30 bg-gray-900/40 backdrop-blur-sm shadow-xl shadow-purple-500/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 underline underline-offset-4 decoration-purple-400">
                Our Promise
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                {[
                  "- Reading reimagined",
                  "- Changing the ecosystem",
                  "- Uniting the community",
                ].map((text, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="transition-transform"
                  >
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="text-xl md:text-2xl lg:text-3xl italic text-center text-gray-300 max-w-4xl mx-auto p-8 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-900/10 to-blue-900/10 backdrop-blur-sm shadow-2xl mb-16"
        >
          "You've asked for better, so we built it."
        </motion.blockquote>

      

      </motion.div>
    </section>
  );
}
