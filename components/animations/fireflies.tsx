"use client";

import { motion } from "framer-motion";

export function Fireflies() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 2, 1],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}