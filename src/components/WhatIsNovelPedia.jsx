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

  return (
    <motion.section
      id="what"
      className="w-full py-24 px-4 flex flex-col items-center text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        variants={fadeUp}
      >
        What is <span className="px-4 py-2 text-purple-100 rounded-lg">Novel<span className="text-black">Pedia</span></span>
      </motion.h2>

      <motion.blockquote
        className="italic text-purple-200 text-lg text-center max-w-3xl mb-10"
        variants={fadeUp}
      >
        “Among the hustle of the everyday life, we find our solace in books.”
      </motion.blockquote>

      <motion.p
        className="text-lg text-center max-w-3xl mb-4 text-white border-2 border-purple-600 bg-purple-700 bg-opacity-20 rounded-lg p-6"
        variants={fadeUp}
      >
        NovelPedia isn't just another Webnovel platform. It’s a haven where authors breathe easy and readers find stories worth diving into. We believe storytelling is sacred, and our community shapes every step we take. Here, your voice matters, your art is valued, and your freedom to create or explore is fiercely protected.
      </motion.p>

      <motion.p
        className="text-lg text-center max-w-3xl text-white border-2 border-purple-600 bg-purple-700 bg-opacity-20 rounded-lg p-6"
        variants={fadeUp}
      >
        We built NovelPedia because the existing Webnovel world has lost its way—churning out chapters at the cost of creativity and community. We’re authors and readers too, and we decided: enough is enough.
        <br className="hidden md:block" />
        <br />
        No paywalls, no exploitation, just stories that matter and a community that cares.
      </motion.p>

      <motion.h3
        className="font-bold mt-10 text-purple-100 text-3xl "
        variants={fadeUp}
      >
        Welcome home.
      </motion.h3>

    </motion.section>
  );
}
