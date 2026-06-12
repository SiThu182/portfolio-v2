"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 93, icon: "⚛️" },
      { name: "TypeScript / JavaScript", level: 90, icon: "📘" },
      { name: "Vue.js", level: 80, icon: "💚" },
      { name: "HTML5 / CSS3", level: 95, icon: "🌐" },
      { name: "Bootstrap / Tailwind", level: 88, icon: "🎨" },
      { name: "jQuery / WebSocket", level: 82, icon: "⚡" },
      { name: "WordPress", level: 75, icon: "📝" },
    ],
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/20",
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel / PHP", level: 92, icon: "🐘" },
      { name: "Node.js / Express", level: 87, icon: "🟢" },
      { name: "REST APIs", level: 92, icon: "🔌" },
      { name: "JWT Authentication", level: 88, icon: "🔐" },
      { name: "Stripe / Dinger", level: 80, icon: "💳" },
    ],
    gradient: "from-purple-500 to-fuchsia-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Kotlin (Android)", level: 72, icon: "🤖" },
    ],
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 90, icon: "🗄️" },
      { name: "PostgreSQL", level: 87, icon: "🐬" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "SQLite", level: 78, icon: "📦" },
    ],
    gradient: "from-indigo-500 to-violet-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3)", level: 83, icon: "☁️" },
      { name: "Azure DevOps / Portal", level: 82, icon: "🔷" },
      { name: "Git / Bitbucket", level: 93, icon: "📂" },
      { name: "CI/CD Pipelines", level: 80, icon: "🔄" },
    ],
    gradient: "from-fuchsia-500 to-pink-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/20",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Technical expertise across the full development stack
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ background: 'var(--card-bg)' }}
              className="backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden relative group transition-all duration-300"
            >
              {/* Background Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skillGroup.gradient}`}></div>
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent`}>
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="space-y-2 group/skill"
                  >
                    {/* Skill Name and Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-semibold text-gray-900 dark:text-white group-hover/skill:text-violet-600 dark:group-hover/skill:text-violet-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200 min-w-[45px] text-right">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200/70 dark:bg-gray-700/70 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: index * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skillGroup.gradient} rounded-full relative shadow-md`}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skillGroup.gradient} opacity-50 blur-sm`}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} opacity-5 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
