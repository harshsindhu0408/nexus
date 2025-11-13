import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  Server,
  Cpu,
  Database,
  Zap,
  Shield,
  BarChart3,
  Search,
  Globe,
  Rocket,
  TrendingUp,
  Lock,
  Code2,
  Sparkles,
} from "lucide-react";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const incrementTime = (duration * 1000) / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {!value.includes("%") && !value.includes("<") && "%"}
    </span>
  );
};

const FeaturesSection = () => {
  const [theme, setTheme] = React.useState("dark");
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    threshold: 0.1,
    triggerOnce: true,
  });

  // Listen for theme changes from your global theme system
  React.useEffect(() => {
    const handleThemeChange = () => {
      // Get theme from localStorage or document class
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    // Initial theme detection
    handleThemeChange();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const features = useMemo(
    () => [
      {
        icon: Cpu,
        title: "Blazing Backend Power",
        description:
          "Node.js + Express API layer delivering microsecond response times with Redis caching and MongoDB flexibility.",
        tech: ["Node.js", "Express", "MongoDB", "Redis", "Pub/Sub"],
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
        lightBg: "from-blue-400/20 to-cyan-400/20",
      },
      {
        icon: BarChart3,
        title: "Intelligent Admin Panel",
        description:
          "Real-time analytics dashboard with role-based permissions. The brain of your business operations.",
        tech: ["React", "Vite", "Real-time Analytics", "Role-based Access"],
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/10",
        lightBg: "from-purple-400/20 to-pink-400/20",
      },
      {
        icon: Search,
        title: "Next.js SEO Perfection",
        description:
          "Server-side rendering, image optimization, and structured metadata for 100% Lighthouse SEO scores.",
        tech: ["Next.js 14", "SSR", "Image Optimization", "Structured Data"],
        gradient: "from-green-500 to-emerald-500",
        bgGradient: "from-green-500/10 to-emerald-500/10",
        lightBg: "from-green-400/20 to-emerald-400/20",
      },
      {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description:
          "End-to-end encryption, JWT authentication, and DDoS protection with auto-scaling infrastructure.",
        tech: ["SSL/TLS", "JWT Auth", "DDoS Protection", "Auto-scaling"],
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-500/10 to-red-500/10",
        lightBg: "from-orange-400/20 to-red-400/20",
      },
    ],
    [] // dependencies: only recompute if something external changes
  );
  const stats = useMemo(
    () => [
      { value: "99.99", label: "Uptime" },
      { value: "<50ms", label: "Response Time" },
      { value: "100", label: "SEO Score" },
      { value: "∞", label: "Scalability" },
    ],
    []
  );

  // Theme-based classes
  const cardBorderClass =
    theme === "dark"
      ? "border-gray-800/50 hover:border-gray-700/70"
      : "border-gray-200/60 hover:border-gray-300/80";

  const cardBgClass =
    theme === "dark"
      ? "bg-gray-900/40 backdrop-blur-xl"
      : "bg-white/60 backdrop-blur-md";

  const textClass = theme === "dark" ? "text-white" : "text-gray-900";

  const textMutedClass = theme === "dark" ? "text-gray-400" : "text-gray-600";

  const sectionBgClass =
    theme === "dark"
      ? "bg-black"
      : "bg-gradient-to-br from-blue-50 via-white to-purple-50";

  return (
    <section
      id="why-choose-us"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${sectionBgClass}`}
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
              : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
          }`}
        />

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark" ? "opacity-20" : "opacity-40"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 1px),
                             linear-gradient(90deg, ${
                               theme === "dark"
                                 ? "rgba(255,255,255,0.1)"
                                 : "rgba(0,0,0,0.1)"
                             } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                theme === "dark" ? "bg-white/30" : "bg-blue-400/30"
              }`}
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Animated Orbs */}
        <motion.div
          className={`absolute top-1/4 -left-10 w-72 h-72 rounded-full blur-3xl ${
            theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-400/30"
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 -right-10 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-purple-500/20" : "bg-purple-400/30"
          }`}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                }`}
              />
            </motion.div>
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Enterprise Ready
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className={textClass}>Why Choose</span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
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
              Our Platform?
            </motion.span>
          </motion.h1>

          <motion.p
            className={`mt-6 max-w-3xl mx-auto text-xl ${textMutedClass}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            From backend to SEO, every layer is engineered for performance,
            reliability, and explosive growth.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div
                  className={`text-3xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value.includes("%") ||
                  stat.value === "∞" ||
                  stat.value.includes("<") ? (
                    stat.value
                  ) : (
                    <AnimatedCounter value={stat.value} />
                  )}
                </div>
                <div className={textMutedClass}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glass Card */}
              <div
                className={`relative p-8 cursor-pointer rounded-3xl border-2 overflow-hidden transition-all duration-500 ${cardBgClass} ${cardBorderClass}`}
              >
                {/* Animated Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    theme === "dark" ? feature.bgGradient : feature.lightBg
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 ${textClass}`}>
                    {feature.title}
                  </h3>

                  <p
                    className={`text-lg leading-relaxed mb-6 ${textMutedClass}`}
                  >
                    {feature.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1.5 text-sm font-medium rounded-full border backdrop-blur-sm ${
                          theme === "dark"
                            ? "bg-gray-800/50 text-gray-300 border-gray-700/50"
                            : "bg-white/80 text-gray-700 border-gray-300/50"
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 1 + index * 0.2 + techIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            className={`px-12 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg relative overflow-hidden group shadow-xl ${
              theme === "dark" ? "shadow-cyan-500/20" : "shadow-cyan-500/30"
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === "dark"
                  ? "0 20px 40px rgba(6, 182, 212, 0.3)"
                  : "0 20px 40px rgba(6, 182, 212, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10 flex items-center gap-2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.9 }}
            >
              Experience the Power
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.span>

            {/* Button Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.p
            className={`mt-4 text-sm ${textMutedClass}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.7 }}
          >
            Join thousands of businesses scaling with our platform
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
