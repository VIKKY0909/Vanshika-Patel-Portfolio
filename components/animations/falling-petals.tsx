"use client";

import { motion } from "framer-motion";

export function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-rose-200 dark:bg-rose-800 rounded-full transform rotate-45"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 1, 0],
            y: ["0vh", "100vh"],
            x: [0, Math.random() * 100 - 50],
            rotate: [45, 405],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}