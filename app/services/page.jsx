"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          id="loading"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="pixel-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="text-pixel-green mt-8 text-xl sm:text-2xl">
              Loading Services...
            </p>
          </div>
        </div>
      )}

      <Header />

      <motion.section
        id="services"
        className="py-12 sm:py-20 bg-black bg-opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl sm:text-4xl font-press-start mb-8 sm:mb-16 text-center text-pixel-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pixel-yellow">[</span> Our Services{" "}
            <span className="text-pixel-yellow">]</span>
          </motion.h2>

          <motion.div
            className="mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto">
              We craft pixel-perfect websites and digital experiences with a
              retro vibe and modern performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Responsive websites built with Next.js and Tailwind CSS.",
                icon: "fas fa-code",
              },
              {
                title: "Pixel Art Design",
                description:
                  "Custom pixel art and animations for unique branding.",
                icon: "fas fa-paint-brush",
              },
              {
                title: "UI/UX Design",
                description: "Intuitive interfaces with a retro aesthetic.",
                icon: "fas fa-desktop",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="pixel-card p-4 sm:p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <i
                  className={`${service.icon} text-3xl sm:text-4xl text-pixel-yellow mb-3 sm:mb-4`}
                ></i>
                <h4 className="text-lg sm:text-2xl font-press-start mb-3 sm:mb-4 text-pixel-yellow">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />

      <a
        href="#services"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up text-sm sm:text-base"></i>
      </a>
    </>
  );
}
