import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import {
  Leaf,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Footprints,
  ShoppingCart,
} from "lucide-react";

// --- Helper: Optimized Counter (Uses useSpring for performance) ---
const AnimatedCounter = ({ to, postfix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  // Use spring physics for smooth, non-jittery counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5 
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, to, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(latest) + postfix;
      }
    });
  }, [springValue, postfix]);

  return <span ref={nodeRef} />;
};

// --- Helper: CSS-Only Sparkles (Zero JS Overhead) ---
// Renders static divs that animate via CSS Keyframes on the GPU
const CSSSparkles = () => {
  // Memoize positions so they don't recalculate on re-renders
  const sparkles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: `${2 + Math.random() * 3}px`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-0 animate-twinkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
};

// --- Helper: Stats Card ---
const StatsCard = ({ icon: Icon, label, value, postfix, color }) => {
  const colorClasses = {
    emerald: "text-emerald-600 dark:text-emerald-400 group-hover:border-emerald-300",
    indigo: "text-indigo-600 dark:text-indigo-400 group-hover:border-indigo-300",
    purple: "text-purple-600 dark:text-purple-400 group-hover:border-purple-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`group relative text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1 ${colorClasses[color] || colorClasses.emerald}`}
    >
      <Icon className={`h-8 w-8 mx-auto mb-3 ${colorClasses[color]?.split(" ")[0]}`} />
      <div className="text-3xl font-bold text-gray-900 dark:text-white">
        <AnimatedCounter to={value} postfix={postfix} />
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {label}
      </div>
    </motion.div>
  );
};

const EnhancedLogoCloud = ({ id }) => {
  const sectionRef = useRef(null);

  // --- Optimization: RequestAnimationFrame for Mouse Move ---
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    
    // Use RAF to throttle updates to screen refresh rate (60fps)
    requestAnimationFrame(() => {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
      sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  const logos = [
    { name: "Saundrya Earth", icon: Leaf, growth: "342%", category: "Skincare" },
    { name: "Manita Collection", icon: Users, growth: "156%", category: "Fashion" },
    { name: "Fleet Foot", icon: Footprints, growth: "289%", category: "Footwear" },
    { name: "StyleHub", icon: ShoppingCart, growth: "234%", category: "E-commerce" },
  ];

  return (
    <section
      id={id}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="spotlight-container relative pt-16 pb-16 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background: Static Gradients + CSS Sparkles (Low GPU Usage) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse Spotlight - Hardware Accelerated via translate3d */}
        <div className="spotlight-effect hidden md:block" />
        
        {/* Static blurred blobs instead of animating large divs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[80px] transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[80px] transform-gpu" />
        
        <CSSSparkles />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-6"
          >
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Empowering Small Businesses
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            From local dreams to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500">
              global storefronts.
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your shop. Your story. Now online. Join over 100+ entrepreneurs growing with us.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <StatsCard icon={TrendingUp} label="Avg. Growth" value={243} postfix="%" color="emerald" />
            <StatsCard icon={Users} label="Active Stores" value={10} postfix="+" color="indigo" />
            <StatsCard icon={Award} label="Success Rate" value={98} postfix="%" color="purple" />
          </div>
        </div>

        {/* Logo Grid - Using CSS Transform for hover to save JS thread */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {logos.map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-md">
                  
                  {/* Floating Animation handled by CSS Class */}
                  <div className="float-animate" style={{ animationDelay: `${index * 0.5}s` }}>
                    {/* Badge */}
                    <div className="absolute -top-3 -right-3 px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-sm transform transition-transform group-hover:scale-110">
                      +{logo.growth}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {logo.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section - Simplified Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-emerald-50 to-indigo-50 dark:from-emerald-950/50 dark:to-indigo-950/50 rounded-3xl p-8 md:p-12 border border-emerald-100 dark:border-emerald-900 max-w-3xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Turn your passion into a global business today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open("https://calendly.com/harshsindhupvt/30min", "_blank")}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-transform active:scale-95"
                >
                  Launch Your Store
                </button>
                <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Critical CSS Optimizations */}
      <style jsx global>{`
        .spotlight-container {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
        
        /* Hardware accelerated spotlight */
        .spotlight-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle 600px at var(--mouse-x) var(--mouse-y),
            rgba(16, 185, 129, 0.06),
            transparent 80%
          );
          pointer-events: none;
          will-change: background; 
        }

        /* Efficient CSS Keyframes for twinkling */
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.5; transform: scale(1); }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        /* Efficient Float using Translate3d (GPU) */
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }
        .float-animate {
          animation: float 5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default EnhancedLogoCloud;