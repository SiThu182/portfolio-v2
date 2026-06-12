"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group"
            >
              <div className="rounded-xl p-1 bg-gradient-to-br from-violet-500 to-purple-600 shadow-2xl transform-gpu">
                <div className="w-72 h-72 bg-[var(--card-bg)] rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-3xl font-semibold text-violet-700 dark:text-violet-200">Your Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">A brief visual about you—replace with an image.</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a Senior Full Stack Developer with 7+ years of experience building robust,
              scalable web and mobile applications. I work across the entire stack — from
              React and Next.js frontends to Laravel, Node.js, and AWS-powered backends.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Seeking a Senior Full Stack Developer position to apply advanced problem-solving
              abilities and a collaborative approach in developing robust, scalable applications,
              while contributing to team growth and project efficiency.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">React</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">Next.js</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">TypeScript</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">Laravel</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">Node.js</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">React Native</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">AWS</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm dark:bg-violet-900/30 dark:text-violet-200">PostgreSQL</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Location:</span>
                <span className="ml-2">Bangkok, Thailand</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
                <span className="ml-2">sithuaung182@gmail.com</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Experience:</span>
                <span className="ml-2">7+ Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
