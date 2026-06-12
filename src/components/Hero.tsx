"use client";

import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

export default function Hero() {
  const techStack = ["React", "Next.js", "TypeScript", "Laravel", "Node.js", "AWS"];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Scene3D />
      
      {/* Floating emojis */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] text-6xl opacity-80 z-0"
      >
        💻
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[60%] left-[15%] text-5xl opacity-70 z-0"
      >
        🎨
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[10%] text-5xl opacity-70 z-0"
      >
        💼
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[70%] right-[15%] text-6xl opacity-80 z-0"
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[15%] right-[25%] text-5xl opacity-70 z-0"
      >
        🔥
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 80px rgba(139, 92, 246, 0.5), 0 0 120px rgba(236, 72, 153, 0.3)",
            filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))"
          }}
        >
          Si Thu Aung
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block border-t border-b border-blue-400/50 py-2 px-4">
            <p className="text-xl md:text-2xl text-blue-300 font-light tracking-wide">
              Senior Full-Stack Developer
            </p>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Crafting exceptional digital experiences with modern web technologies
        </motion.p>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-5 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 font-medium hover:border-violet-500/50 hover:bg-gray-800/70 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-violet-500/50 transition-all border border-violet-500/30 flex items-center gap-2"
          >
            View My Work
            <span className="text-xl">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-700 text-gray-300 rounded-full hover:bg-gray-800/50 backdrop-blur-sm transition-all font-medium"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
