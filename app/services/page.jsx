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
            <div className="flex justify-center gap-2 scale-75 sm:scale-100">
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 animate-bounce"></span>
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 animate-bounce delay-100"></span>
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 animate-bounce delay-200"></span>
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 animate-bounce delay-300"></span>
            </div>
            <p className="text-green-400 mt-4 sm:mt-8 text-base sm:text-xl md:text-2xl font-press-start">
              Loading Services...
            </p>
          </div>
        </div>
      )}

      <motion.section
        id="services"
        className="pt-16 sm:pt-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-press-start mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400">[</span> Our Services{" "}
            <span className="text-yellow-400">]</span>
          </motion.h2>

          <motion.div
            className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-white">
              We craft pixel-perfect websites and digital experiences with a
              retro vibe and modern performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
              {
                title: "E-Commerce Solutions",
                description:
                  "Build pixelated online stores with seamless functionality.",
                icon: "fas fa-shopping-cart",
              },
              {
                title: "Game Development",
                description:
                  "Retro-style games with modern mechanics for web and mobile.",
                icon: "fas fa-gamepad",
              },
              {
                title: "SEO & Marketing",
                description:
                  "Boost your online presence with pixel-perfect strategies.",
                icon: "fas fa-chart-line",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 border-4 border-black p-4 sm:p-5 md:p-6 text-center shadow-[8px_8px_0_0_#000]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <i
                  className={`${service.icon} text-2xl sm:text-3xl md:text-4xl text-yellow-400 mb-2 sm:mb-3 md:mb-4`}
                  aria-hidden="true"
                ></i>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-press-start mb-2 sm:mb-3 md:mb-4 text-yellow-400">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 sm:mt-16 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-press-start mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-blue-500">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: "Retro Meets Modern",
                  description:
                    "We blend nostalgic pixel art with cutting-edge tech.",
                  icon: "fas fa-cogs",
                },
                {
                  title: "Tailored Solutions",
                  description:
                    "Every project is customized to fit your vision.",
                  icon: "fas fa-puzzle-piece",
                },
                {
                  title: "Fast Turnaround",
                  description:
                    "We deliver high-quality work on tight deadlines.",
                  icon: "fas fa-clock",
                },
                {
                  title: "Client-Centric",
                  description: "Your satisfaction is our top priority.",
                  icon: "fas fa-heart",
                },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 border-4 border-black p-4 sm:p-5 md:p-6 text-center shadow-[8px_8px_0_0_#000]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <i
                    className={`${reason.icon} text-2xl sm:text-3xl md:text-4xl text-blue-500 mb-2 sm:mb-3 md:mb-4`}
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-press-start mb-2 sm:mb-3 md:mb-4 text-blue-500">
                    {reason.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <a
        href="#services"
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-500 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up text-xs sm:text-sm md:text-base text-white"></i>
      </a>
    </>
  );
}
