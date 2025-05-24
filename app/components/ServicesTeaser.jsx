import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesTeaser() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services-teaser" className="py-20 bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-press-start mb-16 text-center text-pixel-green"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-pixel-yellow">[</span> What We Offer{" "}
          <span className="text-pixel-yellow">]</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-paint-brush",
              title: "Pixel Design",
              color: "pixel-purple",
              description:
                "Custom pixel art and retro UI/UX designs that make your brand stand out.",
            },
            {
              icon: "fa-code",
              title: "Web Development",
              color: "pixel-blue",
              description:
                "Responsive websites and apps with clean code and retro aesthetics.",
            },
            {
              icon: "fa-gamepad",
              title: "Interactive Elements",
              color: "pixel-green",
              description:
                "Engaging animations and mini-games to captivate your audience.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="pixel-card p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 bg-${service.color} flex items-center justify-center mr-4`}
                >
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h3
                  className={`text-2xl font-press-start text-${service.color}`}
                >
                  {service.title}
                </h3>
              </div>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="pixel-btn bg-pixel-green">
            Discover All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
