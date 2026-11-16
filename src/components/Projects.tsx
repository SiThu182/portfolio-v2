"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealHeading, TiltCard } from "./motion-kit";

const projects: {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  link?: string;
}[] = [
  {
    title: "RevenueAI",
    type: "AI SaaS",
    description:
      "Multi-tenant AI lead-response platform for Australian service businesses, with lead qualification, staff handoff, booking, follow-ups, messaging channel integrations, Stripe billing, and 800+ automated test cases.",
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Stripe", "AWS EC2"],
  },
  {
    title: "BurmeseMart E-Commerce",
    type: "E-Commerce",
    description:
      "Multi-region e-commerce web application for Myanmar and global markets, supporting product workflows, admin management, AWS S3, and payment processing.",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS S3", "Payment Integration"],
    link: "https://burmesemart.com",
  },
  {
    title: "Electronic Document Management System",
    type: "Enterprise",
    description:
      "Document management system for enterprise document handling, approval workflows, tracking, and access management.",
    technologies: ["Laravel", "Vue.js", "MySQL", "JWT"],
  },
  {
    title: "Akaris.ai Course Platform API",
    type: "Education",
    description:
      "Course platform API with Stripe Checkout, idempotent payment webhooks, Firebase authentication, enrollment access rules, and admin modules for courses, payments, and news.",
    technologies: ["Express", "Prisma", "MySQL", "Stripe", "Firebase Auth"],
    link: "https://akaris.ai/",
  },
  {
    title: "PTE Education Platform",
    type: "Education",
    description:
      "Web and mobile education platform with automated PTE score generation using speech recognition and speech-to-text features, plus appointment booking, payments, AWS deployment.",
    technologies: ["Laravel", "React", "React Native", "MySQL", "AWS"],
    link: "https://www.aigmapte.com",
  },
     {
    title: "Student Tracker",
    type: "Education Operations",
    description:
      "Student tracking web application supporting learner follow-up workflows and education operations.",
    technologies: ["Laravel", "React", "MySQL"],
  },
  {
    title: "Myanmar Accountancy Council",
    type: "Public Sector",
    description:
      "Public-sector accountancy system with structured application workflows, backend modules, database work, and payment integration.",
    technologies: ["Laravel", "PHP", "MySQL", "Payment Integration"],
  },
  {
    title: "MSS & DSS - Malaria and Dengue Surveillance System",
    type: "Healthcare",
    description:
      "WHO-supported disease surveillance system for malaria and dengue workflows, data collection, and reporting visibility.",
    technologies: ["Laravel", "React", "MySQL", "Reporting"],
  },
  {
    title: "LifeX Lifestyle Portal",
    type: "Lifestyle Portal",
    description:
      "Lifestyle portal features including OTP login, subscription and renewal workflows, content feed, quizzes, points, courses, profiles, admin management, and React-Laravel REST API integration.",
    technologies: ["React", "Laravel", "REST APIs", "OTP", "Admin CMS"],
  } 
   
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-shell" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="section-label mb-3">Projects</p>
            <RevealHeading
              text="Projects I've worked on."
              className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
            />
          </div>
          <p className="max-w-md leading-7 text-slate-600 dark:text-slate-300">
            A selection of AI, education, public-sector, healthcare, enterprise, e-commerce,
            and payment integration work.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <TiltCard
              key={project.title}
              delay={(index % 2) * 0.1}
              className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow] hover:border-cyan-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/72 dark:hover:border-cyan-700 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 transition hover:border-cyan-700 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                  >
                    Visit
                  </a>
                ) : null}
              </div>

              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
