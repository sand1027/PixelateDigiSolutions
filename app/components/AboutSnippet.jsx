"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSnippet() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about-snippet" className="py-12 sm:py-16 lg:py-20 bg-black/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-press-start mb-8 sm:mb-12 md:mb-16 text-center text-pink-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-400">[</span> Who We Are{" "}
          <span className="text-yellow-400">]</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="border-4 border-black p-3 sm:p-4 shadow-[8px_8px_0_0_#000] relative">
              <div className="grid grid-cols-8 gap-1">
                <div className="col-span-8 h-6 sm:h-8 bg-purple-500"></div>
                <div className="col-span-2 h-6 sm:h-8 bg-blue-500"></div>
                <div className="col-span-4 h-6 sm:h-8 bg-green-400"></div>
                <div className="col-span-2 h-6 sm:h-8 bg-yellow-400"></div>
                <div className="col-span-3 h-6 sm:h-8 bg-pink-500"></div>
                <div className="col-span-2 h-6 sm:h-8 bg-purple-500"></div>
                <div className="col-span-3 h-6 sm:h-8 bg-blue-500"></div>
                <div className="col-span-1 h-6 sm:h-8 bg-green-400"></div>
                <div className="col-span-6 h-6 sm:h-8 bg-yellow-400"></div>
                <div className="col-span-1 h-6 sm:h-8 bg-pink-500"></div>
                <div className="col-span-8 h-6 sm:h-8 bg-purple-500"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-press-start mb-4 sm:mb-6 text-green-400">
              Passionate About Pixels
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white mb-3 sm:mb-4">
              Pixellate is a team of retro gaming enthusiasts and web experts,
              founded in 2015 to create unique digital experiences.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6">
              We combine pixel art aesthetics with modern web technologies to
              deliver websites that are both nostalgic and innovative.
            </p>
            <Link
              href="/about"
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-pink-500 text-white text-sm sm:text-base md:text-lg font-mono uppercase border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
