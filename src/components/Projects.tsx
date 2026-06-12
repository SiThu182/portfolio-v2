"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FloatingElements from "./FloatingElements";

const projects = [
  {
    title: "PTE Education Platform",
    description: "Full-stack PTE exam preparation platform with speech recognition, PTE score generation, and appointment booking system (similar to Calendly).",
    technologies: ["Next.js", "React Native", "Laravel", "PostgreSQL", "AWS"],
    link: "https://www.aigmapte.com",
    gradient: "from-violet-500 to-purple-500",
    icon: "🎓",
  },
  {
    title: "BurmeseMart E-Commerce",
    description: "Myanmar e-commerce marketplace serving both local and global markets, with full payment integration (Stripe, Dinger) and admin CMS.",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    link: "https://burmesemart.com",
    gradient: "from-purple-500 to-fuchsia-500",
    icon: "🛍️",
  },
  {
    title: "Student Web Portal",
    description: "CMS-based student management portal for SmartEdu Globe with course tracking, enrollment management, and real-time updates.",
    technologies: ["React", "Node.js", "PostgreSQL", "Azure DevOps"],
    link: "https://smarteduglobe.com",
    gradient: "from-indigo-500 to-violet-500",
    icon: "📚",
  },
  {
    title: "EDMS",
    description: "Electronic Document Management System with secure workflows, role-based access control, and document versioning for enterprise use.",
    technologies: ["Laravel", "Vue.js", "MySQL", "JWT"],
    link: "#",
    gradient: "from-fuchsia-500 to-pink-500",
    icon: "📁",
  },
  {
    title: "Tele Health Myanmar",
    description: "Telemedicine platform connecting patients with healthcare providers, featuring appointment scheduling, secure messaging, and medical records.",
    technologies: ["React", "Laravel", "PostgreSQL", "WebSocket"],
    link: "#",
    gradient: "from-violet-400 to-purple-500",
    icon: "🏥",
  },
  {
    title: "Malaria & Dengue Surveillance",
    description: "Disease surveillance system (MSS & DSS) for real-time tracking and reporting of malaria and dengue cases across Myanmar.",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    link: "#",
    gradient: "from-purple-500 to-indigo-600",
    icon: "🖥️",
  },
  {
    title: "Myanmar Accountancy Council",
    description: "Official web portal for MAC with member management, examination scheduling, certification tracking, and regulatory announcements.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    link: "#",
    gradient: "from-fuchsia-400 to-violet-500",
    icon: "📊",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <FloatingElements />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A collection of projects showcasing modern web development practices and creative problem-solving
        </motion.p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Gradient Header with Icon */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-8xl opacity-90"
                >
                  {project.icon}
                </motion.div>
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-violet-100/80 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-xs rounded-full border border-violet-200/50 dark:border-violet-800/30 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}   
                </div>

                {/* Action Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all`}
                >
                  <span className="text-sm">View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-5 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
