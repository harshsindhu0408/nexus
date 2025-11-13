import React, { useState, useEffect, useRef } from "react";
import FadeIn from "../ui/FadeIn";
import MockBrowser from "../ui/MockBrowser";
import { MockAdminDashboard, MockStorefront, MockAnalytics } from "../ui/MockComponents";

const ProductShowcase = () => {
  const [activeStep, setActiveStep] = useState("admin");
  const steps = [
    {
      id: "admin",
      title: "Powerful Admin Panel",
      description:
        "Manage every aspect of your business from a single, intuitive dashboard. Built with React and Vite, it's fast, extensible, and a delight to use.",
    },
    {
      id: "storefront",
      title: "Headless & Fast",
      description:
        "Ship a blazingly fast Next.js storefront that customers love. Our headless API-first approach gives you complete control over the user experience.",
    },
    {
      id: "analytics",
      title: "Actionable Analytics",
      description:
        "Go beyond page views. Understand customer behavior, track conversion funnels, and get real-time insights to drive growth.",
    },
  ];

  const stepRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStep(entry.target.dataset.step);
        }
      });
    }, options);

    const currentRefs = stepRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [steps]);

  return (
    <section id="product" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
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
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24 w-full h-[450px] md:h-[600px]">
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeStep === "admin" ? "opacity-100" : "opacity-0"
              }`}
            >
              <MockBrowser>
                <MockAdminDashboard />
              </MockBrowser>
            </div>

            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeStep === "storefront" ? "opacity-100" : "opacity-0"
              }`}
            >
              <MockBrowser>
                <MockStorefront />
              </MockBrowser>
            </div>

            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeStep === "analytics" ? "opacity-100" : "opacity-0"
              }`}
            >
              <MockBrowser>
                <MockAnalytics />
              </MockBrowser>
            </div>
          </div>

          <div className="lg:pt-16 space-y-32">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                data-step={step.id}
                className="h-[300px] flex items-center"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    activeStep === step.id ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <h3 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;