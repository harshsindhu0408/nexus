import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, animate } from "framer-motion";
import {
  Leaf,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Footprints,
  ShoppingCart,
} from "lucide-react";

// --- Helper Component: AnimatedCounter ---
// This component animates a number from a start to an end value.
const AnimatedCounter = ({ from = 0, to, precision = 0, postfix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = latest.toFixed(precision) + postfix;
      },
    });

    return () => controls.stop();
  }, [from, to, precision, postfix, isInView]);

  return <span ref={nodeRef} />;
};

// --- Helper Component: SparklesCore ---
// This component renders the subtle, floating sparkles in the background.
const SparklesCore = ({
  count = 40,
  minSize = 1,
  maxSize = 3,
  speed = 0.5,
}) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * (maxSize - minSize) + minSize;
        const duration = (1 / speed) * (Math.random() * 2 + 0.5); // Slower, more ethereal
        const delay = Math.random() * 5;
        const xStart = Math.random() * 100;
        const xEnd = Math.random() * 100;
        const yStart = Math.random() * 100;
        const yEnd = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;

        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-white/80"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${xStart}%`,
              top: `${yStart}%`,
              opacity: 0,
            }}
            animate={{
              x: `${xEnd - xStart}%`,
              y: `${yEnd - yStart}%`,
              opacity: [0, opacity, opacity, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

// --- Main Component: EnhancedLogoCloud ---
const logos = [
  { name: "Saundrya Earth", icon: Leaf, growth: "342%", category: "Skincare" },
  {
    name: "Manita Collection",
    icon: Users,
    growth: "156%",
    category: "Fashion",
  },
  { name: "Fleet Foot", icon: Footprints, growth: "289%", category: "Footwear" },
  {
    name: "StyleHub",
    icon: ShoppingCart,
    growth: "234%",
    category: "E-commerce",
  },
];

// Helper: Stats Card Internal Component
const StatsCard = ({ icon: Icon, label, value, postfix, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorClasses = {
    emerald: {
      text: "text-emerald-600 dark:text-emerald-400",
      border: "hover:border-emerald-300 dark:hover:border-emerald-600",
    },
    indigo: {
      text: "text-indigo-600 dark:text-indigo-400",
      border: "hover:border-indigo-300 dark:hover:border-indigo-600",
    },
    purple: {
      text: "text-purple-600 dark:text-purple-400",
      border: "hover:border-purple-300 dark:hover:border-purple-600",
    },
  };
  const classes = colorClasses[color] || colorClasses.emerald;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ${classes.border} overflow-hidden`}
    >
      {/* Glossy Reflection */}
      <span
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent opacity-0 transition-all duration-500 ease-out ${
          isHovered ? "opacity-100" : ""
        }`}
        style={{
          transform: isHovered ? "translateY(0%)" : "translateY(-100%)",
        }}
      />
      <span
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent opacity-0 transition-all duration-500 ease-out ${
          isHovered ? "opacity-100" : ""
        }`}
        style={{
          transform: isHovered ? "translateY(100%)" : "translateY(0%)",
          transitionDelay: "100ms",
        }}
      />

      <Icon className={`h-8 w-8 ${classes.text} mx-auto mb-3 relative z-10`} />
      <div className="text-3xl font-bold text-gray-900 dark:text-white relative z-10">
        <AnimatedCounter to={value} postfix={postfix} />
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
        {label}
      </div>
    </motion.div>
  );
};

const EnhancedLogoCloud = () => {
  const sectionRef = useRef(null);

  // Mouse-tracking spotlight effect
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
      sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const blobVariants = {
    animate: (i) => ({
      scale: [1, 1.2, 1],
      rotate: [0, i % 2 === 0 ? 15 : -15, 0],
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: i * 2,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="spotlight-container pt-12 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-100">
        <div className="absolute inset-0 dark:from-gray-900 dark:to-transparent" />
        {/* Mouse Spotlight */}
        <div className="spotlight-effect" />
        {/* Animated Blobs */}
        <motion.div
          custom={1}
          variants={blobVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-600/10 rounded-full blur-3xl"
        />
        <motion.div
          custom={2}
          variants={blobVariants}
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          custom={3}
          variants={blobVariants}
          animate="animate"
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-200/10 dark:bg-indigo-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* Sparkles */}
      <SparklesCore speed={0.2} count={30} minSize={1} maxSize={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-indigo-50 dark:from-emerald-900/30 dark:to-indigo-900/30 border border-emerald-200 dark:border-emerald-800 mb-6"
          >
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Empowering Small Businesses
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            From local dreams to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 dark:from-emerald-400 dark:via-indigo-400 dark:to-purple-400 animate-shimmer bg-[length:200%_auto]">
              global storefronts.
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your shop. Your story. Now online. Join over 10,000 entrepreneurs
            growing with us.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-3xl mx-auto">
            <StatsCard
              icon={TrendingUp}
              label="Average Revenue Growth"
              value={243}
              postfix="%"
              color="emerald"
            />
            <StatsCard
              icon={Users}
              label="Active Stores"
              value={10}
              postfix="K+"
              color="indigo"
            />
            <StatsCard
              icon={Award}
              label="Success Rate"
              value={98}
              postfix="%"
              color="purple"
            />
          </div>
        </motion.div>

        {/* Enhanced Logo Grid (Success Stories) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {logos.map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                // Floating animation
                animate={{ y: [0, -6, 0] }}
                style={{
                  "--float-delay": `${Math.random() * 2}s`,
                  "--float-duration": `${Math.random() * 3 + 3}s`,
                }}
                className="group relative float-animation"
              >
                <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 h-full flex flex-col items-center text-center hover:shadow-xl hover:shadow-emerald-500/10">
                  {/* Pulsing Growth Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: Math.random() * 1.5,
                    }}
                    className="absolute -top-3 -right-3 px-2.5 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold rounded-full shadow-lg"
                  >
                    +{logo.growth}
                  </motion.div>

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-indigo-100 dark:from-emerald-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {logo.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-emerald-50 to-indigo-50 dark:from-emerald-900/30 dark:to-indigo-900/30 rounded-3xl p-8 md:p-12 border border-emerald-200/50 dark:border-emerald-800/50 max-w-3xl mx-auto overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <SparklesCore count={20} speed={0.1} minSize={2} maxSize={4} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Turn your passion into a global business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px 5px rgb(16 185 129 / 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300"
                >
                  Launch Your Store Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-300 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 backdrop-blur-sm transition-all duration-300"
                >
                  View Success Stories
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tailwind CSS for animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: -200% 50%;
          }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }

        .spotlight-container {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
        .spotlight-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle 400px at var(--mouse-x) var(--mouse-y),
            rgba(110, 231, 183, 0.1),
            transparent 80%
          );
          transition: background 0.1s ease-out;
        }
        .dark .spotlight-effect {
          background: radial-gradient(
            circle 400px at var(--mouse-x) var(--mouse-y),
            rgba(110, 231, 183, 0.07),
            transparent 80%
          );
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .float-animation {
          animation: float var(--float-duration, 4s) var(--float-delay, 0s)
            ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EnhancedLogoCloud;
