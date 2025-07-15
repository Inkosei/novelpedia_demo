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
    <div className="flex gap-4 justify-center items-center flex-wrap">
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
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="
            w-20 md:w-24 h-24 md:h-28
            bg-gray-900
            border border-purple-500
            rounded-lg
            flex justify-center items-center
            text-3xl md:text-4xl font-mono font-bold
            shadow-[0_0_20px_rgba(168,85,247,0.7)]
            text-purple-300
          "
        >
          {value.toString().padStart(2, "0")}
        </motion.div>
      </AnimatePresence>
      <span className="text-purple-400 mt-2 text-xs md:text-sm uppercase tracking-wide">
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
