import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PacmanAnimation from "../components/PacmanAnimation";

export default function ServicesPage() {
  return (
    <div className="bg-pixel-dark text-white font-vt323 min-h-screen">
      <Head>
        <title>PixelCraft | Our Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <PacmanAnimation />
      <Header />

      <section id="services" className="py-20 bg-black bg-opacity-90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-press-start mb-16 text-center text-pixel-green">
            <span className="text-pixel-yellow">[</span> Our Services{" "}
            <span className="text-pixel-yellow">]</span>
          </h2>

          <div className="mb-12 text-center">
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              At PixelCraft, we specialize in creating pixel-perfect digital
              experiences with a retro gaming aesthetic. Explore our
              comprehensive services below to see how we can bring your vision
              to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="pixel-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pixel-purple flex items-center justify-center mr-4">
                  <i className="fas fa-paint-brush text-2xl"></i>
                </div>
                <h3 className="text-2xl font-press-start text-pixel-purple">
                  Pixel Design
                </h3>
              </div>
              <p className="text-lg mb-4">
                Our pixel design service delivers custom, retro-inspired UI/UX
                designs that capture the charm of classic video games. We create
                unique visual identities tailored to your brand.
              </p>
              <ul className="text-lg list-disc list-inside">
                <li>Custom pixel art assets</li>
                <li>Retro-inspired UI/UX design</li>
                <li>Brand identity development</li>
              </ul>
            </div>

            <div className="pixel-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pixel-blue flex items-center justify-center mr-4">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <h3 className="text-2xl font-press-start text-pixel-blue">
                  Web Development
                </h3>
              </div>
              <p className="text-lg mb-4">
                We build modern, responsive websites with clean, efficient code,
                blending retro aesthetics with cutting-edge technology.
              </p>
              <ul className="text-lg list-disc list-inside">
                <li>Responsive web development</li>
                <li>Custom web applications</li>
                <li>API integrations</li>
              </ul>
            </div>

            <div className="pixel-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pixel-green flex items-center justify-center mr-4">
                  <i className="fas fa-gamepad text-2xl"></i>
                </div>
                <h3 className="text-2xl font-press-start text-pixel-green">
                  Interactive Elements
                </h3>
              </div>
              <p className="text-lg mb-4">
                Engage your audience with playful, interactive features inspired
                by retro gaming, such as animations and mini-games.
              </p>
              <ul className="text-lg list-disc list-inside">
                <li>Custom animations</li>
                <li>Interactive mini-games</li>
                <li>Easter egg features</li>
              </ul>
            </div>

            <div className="pixel-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pixel-pink flex items-center justify-center mr-4">
                  <i className="fas fa-mobile-alt text-2xl"></i>
                </div>
                <h3 className="text-2xl font-press-start text-pixel-pink">
                  Mobile Responsive
                </h3>
              </div>
              <p className="text-lg mb-4">
                Our responsive designs ensure your website looks stunning and
                functions perfectly on any device, from desktops to smartphones.
              </p>
              <ul className="text-lg list-disc list-inside">
                <li>Mobile-first design</li>
                <li>Cross-device compatibility</li>
                <li>Optimized performance</li>
              </ul>
            </div>

            <div className="pixel-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pixel-yellow flex items-center justify-center mr-4">
                  <i className="fas fa-shopping-cart text-2xl"></i>
                </div>
                <h3 className="text-2xl font-press-start text-pixel-yellow">
                  E-Commerce
                </h3>
              </div>
              <p className="text-lg mb-4">
                Launch a retro-themed online store with all the modern
                e-commerce features you need to succeed.
              </p>
              <ul className="text-lg list-disc list-inside">
                <li>Payment gateway integration</li>
                <li>Inventory management</li>
                <li>Secure checkout systems</li>
              </ul>
            </div>

            <div className="pixel-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pixel-purple flex items-center justify-center mr-4">
                  <i className="fas fa-wrench text-2xl"></i>
                </div>
                <h3 className="text-2xl font-press-start text-pixel-purple">
                  Maintenance
                </h3>
              </div>
              <p className="text-lg mb-4">
                Keep your website running smoothly with our ongoing support and
                maintenance packages.
              </p>
              <ul className="text-lg list-disc list-inside">
                <li>Regular updates</li>
                <li>Security monitoring</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="pixel-btn bg-pixel-purple">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="#services"
        className="fixed bottom-6 right-6 w-12 h-12 bg-pixel-purple flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}
