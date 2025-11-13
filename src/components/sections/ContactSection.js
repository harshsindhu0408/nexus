import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                Let's build the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  next big thing
                </span>
                , together.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Whether you're migrating an existing enterprise or starting from
                scratch, our team is ready to help. Book a demo to see Nexus in
                action.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300">
                  "Nexus completely transformed how we think about e-commerce.
                  The speed and flexibility are unmatched."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0"></div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Jane Doe
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CTO, Quantum
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
              {isSubmitted ? (
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've received your request and will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1 block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-300"
                    >
                      Book Your Demo
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;