"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/SiThu182" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/si-thu-aung-4660881a8/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8 text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8"
      >
        <div>
          <p className="font-bold text-slate-950 dark:text-white">Si Thu Aung</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Senior Full Stack Developer.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-semibold text-slate-600 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
