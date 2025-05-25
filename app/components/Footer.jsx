"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Quote request sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send quote request.");
      }
    } catch (error) {
      setStatus("Error: Failed to send quote request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer
      className="bg-black bg-opacity-90 py-8 sm:py-12 md:py-16 w-full max-w-none border-t-4 border-pixel-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-9">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-press-start text-pixel-green mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "About", href: "/about" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-white hover:text-pixel-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-press-start text-pixel-green mb-3 sm:mb-4">
            Connect
          </h3>
          <div className="flex space-x-3 sm:space-x-4">
            {[
              {
                name: "Twitter/X",
                icon: "fab fa-x-twitter",
                href: "https://x.com/pixellate",
              },
              {
                name: "LinkedIn",
                icon: "fab fa-linkedin",
                href: "https://linkedin.com/company/pixellate",
              },
              {
                name: "GitHub",
                icon: "fab fa-github",
                href: "https://github.com/pixellate",
              },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl md:text-3xl text-pixel-blue hover:text-pixel-yellow"
                aria-label={social.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-press-start text-pixel-green mb-3 sm:mb-4">
            Get in Touch
          </h3>
          <p className="text-sm sm:text-base">
            Email:{" "}
            <a
              href="mailto:contact@pixellate.dev"
              className="text-white hover:text-pixel-yellow transition-colors duration-300"
            >
              contact@pixellate.dev
            </a>
          </p>
          <p className="text-sm sm:text-base mt-2">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-white hover:text-pixel-yellow transition-colors duration-300"
            >
              +1 (234) 567-890
            </a>
          </p>
        </motion.div>

        {/* Request Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-press-start text-pixel-green mb-3 sm:mb-4">
            Request Quote
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pixel-input text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full pixel-input text-sm sm:text-base"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Project"
              className="w-full pixel-input text-sm sm:text-base h-20 sm:h-24"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="pixel-btn bg-pixel-green text-sm sm:text-base w-full disabled:opacity-50"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isSubmitting ? "Sending..." : "Request Quote"}
            </motion.button>
          </form>
          {status && (
            <p
              className={`text-sm sm:text-base mt-2 ${
                status.includes("successfully")
                  ? "text-pixel-green"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </motion.div>
      </div>

      {/* Copyright and Badge */}
      <motion.div
        className="mt-6 sm:mt-8 pt-4 border-t-2 border-pixel-yellow text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-xs sm:text-sm text-white">
          © {new Date().getFullYear()} Pixellate Web Design & Development. All
          rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-pixel-pink mt-2">
          Powered by{" "}
          <span className="font-press-start text-pixel-yellow">Pixellate</span>{" "}
          with <i className="fas fa-heart text-pixel-pink"></i>
        </p>
      </motion.div>
    </motion.footer>
  );
}
