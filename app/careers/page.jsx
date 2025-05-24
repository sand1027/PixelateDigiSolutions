"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CareersForm from "../components/CareersForm";

import { motion } from "framer-motion";

export default function CareersPage() {
  const jobVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Header />

      <motion.section
        id="careers"
        className="py-20 bg-black bg-opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-press-start mb-16 text-center text-pixel-green"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-pixel-yellow">[</span> Join Pixellate{" "}
            <span className="text-pixel-yellow">]</span>
          </motion.h2>

          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Passionate about pixels and retro gaming? Join our team to create
              innovative, pixel-perfect digital experiences.
            </p>
          </motion.div>

          <div className="mb-20">
            <motion.h3
              className="text-3xl font-press-start mb-12 text-center text-pixel-blue"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Open Positions
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Pixel Artist",
                  description:
                    "Create stunning pixel art and animations for web projects.",
                  requirements: [
                    "Proficiency in pixel art tools",
                    "Strong portfolio",
                    "Attention to detail",
                  ],
                },
                {
                  title: "Web Developer",
                  description:
                    "Build responsive websites with retro aesthetics and modern tech.",
                  requirements: [
                    "Experience with React/Next.js",
                    "Knowledge of APIs",
                    "Clean coding skills",
                  ],
                },
                {
                  title: "UI/UX Designer",
                  description:
                    "Design intuitive, retro-inspired user interfaces.",
                  requirements: [
                    "UI/UX design experience",
                    "Familiarity with Figma",
                    "Creative mindset",
                  ],
                },
                {
                  title: "Project Manager",
                  description:
                    "Oversee projects and ensure timely delivery of pixel-perfect solutions.",
                  requirements: [
                    "Project management skills",
                    "Strong communication",
                    "Tech industry experience",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="pixel-card p-6"
                  variants={jobVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="text-2xl font-press-start mb-4 text-pixel-yellow">
                    {job.title}
                  </h4>
                  <p className="text-lg mb-4">{job.description}</p>
                  <ul className="text-lg list-disc list-inside">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex flex-col lg:flex-row gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="lg:w-1/2"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-press-start mb-6 text-pixel-green">
                Apply Now
              </h3>
              <p className="text-lg mb-8">
                Ready to join the Pixellate team? Fill out the form below to
                apply for one of our open positions. Attach your resume and let
                us know why you're passionate about creating pixel-perfect
                experiences!
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pixel-purple flex items-center justify-center mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-pixel-yellow">Email Us</p>
                    <p>careers@pixellate.dev</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pixel-blue flex items-center justify-center mr-4">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <p className="text-pixel-yellow">Our Office</p>
                    <p>8-Bit Avenue, Pixel Town</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <CareersForm />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      <a
        href="#careers"
        className="fixed bottom-6 right-6 w-12 h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
