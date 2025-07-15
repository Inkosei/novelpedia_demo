import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurGoal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to bar height (0% → 100%)
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const goals = [
    {
      title: "True Creative Ownership",
      text: "Authors keep 100% rights, royalties, and control—always."
    },
    {
      title: "Reader‑First Access",
      text: "Innovative discovery systems, advanced filter options, Easy to navigate UX and No hard paywalls, no bait‑and‑switch chapters, no intrusive ads. Great stories stay reachable."
    },
    {
      title: "Ethical Monetization",
      text: "Tips, Patreon embeds, fair revenue share, zero hidden fees, zero platform tax on generosity."
    },
    {
      title: "A Craft‑Lover’s Toolkit",
      text: "Rich‑text & Markdown editor, GIFs, images, custom fonts, tables, glow effects, soundtrack embeds—plus real‑time previews and rock‑solid autosave."
    },
    {
      title: "Actionable Insights, Not Vanity Metrics",
      text: "Chapter heatmaps, drop‑off points, reader overlap, genre momentum—all in clean dashboards built for storytellers."
    },
    {
      title: "Fair Discovery & Transparent Algorithms",
      text: "Every novel gets an honest shot. Bias‑busting rules, double‑rating (Stars + Likes), and decay‑based trending keep the charts fresh."
    },
    {
      title: "Safety & Support, Front and Center",
      text: "Click‑to‑flag toxicity, soft‑hide on suspect reviews, 24‑h mod turnaround, DMCA assistance, and community‑trained guardians."
    },
    {
      title: "Privacy That Respects the Reader",
      text: "Minimal data collection, no third‑party trackers, clear opt‑outs, and encrypted login flows."
    },
    {
      title: "Mental‑Health‑Aware Spaces",
      text: "Quiet mode for authors, spoiler‑free reader zones, optional content warnings, and wellbeing resources just a click away."
    },
    {
      title: "Sustainable, Transparent Growth",
      text: "Open roadmaps, public sprint notes, and a revenue model designed for the long game—not quarterly hype cycles."
    }
  ];

  return (
    <motion.section
      id="goal"
      ref={ref}
      className="w-full py-20 px-4 md:px-12 text-white flex flex-col items-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        variants={fadeUp}
      >
        Our Goal: Build a Platform That Delivers
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-3xl mb-10 text-white/80"
        variants={fadeUp}
      >
        At NovelPedia, every design choice circles back to one simple promise:{" "}
        <span className="font-bold text-white">
          deliver genuine value to the people who write, read, and live inside stories
        </span>. Here’s what that looks like in practice:
      </motion.p>

      {/* Section content layout */}
      <div className="relative flex w-full max-w-6xl">
        {/* Progress Bar */}
        <div className="relative w-2 flex-shrink-0 mr-8 hidden md:block">
          <div className="absolute left-0 top-0 h-full w-full bg-purple-800 rounded-full" />
          <motion.div
            style={{ height: barHeight }}
            className="absolute left-0 top-0 w-full bg-amber-400 rounded-full"
          />
        </div>

        <div className="flex-1 space-y-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="bg-purple-700/40 border-l-4 border-amber-400 p-6 rounded-lg shadow-lg"
              variants={fadeUp}
            >
              <h3 className="text-2xl font-bold mb-2 text-amber-400">
                {index + 1}. {goal.title}
              </h3>
              <p className="text-white/80">{goal.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        className="mt-12 text-center text-xl text-purple-100"
        variants={fadeUp}
      >
        We’re not here to disrupt; we’re here to <span className="font-bold">restore balance</span>—and build the Webnovel sanctuary we all wished existed.
      </motion.p>
    </motion.section>
  );
}
