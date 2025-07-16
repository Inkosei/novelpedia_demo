"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Countdown({ targetDateUTC }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDateUTC));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDateUTC));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateUTC]);

  if (!timeLeft) {
    return <p className="text-red-400 text-xl">Invalid Date</p>;
  }

  const boxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    // Container now uses smaller gaps on mobile and flex-nowrap to prevent line breaks
    <div className="flex gap-2 sm:gap-4 justify-center items-center flex-nowrap">
      {boxes.map((box) => (
        <FlipBox key={box.label} value={box.value} label={box.label} />
      ))}
    </div>
  );
}

function FlipBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ rotateX: 90, y: -20, opacity: 0 }}
          animate={{
            rotateX: 0,
            y: 0,
            opacity: 1,
            // Adds a "flash" or "pulse" glow on each number change
            boxShadow: [
              "0 0 10px rgba(168, 85, 247, 0.2)",
              "0 0 30px rgba(168, 85, 247, 0.7)",
              "0 0 10px rgba(168, 85, 247, 0.2)",
            ],
          }}
          exit={{ rotateX: -90, y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="
            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 /* Responsive sizing */
            bg-black/30 /* Frosted glass effect */
            border border-violet-600/50
            backdrop-blur-sm
            rounded-lg
            flex justify-center items-center
            text-2xl sm:text-3xl md:text-4xl font-mono font-bold
            shadow-[0_0_10px_rgba(168,85,247,0.3)]
            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] /* Enhanced hover glow */
            transition-shadow duration-300
            text-violet-200
          "
        >
          {/* Inner text glow for more depth */}
          <span style={{ textShadow: "0 0 8px #c4b5fd" }}>
            {value.toString().padStart(2, "0")}
          </span>
        </motion.div>
      </AnimatePresence>
      <span className="text-violet-400 mt-3 text-xs md:text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function getTimeLeft(targetDateUTC) {
  const targetDate = new Date(targetDateUTC);
  if (isNaN(targetDate.getTime())) {
    return null;
  }
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}