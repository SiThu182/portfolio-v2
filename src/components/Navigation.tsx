"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeHref, setActiveHref] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    // The active section is whichever one crosses a thin band in the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) setActiveHref(href);
          else setActiveHref((current) => (current === href ? "" : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of links) {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/85"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="text-sm font-bold tracking-wide text-slate-950 dark:text-white">
          Si Thu Aung
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? "true" : undefined}
              className={`relative py-1 text-sm font-medium transition-colors hover:text-cyan-700 dark:hover:text-cyan-300 ${
                activeHref === link.href
                  ? "text-cyan-700 dark:text-cyan-300"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.label}
              {activeHref === link.href ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-cyan-700 dark:bg-cyan-300"
                />
              ) : null}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-700 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            Resume
          </a>
        </div>
      </nav>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-cyan-700 dark:bg-cyan-300"
      />
    </motion.header>
  );
}
