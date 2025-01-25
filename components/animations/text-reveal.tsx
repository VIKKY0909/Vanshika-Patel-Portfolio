"use client"

import { motion } from "framer-motion"

export function TextReveal({ children, delay = 0 }: { children: string, delay?: number }) {
  const words = children.split(" ")
  
  return (
    <div className="overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}