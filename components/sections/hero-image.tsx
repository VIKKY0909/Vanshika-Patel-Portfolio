"use client"

import { motion } from "framer-motion"
import pic from "@/public/Images/pic.jpg";
import Image from "next/image";
export function HeroImage() {
  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-[2.5rem] blur-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="relative rounded-[2rem] overflow-hidden aspect-[4/5]"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image
              src={pic}
              alt="Vanshika Patel"
              // width={350}
              // height={400}
              className="w-full h-full"
            />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </motion.div> 
    </div>
  )
}