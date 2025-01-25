"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ArchCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX - innerWidth / 2) / 25
      const y = (clientY - innerHeight / 2) / 25
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="absolute top-20 right-20 w-64 h-64 hidden lg:block"
      style={{
        perspective: "1000px",
        rotateX: mousePosition.y,
        rotateY: -mousePosition.x,
      }}
      animate={{
        rotateX: mousePosition.y,
        rotateY: -mousePosition.x,
      }}
      transition={{ type: "spring", stiffness: 75, damping: 15 }}
    >
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0 bg-card rounded-2xl p-6 transform-gpu"
          initial={{ scale: 0, rotateX: 45 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <div className="text-card-foreground space-y-4">
            <motion.div
              className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="text-2xl">✍️</span>
            </motion.div>
            <motion.h3 
              className="text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              Content Expertise
            </motion.h3>
            <motion.ul 
              className="text-sm space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <li>✨ SEO Strategy</li>
              <li>✨ Social Media</li>
              <li>✨ Editorial Writing</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}