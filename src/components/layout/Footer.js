import React from "react";

const Footer = () => (
  <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Nexus
            </span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Nexus Inc. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
            Product
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#features"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Product Tour
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                API Reference
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;