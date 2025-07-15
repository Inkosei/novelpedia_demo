import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactSection from "./ContactSection";

const authorRoadmap = [
  {
    phase: "🚀 Phase 0 — Soft‑Launch",
    title: "Open Doors & Core Essentials",
    description: `
- Everyone Can Publish – any creator who meets our content guidelines can start posting from day one.
- Author Referral Program v1 – share your invite link; every verified author you bring earns you algorithm discovery boosts and free DMCA credits our legal team will send on your behalf.
- 100 % Rights Retention + Copyright/DMCA Assist
- Rich WYSIWYG/Markdown Editor (images, GIFs, glow effects)
- Seamless Migration Concierge (import chapters, metadata, covers)
- Instant Tip Jars / Ko‑fi / Patreon Embeds
- Fair‑Play Discovery (Double‑Rating + anti‑bias algorithm seed)
- Reviewer Accountability – Ratings less than 3★ must include written review.
- Basic Analytics (views, likes, star breakdown)
- Comment/Review Moderation + Soft‑Hide Toxicity
- Scrivener & similar writing‑tool import/API access
    `,
  },
  {
    phase: "🌱 Phase 1 — Boost & Insight",
    title: "Deepen Engagement • Grow Revenue",
    description: `
- Referral Program v2 – tiered rewards (bonus visibility, extra DMCA credits, marketing tokens)
- DMCA Support
- Algorithm “Trust Score” Booster (tapering)
- Music & Sound‑Effect Embeds
- Advanced Analytics Dashboard: heat‑maps, drop‑offs, reader‑overlap charts
- Author‑Support Subscription, Gifts & Memberships (Patreon‑swap early access)
- Polls
- Early Revenue‑Share Pilots
- Optional 6‑Month Exclusivity Track (+50 % visibility & higher rev‑split) not binding, you can cancel with a 1 week notice.
- Author Blog / Post Feed & Comment Threads
- Platform‑Hosted Newsletter Builder + Subscriber Export
- Seasonal Campaign Priority Slots
- Banner A/B Tests + Poll Booster Tokens
- Quiet Mode & Trigger Warning Tools
- Concierge Promo & Mental‑Health Support
- Discounted Creative Services Marketplace (covers, trailers, editing)
    `,
  },
  {
    phase: "📈 Phase 2 — Monetize & Market",
    title: "Power Tools & Self‑Serve Promotion",
    description: `
- Self‑Serve Ad Manager
- Marketing Boost Credits & Campaign Analytics
- Curated Bundle Royalties & Engagement‑Pool Payouts
- Digital Author Signs & Reader Scrapbooks
- Personal Marketing Kit
- FanArt Gallery + Community Wiki + Interactive Q&A Hub
- Enhanced Media Limits
- AI Promotion Suite
- Author Wiki & Series Lore Pages (beta)
    `,
  },
  {
    phase: "🌟 Phase 3 — Pro & Prestige",
    title: "Scale Your Brand Beyond Inkosei",
    description: `
- Author Pro Toolkit
- Newsletter Relay
- Studio Package
- External Opportunity Pipeline
- Mentorship Circle
- Governance Voting
- Mobile App Creator Dash + API access
    `,
  },
  {
    phase: "🧭 Phase 4 — Frontier",
    title: "AI, Global Reach & Everywhere Access",
    description: `
- AI Translation & Audiobook Generation
- LLM‑Driven Recommendation Revamp
- Community‑Curated Localization & Fan‑Sub Revenue Split
- No‑Nonsense Lite Reading Mode & Reader‑Side Plugins
- Creator Equity Pool & Long‑Term Revenue‑Share Tokens
- Open Marketplace for IP licensing (games, comics, animation)
    `,
  },
];

