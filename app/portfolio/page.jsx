"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Header />

      <motion.section
        id="portfolio"
        className="py-20 bg-pixel-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-press-start mb-16 text-center text-pixel-blue"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-pixel-yellow">[</span> Pixel Perfect Portfolio{" "}
            <span className="text-pixel-yellow">]</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retro Game Store",
                gradient: "from-pixel-purple to-pixel-blue",
                tags: ["Pixel Design", "E-Commerce", "Animation"],
                description:
                  "E-commerce site for classic gaming merchandise with interactive product displays.",
              },
              {
                title: "Pixel Art Gallery",
                gradient: "from-pixel-green to-pixel-yellow",
                tags: ["Gallery", "Animation", "UI/UX"],
                description:
                  "Interactive showcase for digital artists specializing in pixel art.",
              },
              {
                title: "Indie Game Studio",
                gradient: "from-pixel-pink to-pixel-purple",
                tags: ["WebGL", "Games", "Interactive"],
                description:
                  "Website for an independent game development studio with playable demos.",
              },
              {
                title: "8-Bit Blog",
                gradient: "from-pixel-blue to-pixel-green",
                tags: ["Blog", "Animation", "Content"],
                description:
                  "A retro-styled blog platform with dynamic content and pixel art visuals.",
              },
              {
                title: "Pixel Cafe",
                gradient: "from-pixel-yellow to-pixel-pink",
                tags: ["E-Commerce", "UI/UX", "Responsive"],
                description:
                  "Online ordering system for a retro-themed cafe with pixelated menus.",
              },
              {
                title: "Arcade Hub",
                gradient: "from-pixel-purple to-pixel-green",
                tags: ["Games", "Interactive", "WebGL"],
                description:
                  "A portal for browser-based arcade games with leaderboards and social features.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="pixel-card overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <div className="pacman"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pixel-green"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-press-start mb-2 text-pixel-yellow">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-${
                          ["pixel-purple", "pixel-blue", "pixel-green"][i % 3]
                        } text-xs font-press-start`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="pixel-btn bg-pixel-purple">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      <a
        href="#portfolio"
        className="fixed bottom-6 right-6 w-12 h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
