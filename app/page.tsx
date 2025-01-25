"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Project } from "@/components/sections/projects";
import NavBar from "@/components/NavBar";
import ContactMeSection from "@/components/sections/contactme";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-purple-50 dark:from-rose-950 dark:to-purple-950 overflow-hidden">
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <ContactMeSection />
      </section>
    </main>
  );
}