const readerRoadmap = [
  {
    phase: "Phase 0 — Day‑One Delight",
    title: "Open doors, zero friction.",
    description: `
- Vertical Scroll Discovery
- Mood & Pacing Filters
- Long-Press Info Cards
- Global Search
- Genre Browse and Tag Landing Pages
- Basic Filters & Sorting
- Trending & New Releases
- Story Previews
- Author Profiles
- Double‑Rating (Stars ★ + Likes ❤)
- Site-Wide Genre Ban
- Clean, Distraction-Free Reader
- Typography Controls
- In‑Page Notes
- Dark/Light Themes
- Responsive Design
- Cross-Device Progress Sync
- Chapter Navigation
- Reading History
- Save & Resume
- Keyboard & Touch Controls
- Content Safety Tools
- Basic TTS
- Equal Exposure Policy
- Community Comments
- Authentic Review Policy
- Collaborative Collections
- Full Community Feed
- Forums & Threads
- Follow Author / Story Alerts
- Guest Access & Pseudonym Mode
- Permanent Likes/Stars
- Comment Access
- Submit Text Reviews
- Bookmark Stories
- Notifications
- User Profile Page
- Vanity Options
- Author Posts & Polls
- Privacy Shield
- Readers ≠ Wallets
    `,
  },
  {
    phase: "Phase 1 — Discover & Personalize",
    title: "Tailored Exploration",
    description: `
- For You Page
- Custom & Marketplace Themes
- Multimedia Chapters
- Advanced Sorting
- Personalized Recommendations
- Quote Graphics
- Friend Feed & DMs V1
- Cloud TTS v1
    `,
  },
  {
    phase: "Phase 2 — Immerse & Connect",
    title: "Reading Becomes an Event",
    description: `
- Friend Feed & DMs V2
- Karma Coins + Vanity Perks
- Live “Ask for Recs” Thread
- Advanced Reader Analytics
- Interactive Engagement
- Gamification & Reader Rewards
- Real-Time Social Reading
- Digital Author Signatures 1.0
- AudioBooks
    `,
  },
  {
    phase: "Phase 3",
    title: "AI & Global Expansion",
    description: `
- AI‑Enhanced TTS & Audiobooks
- Instant Translation Pipeline
- LLM‑Powered Recommendations v2
- No‑Nonsense Lite Mode
- Mobile Apps & Offline Packs
    `,
  },
];



export default function RoadmapPage() {
  const [selected, setSelected] = useState("author");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const data = selected === "author" ? authorRoadmap : readerRoadmap;

  const openModal = (phase) => {
    setModalContent(phase);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        ref={ref}
        className="relative px-4 py-8 max-w-6xl mx-auto flex pt-30 pb-40"
      >
        {/* Glowing Road */}
        <div className="relative w-6 sm:w-8 flex-shrink-0 mr-8">
          {/* background “road” */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 sm:w-3 h-full rounded-full bg-purple-800 shadow-[0_0_20px_4px_rgba(147,51,234,0.5)]"></div>

          {/* animated glowing progress */}
          <motion.div
            style={{ height: barHeight }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-2 sm:w-3 rounded-full bg-amber-400 shadow-[0_0_30px_8px_rgba(251,191,36,0.7)]"
          />
        </div>

        {/* Roadmap content */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-amber-400 via-pink-500 to-black bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            RoadMap
          </motion.h1>

          <div className="flex justify-center mb-8 gap-4">
            <button
              className={`px-6 py-2 rounded-full font-semibold ${
                selected === "author"
                  ? "bg-white text-purple-700"
                  : "bg-purple-800 hover:bg-purple-700"
              }`}
              onClick={() => setSelected("author")}
            >
              For Authors
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold ${
                selected === "reader"
                  ? "bg-white text-purple-700"
                  : "bg-purple-800 hover:bg-purple-700"
              }`}
              onClick={() => setSelected("reader")}
            >
              For Readers
            </button>
          </div>

          <div className="grid gap-6">
            {data.map((phase, idx) => (
              <motion.div
                key={idx}
                className="bg-purple-800/60 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-bold mb-2">{phase.phase}</h2>
                <p className="text-lg font-semibold mb-4">{phase.title}</p>
                <button
                  onClick={() => openModal(phase)}
                  className="bg-white text-purple-700 font-semibold px-4 py-2 rounded hover:bg-purple-300 hover:text-white transition"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-purple-900 max-w-2xl w-full p-6 rounded-lg relative">
              <button
                className="absolute top-2 right-2 text-white hover:text-purple-300 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4">{modalContent.phase}</h2>
              <h3 className="text-xl font-semibold mb-4">
                {modalContent.title}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-100">
                {modalContent.description}
              </pre>
            </div>
          </div>
        )}
      </div>
      <ContactSection />
    </>
  );
}