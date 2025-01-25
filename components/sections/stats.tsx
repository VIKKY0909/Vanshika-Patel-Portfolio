"use client"

import { motion } from "framer-motion"

export function Stats() {
  const stats = [
    { value: "70%", label: "Engagement Rate" },
    { value: "73%", label: "Conversion Rate" },
    { value: "84%", label: "Client Satisfaction" }
  ]

  return (
    <section className="py-24 bg-beige">
    <div className="container px-4">
      <div className="stats-grid ">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="text-4xl font-bold mb-2 text-yellow-100">{stat.value}</span>
            <span className="text-lg text-yellow-100">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  )
}