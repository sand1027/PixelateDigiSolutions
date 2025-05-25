"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesTeaser from "./components/ServicesTeaser";
import PortfolioHighlight from "./components/PortfolioHighlight";
import AboutSnippet from "./components/AboutSnippet";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          id="loading"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="pixel-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="text-pixel-green mt-8 text-2xl">
              Loading Pixellate...
            </p>
          </div>
        </div>
      )}

      <Hero />
      <ServicesTeaser />
      <PortfolioHighlight />
      <AboutSnippet />
      <section id="contact" className="py-20 bg-pixel-dark pixel-grid">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-press-start mb-16 text-center text-pixel-purple">
            <span className="text-pixel-yellow">[</span> Get In Touch{" "}
            <span className="text-pixel-yellow">]</span>
          </h2>
          <ContactForm />
        </div>
      </section>

      <a
        href="#home"
        className="fixed bottom-6 right-6 w-12 h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
