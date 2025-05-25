"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

export default function AboutPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.section
        id="about"
        className="py-20 bg-black bg-opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-press-start mb-16 text-center text-pixel-pink"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-pixel-yellow">[</span> About Pixellate{" "}
            <span className="text-pixel-yellow">]</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="pixel-border p-4 relative">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-8 h-8 bg-pixel-purple"></div>
                  <div className="col-span-2 h-8 bg-pixel-blue"></div>
                  <div className="col-span-4 h-8 bg-pixel-green"></div>
                  <div className="col-span-2 h-8 bg-pixel-yellow"></div>
                  <div className="col-span-3 h-8 bg-pixel-pink"></div>
                  <div className="col-span-2 h-8 bg-pixel-purple"></div>
                  <div className="col-span-3 h-8 bg-pixel-blue"></div>
                  <div className="col-span-1 h-8 bg-pixel-green"></div>
                  <div className="col-span-6 h-8 bg-pixel-yellow"></div>
                  <div className="col-span-1 h-8 bg-pixel-pink"></div>
                  <div className="col-span-8 h-8 bg-pixel-purple"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-press-start mb-6 text-pixel-green">
                We Love Pixels!
              </h3>
              <p className="text-lg mb-4">
                Founded in 2015 by a team of web developers and retro gaming
                enthusiasts, Pixellate combines cutting-edge web technologies
                with nostalgic pixel art aesthetics.
              </p>
              <p className="text-lg mb-6">
                Our mission is to create websites that stand out from the crowd
                with unique personality and playful interactivity, while
                maintaining professional standards and modern functionality.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pixel-purple mr-3 flex items-center justify-center">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>100+ Projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pixel-blue mr-3 flex items-center justify-center">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>50+ Clients</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pixel-green mr-3 flex items-center justify-center">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>10 Awards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pixel-yellow mr-3 flex items-center justify-center">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>5 Years</span>
                </div>
              </div>

              <Link href="/contact" className="pixel-btn bg-pixel-pink">
                Let's Talk Pixels
              </Link>
            </motion.div>
          </div>

          <div className="mt-20">
            <motion.h3
              className="text-3xl font-press-start mb-12 text-center text-pixel-blue"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Meet The Team
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Pixel",
                  role: "Founder & Lead Designer",
                  icon: "fa-user-astronaut",
                  gradient: "from-pixel-purple to-pixel-blue",
                  description:
                    "Pixel art wizard and UI/UX specialist with a passion for retro gaming aesthetics.",
                },
                {
                  name: "Sam Developer",
                  role: "Senior Developer",
                  icon: "fa-code",
                  gradient: "from-pixel-blue to-pixel-green",
                  description:
                    "Full-stack developer who brings interactive elements to life with clean code.",
                },
                {
                  name: "Maya Artist",
                  role: "Pixel Artist",
                  icon: "fa-paint-brush",
                  gradient: "from-pixel-green to-pixel-yellow",
                  description:
                    "Creates stunning pixel art and animations that give our projects unique character.",
                },
                {
                  name: "Taylor Support",
                  role: "Client Relations",
                  icon: "fa-headset",
                  gradient: "from-pixel-yellow to-pixel-pink",
                  description:
                    "Ensures smooth communication and that every project meets client expectations.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="pixel-card p-6 text-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-4xl`}
                  >
                    <i className={`fas ${member.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-press-start mb-2 text-pixel-yellow">
                    {member.name}
                  </h4>
                  <p className="text-pixel-green mb-2">{member.role}</p>
                  <p className="text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <a
        href="#about"
        className="fixed bottom-6 right-6 w-12 h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
