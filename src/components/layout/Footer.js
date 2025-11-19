// components/layout/Footer.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });

      // Update URL
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "features" },
      { name: "Pricing", href: "pricing" },
      { name: "Product Tour", href: "product" },
    ],
    insights: [
      { name: "Case Studies", href: "case-studies" },
      { name: "Analytics", href: "analytics" },
      { name: "Reports", href: "reports" },
    ],
    connect: [
      { name: "Contact", href: "contact" },
      { name: "Demo", href: "demo" },
      { name: "Support", href: "support" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/5 to-gray-100/5 dark:via-gray-900/5 dark:to-gray-800/5 backdrop-blur-xl" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-2 mb-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Nexus
                </span>
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 max-w-md"
            >
              Building the future of digital experiences with cutting-edge
              technology and elegant design.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={`#${link.href}`}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-all duration-300 group flex items-center"
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <span className="group-hover:text-indigo-500 transition-colors">
                          {link.name}
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-200/50 dark:border-gray-700/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Nexus Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Cookies
            </a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-500/50 transition-all duration-300 group"
          >
            <ArrowUp className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
