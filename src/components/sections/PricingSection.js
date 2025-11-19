// src/components/WaitlistSection.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import {
  BarChart3,
  Database,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Store,
  X,
  Loader2,
  Check,
  Crown,
  Users,
  TrendingUp,
  Star,
  Clock,
  Target,
  CheckCircle,
  Zap,
  ArrowRight,
  Shield,
} from "lucide-react";

import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import FadeIn from "../ui/FadeIn";

//=================================================================
// 1. Helper Component: Animated Particle Background
//=================================================================
const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 60,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#6d28d9", // Purple color that works in both themes
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

//=================================================================
// 2. Helper Component: Animated Counter for FOMO
//=================================================================
const AnimatedCounter = ({ to }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = Math.round(latest).toString();
      },
    });

    return () => controls.stop();
  }, [to]);

  return <span ref={nodeRef} className="font-bold" />;
};

//=================================================================
// 3. Helper Component: Shimmering Animated CTA Button
//=================================================================
const AnimatedCTA = React.forwardRef(
  ({ children, className = "", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`
          relative inline-flex items-center justify-center px-8 py-3 
          font-semibold text-white rounded-full
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          bg-size-200 bg-pos-0
          hover:bg-pos-100
          shadow-lg shadow-purple-500/30
          hover:shadow-xl hover:shadow-purple-500/40
          transition-all duration-500 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

// Add display name
AnimatedCTA.displayName = "AnimatedCTA";

//=================================================================
// 4. Helper Component: Value Proposition Card
//=================================================================
const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      // 1. Added 'group', 'relative', and 'overflow-hidden'
      className="group relative cursor-pointer w-full h-full p-6 
                 overflow-hidden 
                 bg-white dark:bg-gray-800/50 
                 backdrop-blur-lg rounded-2xl 
                 border border-gray-200 dark:border-white/10 
                 shadow-lg dark:shadow-gray-900/20"
    >
      {/* 2. Added the background glow element */}
      <div
        className="absolute z-0 -top-20 -left-20 w-48 h-48 
                   bg-gradient-to-br from-indigo-500 to-purple-600 
                   opacity-0 group-hover:opacity-15 
                   dark:group-hover:opacity-25 
                   filter blur-3xl 
                   transition-all duration-500"
      />

      {/* 3. Your original content is already z-10, so it stays on top */}
      <div className="relative z-10">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg 
                     bg-gradient-to-br from-indigo-500 to-purple-600 
                     flex items-center justify-center"
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

//=================================================================
// 5. Helper Component: Success Checkmark Animation
//=================================================================
const SuccessAnimation = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
    className="flex flex-col items-center justify-center"
  >
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
      <motion.svg
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.svg>
    </div>
    <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
      You&apos;re in! 🚀
    </h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Our team will contact you very soon.
    </p>
  </motion.div>
);

const LoaderIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-loader-circle ${className}`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

// A simple chevron for the custom select dropdown
const ChevronDownIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-chevron-down ${className}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

//=================================================================
// 6. Helper Component: Waitlist Form (Always Visible)
//=================================================================

const WaitlistForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation variants for each form item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Made the stagger faster for a snappier feel
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-submit

    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // --- Reusable, "clean" input styling ---
  const baseInputClasses =
    "w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white dark:focus:bg-gray-900 transition-all duration-200";

  // Light mode / Dark mode background + border styling
  const lightInputClasses = "bg-gray-100 border-gray-200";
  const darkInputClasses = "dark:bg-gray-800 dark:border-gray-700";

  const inputClasses = `${baseInputClasses} ${lightInputClasses} ${darkInputClasses}`;

  // Custom select styling
  const selectClasses = `${inputClasses} appearance-none pr-10`; // 'appearance-none' removes default OS styling

  return (
    <div className="w-full max-w-2xl  mx-auto">
      <div className="relative w-full rounded-2xl bg-white dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl shadow-purple-500/10 dark:shadow-purple-500/20 p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Get Priority Access
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                Join our first batch of e-commerce brands and unlock exclusive
                early benefits.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* --- Row 1: Name & Email (2-column grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      className={inputClasses}
                    />
                  </motion.div>
                </div>

                {/* --- Row 2: Company & Category (2-column grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* --- NEW: Company Name --- */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                  >
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Your Company Name"
                      required
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                  >
                    <label
                      htmlFor="storeType"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Business Category
                    </label>
                    {/* --- Custom Select Wrapper --- */}
                    <div className="relative">
                      <select
                        name="storeType"
                        id="storeType"
                        required
                        className={selectClasses}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Business Category?
                        </option>
                        <option value="fashion">Fashion & Lifestyle</option>
                        <option value="electronics">
                          Electronics & Gadgets
                        </option>
                        <option value="beauty">
                          Health, Beauty & Wellness
                        </option>
                        <option value="food">Food, Grocery & Beverages</option>
                        <option value="home">Home, Furniture & Decor</option>
                        <option value="sports">
                          Sports, Fitness & Outdoors
                        </option>
                        <option value="baby">Baby, Kids & Toys</option>
                        <option value="art">Art, Gifts & Handmade</option>
                        <option value="automotive">
                          Automotive & Accessories
                        </option>
                        <option value="digital">
                          Digital, Subscription & Services
                        </option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* --- Row 3: Phone (Full Width) --- */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number{" "}
                    <span className="text-gray-500 text-sm">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className={inputClasses}
                  />
                </motion.div>

                {/* --- Row 4: Message (Full Width) --- */}
                {/* --- NEW: Message Textarea --- */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message{" "}
                    <span className="text-gray-500 text-sm">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us a bit about your business or any questions you have..."
                    className={`${inputClasses} min-h-[100px]`}
                    rows="4"
                  ></textarea>
                </motion.div>

                {/* --- Row 5: Submit Button --- */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={6}
                >
                  {/* --- Replaces `AnimatedCTA` --- */}
                  <motion.button
                    type="submit"
                    className="w-full flex-1 group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.03,
                      y: isSubmitting ? 0 : -2,
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Unlock Early Access"
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          ) : (
            <SuccessAnimation />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const InsightsSection = () => {
  const insights = [
    {
      icon: Crown,
      title: "Premium Early Access",
      description: "Get exclusive first-look at revolutionary features and directly shape our product roadmap with your feedback",
      gradient: "from-amber-500 to-orange-600",
      stat: "30+",
      statText: "beta features",
      badge: "Exclusive"
    },
    {
      icon: Users,
      title: "Elite Business Network",
      description: "Connect with 3,200+ industry leaders and innovative retailers in our curated community for strategic partnerships",
      gradient: "from-emerald-600 to-teal-700",
      stat: "3.2K+",
      statText: "businesses",
      badge: "Growing"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Protect your sensitive data with military-grade encryption and compliance frameworks trusted by Fortune 500 companies",
      gradient: "from-slate-700 to-gray-900",
      stat: "99.9%",
      statText: "uptime SLA",
      badge: "Secure"
    },
    {
      icon: Star,
      title: "Dedicated Success Team",
      description: "Receive personalized guidance and strategic support from our expert team dedicated to maximizing your business outcomes",
      gradient: "from-violet-600 to-indigo-700",
      stat: "24/7",
      statText: "premium support",
      badge: "Priority"
    }
  ];

  return (
    <div className="w-full h-full">
      <div className="sticky top-24 space-y-8">

        {/* Insights Grid */}
        <div className="grid gap-6">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-transparent">
                  {/* Subtle gradient border on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative flex items-start space-x-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${insight.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {insight.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${insight.gradient}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

//=================================================================
// 7. Main Component: The Waitlist Section
//=================================================================

const WaitlistSection = ({ id }) => {
  const valueProps = useMemo(
    () => [
      {
        icon: LayoutDashboard,
        title: "Powerful Admin Dashboard",
        description:
          "Manage your entire business from one centralized, intuitive hub.",
      },
      {
        icon: Store,
        title: "Next.js Storefront",
        description:
          "Blazing-fast, SEO-optimized storefronts that customers love.",
      },
      {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description:
          "Gain instant insights into your growth, traffic, and revenue.",
      },
      {
        icon: Database,
        title: "Enterprise-Grade Backend",
        description: "Built on Node.js, MongoDB & Redis for massive scale.",
      },
      {
        icon: Rocket,
        title: "Priority Launch Support",
        description: "Our team will be with you every step of the way. 24/7.",
      },
      {
        icon: ShieldCheck,
        title: "Secure & Scalable",
        description: "Focus on growth, not infrastructure. We handle the rest.",
      },
    ],
    []
  );
  return (
    <section
      id={id}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Animated Particle Background */}
      <BackgroundParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 1. Headline Block */}
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Your Growth Engine is Ready.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Start Scaling Your Business Today
              </span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Our platform is now live — built to help ambitious businesses
              boost conversions, automate operations, and drive predictable
              growth.
              <br className="hidden md:block" />
              Plans start at{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                ₹29,999
              </span>
              .
            </p>
          </FadeIn>

          {/* 2. Trust / FOMO Indicators */}
          <FadeIn delay={200}>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 shadow-sm">
                <span>🔥</span>
                <AnimatedCounter to={10} />
                <span className="text-gray-600 dark:text-gray-300">
                  + entrepreneurs already joined!
                </span>
              </div>
              <div className="hidden md:block h-4 w-px bg-gray-300 dark:bg-white/10"></div>
              <div className="flex items-center gap-2 text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 shadow-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  Accepting a limited number of new clients this month
                </span>

                <span>✨</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3. Plan Highlights (Animated Cards) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100 + 400}>
              <ValueCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </FadeIn>
          ))}
        </div>

        {/* 4. Waitlist Form (Always Visible) */}
        {/* 4. Waitlist Form with Insights (Always Visible) */}
        <FadeIn delay={800}>
          <div className="mt-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Waitlist Form */}
                <div className="w-full">
                  <WaitlistForm />
                </div>

                {/* Insights Section */}
                <div className="w-full">
                  <InsightsSection />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WaitlistSection;
