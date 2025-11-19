// app/page.tsx
"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import ProductShowcase from "@/components/sections/ProductShowcase";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  useEffect(() => {
    // Smooth scroll handler for hash links
    const handleHashClick = (e) => {
      const target = e.target;
      if (target.hash && target.pathname === window.location.pathname) {
        e.preventDefault();
        const targetId = target.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = 80; // Adjust based on your header height
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Update URL without jumping
          window.history.pushState(null, "", target.hash);
        }
      }
    };

    // Handle initial hash on page load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          const headerHeight = 80;
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }, 100);
      }
    }

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Header />
      <main>
        <HeroSection id="hero" />
        <LogoCloud id="insights" />
        <ProductShowcase id="product" />
        <FeaturesSection id="features" />
        <PricingSection id="pricing" />
        <ContactSection id="contact" />
        <TestimonialsSection id="testimonials" />
      </main>
      <Footer />
    </div>
  );
}
