import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-press-start mb-16 text-center text-pixel-pink">
          <span className="text-pixel-yellow">[</span> About PixelCraft{" "}
          <span className="text-pixel-yellow">]</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
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
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-3xl font-press-start mb-6 text-pixel-green">
              We Love Pixels!
            </h3>
            <p className="text-lg mb-4">
              Founded in 2015 by a team of web developers and retro gaming
              enthusiasts, PixelCraft combines cutting-edge web technologies
              with nostalgic pixel art aesthetics.
            </p>
            <p className="text-lg mb-6">
              Our mission is to create websites that stand out from the crowd
              with unique personality and playful interactivity, while
              maintaining professional standards and modern functionality.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pixel-purple mr-3 flex items-center justify-center">
                  <i className="fas fa-check"></i>
                </div>
                <span>100+ Projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pixel-blue mr-3 flex items-center justify-center">
                  <i className="fas fa-check"></i>
                </div>
                <span>50+ Clients</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pixel-green mr-3 flex items-center justify-center">
                  <i className="fas fa-check"></i>
                </div>
                <span>10 Awards</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pixel-yellow mr-3 flex items-center justify-center">
                  <i className="fas fa-check"></i>
                </div>
                <span>5 Years</span>
              </div>
            </div>

            <Link href="#contact" className="pixel-btn bg-pixel-pink">
              Let's Talk Pixels
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-press-start mb-12 text-center text-pixel-blue">
            Meet The Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="pixel-card p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-full flex items-center justify-center text-4xl">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <h4 className="text-xl font-press-start mb-2 text-pixel-yellow">
                Alex Pixel
              </h4>
              <p className="text-pixel-green mb-2">Founder & Lead Designer</p>
              <p className="text-sm">
                Pixel art wizard and UI/UX specialist with a passion for retro
                gaming aesthetics.
              </p>
            </div>

            <div className="pixel-card p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pixel-blue to-pixel-green rounded-full flex items-center justify-center text-4xl">
                <i className="fas fa-code"></i>
              </div>
              <h4 className="text-xl font-press-start mb-2 text-pixel-yellow">
                Sam Developer
              </h4>
              <p className="text-pixel-green mb-2">Senior Developer</p>
              <p className="text-sm">
                Full-stack developer who brings interactive elements to life
                with clean code.
              </p>
            </div>

            <div className="pixel-card p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pixel-green to-pixel-yellow rounded-full flex items-center justify-center text-4xl">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h4 className="text-xl font-press-start mb-2 text-pixel-yellow">
                Maya Artist
              </h4>
              <p className="text-pixel-green mb-2">Pixel Artist</p>
              <p className="text-sm">
                Creates stunning pixel art and animations that give our projects
                unique character.
              </p>
            </div>

            <div className="pixel-card p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pixel-yellow to-pixel-pink rounded-full flex items-center justify-center text-4xl">
                <i className="fas fa-headset"></i>
              </div>
              <h4 className="text-xl font-press-start mb-2 text-pixel-yellow">
                Taylor Support
              </h4>
              <p className="text-pixel-green mb-2">Client Relations</p>
              <p className="text-sm">
                Ensures smooth communication and that every project meets client
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
