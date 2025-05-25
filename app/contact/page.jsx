"use client";
import Link from "next/link";

import ContactForm from "../components/ContactForm";

import { motion } from "framer-motion";

export default function ContactPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.section
        id="contact"
        className="py-20 bg-pixel-dark pixel-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-press-start mb-16 text-center text-pixel-purple"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-pixel-yellow">[</span> Get In Touch{" "}
            <span className="text-pixel-yellow">]</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-press-start mb-6 text-pixel-green">
                Ready to start your pixel-perfect project?
              </h3>
              <p className="text-lg mb-8">
                Fill out the form or contact us directly. We'd love to hear
                about your ideas and how we can bring them to life with our
                unique blend of retro style and modern web technology.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pixel-purple flex items-center justify-center mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-pixel-yellow">Email Us</p>
                    <p>hello@pixellate.dev</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pixel-blue flex items-center justify-center mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-pixel-yellow">Call Us</p>
                    <p>+1 (555) PIX-ELME</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pixel-green flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-pixel-yellow">Visit Us</p>
                    <p>8-Bit Avenue, Pixel Town</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-press-start mb-4 text-pixel-pink">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-pixel-purple flex items-center justify-center"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-pixel-blue flex items-center justify-center"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-pixel-green flex items-center justify-center"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-pixel-yellow flex items-center justify-center"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
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
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <a
        href="#contact"
        className="fixed bottom-6 right-6 w-12 h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
