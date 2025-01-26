"use client";

import { motion } from "framer-motion";


const experiences = [
  {
    role: "Academic Content Creator",
    company: "Parul University",
    duration: "Jul 2024 - Nov 2024",
    achievements: [
      "Reframing and editing course content to enhance clarity and impactients.",
      "Writing compelling scripts for educational lectures",
      "Performing content editing for e-content to ensure high quality and consistency."
    ],
  },
  {
    role: "Content Strategist",
    company: "DigiFrills",
    duration: "Jan 2024 - Jun 2024",
    achievements: [
      "Developed SEO-driven strategies for multilingual campaigns (English & Telugu).",
      "Boosted client engagement by 30% through tailored editorial calendars.",
    ],
  },
  {
    role: "Content Writer",
    company: "TNM",
    duration: "Apr 2024 - Nov 2024",
    achievements: [
      "Crafted persuasive content for B2B, B2C, and B2R websites.",
      "Collaborating with team members to brainstorm ideas and develop content strategies.",
    ],
  },
];
=======

export function Experience() {
  return (
    <section className="relative py-24 bg-secondary-foreground text-light">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-6xl font-bold text-primary-foreground mb-4 sm:text-6xl md:text-8xl ">Experience</h2>
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
