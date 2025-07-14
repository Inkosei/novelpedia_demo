import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center max-w-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-5xl font-bold mb-8">About us</h1>

      <div className="bg-purple-700 bg-opacity-40 rounded-lg p-8 mb-4 border-2 border-amber-500">
        <p className="text-xl mb-2">
          We are students, 9–5 workers, who have decided that we are fed up with the current ecosystem that big corporates are feeding us and instead we banded to build something meaningful and lasting.
        </p>
      </div>
    </motion.div>
  );
}
