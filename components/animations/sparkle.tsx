"use client";

import { motion } from "framer-motion";

export function Sparkle({ delay = 0 }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
      }}
    />
  );
}