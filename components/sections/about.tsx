"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import main from "@/public/Images/first.jpeg";
import calande from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.11 (1).jpeg";
import tnm from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.12.jpeg";
import order from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.10 (1).jpeg";
import last from "@/public/Images/WhatsApp Image 2024-12-21 at 19.08.35.jpeg";
import pic from "@/public/Images/pic.jpg";

export function About() {
  return (
    <section className="relative py-24 bg-beige">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="relative flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative">
            <Image
              src={pic}
              alt="Vanshika Patel"
              width={350}
              height={400}
              className="rounded-full shadow-lg ring ring-foreground ring-offset-3"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="rounded-full border-8 border-background  animate-pulse"
                style={{ width: "350px", height: "400px" }}
              ></motion.div>
            </div>
          </div>
          <h1 className="mt-6 text-5xl font-bold text-foreground text-center leading-snug">
            Vanshika Patel
          </h1>
          <p className="mt-4 text-lg max-w-3xl text-secondary-foreground text-center">
            Transforming ideas into impactful content that inspires action. My
            expertise spans SEO-driven strategies, persuasive campaigns, and
            audience-first narratives designed to elevate your brand.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src={main}
              alt="Writing in progress"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-muted-foreground"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="leading-relaxed mb-4 text-se text-foreground">
              I specialize in creating compelling narratives that deliver
              results. My journey in content creation spans over several years,
              blending creativity with precision to craft impactful campaigns,
              website copy, and audience-focused calendars.
            </p>
            <p className="leading-relaxed text-secondary-foreground">
              I believe content should do more than inform—it should inspire
              action. My process is a mix of deep strategy, creativity, and
              audience insight, ensuring every project makes a difference.
            </p>
          </motion.div>
        </div>

        </div>
    </section>
  );
}
