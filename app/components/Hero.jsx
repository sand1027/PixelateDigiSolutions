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
      className="relative overflow-hidden min-h-screen flex items-center justify-center pixel-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-press-start mb-6 text-pixel-yellow"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-pixel-blue">PIXEL</span>
          <span className="text-pixel-pink">LATE</span>
          <span className="text-pixel-green"> YOUR</span>
          <span className="text-pixel-purple"> VISION</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Transform your digital presence with retro-inspired, pixel-perfect
          websites that blend nostalgic charm with cutting-edge technology.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link href="/contact" className="pixel-btn bg-pixel-purple">
            Start Your Project
          </Link>
          <Link href="/portfolio" className="pixel-btn bg-pixel-blue">
            Explore Our Work
          </Link>
        </motion.div>

        <motion.div
          className="mt-20 animate-bounce"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-3xl text-pixel-green"></i>
        </motion.div>
      </div>
    </motion.section>
  );
}
