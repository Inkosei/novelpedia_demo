import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, bg }) {
  return (
    <motion.section
      id={id}
      className={`w-screen h-screen flex items-center justify-center ${bg} snap-start`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
