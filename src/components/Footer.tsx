"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-blue-200 border-t border-blue-300 text-gray-900 py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
