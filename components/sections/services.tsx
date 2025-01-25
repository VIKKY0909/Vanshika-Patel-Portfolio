"use client";

import { motion } from "framer-motion";
import { FaPenFancy, FaBullhorn, FaBookOpen } from "react-icons/fa";

const services = [
  {
    icon: <FaPenFancy className="text-background text-4xl mb-4" />,
    title: "Content Creation",
    description:
      "Crafting engaging and impactful content tailored for diverse audiences, from blogs to web copy.",
  },
  {
    icon: <FaBullhorn className="text-background text-4xl mb-4" />,
    title: "Marketing Strategy",
    description:
      "Developing SEO-driven marketing plans to boost visibility and engagement across platforms.",
  },
  {
    icon: <FaBookOpen className="text-background text-4xl mb-4" />,
    title: "Academic Writing",
    description:
      "Providing research-backed academic content that meets global standards and client satisfaction.",
  },
];

export function Services() {
  return (
    <section className="relative py-24 bg-background text-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-secondary-forground text-lg">
            Explore the professional services I offer to help you achieve your goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary-foreground p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-popover mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
