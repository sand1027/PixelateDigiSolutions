export default function Services() {
  return (
    <section id="services" className="py-20 bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-press-start mb-16 text-center text-pixel-green">
          <span className="text-pixel-yellow">[</span> Our Services{" "}
          <span className="text-pixel-yellow">]</span>
        </h2>

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
            <p className="text-lg">
              Custom pixel art and retro-inspired UI designs that stand out from
              generic templates. We create unique visual identities with a
              nostalgic twist.
            </p>
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
            <p className="text-lg">
              Modern, responsive websites built with clean code. From simple
              landing pages to complex web applications with retro gaming
              aesthetics.
            </p>
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
            <p className="text-lg">
              Add playful interactivity to your site with custom animations,
              mini-games, and Easter eggs that engage visitors and enhance user
              experience.
            </p>
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
            <p className="text-lg">
              Fully responsive designs that look great on any device. Your
              pixel-perfect website will adapt seamlessly from desktop to
              smartphone.
            </p>
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
            <p className="text-lg">
              Retro-themed online stores with all modern e-commerce
              functionality. We integrate payment systems, inventory management,
              and more.
            </p>
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
            <p className="text-lg">
              Ongoing support and updates to keep your website running smoothly.
              We offer maintenance packages to handle all technical aspects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
