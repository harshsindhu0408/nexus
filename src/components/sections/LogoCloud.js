import React from "react";
import FadeIn from "../ui/FadeIn";

const LogoCloud = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
          Trusted by the world&apos;ts most innovative companies
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {["Quantum", "Apex", "Stellar", "Momentum", "Orbit", "Evolve"].map(
            (name) => (
              <div
                key={name}
                className="flex justify-center items-center text-xl font-bold text-gray-400 dark:text-gray-600"
              >
                {name}
              </div>
            )
          )}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default LogoCloud;