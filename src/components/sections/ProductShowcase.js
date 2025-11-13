import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
// --- Icons (requires: npm install react-icons) ---
import {
  FiLayout,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiDollarSign,
  FiCheckSquare,
  FiCreditCard,
  FiBarChart2,
  FiSearch,
  FiUser,
  FiArrowUpRight,
  FiArrowDownRight,
  FiEye,
  FiTarget,
  FiPieChart,
  FiExternalLink,
} from "react-icons/fi";

// --- Mock UI Components (Enhanced) ---

const MockBrowser = ({ children }) => (
  <div className="w-full h-full rounded-lg shadow-2xl bg-white dark:bg-gray-800 overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
    <div className="flex items-center h-8 md:h-10 px-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-1 inline-block">
          app.nexus.com
        </div>
      </div>
      <div className="w-10"></div>
    </div>
    <div className="h-[calc(100%-2.5rem)] overflow-y-auto">{children}</div>
  </div>
);
const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
    {/*
        FIX: Removed sm:flex-row. Now always flex-col to fit in narrow
        auto-fit grid columns.
      */}
    <div className="flex flex-col space-y-3">
      <div className="p-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-500 rounded-full self-start">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </div>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </div>
          <div
            className={`text-sm font-semibold ${
              change.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {change}
          </div>
        </div>
      </div>
    </div>
  </div>
);
const MockAdminDashboard = () => {
  return (
    <div className="flex h-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="w-48 bg-white dark:bg-gray-900 p-4 border-r border-gray-200 dark:border-gray-700 block flex-shrink-0">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <span className="font-bold text-lg">Nexus</span>
        </div>
        <nav className="space-y-2">
          {[
            { icon: <FiLayout />, label: "Dashboard", active: true },
            { icon: <FiShoppingCart />, label: "Orders" },
            { icon: <FiCheckSquare />, label: "Products" },
            { icon: <FiUsers />, label: "Customers" },
            { icon: <FiSettings />, label: "Settings" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                item.active
                  ? "bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="w-full flex-1 p-4 overflow-y-auto min-w-0">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 mb-6">
          <StatCard
            icon={<FiDollarSign />}
            title="Revenue"
            value="$45k"
            change="+2.5%"
          />
          <StatCard
            icon={<FiShoppingCart />}
            title="Orders"
            value="1.2k"
            change="+5.1%"
          />
          <StatCard
            icon={<FiCreditCard />}
            title="Conversion"
            value="3.2%"
            change="-0.2%"
          />
        </div>

        {/*
          FIX: Changed "lg:grid-cols-3" to "grid-cols-1" to stack
          charts in the narrow container.
        */}
        <div className="grid grid-cols-1 gap-6">
          <div className="h-64 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <h3 className="font-semibold text-sm mb-2">Sales Over Time</h3>
            <div className="flex items-end h-48 space-x-2 min-w-[300px]">
              {[60, 70, 50, 80, 90, 75, 65, 85].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-indigo-400 dark:bg-indigo-600 rounded-t-sm transition-all hover:bg-indigo-500"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="h-64 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col">
            <h3 className="font-semibold text-sm mb-2 flex-shrink-0">
              Recent Orders
            </h3>
            <div className="space-y-2 overflow-y-auto">
              {[
                { id: "#1024", name: "Alex Johnson", status: "Shipped" },
                { id: "#1023", name: "Maria Garcia", status: "Processing" },
                { id: "#1022", name: "David Smith", status: "Shipped" },
                { id: "#1021", name: "Mei Ling", status: "Delivered" },
                { id: "#1020", name: "Kenji Watanabe", status: "Processing" },
                { id: "#1019", name: "Sarah O'Connor", status: "Delivered" },
              ].map((order) => (
                <div
                  key={order.id}
                  className="flex flex-wrap justify-between items-center gap-2 text-xs p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div>
                    <div className="font-bold">{order.name}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {order.id}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full ${
                      order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MockStorefront = () => (
  <div className="h-full bg-white dark:bg-gray-900 p-0 md:p-6 overflow-y-auto">
    {/* Header */}
    <header className="flex justify-between items-center p-4 md:p-0 mb-6 border-b dark:border-gray-700 pb-4">
      <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
        NEXUS
      </div>
      <nav className="hidden md:flex space-x-6">
        {["Shop", "New", "Skincare", "About"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
        <FiSearch className="h-5 w-5 hover:text-indigo-500 cursor-pointer" />
        <FiShoppingCart className="h-5 w-5 hover:text-indigo-500 cursor-pointer" />
        <FiUser className="h-5 w-5 hover:text-indigo-500 cursor-pointer" />
      </div>
    </header>

    {/* Hero */}
    <div className="h-64 rounded-lg bg-gray-100 dark:bg-gray-800 mb-8 flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          The Rituals Collection
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Discover our new line of sustainable skincare.
        </p>
        <button className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors">
          Shop Now
        </button>
      </div>
    </div>

    {/* Product Grid */}
    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white px-4 md:px-0">
      Best Sellers
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0">
      {[
        { name: "Cleansing Oil", price: "$29" },
        { name: "Hydrating Serum", price: "$42" },
        { name: "Night Cream", price: "$55" },
      ].map((product) => (
        <div key={product.name} className="space-y-2 group cursor-pointer">
          <div className="h-32 md:h-48 rounded-lg bg-gray-100 dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105"></div>
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-500">
            {product.name}
          </h4>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {product.price}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const MockAnalytics = () => (
  <div className="h-full bg-gray-50 dark:bg-gray-800 p-6 text-gray-900 dark:text-white">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <div className="flex items-center space-x-2 p-2 rounded-md border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <span className="text-sm">Last 30 Days</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>

    {/* Stat Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-1">
          <FiEye className="text-indigo-500" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Page Views
          </span>
        </div>
        <span className="text-3xl font-bold">1.2M</span>
        <span className="ml-2 text-sm font-semibold text-green-500 flex items-center">
          <FiArrowUpRight /> 12%
        </span>
      </div>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-1">
          <FiTarget className="text-indigo-500" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Conversion Rate
          </span>
        </div>
        <span className="text-3xl font-bold">4.8%</span>
        <span className="ml-2 text-sm font-semibold text-green-500 flex items-center">
          <FiArrowUpRight /> 0.5%
        </span>
      </div>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-1">
          <FiBarChart2 className="text-indigo-500" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Bounce Rate
          </span>
        </div>
        <span className="text-3xl font-bold">22.1%</span>
        <span className="ml-2 text-sm font-semibold text-red-500 flex items-center">
          <FiArrowDownRight /> 1.2%
        </span>
      </div>
    </div>

    {/* Main Chart */}
    <div className="h-56 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <h3 className="font-semibold text-sm mb-2">Visitors</h3>
      <div className="w-full h-full border-b-2 border-l-2 border-dashed border-gray-300 dark:border-gray-600 relative">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            points="0,60 20,70 40,50 60,80 80,60 100,90 120,70"
            fill="url(#analyticsGradient)"
            stroke="#4f46e5"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            transform="scale(3.5, 1.2) translate(0, -20)"
          />
        </svg>
      </div>
    </div>

    {/* Bottom Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-sm mb-2">Top Referrers</h3>
        <ul className="space-y-2">
          {[
            { site: "google.com", views: "45,102" },
            { site: "twitter.com", views: "22,309" },
            { site: "github.com", views: "10,881" },
          ].map((ref) => (
            <li
              key={ref.site}
              className="flex justify-between items-center text-sm"
            >
              <span className="flex items-center">
                <FiExternalLink className="mr-2 text-gray-400" /> {ref.site}
              </span>
              <span className="font-medium">{ref.views}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-sm mb-2">Traffic Source</h3>
        <div className="flex items-center justify-center h-32">
          <div className="relative w-28 h-28">
            <div className="w-28 h-28 rounded-full bg-conic-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white dark:bg-gray-900"></div>
            <FiPieChart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-indigo-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const ProductShowcase = () => {
  const [activeStep, setActiveStep] = useState("admin");
  const containerRef = useRef(null);

  const steps = useMemo(
    () => [
      {
        id: "admin",
        title: "Powerful Admin Panel",
        description:
          "Manage orders, products, customers, and fulfillment from a single, intuitive dashboard. Built with React and Vite, it's fast, extensible, and a delight to use.",
        Component: MockAdminDashboard,
      },
      {
        id: "storefront",
        title: "Headless & API-First",
        description:
          "Ship a blazingly fast Next.js storefront that customers love. Our headless API-first approach gives you complete control over the user experience on any platform.",
        Component: MockStorefront,
      },
      {
        id: "analytics",
        title: "Actionable Analytics",
        description:
          "Go beyond page views. Understand customer behavior, track conversion funnels, and get real-time insights to drive growth. See what's working and what's not.",
        Component: MockAnalytics,
      },
    ],
    []
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Better step detection with smoother transitions
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(
        Math.floor(latest * steps.length),
        steps.length - 1
      );
      const newStep = steps[stepIndex].id;
      if (newStep !== activeStep) {
        setActiveStep(newStep);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeStep, steps]);

  const visualParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );
  const scrollIndicatorScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section className="pt-32 bg-white dark:bg-black relative">
      {/* Scroll Progress Indicator */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-1/3 max-h-64 w-1 hidden md:block z-10">
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="w-full h-full bg-indigo-500 rounded-full origin-top"
            style={{ scaleY: scrollIndicatorScaleY }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
            A complete toolkit for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              modern commerce
            </span>
            .
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
            From the powerful admin dashboard to your blazingly fast Next.js
            storefront, Nexus provides everything you need to manage and grow
            your business.
          </p>
        </motion.div>

        {/* Showcase Container */}
        <div ref={containerRef} className="relative min-h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
              {/* Left Column - Sticky Visual */}
              <motion.div
                className="relative w-full h-[400px] md:h-[600px]"
                style={{ y: visualParallaxY }}
              >
                <AnimatePresence mode="wait">
                  {steps.map(
                    (step) =>
                      activeStep === step.id && (
                        <motion.div
                          key={step.id}
                          className="absolute inset-0 p-4 md:p-8"
                          initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            rotateY: 0,
                            transition: {
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.95,
                            rotateY: 15,
                            transition: { duration: 0.4, ease: "easeInOut" },
                          }}
                        >
                          <MockBrowser>
                            <step.Component />
                          </MockBrowser>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Right Column - Text Content */}
              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {steps.map(
                    (step) =>
                      activeStep === step.id && (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.6,
                              ease: "easeOut",
                              delay: 0.2,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            x: -30,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">
                              Step{" "}
                              {steps.findIndex((s) => s.id === step.id) + 1}
                            </span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Step Indicators */}
                          <div className="flex gap-2 mt-8">
                            {steps.map((s, i) => (
                              <button
                                key={s.id}
                                onClick={() => {
                                  // This click is just for show; the scroll-linking
                                  // is the primary driver. You'd need a more
                                  // complex "scrollTo" imperative logic
                                  // to make these buttons functional.
                                  // For now, we just update state.
                                  setActiveStep(s.id);
                                }}
                                className="group relative"
                              >
                                <div
                                  className={`h-2 rounded-full transition-all duration-300 ${
                                    s.id === activeStep
                                      ? "w-12 bg-indigo-500"
                                      : "w-2 bg-gray-300 dark:bg-gray-700 group-hover:bg-indigo-300"
                                  }`}
                                ></div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
