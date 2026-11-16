"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import Scene3D from "./Scene3D";
import { Magnetic } from "./motion-kit";

const TILT_SPRING = { stiffness: 90, damping: 16 };
const NAME_WORDS = [
  { text: "Hi,", accent: false },
  { text: "I'm", accent: false },
  { text: "Si", accent: true },
  { text: "Thu", accent: true },
  { text: "Aung.", accent: false },
];
const BUILDS = ["Laravel platforms", "Vue and React frontends", "AI-powered products", "payment integrations"];

function AnimatedName() {
  return (
    <h1
      aria-label="Hi, I'm Si Thu Aung."
      className="break-words text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
    >
      {NAME_WORDS.map((word, wordIndex) => (
        <span
          key={word.text}
          aria-hidden="true"
          className={`mr-[0.25em] -mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom ${
            word.accent ? "text-cyan-700 dark:text-cyan-300" : ""
          }`}
        >
          {word.text.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="inline-block"
              initial={{ y: "115%", rotate: 10 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 16,
                delay: 0.1 + wordIndex * 0.1 + index * 0.035,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

function RotatingBuilds() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % BUILDS.length), 2400);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <p className="mt-4 flex flex-wrap gap-x-2 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl">
      <span>I build</span>
      <span className="relative inline-block h-[1.4em] min-w-[13em] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.span
            key={BUILDS[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute left-0 top-0 whitespace-nowrap text-cyan-700 dark:text-cyan-300"
          >
            {BUILDS[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 130]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -110]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-16, 16]), TILT_SPRING);
  const tiltX = useSpring(useTransform(pointerY, [-0.5, 0.5], [12, -12]), TILT_SPRING);
  const badgeX = useSpring(useTransform(pointerX, [-0.5, 0.5], [22, -22]), TILT_SPRING);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={onPointerMove}
      className="relative isolate min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f8fafc_0%,#e8f6f8_52%,#d9eef3_100%)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-slate-950 dark:block" />
      <Scene3D />
      {/* Fades the network out behind the text. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-10 w-3/5 bg-gradient-to-r from-slate-50 from-25% to-transparent dark:from-slate-950"
      />
      <div aria-hidden="true" className="aurora aurora-one absolute -z-10" />
      <div aria-hidden="true" className="aurora aurora-two absolute -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[var(--background)]"
      />

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] lg:px-8">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="min-w-0 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex rounded-full border border-cyan-700/20 bg-cyan-700/8 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300"
          >
            Bangkok, Thailand
          </motion.p>

          <AnimatedName />

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-5 text-2xl font-semibold text-slate-700 dark:text-slate-200"
          >
            Senior Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <RotatingBuilds />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300"
          >
            End-to-end ownership, from client requirements and system design to
            integration, server deployment, and production support.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400"
          >
            Open to senior full-stack roles in Thailand, Singapore, and remote teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Magnetic
              href="#projects"
              className="rounded-full bg-cyan-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              View My Projects
            </Magnetic>
            <Magnetic
              href="#contact"
              className="rounded-full border border-slate-400 bg-white/70 px-6 py-3 text-sm font-bold text-slate-900 transition-colors dark:bg-white/5 hover:border-cyan-700 hover:text-cyan-700 dark:border-slate-500 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              Contact
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.3 }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <motion.div style={{ y: photoY }}>
            <motion.div
              style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-cyan-300/18 blur-3xl dark:bg-cyan-300/12" />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#22d3ee,transparent_35%,#0e7490,transparent_70%,#22d3ee)]"
              />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white bg-sky-100 shadow-2xl shadow-slate-300/70 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
                <img src="/profile.jpg" alt="Si Thu Aung" className="h-full w-full object-cover" />
              </div>
              <motion.div style={{ x: badgeX }} className="absolute -left-8 top-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300">Full Stack</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Laravel, Vue, React, Node.js</p>
                </motion.div>
              </motion.div>
              <motion.div style={{ x: badgeX }} className="absolute -right-5 bottom-10">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300">7+ Years</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Experience</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        style={{ opacity: textOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -ml-3 flex h-10 w-6 justify-center rounded-full border-2 border-slate-400 pt-2 dark:border-slate-500"
      >
        <span className="h-2 w-1 rounded-full bg-cyan-700 dark:bg-cyan-300" />
      </motion.a>
    </section>
  );
}
