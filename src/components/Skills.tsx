"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealHeading, TiltCard } from "./motion-kit";

const primaryStack = ["Laravel", "PHP", "Vue.js", "React", "Next.js", "Node.js", "MySQL", "AWS", "Ubuntu"];

const ownership = [
  "Enterprise web and mobile application delivery",
  "REST API architecture and backend integration",
  "Authentication, payment, and external service workflows",
  "Client requirements, release planning, and production support",
];

const skillGroups = [
  {
    title: "Backend",
    summary: "Laravel and Node.js APIs for business applications, authentication, and service integrations.",
    focus: "PHP, Laravel, Node.js, Express.js, REST APIs",
  },
  {
    title: "Frontend",
    summary: "Vue, React, and Next.js interfaces for dashboards, platforms, and client-facing workflows.",
    focus: "Vue.js, React, Next.js, TypeScript, JavaScript",
  },
  {
    title: "Delivery",
    summary: "Database-backed features, Linux server deployment, source control, and production release support.",
    focus: "MySQL, PostgreSQL, Ubuntu, Apache, SSL, PM2, AWS EC2, AWS S3, Git, GitHub Actions, Azure DevOps",
  },
  {
    title: "AI",
    summary: "LLM features in products, and AI coding tools in day-to-day development.",
    focus: "OpenAI API, GitHub Copilot, Claude Code",
  },
];

const integrations = [
  "Payment integration (CB Bank, Stripe, Dinger)",
  "LLM API integration",
  "Speech recognition",
  "SMS verification",
  "Mobile app API support",
  "Client-facing requirement discussion",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-shell bg-white/60 dark:bg-slate-950/30" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="section-label mb-3">Technical Skills</p>
          <RevealHeading
            text="Focused stack for full stack product delivery."
            className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
          />
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_minmax(0,1.1fr)]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">Core Stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {primaryStack.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
              <h3 className="text-xl font-bold">What I usually own</h3>
              <ul className="mt-4 space-y-3">
                {ownership.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-700 dark:bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <div className="grid min-w-0 gap-5">
            {skillGroups.map((group, index) => (
              <TiltCard
                key={group.title}
                delay={index * 0.06}
                className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-[border-color,box-shadow] hover:border-cyan-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/72 dark:hover:border-cyan-700"
              >
                <div className="grid min-w-0 gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
                  <div className="min-w-0">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{group.summary}</p>
                    <p className="mt-2 break-words text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
                      {group.focus}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/72"
        >
          <h3 className="text-base font-bold text-slate-950 dark:text-white">Selected Experience</h3>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {integrations.map((item) => (
              <span key={item} className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
