"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesTeaser() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="services-teaser"
      className="py-12 sm:py-16 lg:py-20 bg-black/90"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-press-start mb-8 sm:mb-12 md:mb-16 text-center text-green-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-400">[</span> What We Offer{" "}
          <span className="text-yellow-400">]</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              icon: "fa-paint-brush",
              title: "Pixel Design",
              color: "purple-500",
              description:
                "Custom pixel art and retro UI/UX designs that make your brand stand out.",
            },
            {
              icon: "fa-code",
              title: "Web Development",
              color: "blue-500",
              description:
                "Responsive websites and apps with clean code and retro aesthetics.",
            },
            {
              icon: "fa-gamepad",
              title: "Interactive Elements",
              color: "green-400",
              description:
                "Engaging animations and mini-games to captivate your audience.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border-4 border-black p-4 sm:p-6 md:p-8 shadow-[8px_8px_0_0_#000]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-${service.color} flex items-center justify-center mr-3 sm:mr-4 rounded-sm`}
                >
                  <i
                    className={`fas ${service.icon} text-xl sm:text-2xl text-white`}
                  ></i>
                </div>
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-press-start text-${service.color}`}
                >
                  {service.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-green-400 text-white text-sm sm:text-base md:text-lg font-mono uppercase border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            Discover All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
