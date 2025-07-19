import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center h-[450px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
        <div className="relative z-20 p-8">
            <h2
                className="text-4xl font-bold mb-4 text-violet-300"
                style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
            >
                Get in Touch
            </h2>
            <p className="mb-8 text-lg text-gray-300">
                Join our community of readers and authors. Be part of the revolution.
            </p>
            <div className="flex gap-4 mb-8 justify-center">
                <button
                    className="bg-violet-700 hover:bg-violet-600 text-white px-6 py-2 rounded-md shadow-md transition-colors duration-300"
                    onClick={() => window.open('https://discord.gg/FwubN8S6aZ', '_blank')}
                >
                    Join Discord
                </button>
            </div>
            <span className="text-purple-200 text-sm">
                © 2025 NovelPedia. Built by readers, for readers. Coming soon.
            </span>
        </div>
    </motion.div>
  );
}
