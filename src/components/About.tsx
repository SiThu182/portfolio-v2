"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { RevealHeading } from "./motion-kit";

const experience = [
  {
    role: "Full Stack Developer (Independent / Contract)",
    company: "RevenueAI and Akaris.ai",
    period: "Apr 2026 - Present",
    details:
      "Built an AI lead-response SaaS and a course platform API, covering OpenAI integration, messaging channels, Stripe payments, automated testing, and deployment on Ubuntu with AWS EC2, Apache, and SSL.",
  },
  {
    role: "Senior Software Engineer",
    company: "Ismart Education",
    period: "Feb 2023 - Mar 2026",
    details:
      "Delivered end-to-end features for a PTE education platform, including learner workflows, speech recognition, appointment booking, payments, deployment coordination, and production release support.",
  },
  {
    role: "Senior Full Stack Developer",
    company: "AGGA.IO Co., Ltd.",
    period: "Sept 2020 - Apr 2023",
    details:
      "Delivered enterprise, government, healthcare, and finance projects including document management, telehealth, disease surveillance, lifestyle portal, SMS verification, authentication, and CB Bank payment integration.",
  },
  {
    role: "Mentor - Web and Android Bootcamp",
    company: "Myanmar IT Consulting",
    period: "May 2019 - Sept 2022",
    details:
      "Mentored students on web and Android project structure, API integration, and practical implementation workflows.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.75", "end 0.6"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="about" className="section-shell" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">About Me</p>
            <RevealHeading
              text="I work across product, backend, frontend, and deployment."
              className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
            />
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              I am a Senior Full Stack Developer based in Myanmar with 7+ years of experience
              across education, government, healthcare, and  ecommerce projects. I usually
              work from requirements and client meetings through system design, implementation,
              integration, deployment, and production release support. My strongest stack is PHP
              and Laravel with Vue or React, and I also use AI tools and LLM APIs in my recent work.
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative space-y-4 pl-8">
            <div aria-hidden="true" className="absolute bottom-0 left-2 top-0 w-0.5 bg-slate-200 dark:bg-slate-800">
              <motion.div
                style={{ scaleY: lineScale }}
                className="h-full w-full origin-top bg-cyan-700 dark:bg-cyan-300"
              />
            </div>
            {experience.map((item) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative rounded-2xl border border-slate-200 bg-white/84 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-white bg-cyan-700 dark:border-slate-950 dark:bg-cyan-300"
                />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-medium text-cyan-700 dark:text-cyan-300">
                      {item.company}
                    </p>
                  </div>
                  <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                  {item.details}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
