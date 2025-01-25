"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight, Pen, Star, Target } from "lucide-react";
import { TextReveal } from "@/components/animations/text-reveal";
import Link from "next/link";

export function HeroContent() {
  return (
    <motion.div
      className="relative z-10 max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Availability Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background text-primary mb-6 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-sm font-medium">Available for new projects</span>
      </motion.div>

      {/* Animated Headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-50 mb-6 tracking-tight leading-tight">
        <TextReveal delay={0.4}>
            Hi, I'm Vanshika Patel
        </TextReveal>
        <TextReveal delay={0.6}>Crafting Content That Inspires</TextReveal>
      </h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Transforming complex ideas into compelling narratives that drive engagement and deliver results.
      </motion.p>


      {/* Call to Actions */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <Button size="lg" className="group bg-background text-foreground hover:text-background hover:border-2" asChild >
          <Link
            href="https://drive.google.com/drive/folders/1pPwvFBRpEylX7xCnkaH4R4B2PlTMScyu"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            View Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="hover:shadow-md">
          <FileDown className="mr-2 h-4 w-4" />
          Download Media Kit
        </Button>
      </motion.div>
    </motion.div>
  );
}
