import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSnippet() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about-snippet" className="py-20 bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-press-start mb-16 text-center text-pixel-pink"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-pixel-yellow">[</span> Who We Are{" "}
          <span className="text-pixel-yellow">]</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            variants={textVariants}
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
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-press-start mb-6 text-pixel-green">
              Passionate About Pixels
            </h3>
            <p className="text-lg mb-4">
              Pixellate is a team of retro gaming enthusiasts and web experts,
              founded in 2015 to create unique digital experiences.
            </p>
            <p className="text-lg mb-6">
              We combine pixel art aesthetics with modern web technologies to
              deliver websites that are both nostalgic and innovative.
            </p>
            <Link href="/about" className="pixel-btn bg-pixel-pink">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
