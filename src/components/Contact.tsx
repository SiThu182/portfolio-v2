"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealHeading } from "./motion-kit";

const links = [
  {
    label: "Email",
    value: "sithuaung182@gmail.com",
    href: "mailto:sithuaung182@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/SiThu182",
    href: "https://github.com/SiThu182",
  },
  {
    label: "LinkedIn",
    value: "si-thu-aung",
    href: "https://www.linkedin.com/in/si-thu-aung-4660881a8/",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-shell bg-white/70 text-slate-950 dark:bg-slate-950 dark:text-white"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
              Contact
            </p>
            <RevealHeading text="Get in touch." className="text-5xl font-black tracking-tight sm:text-7xl" />
            <p className="mt-5 max-w-xl leading-8 text-slate-700 dark:text-slate-300">
              I am open to senior full-stack roles in Thailand, Singapore, and remote teams.
              Burmese is my native language, and English is my intermediate working language.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href={link.href}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-cyan-700/50 hover:bg-cyan-50/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300/50 dark:hover:bg-white/[0.07]"
              >
                <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300">{link.label}</p>
                <p className="mt-2 break-words font-semibold text-slate-950 dark:text-white">{link.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
