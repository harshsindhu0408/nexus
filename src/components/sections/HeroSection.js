import React from "react";
import FadeIn from "../ui/FadeIn";
import HeroAnimation from "../animations/HeroAnimation";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden text-center">
      <HeroAnimation />

      <div className="relative z-10 p-4 flex flex-col items-center">
        <FadeIn>
          <div className="mb-6 inline-flex items-center justify-center px-4 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 rounded-full border border-indigo-200 dark:border-indigo-800">
            Announcing Nexus v1.0
            <svg
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-gray-900 dark:text-white">
            Build E-commerce.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Infinitely.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
            The composable, high-performance e-commerce infrastructure for
            building world-class, enterprise-ready shopping experiences.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-300"
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;