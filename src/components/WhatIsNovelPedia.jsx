import { motion } from "framer-motion";

export default function WhatIsNovelPedia() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // The background image is now handled by a parent component.
  // This section is themed to look good on top of it.
  return (
    <motion.section
      id="what"
      className="w-full py-24 px-4 flex flex-col items-center justify-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-100"
        variants={fadeUp}
      >
        What is <span className="font-bold"><span className="text-violet-400">Novel</span><span className="text-gray-100">Pedia</span></span>
      </motion.h2>

      <motion.blockquote
        className="italic text-violet-200 text-lg text-center max-w-3xl mb-12"
        variants={fadeUp}
      >
        “Among the hustle of the everyday life, we find our solace in books.”
      </motion.blockquote>

      <motion.p
        className="text-lg text-center max-w-3xl mb-6 text-gray-200 border border-violet-600/50 bg-black/30 rounded-lg p-6 backdrop-blur-sm"
        variants={fadeUp}
      >
        NovelPedia isn't just another Webnovel platform. It’s a haven where authors breathe easy and readers find stories worth diving into. We believe storytelling is sacred, and our community shapes every step we take. Here, your voice matters, your art is valued, and your freedom to create or explore is fiercely protected.
      </motion.p>

      <motion.p
        className="text-lg text-center max-w-3xl text-gray-200 border border-violet-600/50 bg-black/30 rounded-lg p-6 backdrop-blur-sm"
        variants={fadeUp}
      >
        We built NovelPedia because the existing Webnovel world has lost its way—churning out chapters at the cost of creativity and community. We’re authors and readers too, and we decided: enough is enough.
        <br className="hidden md:block" />
        <br />
        No paywalls, no exploitation, just stories that matter and a community that cares.
      </motion.p>

      <motion.h3
        className="font-bold mt-12 text-violet-300 text-3xl"
        style={{ textShadow: "0 0 10px #8b5cf6" }} // Adds a subtle glow effect matching violet-500
        variants={fadeUp}
      >
        Welcome home.
      </motion.h3>
      
    </motion.section>
  );
}