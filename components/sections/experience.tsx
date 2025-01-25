"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Content Strategist",
    company: "DigiFrills",
    duration: "Jan 2023 - Present",
    achievements: [
      "Developed SEO-driven strategies for multilingual campaigns (English & Telugu).",
      "Boosted client engagement by 30% through tailored editorial calendars.",
    ],
  },
  {
    role: "Content Writer",
    company: "TNM",
    duration: "Aug 2022 - Dec 2022",
    achievements: [
      "Crafted persuasive content for B2B, B2C, and B2R websites.",
      "Delivered a high-performing order page that improved conversions by 20%.",
    ],
  },
  {
    role: "Freelance Academic Writer",
    company: "Self-Employed",
    duration: "2021 - 2022",
    achievements: [
      "Researched and authored concise academic papers for global clients.",
      "Achieved consistent client satisfaction with a 4.9/5 rating.",
    ],
  },
];

export function Experience() {
  return (
    <section className="relative py-24 bg-primary text-light">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-8xl font-bold text-primary-foreground mb-4">Experience</h2>
          <p className="text-secondary text-lg">
            A snapshot of my professional journey and key accomplishments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-background">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute w-6 h-6 bg-background rounded-full -left-3"></div>
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="text-4xl font-bold text-card-foreground mb-2">{exp.role}</h3>
                <p className="text-lg text-popover-foreground font-medium">{exp.company}</p>
                <span className="text-sm text-popover-foreground mb-4 block">{exp.duration}</span>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {achievement}
                    </li>

                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
