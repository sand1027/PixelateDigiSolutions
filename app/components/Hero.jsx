"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-press-start mb-4 sm:mb-6 text-yellow-400"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-blue-600">PIXEL</span>
          <span className="text-pink-500">LATE</span>
          <span className="text-green-400"> YOUR</span>
          <span className="text-purple-500"> VISION</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto text-white"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Transform your digital presence with retro-inspired, pixel-perfect
          websites that blend nostalgic charm with cutting-edge technology.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white text-sm sm:text-base font-mono uppercase border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            Start Your Project
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white text-sm sm:text-base font-mono uppercase border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            Explore Our Work
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-12 md:mt-20"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-2xl sm:text-3xl md:text-4xl text-green-400"></i>
        </motion.div>
      </div>
    </motion.section>
  );
}
