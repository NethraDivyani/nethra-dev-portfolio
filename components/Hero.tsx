"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { socials } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section
      id="top"
      className="border-b border-line px-7 pb-[70px] pt-[92px]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto max-w-[880px]">
        <motion.div
          variants={item}
          className="mb-[22px] flex items-center gap-2 font-mono text-[13px] text-teal"
        >
          <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_8px_#4FD1C5]" />
          status: online &amp; building
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-[18px] font-display text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[1.05] tracking-tight"
        >
          Nethra Divyani
          <br />
          <span className="text-amber">writes code that ships.</span>
        </motion.h1>

        <motion.div variants={item}>
          <Terminal />
        </motion.div>

        <motion.p
          variants={item}
          className="mb-[34px] max-w-[560px] text-[1.02rem] text-text-muted"
        >
          BSc (Hons) Software Engineering graduate passionate about building
          practical software solutions—from full-stack web applications to
          AI-powered systems. I enjoy transforming real-world problems into
          reliable, user-focused applications.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-amber bg-amber px-[22px] py-3 font-mono text-[13.5px] font-semibold text-[#12100A] transition-all hover:-translate-y-px hover:bg-amber-light"
          >
            View projects →
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-[22px] py-3 font-mono text-[13.5px] text-text transition-colors hover:border-teal hover:text-teal"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-[22px] py-3 font-mono text-[13.5px] text-text transition-colors hover:border-teal hover:text-teal"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
