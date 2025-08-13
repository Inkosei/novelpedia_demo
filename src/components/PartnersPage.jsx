import { motion } from "framer-motion";
import { FaHandshake, FaUserEdit, FaDiscord, FaShareAlt, FaLightbulb, FaGlobe, FaHeart, FaShieldAlt } from "react-icons/fa";

// --- Data for lists to keep JSX clean ---
const partnerCategories = [
    { icon: <FaUserEdit />, text: "Independent writers, editors, and creatives building the future of storytelling." },
    { icon: <FaDiscord />, text: "Aligned spaces and reading groups that share our vision." },
    { icon: <FaShareAlt />, text: "Community-powered channels that amplify our voice and share our chaos." }
];

const whyPartnerPoints = [
    { icon: <FaGlobe />, text: "Tap into a global, active reader base." },
    { icon: <FaHeart />, text: "Flexible, community-aligned collaborations." },
    { icon: <FaShieldAlt />, text: "Zero exploitation – we promote people, not just platforms." },
    { icon: <FaLightbulb />, text: "Be seen, supported, and celebrated." }
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
export default function PartnersPage() {
    return (
        <div className="min-h-screen w-full px-4 pt-32 pb-20 md:pt-40 text-gray-200 flex justify-center">
            <motion.div
                className="max-w-6xl w-full flex flex-col items-center text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* --- Hero Section --- */}
                <motion.section variants={itemVariants} className="w-full mb-20">
                    <h1
                        className="text-4xl md:text-6xl font-bold text-violet-300"
                        style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
                    >
                        Building the Future of Storytelling Together
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        From communities to creators, NovelPedia partners with visionaries to make storytelling global, ethical, and accessible.
                    </p>
                    <motion.button
                        className="mt-8 bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-violet-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Become a Partner
                    </motion.button>
                </motion.section>

                {/* --- Partner Categories --- */}
                <motion.section variants={itemVariants} className="w-full max-w-4xl mb-20">
                    <h2 className="text-3xl font-bold text-violet-300 mb-8" style={{ textShadow: "0 0 10px #a78bfa" }}>
                        Partner Categories
                    </h2>
                    <div className="space-y-4">
                        {partnerCategories.map((cat, i) => (
                            <div key={i} className="bg-black/30 border border-violet-800/50 rounded-lg p-4 flex items-center gap-4">
                                <div className="text-violet-400 text-2xl">{cat.icon}</div>
                                <p className="text-left text-gray-300">{cat.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* --- Current Partner List --- */}
                <motion.section variants={itemVariants} className="w-full mb-20">
                    <h2 className="text-3xl font-bold text-violet-300 mb-8" style={{ textShadow: "0 0 10px #a78bfa" }}>
                        Current Partner List
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {/* Creators Card */}
                        <div className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 h-full">
                            <h3 className="flex items-center text-xl font-bold mb-3 text-gray-100"><FaUserEdit className="mr-3 text-violet-400"/>Creators & Authors</h3>
                            <p className="font-semibold text-white">Anvelope</p>
                            <p className="text-sm text-gray-400">Early contributor & co-architect of our author experience.</p>
                        </div>
                        {/* Communities Card */}
                        <div className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 h-full">
                            <h3 className="flex items-center text-xl font-bold mb-3 text-gray-100"><FaDiscord className="mr-3 text-violet-400"/>Discord Communities</h3>
                            <p className="font-semibold text-white">Lectorum Nexus</p>
                            <p className="text-sm text-gray-400">Official partner server.</p>
                        </div>
                        {/* Social Partners Card */}
                        <div className="bg-black/30 border border-violet-700/50 backdrop-blur-sm rounded-xl p-6 h-full">
                            <h3 className="flex items-center text-xl font-bold mb-3 text-gray-100"><FaShareAlt className="mr-3 text-violet-400"/>Social Partners</h3>
                            <p className="font-semibold text-white">@venerablememestear – TikTok</p>
                            <p className="font-semibold text-white mt-2">@blasphemer_amon0 – TikTok</p>
                        </div>
                    </div>
                </motion.section>

                {/* --- Why Partner With Us --- */}
                <motion.section variants={itemVariants} className="w-full mb-20">
                    <h2 className="text-3xl font-bold text-violet-300 mb-8" style={{ textShadow: "0 0 10px #a78bfa" }}>
                        Why Partner With Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyPartnerPoints.map((point, i) => (
                            <div key={i} className="bg-black/30 border border-violet-700/50 rounded-xl p-6">
                                <div className="text-violet-400 text-4xl mb-4">{point.icon}</div>
                                <p className="text-gray-200 font-semibold">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* --- Footer CTA Banner --- */}
                <motion.section variants={itemVariants} className="w-full bg-gradient-to-r from-violet-950/80 to-indigo-950/80 border border-violet-700 rounded-xl py-10 px-8">
                    <h2 className="text-3xl font-bold text-white">Your Server, Channel, or Social Could Be Next.</h2>
                    <p className="mt-2 text-lg text-gray-300">We’re building something big. Let’s talk partnerships.</p>
                    <motion.button
                        className="mt-6 bg-white hover:bg-gray-200 text-violet-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Apply as a Partner
                    </motion.button>
                </motion.section>
            </motion.div>
        </div>
    );
}