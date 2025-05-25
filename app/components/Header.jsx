"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 z-40 shadow-lg">
      <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-press-start text-green-400"
        >
          PixeLate
        </Link>

        <button
          className="sm:hidden text-yellow-400 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i
            className={`fas ${
              isMenuOpen ? "fa-times" : "fa-bars"
            } text-xl sm:text-2xl`}
          ></i>
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:static top-full left-0 right-0 bg-gray-900 sm:bg-transparent sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-0 border-t-2 sm:border-t-0 border-yellow-400`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Products", href: "/products" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Careers", href: "/careers" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm sm:text-base md:text-lg text-white hover:text-green-400 transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
