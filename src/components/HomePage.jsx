import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import WhatIsNovelPedia from "./WhatIsNovelPedia";
import OurGoal from "./OurGoal";
import ContactSection from "./ContactSection";

import logo from "/logo-icon.webp";

export function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full  text-white overflow-hidden">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center "
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="NovelPedia Logo"
              className="w-64 h-64 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Taglines */}
            <motion.p
              className="text-xl md:text-2xl font-semibold text-violet-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              By the readers, for the readers.
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl font-semibold text-violet-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              By the authors, for the authors.
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="w-64 h-2 bg-violet-700/30 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            >
              <motion.div
                className="h-full bg-violet-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 3.4, duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main homepage content */}
      {!showIntro && (
        <div>
          <HeroSection />
          <WhatIsNovelPedia />
          <OurGoal />
          <ContactSection />
        </div>
      )}
    </div>
  );
}
