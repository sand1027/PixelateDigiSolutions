import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-pixel-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-press-start mb-16 text-center text-pixel-blue">
          <span className="text-pixel-yellow">[</span> Pixel Perfect Portfolio{" "}
          <span className="text-pixel-yellow">]</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="pixel-card overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-pixel-purple to-pixel-blue flex items-center justify-center">
              <div className="pacman"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-pixel-green"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-press-start mb-2 text-pixel-yellow">
                Retro Game Store
              </h3>
              <p className="mb-4">
                E-commerce site for classic gaming merchandise with interactive
                product displays.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pixel-purple text-xs font-press-start">
                  Pixel Design
                </span>
                <span className="px-3 py-1 bg-pixel-blue text-xs font-press-start">
                  E-Commerce
                </span>
                <span className="px-3 py-1 bg-pixel-green text-xs font-press-start">
                  Animation
                </span>
              </div>
            </div>
          </div>

          <div className="pixel-card overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-pixel-green to-pixel-yellow flex items-center justify-center">
              <div className="grid grid-cols-8 gap-1 w-32 h-32">
                <div className="bg-pixel-purple"></div>
                <div className="bg-pixel-blue"></div>
                <div className="bg-pixel-green"></div>
                <div className="bg-pixel-yellow"></div>
                <div className="bg-pixel-pink"></div>
                <div className="bg-pixel-purple"></div>
                <div className="bg-pixel-blue"></div>
                <div className="bg-pixel-green"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-pixel-blue"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-press-start mb-2 text-pixel-yellow">
                Pixel Art Gallery
              </h3>
              <p className="mb-4">
                Interactive showcase for digital artists specializing in pixel
                art.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pixel-purple text-xs font-press-start">
                  Gallery
                </span>
                <span className="px-3 py-1 bg-pixel-blue text-xs font-press-start">
                  Animation
                </span>
                <span className="px-3 py-1 bg-pixel-pink text-xs font-press-start">
                  UI/UX
                </span>
              </div>
            </div>
          </div>

          <div className="pixel-card overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-pixel-pink to-pixel-purple flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-4 border-pixel-yellow animate-spin-slow"></div>
                <div className="absolute inset-4 border-4 border-pixel-green animate-spin-slow-reverse"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-pixel-yellow"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-press-start mb-2 text-pixel-yellow">
                Indie Game Studio
              </h3>
              <p className="mb-4">
                Website for an independent game development studio with playable
                demos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pixel-purple text-xs font-press-start">
                  WebGL
                </span>
                <span className="px-3 py-1 bg-pixel-blue text-xs font-press-start">
                  Games
                </span>
                <span className="px-3 py-1 bg-pixel-green text-xs font-press-start">
                  Interactive
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="pixel-btn bg-pixel-purple">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
