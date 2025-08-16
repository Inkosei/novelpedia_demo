"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti burst after component mounts
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white relative px-4 md:px-8 pt-24 md:pt-28 pb-10">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Confetti Burst Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                background: [
                  "#FFD700", "#FFA500", "#FF6347", "#FF69B4", "#00CED1", "#32CD32"
                ][Math.floor(Math.random() * 6)],
              }}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 600,
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                rotate: [0, Math.random() * 720],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: "easeOut",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      )}

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
            Novel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-400">
              Pedia
            </span>
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

        {/* Atlas Announcement */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden p-8 rounded-2xl border-2 border-purple-500/60 bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.6)]"
          >
            {/* Confetti Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 1,
                    repeat: Infinity,
                    delay: Math.random() * 1.5,
                  }}
                />
              ))}
              
              {/* Floating Sparkles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: [
                      "#FFD700", "#FF69B4", "#00CED1", "#32CD32", "#FF6347", "#9370DB"
                    ][Math.floor(Math.random() * 6)],
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                    "0 0 40px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block mb-4"
              >
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 animate-pulse">
                  🎉 NEW RELEASE! 🎉
                </span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Introducing{" "}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                      "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8))",
                      "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Atlas
                </motion.span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                The next evolution of NovelPedia is here!
              </p>
              
              <motion.a
                href="https://atlas.novelpedia.net"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-400/50"
              >
                🚀 Launch Atlas Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Boxes */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16"
        >
          {[
            { label: "Constitution", to: "/constitution" },
            { label: "For Readers", to: "/readers" },
            { label: "For Authors", to: "/authors" },
            { label: "Roadmap", to: "/roadmap" },
          ].map((item, idx) => (
            <Link key={idx} to={item.to}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 rounded-lg border border-purple-500/30 bg-gray-900/40 backdrop-blur-sm shadow-xl shadow-purple-500/10 cursor-pointer transition-all hover:border-purple-400"
              >
                <h3 className="text-lg md:text-xl font-bold text-violet-300">
                  {item.label}
                </h3>
              </motion.div>
            </Link>
          ))}
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
