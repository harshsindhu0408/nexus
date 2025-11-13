import React from "react";
import FadeIn from "../ui/FadeIn";
import { CheckIcon } from "../ui/MockComponents";

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
            Pricing that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              scales with you
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Start for free and upgrade as you grow. No hidden fees, ever.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FadeIn delay={0}>
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Free
            </h3>
            <p className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
              $0
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                /mo
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For individuals and hobby projects.
            </p>
            <ul className="space-y-3 mb-8 flex-grow text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <CheckIcon /> 1 Storefront
              </li>
              <li className="flex items-center">
                <CheckIcon /> Up to 100 Products
              </li>
              <li className="flex items-center">
                <CheckIcon /> Basic Analytics
              </li>
            </ul>
            <a
              href="#"
              className="w-full text-center px-6 py-3 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Start for Free
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 relative flex flex-col h-full">
            <span className="absolute top-0 -mt-3 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-semibold bg-indigo-500 text-white rounded-full">
              Most Popular
            </span>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Growth
            </h3>
            <p className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
              $99
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                /mo
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For growing businesses and startups.
            </p>
            <ul className="space-y-3 mb-8 flex-grow text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <CheckIcon /> 3 Storefronts
              </li>
              <li className="flex items-center">
                <CheckIcon /> Unlimited Products
              </li>
              <li className="flex items-center">
                <CheckIcon /> Advanced Analytics
              </li>
              <li className="flex items-center">
                <CheckIcon /> Priority Support
              </li>
            </ul>
            <a
              href="#"
              className="w-full text-center relative px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-300"
            >
              Start 14-Day Trial
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Enterprise
            </h3>
            <p className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
              Custom
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For large-scale, custom deployments.
            </p>
            <ul className="space-y-3 mb-8 flex-grow text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <CheckIcon /> Unlimited Storefronts
              </li>
              <li className="flex items-center">
                <CheckIcon /> Dedicated Infrastructure
              </li>
              <li className="flex items-center">
                <CheckIcon /> 24/7/365 Support & SLA
              </li>
              <li className="flex items-center">
                <CheckIcon /> Custom Integrations
              </li>
            </ul>
            <a
              href="#contact"
              className="w-full text-center px-6 py-3 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default PricingSection;