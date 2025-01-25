"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ x: number[], y: number[] }>>([])

  useEffect(() => {
    // Generate random positions after component mounts
    setElements([...Array(6)].map(() => ({
      x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
      y: [Math.random() * 200 - 100, Math.random() * 200 - 100]
    })))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 rounded-full bg-background/5"
          initial={{ 
            x: 0,
            y: 0,
            scale: 0
          }}
          animate={{ 
            x: pos.x,
            y: pos.y,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  )
}