import React, { useState, useEffect, useRef } from "react";
import FadeIn from "../ui/FadeIn";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";

const ContactSection = ({ id }) => {
  return (
    <section
      id={id}
      className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Visionary Copy & Social Proof */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3 fill-current" />
                <span>The New Standard</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-[1.1]">
                Ignite your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                  digital evolution
                </span>
                .
              </h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg">
                Stop reacting to the market—start defining it. Partner with us
                to architect a scalable ecosystem that turns complexity into
                your ultimate competitive advantage.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-12 p-8 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-xl shadow-indigo-500/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed italic">
                  &quot;We didn&apos;t just get new software; we gained a
                  strategic clarity that accelerated our roadmap by two years.
                  The ROI was immediate.&quot;
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-gray-300 ring-2 ring-white dark:ring-gray-800 shadow-sm">
                    MC
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Marcus Chen
                    </p>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      VP of Innovation, Globex Enterprise
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

{/* Right Column: Premium Feature Spotlight Card (No Form) */}
<FadeIn delay={100}>
  <div className="relative group">
    {/* Abstract Glow Behind Card */}
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

    <div className="relative p-8 md:p-12 bg-white dark:bg-gray-900 rounded-[1.75rem] border border-gray-100 dark:border-gray-800 shadow-2xl leading-none overflow-hidden">
      {/* Decorative top-right orb */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Launch Your Store With a Future-Ready Ecommerce Platform
        </h3>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          Build, manage, and grow your online store with a platform designed 
          for performance, scalability, and modern retail needs. No complexity —
          just clean, powerful tools built for serious ecommerce brands.
        </p>

        {/* Value Props List */}
        <div className="space-y-5 mb-10">
          {[
            { icon: TrendingUp, text: "Advanced Sales & Conversion Insights" },
            { icon: Shield, text: "Secure & Reliable Store Infrastructure" },
            { icon: Zap, text: "Fast Setup With Scalable Architecture" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() =>
              window.open(
                "https://calendly.com/harshsindhupvt/30min",
                "_blank"
              )
            }
            className="flex-1 group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule a Product Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
</FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
