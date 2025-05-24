import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      className="bg-black py-12 border-t-4 border-pixel-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="pacman mr-3"></div>
            <span className="text-2xl font-press-start text-pixel-yellow">
              Pixellate
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/careers" className="nav-link">
              Careers
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div>
            <Link href="/contact" className="pixel-btn bg-pixel-green">
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © 2025 Pixellate Web Design & Development. All rights reserved. Made
            with <i className="fas fa-heart text-pixel-pink"></i> and pixels.
          </p>

          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" className="text-xs font-press-start">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs font-press-start">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs font-press-start">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
