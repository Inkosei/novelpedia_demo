import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa"
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
    phase: "Phase A — Day‑One Delight",
    title: "Search & Browse",
    description: `
- Vertical Scroll Discovery ▸ A TikTok-style feed for novels, enabling quick previews and frictionless browsing, including synopsis, quotes, and other novel content.
- Global Search ▸ Search by title, tag, or author, with autocomplete suggestions and typo tolerance.
- Basic Filters & Sorting ▸ On search results and browse pages, allowing sorting by genre, tag, status (ongoing/completed), most recent, highest rated, or most commented.
- Genre Browse and Tag Landing Pages ▸ Dedicated pages for exploring specific genres and tags.
- Site-Wide Genre Ban ▸ Flag genres that you don't prefer sitewide. No more spammy home screens.
    `,
  },
  {
    phase: "Phase B — Day‑One Delight",
    title: "Story Discovery",
    description: `
- Mood & Pacing Filters ▸ Options to refine searches beyond genre.
- Long-Press Info Cards ▸ Access all necessary story details without navigating to a new page.
- Sections for Trending Stories and New Releases ▸ Curated lists of popular and newly published content.
- Story Previews ▸ In lists and search results, displaying cover, title, author, star rating, synopsis, views, and likes.
- Author Profiles ▸ Showcasing author bio, badge, profile picture, and all published stories.
- Double‑Rating (Stars ★ + Likes ❤) ▸ Combining Stars for nuanced critical feedback with Likes for quick "enjoyed it" signals to achieve better recommendation accuracy and transparency.
    `,
  },
  {
    phase: "Phase C — Day‑One Delight",
    title: "Reading Interface",
    description: `
- Clean, Distraction-Free Reader layout ▸ An uncluttered design with minimized UI elements.
- Typography Controls ▸ Options to change fonts, spacing, margins, and dyslexia-friendly options.
- Dark/Light and Custom Themes ▸ Options for custom background and font colors, saved locally.
- Responsive Design ▸ Ensures the reading view works seamlessly across desktop, tablet, and mobile devices.
- Chapter Navigation ▸ With previous/next buttons and a persistent table of contents.
- Keyboard & Touch Controls ▸ For navigation within the reader.
    `,
  },
  {
    phase: "Phase D — Day‑One Delight",
    title: "Reading Progress",
    description: `
- Cross-Device Progress Sync ▸ Enables readers to resume exactly where they left off on any device.
- Reading History ▸ Tracks stories and chapters read (temporarily for guests, permanently synced for registered users).
- Save & Resume functionality ▸ Automatically remembers the reader's last position.
- In‑Page Notes ▸ Create notes on books, save power systems, quotes, or just add your notes.
- In-built Note-taking ▸ For quotes, characters, or lore.
- Basic Text-to-Speech (TTS) functionality ▸ Leverages browser/OS built-in capabilities.
    `,
  },
  {
    phase: "Phase E — Day‑One Delight",
    title: "Safety & Policy",
    description: `
- Content Safety Tools ▸ Including trigger warnings, spoiler protection, and a Quiet Mode to mute notifications and reduce visual clutter.
- Equal Exposure Policy ▸ Every novel gets an equal chance.
- Privacy Shield ▸ With encrypted log-in or pseudonym mode, ensuring minimal data collection and no third-party trackers.
- Readers ≠ Wallets ▸ No paywalls, with monetization always optional and transparent, ensuring core content remains fully free and accessible.
    `,
  },
  {
    phase: "Phase F — Day‑One Delight",
    title: "Comments & Reviews",
    description: `
- Chapter & Paragraph Comments ▸ Allowing readers to react, upvote, and reply inline.
- Authentic Review Policy ▸ Requires explanations for ratings below 3★ to reduce spammy feedback, with reviewer history visibility. Authors also cannot delete constructive reviews.
- Guest Access & Pseudonym Mode ▸ For browsing public stories and interacting (commenting, liking, rating) temporarily without an account, prompting registration to save contributions permanently.
- Permanent Likes/Star Ratings ▸ For registered users, with an average rating displayed.
- Full Comment Access ▸ For registered users, including upvote/downvote functionality.
- Submit Text Reviews ▸ On the main story page for longer feedback, compulsory with a rating.
    `,
  },
  {
    phase: "Phase G — Day‑One Delight",
    title: "Community Features",
    description: `
- Public & Collaborative Collections ▸ Crowd-curated lists allowing users to create, edit, and share their favorite story lists.
- Full Community Feed ▸ Where readers and authors can make posts.
- Community Forums & Threads ▸ Including site-wide, book-specific, and live chat rooms.
- Follow Author / Story Alerts ▸ To get notified when new chapters drop.
- Author Posts & Polls ▸ In a scroll feed for logged-in users, allowing comments and reactions.
    `,
  },
  {
    phase: "Phase H — Day‑One Delight",
    title: "Personal Library",
    description: `
- Bookmark Stories ▸ To a personal Library/Favorites section for easy access.
- "To-Read" and "Currently Reading" Lists ▸ Within the library.
- Notifications ▸ For new chapter alerts, replies to comments, and followed author activity.
- Registration & Authentication ▸ With email/password and optional social login.
    `,
  },
  {
    phase: "Phase I — Day‑One Delight",
    title: "User Profiles",
    description: `
- User Profile Page ▸ Displaying avatar, bio, badges, reading stats, collections (public + private), comment & rating history, and achievements.
- User Vanity options ▸ Like achievement displays, profile banners, pictures, frames, and name tags.
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

function groupReaderPhases(roadmap) {
  const grouped = [];
  const dayOneItems = [];
  const otherItems = [];

  roadmap.forEach(item => {
    if (item.phase.includes("Day‑One Delight")) {
      dayOneItems.push(item);
    } else {
      otherItems.push(item);
    }
  });

  if (dayOneItems.length > 0) {
    grouped.push({
      phase: "☀️ Day‑One Delight",
      title: "Core Features Available at Launch",
      isGroup: true,
      items: dayOneItems.map(item => ({ ...item, originalPhase: item.phase, phase: item.phase.split('—')[0].trim() })),
    });
  }

  return [...grouped, ...otherItems];
}


// --- NEW MODAL COMPONENT ---
const RoadmapModal = ({ content, closeModal }) => {
  // Parse the description string into a list of styled items
  const renderDescription = (desc) => {
    if (!desc) return null;
    return desc.trim().split('\n').map((line, index) => {
      const isListItem = line.trim().startsWith('-');
      return (
        <p key={index} className={isListItem ? "ml-4 pl-2 relative before:content-['▸'] before:absolute before:left-0 before:text-violet-400" : ""}>
          {isListItem ? line.trim().substring(1).trim() : line}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          className="bg-black/50 backdrop-blur-md border border-violet-500 rounded-xl shadow-2xl shadow-violet-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          <motion.button
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            onClick={closeModal}
            whileHover={{ scale: 1.2, rotate: 90 }}
          >
            <FaTimes size={24} />
          </motion.button>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-violet-300">{content.originalPhase || content.phase}</h2>
          <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-200">{content.title}</h3>
          <div className="space-y-2 text-gray-300 leading-relaxed">
            {renderDescription(content.description)}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


// --- MAIN ROADMAP PAGE COMPONENT ---
export default function RoadmapPage() {
  const [selected, setSelected] = useState("author");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Use the helper function to process data for rendering
  const data = selected === "author" ? authorRoadmap : groupReaderPhases(readerRoadmap);

  const openModal = (phase) => {
    setModalContent(phase);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div ref={ref} className="relative px-4 py-8 max-w-6xl mx-auto flex pt-32 md:pt-40 pb-40">
        {/* Themed Glowing Road */}
        <div className="relative w-2 sm:w-3 flex-shrink-0 mr-6 sm:mr-8">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full rounded-full bg-black/30"></div>
          <motion.div
            style={{ height: barHeight }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full rounded-full bg-violet-500 shadow-[0_0_15px_5px_rgba(139,92,246,0.5)]"
          />
        </div>

        {/* Roadmap content */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-violet-300"
            style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Roadmap
          </motion.h1>

          <div className="flex justify-center mb-10 gap-2 sm:gap-4">
            <motion.button
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selected === "author"
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/40"
                  : "bg-transparent border border-violet-800 text-violet-300 hover:bg-violet-900/50"
              }`}
              onClick={() => setSelected("author")}
              whileTap={{ scale: 0.95 }}
            >
              For Authors
            </motion.button>
            <motion.button
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selected === "reader"
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/40"
                  : "bg-transparent border border-violet-800 text-violet-300 hover:bg-violet-900/50"
              }`}
              onClick={() => setSelected("reader")}
              whileTap={{ scale: 0.95 }}
            >
              For Readers
            </motion.button>
          </div>

          <div className="grid gap-8">
            {data.map((phase, idx) => (
              // CONDITIONAL RENDERING: Check if it's a group or a single item
              phase.isGroup ? (
                // --- RENDER THE GROUPED CONTAINER ---
                <motion.div key={idx} className="bg-black/30 border border-violet-700/50 rounded-xl p-4 sm:p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h2 className="text-3xl font-bold mb-2 text-violet-300">{phase.phase}</h2>
                  <p className="text-lg text-gray-300 mb-6">{phase.title}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {phase.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-violet-900/30 p-4 rounded-lg flex flex-col justify-between border border-violet-800/60">
                        <div>
                          <h3 className="font-bold text-gray-100">{item.phase}</h3>
                          <p className="text-violet-200 text-sm mb-3">{item.title}</p>
                        </div>
                        <button onClick={() => openModal(item)} className="mt-2 text-sm w-full bg-violet-700/70 text-white font-semibold px-3 py-1.5 rounded hover:bg-violet-600 transition-colors">
                          Details
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // --- RENDER A STANDARD SINGLE CARD ---
                <motion.div key={idx} className="bg-black/30 border border-violet-700/50 backdrop-blur-sm p-6 rounded-xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h2 className="text-2xl font-bold mb-2 text-violet-300">{phase.phase}</h2>
                  <p className="text-lg font-semibold mb-4 text-gray-200">{phase.title}</p>
                  <button onClick={() => openModal(phase)} className="bg-transparent border border-violet-500 text-violet-300 font-semibold px-4 py-2 rounded hover:bg-violet-500 hover:text-white transition-colors">
                    Read More
                  </button>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {modalOpen && <RoadmapModal content={modalContent} closeModal={closeModal} />}
      
      <ContactSection />
    </>
  );
}

