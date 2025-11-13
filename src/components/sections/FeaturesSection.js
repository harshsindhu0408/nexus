import React from "react";
import FadeIn from "../ui/FadeIn";

const FeaturesSection = () => {
  const features = [
    {
      title: "Blazing Fast Speed",
      description:
        "Next.js frontend, global CDN, and Redis caching deliver sub-50ms response times.",
    },
    {
      title: "Infinitely Scalable",
      description:
        "Built on Node.js, Express, and MongoDB, our backend scales horizontally to millions of users.",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Secure payments, data encryption, and role-based access control come standard.",
    },
    {
      title: "Modern Tech Stack",
      description:
        "We use the best tools for the job, so you can focus on building.",
      large: true,
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Redis", "Vite"],
    },
    {
      title: "Total Customization",
      description:
        "Our API-first design means you have full control to build unique, branded experiences.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Limitless Scale
              </span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Our infrastructure is built to handle explosive growth without
              breaking a sweat.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 100}>
              <div
                className={`p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all ${
                  feature.large ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
                {feature.tech && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {feature.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;