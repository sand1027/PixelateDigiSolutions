"use client";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-black/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-press-start mb-8 sm:mb-12 md:mb-16 text-center text-green-400">
          <span className="text-yellow-400">[</span> Our Services{" "}
          <span className="text-yellow-400">]</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              icon: "fa-paint-brush",
              title: "Pixel Design",
              color: "purple-500",
              description:
                "Custom pixel art and retro-inspired UI designs that stand out from generic templates. We create unique visual identities with a nostalgic twist.",
            },
            {
              icon: "fa-code",
              title: "Web Development",
              color: "blue-500",
              description:
                "Modern, responsive websites built with clean code. From simple landing pages to complex web applications with retro gaming aesthetics.",
            },
            {
              icon: "fa-gamepad",
              title: "Interactive Elements",
              color: "green-400",
              description:
                "Add playful interactivity to your site with custom animations, mini-games, and Easter eggs that engage visitors and enhance user experience.",
            },
            {
              icon: "fa-mobile-alt",
              title: "Mobile Responsive",
              color: "pink-500",
              description:
                "Fully responsive designs that look great on any device. Your pixel-perfect website will adapt seamlessly from desktop to smartphone.",
            },
            {
              icon: "fa-shopping-cart",
              title: "E-Commerce",
              color: "yellow-400",
              description:
                "Retro-themed online stores with all modern e-commerce functionality. We integrate payment systems, inventory management, and more.",
            },
            {
              icon: "fa-wrench",
              title: "Maintenance",
              color: "purple-500",
              description:
                "Ongoing support and updates to keep your website running smoothly. We offer maintenance packages to handle all technical aspects.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 border-4 border-black p-4 sm:p-6 md:p-8 shadow-[8px_8px_0_0_#000]"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-${service.color} flex items-center justify-center mr-3 sm:mr-4 rounded-sm`}
                >
                  <i
                    className={`fas ${service.icon} text-xl sm:text-2xl text-white`}
                  ></i>
                </div>
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-press-start text-${service.color}`}
                >
                  {service.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
