"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import main from "@/public/Images/first.jpeg";
import calande from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.11 (1).jpeg";
import tnm from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.12.jpeg";
import order from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.10 (1).jpeg";
import last from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.35.jpeg";
import pic from "@/public/Images/pic.jpg";

export function Project() {
  return (
    <section className="relative py-24 bg-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Work Samples */}
        <motion.div
          className="mb-16 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-7xl font-bold text-accent-foreground text-center mb-8 ">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Content Calendar for DigiFrills",
                description:
                  "A detailed content calendar for social media marketing campaigns targeting diverse audiences in English and Telugu.",
                image: calande,
                link: "https://drive.google.com/file/d/1eeGk6yMfzShclzpZIj-SPcxdzg41a_e9/view?usp=drive_link",
              },
              {
                title: "Website Content for TNM",
                description:
                  "Comprehensive website content, including product descriptions, feature highlights, and audience-specific messaging for B2B, B2C, and B2R.",
                image: tnm,
                link: "https://drive.google.com/file/d/1_30Xn076z86fIG4HCF7UBqCxd9isa_OW/view?usp=drive_link",
              },
              {
                title: "Order Page for TNM",
                description:
                  "Persuasive and audience-targeted content for the B2B, B2C, and B2R order page, emphasizing innovation and user benefits.",
                image: order,
                link: "https://drive.google.com/file/d/1Z79UmgxXmFzWVSlE7gchqnvYmVfXfAJZ/view?usp=drive_link",
              },
              {
                title: "Academic Writing Task",
                description:
                  "Summary of trends in the editorial industry, demonstrating concise writing and research skills.",
                image: last,
                link: "https://drive.google.com/file/d/1V42fMRJyyKai_7O1-bvD8PjPyXwtDrMM/view?usp=drive_link",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl border-2-border shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-card text-card-foreground">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Let’s Work Together
          </h3>
          <p className="text-primary-foreground mb-6">
            Ready to turn your vision into impactful content? Let’s make it
            happen.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
