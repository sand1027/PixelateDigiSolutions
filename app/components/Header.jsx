import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-pixel-dark bg-opacity-95 z-40 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-press-start text-pixel-green"
        >
          Pixellate
        </Link>

        <button
          className="sm:hidden text-pixel-yellow focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
          ></i>
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:static top-full left-0 right-0 bg-pixel-dark sm:bg-transparent sm:items-center gap-4 sm:gap-8 p-4 sm:p-0`}
        >
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/products" className="nav-link">
            Products
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/careers" className="nav-link">
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
}
