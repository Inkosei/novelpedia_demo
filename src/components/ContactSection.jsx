import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-8 text-lg">
        Join our community of readers and authors. Be part of the revolution.
      </p>
      <div className="flex gap-4 mb-8">
        <button className="bg-white text-purple-700 px-6 py-2 rounded shadow hover:bg-purple-100">
          Join Newsletter
        </button>
        <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-purple-700">
          Join Discord
        </button>
      </div>

      <span className="text-purple-200 text-sm">
        © 2024 NovelPedia. Built by readers, for readers. Coming soon.
      </span>
    </motion.div>
  );
}
