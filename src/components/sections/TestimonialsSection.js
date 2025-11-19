import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Leaf,
  Sparkles,
  BarChart3,
  Cpu,
  Rocket,
  Zap,
  Globe,
  Beaker,
  Hexagon,
  Terminal,
  Star,
  Quote,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

// --- Utility Components ---

// Reusing your AnimatedCounter for consistency
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/,/g, ""));
    if (start === end) return;

    const incrementTime = (duration * 1000) / (end / 5); // Speed up for larger numbers
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {value.includes("%") && "%"}
      {value.includes("+") && "+"}
    </span>
  );
};

const StarRating = ({ delay = 0 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: delay + i * 0.1,
          }}
        >
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </motion.div>
      ))}
    </div>
  );
};

// --- Main Component ---

const TestimonialsSection = ({ id }) => {
  const [theme, setTheme] = useState("dark");
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  // Theme Detection Logic (Matching your existing component)
  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    handleThemeChange();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") handleThemeChange();
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // --- Data & Configuration ---

  const testimonials = useMemo(
    () => [
      // Core Requested Companies
      {
        id: 1,
        name: "Saundrya Earth",
        person: "Anirudh Dalal",
        role: "Founder & CEO",
        icon: Leaf,
        growth: "342%",
        category: "Skincare",
        text: "We scaled from a local boutique to a national brand in 6 months. The backend stability handled our Black Friday spikes without a single millisecond of downtime.",
        gradient: "from-green-500 to-emerald-600",
        bgGradient: "from-green-500/10 to-emerald-500/10",
        lightBg: "from-green-400/20 to-emerald-400/20",
      },
      {
        id: 2,
        name: "Manaroma Industries",
        person: "Rajiv Mehta",
        role: "Director of Ops",
        icon: Sparkles,
        growth: "221%",
        category: "Manufacturing",
        text: "The intelligent admin panel completely revolutionized our supply chain visibility. What used to take days of manual entry is now automated in real-time.",
        gradient: "from-amber-500 to-orange-600",
        bgGradient: "from-amber-500/10 to-orange-500/10",
        lightBg: "from-amber-400/20 to-orange-400/20",
      },
      {
        id: 3,
        name: "Sindhu Studio",
        person: "Krishan Sindhu",
        role: "CTO",
        icon: BarChart3,
        growth: "487%",
        category: "AI data",
        text: "Processing petabytes of data requires infrastructure that doesn't blink. This platform gave us the enterprise-grade security and speed our clients demand.",
        gradient: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-500/10 to-indigo-500/10",
        lightBg: "from-blue-400/20 to-indigo-400/20",
      },
      // Additional US Mock Companies
      {
        id: 4,
        name: "BlueWave Systems",
        person: "David Chen",
        role: "VP of Engineering",
        icon: Cpu,
        growth: "312%",
        category: "Cloud Infra",
        text: "The API response times are legitimately insane. We cut our infrastructure costs by 40% just by migrating to their optimized node clusters.",
        gradient: "from-cyan-500 to-sky-600",
        bgGradient: "from-cyan-500/10 to-sky-500/10",
        lightBg: "from-cyan-400/20 to-sky-400/20",
      },
      {
        id: 5,
        name: "Northstar Robotics",
        person: "Sarah Connor",
        role: "Lead Architect",
        icon: Rocket,
        growth: "158%",
        category: "Automation",
        text: "Latency was our biggest enemy in robotics control. This platform solved it. The real-time analytics dashboard is just the cherry on top.",
        gradient: "from-purple-500 to-fuchsia-600",
        bgGradient: "from-purple-500/10 to-fuchsia-500/10",
        lightBg: "from-purple-400/20 to-fuchsia-400/20",
      },
      {
        id: 6,
        name: "ApexLabs",
        person: "Dr. Alan Grant",
        role: "Head of Research",
        icon: Beaker,
        growth: "195%",
        category: "Biotech",
        text: "Secure, compliant, and fast. Handling sensitive patient data requires trust, and the JWT auth coupled with their encryption is world-class.",
        gradient: "from-teal-500 to-emerald-600",
        bgGradient: "from-teal-500/10 to-emerald-500/10",
        lightBg: "from-teal-400/20 to-emerald-400/20",
      },
      {
        id: 7,
        name: "QuantumSpark",
        person: "Marcus Thorne",
        role: "Product Manager",
        icon: Zap,
        growth: "410%",
        category: "Energy",
        text: "We needed a solution that scaled infinitely during power surges. The auto-scaling infrastructure here is the best we've tested.",
        gradient: "from-yellow-500 to-amber-600",
        bgGradient: "from-yellow-500/10 to-amber-500/10",
        lightBg: "from-yellow-400/20 to-amber-400/20",
      },
      {
        id: 8,
        name: "BrightHive",
        person: "Jessica Wu",
        role: "Co-Founder",
        icon: Hexagon,
        growth: "275%",
        category: "Collaboration",
        text: "Our user retention doubled after implementing the real-time features. The WebSocket stability is rock solid even with 50k concurrent users.",
        gradient: "from-pink-500 to-rose-600",
        bgGradient: "from-pink-500/10 to-rose-500/10",
        lightBg: "from-pink-400/20 to-rose-400/20",
      },
      {
        id: 9,
        name: "UrbanLoop",
        person: "Tyrell Wellick",
        role: "Operations Lead",
        icon: Globe,
        growth: "330%",
        category: "Logistics",
        text: "Global scalability out of the box. We launched in 4 continents simultaneously and the CDN performance was flawless.",
        gradient: "from-red-500 to-orange-600",
        bgGradient: "from-red-500/10 to-orange-500/10",
        lightBg: "from-red-400/20 to-orange-400/20",
      },
      {
        id: 10,
        name: "VelocitySoft",
        person: "Gilfoyle C.",
        role: "Chief Architect",
        icon: Terminal,
        growth: "500%+",
        category: "DevTools",
        text: "Finally, a platform built by developers for developers. The code quality and documentation are top tier. 10/10 would recommend.",
        gradient: "from-slate-500 to-gray-600",
        bgGradient: "from-slate-500/10 to-gray-500/10",
        lightBg: "from-slate-400/20 to-gray-400/20",
      },
    ],
    []
  );

  // Styling Classes based on Theme
  const textClass = theme === "dark" ? "text-white" : "text-gray-900";
  const textMutedClass = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBorderClass =
    theme === "dark"
      ? "border-gray-800/50 hover:border-gray-600"
      : "border-gray-200/60 hover:border-gray-300";
  const cardBgClass =
    theme === "dark"
      ? "bg-gray-900/40 backdrop-blur-xl"
      : "bg-white/60 backdrop-blur-xl";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id={id}
      className={`relative min-h-screen overflow-hidden py-20 ${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
      ref={containerRef}
    >
      {/* --- Background Elements (Matching FeatureSection) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-gradient-to-b from-gray-900 via-black to-gray-900"
              : "bg-gradient-to-b from-white via-blue-50 to-white"
          }`}
        />

        {/* Grid */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            theme === "dark" ? "opacity-20" : "opacity-30"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Orbs - Colors matched to features section */}
        <motion.div
          className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none ${
            theme === "dark" ? "bg-cyan-500" : "bg-cyan-300"
          }`}
          animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-300"
          }`}
          animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative w-full mx-auto z-10">
        {/* --- Header --- */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles
              className={`w-4 h-4 ${
                theme === "dark" ? "text-cyan-400" : "text-cyan-600"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Wall of Love
            </span>
          </motion.div>

          <motion.h2
            className={`text-5xl md:text-7xl font-bold tracking-tight mb-8 ${textClass}`}
          >
            Trusted by
            <br />
            {/* Matches the Heading gradient from FeaturesSection exactly */}
            <motion.span
              className="text-transparent px-1 bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Industry Leaders
            </motion.span>
          </motion.h2>

          <motion.p
            className={`max-w-2xl px-2 mx-auto text-xl ${textMutedClass}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Join the thousands of companies that rely on our infrastructure to
            scale faster and more securely.
          </motion.p>
        </motion.div>

        {/* --- Infinite Marquee Section --- */}
        <div className="relative overflow-hidden">
          {/* Enhanced Fade Edges - Larger and More Gradual */}
          <div
            className={`absolute left-0 top-0 bottom-0 z-30 bg-gradient-to-r ${
              theme === "dark"
                ? "from-black via-black/90 to-transparent"
                : "from-blue-50 via-blue-50/90 to-transparent"
            }`}
          />
          <div className={`absolute right-0 top-0 bottom-0 w-32 z-30 `} />

          {/* Additional subtle overlay to ensure seamless blending */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              theme === "dark"
                ? "bg-gradient-to-b from-transparent via-black/10 to-transparent"
                : "bg-gradient-to-b from-transparent via-white/10 to-transparent"
            }`}
          />

          {/* Marquee Row 1 (Left to Right) */}
          <div className="flex overflow-hidden mb-8">
            <motion.div
              className="flex gap-6 flex-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                ease: "linear",
                duration: 60,
                repeat: Infinity,
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map(
                (item, i) => (
                  <MarqueeCard
                    key={`marquee-1-${item.name}-${i}`}
                    item={item}
                    theme={theme}
                    cardBgClass={cardBgClass}
                    cardBorderClass={cardBorderClass}
                    textClass={textClass}
                    textMutedClass={textMutedClass}
                  />
                )
              )}
            </motion.div>
          </div>

          {/* Marquee Row 2 (Right to Left - Slower) */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 flex-nowrap"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 70,
                repeat: Infinity,
              }}
            >
              {[
                ...testimonials.slice().reverse(),
                ...testimonials.slice().reverse(),
                ...testimonials.slice().reverse(),
              ].map((item, i) => (
                <MarqueeCard
                  key={`marquee-2-${item.name}-${i}`}
                  item={item}
                  theme={theme}
                  cardBgClass={cardBgClass}
                  cardBorderClass={cardBorderClass}
                  textClass={textClass}
                  textMutedClass={textMutedClass}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Compact Card for Marquee
const MarqueeCard = ({
  item,
  theme,
  cardBgClass,
  cardBorderClass,
  textClass,
  textMutedClass,
}) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-[380px] p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${cardBgClass} ${cardBorderClass}`}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { type: "spring", stiffness: 400 },
      }}
    >
      {/* Header with Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${item.gradient} shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <item.icon className="w-6 h-6 text-white" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <h5 className={`font-bold text-lg truncate ${textClass}`}>
            {item.name}
          </h5>
          <span className={`text-sm ${textMutedClass}`}>{item.category}</span>
        </div>

        {/* Growth Badge */}
        <motion.div
          className="flex items-center text-base font-bold text-green-500 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className="w-4 h-4 mr-1" />+{item.growth}
        </motion.div>
      </div>

      {/* Testimonial Excerpt */}
      <p className={`text-sm leading-relaxed ${textMutedClass} line-clamp-3`}>
        &quot;{item?.text.substring(0, 100)}...&quot;
      </p>

      {/* Star Rating */}
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
          >
            <Star
              className={`w-4 h-4 ${
                theme === "dark" ? "text-yellow-400" : "text-yellow-500"
              } fill-current`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
