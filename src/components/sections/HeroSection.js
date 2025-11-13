import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import HeroAnimation from "../animations/HeroAnimation";
// We assume your FadeIn component isn't needed if we use framer-motion directly
// import FadeIn from "../ui/FadeIn";

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Creates the "peaceful" staggered effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const EnhancedHeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden text-center">
      {/* Your existing Three.js animation works perfectly as the background */}
      <HeroAnimation />

      {/* Use motion.div for staggered animations */}
      <motion.div
        className="relative z-10 p-4 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <div className="mb-6 inline-flex items-center justify-center px-4 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 rounded-full border border-indigo-200 dark:border-indigo-800">
            ✨ Now Live: Your Personal Store Builder
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-gray-900 dark:text-white"
        >
          Your Business, Your Way.
          <br />
          {/* Apply the new CSS class here */}
          <span className="animated-gradient-text">Start Selling Online.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10"
        >
          The composable, high-performance e-commerce infrastructure for
          building world-class, enterprise-ready shopping experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#signup"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
          </motion.a>
          <motion.a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.a>
        </motion.div>

        {/* Social Proof for Conversion */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Trusted by 100+ creators and small businesses
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
